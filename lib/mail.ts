import "server-only";
import nodemailer from "nodemailer";
import { fieldLabel, type Lead } from "./leads";

export type Attachment = { filename: string; content: Buffer };

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function sendLeadNotification(lead: Lead, attachment?: Attachment) {
  const host = process.env.SMTP_HOST;
  const to = process.env.LEAD_NOTIFY_TO;
  if (!host || !to) {
    console.warn("[mail] SMTP_HOST or LEAD_NOTIFY_TO not set; skipping lead email for", lead.id);
    return false;
  }

  const transport = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
  });

  const kindLabel = lead.kind === "investor" ? "investor" : "creator";
  const rows: [string, string][] = [
    ["Type", lead.kind === "investor" ? "Investor" : "Creator (idea)"],
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "—"],
    ...Object.entries(lead.details).map(([k, v]) => [fieldLabel(lead.kind, k), v] as [string, string]),
    ...(attachment ? [["Attachment", attachment.filename] as [string, string]] : []),
    ["Received", new Date(lead.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
    ["Lead ID", lead.id],
  ];

  await transport.sendMail({
    from: process.env.LEAD_NOTIFY_FROM ?? process.env.SMTP_USER,
    to,
    replyTo: lead.email || undefined,
    subject: `New ${kindLabel} enquiry from NRS website: ${lead.name}`,
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    html: `<h2 style="font-family:sans-serif">New ${kindLabel} enquiry from NRS website</h2>
      <table style="font-family:sans-serif;border-collapse:collapse">${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:600">${escapeHtml(k)}</td><td style="padding:6px 12px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}</table>`,
    attachments: attachment ? [attachment] : undefined,
  });
  return true;
}
