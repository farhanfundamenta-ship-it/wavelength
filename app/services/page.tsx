import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { services } from "@/data/services/services";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Systems engineering services for marine fuel, cargo handling, energy storage, power-to-X, industrial heat and biogas — designed to be practical to build and maintain.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* ---- Page intro ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .svc-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: svc-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .svc-card {
                opacity: 0;
                transform: translateY(32px);
                animation: svc-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
            }
          }
          @keyframes svc-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <Container className="relative">
          <div className="svc-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Services
          </div>
          <h1 className="svc-reveal mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Systems engineering for the
            <span className="text-accent"> energy transition</span>.
          </h1>
          <p className="svc-reveal mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            We design and engineer decarbonisation technology for the maritime
            and industrial sectors &mdash; turning proven components into
            practical, scalable clean-energy systems.
          </p>
        </Container>
      </Section>

      {/* ---- Services grid ---- */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="svc-card group relative overflow-hidden rounded-sm border border-line bg-mist/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-paper hover:shadow-2xl hover:shadow-ink/5"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="hex-clip relative flex h-12 w-12 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h2 className="relative mt-6 text-lg font-semibold tracking-tight text-heading">
                  {service.title}
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-body">
                  {service.description}
                </p>
              </div>
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
