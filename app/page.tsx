import LeadForm from "@/components/LeadForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { businesses, founder, group, otherVerticals, projects, stats } from "@/lib/content";

export default function Home() {
  const live = businesses.filter((b) => b.confirmed);
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <SiteHeader />
      <main>
        {/* ---------- Hero + investor / creator form ---------- */}
        <section className="hero">
          <span id="invest" className="anchor" />
          <span id="pitch" className="anchor" />
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Since 2014 · Kolkata</p>
              <h1>
                Building India&rsquo;s next landmarks in <em>hospitality</em>
              </h1>
              <p className="lead">{group.intro}</p>
              <p className="hero__highlight">
                <strong>Now building:</strong> a tower-style hotel on 20 bighas at Tarapith. We are inviting investors and partners for this project.
              </p>
              <div className="hero__ctas">
                <a href="#projects" className="btn btn--outline-light">
                  See upcoming projects
                </a>
                <a href="#businesses" className="link-light">
                  Our businesses →
                </a>
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

        {/* ---------- About ---------- */}
        <section className="section" id="about">
          <div className="container about__grid">
            <div>
              <p className="eyebrow">About NRS Group</p>
              <h2>One group, many wings, one standard of service</h2>
              {group.story.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div className="values">
              <article className="value">
                <h3>Our Vision</h3>
                <p>{group.vision}</p>
              </article>
              <article className="value">
                <h3>Our Mission</h3>
                <p>{group.mission}</p>
              </article>
              <article className="value value--accent">
                <h3>Our Philosophy</h3>
                <p>&ldquo;{group.philosophy}&rdquo;</p>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- Current businesses ---------- */}
        <section className="section section--alt" id="businesses">
          <div className="container">
            <p className="eyebrow">Current businesses</p>
            <h2>Hotels and restaurants guests come back to</h2>
            <div className="cards">
              {live.map((b) => (
                <article key={b.name} className="biz-card">
                  <div className="biz-card__media" aria-hidden="true">
                    <span>{b.name.split(" ").map((w) => w[0]).join("").slice(0, 3)}</span>
                  </div>
                  <div className="biz-card__body">
                    <p className="tag">{b.vertical}</p>
                    <h3>{b.name}</h3>
                    <p className="biz-card__loc">{b.location}</p>
                    <p>{b.description}</p>
                    <ul className="ticks">
                      {b.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    {b.url && (
                      <a className="btn btn--outline" href={b.url} target="_blank" rel="noopener noreferrer">
                        Visit website ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="verticals">
              {otherVerticals.map((v) => (
                <article key={v.title} className="vertical">
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Upcoming projects & investment ---------- */}
        <section className="section section--dark" id="projects">
          <div className="container">
            <p className="eyebrow">Upcoming projects & investment</p>
            <h2>What we&rsquo;re building next</h2>

            {featured && (
              <article className="featured">
                <div className="featured__media" aria-hidden="true">
                  {/* TODO(meeting): replace with Tarapith renders / construction photos. */}
                  <div className="tower">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span key={i} />
                    ))}
                  </div>
                  <span className="featured__badge">{featured.status}</span>
                </div>
                <div className="featured__body">
                  <p className="tag tag--light">Featured project</p>
                  <h3>{featured.name}</h3>
                  <p className="featured__loc">{featured.location}</p>
                  <p>{featured.description}</p>
                  <ul className="facts">
                    <li>
                      <strong>20</strong> bighas of land
                    </li>
                    <li>
                      <strong>Tower</strong>-style hotel
                    </li>
                    <li>
                      <strong>Now</strong> under construction
                    </li>
                  </ul>
                  <a href="#invest" className="btn btn--gold">
                    Invest in Tarapith
                  </a>
                </div>
              </article>
            )}

            <div className="cards cards--projects">
              {others.map((p) => (
                <article key={p.slug} className={`project-card${p.comingSoon ? " project-card--soon" : ""}`}>
                  <p className="tag tag--light">{p.status}</p>
                  <h3>{p.name}</h3>
                  <p className="project-card__loc">{p.location}</p>
                  <p>{p.description}</p>
                  {!p.comingSoon && (
                    <a href="#invest" className="link-light">
                      Register interest →
                    </a>
                  )}
                </article>
              ))}
            </div>

            <p className="center">
              <a href="/upcoming-plan" className="btn btn--outline-light">
                Upcoming plan by NRS Group
              </a>
            </p>
          </div>
        </section>

        {/* ---------- Founder ---------- */}
        <section className="section" id="founder">
          <div className="container founder__grid">
            <div className="founder__portrait" aria-hidden="true">
              {/* TODO(meeting): founder photo */}
              <span>RPV</span>
            </div>
            <div>
              <p className="eyebrow">Our founder</p>
              <h2>{founder.name}</h2>
              <p className="founder__title">{founder.title}</p>
              <blockquote className="quote">&ldquo;{founder.quote}&rdquo;</blockquote>
              {founder.bio.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="container">
            <ol className="timeline">
              {founder.timeline.map((t) => (
                <li key={t.year}>
                  <span className="timeline__year">{t.year}</span>
                  <span>{t.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Closing CTA ---------- */}
        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <h2>Grow with NRS Group</h2>
              <p>Invest in our upcoming hotels, or bring us an idea worth building.</p>
            </div>
            <div className="cta-band__btns">
              <a href="#invest" className="btn btn--gold">
                I want to invest
              </a>
              <a href="#pitch" className="btn btn--outline-light">
                I have an idea
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
