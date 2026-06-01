import { LocationSection } from "@/components/sections/LocationSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(
  "Location",
  "Visit Offshore Athletic Therapy at UNWIND, 179 Wallinger Ave, Kimberley, BC, for athletic therapy, kinesiology, and rehabilitation care.",
  "/location",
);

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
