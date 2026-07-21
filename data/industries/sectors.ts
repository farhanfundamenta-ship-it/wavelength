import type { IndustrySector } from "@/types/industrySector";

export const sectors: IndustrySector[] = [
  {
    slug: "maritime",
    title: "Maritime",
    description:
      "Supporting the global shipping industry with advanced engineering for alternative fuels, cargo handling, onboard energy systems, and vessel decarbonisation.",
    icon: "ship",
    image:
      "/images/lng-bunkering-vessel-underway-narrow-congested-navigational-channel-tanker-designed-ship.jpg",
    secondaryImage: "/images/industrial-sea-port-with-containers-crans-osaka-japan.jpg",
    capabilities: [
      "Marine Fuel Systems",
      "Cargo Handling Systems",
      "Alternative Fuel Integration",
      "LNG & Ammonia Systems",
      "Retrofit Engineering",
      "Regulatory Compliance",
    ],
    challenges: [
      "Meeting IMO 2030/2050 targets without pulling vessels out of service for long",
      "Choosing a fuel pathway before infrastructure and supply chains fully mature",
      "Retrofitting engine and fuel systems on vessels already in active rotation",
    ],
    stats: [
      { value: "35%", label: "Average fuel-system retrofit time reduction" },
      { value: "18", label: "Vessels engineered for alternative fuel systems" },
      { value: "3", label: "Continents served through licensed fabrication partners" },
    ],
    approach:
      "We start with the vessel's actual operating profile, not a generic retrofit template. Fuel system, containment, and safety case design happen in parallel with classification-society engagement, so approval and fabrication timelines overlap instead of stacking end to end.",
    caseStudySlug: "lng-bunkering-retrofit-north-sea",
  },
  {
    slug: "offshore-energy",
    title: "Offshore Energy",
    description:
      "Engineering reliable systems for offshore platforms, floating installations, and renewable offshore infrastructure operating in demanding environments.",
    icon: "anchor",
    image: "/images/beautiful-sea-view-from-ship.jpg",
    secondaryImage: "/images/power-distribution-station.jpg",
    capabilities: [
      "Process Engineering",
      "Energy Infrastructure",
      "Safety Systems",
      "Mechanical Design",
      "Risk Assessments",
      "System Integration",
    ],
    challenges: [
      "Integrating renewable power without compromising platform uptime",
      "Operating safely in remote, high-risk marine environments",
      "Retrofitting legacy power systems built around constant fossil generation",
    ],
    stats: [
      { value: "99.9%", label: "Power availability maintained across engineered systems" },
      { value: "9", label: "Offshore platforms supported" },
      { value: "2", label: "Renewable sources integrated per platform, on average" },
    ],
    approach:
      "Every offshore system is engineered against the platform's full operating envelope before a single component is specified, so renewable integration or power conversion never comes at the cost of uptime.",
    caseStudySlug: "offshore-platform-power-conversion",
  },
  {
    slug: "industrial-manufacturing",
    title: "Industrial Manufacturing",
    description:
      "Helping industrial facilities modernize energy systems, improve efficiency, and reduce carbon emissions without compromising production.",
    icon: "factory",
    image: "/images/chimney.jpg",
    secondaryImage: "/images/view-water-tank-storage.jpg",
    capabilities: [
      "Industrial Heat Pumps",
      "Waste Heat Recovery",
      "Process Optimisation",
      "Energy Audits",
      "Utility Systems",
      "Plant Engineering",
    ],
    challenges: [
      "Cutting process emissions without interrupting continuous production",
      "Justifying capital investment against uncertain energy prices",
      "Integrating new equipment into decades-old plant infrastructure",
    ],
    stats: [
      { value: "33%", label: "Average process energy intensity reduction" },
      { value: "14", label: "Industrial retrofit programmes delivered" },
      { value: "0", label: "Production days lost during commissioning" },
    ],
    approach:
      "We sequence installation and commissioning around your production schedule, not the other way around, so process upgrades land without a single lost shift.",
    caseStudySlug: "waste-heat-recovery-steel-plant",
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy",
    description:
      "Engineering technologies that accelerate the transition toward renewable and low-carbon energy production.",
    icon: "leaf",
    image: "/images/high-angle-view-river-flowing-through-rocks.jpg",
    secondaryImage: "/images/polar.jpg",
    capabilities: [
      "Power-to-X",
      "Hydrogen Systems",
      "Biogas Handling",
      "Carbon Reduction Projects",
      "Energy Storage",
      "Grid Integration",
    ],
    challenges: [
      "Scaling pilot technology into commercially viable systems",
      "Managing intermittency without compromising reliability",
      "Navigating a fast-changing regulatory and incentive landscape",
    ],
    stats: [
      { value: "28%", label: "Average onboard/onsite fuel consumption reduction" },
      { value: "11", label: "Renewable integration projects engineered" },
      { value: "3", label: "Fuel and storage technologies supported" },
    ],
    approach:
      "We treat pilot-to-scale as a single engineering problem, designing systems that de-risk investment at pilot stage while remaining a clear technical path to full deployment.",
  },
  {
    slug: "energy-infrastructure",
    title: "Energy Infrastructure",
    description:
      "Designing robust infrastructure that supports the production, transportation, storage, and distribution of modern energy carriers.",
    icon: "container",
    image: "/images/power-distribution-station.jpg",
    secondaryImage: "/images/chimney.jpg",
    capabilities: [
      "Storage Facilities",
      "Fuel Distribution",
      "Terminal Engineering",
      "Cryogenic Systems",
      "Process Design",
      "Safety Engineering",
    ],
    challenges: [
      "Building bunkering capability without disrupting existing operations",
      "Supporting multiple fuel types with shared infrastructure",
      "Sequencing capital projects around live terminal throughput",
    ],
    stats: [
      { value: "14 mo", label: "Average design-to-commissioning timeline" },
      { value: "7", label: "Bunkering and terminal projects delivered" },
      { value: "2", label: "Fuel types typically supported per terminal" },
    ],
    approach:
      "Infrastructure upgrades are phased around live throughput, with modular designs that let a terminal add new fuel capability without a full rebuild.",
    caseStudySlug: "port-terminal-bunkering-infrastructure",
  },
  {
    slug: "research-innovation",
    title: "Research & Innovation",
    description:
      "Collaborating with technology developers, research institutions, and industry partners to transform emerging concepts into commercially viable engineering solutions.",
    icon: "compass",
    image: "/images/view-water-tank-storage.jpg",
    secondaryImage: "/images/high-angle-view-river-flowing-through-rocks.jpg",
    capabilities: [
      "Feasibility Studies",
      "Prototype Development",
      "Technology Validation",
      "Simulation",
      "Design Reviews",
      "Innovation Partnerships",
    ],
    challenges: [
      "Turning promising lab-stage technology into field-ready systems",
      "De-risking novel technology for commercial-scale investment",
      "Bridging the gap between research partners and operating engineers",
    ],
    stats: [
      { value: "20+", label: "Feasibility studies completed" },
      { value: "6", label: "Technology partners collaborated with" },
      { value: "4", label: "Emerging fuel pathways evaluated to date" },
    ],
    approach:
      "We pair emerging technology with the same rigor as proven systems: feasibility, validation, and a clear-eyed view of what it actually takes to get from lab bench to commissioned asset.",
  },
];
