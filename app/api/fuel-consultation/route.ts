import { NextResponse } from "next/server";
import type { FuelLeadValues } from "@/features/fuel-calculator/types/form";
import type { CalculatorInputs, RankedFuel } from "@/types/fuel";

interface FuelConsultationSubmission {
  lead: FuelLeadValues;
  inputs: CalculatorInputs;
  ranked: RankedFuel[];
}

export async function POST(request: Request) {
  const body = (await request.json()) as FuelConsultationSubmission;

  if (!body.lead?.name || !body.lead?.email || !body.lead?.company) {
    return NextResponse.json({ error: "Missing required lead fields." }, { status: 400 });
  }

  // TODO: wire to a CRM or email provider (e.g. HubSpot, Resend) before launch.
  // Also trigger delivery of the Alternative Marine Fuel Comparison Handbook to body.lead.email here.
  console.log("Fuel calculator consultation request:", body);

  return NextResponse.json({ ok: true });
}
