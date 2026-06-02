import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={cn("space-y-5", alignment)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="space-y-4">
        <h2 className="font-display text-4xl leading-none text-balance text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="text-lg leading-8 text-muted sm:text-xl">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
