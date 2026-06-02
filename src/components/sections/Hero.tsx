import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/site";
import { BookingButton } from "@/components/ui/BookingButton";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="section-space pb-14 pt-8 sm:pt-12 lg:pt-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <span className="eyebrow">Kimberley Wellness Care</span>

            <div className="space-y-5">
              <h1 className="font-display text-5xl leading-none text-balance text-foreground sm:text-6xl lg:text-7xl">
                {siteContent.hero.headline}
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-muted sm:text-2xl">
                {siteContent.hero.subheadline}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <BookingButton className="sm:min-w-40" />
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-sage-soft/65"
              >
                Contact
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-full px-2 py-3 text-sm font-semibold text-muted transition hover:text-foreground"
              >
                Services
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {siteContent.hero.detailCards.map((detail) => (
                <div
                  key={detail}
                  className="rounded-[1.75rem] border border-line bg-white/65 p-5 text-base leading-7 text-muted shadow-[0_20px_50px_rgba(31,38,34,0.08)] backdrop-blur-sm"
                >
                  {detail}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="surface-card overflow-hidden p-3">
              <Image
                src="/images/uploads/Athletic-Wellness.png"
                alt="Athletic wellness treatment photo for Offshore Athletic Therapy"
                width={1200}
                height={1400}
                priority
                className="h-[440px] w-full rounded-[1.75rem] object-cover sm:h-[560px]"
              />
            </div>

            <div className="surface-card absolute -bottom-6 left-4 max-w-xs p-5 sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Focused Care
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground">
                Calm, one-on-one sessions centered on assessment, education,
                and clear progression back to the activities that matter most.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
