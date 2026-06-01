import { siteContent } from "@/data/site";
import { BookingButton } from "@/components/ui/BookingButton";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface LocationSectionProps {
  showEyebrow?: boolean;
}

export function LocationSection({
  showEyebrow = true,
}: LocationSectionProps) {
  return (
    <section className="section-space">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow={showEyebrow ? "Location" : undefined}
          title="Find Offshore Athletic Therapy at UNWIND."
          description="A calm, welcoming Kimberley setting for treatment, rehabilitation, and movement-based care."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="surface-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                Clinic Location
              </p>
              <h3 className="font-display text-4xl leading-none text-foreground">
                {siteContent.location.name}
              </h3>
            </div>

            <p className="text-base leading-8 text-muted">
              {siteContent.location.address.street}
              <br />
              {siteContent.location.address.city},{" "}
              {siteContent.location.address.region}
              <br />
              {siteContent.location.address.postalCode}
            </p>

            <p className="text-sm leading-7 text-foreground/85">
              Easy access for clients throughout Kimberley and surrounding
              communities looking for personalized rehabilitation support.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BookingButton />
              <a
                href={siteContent.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-sage-soft/65"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="surface-card overflow-hidden p-3">
            {/* TODO: Replace with the final approved Google Maps embed or branded location visual if needed. */}
            <iframe
              title="Map to UNWIND in Kimberley, BC"
              src={siteContent.location.mapEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame h-[420px] w-full rounded-[1.75rem] border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
