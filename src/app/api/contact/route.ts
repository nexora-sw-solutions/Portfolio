import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, ContactApiResponse } from "@/lib/schemas/contact";
import { sendEmail } from "@/lib/resend";
import { ProjectInquiry } from "@/emails/ProjectInquiry";
import { AutoReply } from "@/emails/AutoReply";
import React from "react";

// ---------------------------------------------------------------------------
// 1. In-Memory Token Bucket Rate Limiter (5 requests per hour per IP)
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

// ---------------------------------------------------------------------------
// 2. In-Memory Message Deduplication Cache (15-minute window)
// ---------------------------------------------------------------------------
const dedupeMap = new Map<string, number>();
const DEDUPE_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isDuplicate(email: string, subject: string, message: string): boolean {
  const now = Date.now();
  const hash = `${email.toLowerCase()}|${subject.trim().toLowerCase()}|${message.trim().toLowerCase()}`;
  const lastSeen = dedupeMap.get(hash);

  if (lastSeen && now - lastSeen < DEDUPE_WINDOW_MS) {
    return true;
  }

  dedupeMap.set(hash, now);
  // Periodically purge expired hashes to keep memory footprint under 1 MB
  if (dedupeMap.size > 500) {
    for (const [key, timestamp] of dedupeMap.entries()) {
      if (now - timestamp > DEDUPE_WINDOW_MS) dedupeMap.delete(key);
    }
  }
  return false;
}

