import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, QuoteBand, SectionHead, StatBand } from "@/components/Blocks";
import { Arrow, VerticalIcon } from "@/components/Icons";
import Photo from "@/components/Photo";
import { approach, companies, founder, group, liveBrands, verticals } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, vision, mission and companies of NRS Group, a Kolkata-based group in hospitality, food & dining, construction, real estate, manufacturing and leisure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NRS Group"
        title="A group built on quality service"
        intro={group.description}
        crumbs={[{ href: "/about", label: "About" }]}
        image="/images/about/hero.jpg"
        art="skyline"
        tall
      />

      {/* Story */}
      <section className="section">
        <div className="container intro">
          <div data-reveal>
            <p className="eyebrow">Our story</p>
            <h2>From a business centre in Salt Lake to hotels across the east</h2>
            {group.story.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : "muted"}>
                {p}
              </p>
            ))}
          </div>
          <div className="intro__media" data-reveal>
            <Photo src="/images/about/story-1.jpg" alt="NRS Group head office, Kolkata" art="skyline" className="intro__img intro__img--a" />
            <Photo src="/images/about/story-2.jpg" alt="NRS Royal Palace, Puri" art="palace" className="intro__img intro__img--b" />
            <div className="intro__badge">
              <strong>{new Date().getFullYear() - 2014}+</strong>
              <span>Years of growth</span>
            </div>
          </div>
        </div>
      </section>

      <StatBand dark />

      {/* Vision, mission, philosophy */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Purpose" title="What drives us" center />
          <div className="pillars pillars--boxed">
            <article data-reveal>
              <p className="eyebrow">Our vision</p>
              <p className="pillar__text">{group.vision}</p>
            </article>
            <article data-reveal>
              <p className="eyebrow">Our mission</p>
              <p className="pillar__text">{group.mission}</p>
            </article>
            <article className="pillar--accent" data-reveal>
              <p className="eyebrow">Our philosophy</p>
              <p className="pillar__text pillar__text--lg">&ldquo;{group.philosophy}&rdquo;</p>
              <p className="pillar__meaning">{group.philosophyMeaning}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="What we stand for" title="Our values" intro="Four ideas guide every NRS business, from the front desk to the construction site." center />
          <div className="values-grid">
            {group.values.map((v, i) => (
              <article key={v.title} className="value-card" data-reveal>
                <span className="value-card__num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Group structure */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Group structure"
            title="How NRS Group is organised"
            intro={`One group leadership, ${verticals.length} business verticals, and the companies and brands within them.`}
            center
          />
          <div className="org" data-reveal>
            <div className="org__root">
              <strong>NRS Group</strong>
              <span>
                {founder.short} · {founder.title}
              </span>
            </div>
            <div className="org__branches">
              {verticals.map((v) => {
                const brandNames = liveBrands()
                  .filter((b) => v.brandSlugs.includes(b.slug))
                  .map((b) => b.name);
                return (
                  <Link key={v.key} href={`/businesses/${v.slug}`} className="org__node">
                    <VerticalIcon kind={v.key} />
                    <strong>{v.title}</strong>
                    <span>{v.company}</span>
                    {brandNames.length > 0 && <em>{brandNames.join(" · ")}</em>}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Integrated model */}
      <section className="section section--dark section--pattern">
        <div className="container">
          <SectionHead eyebrow="The NRS model" title="An integrated group, from land to guest" light />
          <ol className="model">
            {approach.map((a, i) => (
              <li key={a.step} data-reveal>
                <span className="model__num">0{i + 1}</span>
                <span className="model__step">{a.step}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Verticals */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow="Business verticals" title="What we do" />
            <Link href="/businesses" className="btn btn--outline">
              All businesses
            </Link>
          </div>
          <div className="vertical-list">
            {verticals.map((v) => (
              <Link key={v.key} href={`/businesses/${v.slug}`} className="vertical-row" data-reveal>
                <VerticalIcon kind={v.key} />
                <div>
                  <h3>{v.title}</h3>
                  <p className="vertical-card__co">{v.company}</p>
                </div>
                <p>{v.body}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Milestones" title="A decade of steady growth" center />
          <ol className="hline" data-reveal>
            {founder.timeline.slice(1).map((t) => (
              <li key={t.year}>
                <span className="hline__year">{t.year}</span>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Companies */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Group companies" title="The companies behind NRS Group" light />
          <div className="table-wrap" data-reveal>
            <table className="company-table">
              <thead>
                <tr>
                  <th scope="col">Company</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Since</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr key={c.name}>
                    <td>{c.name}</td>
                    <td>{c.sector}</td>
                    <td>{c.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="center">
            <Link href="/founder" className="text-link text-link--light">
              Meet the founder behind the group <Arrow />
            </Link>
          </p>
        </div>
      </section>

      <QuoteBand quote={founder.quote} by={founder.name} role={founder.title} />
      <CtaBand />
    </>
  );
}
