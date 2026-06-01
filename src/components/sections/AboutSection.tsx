import Image from "next/image";
import { siteContent } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AboutSectionProps {
  showEyebrow?: boolean;
}

export function AboutSection({ showEyebrow = true }: AboutSectionProps) {
  return (
    <section className="section-space">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card overflow-hidden p-3">
            {/* TODO: Replace with a professional portrait of Skye McGoey. */}
            <Image
              src="/images/skye-placeholder.svg"
              alt="Placeholder image for Skye McGoey portrait"
              width={1200}
              height={1400}
              className="h-full min-h-[420px] w-full rounded-[1.75rem] object-cover"
            />
          </div>

          <div className="space-y-10">
            <SectionHeading
              eyebrow={showEyebrow ? "About Skye" : undefined}
              title={siteContent.about.name}
              description="Certified Athletic Therapist, Practicing Kinesiologist, and 4th Year Student of Osteopathic Manual Therapy."
            />

            <div className="flex flex-wrap gap-3">
              {siteContent.about.credentials.map((credential) => (
                <span
                  key={credential}
                  className="rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-medium text-foreground"
                >
                  {credential}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-base leading-8 text-muted">
              {siteContent.about.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-3xl leading-none text-foreground">
                  Education
                </h3>
              </div>

              <div className="grid gap-4">
                {siteContent.about.education.map((item) => (
                  <div key={item.years} className="surface-card p-5 sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                      {item.years}
                    </p>
                    <h4 className="mt-3 text-lg font-semibold text-foreground">
                      {item.degree}
                    </h4>
                    <p className="mt-2 text-base leading-7 text-muted">
                      {item.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
