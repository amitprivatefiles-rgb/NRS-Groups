import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, FactRow, Gallery, PageHero, ProjectCard, SectionHead } from "@/components/Blocks";
import Photo from "@/components/Photo";
import { investFaq, investSteps, projects } from "@/lib/content";

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
  const base = `/images/projects/${project.slug}`;

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
        image={`${base}/hero.jpg`}
        art={project.art}
        tall
      >
        <div className="btn-row">
          <Link href="/invest#invest" className="btn btn--gold">
            Register investor interest
          </Link>
        </div>
      </PageHero>

      <div className="fact-strip">
        <div className="container">
          <FactRow facts={project.facts} dark />
        </div>
      </div>

      <section className="section">
        <div className="container detail">
          <div className="detail__main" data-reveal>
            <p className="eyebrow">The project</p>
            <h2>About {project.name}</h2>
            {project.description.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : "muted"}>
                {p}
              </p>
            ))}
            <Photo src={`${base}/cover.jpg`} alt={project.name} art={project.art} className="art--banner detail__photo" />

            {project.milestones && (
              <div className="detail__section">
                <h2 className="h3">Construction progress</h2>
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
                We are inviting individual and corporate investors to partner on this project. Our team shares the full project details and terms in person.
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

      {project.why && (
        <section className="section section--alt">
          <div className="container">
            <SectionHead eyebrow="Investment rationale" title={`Why ${project.location.split(",")[0]}`} center />
            <div className="values-grid">
              {project.why.map((w, i) => (
                <article key={w.title} className="value-card" data-reveal>
                  <span className="value-card__num">0{i + 1}</span>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={project.milestones ? "Construction glimpse" : "The setting"}
            title={project.milestones ? "On site" : "The landscape"}
            intro="Images are updated as the project progresses."
          />
          <Gallery
            base={`${base}/gallery`}
            art={project.art}
            labels={project.milestones ? ["Site overview", "Structure", "Aerial view", "Progress"] : ["Mangroves", "The river", "The setting", "At dusk"]}
          />
        </div>
      </section>

      <section className="section section--dark section--pattern">
        <div className="container">
          <SectionHead eyebrow="Investing" title="How to take part" light center />
          <ol className="steps steps--dark">
            {investSteps.map((s, i) => (
              <li key={s.title} className="step" data-reveal>
                <span className="step__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="center">
            <Link href="/invest#invest" className="btn btn--gold">
              Start your enquiry
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title="Investor questions" center />
          <div className="faq">
            {investFaq.slice(0, 3).map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Pipeline" title="Other projects" />
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
