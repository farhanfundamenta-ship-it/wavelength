import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon, type IconName } from "@/components/ui/icons";
import { AssessmentWizard } from "@/features/readiness-assessment/components/AssessmentWizard";

export const metadata: Metadata = buildMetadata({
  title: "Maritime Decarbonization Readiness Assessment",
  description:
    "Take a free 5-minute readiness assessment and get your score, gap analysis, and recommended next steps for your maritime decarbonization strategy.",
  path: "/readiness-assessment",
});

const deliverables: { title: string; icon: IconName }[] = [
  { title: "Readiness Score", icon: "compass" },
  { title: "Gap Analysis", icon: "shield" },
  { title: "Recommended Next Steps", icon: "trendingUp" },
  { title: "Full PDF Report", icon: "hexagon" },
];

const chapters: { title: string; description: string; pages: string }[] = [
  {
    title: "IMO Regulations, Decoded",
    description: "What the 2030 and 2050 targets actually require, cutting through the acronyms.",
    pages: "03",
  },
  {
    title: "The Fuel Transition Roadmap",
    description: "A phased path from where your fleet stands today to where regulation is heading.",
    pages: "09",
  },
  {
    title: "Technology Comparison",
    description: "Hydrogen, methanol, ammonia, biofuels, and LNG, measured against the same criteria.",
    pages: "14",
  },
  {
    title: "Investment Planning",
    description: "Budgeting for a multi-year transition without stalling day-to-day operations.",
    pages: "19",
  },
  {
    title: "Common Mistakes",
    description: "The missteps we see most often on real projects, and how to avoid repeating them.",
    pages: "24",
  },
];

export default function ReadinessAssessmentPage() {
  return (
    <>
      {/* ---- Landing hero: full-bleed photo, asymmetric split with a
          live-preview mockup of the assessment result ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <img
          src="/images/beautiful-sea-view-from-ship.jpg"
          alt="View from an operating vessel at sea"
          className="absolute inset-0 h-full w-full object-cover grayscale-[55%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/60" />

        <Container className="relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Free Readiness Assessment
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              How ready is your organization for
              <span className="text-accent"> maritime decarbonization</span>?
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-body-dark md:text-lg">
              A 5-minute interactive assessment for ship owners, offshore
              operators, port authorities, and energy companies. Answer a
              short set of questions and get a personalized readiness score
              at the end.
            </p>

            <a
              href="#assessment"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-accent-strong"
            >
              Start Free Assessment
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {deliverables.map((item) => (
                <div key={item.title} className="flex items-center gap-2">
                  <Icon name={item.icon} className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-white/80">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Interactive assessment ---- */}
      <Section id="assessment" tone="paper">
        <Container>
          <div className="mx-auto max-w-2xl">
            <AssessmentWizard />
          </div>
        </Container>
      </Section>

      {/* ---- Lead magnet detail: the report rendered as an open dossier —
          a cover with drafting-grid texture and registration marks on the
          left, a real table of contents with page numbers on the right.
          Signature element for this page: it reads as a document you're
          about to receive, not another feature-bullet grid. ---- */}
      <Section tone="mist" className="overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .rpt-reveal {
                opacity: 0;
                transform: translateY(24px);
                animation: rpt-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 6% cover 32%;
              }
              .rpt-row {
                opacity: 0;
                transform: translateY(14px);
                animation: rpt-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
              .rpt-row:nth-child(2) { animation-delay: 70ms; }
              .rpt-row:nth-child(3) { animation-delay: 140ms; }
              .rpt-row:nth-child(4) { animation-delay: 210ms; }
              .rpt-row:nth-child(5) { animation-delay: 280ms; }
            }
          }
          @keyframes rpt-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <Container>
          <div className="rpt-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Free download
          </div>
          <h2 className="rpt-reveal mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            A report built to be read, not skimmed
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12 lg:items-stretch">
            {/* ---- Cover ---- */}
            <div className="rpt-reveal lg:col-span-5">
              <div
                className="relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-sm bg-ink p-8"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 32px)",
                }}
              >
                {/* Registration marks, corner-plotted like a drafting sheet */}
                <span aria-hidden className="absolute left-5 top-5 h-3 w-3 border-l border-t border-accent/60" />
                <span aria-hidden className="absolute right-5 top-5 h-3 w-3 border-r border-t border-accent/60" />
                <span aria-hidden className="absolute bottom-5 left-5 h-3 w-3 border-b border-l border-accent/60" />
                <span aria-hidden className="absolute bottom-5 right-5 h-3 w-3 border-b border-r border-accent/60" />
                {/* Spine */}
                <span aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-accent" />

                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  Doc. WL&ndash;2026&ndash;RA
                </p>

                <h3 className="text-2xl font-semibold uppercase leading-[1.15] tracking-tight text-white">
                  Maritime
                  <br />
                  Decarbonization
                  <br />
                  Readiness
                  <br />
                  <span className="text-accent">Handbook</span>
                </h3>

                <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                  <span>26 pages</span>
                  <span>PDF &middot; Rev. 2026</span>
                </div>
              </div>
            </div>

            {/* ---- Table of contents ---- */}
            <div className="lg:col-span-7">
              <div className="border-t border-heading/80">
                {chapters.map((chapter, i) => (
                  <div
                    key={chapter.title}
                    className="rpt-row group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-b border-line py-5 transition-colors duration-300 hover:border-accent/60"
                  >
                    <span className="font-mono text-xs text-body">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-base font-semibold tracking-tight text-heading transition-colors duration-300 group-hover:text-accent-strong">
                        {chapter.title}
                      </p>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-body">
                        {chapter.description}
                      </p>
                    </div>
                    <span className="self-start font-mono text-xs text-body">
                      p.{chapter.pages}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
