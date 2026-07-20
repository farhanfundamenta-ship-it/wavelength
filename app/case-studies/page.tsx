import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { caseStudies } from "@/data/case-studies/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Delivered marine and industrial decarbonisation projects — the challenge, the engineering solution, and the results.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      {/* ---- Page intro ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .cs-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: cs-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .cs-card {
                opacity: 0;
                transform: translateY(32px);
                animation: cs-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
            }
          }
          @keyframes cs-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
          .cs-card:nth-child(2) { animation-delay: 90ms; }
          .cs-card:nth-child(3) { animation-delay: 180ms; }
          .cs-card:nth-child(4) { animation-delay: 270ms; }
        `}</style>

        <Container className="relative">
          <div className="cs-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Case Studies
          </div>
          <h1 className="cs-reveal mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Engineering solved,
            <span className="text-accent"> not just proposed</span>.
          </h1>
          <p className="cs-reveal mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            A look at how our systems performed once they left the drawing
            board &mdash; the challenge, the engineering, and the results.
          </p>
        </Container>
      </Section>

      {/* ---- Case study grid ---- */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="cs-card group relative overflow-hidden rounded-sm border border-line bg-mist/40 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-2xl hover:shadow-ink/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <img
                    src={study.image}
                    alt={study.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="hex-clip absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center bg-accent text-ink">
                    <Icon name={study.icon} className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent-strong">
                    {study.sector} &middot; {study.location}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-heading">
                    {study.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-body">{study.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-heading">
                    Read case study
                    <Icon
                      name="arrowRight"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Closing CTA ---- */}
      <CTASection
        eyebrow="Let's talk"
        title="Ready to start your next project?"
        description="Tell us about your challenge. Our engineers will help design the right system for it."
      >
        <Button href="/contact" variant="solid" withArrow>
          Get in Touch
        </Button>
      </CTASection>
    </>
  );
}
