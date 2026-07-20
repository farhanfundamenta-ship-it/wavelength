import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/icons";

const metrics = [
  { value: "40%", label: "Average carbon intensity cut across delivered systems" },
  { value: "12", label: "Marine & industrial decarbonisation programmes engineered" },
  { value: "6", label: "Licensed fabrication partners across three continents" },
];

export function CompanyIntro() {
  return (
    <Section tone="paper" className="overflow-hidden">
      {/* Scoped, self-contained scroll-reveal. Falls back to fully visible
          content in browsers without scroll-driven animation support. */}
      <style>{`
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .wl-reveal {
              opacity: 0;
              transform: translateY(28px);
              animation: wl-reveal-in linear both;
              animation-timeline: view();
              animation-range: entry 5% cover 26%;
            }
            .wl-reveal-img {
              clip-path: inset(0 0 12% 0);
              animation: wl-reveal-img linear both;
              animation-timeline: view();
              animation-range: entry 0% cover 34%;
            }
          }
        }
        @keyframes wl-reveal-in {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wl-reveal-img {
          to { clip-path: inset(0 0 0 0); }
        }
      `}</style>

      <Container>
        {/* ---- Editorial masthead: kicker ---- */}
        <div className="wl-reveal">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            About Wavelength
          </span>
        </div>

        {/* ---- Asymmetric 12-col editorial grid ---- */}
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-0">
          {/* Left rail: display headline, spans wide + tall */}
          <div className="wl-reveal md:col-span-7 md:pr-6">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight text-heading sm:text-5xl lg:text-6xl">
              Systems engineering for a
              <span className="text-accent-strong"> lower-carbon </span>
              world.
            </h2>

            {/* Large feature image, offset below headline */}
            <figure className="wl-reveal-img mt-12 md:mt-16">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-mist">
                <img
                  src="/images/lng-bunkering-vessel-underway-narrow-congested-navigational-channel-tanker-designed-ship.jpg"
                  alt="LNG carrier at sea"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
                />
                <figcaption className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                  LNG dual-fuel vessel &mdash; North Sea
                </figcaption>
              </div>
            </figure>
          </div>

          {/* Right rail: editorial copy, offset downward for asymmetry */}
          <div className="md:col-span-5 md:pt-28 md:pl-6">
            <div className="wl-reveal border-t border-heading/80 pt-6">
              <p className="text-lg leading-relaxed text-heading md:text-xl">
                We combine deep systems-engineering knowledge with a pragmatic
                design philosophy &mdash; so today&rsquo;s business keeps running
                while tomorrow&rsquo;s energy systems get built.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-body">
                Greener alternatives to carbon-intensive systems for the maritime
                and industrial sectors, assembled from proven components applied
                in new ways, and delivered through a network of licensed
                fabrication partners.
              </p>

              <a
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-heading"
              >
                <span className="border-b border-heading/30 pb-1 transition-colors group-hover:border-accent">
                  Read our approach
                </span>
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 text-accent-strong transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Supporting image #1, tucked under the copy */}
              <figure className="wl-reveal-img mt-12 hidden md:block">
                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-sm bg-mist">
                  <img
                    src="/images/polar.jpg"
                    alt="Industrial energy plant"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>

        {/* ---- Overlapping metrics band straddling image + a second support image ---- */}
        <div className="relative mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-8 md:grid-cols-12">
          {/* Supporting image #2, wide short strip on the left */}
          <figure className="wl-reveal-img md:col-span-5 md:-mt-24">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-mist md:aspect-[3/4]">
              <img
                src="/images/chimney.jpg"
                alt="Maritime engineering infrastructure"
                loading="lazy"
                className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
              />
            </div>
          </figure>

          {/* Metrics: layered block, overlaps the image column on desktop */}
          <div className="wl-reveal md:col-span-7 md:self-end md:pl-6">
            <div className="grid grid-cols-1 divide-y divide-line border-t border-heading/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {metrics.map((metric, i) => (
                <div
                  key={metric.value}
                  className={i === 0 ? "pt-6 sm:pr-6" : "pt-6 sm:px-6"}
                >
                  <p className="text-4xl font-semibold tracking-tight text-heading lg:text-5xl">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-body">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
