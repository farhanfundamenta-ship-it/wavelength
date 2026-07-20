"use client";

import { useState, type FormEvent } from "react";
import type { ContactFormValues, ContactFormErrors, ContactFormStatus } from "../types/contact";
import { INITIAL_CONTACT_VALUES } from "../constants/contact";
import { validateContactForm } from "../utils/contact";

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>({ ...INITIAL_CONTACT_VALUES });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  function setField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();

    const nextErrors = validateContactForm(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ ...INITIAL_CONTACT_VALUES });
    } catch {
      setStatus("error");
    }
  }

  return { values, errors, status, setField, submit };
}
