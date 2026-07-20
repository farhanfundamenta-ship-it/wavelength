"use client";

import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/forms/Input";
import { Textarea } from "@/components/forms/Textarea";
import { Select } from "@/components/forms/Select";
import { Checkbox } from "@/components/forms/Checkbox";
import { Button } from "@/components/buttons/Button";
import { useContactForm } from "../hooks/useContactForm";
import { CONTACT_SUBJECTS } from "../constants/contact";
import type { ContactSubject } from "../types/contact";

export function ContactForm() {
  const { values, errors, status, setField, submit } = useContactForm();

  if (status === "success") {
    return (
      <div className="border-t border-heading/80 pt-8">
        <h3 className="text-2xl font-semibold tracking-tight text-heading">
          Message sent.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-body">
          Thanks for reaching out. An engineer from our team will get back to
          you within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Jane Doe"
            error={Boolean(errors.name)}
          />
        </FormField>
        <FormField label="Email" htmlFor="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="jane@company.com"
            error={Boolean(errors.email)}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Company" htmlFor="company">
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => setField("company", e.target.value)}
            placeholder="Company name"
          />
        </FormField>
        <FormField label="Subject" htmlFor="subject">
          <Select
            id="subject"
            name="subject"
            value={values.subject}
            onChange={(e) => setField("subject", e.target.value as ContactSubject)}
          >
            {CONTACT_SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField label="Message" htmlFor="message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          placeholder="Tell us about your project or challenge."
          error={Boolean(errors.message)}
        />
      </FormField>

      <div>
        <Checkbox
          checked={values.consent}
          onChange={(e) => setField("consent", e.target.checked)}
          label={
            <>
              I agree to be contacted about my enquiry, in line with the{" "}
              <a
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-heading"
              >
                privacy policy
              </a>
              .
            </>
          }
        />
        {errors.consent ? (
          <p className="mt-1.5 text-xs text-red-600">{errors.consent}</p>
        ) : null}
      </div>

      <div>
        <Button type="submit" variant="solid" withArrow className="w-full sm:w-auto">
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
        {status === "error" ? (
          <p className="mt-3 text-xs text-red-600">
            Something went wrong. Please try again or email us directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
