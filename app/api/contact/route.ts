import { NextResponse } from "next/server";
import { validateContactForm } from "@/features/contact/utils/contact";
import type { ContactFormValues } from "@/features/contact/types/contact";

export async function POST(request: Request) {
  const body = (await request.json()) as ContactFormValues;
  const errors = validateContactForm(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // TODO: wire to an email provider or CRM (e.g. Resend, SendGrid) before launch.
  console.log("Contact form submission:", body);

  return NextResponse.json({ ok: true });
}
