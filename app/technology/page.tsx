import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon, type IconName } from "@/components/ui/icons";
import { services } from "@/data/services/services";

export const metadata: Metadata = buildMetadata({
  title: "Technology",
  description:
    "The engineering disciplines and technology domains behind Wavelength's marine and industrial decarbonisation systems.",
  path: "/technology",
});

const phases: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Concept Development",
    body: "Evaluate opportunities, identify technical challenges, and establish the optimal engineering approach.",
    icon: "compass",
  },
  {
    title: "Feasibility Studies",
    body: "Technical assessments that reduce project uncertainty before investment decisions are made.",
    icon: "shield",
  },
  {
    title: "Detailed Engineering",
    body: "Complete multidisciplinary engineering documentation prepared for construction and implementation.",
    icon: "hexagon",
  },
  {
    title: "Procurement Support",
    body: "Technical specifications, vendor evaluations, and engineering assistance throughout procurement.",
    icon: "container",
  },
  {
    title: "Commissioning Support",
    body: "Ensuring every system performs safely, efficiently, and according to design intent.",
    icon: "bolt",
  },
];

const differentiators: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Technology-agnostic",
    body: "We recommend the right fuel, storage, or process technology for the operating envelope, not the one we happen to sell.",
    icon: "shield",
  },
  {
    title: "Proven components, new applications",
    body: "We build from equipment with an operating track record, applied in configurations that hadn't been tried together before.",
    icon: "trendingUp",
  },
  {
    title: "Built for tomorrow's fuels",
    body: "Systems are designed with a clear upgrade path as fuel standards and emissions regulations continue to evolve.",
    icon: "leaf",
  },
  {
    title: "Full-lifecycle support",
    body: "From concept sketch to commissioning sign-off, the same engineering team stays accountable throughout.",
    icon: "compass",
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* ---- Page intro ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .tech-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: tech-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .tech-card {
                opacity: 0;
                transform: translateY(32px);
                animation: tech-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
              .tech-line {
                transform: scaleX(0);
                animation: tech-line-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 24%;
              }
            }
          }
          @keyframes tech-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes tech-line-in {
            to { transform: scaleX(1); }
          }
          .tech-card:nth-child(2) { animation-delay: 90ms; }
          .tech-card:nth-child(3) { animation-delay: 180ms; }
          .tech-card:nth-child(4) { animation-delay: 270ms; }
          .tech-card:nth-child(5) { animation-delay: 360ms; }
          .tech-card:nth-child(6) { animation-delay: 450ms; }
        `}</style>

        <Container className="relative">
          <div className="tech-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Technology
          </div>
          <h1 className="tech-reveal mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Proven components,
            <span className="text-accent"> engineered </span>
            for what comes next.
          </h1>
          <p className="tech-reveal mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            We don&rsquo;t bet projects on unproven lab science. Our
            technology approach combines equipment with an operating track
            record, applied in configurations built for the marine and
            industrial sectors&rsquo; hardest problems.
          </p>
        </Container>
      </Section>

      {/* ---- Technology domains ---- */}
      <Section tone="paper">
        <Container>
          <div className="tech-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Technology domains
          </div>
          <h2 className="tech-reveal mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            Six domains, one engineering discipline
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="tech-card group relative overflow-hidden rounded-sm border border-line bg-mist/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-paper hover:shadow-2xl hover:shadow-ink/5"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="hex-clip relative flex h-12 w-12 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-heading">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Engineering process ---- */}
      <Section tone="ink-2" className="relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-12">
            <div className="tech-reveal md:col-span-7">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                How we work
              </div>
              <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl">
                Every project follows the same engineering discipline
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-16">
              <p className="tech-reveal border-t border-white/80 pt-6 text-base leading-relaxed text-body-dark md:text-lg">
                Whether the project is a vessel retrofit or a new industrial
                plant, we run every engagement through the same five phases.
              </p>
            </div>
          </div>

          <div className="relative mt-20 hidden lg:block">
            <span
              aria-hidden
              className="tech-line pointer-events-none absolute left-0 right-0 top-[22px] h-px origin-left bg-line-dark"
            />
            <div className="grid grid-cols-5 gap-8">
              {phases.map((phase) => (
                <div key={phase.title} className="tech-card group">
                  <span className="hex-clip relative z-10 flex h-11 w-11 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-110">
                    <Icon name={phase.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body-dark">{phase.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 space-y-0 lg:hidden">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="tech-card group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line-dark py-7 transition-colors duration-500 hover:border-accent/50"
              >
                <span className="hex-clip flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                  <Icon name={phase.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-body-dark">
                    {phase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- What makes it different ---- */}
      <Section tone="paper">
        <Container>
          <div className="tech-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            What makes it different
          </div>
          <h2 className="tech-reveal mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            Engineering built to be built, not just published
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16">
            {differentiators.map((item) => (
              <div key={item.title} className="tech-reveal border-t border-heading/80 pt-6">
                <span className="hex-clip flex h-11 w-11 items-center justify-center bg-ink text-accent">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 max-w-sm text-2xl font-semibold leading-tight tracking-tight text-heading md:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-body md:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Closing CTA ---- */}
      <CTASection
        eyebrow="Let's talk"
        title="Have a technical challenge to work through?"
        description="Tell us where you're stuck. Our engineers will help design the right system for it."
      >
        <Button href="/contact" variant="solid" withArrow>
          Talk to an Engineer
        </Button>
      </CTASection>
    </>
  );
}
