import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/Blocks";
import { founder } from "@/lib/content";

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
      />

      <section className="section">
        <div className="container founder">
          <div className="founder__aside">
            <div className="portrait portrait--lg" aria-hidden="true">
              {/* TODO(meeting): founder photo */}
              <span>RPV</span>
            </div>
            <p className="founder__caption">
              <strong>{founder.short}</strong>
              <span>{founder.title}</span>
            </p>
          </div>
          <div>
            <blockquote className="quote quote--lg">&ldquo;{founder.quote}&rdquo;</blockquote>
            {founder.bio.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : undefined}>
                {p}
              </p>
            ))}
            <h2 className="h3">Guiding principles</h2>
            <ul className="principles">
              {founder.principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">The journey</p>
            <h2>From a single venture to a diversified group</h2>
          </header>
          <ol className="vtimeline">
            {founder.timeline.map((t) => (
              <li key={t.year}>
                <span className="vtimeline__year">{t.year}</span>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Build the next chapter with us" />
    </>
  );
}
