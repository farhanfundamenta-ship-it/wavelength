import { fuels } from "@/data/fuel-calculator/fuels";
import type { CalculatorInputs, FuelScores, RankedFuel } from "@/types/fuel";

const priorityWeights: Record<CalculatorInputs["priority"], FuelScores> = {
  emissions: { emissions: 3, cost: 1, implementationSpeed: 1, energyDensity: 1, infrastructureAvailability: 1 },
  cost: { emissions: 1, cost: 3, implementationSpeed: 1, energyDensity: 1, infrastructureAvailability: 1 },
  speed: { emissions: 1, cost: 1, implementationSpeed: 3, energyDensity: 1, infrastructureAvailability: 1 },
  range: { emissions: 1, cost: 1, implementationSpeed: 1, energyDensity: 3, infrastructureAvailability: 1 },
};

function budgetBonus(inputs: CalculatorInputs): Partial<FuelScores> {
  if (inputs.budget === "limited") return { cost: 1.5 };
  if (inputs.budget === "significant") return { cost: -0.5 };
  return {};
}

function timelineBonus(inputs: CalculatorInputs): Partial<FuelScores> {
  if (inputs.timeline === "immediate") return { implementationSpeed: 1.5 };
  if (inputs.timeline === "long-term") return { implementationSpeed: -0.5 };
  return {};
}

function bunkeringBonus(inputs: CalculatorInputs): Partial<FuelScores> {
  if (inputs.bunkering === "none") return { infrastructureAvailability: 1.5 };
  if (inputs.bunkering === "limited") return { infrastructureAvailability: 0.75 };
  return {};
}

function weightsFor(inputs: CalculatorInputs): FuelScores {
  const base = { ...priorityWeights[inputs.priority] };
  const bonuses = [budgetBonus(inputs), timelineBonus(inputs), bunkeringBonus(inputs)];

  for (const bonus of bonuses) {
    for (const key of Object.keys(bonus) as (keyof FuelScores)[]) {
      base[key] += bonus[key] ?? 0;
    }
  }

  return base;
}

export function rankFuels(inputs: CalculatorInputs): RankedFuel[] {
  const weights = weightsFor(inputs);
  const maxPossible =
    (Object.keys(weights) as (keyof FuelScores)[]).reduce((sum, key) => sum + weights[key] * 5, 0) || 1;

  const ranked = fuels.map((fuel) => {
    const raw = (Object.keys(weights) as (keyof FuelScores)[]).reduce(
      (sum, key) => sum + fuel.scores[key] * weights[key],
      0
    );
    const matchPercent = Math.max(5, Math.min(100, Math.round((raw / maxPossible) * 100)));
    return { fuel, matchPercent };
  });

  return ranked.sort((a, b) => b.matchPercent - a.matchPercent);
}

export function transitionComplexity(fuel: RankedFuel["fuel"]): string {
  const speed = fuel.scores.implementationSpeed;
  if (speed >= 5) return "Low complexity";
  if (speed >= 4) return "Low–moderate complexity";
  if (speed >= 3) return "Moderate complexity";
  if (speed >= 2) return "Moderate–high complexity";
  return "High complexity";
}
