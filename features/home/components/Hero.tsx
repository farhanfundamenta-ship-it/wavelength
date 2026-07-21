import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/buttons/Button";

export function Hero() {
  return (
    <section className="relative h-[95vh] min-h-[720px] overflow-hidden bg-ink md:h-screen">
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
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/45"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/80 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 50%, transparent 45%, rgba(10,15,12,0.55) 100%)",
        }}
      />

      <span
        aria-hidden
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rotate-180 text-xs font-medium uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl] md:block"
      >
        Decarbonisation &middot; Marine &middot; Energy
      </span>

      <div className="relative flex h-[95vh] min-h-[720px] flex-col justify-end pb-14 pt-28 md:h-screen md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6 h-px w-20 bg-white/40" />
            <h1 className="text-[3.5rem] font-bold leading-[0.97] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
              Engineering the
              <br />
              energy transition.
            </h1>
            <p className="mt-6 max-w-[34ch] text-base leading-relaxed text-white/75 md:text-lg">
              Designing practical decarbonisation systems for marine and
              industrial sectors using proven technology.
            </p>
            <div className="mt-8 flex items-center gap-x-8 gap-y-4">
              <Button href="/contact" withArrow>
                Discuss Your Project
              </Button>
              <Button href="/services" variant="ghost-light">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
