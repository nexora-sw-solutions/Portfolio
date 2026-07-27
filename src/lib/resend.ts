import { Resend } from "resend";
import React from "react";

// Singleton instance for Resend SDK
const apiKey = process.env.RESEND_API_KEY || "re_placeholder";
export const resend = new Resend(apiKey);

interface SendEmailParams {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  react: React.ReactElement;
}

/**
 * Helper to send email via Resend, with graceful dev fallback when API key is missing or placeholder.
 */
export async function sendEmail({ from, to, replyTo, subject, react }: SendEmailParams) {
  const isMockMode = !process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes("placeholder");

  if (isMockMode) {
    console.log("\n==========================================");
    console.log("📨 [DEV MOCK MODE] Email Transmission Intercepted");
    console.log(`From: ${from}`);
    console.log(`To: ${Array.isArray(to) ? to.join(", ") : to}`);
    if (replyTo) console.log(`Reply-To: ${replyTo}`);
    console.log(`Subject: ${subject}`);
    console.log("Status: Simulated Delivery Success (No real API key configured)");
    console.log("==========================================\n");

    return {
      data: { id: `re_mock_${Date.now()}_${Math.random().toString(36).substring(2, 9)}` },
      error: null,
    };
  }

  return await resend.emails.send({
    from,
    to,
    replyTo,
    subject,
    react,
  });
}
