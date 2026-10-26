import type { Metadata } from "next";
import { PageHero, QuoteBand, SectionHead, StatBand } from "@/components/Blocks";
import Photo from "@/components/Photo";
import Video from "@/components/Video";
import { existsSync } from "fs";
import path from "path";
import { careers, contact, group } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build your career with NRS Group in hospitality, food & beverage, construction and corporate roles.",
};

export default function CareersPage() {
  const mail = `mailto:${contact.email}?subject=${encodeURIComponent("Career application: NRS Group")}`;
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the NRS family"
        intro={careers.intro}
        crumbs={[{ href: "/careers", label: "Careers" }]}
        image="/images/careers/hero.jpg"
        art="palace"
        tall
      >
        <div className="btn-row">
          <a href={mail} className="btn btn--gold">
            Send your CV
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container intro">
          <div data-reveal>
            <p className="eyebrow">Life at NRS</p>
            <h2>Quality services demand quality people</h2>
            <p className="lead">
              That belief starts with the people we hire. Whether you welcome guests, run a kitchen, manage a site or keep the numbers straight, you are part of one group with one standard.
            </p>
            <p className="muted">{group.team.body}</p>
            <p className="muted">
              As NRS opens new hotels and restaurants, our people grow with it. New properties need experienced hands, and we look inside the group first.
            </p>
          </div>
          <div className="intro__media" data-reveal>
            <Photo src="/images/careers/team-1.jpg" alt="NRS hospitality team" art="palace" className="intro__img intro__img--a" />
            <Photo src="/images/careers/team-2.jpg" alt="NRS kitchen team" art="glass" className="intro__img intro__img--b" />
          </div>
        </div>
      </section>

      {/* Careers video (from Ravi sir): add public/videos/careers.mp4 and it appears here. */}
      {existsSync(path.join(process.cwd(), "public/videos/careers.mp4")) && (
        <section className="section section--alt">
          <div className="container narrow">
            <SectionHead eyebrow="Life at NRS" title="See what it is like to work with us" center />
            <Video src="/videos/careers.mp4" poster="/images/careers/video-poster.jpg" title="Working at NRS Group" />
          </div>
        </section>
      )}

      <StatBand dark />

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Where you could work" title="Career areas" center />
          <div className="values-grid">
            {careers.areas.map((a, i) => (
              <article key={a.title} className="value-card" data-reveal>
                <span className="value-card__num">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Why NRS" title="Why build your career with us" />
          <div className="reasons reasons--grid">
            {careers.why.map((r, i) => (
              <article key={r.title} className="reason" data-reveal>
                <span className="reason__num">0{i + 1}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand quote={group.philosophy} by={group.philosophyBy} role={group.philosophyMeaning} />

      <section className="section">
        <div className="container apply" data-reveal>
          <div>
            <p className="eyebrow">Open applications</p>
            <h2>Don&rsquo;t see a listing? Write to us anyway.</h2>
            <p className="muted">
              Send your CV with the role and location you are interested in. Our HR team reviews every application and will contact you when a suitable position opens.
            </p>
          </div>
          <div className="apply__box">
            <a href={mail} className="btn btn--gold btn--block">
              Email your CV
            </a>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <br />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
