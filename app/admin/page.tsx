import type { Metadata } from "next";
import { adminConfigured, isAdmin } from "@/lib/auth";
import { leadStore } from "@/lib/db";
import { fieldLabel, LEAD_STATUSES, type LeadKind, type LeadStatus } from "@/lib/leads";
import { logout, updateStatus } from "./actions";
import LoginForm from "./LoginForm";

export const metadata: Metadata = { title: "Leads", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

type Search = Promise<{ status?: string; kind?: string }>;

export default async function AdminPage({ searchParams }: { searchParams: Search }) {
  if (!adminConfigured()) {
    return (
      <main className="admin">
        <p className="admin-login">Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET to enable the lead list.</p>
      </main>
    );
  }
  if (!(await isAdmin())) {
    return (
      <main className="admin">
        <LoginForm />
      </main>
    );
  }

  const { status, kind } = await searchParams;
  const all = await leadStore().list();
  const leads = all.filter(
    (l) => (!status || l.status === status) && (!kind || l.kind === kind),
  );
  const counts = Object.fromEntries(LEAD_STATUSES.map((s) => [s, all.filter((l) => l.status === s).length]));

  const filterHref = (next: { status?: string; kind?: string }) => {
    const p = new URLSearchParams();
    const s = "status" in next ? next.status : status;
    const k = "kind" in next ? next.kind : kind;
    if (s) p.set("status", s);
    if (k) p.set("kind", k);
    const q = p.toString();
    return q ? `/admin?${q}` : "/admin";
  };

  return (
    <main className="admin">
      <header className="admin__bar">
        <h1>NRS leads</h1>
        <form action={logout}>
          <button className="btn btn--outline btn--sm">Sign out</button>
        </form>
      </header>

      <nav className="admin__filters" aria-label="Filter leads">
        <a href={filterHref({ status: undefined })} className={!status ? "active" : ""}>
          All ({all.length})
        </a>
        {LEAD_STATUSES.map((s) => (
          <a key={s} href={filterHref({ status: s })} className={status === s ? "active" : ""}>
            {s} ({counts[s]})
          </a>
        ))}
        <span className="admin__sep" />
        <a href={filterHref({ kind: undefined })} className={!kind ? "active" : ""}>
          Both
        </a>
        <a href={filterHref({ kind: "investor" })} className={kind === "investor" ? "active" : ""}>
          Investors
        </a>
        <a href={filterHref({ kind: "creator" })} className={kind === "creator" ? "active" : ""}>
          Creators
        </a>
        <a href={filterHref({ kind: "partner" })} className={kind === "partner" ? "active" : ""}>
          Partners
        </a>
      </nav>

      {leads.length === 0 ? (
        <p className="admin__empty">No leads yet.</p>
      ) : (
        <div className="admin__table-wrap">
          <table className="admin__table">
            <thead>
              <tr>
                <th>Received</th>
                <th>Type</th>
                <th>Contact</th>
                <th>Details</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id}>
                  <td className="nowrap">
                    {new Date(l.createdAt).toLocaleString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                  <td>
                    <span className={`pill pill--${l.kind}`}>{l.kind}</span>
                  </td>
                  <td>
                    <strong>{l.name}</strong>
                    <br />
                    <a href={`tel:${l.phone.replace(/[^\d+]/g, "")}`}>{l.phone}</a>
                    {l.email && (
                      <>
                        <br />
                        <a href={`mailto:${l.email}`}>{l.email}</a>
                      </>
                    )}
                  </td>
                  <td>
                    <dl className="admin__details">
                      {Object.entries(l.details).map(([k, v]) => (
                        <div key={k}>
                          <dt>{fieldLabel(l.kind as LeadKind, k)}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                      {l.attachmentName && (
                        <div>
                          <dt>Deck</dt>
                          <dd>{l.attachmentName} (sent by email)</dd>
                        </div>
                      )}
                    </dl>
                  </td>
                  <td>
                    <form action={updateStatus} className="admin__status">
                      <input type="hidden" name="id" value={l.id} />
                      <select name="status" defaultValue={l.status} aria-label={`Status for ${l.name}`}>
                        {LEAD_STATUSES.map((s: LeadStatus) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <button className="btn btn--sm btn--outline">Save</button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
