import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/Blocks";
import LeadForm from "@/components/LeadForm";
import { contact, investFaq, investReasons, investSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Invest with Us",
  description: "Invest in NRS Group's upcoming hotels at Tarapith and the Sundarban, or pitch your business idea.",
};

export default function InvestPage() {
  return (
    <>
      <PageHero
        eyebrow="Invest with NRS Group"
        title="Partner with us on what we build next"
        intro="We are inviting investors and partners for the Tarapith tower hotel and our upcoming projects. We also welcome business ideas from founders and creators."
        crumbs={[{ href: "/invest", label: "Invest" }]}
      />

      <section className="section">
        <span id="invest" className="anchor" />
        <span id="pitch" className="anchor" />
        <div className="container invest">
          <div>
            <SectionHead eyebrow="Why NRS Group" title="A partner with a track record" />
            <div className="reasons">
              {investReasons.map((r, i) => (
                <article key={r.title} className="reason">
                  <span className="reason__num">0{i + 1}</span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="invest__contact">
              <p>Prefer to talk first?</p>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
          <div className="invest__form">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="The process" title="How investing with us works" center />
          <ol className="steps">
            {investSteps.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title="Common questions" center />
          <div className="faq">
            {investFaq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p className="disclaimer">
            This page invites expressions of interest only and is not an offer or solicitation to buy securities. Every investment is subject to due diligence, a formal written agreement and applicable law.
          </p>
        </div>
      </section>
    </>
  );
}
