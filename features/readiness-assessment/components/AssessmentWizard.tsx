"use client";

import { useMemo, useState, type FormEvent } from "react";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/forms/Input";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { profileQuestions, scoreQuestions } from "@/data/assessment/questions";
import { calculateResult } from "../utils/scoring";
import type { LeadFormValues, LeadFormErrors, SubmitStatus } from "../types/wizard";
import type { AssessmentResult } from "@/types/assessment";

type Phase = "start" | "questions" | "lead" | "results";

type Step =
  | { kind: "profile"; group: string; id: string; prompt: string; options: string[] }
  | { kind: "score"; group: string; id: string; prompt: string; options: { label: string; points: number }[] };

const steps: Step[] = [
  ...profileQuestions.map(
    (q): Step => ({
      kind: "profile",
      group: "Your Organization",
      id: q.id,
      prompt: q.prompt,
      options: q.options.map((o) => o.label),
    })
  ),
  ...scoreQuestions.map(
    (q): Step => ({
      kind: "score",
      group: q.category,
      id: q.id,
      prompt: q.prompt,
      options: q.options.map((o) => ({ label: o.label, points: o.points })),
    })
  ),
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_LEAD: LeadFormValues = { name: "", email: "", company: "", role: "" };

function validateLead(values: LeadFormValues): LeadFormErrors {
  const errors: LeadFormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.company.trim()) errors.company = "Company is required.";
  return errors;
}

function RadialGauge({ percent, size = 72 }: { percent: number; size?: number }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.max(0, Math.min(100, percent)) / 100) * circumference;

  return (
    <div className="relative shrink-0" style={{ height: size, width: size }}>
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--color-line)" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 300ms ease-out" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold tracking-tight text-heading">
        {percent}%
      </span>
    </div>
  );
}

