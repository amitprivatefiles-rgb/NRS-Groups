import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandCard, CtaBand, FactRow, Gallery, PageHero, QuoteBand, SectionHead } from "@/components/Blocks";
import { External } from "@/components/Icons";
import Photo from "@/components/Photo";
import { founder, liveBrands } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return liveBrands().map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const brand = liveBrands().find((b) => b.slug === slug);
  return brand ? { title: brand.name, description: brand.summary } : {};
}

export default async function BrandPage({ params }: { params: Params }) {
  const { slug } = await params;
  const brand = liveBrands().find((b) => b.slug === slug);
  if (!brand) notFound();
  const others = liveBrands().filter((b) => b.slug !== slug);
  const base = `/images/brands/${brand.slug}`;
  const mapQuery = encodeURIComponent(`${brand.name}, ${brand.address ?? brand.location}`);

  return (
    <>
      <PageHero
        eyebrow={`${brand.vertical} · ${brand.location}`}
        title={brand.name}
        intro={brand.summary}
        crumbs={[
          { href: "/brands", label: "Our Brands" },
          { href: `/brands/${brand.slug}`, label: brand.name },
        ]}
        image={`${base}/hero.jpg`}
        art={brand.art}
        tall
      >
        <div className="btn-row">
          {brand.url && (
            <a className="btn btn--gold" href={brand.url} target="_blank" rel="noopener noreferrer">
              Visit website <External />
            </a>
          )}
          {brand.phone && (
            <a className="btn btn--outline-light" href={`tel:${brand.phone.replace(/\s/g, "")}`}>
              {brand.vertical === "Hospitality" ? "Call reservations" : "Call"} {brand.phone}
            </a>
          )}
        </div>
      </PageHero>

      <div className="fact-strip">
        <div className="container">
          <FactRow facts={brand.facts} dark />
        </div>
      </div>

      {/* Overview */}
      <section className="section">
        <div className="container detail">
          <div className="detail__main" data-reveal>
            <p className="eyebrow">Overview</p>
            <h2>Welcome to {brand.name}</h2>
            {brand.description.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : "muted"}>
                {p}
              </p>
            ))}
            <ul className="chips-static">
              {brand.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <Photo src={`${base}/cover.jpg`} alt={brand.name} art={brand.art} className="art--banner detail__photo" />
          </div>

          <aside className="detail__aside">
            <div className="info-card">
              <h2 className="h4">Visit {brand.name}</h2>
              <dl>
                {brand.address && (
                  <div>
                    <dt>Address</dt>
                    <dd>{brand.address}</dd>
                  </div>
                )}
                {brand.hours && (
                  <div>
                    <dt>Hours</dt>
                    <dd>{brand.hours}</dd>
                  </div>
                )}
                {brand.phone && (
                  <div>
                    <dt>{brand.vertical === "Hospitality" ? "Reservations" : "Phone"}</dt>
                    <dd>
                      <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
                    </dd>
                  </div>
                )}
                {brand.since && (
                  <div>
                    <dt>Part of NRS since</dt>
                    <dd>{brand.since}</dd>
                  </div>
                )}
              </dl>
              {brand.url && (
                <a className="btn btn--gold btn--block" href={brand.url} target="_blank" rel="noopener noreferrer">
                  Visit website <External />
                </a>
              )}
            </div>
            <div className="info-card info-card--dark">
              <h2 className="h4">Partner with NRS</h2>
              <p>Interested in investing in the next NRS property?</p>
              <Link href="/invest#invest" className="btn btn--outline-light btn--block">
                Investor enquiry
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Offer sections */}
      {brand.sections.map((s, si) => (
        <section key={s.title} className={`section${si % 2 === 0 ? " section--alt" : ""}`}>
          <div className="container">
            <SectionHead eyebrow={brand.name} title={s.title} />
            <div className="offer-cards">
              {s.items.map((it, i) => (
                <article key={it.name} className="offer-card" data-reveal>
                  <Photo src={`${base}/${s.title.toLowerCase().replace(/[^a-z]+/g, "-")}-${i + 1}.jpg`} alt={it.name} art={/dining|menu/i.test(s.title) ? (brand.art === "palace" ? "glass" : brand.art) : brand.art} />
                  <div>
                    <h3>{it.name}</h3>
                    <p>{it.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Gallery */}
      {brand.gallery && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow="Gallery" title={`Inside ${brand.name}`} />
            <Gallery base={`${base}/gallery`} art={brand.art} labels={brand.gallery} />
          </div>
        </section>
      )}

      <QuoteBand quote={founder.quote} by={founder.name} role={founder.title} />

      {/* Location */}
      {brand.address && (
        <section className="section">
          <div className="container location" data-reveal>
            <div>
              <p className="eyebrow">Location</p>
              <h2>Find {brand.name}</h2>
              <p className="lead">{brand.address}</p>
              {brand.hours && <p className="muted">Open {brand.hours}</p>}
              <a href={`https://maps.google.com/?q=${mapQuery}`} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Get directions <External />
              </a>
            </div>
            <iframe
              title={`Map of ${brand.name}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <SectionHead eyebrow="More from NRS Group" title="Other brands" />
            <div className="brand-grid">
              {others.map((b) => (
                <BrandCard key={b.slug} brand={b} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
