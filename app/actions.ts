"use server";

import { leadStore } from "@/lib/db";
import { validateLead } from "@/lib/leads";
import { sendLeadNotification, type Attachment } from "@/lib/mail";

export type SubmitState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

const MAX_DECK_BYTES = 5 * 1024 * 1024;
const DECK_TYPES = [".pdf", ".ppt", ".pptx", ".key", ".doc", ".docx"];

export async function submitLead(_prev: SubmitState, form: FormData): Promise<SubmitState> {
  // Honeypot: real visitors never see or fill this field.
  if (form.get("company_website")) return { status: "success", message: "Thank you!" };

  const result = validateLead(form);
  if (!result.ok) {
    return { status: "error", message: "Please check the highlighted fields.", errors: result.errors };
  }

  let attachment: Attachment | undefined;
  const deck = form.get("deckFile");
  if (deck instanceof File && deck.size > 0) {
    const ext = deck.name.slice(deck.name.lastIndexOf(".")).toLowerCase();
    if (!DECK_TYPES.includes(ext)) {
      return { status: "error", message: "Please check the highlighted fields.", errors: { deckFile: "Upload a PDF, PPT, Keynote or Word file." } };
    }
    if (deck.size > MAX_DECK_BYTES) {
      return { status: "error", message: "Please check the highlighted fields.", errors: { deckFile: "Deck must be 5 MB or smaller." } };
    }
    attachment = { filename: deck.name.replace(/[^\w.\- ]/g, "_"), content: Buffer.from(await deck.arrayBuffer()) };
    result.lead.attachmentName = attachment.filename;
  }

  try {
    const lead = await leadStore().create(result.lead);
    try {
      await sendLeadNotification(lead, attachment);
    } catch (err) {
      // The lead is already saved; a mail outage should not lose it or fail the visitor.
      console.error("[lead] notification email failed", lead.id, err);
    }
  } catch (err) {
    console.error("[lead] could not save lead", err);
    return { status: "error", message: "Something went wrong. Please try again or call us on +91 70444 70888." };
  }

  return {
    status: "success",
    message:
      result.lead.kind === "investor"
        ? "Thank you! Our investment team will contact you shortly."
        : "Thank you for sharing your idea! Our team will review it and get back to you.",
  };
}
