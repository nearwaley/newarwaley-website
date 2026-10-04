import emailjs from "@emailjs/browser";
import { whatsappLink } from "./site";

export type FormType = "Specialist application" | "Investor enquiry" | "Contact message" | "Service request";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const emailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

/**
 * Sends a form submission.
 * - With EmailJS keys set: emails it to you using ONE template.
 *   The template should use {{form_type}}, {{summary}}, {{name}}, {{phone}}, {{reply_to}}.
 * - Without keys (e.g. local dev): opens WhatsApp with the details pre-filled.
 */
export async function submitForm(
  type: FormType,
  /** label → value, used for the readable summary */
  labeled: Record<string, string>,
  /** field name → value, sent as individual template variables */
  values: Record<string, string>,
): Promise<"email" | "whatsapp"> {
  const summary = Object.entries(labeled)
    .filter(([, v]) => v.trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  if (emailConfigured) {
    await emailjs.send(
      SERVICE_ID!,
      TEMPLATE_ID!,
      {
        ...values,
        form_type: type,
        summary,
        name: values.name ?? "",
        phone: values.phone ?? "",
        reply_to: values.email ?? "",
        submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      },
      { publicKey: PUBLIC_KEY! },
    );
    return "email";
  }

  window.open(whatsappLink(`Nearwaley — ${type}\n\n${summary}`), "_blank", "noopener,noreferrer");
  return "whatsapp";
}
