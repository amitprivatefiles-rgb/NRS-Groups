"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkPassword, endSession, isAdmin, startSession } from "@/lib/auth";
import { leadStore } from "@/lib/db";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/leads";

export async function login(_prev: string | undefined, form: FormData) {
  const password = form.get("password");
  if (typeof password !== "string" || !checkPassword(password)) return "Incorrect password.";
  await startSession();
  redirect("/admin");
}

export async function logout() {
  await endSession();
  redirect("/admin");
}

export async function updateStatus(form: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const id = form.get("id");
  const status = form.get("status");
  if (typeof id !== "string" || !LEAD_STATUSES.includes(status as LeadStatus)) return;
  await leadStore().setStatus(id, status as LeadStatus);
  revalidatePath("/admin");
}
