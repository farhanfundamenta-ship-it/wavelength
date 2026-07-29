import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { partners } from "@/data/partners/partners";

export const metadata: Metadata = buildMetadata({
  title: "Licensed Partners",
  description:
    "Wavelength's network of licensed fabrication partners, delivering engineered systems close to where clients operate.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      {/* ---- Page intro ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .prt-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: prt-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .prt-card {
                opacity: 0;
                transform: translateY(32px);
                animation: prt-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
            }
          }
          @keyframes prt-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
          .prt-card:nth-child(2) { animation-delay: 90ms; }
          .prt-card:nth-child(3) { animation-delay: 180ms; }
          .prt-card:nth-child(4) { animation-delay: 270ms; }
          .prt-card:nth-child(5) { animation-delay: 360ms; }
          .prt-card:nth-child(6) { animation-delay: 450ms; }
        `}</style>

        <Container className="relative">
          <div className="prt-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Licensed Partners
          </div>
          <h1 className="prt-reveal mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            We design. Our partners
            <span className="text-accent"> build it right</span>.
          </h1>
          <p className="prt-reveal mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            Wavelength engineers every system, then delivers it through a
            network of licensed fabrication partners &mdash; keeping build
            work close to where clients actually operate.
          </p>
        </Container>
      </Section>

      {/* ---- Partner grid ---- */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="prt-card group relative overflow-hidden rounded-sm border border-line bg-mist/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-paper hover:shadow-2xl hover:shadow-ink/5"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="hex-clip relative flex h-12 w-12 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                  <Icon name={partner.icon} className="h-5 w-5" />
                </span>
                <p className="relative mt-6 text-xs font-medium uppercase tracking-[0.15em] text-accent-deep">
                  {partner.region}
                </p>
                <h2 className="relative mt-2 text-lg font-semibold tracking-tight text-heading">
                  {partner.name}
                </h2>
                <p className="relative mt-2 text-xs font-medium uppercase tracking-[0.1em] text-body">
                  {partner.specialty}
                </p>
                <p className="relative mt-3 text-sm leading-relaxed text-body">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Closing CTA ---- */}
      <CTASection
        eyebrow="Become a partner"
        title="Fabrication partner interested in joining the network?"
        description="We're always evaluating new licensed partners in regions where our clients need local delivery capability."
      >
        <Button href="/contact" variant="solid" withArrow>
          Get in Touch
        </Button>
      </CTASection>
    </>
  );
}
