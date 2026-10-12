import type { Metadata } from "next";
import Link from "next/link";
import { FactRow, PageHero, SectionHead, StatBand } from "@/components/Blocks";
import { Arrow } from "@/components/Icons";
import LeadForm from "@/components/LeadForm";
import Photo from "@/components/Photo";
import { contact, investFaq, investReasons, investSteps, projects, structures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Invest with Us",
  description: "Invest in NRS Group's upcoming hotels at Tarapith and the Sundarban, or pitch your business idea.",
};

export default function InvestPage() {
  const live = projects.filter((p) => !p.comingSoon);
  return (
    <>
      <PageHero
        eyebrow="Invest with NRS Group"
        title="Partner with us on what we build next"
        intro="We are inviting investors and partners for the Tarapith tower hotel and our upcoming projects. We also welcome business ideas from founders and creators."
        crumbs={[{ href: "/invest", label: "Invest" }]}
        image="/images/invest/hero.jpg"
        art="tower"
        tall
      >
        <div className="btn-row">
          <a href="#enquire" className="btn btn--gold">
            Start your enquiry
          </a>
          <a href="#opportunities" className="btn btn--outline-light">
            View opportunities
          </a>
        </div>
      </PageHero>

      <StatBand />

      {/* Opportunities */}
      <section className="section" id="opportunities">
        <div className="container">
          <SectionHead
            eyebrow="Current opportunities"
            title="Projects open to investors"
            intro="Choose a specific project on the form, or tell us you are open to any NRS opportunity."
          />
          <div className="opps">
            {live.map((p) => (
              <article key={p.slug} className="opp" data-reveal>
                <Photo src={`/images/projects/${p.slug}/cover.jpg`} alt={p.name} art={p.art} className="opp__media" />
                <div className="opp__body">
                  <span className="badge badge--inline">{p.status}</span>
                  <h3>{p.name}</h3>
                  <p className="brand-card__loc">{p.location}</p>
                  <p className="muted">{p.summary}</p>
                  <FactRow facts={p.facts.slice(0, 3)} />
                  <div className="btn-row">
                    <a href="#enquire" className="btn btn--navy">
                      Register interest
                    </a>
                    <Link href={`/projects/${p.slug}`} className="text-link">
                      Project details <Arrow />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why + form */}
      <section className="section section--alt">
        <span id="invest" className="anchor" />
        <span id="pitch" className="anchor" />
        <div className="container invest">
          <div>
            <SectionHead eyebrow="Why NRS Group" title="A partner with a track record" />
            <div className="reasons">
              {investReasons.map((r, i) => (
                <article key={r.title} className="reason" data-reveal>
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

      {/* Structures */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Investment structures"
            title="Flexible ways to participate"
            intro="Every structure is agreed one to one and documented in a formal agreement."
            center
          />
          <div className="structures">
            {structures.map((s, i) => (
              <article key={s.title} className="structure" data-reveal>
                <span className="structure__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--dark section--pattern">
        <div className="container">
          <SectionHead eyebrow="The process" title="How investing with us works" center light />
          <ol className="steps steps--dark">
            {investSteps.map((s, i) => (
              <li key={s.title} className="step" data-reveal>
                <span className="step__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Creators */}
      <section className="section">
        <div className="container intro" data-reveal>
          <Photo src="/images/invest/creators.jpg" alt="" art="compass" className="tall-photo" />
          <div>
            <p className="eyebrow">For founders & creators</p>
            <h2>Have an idea worth building?</h2>
            <p className="lead">
              NRS Group backs good ideas in hospitality, food, real estate and leisure, especially ones that can grow alongside our hotels and restaurants.
            </p>
            <ul className="ticks">
              <li>Share your idea, prototype or running business</li>
              <li>Upload your pitch deck or share a link</li>
              <li>Our leadership reviews every submission</li>
            </ul>
            <a href="#pitch" className="btn btn--navy">
              Pitch your idea
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--alt">
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