export function AssessmentWizard() {
  const [phase, setPhase] = useState<Phase>("start");
  const [stepIndex, setStepIndex] = useState(0);
  const [profileAnswers, setProfileAnswers] = useState<Record<string, string>>({});
  const [scoreAnswers, setScoreAnswers] = useState<Record<string, number>>({});
  const [lead, setLead] = useState<LeadFormValues>({ ...INITIAL_LEAD });
  const [leadErrors, setLeadErrors] = useState<LeadFormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [downloadRequested, setDownloadRequested] = useState(false);

  const step = steps[stepIndex];
  const groupSteps = steps.filter((s) => s.group === step?.group);
  const indexInGroup = groupSteps.findIndex((s) => s.id === step?.id);
  const overallProgress = Math.round((stepIndex / steps.length) * 100);

  const answeredScoreCount = Object.keys(scoreAnswers).length;
  const livePercent = useMemo(() => {
    if (answeredScoreCount === 0) return 0;
    const sum = Object.values(scoreAnswers).reduce((s, v) => s + v, 0);
    return Math.round((sum / (answeredScoreCount * 4)) * 100);
  }, [scoreAnswers, answeredScoreCount]);

  function advance() {
    if (stepIndex >= steps.length - 1) {
      setPhase("lead");
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  function back() {
    if (stepIndex === 0) {
      setPhase("start");
    } else {
      setStepIndex((i) => i - 1);
    }
  }

  function selectProfile(id: string, label: string) {
    setProfileAnswers((prev) => ({ ...prev, [id]: label }));
    advance();
  }

  function selectScore(id: string, points: number) {
    setScoreAnswers((prev) => ({ ...prev, [id]: points }));
    advance();
  }

  function setLeadField<K extends keyof LeadFormValues>(field: K, value: LeadFormValues[K]) {
    setLead((prev) => ({ ...prev, [field]: value }));
    setLeadErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function submitLead(event: FormEvent) {
    event.preventDefault();

    const nextErrors = validateLead(lead);
    if (Object.keys(nextErrors).length > 0) {
      setLeadErrors(nextErrors);
      return;
    }

    const computed = calculateResult(scoreAnswers);
    setSubmitStatus("submitting");

    try {
      await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead, profileAnswers, scoreAnswers, result: computed }),
      });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }

    setResult(computed);
    setPhase("results");
  }

  // ---- Start ----
  if (phase === "start") {
    return (
      <div className="rounded-sm border border-line bg-mist/40 p-8 text-center md:p-12">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-body">
          {steps.length} questions &middot; 5 minutes
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-heading md:text-3xl">
          See where your organization stands
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-body">
          A quick profile, then a readiness check across three areas &mdash;
          your score builds live as you go. You&rsquo;ll get a full breakdown,
          gap analysis, and recommended next steps at the end.
        </p>
        <Button
          type="button"
          variant="solid"
          withArrow
          className="mt-8"
          onClick={() => setPhase("questions")}
        >
          Get My Readiness Report
        </Button>
      </div>
    );
  }

  // ---- One question per screen, grouped by category ----
  if (phase === "questions" && step) {
    return (
      <div className="rounded-sm border border-line bg-mist/40 p-8 md:p-12">
        <div className="mb-8 flex items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.15em] text-body">
              <span>
                {step.group} &middot; {indexInGroup + 1} of {groupSteps.length}
              </span>
              <span>{overallProgress}%</span>
            </div>
            <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
          {step.kind === "score" ? <RadialGauge percent={livePercent} size={56} /> : null}
        </div>

        <h2 className="text-xl font-medium leading-snug text-heading md:text-2xl">
          {step.prompt}
        </h2>

        <div className="mt-6 space-y-2.5">
          {step.kind === "profile"
            ? step.options.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => selectProfile(step.id, label)}
                  className="block w-full rounded-sm border border-line bg-paper px-5 py-3 text-left text-sm text-heading transition-colors duration-200 hover:border-accent-strong/60"
                >
                  {label}
                </button>
              ))
            : step.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => selectScore(step.id, option.points)}
                  className="block w-full rounded-sm border border-line bg-paper px-5 py-3 text-left text-sm text-heading transition-colors duration-200 hover:border-accent-strong/60"
                >
                  {option.label}
                </button>
              ))}
        </div>

        <button
          type="button"
          onClick={back}
          className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-body hover:text-heading"
        >
          <Icon name="arrowRight" className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1" />
          Back
        </button>
      </div>
    );
  }

  // ---- Lead capture ----
  if (phase === "lead") {
    return (
      <div className="rounded-sm border border-line bg-mist/40 p-8 md:p-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-body">Almost there</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-heading md:text-3xl">
              Where should we send your results?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-body">
              Your readiness score, gap analysis, and recommended next steps
              are ready. Tell us who to send them to.
            </p>
          </div>
          <RadialGauge percent={livePercent} />
        </div>

        <form onSubmit={submitLead} noValidate className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Name" htmlFor="lead-name" error={leadErrors.name}>
              <Input
                id="lead-name"
                autoComplete="name"
                value={lead.name}
                onChange={(e) => setLeadField("name", e.target.value)}
                placeholder="Jane Doe"
                error={Boolean(leadErrors.name)}
              />
            </FormField>
            <FormField label="Email" htmlFor="lead-email" error={leadErrors.email}>
              <Input
                id="lead-email"
                type="email"
                autoComplete="email"
                value={lead.email}
                onChange={(e) => setLeadField("email", e.target.value)}
                placeholder="jane@company.com"
                error={Boolean(leadErrors.email)}
              />
            </FormField>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Company" htmlFor="lead-company" error={leadErrors.company}>
              <Input
                id="lead-company"
                autoComplete="organization"
                value={lead.company}
                onChange={(e) => setLeadField("company", e.target.value)}
                placeholder="Company name"
                error={Boolean(leadErrors.company)}
              />
            </FormField>
            <FormField label="Job title (optional)" htmlFor="lead-role">
              <Input
                id="lead-role"
                autoComplete="organization-title"
                value={lead.role}
                onChange={(e) => setLeadField("role", e.target.value)}
                placeholder="Operations Director"
              />
            </FormField>
          </div>

          <div className="flex items-center justify-between border-t border-heading/80 pt-6">
            <button
              type="button"
              onClick={() => {
                setStepIndex(steps.length - 1);
                setPhase("questions");
              }}
              className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-body hover:text-heading"
            >
              <Icon name="arrowRight" className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1" />
              Back
            </button>
            <Button type="submit" variant="solid" withArrow>
              {submitStatus === "submitting" ? "Calculating…" : "Get My Readiness Report"}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  // ---- Results ----
  if (phase === "results" && result) {
    return (
      <div className="rounded-sm border border-line bg-mist/40 p-8 md:p-12">
        <div className="flex flex-wrap items-center gap-6">
          <RadialGauge percent={result.percent} size={88} />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent-strong">
              Your readiness score
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-heading">{result.tier}</p>
          </div>
        </div>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-body md:text-base">{result.summary}</p>

        {/* ---- Full dimension breakdown ---- */}
        <div className="mt-10 border-t border-heading/80 pt-6">
          <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-body">
            Readiness breakdown
          </h3>
          <div className="mt-5 space-y-3">
            {scoreQuestions.map((q) => {
              const points = scoreAnswers[q.id] ?? 0;
              const pct = Math.round((points / 4) * 100);
              return (
                <div key={q.id} className="flex items-center gap-4">
                  <span className="w-40 shrink-0 text-xs text-body sm:w-48">{q.dimension}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                    <span
                      className="block h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
                      style={{ width: `${pct}%` }}
                    />
                  </span>
                  <span className="w-8 shrink-0 text-right text-xs font-semibold text-heading">
                    {points}/4
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {result.gaps.length > 0 ? (
          <div className="mt-10 border-t border-heading/80 pt-6">
            <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-body">Gap analysis</h3>
            <ul className="mt-4 space-y-3">
              {result.gaps.map((gap) => (
                <li key={gap} className="flex items-start gap-3 text-sm leading-relaxed text-heading">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {gap}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-10 border-t border-heading/80 pt-6">
          <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-body">
            Recommended next steps
          </h3>
          <ul className="mt-4 space-y-3">
            {result.recommendations.map((rec) => (
              <li key={rec} className="flex items-start gap-3 text-sm leading-relaxed text-heading">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {rec}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-heading/80 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              variant="solid"
              withArrow
              onClick={() => {
                setDownloadRequested(true);
                window.print();
              }}
            >
              Download Full Report (PDF)
            </Button>
            <Button href="/contact" variant="outline">
              Book a Strategy Session
            </Button>
          </div>
          {downloadRequested ? (
            <p className="mt-3 text-xs leading-relaxed text-body">
              In the print dialog, choose &ldquo;Save as PDF&rdquo; as the destination.
            </p>
          ) : null}
        </div>

        {/* ---- Print-only report, hidden on screen ---- */}
        <div className="print-report hidden bg-white p-10 text-black print:block">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Maritime Decarbonization Readiness Report
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {lead.company || "Your Organization"}
          </h1>
          <p className="mt-1 text-sm text-neutral-600">
            Prepared for {lead.name || "you"}
            {lead.role ? `, ${lead.role}` : ""} &middot;{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="mt-8 border-t border-neutral-300 pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Readiness score
            </p>
            <p className="mt-2 text-5xl font-semibold tracking-tight">
              {result.percent}% &mdash; {result.tier}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">
              {result.summary}
            </p>
          </div>

          <div className="mt-8 border-t border-neutral-300 pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Readiness breakdown
            </p>
            <table className="mt-3 w-full text-sm">
              <tbody>
                {scoreQuestions.map((q) => (
                  <tr key={q.id} className="border-b border-neutral-200">
                    <td className="py-1.5 pr-4 text-neutral-700">{q.dimension}</td>
                    <td className="py-1.5 text-right font-medium">
                      {scoreAnswers[q.id] ?? 0} / 4
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {result.gaps.length > 0 ? (
            <div className="mt-8 border-t border-neutral-300 pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Gap analysis
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-800">
                {result.gaps.map((gap) => (
                  <li key={gap}>{gap}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-8 border-t border-neutral-300 pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Recommended next steps
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-800">
              {result.recommendations.map((rec) => (
                <li key={rec}>{rec}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-neutral-300 pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Organization profile
            </p>
            <table className="mt-3 w-full text-sm">
              <tbody>
                {profileQuestions.map((q) => (
                  <tr key={q.id} className="border-b border-neutral-200">
                    <td className="py-1.5 pr-4 text-neutral-500">{q.prompt}</td>
                    <td className="py-1.5 text-right font-medium">
                      {profileAnswers[q.id] ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-10 border-t border-neutral-300 pt-6 text-xs text-neutral-500">
            This report is a directional self-assessment based on the answers
            provided. For a detailed engineering evaluation, book a strategy
            session with a Wavelength engineer.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
