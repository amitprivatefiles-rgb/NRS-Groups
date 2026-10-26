import type { Metadata } from "next";
import Link from "next/link";
import { BrandShowcase, CtaBand, PageHero, QuoteBand, SectionHead, StatBand } from "@/components/Blocks";
import { Arrow } from "@/components/Icons";
import { BrandLogo } from "@/components/Photo";
import { group, liveBrands, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Brands",
  description: "NRS Royal Palace, Bistro Y and HakkaLand: the hotels and restaurants of NRS Group.",
};

export default function BrandsPage() {
  const brands = liveBrands();
  const hospitality = brands.filter((b) => b.vertical === "Hospitality");
  const food = brands.filter((b) => b.vertical === "Food & Dining");

  return (
    <>
      <PageHero
        eyebrow="Our brands"
        title="A portfolio of hotels and restaurants"
        intro="Every NRS brand is run to one standard: quality first, from the front desk to the kitchen."
        crumbs={[{ href: "/brands", label: "Our Brands" }]}
        image="/images/brands/hero.jpg"
        art="palace"
        tall
      >
        <ul className="hero-index">
          {brands.map((b) => (
            <li key={b.slug}>
              <Link href={`/brands/${b.slug}`}>
                <BrandLogo slug={b.slug} name={b.name} />
                <span>{b.vertical}</span>
                <strong>{b.name}</strong>
                <em>{b.location}</em>
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Hospitality"
            title="Hotels where the setting is memorable and the service more so"
            intro="Our hotels are in destinations people already love to visit, with rooms, restaurants and event spaces under one roof."
          />
          <div className="showcases">
            {hospitality.map((b, i) => (
              <BrandShowcase key={b.slug} brand={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      <QuoteBand quote={group.philosophy} by="The NRS philosophy" role={group.philosophyMeaning} />

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="Food & Dining"
            title="Restaurants and bars Kolkata keeps coming back to"
            intro="Food is where NRS began. Bistro-Y Foods was founded in 2013, a year before the group's first company."
          />
          <div className="showcases">
            {food.map((b, i) => (
              <BrandShowcase key={b.slug} brand={b} flip={i % 2 === 0} index={hospitality.length + i} />
            ))}
          </div>
        </div>
      </section>

      <StatBand dark />

      <section className="section">
        <div className="container coming" data-reveal>
          <div>
            <p className="eyebrow">Coming to the portfolio</p>
            <h2>New destinations are on the way</h2>
            <p className="lead">
              The Tarapith tower hotel is under construction, and NRS Royal Classic is planned for the Sundarban.
            </p>
          </div>
          <ul className="coming__list">
            {projects
              .filter((p) => !p.comingSoon)
              .map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`}>
                    <strong>{p.name}</strong>
                    <span>
                      {p.location} · {p.status}
                    </span>
                    <Arrow />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
