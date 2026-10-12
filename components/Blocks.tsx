import Link from "next/link";
import type { ArtKind, Brand, Project } from "@/lib/content";
import { companies, stats } from "@/lib/content";
import { Arrow, External } from "./Icons";
import { Counter } from "./Motion";
import Photo from "./Photo";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
  image,
  art = "skyline",
  tall,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  crumbs?: { href: string; label: string }[];
  image?: string;
  art?: ArtKind;
  tall?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className={`page-hero${tall ? " page-hero--tall" : ""}`}>
      {image && <Photo src={image} alt="" art={art} className="page-hero__bg" priority />}
      <div className="container page-hero__inner">
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
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center,
  light,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <header className={`section-head${center ? " section-head--center" : ""}${light ? " section-head--light" : ""}`} data-reveal>
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

export function StatBand({ dark }: { dark?: boolean }) {
  return (
    <section className={`stats${dark ? " stats--dark" : ""}`} aria-label="NRS Group at a glance">
      <div className="container stats__grid">
        {stats().map((s) => (
          <div key={s.label} className="stat" data-reveal>
            <span className="stat__value">
              <Counter value={s.value} />
            </span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Marquee() {
  const names = [...companies.map((c) => c.name), "NRS Royal Palace", "Bistro Y", "HakkaLand"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...names, ...names].map((n, i) => (
          <span key={i}>
            {n}
            <i>◆</i>
          </span>
        ))}
      </div>
    </div>
  );
}

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="brand-card" data-reveal>
      <Link href={`/brands/${brand.slug}`} className="brand-card__media">
        <Photo src={`/images/brands/${brand.slug}/cover.jpg`} alt={brand.name} art={brand.art} />
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

// Large alternating image/text panel used to present each brand.
export function BrandShowcase({ brand, flip, index }: { brand: Brand; flip?: boolean; index?: number }) {
  return (
    <article className={`showcase${flip ? " showcase--flip" : ""}`}>
      <div className="showcase__media" data-reveal>
        <Photo src={`/images/brands/${brand.slug}/cover.jpg`} alt={brand.name} art={brand.art} />
        {index !== undefined && <span className="showcase__index">0{index + 1}</span>}
      </div>
      <div className="showcase__body" data-reveal>
        <p className="eyebrow">
          {brand.vertical} · {brand.location}
        </p>
        <h3 className="showcase__title">{brand.name}</h3>
        <p className="lead">{brand.summary}</p>
        <ul className="ticks">
          {brand.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <FactRow facts={brand.facts.slice(0, 3)} />
        <div className="btn-row">
          <Link href={`/brands/${brand.slug}`} className="btn btn--navy">
            Discover {brand.name}
          </Link>
          {brand.url && (
            <a href={brand.url} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
              Visit website <External />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className="project-card__media">
        <Photo src={`/images/projects/${project.slug}/cover.jpg`} alt={project.name} art={project.art} />
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
    <article className="project-card project-card--soon" data-reveal>
      {body}
    </article>
  ) : (
    <Link href={`/projects/${project.slug}`} className="project-card" data-reveal>
      {body}
    </Link>
  );
}

export function Gallery({ base, art, labels }: { base: string; art: ArtKind; labels: string[] }) {
  return (
    <div className="gallery">
      {labels.map((l, i) => (
        <figure key={l} className={`gallery__item gallery__item--${i}`} data-reveal>
          <Photo src={`${base}/${i + 1}.jpg`} alt={l} art={art} />
          <figcaption>{l}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function QuoteBand({ quote, by, role }: { quote: string; by: string; role: string }) {
  return (
    <section className="quote-band">
      <div className="container narrow" data-reveal>
        <span className="quote-band__mark" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote>{quote}</blockquote>
        <p className="quote-band__by">
          <strong>{by}</strong>
          <span>{role}</span>
        </p>
      </div>
    </section>
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
    <section className="cta-split">
      <Link href="/invest#invest" className="cta-split__panel cta-split__panel--dark" data-reveal>
        <p className="eyebrow">For investors</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <span className="text-link text-link--light">
          Make an investment enquiry <Arrow />
        </span>
      </Link>
      <Link href="/invest#pitch" className="cta-split__panel cta-split__panel--gold" data-reveal>
        <p className="eyebrow">For founders & creators</p>
        <h2>Have an idea worth building?</h2>
        <p>Pitch a venture in hospitality, food, real estate or leisure to the NRS leadership.</p>
        <span className="text-link">
          Pitch your idea <Arrow />
        </span>
      </Link>
    </section>
  );
}
