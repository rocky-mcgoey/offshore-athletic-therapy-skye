import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteContent } from "@/data/site";
import { buildContactEmail, validateContactSubmission } from "@/lib/contact";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const validation = validateContactSubmission(payload);

    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error },
        { status: 400 },
      );
    }

    if (!resend) {
      return NextResponse.json(
        {
          message:
            "The contact form is not configured yet. Please email skye.mcgoey@gmail.com directly for now.",
        },
        { status: 500 },
      );
    }

    const email = buildContactEmail(validation.data);
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ??
      "Offshore Athletic Therapy <onboarding@resend.dev>";

    await resend.emails.send({
      from: fromEmail,
      to: [siteContent.contact.email],
      replyTo: validation.data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    return NextResponse.json({
      message:
        "Thanks for reaching out. Your message has been sent and Skye will be in touch soon.",
    });
  } catch (error) {
    console.error("Contact form submission failed", error);

    return NextResponse.json(
      {
        message:
          "Something went wrong while sending your message. Please try again or email skye.mcgoey@gmail.com directly.",
      },
      { status: 500 },
    );
  }
}
