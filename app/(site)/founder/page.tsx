import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, QuoteBand, SectionHead } from "@/components/Blocks";
import { VerticalIcon } from "@/components/Icons";
import Photo from "@/components/Photo";
import { companies, founder, group, verticals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Founder",
  description: "Mr. Ravinandan Prasad Verma (R. P. Verma), Founder, Chairman & Managing Director of NRS Group.",
};

export default function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Our founder"
        title={founder.name}
        intro={founder.title}
        crumbs={[{ href: "/founder", label: "Founder" }]}
        image="/images/founder-banner.jpg"
        art="compass"
        tall
      />

      {/* Profile */}
      <section className="section">
        <div className="container founder">
          <div className="founder__aside" data-reveal>
            <Photo src="/images/founder.jpg" alt={founder.name} art="compass" className="portrait portrait--lg" />
            <p className="founder__caption">
              <strong>{founder.short}</strong>
              <span>{founder.title}</span>
            </p>
            <dl className="founder__facts">
              <div>
                <dt>Companies founded</dt>
                <dd>{companies.length}</dd>
              </div>
              <div>
                <dt>Business verticals</dt>
                <dd>{verticals.length}</dd>
              </div>
              <div>
                <dt>First venture</dt>
                <dd>2012</dd>
              </div>
            </dl>
          </div>
          <div data-reveal>
            <p className="eyebrow">In his words</p>
            <blockquote className="quote quote--lg">&ldquo;{founder.quote}&rdquo;</blockquote>
            <h2 className="h3">From an ordinary employee to the head of a diversified group</h2>
            {founder.bio.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : "muted"}>
                {p}
              </p>
            ))}
            <h2 className="h3 founder__sub">Guiding principles</h2>
            <ul className="principles">
              {founder.principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <QuoteBand quote={group.philosophy} by={founder.short} role="On building NRS Group" />

      {/* Journey */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="The journey" title="From a single venture to a diversified group" center />
          <ol className="vtimeline">
            {founder.timeline.map((t) => (
              <li key={t.year} data-reveal>
                <span className="vtimeline__year">{t.year}</span>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What he built */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="His legacy so far"
            title="The businesses he built"
            intro="Each vertical began as a single company and grew into a business line of its own."
          />
          <div className="vertical-grid">
            {verticals.map((v) => (
              <Link key={v.key} href={`/businesses/${v.slug}`} className="vertical-card" data-reveal>
                <VerticalIcon kind={v.key} />
                <h3>{v.title}</h3>
                <p className="vertical-card__co">{v.company}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Build the next chapter with us" />
    </>
  );
}
