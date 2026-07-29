import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon, type IconName } from "@/components/ui/icons";

const reasons: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Proven technology",
    description:
      "We build on components with a track record, not unproven lab science — so projects stay bankable and buildable.",
    icon: "shield",
  },
  {
    title: "Engineering-led",
    description:
      "Every project starts with systems engineering, not a sales pitch. The design has to work before it ships.",
    icon: "compass",
  },
  {
    title: "Scalable pathways",
    description:
      "We design for where your business is today, with a clear path to a fully decarbonised asset over time.",
    icon: "trendingUp",
  },
  {
    title: "Licensed partner network",
    description:
      "We design and engineer; our licensed partners fabricate and deliver, close to where you operate.",
    icon: "globe",
  },
];

export function WhyWavelength() {
  return (
    <Section tone="ink-2" className="relative overflow-hidden">
      <Container>
        {/* ---- Masthead kicker ---- */}
        <div className="reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Why Wavelength
        </div>

        {/* ---- Editorial spread: heading + copy / reasons + supporting image ---- */}
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-14 md:grid-cols-12">
          {/* Left rail: oversized heading, editorial paragraph, feature image */}
          <div className="md:col-span-5">
            <h2 className="reveal max-w-xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
              A pragmatic path to
              <span className="text-accent"> zero-carbon </span>
              assets.
            </h2>

            <p className="reveal mt-8 max-w-md text-base leading-relaxed text-body-dark md:text-lg">
              The world doesn&rsquo;t stop for the energy transition. Our systems
              keep your business running today while building toward a
              post-fossil-fuel world.
            </p>

            <a
              href="/technology"
              className="reveal group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-white"
            >
              <span className="border-b border-white/30 pb-1 transition-colors group-hover:border-accent">
                See how we engineer it
              </span>
              <Icon
                name="arrowRight"
                className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Feature image, offset below copy */}
            <figure className="reveal-img mt-12 md:mt-16">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-ink-2">
                <img
                  src="/images/view-water-tank-storage.jpg"
                  alt="Engineers reviewing a systems design"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[45%] transition-all duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
                />
                <figcaption className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                  Systems design review &mdash; in progress
                </figcaption>
              </div>
            </figure>
          </div>

          {/* Right rail: reasons as numbered editorial callouts, offset down */}
          <div className="md:col-span-7 md:pl-4 md:pt-6">
            <div className="space-y-0">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="reveal group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line-dark py-7 transition-colors duration-500 hover:border-accent/50 md:gap-x-10"
                >
                  <span className="hex-clip flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                    <Icon name={reason.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                      {reason.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-body-dark">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
