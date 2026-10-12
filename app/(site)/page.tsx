import Link from "next/link";
import Art from "@/components/Art";
import { BrandCard, CtaBand, FactRow, SectionHead } from "@/components/Blocks";
import { Arrow, VerticalIcon } from "@/components/Icons";
import LeadForm from "@/components/LeadForm";
import { founder, group, liveBrands, projects, stats, verticals } from "@/lib/content";

export default function Home() {
  const brands = liveBrands();
  const tarapith = projects.find((p) => p.featured)!;

  return (
    <>
      {/* ---------- Hero + investor / creator form ---------- */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">NRS Group · Since 2014 · Kolkata</p>
            <h1>
              Building India&rsquo;s next landmarks in <em>hospitality</em>
            </h1>
            <p className="lead">{group.intro}</p>
            <div className="hero__highlight">
              <span className="pulse" aria-hidden="true" />
              <p>
                <strong>Now building:</strong> a tower-style hotel on 20 bighas at Tarapith.{" "}
                <Link href="/projects/tarapith">See the project</Link>
              </p>
            </div>
            <div className="hero__brands">
              <span>Home of</span>
              {brands.map((b) => (
                <Link key={b.slug} href={`/brands/${b.slug}`}>
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* ---------- Stats ---------- */}
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

      {/* ---------- Intro ---------- */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>One group, many wings, one standard of service</h2>
          </div>
          <div>
            <p className="lead">{group.story[0]}</p>
            <p>{group.story[1]}</p>
            <Link href="/about" className="text-link">
              Discover our story <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Brands ---------- */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow="Our brands" title="Hotels and restaurants guests come back to" />
            <Link href="/brands" className="btn btn--outline">
              All brands
            </Link>
          </div>
          <div className="brand-grid">
            {brands.map((b) => (
              <BrandCard key={b.slug} brand={b} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Verticals ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Business verticals"
            title="Six businesses, one group"
            intro="Each NRS company supports the others: the construction arm builds what hospitality runs, and food & dining serves it."
            center
          />
          <div className="vertical-grid">
            {verticals.map((v) => (
              <article key={v.key} className="vertical-card">
                <VerticalIcon kind={v.key} />
                <h3>{v.title}</h3>
                <p>{v.body}</p>
                <p className="vertical-card__co">{v.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured project ---------- */}
      <section className="section section--dark">
        <div className="container">
          <div className="feature">
            <div className="feature__media">
              <Art kind={tarapith.art} />
              <span className="badge">{tarapith.status}</span>
            </div>
            <div className="feature__body">
              <p className="eyebrow">Flagship project</p>
              <h2>{tarapith.name}</h2>
              <p className="feature__loc">{tarapith.location}</p>
              <p>{tarapith.summary}</p>
              <FactRow facts={tarapith.facts.slice(0, 3)} dark />
              <div className="btn-row">
                <Link href="/invest#invest" className="btn btn--gold">
                  Invest in Tarapith
                </Link>
                <Link href="/projects" className="btn btn--outline-light">
                  All projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Vision / mission ---------- */}
      <section className="section">
        <div className="container pillars">
          <article>
            <p className="eyebrow">Vision</p>
            <p className="pillar__text">{group.vision}</p>
          </article>
          <article>
            <p className="eyebrow">Mission</p>
            <p className="pillar__text">{group.mission}</p>
          </article>
          <article>
            <p className="eyebrow">Philosophy</p>
            <p className="pillar__text pillar__text--lg">&ldquo;{group.philosophy}&rdquo;</p>
          </article>
        </div>
      </section>

      {/* ---------- Founder ---------- */}
      <section className="section section--alt">
        <div className="container founder-teaser">
          <div className="portrait" aria-hidden="true">
            {/* TODO(meeting): founder photo */}
            <span>RPV</span>
          </div>
          <div>
            <p className="eyebrow">Message from the founder</p>
            <blockquote className="quote">&ldquo;{founder.quote}&rdquo;</blockquote>
            <p className="signature">
              <strong>{founder.name}</strong>
              <span>{founder.title}</span>
            </p>
            <Link href="/founder" className="text-link">
              Read the founder&rsquo;s journey <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
