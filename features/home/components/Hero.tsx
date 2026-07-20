import Image from "next/image";
import { Icon } from "@/components/ui/icons";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/buttons/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      <Image
        src="/images/hero.jpg"
        alt="Engineered marine and industrial energy infrastructure"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent"
      />

      <span
        aria-hidden
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rotate-180 text-xs font-medium uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl] md:block"
      >
        Decarbonisation &middot; Marine &middot; Energy
      </span>

      <a
        href="#"
        className="group absolute right-6 top-24 z-10 hidden w-64 items-center gap-3 rounded-xl border border-white/15 bg-ink/60 p-4 backdrop-blur-md transition-colors hover:border-accent/60 sm:flex md:right-10 md:top-28"
      >
        <span className="hex-clip flex h-10 w-10 shrink-0 items-center justify-center bg-accent text-ink">
          <Icon name="hexagon" className="h-4 w-4" />
        </span>
        <span className="flex flex-col">
          <span className="text-[11px] uppercase tracking-[0.15em] text-white/60">
            2025 Company Profile
          </span>
          <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white">
            Download Profile
            <Icon
              name="arrowRight"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </span>
      </a>

      <div className="relative flex min-h-screen flex-col justify-end pb-14 pt-28 md:pb-20">
        <Container>
          <div className="max-w-2xl">
            <div className="mb-6 h-px w-20 bg-white/40" />
            <h1 className="text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Engineering the
              <br />
              energy transition.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              Designing decarbonisation solutions for the maritime and
              industrial sectors.
            </p>
            <div className="mt-8">
              <Button href="/services" withArrow>
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
