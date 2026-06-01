"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { BookingButton } from "@/components/ui/BookingButton";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/88 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="group inline-flex flex-col">
              <span className="font-display text-2xl leading-none text-foreground sm:text-3xl">
                Offshore
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted transition group-hover:text-foreground">
                Athletic Therapy
              </span>
            </Link>

            <BookingButton className="lg:hidden" />
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            <nav aria-label="Primary" className="flex flex-wrap gap-2">
              {siteContent.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    pathname === item.href
                      ? "border border-[#a9b8aa] bg-sage-soft text-sage-deep shadow-[0_12px_26px_rgba(84,102,88,0.10)]"
                      : "text-muted hover:bg-white/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <BookingButton className="hidden lg:inline-flex" />
          </div>
        </div>
      </Container>
    </header>
  );
}
