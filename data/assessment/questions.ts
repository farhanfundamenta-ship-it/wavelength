import type { ProfileQuestion, ScoreQuestion, ReadinessTier } from "@/types/assessment";

export const profileQuestions: ProfileQuestion[] = [
  {
    id: "fleetSize",
    prompt: "What is your fleet or asset size?",
    options: [
      { label: "Not applicable (port, energy, or consultancy)" },
      { label: "1–5 vessels or major assets" },
      { label: "6–20 vessels or major assets" },
      { label: "21–50 vessels or major assets" },
      { label: "50+ vessels or major assets" },
    ],
  },
  {
    id: "industry",
    prompt: "Which best describes your organization?",
    options: [
      { label: "Ship Owner / Operator" },
      { label: "Offshore Operator" },
      { label: "Port Authority" },
      { label: "Energy Company" },
      { label: "Maritime Consultant" },
      { label: "Other" },
    ],
  },
  {
    id: "currentFuel",
    prompt: "What is your current primary fuel type?",
    options: [
      { label: "Heavy fuel oil / marine gas oil" },
      { label: "LNG" },
      { label: "Methanol" },
      { label: "Ammonia or hydrogen (pilot scale)" },
      { label: "Mixed / other" },
    ],
  },
  {
    id: "emissionGoals",
    prompt: "What emission reduction goals has your organization set?",
    options: [
      { label: "None set yet" },
      { label: "Informal internal targets" },
      { label: "Formal IMO-aligned targets" },
      { label: "Net-zero commitment with a published roadmap" },
    ],
  },
  {
    id: "altFuelsConsidered",
    prompt: "Which alternative fuels has your organization considered?",
    options: [
      { label: "None yet" },
      { label: "Researching options" },
      { label: "Evaluated one or two specific fuels" },
      { label: "Actively piloting or implementing" },
    ],
  },
  {
    id: "budget",
    prompt: "Has budget been allocated for decarbonization?",
    options: [
      { label: "Not yet allocated" },
      { label: "Under evaluation" },
      { label: "Allocated for studies only" },
      { label: "Allocated for implementation" },
    ],
  },
  {
    id: "timeline",
    prompt: "What is your project timeline?",
    options: [
      { label: "No defined timeline" },
      { label: "3–5 years out" },
      { label: "1–3 years out" },
      { label: "Immediate or already underway" },
    ],
  },
  {
    id: "decisionRole",
    prompt: "What is your role in this decision?",
    options: [
      { label: "Researching, no formal authority" },
      { label: "Influencer on the decision" },
      { label: "Key decision-maker" },
      { label: "Final approver / budget holder" },
    ],
  },
];

