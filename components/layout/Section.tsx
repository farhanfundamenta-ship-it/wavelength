import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export type SectionTone = "paper" | "mist" | "ink" | "ink-2";

const toneClasses: Record<SectionTone, string> = {
  paper: "bg-paper text-heading",
  mist: "bg-mist text-heading",
  ink: "bg-ink text-white",
  "ink-2": "bg-ink-2 text-white",
};

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
}

export function Section({ children, tone = "paper", id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", toneClasses[tone], className)}
    >
      {children}
    </section>
  );
}
