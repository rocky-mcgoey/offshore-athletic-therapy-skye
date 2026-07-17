import Link from "next/link";
import { siteContent } from "@/data/site";
import { BookingButton } from "@/components/ui/BookingButton";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ServicesSectionProps {
  showEyebrow?: boolean;
}

/**
 * Services grid used on the homepage and the full services page.
 * All service copy comes from `siteContent`, so this component is mostly
 * responsible for presentation rather than owning business text.
 */
export function ServicesSection({ showEyebrow = true }: ServicesSectionProps) {
  return (
    <section className="section-space">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow={showEyebrow ? "Services" : undefined}
          title="Care that meets you where you are and builds toward where you want to go."
          description="Every service is grounded in clear assessment, individualized planning, and movement-based rehabilitation designed around your goals."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {siteContent.services.map((service, index) => (
            <article key={service.title} className="surface-card flex flex-col p-6 sm:p-8">
              {/* Using the array index here is safe because the order is intentional marketing content. */}
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
                  0{index + 1}
                </span>
                <span className="rounded-full bg-sage-soft/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                  Learn More
                </span>
              </div>

              <div className="mt-8 space-y-5">
                <h3 className="font-display text-3xl leading-none text-foreground">
                  {service.title}
                </h3>
                <p className="text-lg leading-8 text-muted">{service.summary}</p>
                <p className="text-base leading-7 text-foreground/85">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-line bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="soft-divider my-6" />

              <div className="space-y-4 text-base leading-7 text-muted">
                {service.learnMore.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="space-y-2">
            <h3 className="font-display text-3xl leading-none text-foreground">
              Ready to get started?
            </h3>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Book an appointment online or reach out if you would like help
              finding the right service for your situation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <BookingButton />
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-sage-soft/65"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
