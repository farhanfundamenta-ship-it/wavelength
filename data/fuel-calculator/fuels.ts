import type { FuelProfile } from "@/types/fuel";

export const fuels: FuelProfile[] = [
  {
    id: "hydrogen",
    name: "Hydrogen",
    blurb: "Highest emissions reduction potential, but storage and bunkering infrastructure are still early-stage.",
    scores: {
      emissions: 5,
      cost: 2,
      implementationSpeed: 2,
      energyDensity: 2,
      infrastructureAvailability: 2,
    },
    infrastructureRequirements: [
      "Cryogenic or high-pressure storage systems",
      "Purpose-built bunkering facilities at home ports",
      "Fuel cell or modified combustion engine systems",
      "Updated crew safety and handling procedures",
    ],
    challenges: [
      "Low volumetric energy density limits range without frequent refuelling",
      "Bunkering infrastructure exists at very few ports today",
      "Higher upfront capital cost per unit of installed capacity",
    ],
  },
  {
    id: "methanol",
    name: "Methanol",
    blurb: "A practical middle ground — liquid at ambient temperature, compatible with modified conventional engines.",
    scores: {
      emissions: 3,
      cost: 4,
      implementationSpeed: 4,
      energyDensity: 3,
      infrastructureAvailability: 3,
    },
    infrastructureRequirements: [
      "Modified fuel tanks and supply lines (liquid at ambient conditions)",
      "Dual-fuel engine conversion or new dual-fuel newbuild",
      "Bunkering agreements at ports with growing methanol availability",
    ],
    challenges: [
      "Emissions reduction is meaningful but lower than hydrogen or ammonia",
      "Green methanol supply is still scaling to meet demand",
      "Requires updated crew training on a new fuel type",
    ],
  },
  {
    id: "ammonia",
    name: "Ammonia",
    blurb: "Strong emissions profile and easier to store than hydrogen, but toxicity adds engineering complexity.",
    scores: {
      emissions: 4,
      cost: 3,
      implementationSpeed: 2,
      energyDensity: 3,
      infrastructureAvailability: 2,
    },
    infrastructureRequirements: [
      "Toxic-gas-rated storage and containment systems",
      "Enhanced crew safety systems and emergency response planning",
      "Purpose-built or heavily modified engine systems",
    ],
    challenges: [
      "Toxicity requires additional safety systems and crew certification",
      "Bunkering infrastructure is largely still in pilot stage",
      "Combustion technology is less mature than methanol or LNG",
    ],
  },
  {
    id: "biofuels",
    name: "Biofuels",
    blurb: "The fastest path to lower emissions — often usable with little to no engine modification.",
    scores: {
      emissions: 3,
      cost: 3,
      implementationSpeed: 5,
      energyDensity: 4,
      infrastructureAvailability: 4,
    },
    infrastructureRequirements: [
      "Fuel quality testing and blend certification",
      "Minor engine and fuel system adjustments, in most cases",
      "Supply agreements with certified biofuel producers",
    ],
    challenges: [
      "Feedstock supply and pricing can vary by region and season",
      "Emissions reduction depends heavily on feedstock and blend ratio",
      "Long-term supply scalability is still developing",
    ],
  },
  {
    id: "lng",
    name: "LNG",
    blurb: "The most mature alternative fuel option, with the most established bunkering network today.",
    scores: {
      emissions: 2,
      cost: 4,
      implementationSpeed: 4,
      energyDensity: 4,
      infrastructureAvailability: 4,
    },
    infrastructureRequirements: [
      "Cryogenic fuel storage and containment systems",
      "Access to an established LNG bunkering network",
      "Dual-fuel engine systems (widely available today)",
    ],
    challenges: [
      "Emissions reduction is the lowest among the five options here",
      "Methane slip remains a technical and regulatory concern",
      "Still a transitional fuel rather than a long-term zero-carbon endpoint",
    ],
  },
];
