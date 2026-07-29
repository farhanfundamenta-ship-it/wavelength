import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PremiumHighlightCard } from "@/features/home/components/PremiumHighlightCard";
import type { IconName } from "@/components/ui/icons";

const highlights: {
  category: string;
  title: string;
  body: string;
  icon: IconName;
  href: string;
  stat?: string;
  statLabel?: string;
  className: string;
}[] = [
  {
    category: "Approach",
    title: "Independent Engineering",
    body: "Technology-agnostic solutions tailored to your operational needs — not tied to a single supplier.",
    icon: "compass",
    href: "/technology",
    stat: "0",
    statLabel: "suppliers we're contractually tied to",
    className: "lg:col-span-7 lg:min-h-[24rem]",
  },
  {
    category: "Reach",
    title: "Global Experience",
    body: "Extensive expertise across maritime, industrial, and renewable energy projects worldwide.",
    icon: "globe",
    href: "/industries",
    className: "lg:col-span-5 lg:min-h-[24rem]",
  },
  {
    category: "Longevity",
    title: "Future-Ready Design",
    body: "Systems engineered to adapt to evolving regulations, emerging fuels, and tomorrow's energy landscape.",
    icon: "trendingUp",
    href: "/technology",
    className: "lg:col-span-5 lg:min-h-[22rem]",
  },
  {
    category: "Delivery",
    title: "End-to-End Support",
    body: "From feasibility studies and detailed design to implementation and commissioning assistance.",
    icon: "shuffle",
    href: "/services",
    stat: "6",
    statLabel: "licensed fabrication partners on call",
    className: "lg:col-span-7 lg:min-h-[22rem]",
  },
];

const quote = ["Practical engineering.", "Sustainable solutions.", "Long-term partnerships."];

export function EngineeringConfidence() {
  return (
    <Section tone="paper" className="relative overflow-hidden">
      <Container className="relative">
        {/* ---- Masthead: eyebrow + display heading + body ---- */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Why Wavelength
            </div>
            <h2 className="reveal mt-6 max-w-2xl text-4xl font-semibold leading-[1.03] tracking-tight text-heading sm:text-5xl lg:text-[3.5rem]">
              Engineering confidence for every stage of the
              <span className="text-accent-deep"> energy transition</span>.
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-16">
            <p className="reveal border-t border-heading/80 pt-6 text-base leading-relaxed text-body md:text-lg">
              From concept development to detailed engineering and commissioning
              support, we help maritime and industrial businesses adopt cleaner
              technologies with confidence. Every solution is designed to meet
              operational demands, regulatory requirements, and long-term
              performance goals — while remaining practical to build and maintain.
            </p>
          </div>
        </div>

        {/* ---- Key highlights: asymmetric bento of premium engineering cards ---- */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:mt-20 lg:grid-cols-12">
          {highlights.map((h, i) => (
            <PremiumHighlightCard
              key={h.title}
              index={i}
              category={h.category}
              title={h.title}
              body={h.body}
              icon={h.icon}
              href={h.href}
              stat={h.stat}
              statLabel={h.statLabel}
              className={h.className}
            />
          ))}
        </div>

        {/* ---- Highlight quote: oversized statement band ---- */}
        <figure className="reveal relative mt-20 md:mt-28">
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
                className="reveal-word inline-block"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className={i === quote.length - 1 ? "text-accent-deep" : undefined}>
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
