import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandShowcase, CtaBand, PageHero, ProjectCard, SectionHead } from "@/components/Blocks";
import { Arrow, VerticalIcon } from "@/components/Icons";
import Photo from "@/components/Photo";
import { companies, liveBrands, projects, verticals } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const v = verticals.find((x) => x.slug === slug);
  return v ? { title: v.title, description: v.body } : {};
}

export default async function VerticalPage({ params }: { params: Params }) {
  const { slug } = await params;
  const v = verticals.find((x) => x.slug === slug);
  if (!v) notFound();

  const brands = liveBrands().filter((b) => v.brandSlugs.includes(b.slug));
  const relatedProjects = v.key === "hospitality" || v.key === "construction" ? projects.filter((p) => !p.comingSoon) : [];
  const groupCompanies = companies.filter((c) => v.company.includes(c.name.replace(" Pvt. Ltd.", "")));
  const others = verticals.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={`Business vertical · ${v.company}`}
        title={v.title}
        intro={v.headline}
        crumbs={[
          { href: "/businesses", label: "Businesses" },
          { href: `/businesses/${v.slug}`, label: v.title },
        ]}
        image={v.image}
        art={v.art}
        tall
      />

      <section className="section">
        <div className="container intro">
          <div data-reveal>
            <VerticalIcon kind={v.key} />
            <p className="eyebrow">Overview</p>
            <h2>{v.headline}</h2>
            {v.long.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : "muted"}>
                {p}
              </p>
            ))}
          </div>
          <div data-reveal>
            <Photo src={v.image.replace(".jpg", "-2.jpg")} alt={v.title} art={v.art} className="tall-photo" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Strengths" title={`What sets NRS ${v.title} apart`} center />
          <div className="values-grid">
            {v.points.map((p, i) => (
              <article key={p.title} className="value-card" data-reveal>
                <span className="value-card__num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {groupCompanies.length > 0 && (
        <section className="section section--dark">
          <div className="container">
            <SectionHead eyebrow="Companies" title={`The companies in ${v.title}`} light />
            <div className="co-cards">
              {groupCompanies.map((c) => (
                <article key={c.name} className="co-card" data-reveal>
                  <span>Since {c.year}</span>
                  <h3>{c.name}</h3>
                  <p>{c.sector}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {brands.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow="Brands" title={`Our ${v.title.toLowerCase()} brands`} />
            <div className="showcases">
              {brands.map((b, i) => (
                <BrandShowcase key={b.slug} brand={b} flip={i % 2 === 1} />
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <SectionHead eyebrow="Projects" title="In development" />
            <div className="project-grid">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Explore further" title="Other NRS businesses" />
          <div className="vertical-grid vertical-grid--5">
            {others.map((o) => (
              <Link key={o.key} href={`/businesses/${o.slug}`} className="vertical-card" data-reveal>
                <VerticalIcon kind={o.key} />
                <h3>{o.title}</h3>
                <span className="text-link">
                  Learn more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
