export interface FuelLeadValues {
  name: string;
  email: string;
  company: string;
}

export type FuelLeadErrors = Partial<Record<keyof FuelLeadValues, string>>;
export type SubmitStatus = "idle" | "submitting" | "success" | "error";
