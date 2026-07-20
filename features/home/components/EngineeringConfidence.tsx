import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon, type IconName } from "@/components/ui/icons";

const highlights: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Independent Engineering",
    body: "Technology-agnostic solutions tailored to your operational needs — not tied to a single supplier.",
    icon: "compass",
  },
  {
    title: "Global Experience",
    body: "Extensive expertise across maritime, industrial, and renewable energy projects worldwide.",
    icon: "globe",
  },
  {
    title: "Future-Ready Design",
    body: "Systems engineered to adapt to evolving regulations, emerging fuels, and tomorrow's energy landscape.",
    icon: "trendingUp",
  },
  {
    title: "End-to-End Support",
    body: "From feasibility studies and detailed design to implementation and commissioning assistance.",
    icon: "shuffle",
  },
];

const quote = ["Practical engineering.", "Sustainable solutions.", "Long-term partnerships."];

export function EngineeringConfidence() {
  return (
    <Section tone="paper" className="relative overflow-hidden">
      {/* Scoped, self-contained scroll-reveal. Degrades to fully-visible
          content where scroll-driven animation / motion preference is absent. */}
      <style>{`
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .wl6-reveal {
              opacity: 0;
              transform: translateY(28px);
              animation: wl6-reveal-in linear both;
              animation-timeline: view();
              animation-range: entry 4% cover 26%;
            }
            .wl6-card {
              opacity: 0;
              transform: translateY(36px);
              animation: wl6-reveal-in linear both;
              animation-timeline: view();
              animation-range: entry 2% cover 30%;
            }
            .wl6-word {
              opacity: 0;
              transform: translateY(0.5em);
              animation: wl6-word-in linear both;
              animation-timeline: view();
              animation-range: entry 6% cover 40%;
            }
          }
        }
        @keyframes wl6-reveal-in {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wl6-word-in {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Soft accent bloom + oversized ghost index */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-24 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative">
        {/* ---- Masthead: eyebrow + display heading + body ---- */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="wl6-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Why Wavelength
            </div>
            <h2 className="wl6-reveal mt-6 max-w-2xl text-4xl font-semibold leading-[1.03] tracking-tight text-heading sm:text-5xl lg:text-[3.5rem]">
              Engineering confidence for every stage of the
              <span className="text-accent-strong"> energy transition</span>.
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-16">
            <p className="wl6-reveal border-t border-heading/80 pt-6 text-base leading-relaxed text-body md:text-lg">
              From concept development to detailed engineering and commissioning
              support, we help maritime and industrial businesses adopt cleaner
              technologies with confidence. Every solution is designed to meet
              operational demands, regulatory requirements, and long-term
              performance goals — while remaining practical to build and maintain.
            </p>
          </div>
        </div>

        {/* ---- Key highlights: interactive card grid ---- */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="wl6-card group relative overflow-hidden rounded-sm border border-line bg-mist/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-paper hover:shadow-2xl hover:shadow-ink/5"
            >
              {/* Top accent bar wipes in on hover */}
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />

              <span className="hex-clip relative flex h-12 w-12 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                <Icon name={h.icon} className="h-5 w-5" />
              </span>
              <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-heading">
                {h.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-body">
                {h.body}
              </p>
            </div>
          ))}
        </div>

        {/* ---- Highlight quote: oversized statement band ---- */}
        <figure className="wl6-reveal relative mt-20 md:mt-28">
          <span
            aria-hidden
            className="absolute -left-2 -top-10 select-none font-serif text-[10rem] leading-none text-accent/25 md:-left-6 md:text-[14rem]"
          >
            &ldquo;
          </span>
          <blockquote className="relative max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-heading sm:text-4xl md:text-5xl lg:text-6xl">
            {quote.map((phrase, i) => (
              <span
                key={phrase}
                className="wl6-word inline-block"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className={i === quote.length - 1 ? "text-accent-strong" : undefined}>
                  {phrase}
                </span>
                {i < quote.length - 1 ? <span aria-hidden> </span> : null}
              </span>
            ))}
          </blockquote>
        </figure>
      </Container>
    </Section>
  );
}
