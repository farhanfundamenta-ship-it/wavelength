import type { CaseStudy } from "@/types/caseStudy";

export const caseStudies: CaseStudy[] = [
  {
    slug: "lng-bunkering-retrofit-north-sea",
    title: "LNG Bunkering Vessel Retrofit",
    sector: "Maritime",
    location: "North Sea",
    icon: "ship",
    image:
      "/images/lng-bunkering-vessel-underway-narrow-congested-navigational-channel-tanker-designed-ship.jpg",
    summary:
      "Expanding an operating dual-fuel vessel's LNG bunkering capacity without pulling it out of service longer than necessary.",
    challenge:
      "The vessel needed significantly more bunkering capacity to serve a growing corridor of low-carbon shipping routes, but the owner could not afford an extended drydock period.",
    solution:
      "Wavelength engineered a containment and transfer-system upgrade designed around the vessel's existing structure, sequencing the safety case and classification approval to run in parallel with fabrication planning.",
    results: [
      { value: "40%", label: "Increase in bunkering capacity" },
      { value: "3 weeks", label: "Total drydock time required" },
      { value: "0", label: "Safety incidents during commissioning" },
    ],
  },
  {
    slug: "waste-heat-recovery-steel-plant",
    title: "Waste Heat Recovery for a Steel Plant",
    sector: "Heavy Industry",
    location: "Central Europe",
    icon: "factory",
    image: "/images/chimney.jpg",
    summary:
      "A heat-recovery retrofit that cut a steel plant's process energy intensity by a third, with zero production downtime.",
    challenge:
      "The plant was venting significant process heat to atmosphere, but any retrofit had to be installed without interrupting continuous production.",
    solution:
      "Wavelength designed a heat-recovery system that redirects captured process heat into the plant's existing steam network, installed and commissioned in phases around the production schedule.",
    results: [
      { value: "33%", label: "Cut in purchased energy intensity" },
      { value: "0", label: "Days of production downtime" },
      { value: "18 mo", label: "Payback period" },
    ],
  },
  {
    slug: "offshore-platform-power-conversion",
    title: "Offshore Platform Power Conversion",
    sector: "Offshore Energy",
    location: "North Atlantic",
    icon: "anchor",
    image: "/images/power-distribution-station.jpg",
    summary:
      "Converting an offshore platform's power system to accept intermittent renewable input without compromising reliability.",
    challenge:
      "The platform's existing power system was designed around constant fossil generation and could not tolerate the variability of a planned renewable supply.",
    solution:
      "Wavelength engineered a power-conversion and storage buffer system that smooths renewable input before it reaches platform loads, validated against the platform's full operating envelope.",
    results: [
      { value: "28%", label: "Reduction in onboard fuel consumption" },
      { value: "99.98%", label: "Power availability maintained" },
      { value: "2", label: "Renewable sources integrated" },
    ],
  },
  {
    slug: "port-terminal-bunkering-infrastructure",
    title: "Port Terminal Bunkering Infrastructure",
    sector: "Ports & Terminals",
    location: "Southern Europe",
    icon: "container",
    image: "/images/industrial-sea-port-with-containers-crans-osaka-japan.jpg",
    summary:
      "Engineering new bunkering infrastructure to serve the next generation of marine fuels at an existing container terminal.",
    challenge:
      "The terminal needed to add alternative-fuel bunkering capability without disrupting existing cargo operations or requiring a full infrastructure rebuild.",
    solution:
      "Wavelength designed a modular bunkering infrastructure package that integrates with the terminal's existing footprint, phased to keep cargo operations running throughout construction.",
    results: [
      { value: "2", label: "Fuel types now supported" },
      { value: "0", label: "Cargo operation disruptions" },
      { value: "14 mo", label: "Design-to-commissioning timeline" },
    ],
  },
];
