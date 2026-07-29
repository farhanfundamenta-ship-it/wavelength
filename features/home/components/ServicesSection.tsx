import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/icons";

const capabilities = [
  {
    title: "LNG & alternative-fuel systems",
    body: "Dual-fuel propulsion, bunkering and containment engineered for the working marine fleet.",
  },
  {
    title: "Offshore & marine structures",
    body: "Fixed and floating assets designed to hold their tolerances inside the harshest operating envelopes.",
  },
  {
    title: "Industrial decarbonisation",
    body: "Process heat, electrification and heat-recovery retrofits that cut intensity without stopping the line.",
  },
];

export function ServicesSection() {
  return (
    <Section tone="ink" className="relative overflow-hidden">
      <Container>
        {/* ---- Masthead kicker ---- */}
        <div className="reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Capabilities
        </div>

        {/* ---- Primary editorial spread: dominant image + heading ---- */}
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-14 md:mt-14 md:grid-cols-12">
          {/* Dominant full-height image, narrow tall column on the left */}
          <div className="relative md:col-span-5">
            <figure className="reveal-img">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-ink-2 md:aspect-[3/4] md:min-h-[34rem]">
                <img
                  src="/images/high-angle-view-river-flowing-through-rocks.jpg"
                  alt="Offshore engineering platform at dusk"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[45%] transition-all duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
                />
                <figcaption className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                  Offshore platform &mdash; commissioning
                </figcaption>
              </div>
            </figure>

            {/* Small supporting image #1, overlapping the dominant image corner */}
            <figure className="reveal-img absolute -bottom-10 -right-6 hidden w-40 lg:block xl:w-48">
              <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-ink-3 shadow-2xl shadow-black/40 ring-1 ring-white/10">
                <img
                  src="/images/view-water-tank-storage.jpg"
                  alt="Engineering team on site"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[45%] transition-all duration-700 ease-out hover:grayscale-0"
                />
              </div>
            </figure>
          </div>

          {/* Right rail: oversized heading, editorial paragraph, capabilities */}
          <div className="md:col-span-7 md:pl-4 md:pt-6">
            <h2 className="reveal max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
              Building the infrastructure that carries
              <span className="text-accent"> industry </span>
              through the transition.
            </h2>

            <p className="reveal mt-8 max-w-md text-base leading-relaxed text-body-dark md:text-lg">
              We engineer sustainable maritime and industrial infrastructure
              &mdash; the vessels, structures and process systems that keep
              heavy industry running while its emissions come down.
            </p>

            {/* Three capabilities as editorial callouts, not cards */}
            <div className="mt-14 space-y-0">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="reveal group border-t border-line-dark py-7 transition-colors duration-500 hover:border-accent/50"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {cap.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-body-dark">
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Layered stat band + wide supporting image + CTA ---- */}
        <div className="relative mt-24 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-28 md:grid-cols-12">
          {/* Highlighted statistic, straddling negative space on the left */}
          <div className="reveal md:col-span-5 md:self-center">
            <div className="border-t border-white/80 pt-6">
              <p className="text-6xl font-semibold leading-none tracking-tight text-white lg:text-7xl">
                1.4M<span className="align-top text-2xl text-accent"> t</span>
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-body-dark">
                CO<sub>2</sub> emissions avoided each year across the assets we
                have engineered and commissioned to date.
              </p>

              <a
                href="/services"
                className="group mt-12 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] text-white"
              >
                <span className="border-b border-white/30 pb-1 transition-colors duration-300 group-hover:border-accent">
                  Explore our capabilities
                </span>
                <span className="hex-clip flex h-9 w-9 items-center justify-center bg-accent text-ink transition-transform duration-300 group-hover:translate-x-1">
                  <Icon name="arrowRight" className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Supporting image #2, wide renewable-infrastructure strip,
              pulled upward to overlap the stat baseline */}
          <figure className="reveal-img md:col-span-7 md:-mt-16 md:pl-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-ink-2">
              <img
                src="/images/chimney.jpg"
                alt="Renewable energy infrastructure at scale"
                loading="lazy"
                className="h-full w-full object-cover grayscale-[45%] transition-all duration-700 ease-out hover:scale-[1.02] hover:grayscale-0"
              />
              <figcaption className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                Grid-scale renewable programme
              </figcaption>
            </div>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
