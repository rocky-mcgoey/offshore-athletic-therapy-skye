import { siteContent } from "@/data/site";
import { BookingButton } from "@/components/ui/BookingButton";
import { ContactForm } from "@/components/ui/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ContactSectionProps {
  showEyebrow?: boolean;
}

/**
 * Contact section that pairs quick contact details with the full contact form.
 * The left side offers low-friction options, while the form handles richer inquiries.
 */
export function ContactSection({
  showEyebrow = true,
}: ContactSectionProps) {
  return (
    <section className="section-space pt-4">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow={showEyebrow ? "Contact" : undefined}
              title="Start the conversation."
              description="Use the form below to get in touch, ask a question, or book through JaneApp when you are ready."
            />

            <div className="surface-card space-y-6 p-6 sm:p-8">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-lg font-semibold text-foreground hover:text-sage-deep"
                >
                  {siteContent.contact.email}
                </a>
              </div>

              <div className="soft-divider" />

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  Social
                </p>
                <div className="flex flex-wrap gap-3">
                  {siteContent.contact.socials.map((social) =>
                    social.placeholder ? (
                      <span
                        key={social.label}
                        className="inline-flex items-center rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-medium text-foreground"
                      >
                        {social.label} Soon
                      </span>
                    ) : (
                      <a
                        key={social.label}
                        href={social.href}
                        className="inline-flex items-center rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-sage-soft/65"
                      >
                        {social.label}
                      </a>
                    ),
                  )}
                  <a
                    href={siteContent.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-sage-soft/65"
                  >
                    Booking
                  </a>
                </div>
              </div>

              <div className="soft-divider" />

              <div className="space-y-4">
                <p className="text-base leading-7 text-muted">
                  Prefer to book right away? JaneApp is the fastest path to
                  securing your appointment.
                </p>
                <BookingButton className="w-full sm:w-auto" />
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
