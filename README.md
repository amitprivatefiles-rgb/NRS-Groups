# NRS Group website

Group website for NRS Group (Kolkata): hospitality, food & dining, real estate, construction and leisure.
Built with Next.js 15 (App Router) and plain CSS.

## What's on the site

| Section | Where |
|---|---|
| Hero with **Investor / Creator** enquiry form | `app/page.tsx`, `components/LeadForm.tsx` |
| About: story, vision, mission, philosophy, key numbers | `app/page.tsx` |
| Current businesses with "Visit website" links | `app/page.tsx` |
| Upcoming projects (Tarapith featured, Sundarban, Coming Soon) | `app/page.tsx` |
| Founder: R. P. Verma, quote and timeline | `app/page.tsx` |
| Blank "Upcoming plan by NRS Group" page | `app/upcoming-plan/page.tsx` |
| Lead list (CRM) with status new / contacted / meeting / closed | `/admin` → `app/admin/` |

**All copy and facts live in `lib/content.ts`.** Items still awaiting client confirmation are marked
`confirmed: false` (hidden from the site) or `TODO(meeting)`. Edit that file after the meeting.

## How leads work

1. A visitor submits the investor or creator form (server action in `app/actions.ts`).
2. Fields are validated on the server (`lib/leads.ts`).
3. The lead is saved to **Postgres** (`DATABASE_URL`). Without it, leads go to `data/leads.json`, which is for local dev only.
4. An email titled *"New investor / creator enquiry from NRS website"* goes to `LEAD_NOTIFY_TO` over SMTP.
   An uploaded pitch deck (max 5 MB) is attached to that email. If email fails, the lead is still saved.
5. The team signs in at `/admin` with `ADMIN_PASSWORD` to see, filter and update leads.

## Running locally

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run typecheck`.

## Deploying

Any Node host works (Vercel is the simplest). Set the env vars from `.env.example`:

- `DATABASE_URL`: a hosted Postgres such as Neon, Supabase or Vercel Postgres. The `leads` table is created automatically.
- `SMTP_*`, `LEAD_NOTIFY_TO`, `LEAD_NOTIFY_FROM`: any SMTP provider (Google Workspace, Zoho, Brevo, SES…).
- `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`.

The domain is still to be decided (renew `nrsgroups.in` or use a new one).

## Still needed from the client

Logo (vector), founder photo, property photos, Tarapith renders or construction photos, confirmation of the
head-office address, which hotels are still NRS properties, and investor terms to publish.
See `lib/content.ts` for every `TODO(meeting)`.
