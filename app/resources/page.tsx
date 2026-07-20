import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon, type IconName } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description:
    "Guides, case studies and technical downloads on marine and industrial decarbonisation engineering.",
  path: "/resources",
});

type Category = "guide" | "case-study" | "insight" | "download";

const categoryLabels: Record<Category, string> = {
  guide: "Guides",
  "case-study": "Case Studies",
  insight: "Insights",
  download: "Downloads",
};

const resources: {
  slug: string;
  category: Category;
  title: string;
  description: string;
  icon: IconName;
  meta: string;
}[] = [
  {
    slug: "marine-alt-fuel-buyers-guide",
    category: "guide",
    title: "Marine Alternative Fuel Systems: A Buyer's Guide",
    description:
      "How to evaluate dual-fuel propulsion and bunkering options before committing capital.",
    icon: "fuel",
    meta: "Guide · 12 min read",
  },
  {
    slug: "industrial-decarbonisation-roadmap",
    category: "guide",
    title: "Industrial Decarbonisation Roadmap Framework",
    description:
      "A phased framework for cutting process-heat emissions without stopping the line.",
    icon: "compass",
    meta: "Guide · 9 min read",
  },
  {
    slug: "lng-bunkering-retrofit-north-sea",
    category: "case-study",
    title: "LNG Bunkering Vessel Retrofit — North Sea",
    description:
      "Retrofitting an operating dual-fuel vessel for expanded LNG bunkering capacity.",
    icon: "ship",
    meta: "Case Study · Maritime",
  },
  {
    slug: "waste-heat-recovery-steel-plant",
    category: "case-study",
    title: "Waste Heat Recovery for a Steel Plant",
    description:
      "A heat-recovery retrofit that cut process energy intensity by a third.",
    icon: "factory",
    meta: "Case Study · Heavy Industry",
  },
  {
    slug: "imo-2030-shipowners",
    category: "insight",
    title: "IMO 2030 Targets: What Shipowners Need to Know",
    description:
      "What the updated emissions targets mean for fleet investment decisions.",
    icon: "anchor",
    meta: "Insight · Regulation",
  },
  {
    slug: "hydrogen-bunkering-commercial-scale",
    category: "insight",
    title: "Hydrogen Bunkering Enters Commercial Scale",
    description:
      "Early signals from the first commercial-scale hydrogen bunkering corridors.",
    icon: "bolt",
    meta: "Insight · Energy",
  },
  {
    slug: "company-profile-2025",
    category: "download",
    title: "2025 Company Profile",
    description:
      "An overview of Wavelength's engineering capabilities and delivered programmes.",
    icon: "hexagon",
    meta: "Download · PDF",
  },
  {
    slug: "technical-capability-statement",
    category: "download",
    title: "Technical Capability Statement",
    description:
      "Detailed technical scope across marine, offshore and industrial disciplines.",
    icon: "shield",
    meta: "Download · PDF",
  },
];

const categories: Category[] = ["guide", "case-study", "insight", "download"];

export default function ResourcesPage() {
  return (
    <>
      {/* ---- Page intro ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .res-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: res-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .res-card {
                opacity: 0;
                transform: translateY(32px);
                animation: res-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
            }
          }
          @keyframes res-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <Container className="relative">
          <div className="res-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Resources
          </div>
          <h1 className="res-reveal mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Guides, case studies and
            <span className="text-accent"> technical downloads</span>.
          </h1>
          <p className="res-reveal mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            Practical reading for anyone planning a marine or industrial
            decarbonisation programme &mdash; drawn from projects we&rsquo;ve
            engineered and delivered.
          </p>
        </Container>
      </Section>

      {/* ---- Filterable library: CSS-only category switcher. No JS —
          native radio inputs + :has() toggle card visibility. ---- */}
      <Section tone="paper">
        <style>{`
          .res-hub .res-card { display: block; }
          ${categories
            .map(
              (cat) => `
          .res-hub:has(#res-filter-${cat}:checked) .res-card:not([data-cat="${cat}"]) {
            display: none;
          }`
            )
            .join("\n")}
          .res-chip {
            color: var(--color-body);
            border-color: var(--color-line);
          }
          .res-chip:hover {
            border-color: var(--color-accent);
          }
          ${categories
            .map(
              (cat) => `
          .res-hub:has(#res-filter-${cat}:checked) label[for="res-filter-${cat}"] {
            background: var(--color-accent);
            border-color: var(--color-accent);
            color: var(--color-ink);
          }`
            )
            .join("\n")}
          .res-hub:has(#res-filter-all:checked) label[for="res-filter-all"] {
            background: var(--color-accent);
            border-color: var(--color-accent);
            color: var(--color-ink);
          }
        `}</style>

        <Container className="res-hub">
          <fieldset className="flex flex-wrap gap-2">
            <legend className="sr-only">Filter resources by category</legend>

            <input
              type="radio"
              name="res-filter"
              id="res-filter-all"
              defaultChecked
              className="peer sr-only"
            />
            <label
              htmlFor="res-filter-all"
              className="res-chip cursor-pointer rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300"
            >
              All
            </label>

            {categories.map((cat) => (
              <label key={cat} htmlFor={`res-filter-${cat}`} className="contents">
                <input
                  type="radio"
                  name="res-filter"
                  id={`res-filter-${cat}`}
                  className="peer sr-only"
                />
                <span className="res-chip cursor-pointer rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300">
                  {categoryLabels[cat]}
                </span>
              </label>
            ))}
          </fieldset>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <a
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                data-cat={resource.category}
                className="res-card group relative overflow-hidden rounded-sm border border-line bg-mist/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-paper hover:shadow-2xl hover:shadow-ink/5"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="hex-clip relative flex h-12 w-12 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                  <Icon name={resource.icon} className="h-5 w-5" />
                </span>
                <p className="relative mt-6 text-xs font-medium uppercase tracking-[0.15em] text-accent-strong">
                  {resource.meta}
                </p>
                <h2 className="relative mt-2 text-lg font-semibold tracking-tight text-heading">
                  {resource.title}
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-body">
                  {resource.description}
                </p>
                <span className="relative mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-heading">
                  Read more
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Closing CTA ---- */}
      <CTASection
        eyebrow="Let's talk"
        title="Have a project in mind?"
        description="Tell us about your challenge. Our engineers will help design the right system for it."
      >
        <Button href="/contact" variant="solid" withArrow>
          Get in Touch
        </Button>
      </CTASection>
    </>
  );
}
