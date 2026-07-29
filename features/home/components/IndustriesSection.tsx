import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/icons";
import { industries } from "@/data/industries/industries";

const images = [
  "/images/chimney.jpg",
  "/images/polar.jpg",
  "/images/lng-bunkering-vessel-underway-narrow-congested-navigational-channel-tanker-designed-ship.jpg",
  "/images/view-water-tank-storage.jpg",
];

export function IndustriesSection() {
  return (
    <Section tone="paper" className="relative overflow-hidden">
      {/* Panel entrance uses the shared .reveal-panel animation (styles/animations/scroll-reveal.css).
          This block is the accordion choreography unique to this component. */}
      <style>{`
        /* Expanding-panel accordion: first panel is expanded by default,
           hovered panel grows, siblings recede. Falls back to equal columns
           without :hover (touch / keyboard tab). */
        @media (min-width: 768px) {
          .wl4-panel { flex: 1 1 0%; }
          .wl4-panel:first-child { flex-grow: 4.5; }
          .wl4-panel:not(:first-child) { flex-grow: 0.75; }
          .wl4-panel:hover, .wl4-panel:focus-visible { flex-grow: 4.5; }
          .wl4-rail:hover .wl4-panel:not(:hover) { flex-grow: 0.75; }

          /* First panel mirrors the hovered look by default: image saturated,
             expanded content shown, collapsed label hidden, baseline drawn. */
          .wl4-panel:first-child .wl4-bg-img {
            transform: scale(1.05);
            filter: grayscale(0) saturate(1) brightness(0.9);
          }
          .wl4-panel:first-child .wl4-collapsed-label { opacity: 0; }
          .wl4-panel:first-child .wl4-expanded {
            opacity: 1;
            transform: translateY(0);
          }
          .wl4-panel:first-child .wl4-baseline { transform: scaleX(1); }

          /* Handed back to real :hover once another panel is hovered. */
          .wl4-rail:hover .wl4-panel:first-child:not(:hover) .wl4-bg-img {
            transform: none;
            filter: grayscale(1) saturate(0) brightness(0.55);
          }
          .wl4-rail:hover .wl4-panel:first-child:not(:hover) .wl4-collapsed-label {
            opacity: 0.9;
          }
          .wl4-rail:hover .wl4-panel:first-child:not(:hover) .wl4-expanded {
            opacity: 0;
            transform: translateY(0.75rem);
          }
          .wl4-rail:hover .wl4-panel:first-child:not(:hover) .wl4-baseline {
            transform: scaleX(0);
          }
        }
      `}</style>

      <Container>
        {/* ---- Masthead: kicker + display headline ---- */}
        <div className="reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Industries
        </div>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="reveal max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-heading sm:text-5xl lg:text-[3.75rem]">
            Built for the sectors where
            <span className="text-accent-deep"> decarbonisation </span>
            is hardest.
          </h2>
          <p className="reveal max-w-xs text-sm leading-relaxed text-body md:pb-2">
            Four industries. One engineering discipline. Hover to explore where
            our systems do the heaviest lifting.
          </p>
        </div>
      </Container>

      {/* ---- Full-bleed expanding-panel rail ---- */}
      <div className="reveal mt-14 px-6 md:mt-20 md:px-10">
        <div className="wl4-rail flex flex-col gap-3 md:h-[32rem] md:flex-row lg:h-[36rem]">
          {industries.map((industry, i) => (
            <a
              key={industry.slug}
              href="/industries"
              className="wl4-panel reveal-panel group/panel relative block h-72 overflow-hidden rounded-sm bg-ink-2 outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-accent md:h-auto md:min-w-0"
            >
              {/* Background image, cinematic grayscale that saturates on focus */}
              <img
                src={images[i]}
                alt={industry.title}
                loading="lazy"
                className="wl4-bg-img absolute inset-0 h-full w-full object-cover grayscale brightness-[0.55] saturate-0 transition-all duration-[900ms] ease-out group-hover/panel:scale-105 group-hover/panel:grayscale-0 group-hover/panel:saturate-100 group-hover/panel:brightness-90 group-focus-visible/panel:scale-105 group-focus-visible/panel:grayscale-0 group-focus-visible/panel:saturate-100 group-focus-visible/panel:brightness-90"
              />
              {/* Legibility gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

              {/* Collapsed label: vertical-set title, hidden once expanded (desktop) */}
              <div className="absolute inset-x-0 bottom-0 hidden items-end justify-center pb-8 md:flex">
                <span className="wl4-collapsed-label whitespace-nowrap text-lg font-semibold uppercase tracking-[0.2em] text-white opacity-90 transition-opacity duration-300 [writing-mode:vertical-rl] group-hover/panel:opacity-0 group-focus-visible/panel:opacity-0 rotate-180">
                  {industry.title}
                </span>
              </div>

              {/* Expanded content: fades/slides in on hover (and always shown on mobile) */}
              <div className="wl4-expanded absolute inset-x-0 bottom-0 p-6 md:p-8 md:opacity-0 md:transition-all md:duration-500 md:translate-y-3 group-hover/panel:md:translate-y-0 group-hover/panel:md:opacity-100 group-hover/panel:md:delay-150 group-focus-visible/panel:md:translate-y-0 group-focus-visible/panel:md:opacity-100 group-focus-visible/panel:md:delay-150">
                <span className="hex-clip mb-5 flex h-11 w-11 items-center justify-center bg-accent text-ink">
                  <Icon name={industry.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-white md:whitespace-nowrap">
                  {industry.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-body-dark">
                  {industry.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-accent">
                  Explore sector
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover/panel:translate-x-1 group-focus-visible/panel:translate-x-1"
                  />
                </span>
              </div>

              {/* Accent baseline that grows on hover */}
              <span className="wl4-baseline absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover/panel:scale-x-100 group-focus-visible/panel:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
