import Link from "next/link";
import { siteContent } from "@/data/site";
import { BookingButton } from "@/components/ui/BookingButton";
import { Container } from "@/components/ui/Container";

/**
 * Site footer that doubles as a final call-to-action section.
 * It reuses centralized navigation and contact content so the footer stays in
 * sync with the rest of the site.
 */
export function Footer() {
  return (
    <footer className="section-space pt-10">
      <Container>
        <div className="surface-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-6">
              <span className="eyebrow">Ready When You Are</span>
              <div className="space-y-4">
                <h2 className="font-display text-4xl leading-none text-balance text-foreground sm:text-5xl">
                  Build a stronger path back to movement.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  Offshore Athletic Therapy offers personalized care for injury
                  recovery, movement health, and ICBC rehabilitation in
                  Kimberley, BC.
                </p>
              </div>
              <BookingButton />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  Explore
                </h3>
                <div className="flex flex-col gap-3 text-sm text-foreground">
                  {siteContent.navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-transparent px-3 py-1.5 font-medium text-sage-deep underline decoration-sage-deep/35 underline-offset-4 transition hover:border-line hover:bg-white/70 hover:decoration-sage-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  Connect
                </h3>
                <div className="space-y-3 text-sm leading-7 text-foreground">
                  <p>{siteContent.contact.email}</p>
                  <p>
                    {siteContent.location.name}
                    <br />
                    {siteContent.location.address.street}
                    <br />
                    {siteContent.location.address.city},{" "}
                    {siteContent.location.address.region}{" "}
                    {siteContent.location.address.postalCode}
                  </p>
                  <a
                    href={siteContent.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex font-semibold text-sage-deep"
                  >
                    Book online via JaneApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="soft-divider my-8" />

          <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              Copyright 2026 Offshore Athletic Therapy. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
