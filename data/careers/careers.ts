import type { Career } from "@/types/career";

export const careers: Career[] = [
  {
    slug: "senior-marine-systems-engineer",
    title: "Senior Marine Systems Engineer",
    department: "Engineering",
    location: "Funchal, Portugal",
    type: "Full-time",
    summary:
      "Lead the design of dual-fuel propulsion and bunkering systems for new-build and retrofit vessels.",
    responsibilities: [
      "Own technical design of marine fuel and propulsion systems end to end",
      "Review and sign off P&IDs, equipment specifications, and vendor drawings",
      "Support classification society approval and regulatory compliance",
      "Mentor junior engineers on system design reviews",
    ],
    requirements: [
      "8+ years in marine or offshore systems engineering",
      "Working knowledge of LNG, methanol, or ammonia fuel systems",
      "Familiarity with classification society rules (DNV, ABS, or similar)",
      "Comfortable working directly with shipyards and licensed partners",
    ],
  },
  {
    slug: "process-engineer-industrial-decarbonisation",
    title: "Process Engineer, Industrial Decarbonisation",
    department: "Engineering",
    location: "Funchal, Portugal",
    type: "Full-time",
    summary:
      "Design process-heat and heat-recovery retrofits for industrial clients moving off fossil fuels.",
    responsibilities: [
      "Develop heat and mass balances for industrial retrofit projects",
      "Specify heat pumps, heat exchangers, and waste-heat recovery equipment",
      "Run feasibility studies and techno-economic assessments",
      "Coordinate with fabrication partners on detailed design packages",
    ],
    requirements: [
      "5+ years in industrial process engineering",
      "Experience with heat integration and pinch analysis",
      "Degree in chemical, mechanical, or process engineering",
      "Comfortable presenting technical trade-offs to non-technical stakeholders",
    ],
  },
  {
    slug: "commissioning-engineer",
    title: "Commissioning Engineer",
    department: "Operations",
    location: "Field-based, EU/UK",
    type: "Full-time",
    summary:
      "Support on-site commissioning of decarbonisation systems across marine and industrial projects.",
    responsibilities: [
      "Execute commissioning test plans on-site alongside fabrication partners",
      "Troubleshoot system performance issues during startup",
      "Document as-built deviations and close out punch lists",
      "Travel to project sites across Europe and the UK (up to 60%)",
    ],
    requirements: [
      "4+ years in commissioning or startup of industrial or marine systems",
      "Comfortable working on live sites and vessels",
      "Strong instrumentation and controls troubleshooting skills",
      "Valid passport, willing to travel on short notice",
    ],
  },
  {
    slug: "business-development-manager-maritime",
    title: "Business Development Manager, Maritime",
    department: "Business",
    location: "Funchal, Portugal / Remote",
    type: "Full-time",
    summary:
      "Grow Wavelength's presence with shipowners and operators evaluating decarbonisation pathways.",
    responsibilities: [
      "Build and manage a pipeline of shipowner and operator relationships",
      "Translate client operational needs into scoped engineering proposals",
      "Represent Wavelength at maritime industry events and conferences",
      "Work closely with engineering to keep proposals technically grounded",
    ],
    requirements: [
      "5+ years in maritime business development or technical sales",
      "Existing network among shipowners, operators, or class societies",
      "Comfortable discussing propulsion and fuel systems at a technical level",
      "Willing to travel internationally",
    ],
  },
];
