import type { Metadata } from "next";
import Link from "next/link";
import Art from "@/components/Art";
import { CtaBand, FactRow, PageHero, ProjectCard, SectionHead } from "@/components/Blocks";
import { Arrow } from "@/components/Icons";
import { projects } from "@/lib/content";

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
      />

      <section className="section">
        <div className="container">
          <Link href={`/projects/${featured.slug}`} className="feature feature--light">
            <div className="feature__media">
              <Art kind={featured.art} />
              <span className="badge">{featured.status}</span>
            </div>
            <div className="feature__body">
              <p className="eyebrow">Featured project</p>
              <h2>{featured.name}</h2>
              <p className="feature__loc">{featured.location}</p>
              <p>{featured.summary}</p>
              <FactRow facts={featured.facts.slice(0, 3)} />
              <span className="text-link">
                Explore the project <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Pipeline" title="More destinations on the way" />
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

      <CtaBand title="Invest in what we build next" body="Register your interest in Tarapith, Sundarban or any upcoming NRS project." />
    </>
  );
}
