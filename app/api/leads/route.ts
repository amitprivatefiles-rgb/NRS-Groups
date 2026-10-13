import { NextResponse } from "next/server";
import { leadStore } from "@/lib/db";
import { validateLead } from "@/lib/leads";
import { sendLeadNotification } from "@/lib/mail";

// Public lead endpoint for other NRS websites (e.g. the R. P. Verma personal
// site), so every form lands in the same lead list at /admin.
// Allowed browser origins come from LEAD_ALLOWED_ORIGINS (comma-separated).

function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = (process.env.LEAD_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
  if (!origin || !allowed.includes(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

export function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(req.headers.get("origin")) });
}

export async function POST(req: Request) {
  const headers = corsHeaders(req.headers.get("origin"));
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid form data." }, { status: 400, headers });
  }

  // Honeypot: real visitors never fill this field.
  if (form.get("company_website")) return NextResponse.json({ ok: true }, { headers });

  const result = validateLead(form);
  if (!result.ok) {
    return NextResponse.json({ ok: false, message: "Please check the highlighted fields.", errors: result.errors }, { status: 422, headers });
  }

  try {
    const lead = await leadStore().create(result.lead);
    try {
      await sendLeadNotification(lead);
    } catch (err) {
      console.error("[api/leads] notification email failed", lead.id, err);
    }
  } catch (err) {
    console.error("[api/leads] could not save lead", err);
    return NextResponse.json({ ok: false, message: "Something went wrong. Please try again." }, { status: 500, headers });
  }

  return NextResponse.json({ ok: true }, { headers });
}
