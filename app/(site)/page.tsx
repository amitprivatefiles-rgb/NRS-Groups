import Link from "next/link";
import { BrandShowcase, CtaBand, FactRow, Marquee, ProjectCard, QuoteBand, SectionHead, StatBand } from "@/components/Blocks";
import { Arrow, VerticalIcon } from "@/components/Icons";
import LeadForm from "@/components/LeadForm";
import Photo from "@/components/Photo";
import { approach, destinations, founder, group, liveBrands, projects, verticals } from "@/lib/content";

export default function Home() {
  const brands = liveBrands();
  const tarapith = projects.find((p) => p.featured)!;
  const pipeline = projects.filter((p) => !p.featured);

  return (
    <>
      {/* ---------- Hero + investor / creator form ---------- */}
      <section className="hero">
        <Photo src="/images/home/hero.jpg" alt="" art="palace" className="hero__bg" priority />
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

      <Marquee />
      <StatBand />

      {/* ---------- Who we are ---------- */}
      <section className="section">
        <div className="container intro">
          <div className="intro__media" data-reveal>
            <Photo src="/images/home/about-1.jpg" alt="NRS Royal Palace, Puri" art="palace" className="intro__img intro__img--a" />
            <Photo src="/images/home/about-2.jpg" alt="Dining at an NRS restaurant" art="glass" className="intro__img intro__img--b" />
            <div className="intro__badge">
              <strong>2014</strong>
              <span>Year founded</span>
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow">Who we are</p>
            <h2>One group, many wings, one standard of service</h2>
            <p className="lead">{group.story[0]}</p>
            <p>{group.story[1]}</p>
            <p>{group.story[2]}</p>
            <div className="sign-row">
              <div>
                <strong>{founder.short}</strong>
                <span>{founder.title}</span>
              </div>
              <Link href="/about" className="btn btn--outline">
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Brand showcase ---------- */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head-row">
            <SectionHead
              eyebrow="Our portfolio"
              title="Hotels and restaurants guests come back to"
              intro="From a sea-facing palace hotel in Puri to Kolkata's favourite restro pub, every NRS brand is run to one standard."
            />
            <Link href="/brands" className="btn btn--outline">
              All brands
            </Link>
          </div>
          <div className="showcases">
            {brands.map((b, i) => (
              <BrandShowcase key={b.slug} brand={b} flip={i % 2 === 1} index={i} />
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
              <Link key={v.key} href={`/businesses/${v.slug}`} className="vertical-card" data-reveal>
                <VerticalIcon kind={v.key} />
                <h3>{v.title}</h3>
                <p>{v.body}</p>
                <p className="vertical-card__co">{v.company}</p>
                <span className="text-link">
                  Learn more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Integrated model ---------- */}
      <section className="section section--dark section--pattern">
        <div className="container">
          <SectionHead
            eyebrow="The NRS model"
            title="We hold the land, build the hotel, and run it"
            intro="An integrated group means one team is accountable from the first brick to the guest's last night."
            light
          />
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

      {/* ---------- Flagship project ---------- */}
      <section className="flagship">
        <Photo src={`/images/projects/${tarapith.slug}/cover.jpg`} alt="Tarapith tower hotel" art="tower" className="flagship__bg" />
        <div className="container flagship__inner">
          <div className="flagship__card" data-reveal>
            <p className="eyebrow">Flagship project · {tarapith.status}</p>
            <h2>{tarapith.name}</h2>
            <p className="feature__loc">{tarapith.location}</p>
            <p>{tarapith.summary}</p>
            <FactRow facts={tarapith.facts} dark />
            <div className="btn-row">
              <Link href="/invest#invest" className="btn btn--gold">
                Invest in Tarapith
              </Link>
              <Link href={`/projects/${tarapith.slug}`} className="btn btn--outline-light">
                Project details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Pipeline ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow="Development pipeline" title="More destinations on the way" />
            <Link href="/projects" className="btn btn--outline">
              All projects
            </Link>
          </div>
          <div className="project-grid">
            {pipeline.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Footprint ---------- */}
      <section className="section section--alt">
        <div className="container footprint">
          <div data-reveal>
            <p className="eyebrow">Our footprint</p>
            <h2>Rooted in the east, growing with its destinations</h2>
            <p className="lead">
              From our head office in Kolkata, NRS Group operates and builds across West Bengal and Odisha, in the cities, temple towns, beaches and forests travellers love.
            </p>
            <Link href="/contact" className="text-link">
              Find us <Arrow />
            </Link>
          </div>
          <ul className="destinations">
            {destinations.map((d) => (
              <li key={d.name} data-reveal>
                <div>
                  <h3>{d.name}</h3>
                  <p className="muted">{d.region}</p>
                </div>
                <p>{d.role}</p>
                <span className={`status status--${d.status === "Operating" ? "live" : "soon"}`}>{d.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Vision / mission ---------- */}
      <section className="section">
        <div className="container pillars pillars--boxed">
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
          </article>
        </div>
      </section>

      {/* ---------- Founder ---------- */}
      <section className="section section--alt">
        <div className="container founder-teaser">
          <div data-reveal>
            <Photo src="/images/founder.jpg" alt={founder.name} art="compass" className="portrait" />
          </div>
          <div data-reveal>
            <p className="eyebrow">Message from the founder</p>
            <blockquote className="quote">&ldquo;{founder.quote}&rdquo;</blockquote>
            <p className="muted">{founder.bio[0]}</p>
            <p className="signature">
              <strong>{founder.name}</strong>
              <span>{founder.title}</span>
            </p>
            <Link href="/founder" className="btn btn--navy">
              The founder&rsquo;s journey
            </Link>
          </div>
        </div>
      </section>

      <QuoteBand quote={group.philosophy} by="The NRS philosophy" role="Since 2014" />

      <CtaBand />
    </>
  );
}
