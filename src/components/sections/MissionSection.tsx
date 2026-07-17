import { siteContent } from "@/data/site";
import { Container } from "@/components/ui/Container";

/**
 * Short values section on the homepage.
 * It keeps the messaging compact while still reinforcing the care philosophy.
 */
export function MissionSection() {
  return (
    <section className="section-space pt-4">
      <Container>
        <div className="surface-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow">Our Mission</span>
              <h2 className="font-display text-4xl leading-none text-foreground sm:text-5xl">
                {siteContent.mission.title}
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl leading-9 text-foreground sm:text-2xl">
                {siteContent.mission.text}
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {/* These simple value labels add rhythm without needing more CMS data. */}
                {["Assess", "Educate", "Empower"].map((value) => (
                  <div
                    key={value}
                    className="rounded-[1.5rem] border border-line bg-white/70 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-muted"
                  >
                    {value}
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
