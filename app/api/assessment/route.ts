import { NextResponse } from "next/server";
import type { LeadFormValues } from "@/features/readiness-assessment/types/wizard";
import type { AssessmentResult } from "@/types/assessment";

interface AssessmentSubmission {
  lead: LeadFormValues;
  profileAnswers: Record<string, string>;
  scoreAnswers: Record<string, number>;
  result: AssessmentResult;
}

export async function POST(request: Request) {
  const body = (await request.json()) as AssessmentSubmission;

  if (!body.lead?.name || !body.lead?.email || !body.lead?.company) {
    return NextResponse.json({ error: "Missing required lead fields." }, { status: 400 });
  }

  // TODO: wire to a CRM or email provider (e.g. HubSpot, Resend) before launch.
  // Also trigger delivery of the full PDF report to body.lead.email here.
  console.log("Readiness assessment submission:", body);

  return NextResponse.json({ ok: true });
}
