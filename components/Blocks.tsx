import Link from "next/link";
import type { Brand, Project } from "@/lib/content";
import Art from "./Art";
import { Arrow } from "./Icons";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  crumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.href}>
              <span aria-hidden="true"> / </span>
              <Link href={c.href}>{c.label}</Link>
            </span>
          ))}
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <header className={`section-head${center ? " section-head--center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </header>
  );
}

export function FactRow({ facts, dark }: { facts: { value: string; label: string }[]; dark?: boolean }) {
  return (
    <dl className={`fact-row${dark ? " fact-row--dark" : ""}`}>
      {facts.map((f) => (
        <div key={f.label}>
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="brand-card">
      <Link href={`/brands/${brand.slug}`} className="brand-card__media">
        <Art kind={brand.art} />
        <span className="brand-card__vertical">{brand.vertical}</span>
      </Link>
      <div className="brand-card__body">
        <p className="brand-card__loc">{brand.location}</p>
        <h3>
          <Link href={`/brands/${brand.slug}`}>{brand.name}</Link>
        </h3>
        <p>{brand.summary}</p>
        <Link href={`/brands/${brand.slug}`} className="text-link">
          Explore {brand.name} <Arrow />
        </Link>
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className="project-card__media">
        <Art kind={project.art} />
        <span className="badge">{project.status}</span>
      </div>
      <div className="project-card__body">
        <p className="brand-card__loc">{project.location}</p>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        {!project.comingSoon && (
          <span className="text-link">
            View project <Arrow />
          </span>
        )}
      </div>
    </>
  );
  return project.comingSoon ? (
    <article className="project-card project-card--soon">{body}</article>
  ) : (
    <Link href={`/projects/${project.slug}`} className="project-card">
      {body}
    </Link>
  );
}

export function CtaBand({
  title = "Grow with NRS Group",
  body = "Invest in our upcoming hotels, or bring us an idea worth building.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="cta-band__btns">
          <Link href="/invest#invest" className="btn btn--navy">
            I want to invest
          </Link>
          <Link href="/invest#pitch" className="btn btn--outline-navy">
            I have an idea
          </Link>
        </div>
      </div>
    </section>
  );
}
