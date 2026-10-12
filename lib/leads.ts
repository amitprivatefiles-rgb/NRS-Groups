import { options } from "./content";

export const LEAD_STATUSES = ["new", "contacted", "meeting", "closed"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];
export type LeadKind = "investor" | "creator";

export type Lead = {
  id: string;
  kind: LeadKind;
  status: LeadStatus;
  name: string;
  phone: string;
  email: string;
  // Remaining form fields, keyed by field name.
  details: Record<string, string>;
  attachmentName?: string;
  createdAt: string;
};

export type NewLead = Omit<Lead, "id" | "status" | "createdAt">;

type FieldSpec = {
  label: string;
  required?: boolean;
  max?: number;
  oneOf?: readonly string[];
  multi?: boolean;
};

export const investorFields: Record<string, FieldSpec> = {
  city: { label: "City", required: true, max: 80 },
  investorType: { label: "Investor type", required: true, oneOf: options.investorType },
  amountRange: { label: "Amount range", required: true, oneOf: options.amountRange },
  preferredProject: { label: "Preferred project", required: true, oneOf: options.preferredProject },
  sectors: { label: "Sector interest", oneOf: options.sector, multi: true },
  structure: { label: "Expected structure", oneOf: options.structure },
  timeline: { label: "Timeline", oneOf: options.timeline },
  message: { label: "Message", max: 2000 },
};

export const creatorFields: Record<string, FieldSpec> = {
  ideaTitle: { label: "Idea title", required: true, max: 140 },
  sector: { label: "Sector", required: true, oneOf: options.sector },
  pitch: { label: "Short pitch", required: true, max: 2000 },
  stage: { label: "Stage", required: true, oneOf: options.stage },
  fundingNeeded: { label: "Funding needed", max: 80 },
  deckLink: { label: "Deck link", max: 500 },
};

export function fieldLabel(kind: LeadKind, key: string) {
  const spec = (kind === "investor" ? investorFields : creatorFields)[key];
  return spec?.label ?? key;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;

export type ValidationResult =
  | { ok: true; lead: NewLead }
  | { ok: false; errors: Record<string, string> };

function str(form: FormData, key: string) {
  const v = form.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export function validateLead(form: FormData): ValidationResult {
  const errors: Record<string, string> = {};
  const kind = str(form, "kind");
  if (kind !== "investor" && kind !== "creator") {
    return { ok: false, errors: { form: "Unknown form type." } };
  }

  const name = str(form, "name");
  const phone = str(form, "phone");
  const email = str(form, "email");
  if (!name || name.length > 120) errors.name = "Please enter your name.";
  if (!PHONE_RE.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (kind === "investor" && !EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (kind === "creator" && email && !EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";

  const specs = kind === "investor" ? investorFields : creatorFields;
  const details: Record<string, string> = {};
  for (const [key, spec] of Object.entries(specs)) {
    const values = spec.multi
      ? form.getAll(key).filter((v): v is string => typeof v === "string").map((v) => v.trim()).filter(Boolean)
      : [str(form, key)].filter(Boolean);

    if (spec.required && values.length === 0) {
      errors[key] = `${spec.label} is required.`;
      continue;
    }
    if (spec.oneOf && values.some((v) => !spec.oneOf!.includes(v))) {
      errors[key] = `Please choose a valid ${spec.label.toLowerCase()}.`;
      continue;
    }
    if (spec.max && values.some((v) => v.length > spec.max!)) {
      errors[key] = `${spec.label} is too long.`;
      continue;
    }
    if (values.length) details[key] = values.join(", ");
  }

  if (details.deckLink && !/^https?:\/\//i.test(details.deckLink)) {
    errors.deckLink = "Deck link must start with http:// or https://";
  }

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, lead: { kind, name, phone, email, details } };
}
