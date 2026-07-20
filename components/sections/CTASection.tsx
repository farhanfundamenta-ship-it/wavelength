import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function CTASection({ eyebrow, title, description, children }: CTASectionProps) {
  return (
    <Section tone="ink" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <Container className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-xl">
          {eyebrow ? (
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-body-dark">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-body-dark md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="shrink-0">{children}</div>
      </Container>
    </Section>
  );
}
