import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Art from "@/components/Art";
import { BrandCard, CtaBand, FactRow, PageHero } from "@/components/Blocks";
import { External } from "@/components/Icons";
import { liveBrands } from "@/lib/content";

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
      />

      <section className="section">
        <div className="container detail">
          <div className="detail__main">
            <Art kind={brand.art} className="art--banner" />
            <FactRow facts={brand.facts} />
            {brand.description.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : undefined}>
                {p}
              </p>
            ))}
            <ul className="chips-static">
              {brand.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {brand.sections.map((s) => (
              <div key={s.title} className="detail__section">
                <h2 className="h3">{s.title}</h2>
                <div className="offer-grid">
                  {s.items.map((it) => (
                    <article key={it.name} className="offer">
                      <h3>{it.name}</h3>
                      <p>{it.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
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

      {others.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <header className="section-head">
              <p className="eyebrow">More from NRS Group</p>
              <h2>Other brands</h2>
            </header>
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
