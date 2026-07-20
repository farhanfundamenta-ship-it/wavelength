import type { ContactSubject } from "../types/contact";

export const CONTACT_SUBJECTS: ContactSubject[] = [
  "General Enquiry",
  "New Project",
  "Partnership",
  "Careers",
  "Other",
];

export const INITIAL_CONTACT_VALUES = {
  name: "",
  email: "",
  company: "",
  subject: CONTACT_SUBJECTS[0],
  message: "",
  consent: false,
} as const;
