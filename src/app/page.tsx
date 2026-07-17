import { Hero } from "@/components/sections/Hero";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { buildPageMetadata } from "@/lib/metadata";

// Homepage metadata stays close to the page file for quick SEO updates.
export const metadata = buildPageMetadata(
  "Home",
  "Offshore Athletic Therapy offers athletic therapy, kinesiology, and ICBC rehabilitation with a calm, premium care experience in Kimberley, BC.",
  "/",
);

/**
 * Homepage composition.
 * The page itself stays intentionally small and delegates most content to
 * reusable sections.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <MissionSection />
    </main>
  );
}
