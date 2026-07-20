import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon, type IconName } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "Engineering solutions for maritime, offshore energy, industrial manufacturing, renewable energy, energy infrastructure, and research & innovation.",
  path: "/industries",
});

const industries: {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  image: string;
  capabilities: string[];
}[] = [
  {
    slug: "maritime",
    title: "Maritime",
    description:
      "Supporting the global shipping industry with advanced engineering for alternative fuels, cargo handling, onboard energy systems, and vessel decarbonisation.",
    icon: "ship",
    image: "https://loremflickr.com/1200/1500/cargo,ship",
    capabilities: [
      "Marine Fuel Systems",
      "Cargo Handling Systems",
      "Alternative Fuel Integration",
      "LNG & Ammonia Systems",
      "Retrofit Engineering",
      "Regulatory Compliance",
    ],
  },
  {
    slug: "offshore-energy",
    title: "Offshore Energy",
    description:
      "Engineering reliable systems for offshore platforms, floating installations, and renewable offshore infrastructure operating in demanding environments.",
    icon: "anchor",
    image: "https://loremflickr.com/1200/1500/offshore,platform",
    capabilities: [
      "Process Engineering",
      "Energy Infrastructure",
      "Safety Systems",
      "Mechanical Design",
      "Risk Assessments",
      "System Integration",
    ],
  },
  {
    slug: "industrial-manufacturing",
    title: "Industrial Manufacturing",
    description:
      "Helping industrial facilities modernize energy systems, improve efficiency, and reduce carbon emissions without compromising production.",
    icon: "factory",
    image: "https://loremflickr.com/1200/1500/factory,industrial",
    capabilities: [
      "Industrial Heat Pumps",
      "Waste Heat Recovery",
      "Process Optimisation",
      "Energy Audits",
      "Utility Systems",
      "Plant Engineering",
    ],
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy",
    description:
      "Engineering technologies that accelerate the transition toward renewable and low-carbon energy production.",
    icon: "leaf",
    image: "https://loremflickr.com/1200/1500/solar,windturbine",
    capabilities: [
      "Power-to-X",
      "Hydrogen Systems",
      "Biogas Handling",
      "Carbon Reduction Projects",
      "Energy Storage",
      "Grid Integration",
    ],
  },
  {
    slug: "energy-infrastructure",
    title: "Energy Infrastructure",
    description:
      "Designing robust infrastructure that supports the production, transportation, storage, and distribution of modern energy carriers.",
    icon: "container",
    image: "https://loremflickr.com/1200/1500/pipeline,terminal",
    capabilities: [
      "Storage Facilities",
      "Fuel Distribution",
      "Terminal Engineering",
      "Cryogenic Systems",
      "Process Design",
      "Safety Engineering",
    ],
  },
  {
    slug: "research-innovation",
    title: "Research & Innovation",
    description:
      "Collaborating with technology developers, research institutions, and industry partners to transform emerging concepts into commercially viable engineering solutions.",
    icon: "compass",
    image: "https://loremflickr.com/1200/1500/laboratory,engineer",
    capabilities: [
      "Feasibility Studies",
      "Prototype Development",
      "Technology Validation",
      "Simulation",
      "Design Reviews",
      "Innovation Partnerships",
    ],
  },
];

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

const priorities = [
  "Operational reliability",
  "Safety-first engineering",
  "Regulatory compliance",
  "Long-term maintainability",
  "Sustainable energy transition",
  "Practical implementation",
];

const highlights: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Marine Engineering",
    body: "Alternative fuel systems designed for the next generation of vessels.",
    icon: "ship",
  },
  {
    title: "Industrial Decarbonisation",
    body: "Engineering solutions that reduce emissions while improving operational efficiency.",
    icon: "factory",
  },
  {
    title: "Energy Innovation",
    body: "Supporting emerging technologies from concept through implementation.",
    icon: "bolt",
  },
  {
    title: "Global Collaboration",
    body: "Working alongside shipowners, industrial operators, technology providers, and engineering partners worldwide.",
    icon: "globe",
  },
];

