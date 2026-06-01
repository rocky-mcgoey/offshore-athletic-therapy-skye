import { Hero } from "@/components/sections/Hero";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(
  "Home",
  "Offshore Athletic Therapy offers athletic therapy, kinesiology, and ICBC rehabilitation with a calm, premium care experience in Kimberley, BC.",
  "/",
);

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <MissionSection />
    </main>
  );
}
