import { siteContent } from "@/data/site";
import { cn } from "@/lib/utils";

interface BookingButtonProps {
  className?: string;
  label?: string;
  variant?: "primary" | "secondary";
}

const variants = {
  primary:
    "border border-[#607663] bg-[#6f8672] text-[#fbfcf9] shadow-[0_18px_38px_rgba(52,69,56,0.18)] hover:-translate-y-0.5 hover:bg-[#5f7562] hover:shadow-[0_22px_44px_rgba(52,69,56,0.24)]",
  secondary:
    "border border-line bg-white/80 text-foreground hover:-translate-y-0.5 hover:bg-sage-soft/70",
};

export function BookingButton({
  className,
  label = "Book Now",
  variant = "primary",
}: BookingButtonProps) {
  return (
    <a
      href={siteContent.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
    >
      {label}
    </a>
  );
}
