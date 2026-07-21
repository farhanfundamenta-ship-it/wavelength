export interface ProfileOption {
  label: string;
}

export interface ProfileQuestion {
  id: string;
  prompt: string;
  options: ProfileOption[];
}

export interface ScoreOption {
  label: string;
  points: 1 | 2 | 3 | 4;
}

export interface ScoreQuestion {
  id: string;
  prompt: string;
  dimension: string;
  category: string;
  gapInsight: string;
  options: ScoreOption[];
}

export type ReadinessTierName = "Early Stage" | "Developing" | "Advancing" | "Leading";

export interface ReadinessTier {
  name: ReadinessTierName;
  minPercent: number;
  summary: string;
  recommendations: string[];
}

export interface LeadInfo {
  name: string;
  email: string;
  company: string;
  role: string;
}

export interface AssessmentResult {
  percent: number;
  tier: ReadinessTierName;
  summary: string;
  gaps: string[];
  recommendations: string[];
}
