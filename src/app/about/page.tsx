import { AboutSection } from "@/components/sections/AboutSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(
  "About",
  "Meet Skye McGoey, Certified Athletic Therapist and Practicing Kinesiologist serving Kimberley, BC with personalized, movement-focused care.",
  "/about",
);

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About"
        description="Learn more about Skye McGoey, her training, and the care philosophy behind Offshore Athletic Therapy in Kimberley, BC."
      />
      <AboutSection showEyebrow={false} />
    </main>
  );
}
