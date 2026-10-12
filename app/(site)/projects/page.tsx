import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, FactRow, PageHero, ProjectCard, SectionHead } from "@/components/Blocks";
import { Arrow } from "@/components/Icons";
import Photo from "@/components/Photo";
import { approach, destinations, investReasons, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Upcoming NRS Group projects: the Tarapith tower hotel, NRS Royal Classic in the Sundarban and more.",
};

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <PageHero
        eyebrow="Upcoming projects & investment"
        title="What we're building next"
        intro="New hotels and resorts in destinations where travellers already go, built by our own construction arm and run by our own hospitality team."
        crumbs={[{ href: "/projects", label: "Projects" }]}
        image="/images/projects/hero.jpg"
        art="tower"
        tall
      />

      {/* Featured */}
      <section className="flagship">
        <Photo src={`/images/projects/${featured.slug}/cover.jpg`} alt={featured.name} art={featured.art} className="flagship__bg" />
        <div className="container flagship__inner">
          <div className="flagship__card" data-reveal>
            <p className="eyebrow">Featured project · {featured.status}</p>
            <h2>{featured.name}</h2>
            <p className="feature__loc">{featured.location}</p>
            <p>{featured.summary}</p>
            <FactRow facts={featured.facts} dark />
            <div className="btn-row">
              <Link href={`/projects/${featured.slug}`} className="btn btn--gold">
                Explore the project
              </Link>
              <Link href="/invest#invest" className="btn btn--outline-light">
                Invest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline table */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Development pipeline" title="Where NRS is going" intro="Operating destinations and the projects now in development." />
          <div className="pipeline" data-reveal>
            {destinations.map((d) => (
              <div key={d.name} className="pipeline__row">
                <strong>{d.name}</strong>
                <span>{d.region}</span>
                <span>{d.role}</span>
                <span className={`status status--${d.status === "Operating" ? "live" : "soon"}`}>{d.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Projects" title="More destinations on the way" />
          <div className="project-grid">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <p className="center">
            <Link href="/upcoming-plan" className="btn btn--outline">
              Upcoming plan by NRS Group
            </Link>
          </p>
        </div>
      </section>

      {/* How we develop */}
      <section className="section section--dark section--pattern">
        <div className="container">
          <SectionHead eyebrow="How we develop" title="From land to the guest's first night" light />
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

      {/* Why invest */}
      <section className="section">
        <div className="container intro">
          <div data-reveal>
            <p className="eyebrow">Why invest with NRS</p>
            <h2>A partner with a track record</h2>
            <p className="lead">We are inviting individual and corporate investors to grow with our next hotels.</p>
            <Link href="/invest" className="text-link">
              How investing works <Arrow />
            </Link>
          </div>
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
        </div>
      </section>

      <CtaBand title="Invest in what we build next" body="Register your interest in Tarapith, Sundarban or any upcoming NRS project." />
    </>
  );
}
