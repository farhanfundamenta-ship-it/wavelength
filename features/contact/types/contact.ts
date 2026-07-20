export type ContactSubject =
  | "General Enquiry"
  | "New Project"
  | "Partnership"
  | "Careers"
  | "Other";

export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  subject: ContactSubject;
  message: string;
  consent: boolean;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";
