import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared width wrapper used to keep page sections aligned.
 * Using one component avoids repeating the same max-width and padding classes.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
