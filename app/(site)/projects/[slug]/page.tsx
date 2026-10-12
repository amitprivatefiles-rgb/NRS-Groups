import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Art from "@/components/Art";
import { CtaBand, FactRow, PageHero, ProjectCard } from "@/components/Blocks";
import { projects } from "@/lib/content";

type Params = Promise<{ slug: string }>;

const detailProjects = () => projects.filter((p) => !p.comingSoon);

export function generateStaticParams() {
  return detailProjects().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = detailProjects().find((p) => p.slug === slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = detailProjects().find((p) => p.slug === slug);
  if (!project) notFound();
  const others = projects.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={`${project.status} · ${project.location}`}
        title={project.name}
        intro={project.summary}
        crumbs={[
          { href: "/projects", label: "Projects" },
          { href: `/projects/${project.slug}`, label: project.name },
        ]}
      />

      <section className="section">
        <div className="container detail">
          <div className="detail__main">
            {/* TODO(meeting): replace with renders / construction photos. */}
            <Art kind={project.art} className="art--banner" />
            <FactRow facts={project.facts} />
            {project.description.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : undefined}>
                {p}
              </p>
            ))}

            {project.milestones && (
              <div className="detail__section">
                <h2 className="h3">Progress</h2>
                <ol className="progress">
                  {project.milestones.map((m) => (
                    <li key={m.label} className={`progress__step progress__step--${m.state}`}>
                      <span className="progress__dot" aria-hidden="true" />
                      <span>{m.label}</span>
                      <span className="sr-only">
                        {m.state === "done" ? " (complete)" : m.state === "current" ? " (in progress)" : " (upcoming)"}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <aside className="detail__aside">
            <div className="info-card info-card--dark">
              <h2 className="h4">Invest in {project.name}</h2>
              <p>
                We are inviting individual and corporate investors to partner on this project. Our team will share the full project details and terms in person.
              </p>
              <Link href="/invest#invest" className="btn btn--gold btn--block">
                Register your interest
              </Link>
            </div>
            <div className="info-card">
              <h2 className="h4">At a glance</h2>
              <dl>
                <div>
                  <dt>Location</dt>
                  <dd>{project.location}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
                <div>
                  <dt>Developer</dt>
                  <dd>NRS Group</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Pipeline</p>
            <h2>Other projects</h2>
          </header>
          <div className="project-grid">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
