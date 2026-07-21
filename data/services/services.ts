import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "marine-fuel-systems",
    title: "Marine Fuel Systems",
    description:
      "Fuel supply and handling systems that let ship power plants run on methanol, ammonia, and other low-carbon fuels.",
    icon: "fuel",
    image:
      "/images/lng-bunkering-vessel-underway-narrow-congested-navigational-channel-tanker-designed-ship.jpg",
    secondaryImage: "/images/industrial-sea-port-with-containers-crans-osaka-japan.jpg",
    capabilities: [
      "Methanol Fuel Systems",
      "Ammonia Fuel Systems",
      "LNG Fuel Systems",
      "Fuel Containment Design",
      "Bunkering Interface Engineering",
      "Classification Society Liaison",
    ],
    challenges: [
      "Selecting a fuel pathway before global supply and bunkering infrastructure mature",
      "Integrating new fuel systems into existing engine rooms with minimal downtime",
      "Meeting classification-society safety requirements for toxic or cryogenic fuels",
    ],
    stats: [
      { value: "4", label: "Alternative fuel types engineered for: methanol, ammonia, LNG, hydrogen" },
      { value: "12", label: "Fuel system retrofits delivered to date" },
      { value: "0", label: "Safety incidents across commissioned systems" },
    ],
    approach:
      "We design fuel systems around the engine room you actually have, sequencing containment, transfer, and safety-case work so classification approval and fabrication can run in parallel rather than one after another.",
    caseStudySlug: "lng-bunkering-retrofit-north-sea",
  },
  {
    slug: "marine-cargo-handling",
    title: "Marine Cargo Handling",
    description:
      "Engineering for liquefied gas and captured-CO2 cargo systems, from ship intake to shore infrastructure.",
    icon: "anchor",
    image: "/images/industrial-sea-port-with-containers-crans-osaka-japan.jpg",
    secondaryImage: "/images/beautiful-sea-view-from-ship.jpg",
    capabilities: [
      "LNG Cargo Systems",
      "CO2 Cargo Systems",
      "Boil-off Gas Management",
      "Ship-to-Shore Transfer",
      "Cargo Containment Design",
      "Terminal Interface Engineering",
    ],
    challenges: [
      "Handling multiple cargo types with shared onboard systems",
      "Meeting containment and boil-off requirements for liquefied gases",
      "Coordinating ship-to-shore transfer systems across different terminal standards",
    ],
    stats: [
      { value: "3", label: "Cargo types engineered for: LNG, CO2, ammonia" },
      { value: "7", label: "Cargo handling systems delivered" },
      { value: "14 mo", label: "Average design-to-commissioning timeline" },
    ],
    approach:
      "Cargo systems are designed end to end, from onboard containment through to shore-side transfer, so the vessel and the terminal it calls at are engineered as one system, not two.",
    caseStudySlug: "port-terminal-bunkering-infrastructure",
  },
  {
    slug: "energy-storage",
    title: "Energy Storage",
    description:
      "Long-duration, industrial-scale energy storage systems designed around real load profiles, not lab conditions.",
    icon: "battery",
    image: "/images/power-distribution-station.jpg",
    secondaryImage: "/images/view-water-tank-storage.jpg",
    capabilities: [
      "Battery Storage Integration",
      "Load Profile Modelling",
      "Power Conversion Systems",
      "Grid & Microgrid Integration",
      "Thermal Storage Design",
      "System Controls & Monitoring",
    ],
    challenges: [
      "Sizing storage against real, variable load profiles rather than nameplate assumptions",
      "Integrating storage with existing power systems without destabilising them",
      "Balancing storage duration against capital cost",
    ],
    stats: [
      { value: "28%", label: "Average fuel consumption reduction after storage integration" },
      { value: "9", label: "Storage systems engineered and commissioned" },
      { value: "99.9%", label: "Power availability maintained across integrated systems" },
    ],
    approach:
      "We size and configure storage against your actual load profile, modelled from real operating data, not manufacturer nameplate assumptions, so the system performs the way it was designed to on day one.",
    caseStudySlug: "offshore-platform-power-conversion",
  },
  {
    slug: "power-to-x",
    title: "Power-to-X",
    description:
      "Systems engineering for the conversion and transport steps that turn renewable power into e-fuels and feedstock.",
    icon: "shuffle",
    image: "/images/chimney.jpg",
    secondaryImage: "/images/high-angle-view-river-flowing-through-rocks.jpg",
    capabilities: [
      "Hydrogen Conversion Systems",
      "Ammonia Synthesis Integration",
      "E-Methanol Pathways",
      "Renewable Input Management",
      "Feasibility & Techno-Economic Studies",
      "Transport & Storage Design",
    ],
    challenges: [
      "Managing intermittent renewable input into a continuous conversion process",
      "Scaling pilot-stage conversion technology to commercial volumes",
      "Integrating conversion, storage, and transport into a single coherent system",
    ],
    stats: [
      { value: "3", label: "Conversion pathways engineered: hydrogen, ammonia, methanol" },
      { value: "6", label: "Power-to-X feasibility studies completed" },
      { value: "20+", label: "MW-scale systems evaluated to date" },
    ],
    approach:
      "We treat power-to-X as one integrated system, not separate conversion, storage, and transport projects, so intermittent renewable input doesn't become three separate engineering problems.",
  },
  {
    slug: "industrial-heat-pumps",
    title: "Industrial Heat Pumps",
    description:
      "Large-scale heat pump solutions that electrify steam generation and other high-temperature industrial processes.",
    icon: "thermometer",
    image: "/images/view-water-tank-storage.jpg",
    secondaryImage: "/images/chimney.jpg",
    capabilities: [
      "High-Temperature Heat Pumps",
      "Steam System Electrification",
      "Waste Heat Recovery",
      "Process Integration Studies",
      "Retrofit Engineering",
      "Energy Audits",
    ],
    challenges: [
      "Reaching the high temperatures industrial steam processes require",
      "Retrofitting heat pump systems into decades-old plant infrastructure",
      "Justifying capital cost against volatile electricity and gas prices",
    ],
    stats: [
      { value: "33%", label: "Average process energy intensity reduction" },
      { value: "14", label: "Heat pump retrofit programmes delivered" },
      { value: "0", label: "Production days lost during commissioning" },
    ],
    approach:
      "We sequence installation and commissioning around your production schedule, and specify equipment against your actual temperature and load requirements, not a standard catalogue unit.",
    caseStudySlug: "waste-heat-recovery-steel-plant",
  },
  {
    slug: "biogas-handling",
    title: "Biogas Handling",
    description:
      "Purification and liquefaction systems that make biogas ready for storage, transport, and reuse.",
    icon: "leaf",
    image: "/images/high-angle-view-river-flowing-through-rocks.jpg",
    secondaryImage: "/images/polar.jpg",
    capabilities: [
      "Biogas Purification",
      "Liquefaction Systems",
      "Feedstock Variability Management",
      "Pipeline-Grade Upgrading",
      "Storage & Transport Design",
      "Supply Agreements Support",
    ],
    challenges: [
      "Managing variable feedstock quality and supply",
      "Reaching pipeline or transport-grade purity cost-effectively",
      "Scaling from a single-site digester to a distributable fuel supply",
    ],
    stats: [
      { value: "3", label: "Purification stages engineered per system, on average" },
      { value: "8", label: "Biogas handling systems delivered" },
      { value: "92%+", label: "Typical methane purity achieved post-purification" },
    ],
    approach:
      "We design purification and liquefaction trains around your feedstock's actual variability, not an idealised gas composition, so the system keeps performing as supply conditions change.",
  },
];
