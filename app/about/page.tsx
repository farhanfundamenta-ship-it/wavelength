import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon, type IconName } from "@/components/ui/icons";
import { team } from "@/data/team/team";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Wavelength designs and engineers decarbonisation technology for the marine and industrial sectors, turning proven components into practical, scalable clean-energy systems.",
  path: "/about",
});

const values: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Engineering-led",
    body: "Every project starts with systems engineering, not a sales pitch. The design has to work before it ships.",
    icon: "compass",
  },
  {
    title: "Safety first",
    body: "We design for the harshest operating envelopes our clients face, and we don't cut corners to hit a date.",
    icon: "shield",
  },
  {
    title: "Practical over novel",
    body: "We build on components with a track record, not unproven lab science, so projects stay bankable and buildable.",
    icon: "trendingUp",
  },
  {
    title: "Long-term partnerships",
    body: "We design and engineer; our licensed partners fabricate and deliver, close to where clients operate.",
    icon: "globe",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ---- Page intro ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .abt-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: abt-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .abt-card {
                opacity: 0;
                transform: translateY(32px);
                animation: abt-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
              .abt-img {
                clip-path: inset(0 0 12% 0);
                animation: abt-img-in linear both;
                animation-timeline: view();
                animation-range: entry 0% cover 34%;
              }
            }
          }
          @keyframes abt-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes abt-img-in {
            to { clip-path: inset(0 0 0 0); }
          }
          .abt-card:nth-child(2) { animation-delay: 90ms; }
          .abt-card:nth-child(3) { animation-delay: 180ms; }
          .abt-card:nth-child(4) { animation-delay: 270ms; }
        `}</style>

        <Container className="relative">
          <div className="abt-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            About
          </div>
          <h1 className="abt-reveal mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Systems engineering for a
            <span className="text-accent"> lower-carbon </span>
            world.
          </h1>
          <p className="abt-reveal mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            We combine deep systems-engineering knowledge with a pragmatic
            design philosophy &mdash; so today&rsquo;s business keeps running
            while tomorrow&rsquo;s energy systems get built.
          </p>
        </Container>
      </Section>

      {/* ---- Story: asymmetric editorial spread ---- */}
      <Section tone="paper" className="overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
            <div className="relative md:col-span-6 md:border-r md:border-line md:pr-10">
              <h2 className="abt-reveal max-w-xl text-4xl font-semibold leading-[1.02] tracking-tight text-heading sm:text-5xl">
                Founded on a simple idea.
              </h2>
              <p className="abt-reveal mt-6 max-w-md text-base leading-relaxed text-body md:text-lg">
                Wavelength was founded to close the gap between proven
                engineering and the pace the energy transition actually
                demands. Greener alternatives to carbon-intensive systems for
                the maritime and industrial sectors, assembled from proven
                components applied in new ways.
              </p>
              <p className="abt-reveal mt-5 max-w-md text-sm leading-relaxed text-body">
                We don&rsquo;t design for a demo. We design for the vessel
                that stays at sea for thirty years and the plant that can
                never stop production &mdash; and we deliver through a
                network of licensed fabrication partners so the work gets
                built close to where it&rsquo;s needed.
              </p>
            </div>
            <div className="md:col-span-6 md:pt-10">
              <figure className="abt-img">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-mist">
                  <img
                    src="/images/beautiful-sea-view-from-ship.jpg"
                    alt="View from an operating vessel at sea"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
                  />
                </div>
              </figure>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 divide-y divide-line border-t border-heading/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-28">
            {[
              { value: "40%", label: "Average carbon intensity cut across delivered systems" },
              { value: "12", label: "Marine & industrial decarbonisation programmes engineered" },
              { value: "6", label: "Licensed fabrication partners across three continents" },
            ].map((metric, i) => (
              <div
                key={metric.value}
                className={`abt-reveal ${i === 0 ? "pt-6 sm:pr-6" : "pt-6 sm:px-6"}`}
              >
                <p className="text-5xl font-semibold tracking-tight text-heading lg:text-6xl">
                  {metric.value}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Values ---- */}
      <Section tone="ink-2" className="relative overflow-hidden">
        <Container>
          <div className="abt-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            What we stand for
          </div>
          <h2 className="abt-reveal mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Four principles behind every project
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="abt-card group relative overflow-hidden rounded-sm border border-line-dark bg-ink-3/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-ink hover:shadow-2xl hover:shadow-black/20"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="hex-clip relative flex h-12 w-12 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                  <Icon name={value.icon} className="h-5 w-5" />
                </span>
                <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-white">
                  {value.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-body-dark">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Team ---- */}
      <Section tone="paper">
        <Container>
          <div className="abt-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Leadership
          </div>
          <h2 className="abt-reveal mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            The team behind the engineering
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="abt-reveal border-t border-heading/80 pt-6">
                <span className="hex-clip flex h-14 w-14 items-center justify-center bg-ink text-accent">
                  <Icon name={member.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-heading">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-accent-strong">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Closing CTA ---- */}
      <CTASection
        eyebrow="Join us"
        title="Want to build the energy transition with us?"
        description="We're always looking for engineers who'd rather solve real operational problems than write another whitepaper."
      >
        <Button href="/careers" variant="solid" withArrow>
          View Open Roles
        </Button>
      </CTASection>
    </>
  );
}
