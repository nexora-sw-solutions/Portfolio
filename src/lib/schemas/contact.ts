import * as z from "zod";

const DISPOSABLE_DOMAINS = [
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.org",
  "yopmail.com",
  "trashmail.com",
  "fakeinbox.com",
];

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }).max(100, { message: "Name must not exceed 100 characters." }),
  email: z.string().trim().toLowerCase().email({ message: "Please enter a valid email address." }).refine(
    (val) => {
      const domain = val.split("@")[1];
      return domain ? !DISPOSABLE_DOMAINS.includes(domain) : false;
    },
    { message: "Please use a permanent or corporate email address." }
  ),
  subject: z.string().trim().min(3, { message: "Subject must be at least 3 characters." }).max(150, { message: "Subject must not exceed 150 characters." }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters." }).max(3000, { message: "Message must not exceed 3000 characters." }),
  // Invisible honeypot field for anti-spam detection
  confirm_email_address: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data?: {
    id?: string;
  };
  errors?: Array<{
    field: string;
    message: string;
  }>;
}
