import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SectionHead, StatBand } from "@/components/Blocks";
import { Arrow, VerticalIcon } from "@/components/Icons";
import Photo from "@/components/Photo";
import { approach, numberWord, verticals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Businesses",
  description: "NRS Group's business verticals: hospitality, food & dining, construction, real estate, manufacturing, leisure and business services.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our businesses"
        title={`${numberWord(verticals.length)} verticals, one standard of service`}
        intro="NRS Group works across hospitality, food & dining, construction, real estate, manufacturing, leisure and business services, and each business strengthens the others."
        crumbs={[{ href: "/businesses", label: "Businesses" }]}
        image="/images/businesses/hero.jpg"
        art="skyline"
        tall
      />

      <section className="section">
        <div className="container">
          <div className="vbig">
            {verticals.map((v, i) => (
              <Link key={v.key} href={`/businesses/${v.slug}`} className={`vbig__item${i % 2 ? " vbig__item--flip" : ""}`} data-reveal>
                <Photo src={v.image} alt={v.title} art={v.art} className="vbig__media" />
                <div className="vbig__body">
                  <span className="vbig__num">0{i + 1}</span>
                  <VerticalIcon kind={v.key} />
                  <h2>{v.title}</h2>
                  <p className="vertical-card__co">{v.company}</p>
                  <p className="lead">{v.headline}</p>
                  <p className="muted">{v.body}</p>
                  <span className="text-link">
                    Explore {v.title} <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatBand dark />

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="How it fits together" title="An integrated model" center />
          <ol className="model model--light">
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

      <CtaBand />
    </>
  );
}
