import { siteContent } from "@/data/site";
import type { ContactFormSubmission } from "@/types/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function validateContactSubmission(
  input: unknown,
):
  | { success: true; data: ContactFormSubmission }
  | { success: false; error: string } {
  if (!input || typeof input !== "object") {
    return { success: false, error: "Please complete the contact form." };
  }

  const raw = input as Record<string, unknown>;
  const data: ContactFormSubmission = {
    firstName: cleanText(raw.firstName),
    lastName: cleanText(raw.lastName),
    email: cleanText(raw.email),
    phone: cleanText(raw.phone),
    message: cleanText(raw.message),
  };

  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.phone ||
    !data.message
  ) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!emailPattern.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (data.message.length < 12) {
    return {
      success: false,
      error: "Please share a little more detail in your message.",
    };
  }

  return { success: true, data };
}

export function buildContactEmail(data: ContactFormSubmission) {
  const subject = `New website inquiry from ${data.firstName} ${data.lastName}`;
  const text = [
    `New contact form submission for ${siteContent.businessName}`,
    "",
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f2622; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  return { subject, text, html };
}