export const scoreQuestions: ScoreQuestion[] = [
  {
    id: "regulatoryAwareness",
    dimension: "Regulatory awareness",
    category: "Regulatory & Strategy",
    prompt: "How familiar is your organization with upcoming IMO emissions regulations?",
    gapInsight:
      "Regulatory awareness is limited — upcoming IMO 2030/2050 targets could catch your organization off guard.",
    options: [
      { label: "Not familiar", points: 1 },
      { label: "Aware but not tracking closely", points: 2 },
      { label: "Actively monitoring changes", points: 3 },
      { label: "Fully mapped against our operations", points: 4 },
    ],
  },
  {
    id: "emissionsTracking",
    dimension: "Emissions tracking",
    category: "Technical Foundation",
    prompt: "Do you currently track and report fuel consumption and emissions data?",
    gapInsight:
      "Without consistent emissions tracking, it's difficult to set a credible baseline or measure progress.",
    options: [
      { label: "No tracking in place", points: 1 },
      { label: "Manual, inconsistent tracking", points: 2 },
      { label: "Systematic tracking, limited reporting", points: 3 },
      { label: "Full tracking with regular reporting", points: 4 },
    ],
  },
  {
    id: "feasibilityStudy",
    dimension: "Technical feasibility",
    category: "Technical Foundation",
    prompt: "Has your organization completed a feasibility study for alternative fuel or energy systems?",
    gapInsight:
      "No feasibility study yet on record — technical unknowns are the biggest source of project delay and cost overrun.",
    options: [
      { label: "No, not started", points: 1 },
      { label: "Considering commissioning one", points: 2 },
      { label: "One is currently underway", points: 3 },
      { label: "Completed, results in hand", points: 4 },
    ],
  },
  {
    id: "internalStrategy",
    prompt: "How would you describe your internal decarbonization strategy?",
    dimension: "Internal strategy",
    category: "Regulatory & Strategy",
    gapInsight:
      "Without a documented strategy, decarbonization efforts tend to stall as one-off initiatives rather than a coordinated programme.",
    options: [
      { label: "No strategy in place", points: 1 },
      { label: "Early discussions only", points: 2 },
      { label: "Draft strategy in development", points: 3 },
      { label: "Documented strategy with executive sign-off", points: 4 },
    ],
  },
  {
    id: "infrastructure",
    dimension: "Infrastructure readiness",
    category: "Technical Foundation",
    prompt: "Is your existing infrastructure (bunkering, storage, power systems) compatible with alternative fuels?",
    gapInsight:
      "Existing infrastructure isn't yet compatible with alternative fuels — this is often the longest lead-time item in a transition plan.",
    options: [
      { label: "Not compatible, not yet assessed", points: 1 },
      { label: "Assessed, significant retrofit needed", points: 2 },
      { label: "Partially compatible", points: 3 },
      { label: "Compatible or retrofit already planned", points: 4 },
    ],
  },
  {
    id: "financing",
    dimension: "Financing readiness",
    category: "Execution Readiness",
    prompt: "Have you identified financing or investment sources for decarbonization projects?",
    gapInsight:
      "Financing sources haven't been identified yet — this typically needs to be lined up well before detailed engineering starts.",
    options: [
      { label: "No financing sources identified", points: 1 },
      { label: "Exploring options", points: 2 },
      { label: "Sources identified, not committed", points: 3 },
      { label: "Financing secured or committed", points: 4 },
    ],
  },
  {
    id: "leadershipAlignment",
    dimension: "Leadership alignment",
    category: "Regulatory & Strategy",
    prompt: "How aligned is leadership on committing resources to decarbonization?",
    gapInsight:
      "Leadership alignment is a gap — without executive buy-in, even well-engineered projects can stall at the approval stage.",
    options: [
      { label: "Not aligned or not discussed", points: 1 },
      { label: "Some interest, no commitment", points: 2 },
      { label: "General agreement, details pending", points: 3 },
      { label: "Fully aligned with resources committed", points: 4 },
    ],
  },
  {
    id: "partnerNetwork",
    dimension: "Partner network",
    category: "Execution Readiness",
    prompt: "Do you have relationships with engineering or fabrication partners for alternative fuel systems?",
    gapInsight:
      "No established partner relationships yet — sourcing qualified engineering and fabrication partners can add significant lead time.",
    options: [
      { label: "No relationships in place", points: 1 },
      { label: "Early conversations with a few firms", points: 2 },
      { label: "Established relationships, not yet engaged", points: 3 },
      { label: "Active partners already engaged", points: 4 },
    ],
  },
  {
    id: "staffReadiness",
    dimension: "Staff readiness",
    category: "Execution Readiness",
    prompt: "Has your crew or technical staff received training on alternative fuel systems or safety procedures?",
    gapInsight:
      "Crew and technical staff haven't been trained yet — safety training is typically a regulatory prerequisite before commissioning.",
    options: [
      { label: "No training conducted", points: 1 },
      { label: "Training planned but not scheduled", points: 2 },
      { label: "Training scheduled or in progress", points: 3 },
      { label: "Staff fully trained and certified", points: 4 },
    ],
  },
  {
    id: "pilotExperience",
    dimension: "Pilot experience",
    category: "Execution Readiness",
    prompt: "Have you run any pilot projects or trials with lower-carbon technology?",
    gapInsight:
      "No pilot projects run yet — a small-scale trial is usually the fastest way to de-risk a larger investment decision.",
    options: [
      { label: "No pilots run", points: 1 },
      { label: "Pilot planned", points: 2 },
      { label: "Pilot currently underway", points: 3 },
      { label: "Pilot completed with results applied", points: 4 },
    ],
  },
];

export const scoreCategories = [
  "Regulatory & Strategy",
  "Technical Foundation",
  "Execution Readiness",
] as const;

export const readinessTiers: ReadinessTier[] = [
  {
    name: "Early Stage",
    minPercent: 0,
    summary:
      "You're at the beginning of the decarbonization journey. That's a normal place to start — the priority now is building awareness and a clear internal case for action.",
    recommendations: [
      "Commission a feasibility study to establish your technical baseline",
      "Map upcoming IMO regulations against your specific fleet or assets",
      "Build an internal business case to secure leadership buy-in",
    ],
  },
  {
    name: "Developing",
    minPercent: 25,
    summary:
      "You've made initial moves, but key pieces — strategy, financing, or infrastructure assessment — still need to come together into a coordinated plan.",
    recommendations: [
      "Formalize a documented decarbonization strategy with executive sign-off",
      "Assess infrastructure compatibility for your preferred alternative fuel",
      "Start identifying financing sources ahead of detailed engineering",
    ],
  },
  {
    name: "Advancing",
    minPercent: 50,
    summary:
      "Most of the groundwork is in place. The focus now is de-risking execution — locking in partners, financing, and a pilot before scaling.",
    recommendations: [
      "Engage a licensed engineering and fabrication partner",
      "Run a pilot project to validate performance before full rollout",
      "Finalize financing and lock in a project timeline",
    ],
  },
  {
    name: "Leading",
    minPercent: 75,
    summary:
      "You're ahead of most of the industry. The opportunity now is to scale what's working and stay ahead of the next regulatory shift.",
    recommendations: [
      "Scale your pilot results across additional vessels or sites",
      "Formalize measurement and reporting for ongoing compliance",
      "Evaluate next-generation fuels to stay ahead of future regulation",
    ],
  },
];