const reasons: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Independent Engineering",
    body: "Technology-neutral recommendations focused on the right solution for every project.",
    icon: "shield",
  },
  {
    title: "Multidisciplinary Expertise",
    body: "Mechanical, process, systems, and energy engineering under one roof.",
    icon: "hexagon",
  },
  {
    title: "Future-Ready Design",
    body: "Solutions designed to meet evolving environmental regulations and future operational requirements.",
    icon: "trendingUp",
  },
  {
    title: "Collaborative Delivery",
    body: "Close partnerships with clients from the earliest concept through project completion.",
    icon: "globe",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ---- Hero: full-bleed maritime photograph ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .ind-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: ind-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .ind-card {
                opacity: 0;
                transform: translateY(32px);
                animation: ind-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
              .ind-img {
                clip-path: inset(0 0 12% 0);
                animation: ind-img-in linear both;
                animation-timeline: view();
                animation-range: entry 0% cover 34%;
              }
              .ind-line {
                transform: scaleX(0);
                animation: ind-line-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 24%;
              }
              .ind-vline {
                transform: scaleY(0);
                animation: ind-vline-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 45%;
              }
            }
          }
          @keyframes ind-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes ind-img-in {
            to { clip-path: inset(0 0 0 0); }
          }
          @keyframes ind-line-in {
            to { transform: scaleX(1); }
          }
          @keyframes ind-vline-in {
            to { transform: scaleY(1); }
          }
          /* Card / chip cascade — offsets each grid item's own scroll-timeline
             so groups fan in rather than snapping together. */
          .ind-card:nth-child(2) { animation-delay: 90ms; }
          .ind-card:nth-child(3) { animation-delay: 180ms; }
          .ind-card:nth-child(4) { animation-delay: 270ms; }
          .ind-card:nth-child(5) { animation-delay: 360ms; }
          .ind-card:nth-child(6) { animation-delay: 450ms; }
          .ind-row:nth-child(2) { animation-delay: 80ms; }
          .ind-row:nth-child(3) { animation-delay: 160ms; }
          .ind-row:nth-child(4) { animation-delay: 240ms; }
          .ind-row:nth-child(5) { animation-delay: 320ms; }

          /* Hero: plays on load, not on scroll — above-the-fold content never
             crosses a scroll-timeline entry range, so it needs its own
             time-based choreography instead of .ind-reveal. */
          @media (prefers-reduced-motion: no-preference) {
            .ind-hero-el {
              opacity: 0;
              transform: translateY(18px);
              animation: ind-hero-in 1s cubic-bezier(0.16, 1, 0.3, 1) both;
            }
            .ind-hero-img {
              animation: ind-hero-zoom 15s ease-out both;
            }
          }
          @keyframes ind-hero-in {
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes ind-hero-zoom {
            from { transform: scale(1.04); }
            to { transform: scale(1.14); }
          }
        `}</style>

        <img
          src="https://loremflickr.com/1920/1080/cargo,ship"
          alt="Cargo ship at sea"
          className="ind-hero-img absolute inset-0 h-full w-full object-cover grayscale-[55%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />

        <Container className="relative">
          <div
            className="ind-hero-el flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Industries
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            <span className="ind-hero-el inline-block" style={{ animationDelay: "90ms" }}>
              Engineering solutions for complex energy systems across
            </span>{" "}
            <span
              className="ind-hero-el inline-block text-accent"
              style={{ animationDelay: "180ms" }}
            >
              critical industries.
            </span>
          </h1>
          <p
            className="ind-hero-el mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg"
            style={{ animationDelay: "260ms" }}
          >
            Every industry faces unique operational, regulatory, and
            sustainability challenges. Wavelength delivers tailored
            engineering solutions that help organizations transition to
            cleaner energy while maintaining safety, reliability, and
            long-term performance.
          </p>
          <div
            className="ind-hero-el mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "340ms" }}
          >
            <Button href="/contact" variant="solid" withArrow>
              Talk to an Engineer
            </Button>
            <Button href="/services" variant="outline-light">
              Explore Our Services
            </Button>
          </div>
        </Container>

        {/* Scroll cue */}
        <div
          aria-hidden
          className="ind-hero-el absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          style={{ animationDelay: "500ms" }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            Scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </Section>

      {/* ---- Intro: asymmetric editorial spread ---- */}
      <Section tone="paper" className="overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
            <div className="relative md:col-span-6 md:border-r md:border-line md:pr-10">
              <h2
                className="ind-reveal max-w-xl text-4xl font-semibold leading-[1.02] tracking-tight text-heading sm:text-5xl"
                style={{ animationDelay: "0ms" }}
              >
                One Engineering Partner.
                <span className="text-accent-strong"> Multiple Industries.</span>
              </h2>
              <p
                className="ind-reveal mt-6 max-w-md text-base leading-relaxed text-body md:text-lg"
                style={{ animationDelay: "90ms" }}
              >
                With decades of experience in maritime and industrial
                engineering, Wavelength supports clients across sectors where
                precision, safety, and operational continuity are essential.
              </p>
              <p
                className="ind-reveal mt-5 max-w-md text-sm leading-relaxed text-body"
                style={{ animationDelay: "170ms" }}
              >
                Our multidisciplinary team develops practical engineering
                solutions that reduce emissions, improve efficiency, and
                prepare organizations for the next generation of energy
                technologies.
              </p>
            </div>
            <div className="md:col-span-6 md:pt-10">
              <figure className="ind-img">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-mist">
                  <img
                    src="https://loremflickr.com/1000/750/engineer,industrial"
                    alt="Engineers reviewing industrial systems"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
                  />
                </div>
              </figure>
            </div>
          </div>

          {/* ---- Oversized figures: the scale of the work, not just the words ---- */}
          <div className="mt-20 grid grid-cols-1 divide-y divide-line border-t border-heading/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-28">
            {[
              { value: "40%", label: "Average carbon intensity cut across delivered systems" },
              { value: "12", label: "Marine & industrial decarbonisation programmes engineered" },
              { value: "6", label: "Licensed fabrication partners across three continents" },
            ].map((metric, i) => (
              <div
                key={metric.value}
                className={`ind-reveal ind-row ${i === 0 ? "pt-6 sm:pr-6" : "pt-6 sm:px-6"}`}
              >
                <p className="text-6xl font-semibold tracking-tight text-heading lg:text-7xl">
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

      {/* ---- Industries: CSS-only tab switcher — click a sector, the
          photograph and brief swap. No JS; native radio inputs + :has(). ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          .ind-switch .ind-panel {
            opacity: 0;
            transition: opacity 700ms ease-out;
          }
          .ind-switch .ind-panel img {
            transition: transform 900ms ease-out;
          }
          .ind-switch .ind-tab-label {
            color: rgba(255, 255, 255, 0.35);
          }
          .ind-switch .ind-tab-label:hover {
            color: rgba(255, 255, 255, 0.7);
          }
          .ind-switch .ind-tab-arrow {
            opacity: 0;
            transform: translateX(-4px);
            transition: opacity 300ms ease-out, transform 300ms ease-out;
          }
          .ind-switch .ind-tab-row {
            border-color: var(--color-line-dark);
          }
          ${industries
            .map(
              (_, i) => `
          .ind-switch:has([id="ind-tab-${i}"]:checked) .ind-panel:nth-of-type(${i + 1}) {
            opacity: 1;
          }
          .ind-switch:has([id="ind-tab-${i}"]:checked) .ind-panel:nth-of-type(${i + 1}) img {
            transform: scale(1.04);
          }
          .ind-switch:has([id="ind-tab-${i}"]:checked) .ind-tab-row:nth-of-type(${i + 1}) .ind-tab-label {
            color: #ffffff;
          }
          .ind-switch:has([id="ind-tab-${i}"]:checked) .ind-tab-row:nth-of-type(${i + 1}) {
            border-color: var(--color-accent);
          }
          .ind-switch:has([id="ind-tab-${i}"]:checked) .ind-tab-row:nth-of-type(${i + 1}) .ind-tab-arrow {
            opacity: 1;
            transform: translateX(0);
          }`
            )
            .join("\n")}
          /* Hover preview — same rules, defined after the checked rules so
             equal specificity resolves in hover's favor. Un-hovering falls
             back to whichever tab is actually checked. */
          ${industries
            .map(
              (_, i) => `
          .ind-switch:has(.ind-tab-row:nth-of-type(${i + 1}):hover) .ind-panel {
            opacity: 0;
          }
          .ind-switch:has(.ind-tab-row:nth-of-type(${i + 1}):hover) .ind-panel:nth-of-type(${i + 1}) {
            opacity: 1;
          }
          .ind-switch:has(.ind-tab-row:nth-of-type(${i + 1}):hover) .ind-panel:nth-of-type(${i + 1}) img {
            transform: scale(1.04);
          }
          .ind-switch:has(.ind-tab-row:nth-of-type(${i + 1}):hover) .ind-tab-row:nth-of-type(${i + 1}) .ind-tab-label {
            color: #ffffff;
          }
          .ind-switch:has(.ind-tab-row:nth-of-type(${i + 1}):hover) .ind-tab-row:nth-of-type(${i + 1}) {
            border-color: var(--color-accent);
          }
          .ind-switch:has(.ind-tab-row:nth-of-type(${i + 1}):hover) .ind-tab-row:nth-of-type(${i + 1}) .ind-tab-arrow {
            opacity: 1;
            transform: translateX(0);
          }`
            )
            .join("\n")}
          /* No :has() support: skip the switcher, show every sector stacked. */
          @supports not selector(:has(a)) {
            .ind-switch .ind-panel {
              position: static;
              opacity: 1;
            }
          }
        `}</style>

        <Container className="relative">
          <div className="ind-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Where we work
          </div>
          <h2 className="ind-reveal mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Six sectors, one engineering discipline
          </h2>

          <div className="ind-switch relative mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              {industries.map((industry, i) => (
                <label
                  key={industry.slug}
                  className="ind-tab-row group relative flex cursor-pointer items-center justify-between gap-4 border-t border-line-dark py-6 last:border-b"
                >
                  <input
                    type="radio"
                    name="ind-tab"
                    id={`ind-tab-${i}`}
                    defaultChecked={i === 0}
                    className="absolute inset-0 z-10 cursor-pointer opacity-0"
                  />
                  <span className="ind-tab-label pointer-events-none text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-3xl">
                    {industry.title}
                  </span>
                  <Icon
                    name="arrowRight"
                    className="ind-tab-arrow pointer-events-none h-5 w-5 shrink-0 text-accent"
                  />
                </label>
              ))}
            </div>

            <div className="lg:sticky lg:top-24 lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink-2 lg:aspect-[16/11]">
                {industries.map((industry) => (
                  <div key={industry.slug} className="ind-panel absolute inset-0">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale-[45%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <span className="hex-clip mb-4 flex h-11 w-11 items-center justify-center bg-accent text-ink">
                        <Icon name={industry.icon} className="h-5 w-5" />
                      </span>
                      <p className="max-w-md text-sm leading-relaxed text-body-dark md:text-base">
                        {industry.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {industry.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-white/80"
                          >
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Engineering expertise: phases ---- */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-12">
            <div className="ind-reveal md:col-span-7">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                Engineering expertise
              </div>
              <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.03] tracking-tight text-heading sm:text-5xl">
                Comprehensive engineering across every project phase
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-16">
              <p className="ind-reveal border-t border-heading/80 pt-6 text-base leading-relaxed text-body md:text-lg">
                Whether designing a new energy system or upgrading existing
                infrastructure, Wavelength provides engineering support from
                concept to commissioning.
              </p>
            </div>
          </div>

          {/* Below lg: vertical rail */}
          <div className="relative mt-14 lg:hidden">
            <span
              aria-hidden
              className="ind-vline pointer-events-none absolute bottom-2 left-[21px] top-2 hidden w-px origin-top bg-line md:block"
            />
            <div className="space-y-0">
              {phases.map((phase) => (
                <div
                  key={phase.title}
                  className="ind-reveal ind-row group relative grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line py-7 transition-colors duration-500 hover:border-accent/60 md:gap-x-10"
                >
                  <span className="hex-clip relative z-10 flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-110">
                    <Icon name={phase.icon} className="h-5 w-5" />
                  </span>
                  <div className="transition-transform duration-500 group-hover:translate-x-1.5">
                    <h3 className="text-xl font-semibold tracking-tight text-heading md:text-2xl">
                      {phase.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-body">
                      {phase.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lg+: horizontal process timeline */}
          <div className="relative mt-20 hidden lg:block">
            <span
              aria-hidden
              className="ind-line pointer-events-none absolute left-0 right-0 top-[22px] h-px origin-left bg-line"
            />
            <div className="grid grid-cols-5 gap-8">
              {phases.map((phase) => (
                <div key={phase.title} className="ind-reveal ind-row group">
                  <span className="hex-clip relative z-10 flex h-11 w-11 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-110">
                    <Icon name={phase.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-heading transition-transform duration-500 group-hover:translate-x-1">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {phase.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Our approach: checklist + supporting photograph ---- */}
      <Section tone="ink-2" className="overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-12">
            <div className="ind-reveal md:col-span-6">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                Our approach
              </div>
              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl">
                Engineering built around
                <span className="text-accent"> practical outcomes</span>.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-body-dark md:text-lg">
                Our work is driven by solving real operational challenges
                &mdash; not simply delivering technical documentation.
              </p>

              <p className="mt-10 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
                We prioritize
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {priorities.map((item) => (
                  <li
                    key={item}
                    className="ind-reveal ind-row group flex items-center gap-3 text-sm leading-relaxed text-white"
                  >
                    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-6 md:pt-10">
              <figure className="ind-img">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink-3">
                  <img
                    src="https://loremflickr.com/1000/750/safety,industrial"
                    alt="Safety-first industrial engineering in practice"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[45%] transition-all duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
                  />
                </div>
              </figure>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Supporting the energy transition: documentary fact list —
          split rows, no icons, no cards. Reads like a spec sheet, not
          another badge grid. ---- */}
      <Section tone="mist">
        <Container>
          <h2 className="ind-reveal max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            Supporting the energy transition through engineering
          </h2>

          <div className="mt-14">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="ind-reveal ind-row group grid grid-cols-1 gap-x-10 gap-y-3 border-t border-heading/80 py-8 transition-colors duration-500 hover:border-accent last:border-b sm:grid-cols-12"
              >
                <h3 className="sm:col-span-4">
                  <span className="text-xl font-semibold tracking-tight text-heading transition-colors duration-500 group-hover:text-accent-strong md:text-2xl">
                    {h.title}
                  </span>
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-body sm:col-span-8 md:text-base">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Why choose Wavelength: manifesto grid — large type, no
          icons, no card boxes. Distinct from the process timeline and the
          fact list above it. ---- */}
      <Section tone="paper">
        <Container>
          <div className="ind-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Why choose Wavelength
          </div>
          <h2 className="ind-reveal mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            A trusted engineering partner
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="ind-reveal ind-row border-t border-heading/80 pt-6"
              >
                <h3 className="max-w-sm text-2xl font-semibold leading-tight tracking-tight text-heading md:text-[1.75rem]">
                  {reason.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-body md:text-base">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Closing CTA ---- */}
      <div className="ind-reveal">
        <CTASection
          eyebrow="Let's talk"
          title="Ready to engineer your next project?"
          description="Whether you're modernizing an industrial facility, designing an alternative fuel system, or planning your decarbonisation strategy, Wavelength is ready to help. Let's build practical engineering solutions that move your business toward a more sustainable future."
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="solid" withArrow>
              Start a Conversation
            </Button>
            <Button href="/services" variant="outline-light">
              View Our Services
            </Button>
          </div>
        </CTASection>
      </div>
    </>
  );
}
