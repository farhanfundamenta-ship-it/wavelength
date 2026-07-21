export type WizardPhase = "start" | "questions" | "lead" | "results";

export interface LeadFormValues {
  name: string;
  email: string;
  company: string;
  role: string;
}

export type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

export type SubmitStatus = "idle" | "submitting" | "success" | "error";