// ---------------------------------------------------------------------------
// Main POST Handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    // 0. Origin & CORS Hardening (Block cross-origin scraping scripts)
    const secFetchSite = req.headers.get("sec-fetch-site");
    if (secFetchSite && secFetchSite === "cross-site") {
      console.warn(`🛑 [CORS BLOCKED] Unauthorized cross-site request rejected.`);
      return NextResponse.json(
        { success: false, message: "Unauthorized cross-origin request." },
        { status: 403 }
      );
    }

    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many project inquiries submitted from your network. Please try again in 1 hour, or email us directly at nexora280@gmail.com.",
        },
        { status: 429 }
      );
    }

    // 2. Parse Request Body
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request format. Expected JSON payload.",
        },
        { status: 400 }
      );
    }

    // 3. Server-Side Zod Schema Validation & Disposable Email Check
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const issues = validationResult.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted form validation errors.",
          errors: issues,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, confirm_email_address } = validationResult.data;

    // 4a. Honeypot Bot Trap Check (Silent Tar-Pit Drop)
    if (confirm_email_address && confirm_email_address.trim() !== "") {
      console.warn(`🤖 [SPAM TRAP TRIGGERED] Bot detected from IP: ${ip}. Silent rejection applied.`);
      return NextResponse.json(
        {
          success: true,
          message: "Your project inquiry has been delivered successfully.",
          data: { id: "re_bot_trap_silent_drop" },
        },
        { status: 200 }
      );
    }

    // 4b. Time-to-Submit Heuristic Check (< 3.5 seconds = automated scraper)
    const renderTimeStr = req.headers.get("x-form-render-time");
    if (renderTimeStr) {
      const renderTime = parseInt(renderTimeStr, 10);
      if (!isNaN(renderTime) && Date.now() - renderTime < 3500) {
        console.warn(`⚡ [FAST SCRAPER DETECTED] Form submitted in ${Date.now() - renderTime}ms from IP: ${ip}. Silent drop applied.`);
        return NextResponse.json(
          {
            success: true,
            message: "Your project inquiry has been delivered successfully.",
            data: { id: "re_fast_scraper_silent_drop" },
          },
          { status: 200 }
        );
      }
    }

    // 4c. Deduplication Check (Prevent accidental double-clicks or loops)
    if (isDuplicate(email, subject, message)) {
      console.warn(`🔄 [DUPLICATE INQUIRY DETECTED] Identical payload from ${email}. Silent deduplication drop applied.`);
      return NextResponse.json(
        {
          success: true,
          message: "Your project inquiry has been delivered successfully.",
          data: { id: "re_duplicate_silent_drop" },
        },
        { status: 200 }
      );
    }

    // 5. Establish Sender and Recipient Configuration
    // Sanitize in case .env.local has extra quotes, trailing spaces, or pre-formatted <email@domain.com> brackets
    const rawSenderEnv = (process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev").trim().replace(/['"]/g, "");
    const senderBracketMatch = rawSenderEnv.match(/<([^>]+)>/);
    let cleanSenderEmail = senderBracketMatch ? senderBracketMatch[1].trim() : rawSenderEnv;

    // If someone put just their verified domain name in .env.local (e.g., "nexorasw.com") instead of a full email
    // address (e.g., "contact@nexorasw.com"), automatically prepend "contact@" so Resend receives a valid email format!
    if (!cleanSenderEmail.includes("@") && cleanSenderEmail.includes(".")) {
      console.warn(`⚠️ [RESEND SENDER NOTICE]: CONTACT_SENDER_EMAIL (${cleanSenderEmail}) is missing an email prefix. Automatically prepending "contact@" to make it a valid email address (${`contact@${cleanSenderEmail}`})!`);
      cleanSenderEmail = `contact@${cleanSenderEmail}`;
    }

    const rawRecipientEnv = (process.env.CONTACT_RECIPIENT_EMAIL || "nexora280@gmail.com").trim().replace(/['"]/g, "");
    const recipientBracketMatch = rawRecipientEnv.match(/<([^>]+)>/);
    const cleanRecipientEmail = recipientBracketMatch ? recipientBracketMatch[1].trim() : rawRecipientEnv;

    // In Resend Sandbox mode (when using onboarding@resend.dev), or if someone accidentally puts a personal Gmail/Yahoo
    // address into CONTACT_SENDER_EMAIL (which Resend forbids sending FROM due to DMARC policies),
    // we automatically switch to Sandbox Mode and route the Auto-Reply to your cleanRecipientEmail!
    const isPersonalDomain = /@(gmail|yahoo|outlook|hotmail|icloud|aol|proton|zoho)\./i.test(cleanSenderEmail);
    const isSandbox = cleanSenderEmail.includes("onboarding@resend.dev") || isPersonalDomain;

    if (isPersonalDomain) {
      console.warn(`⚠️ [RESEND SENDER NOTICE]: You cannot send emails FROM personal providers (${cleanSenderEmail}). Automatically defaulting sender to onboarding@resend.dev for local sandbox testing!`);
    }

    const autoReplyRecipient = isSandbox ? cleanRecipientEmail : email;
    const formattedSender = isSandbox ? "onboarding@resend.dev" : `Nexora Engineering <${cleanSenderEmail}>`;


    // 6. Execute Dual Email Transmission via Resend
    const [teamResult, clientResult] = await Promise.all([
      // Email 1: Alert to Nexora Engineering Team
      sendEmail({
        from: formattedSender,
        to: cleanRecipientEmail,
        replyTo: email,
        subject: `[Project Scope] ${subject} - ${name}`,
        react: React.createElement(ProjectInquiry, { name, email, subject, message }),
      }),
      // Email 2: Branded Acknowledgment to Visitor Inbox (Routed to owner in sandbox mode for previewing)
      sendEmail({
        from: formattedSender,
        to: autoReplyRecipient,
        subject: `We received your inquiry: ${subject}`,
        react: React.createElement(AutoReply, { name, subject }),
      }),
    ]);

    // Check if primary notification to Nexora failed
    if (teamResult.error) {
      console.error("❌ [RESEND ERROR] Failed to deliver team notification:", teamResult.error);
      return NextResponse.json(
        {
          success: false,
          message: "We encountered an upstream delivery issue. Please email your scope directly to nexora280@gmail.com.",
        },
        { status: 500 }
      );
    }

    if (clientResult.error) {
      console.warn("⚠️ [RESEND WARNING] Team notification succeeded, but auto-reply to client failed:", clientResult.error);
    }

    // 7. Return 200 OK Response
    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been delivered successfully. Our engineering team will review your requirements and respond within 24 hours.",
        data: {
          id: teamResult.data?.id || "re_success",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ [UNEXPECTED SERVER ERROR] /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please contact us directly at nexora280@gmail.com.",
      },
      { status: 500 }
    );
  }
}
