"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import { submitLead, type SubmitState } from "@/app/actions";
import { options } from "@/lib/content";

type Kind = "investor" | "creator";

function Field({
  label,
  name,
  error,
  required,
  children,
  wide,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`field${wide ? " field--wide" : ""}${error ? " field--error" : ""}`}>
      <label htmlFor={`f-${name}`}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p className="field__error" id={`f-${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

function Select({ name, items, required, placeholder = "Select" }: { name: string; items: readonly string[]; required?: boolean; placeholder?: string }) {
  return (
    <select id={`f-${name}`} name={name} required={required} defaultValue="">
      <option value="" disabled={required}>
        {placeholder}
      </option>
      {items.map((i) => (
        <option key={i}>{i}</option>
      ))}
    </select>
  );
}

function SubmitButton({ kind, pending }: { kind: Kind; pending: boolean }) {
  return (
    <button className="btn btn--gold btn--block" type="submit" disabled={pending}>
      {pending ? "Sending…" : kind === "investor" ? "Submit investment enquiry" : "Submit my idea"}
    </button>
  );
}

const initial: SubmitState = { status: "idle" };

export default function LeadForm() {
  const [kind, setKind] = useState<Kind>("investor");
  // Bumped to remount the form with fresh action state (new tab, "send another").
  const [round, setRound] = useState(0);
  const choose = (k: Kind) => {
    setKind(k);
    setRound((r) => r + 1);
  };

  // Lets section CTAs ("Invest in Tarapith", "I have an idea") open the right tab.
  useEffect(() => {
    const onHash = () => {
      if (location.hash === "#invest") choose("investor");
      if (location.hash === "#pitch") choose("creator");
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="lead-card" id="enquire">
      <div className="tabs" role="tablist" aria-label="Enquiry type">
        <button role="tab" type="button" aria-selected={kind === "investor"} className={kind === "investor" ? "active" : ""} onClick={() => choose("investor")}>
          I want to invest
        </button>
        <button role="tab" type="button" aria-selected={kind === "creator"} className={kind === "creator" ? "active" : ""} onClick={() => choose("creator")}>
          I have an idea
        </button>
      </div>
      <EnquiryForm key={`${kind}-${round}`} kind={kind} onAnother={() => setRound((r) => r + 1)} />
    </div>
  );
}

function EnquiryForm({ kind, onAnother }: { kind: Kind; onAnother: () => void }) {
  const [state, action, pending] = useActionState(submitLead, initial);
  const e = state.errors ?? {};

  // Submitting via a transition (not <form action>) so React does not clear the
  // fields when the server returns validation errors.
  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    startTransition(() => action(data));
  };

  return (
    <>
      {state.status === "success" ? (
        <div className="lead-card__success" role="status">
          <p className="lead-card__check" aria-hidden="true">✓</p>
          <p>{state.message}</p>
          <button className="btn btn--outline" type="button" onClick={onAnother}>
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="lead-form">
          <input type="hidden" name="kind" value={kind} />
          <div className="hp" aria-hidden="true">
            <label>
              Company website <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <p className="lead-form__intro">
            {kind === "investor"
              ? "Partner with NRS Group on our upcoming hotels and ventures."
              : "Have a business idea in hospitality, food or leisure? Pitch it to us."}
          </p>

          <div className="grid-2">
            <Field label="Full name" name="name" required error={e.name}>
              <input id="f-name" name="name" required autoComplete="name" maxLength={120} />
            </Field>
            <Field label="Phone" name="phone" required error={e.phone}>
              <input id="f-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91" />
            </Field>
            <Field label="Email" name="email" required={kind === "investor"} error={e.email}>
              <input id="f-email" name="email" type="email" required={kind === "investor"} autoComplete="email" />
            </Field>

            {kind === "investor" ? (
              <>
                <Field label="City" name="city" required error={e.city}>
                  <input id="f-city" name="city" required autoComplete="address-level2" />
                </Field>
                <Field label="Investor type" name="investorType" required error={e.investorType}>
                  <Select name="investorType" items={options.investorType} required />
                </Field>
                <Field label="Investment range" name="amountRange" required error={e.amountRange}>
                  <Select name="amountRange" items={options.amountRange} required />
                </Field>
                <Field label="Preferred project" name="preferredProject" required error={e.preferredProject}>
                  <Select name="preferredProject" items={options.preferredProject} required />
                </Field>
                <Field label="Expected structure" name="structure" error={e.structure}>
                  <Select name="structure" items={options.structure} />
                </Field>
                <Field label="Timeline" name="timeline" error={e.timeline}>
                  <Select name="timeline" items={options.timeline} />
                </Field>
                <fieldset className="field field--wide chips">
                  <legend>Sector interest</legend>
                  {options.sector.map((s) => (
                    <label key={s} className="chip">
                      <input type="checkbox" name="sectors" value={s} /> <span>{s}</span>
                    </label>
                  ))}
                  {e.sectors && <p className="field__error">{e.sectors}</p>}
                </fieldset>
                <Field label="Message" name="message" wide error={e.message}>
                  <textarea id="f-message" name="message" rows={3} maxLength={2000} />
                </Field>
              </>
            ) : (
              <>
                <Field label="Idea title" name="ideaTitle" required error={e.ideaTitle}>
                  <input id="f-ideaTitle" name="ideaTitle" required maxLength={140} />
                </Field>
                <Field label="Sector" name="sector" required error={e.sector}>
                  <Select name="sector" items={options.sector} required />
                </Field>
                <Field label="Stage" name="stage" required error={e.stage}>
                  <Select name="stage" items={options.stage} required />
                </Field>
                <Field label="Funding needed" name="fundingNeeded" error={e.fundingNeeded}>
                  <input id="f-fundingNeeded" name="fundingNeeded" placeholder="e.g. ₹25 lakh" maxLength={80} />
                </Field>
                <Field label="Short pitch" name="pitch" required wide error={e.pitch}>
                  <textarea id="f-pitch" name="pitch" rows={3} required maxLength={2000} />
                </Field>
                <Field label="Deck link" name="deckLink" error={e.deckLink}>
                  <input id="f-deckLink" name="deckLink" type="url" placeholder="https://" />
                </Field>
                <Field label="…or upload deck (max 5 MB)" name="deckFile" error={e.deckFile}>
                  <input id="f-deckFile" name="deckFile" type="file" accept=".pdf,.ppt,.pptx,.key,.doc,.docx" />
                </Field>
              </>
            )}
          </div>

          {state.status === "error" && (
            <p className="lead-form__error" role="alert">
              {state.message}
            </p>
          )}
          <SubmitButton kind={kind} pending={pending} />
          <p className="lead-form__note">We respond within two working days. Your details stay with NRS Group.</p>
        </form>
      )}
    </>
  );
}
