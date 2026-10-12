import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SectionHead } from "@/components/Blocks";
import { Arrow, VerticalIcon } from "@/components/Icons";
import { companies, group, stats, verticals } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "The story, vision, mission and companies of NRS Group, a Kolkata-based group in hospitality, food & dining, real estate and leisure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NRS Group"
        title="A group built on quality service"
        intro={group.description}
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>From a business centre in Salt Lake to hotels across the east</h2>
          </div>
          <div>
            {group.story.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="stats" aria-label="NRS Group at a glance">
        <div className="container stats__grid">
          {stats().map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container pillars pillars--boxed">
          <article>
            <p className="eyebrow">Our vision</p>
            <p className="pillar__text">{group.vision}</p>
          </article>
          <article>
            <p className="eyebrow">Our mission</p>
            <p className="pillar__text">{group.mission}</p>
          </article>
          <article className="pillar--accent">
            <p className="eyebrow">Our philosophy</p>
            <p className="pillar__text pillar__text--lg">&ldquo;{group.philosophy}&rdquo;</p>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="What we stand for" title="Our values" center />
          <div className="values-grid">
            {group.values.map((v, i) => (
              <article key={v.title} className="value-card">
                <span className="value-card__num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Business verticals" title="What we do" />
          <div className="vertical-list">
            {verticals.map((v) => (
              <article key={v.key} className="vertical-row">
                <VerticalIcon kind={v.key} />
                <div>
                  <h3>{v.title}</h3>
                  <p className="vertical-card__co">{v.company}</p>
                </div>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Group companies" title="The companies behind NRS Group" />
          <div className="table-wrap">
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

      <CtaBand />
    </>
  );
}
