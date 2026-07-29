"use client";

import { useMemo, useState, type FormEvent } from "react";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/forms/Input";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { rankFuels, transitionComplexity } from "../utils/scoring";
import type { FuelLeadValues, FuelLeadErrors, SubmitStatus } from "../types/form";
import type {
  BudgetTier,
  BunkeringAccess,
  CalculatorInputs,
  FuelPriority,
  Timeline,
} from "@/types/fuel";

const priorityOptions: { value: FuelPriority; label: string }[] = [
  { value: "emissions", label: "Lowest emissions" },
  { value: "cost", label: "Lowest cost" },
  { value: "speed", label: "Fastest to implement" },
  { value: "range", label: "Longest range" },
];

const budgetOptions: { value: BudgetTier; label: string }[] = [
  { value: "limited", label: "Limited" },
  { value: "moderate", label: "Moderate" },
  { value: "significant", label: "Significant" },
];

const timelineOptions: { value: Timeline; label: string }[] = [
  { value: "immediate", label: "Immediate" },
  { value: "near-term", label: "1–3 years" },
  { value: "long-term", label: "3–5+ years" },
];

const bunkeringOptions: { value: BunkeringAccess; label: string }[] = [
  { value: "none", label: "None yet" },
  { value: "limited", label: "Limited" },
  { value: "developing", label: "Developing" },
  { value: "extensive", label: "Extensive" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_LEAD: FuelLeadValues = { name: "", email: "", company: "" };

function PillGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={
            "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-200 " +
            (value === option.value
              ? "border-accent-strong bg-accent text-ink"
              : "border-line bg-paper text-body hover:border-accent-strong/60")
          }
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function FuelCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    priority: "emissions",
    budget: "moderate",
    timeline: "near-term",
    bunkering: "limited",
  });
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [lead, setLead] = useState<FuelLeadValues>({ ...INITIAL_LEAD });
  const [leadErrors, setLeadErrors] = useState<FuelLeadErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [unlocked, setUnlocked] = useState(false);
  const [downloadRequested, setDownloadRequested] = useState(false);

  const ranked = useMemo(() => rankFuels(inputs), [inputs]);
  const topFuel = ranked[0];

  function setField<K extends keyof CalculatorInputs>(field: K, value: CalculatorInputs[K]) {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }

  function setLeadField<K extends keyof FuelLeadValues>(field: K, value: FuelLeadValues[K]) {
    setLead((prev) => ({ ...prev, [field]: value }));
    setLeadErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validateLead(values: FuelLeadValues): FuelLeadErrors {
    const errors: FuelLeadErrors = {};
    if (!values.name.trim()) errors.name = "Name is required.";
    if (!values.email.trim()) errors.email = "Email is required.";
    else if (!EMAIL_RE.test(values.email)) errors.email = "Enter a valid email address.";
    if (!values.company.trim()) errors.company = "Company is required.";
    return errors;
  }

  async function submitLead(event: FormEvent) {
    event.preventDefault();

    const nextErrors = validateLead(lead);
    if (Object.keys(nextErrors).length > 0) {
      setLeadErrors(nextErrors);
      return;
    }

    setSubmitStatus("submitting");
    try {
      await fetch("/api/fuel-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead, inputs, ranked }),
      });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }

    setUnlocked(true);
  }

  return (
    <div className="rounded-sm border border-line bg-mist/40 p-8 md:p-12">
      {/* ---- Live calculator inputs ---- */}
      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-body">
            What matters most?
          </p>
          <div className="mt-3">
            <PillGroup
              options={priorityOptions}
              value={inputs.priority}
              onChange={(v) => setField("priority", v)}
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-body">
            Budget available
          </p>
          <div className="mt-3">
            <PillGroup
              options={budgetOptions}
              value={inputs.budget}
              onChange={(v) => setField("budget", v)}
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-body">
            Transition timeline
          </p>
          <div className="mt-3">
            <PillGroup
              options={timelineOptions}
              value={inputs.timeline}
              onChange={(v) => setField("timeline", v)}
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-body">
            Bunkering infrastructure access today
          </p>
          <div className="mt-3">
            <PillGroup
              options={bunkeringOptions}
              value={inputs.bunkering}
              onChange={(v) => setField("bunkering", v)}
            />
          </div>
        </div>
      </div>

      {/* ---- Live ranked comparison ---- */}
      <div className="mt-10 border-t border-heading/80 pt-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-body">
          Live comparison
        </p>
        <div className="mt-5 space-y-3">
          {ranked.map(({ fuel, matchPercent }, i) => (
            <div key={fuel.id} className="overflow-hidden rounded-sm border border-line bg-paper">
              <button
                type="button"
                onClick={() => setExpandedId(expandedId === fuel.id ? null : fuel.id)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                {i === 0 ? (
                  <span className="hex-clip flex h-8 w-8 shrink-0 items-center justify-center bg-accent text-ink">
                    <Icon name="trendingUp" className="h-4 w-4" />
                  </span>
                ) : (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center text-sm font-medium text-body">
                    {i + 1}
                  </span>
                )}
                <span className="flex-1">
                  <span className="block text-sm font-semibold tracking-tight text-heading">
                    {fuel.name}
                  </span>
                  <span className="mt-1.5 block h-1.5 w-full overflow-hidden rounded-full bg-line">
                    <span
                      className="block h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
                      style={{ width: `${matchPercent}%` }}
                    />
                  </span>
                </span>
                <span className="w-12 shrink-0 text-right text-sm font-semibold text-heading">
                  {matchPercent}%
                </span>
                <Icon
                  name="arrowRight"
                  className={
                    "h-4 w-4 shrink-0 text-body transition-transform duration-300 " +
                    (expandedId === fuel.id ? "rotate-90" : "")
                  }
                />
              </button>
              {expandedId === fuel.id ? (
                <div className="border-t border-line px-5 py-4">
                  <p className="text-sm leading-relaxed text-body">{fuel.blurb}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* ---- Lead-gated full analysis ---- */}
      <div className="mt-10 border-t border-heading/80 pt-8">
        {!showLeadForm && !unlocked ? (
          <div className="text-center">
            <p className="text-sm leading-relaxed text-body">
              Based on your inputs, <strong className="text-heading">{topFuel.fuel.name}</strong>{" "}
              is your best fit. Get the full analysis and engineering consultation.
            </p>
            <Button
              type="button"
              variant="solid"
              withArrow
              className="mt-6"
              onClick={() => setShowLeadForm(true)}
            >
              Get My Full Analysis
            </Button>
          </div>
        ) : null}

        {showLeadForm && !unlocked ? (
          <form onSubmit={submitLead} noValidate className="mx-auto max-w-lg space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField label="Name" htmlFor="fuel-lead-name" error={leadErrors.name}>
                <Input
                  id="fuel-lead-name"
                  autoComplete="name"
                  value={lead.name}
                  onChange={(e) => setLeadField("name", e.target.value)}
                  placeholder="Jane Doe"
                  error={Boolean(leadErrors.name)}
                />
              </FormField>
              <FormField label="Email" htmlFor="fuel-lead-email" error={leadErrors.email}>
                <Input
                  id="fuel-lead-email"
                  type="email"
                  autoComplete="email"
                  value={lead.email}
                  onChange={(e) => setLeadField("email", e.target.value)}
                  placeholder="jane@company.com"
                  error={Boolean(leadErrors.email)}
                />
              </FormField>
            </div>
            <FormField label="Company" htmlFor="fuel-lead-company" error={leadErrors.company}>
              <Input
                id="fuel-lead-company"
                autoComplete="organization"
                value={lead.company}
                onChange={(e) => setLeadField("company", e.target.value)}
                placeholder="Company name"
                error={Boolean(leadErrors.company)}
              />
            </FormField>
            <Button type="submit" variant="solid" withArrow className="w-full sm:w-auto">
              {submitStatus === "submitting" ? "Analyzing…" : "Unlock Full Analysis"}
            </Button>
          </form>
        ) : null}

        {unlocked ? (
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent-deep">
              Best fit
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-heading md:text-3xl">
              {topFuel.fuel.name} &mdash; {topFuel.matchPercent}% match
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-body md:text-base">
              {topFuel.fuel.blurb}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-[0.28em] text-body">
                  Estimated transition complexity
                </h4>
                <p className="mt-3 text-lg font-semibold tracking-tight text-heading">
                  {transitionComplexity(topFuel.fuel)}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-[0.28em] text-body">
                  Infrastructure requirements
                </h4>
                <ul className="mt-3 space-y-2">
                  {topFuel.fuel.infrastructureRequirements.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xs font-medium uppercase tracking-[0.28em] text-body">
                  Challenges to plan for
                </h4>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {topFuel.fuel.challenges.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-heading/80 pt-8 sm:flex-row">
              <Button href="/contact" variant="solid" withArrow>
                Request Engineering Consultation
              </Button>
              {downloadRequested ? (
                <p className="flex items-center gap-2 text-sm font-medium text-accent-deep">
                  <Icon name="shield" className="h-4 w-4" />
                  The handbook is on its way to {lead.email}.
                </p>
              ) : (
                <Button type="button" variant="outline" onClick={() => setDownloadRequested(true)}>
                  Download Comparison Handbook
                </Button>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
