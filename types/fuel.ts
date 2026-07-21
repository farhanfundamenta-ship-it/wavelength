export type FuelPriority = "emissions" | "cost" | "speed" | "range";
export type BudgetTier = "limited" | "moderate" | "significant";
export type Timeline = "immediate" | "near-term" | "long-term";
export type BunkeringAccess = "none" | "limited" | "developing" | "extensive";

export interface CalculatorInputs {
  priority: FuelPriority;
  budget: BudgetTier;
  timeline: Timeline;
  bunkering: BunkeringAccess;
}

export interface FuelScores {
  emissions: number;
  cost: number;
  implementationSpeed: number;
  energyDensity: number;
  infrastructureAvailability: number;
}

export interface FuelProfile {
  id: string;
  name: string;
  blurb: string;
  scores: FuelScores;
  infrastructureRequirements: string[];
  challenges: string[];
}

export interface RankedFuel {
  fuel: FuelProfile;
  matchPercent: number;
}
