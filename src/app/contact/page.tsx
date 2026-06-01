import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(
  "Contact",
  "Contact Offshore Athletic Therapy in Kimberley, BC to ask a question, send a message, or book your next appointment through JaneApp.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact"
        description="Reach out with questions, send a message directly, or use JaneApp to book your appointment when you are ready."
      />
      <ContactSection showEyebrow={false} />
    </main>
  );
}
