import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  description: string;
}

/**
 * Intro banner used on the dedicated inner pages.
 * It gives each page a clear title without duplicating hero logic from home.
 */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="section-space pb-0 pt-8 sm:pt-10 lg:pt-12">
      <Container>
        <div className="surface-card p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
              Offshore Athletic Therapy
            </p>
            <h1 className="font-display text-5xl leading-none text-balance text-foreground sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="text-lg leading-8 text-muted sm:text-xl">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
