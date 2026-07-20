import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "marine-fuel-systems",
    title: "Marine Fuel Systems",
    description:
      "Fuel supply and handling systems that let ship power plants run on methanol, ammonia, and other low-carbon fuels.",
    icon: "fuel",
  },
  {
    slug: "marine-cargo-handling",
    title: "Marine Cargo Handling",
    description:
      "Engineering for liquefied gas and captured-CO2 cargo systems, from ship intake to shore infrastructure.",
    icon: "anchor",
  },
  {
    slug: "energy-storage",
    title: "Energy Storage",
    description:
      "Long-duration, industrial-scale energy storage systems designed around real load profiles, not lab conditions.",
    icon: "battery",
  },
  {
    slug: "power-to-x",
    title: "Power-to-X",
    description:
      "Systems engineering for the conversion and transport steps that turn renewable power into e-fuels and feedstock.",
    icon: "shuffle",
  },
  {
    slug: "industrial-heat-pumps",
    title: "Industrial Heat Pumps",
    description:
      "Large-scale heat pump solutions that electrify steam generation and other high-temperature industrial processes.",
    icon: "thermometer",
  },
  {
    slug: "biogas-handling",
    title: "Biogas Handling",
    description:
      "Purification and liquefaction systems that make biogas ready for storage, transport, and reuse.",
    icon: "leaf",
  },
];
