import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/icons";
import { FuelCalculator } from "@/features/fuel-calculator/components/FuelCalculator";

export const metadata: Metadata = buildMetadata({
  title: "Alternative Fuel Selection Calculator",
  description:
    "Compare hydrogen, methanol, ammonia, biofuels, and LNG against your fleet's priorities and get your best-fit alternative fuel recommendation.",
  path: "/fuel-calculator",
});

const fuelNames = ["Hydrogen", "Methanol", "Ammonia", "Biofuels", "LNG"];

export default function FuelCalculatorPage() {
  return (
    <>
      {/* ---- Landing hero ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Alternative Fuel Selection Calculator
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              Instead of another sales call,
              <span className="text-accent"> compare your options</span>.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body-dark md:text-lg">
              Adjust your priorities below and watch the ranking update live
              &mdash; comparing {fuelNames.slice(0, -1).join(", ")}, and{" "}
              {fuelNames[fuelNames.length - 1]} against what actually matters
              for your fleet.
            </p>
          </div>
        </Container>
      </Section>

      {/* ---- Interactive calculator ---- */}
      <Section tone="paper">
        <Container className="mx-auto max-w-2xl">
          <FuelCalculator />
        </Container>
      </Section>

      {/* ---- Lead magnet detail ---- */}
      <Section tone="mist">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="hex-clip mx-auto flex h-12 w-12 items-center justify-center bg-ink text-accent">
              <Icon name="hexagon" className="h-5 w-5" />
            </span>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-body">
              Free download
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
              The Alternative Marine Fuel Comparison Handbook
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-body md:text-base">
              A side-by-side reference covering emissions potential, cost,
              infrastructure requirements, and engineering challenges across
              hydrogen, methanol, ammonia, biofuels, and LNG &mdash; unlocked
              once you get your full analysis above.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
