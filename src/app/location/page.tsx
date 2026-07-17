import { LocationSection } from "@/components/sections/LocationSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/metadata";

// Page-specific metadata for the Location route.
export const metadata = buildPageMetadata(
  "Location",
  "Visit Offshore Athletic Therapy at UNWIND, 179 Wallinger Ave, Kimberley, BC, for athletic therapy, kinesiology, and rehabilitation care.",
  "/location",
);

/**
 * Location page built from a reusable page header plus the shared location section.
 */
export default function LocationPage() {
  return (
    <main>
      <PageHeader
        title="Location"
        description="Visit Offshore Athletic Therapy at UNWIND in Kimberley, BC for one-on-one treatment, rehabilitation, and movement-based care."
      />
      <LocationSection showEyebrow={false} />
    </main>
  );
}
