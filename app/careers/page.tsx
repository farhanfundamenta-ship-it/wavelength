import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon, type IconName } from "@/components/ui/icons";
import { careers } from "@/data/careers/careers";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Open engineering, operations and business roles at Wavelength — help build practical decarbonisation systems for marine and industrial clients.",
  path: "/careers",
});

const perks: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Real engineering ownership",
    body: "You'll own technical decisions on projects that actually get built, not shelved after a proposal.",
    icon: "compass",
  },
  {
    title: "Global project exposure",
    body: "Work across maritime, offshore, and industrial clients on three continents.",
    icon: "globe",
  },
  {
    title: "Licensed partner network",
    body: "See your designs through fabrication with partners who know how to build them right.",
    icon: "hexagon",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* ---- Page intro ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .car-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: car-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .car-card {
                opacity: 0;
                transform: translateY(32px);
                animation: car-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
            }
          }
          @keyframes car-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
          .car-card:nth-child(2) { animation-delay: 90ms; }
          .car-card:nth-child(3) { animation-delay: 180ms; }
        `}</style>

        <Container className="relative">
          <div className="car-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Careers
          </div>
          <h1 className="car-reveal mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Build the energy transition,
            <span className="text-accent"> not just talk about it</span>.
          </h1>
          <p className="car-reveal mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            We're a small team solving hard engineering problems for the
            maritime and industrial sectors. If that sounds more interesting
            than another lab prototype, take a look below.
          </p>
        </Container>
      </Section>

      {/* ---- Why work here ---- */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {perks.map((perk) => (
              <div key={perk.title} className="car-card border-t border-heading/80 pt-6">
                <span className="hex-clip flex h-11 w-11 items-center justify-center bg-ink text-accent">
                  <Icon name={perk.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-heading">
                  {perk.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{perk.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Open roles ---- */}
      <Section tone="mist">
        <Container>
          <h2 className="car-reveal max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            Open roles
          </h2>

          <div className="mt-10">
            {careers.map((role) => (
              <Link
                key={role.slug}
                href={`/careers/${role.slug}`}
                className="car-reveal group grid grid-cols-1 gap-x-10 gap-y-3 border-t border-heading/80 py-8 transition-colors duration-500 hover:border-accent last:border-b sm:grid-cols-12"
              >
                <div className="sm:col-span-6">
                  <h3 className="text-xl font-semibold tracking-tight text-heading transition-colors duration-500 group-hover:text-accent-deep md:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-body">
                    {role.summary}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:col-span-4">
                  <span className="rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-body">
                    {role.department}
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-body">
                    {role.location}
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-body">
                    {role.type}
                  </span>
                </div>
                <div className="flex items-center sm:col-span-2 sm:justify-end">
                  <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-heading">
                    View role
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
        eyebrow="Don't see a fit?"
        title="Tell us what you're good at."
        description="We're a small team and always open to hearing from strong engineers, even without an open role that matches exactly."
      >
        <Button href="/contact" variant="solid" withArrow>
          Get in Touch
        </Button>
      </CTASection>
    </>
  );
}
