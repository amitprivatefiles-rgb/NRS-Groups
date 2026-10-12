import "server-only";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { Pool } from "pg";
import type { Lead, LeadStatus, NewLead } from "./leads";

// Leads go to Postgres when DATABASE_URL is set. Without it they are kept in a
// local JSON file, which is fine for development but NOT for serverless hosting
// (the filesystem there is read-only or ephemeral).

interface LeadStore {
  create(lead: NewLead): Promise<Lead>;
  list(): Promise<Lead[]>;
  setStatus(id: string, status: LeadStatus): Promise<void>;
}

class PgStore implements LeadStore {
  private pool: Pool;
  private ready: Promise<unknown>;

  constructor(url: string) {
    this.pool = new Pool({
      connectionString: url,
      ssl: /sslmode=disable/.test(url) || /localhost|127\.0\.0\.1/.test(url) ? undefined : { rejectUnauthorized: false },
      max: 3,
    });
    this.ready = this.pool.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id UUID PRIMARY KEY,
        kind TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'new',
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL DEFAULT '',
        details JSONB NOT NULL DEFAULT '{}'::jsonb,
        attachment_name TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`);
  }

  async create(lead: NewLead): Promise<Lead> {
    await this.ready;
    const id = randomUUID();
    const { rows } = await this.pool.query(
      `INSERT INTO leads (id, kind, name, phone, email, details, attachment_name)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING created_at`,
      [id, lead.kind, lead.name, lead.phone, lead.email, lead.details, lead.attachmentName ?? null],
    );
    return { ...lead, id, status: "new", createdAt: new Date(rows[0].created_at).toISOString() };
  }

  async list(): Promise<Lead[]> {
    await this.ready;
    const { rows } = await this.pool.query(`SELECT * FROM leads ORDER BY created_at DESC LIMIT 500`);
    return rows.map((r) => ({
      id: r.id,
      kind: r.kind,
      status: r.status,
      name: r.name,
      phone: r.phone,
      email: r.email,
      details: r.details,
      attachmentName: r.attachment_name ?? undefined,
      createdAt: new Date(r.created_at).toISOString(),
    }));
  }

  async setStatus(id: string, status: LeadStatus) {
    await this.ready;
    await this.pool.query(`UPDATE leads SET status = $1 WHERE id = $2`, [status, id]);
  }
}

class FileStore implements LeadStore {
  private file = path.join(process.cwd(), "data", "leads.json");

  private async read(): Promise<Lead[]> {
    try {
      return JSON.parse(await fs.readFile(this.file, "utf8"));
    } catch {
      return [];
    }
  }

  private async write(leads: Lead[]) {
    await fs.mkdir(path.dirname(this.file), { recursive: true });
    await fs.writeFile(this.file, JSON.stringify(leads, null, 2));
  }

  async create(lead: NewLead): Promise<Lead> {
    const leads = await this.read();
    const saved: Lead = { ...lead, id: randomUUID(), status: "new", createdAt: new Date().toISOString() };
    await this.write([saved, ...leads]);
    return saved;
  }

  async list() {
    return this.read();
  }

  async setStatus(id: string, status: LeadStatus) {
    const leads = await this.read();
    await this.write(leads.map((l) => (l.id === id ? { ...l, status } : l)));
  }
}

let store: LeadStore | undefined;

export function leadStore(): LeadStore {
  if (!store) {
    const url = process.env.DATABASE_URL;
    store = url ? new PgStore(url) : new FileStore();
  }
  return store;
}
