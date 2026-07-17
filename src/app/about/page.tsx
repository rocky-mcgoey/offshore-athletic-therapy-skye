import { AboutSection } from "@/components/sections/AboutSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/metadata";

// Page-specific metadata for the About route.
export const metadata = buildPageMetadata(
  "About",
  "Meet Skye McGoey, Certified Athletic Therapist and Practicing Kinesiologist serving Kimberley, BC with personalized, movement-focused care.",
  "/about",
);

/**
 * About page built from a reusable page header plus the shared about section.
 */
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
