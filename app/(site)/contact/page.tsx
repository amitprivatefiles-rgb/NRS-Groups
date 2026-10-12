import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHead } from "@/components/Blocks";
import { Arrow, External } from "@/components/Icons";
import { contact, liveBrands } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NRS Group's head office in Salt Lake Sector V, Kolkata.",
};

const routes = [
  { title: "Investors", body: "Invest in Tarapith, Sundarban or any NRS project.", href: "/invest#invest", cta: "Investor enquiry" },
  { title: "Founders & creators", body: "Pitch a business idea to the NRS leadership.", href: "/invest#pitch", cta: "Pitch your idea" },
  { title: "Careers", body: "Hotel, F&B, construction and corporate roles.", href: "/careers", cta: "Join us" },
  { title: "Reservations", body: "Book a stay or a table at an NRS brand.", href: "#brands", cta: "Brand contacts" },
];

export default function ContactPage() {
  const brandContacts = liveBrands().filter((b) => b.phone || b.url);
  const q = encodeURIComponent(contact.addressLines.join(", "));

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="For investments, partnerships, reservations or general enquiries, our team is here to help."
        crumbs={[{ href: "/contact", label: "Contact" }]}
        image="/images/contact/hero.jpg"
        art="skyline"
      />

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card" data-reveal>
            <p className="eyebrow">Head office</p>
            <address>
              {contact.addressLines.map((l) => (
                <span key={l}>
                  {l}
                  <br />
                </span>
              ))}
            </address>
            <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              Open in Google Maps <External />
            </a>
          </article>
          <article className="contact-card" data-reveal>
            <p className="eyebrow">Call or write</p>
            <p className="contact-card__big">
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
            <p className="contact-card__big">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="muted">{contact.hours}</p>
          </article>
          <article className="contact-card contact-card--dark" data-reveal>
            <p className="eyebrow">Investors & creators</p>
            <p>Use our enquiry form, and our team will respond within two working days.</p>
            <Link href="/invest#invest" className="btn btn--gold">
              Make an enquiry
            </Link>
          </article>
        </div>
      </section>

      <section className="map-band">
        <iframe title="Map of NRS Group head office" src={`https://www.google.com/maps?q=${q}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How can we help?" title="Reach the right team" center />
          <div className="routes">
            {routes.map((r) => (
              <Link key={r.title} href={r.href} className="route" data-reveal>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <span className="text-link">
                  {r.cta} <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="brands">
        <div className="container">
          <SectionHead eyebrow="Our brands" title="Reservations & brand enquiries" />
          <div className="brand-contacts">
            {brandContacts.map((b) => (
              <article key={b.slug} className="brand-contact" data-reveal>
                <p className="brand-card__loc">{b.vertical}</p>
                <h3>{b.name}</h3>
                <p className="muted">{b.address ?? b.location}</p>
                {b.hours && <p className="muted">{b.hours}</p>}
                {b.phone && (
                  <p>
                    <a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a>
                  </p>
                )}
                {b.url && (
                  <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-link">
                    Website <External />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center-block">
          <p className="eyebrow">Follow NRS Group</p>
          <p className="socials socials--lg">
            {contact.social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
