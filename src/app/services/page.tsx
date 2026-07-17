import { ServicesSection } from "@/components/sections/ServicesSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/metadata";

// Page-specific metadata for the Services route.
export const metadata = buildPageMetadata(
  "Services",
  "Explore athletic therapy, kinesiology, and ICBC rehabilitation services offered by Offshore Athletic Therapy in Kimberley, BC.",
  "/services",
);

/**
 * Services page built from a reusable page header plus the shared services section.
 */
export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Services"
        description="Explore athletic therapy, kinesiology, and ICBC rehabilitation services designed to help you move better and recover with confidence."
      />
      <ServicesSection showEyebrow={false} />
    </main>
  );
}
