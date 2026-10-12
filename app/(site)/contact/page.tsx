import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import { External } from "@/components/Icons";
import { contact, liveBrands } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NRS Group's head office in Salt Lake Sector V, Kolkata.",
};

export default function ContactPage() {
  const brandContacts = liveBrands().filter((b) => b.phone || b.url);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="For investments, partnerships, reservations or general enquiries, our team is here to help."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card">
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
          <article className="contact-card">
            <p className="eyebrow">Call or write</p>
            <p className="contact-card__big">
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
            <p className="contact-card__big">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="muted">{contact.hours}</p>
          </article>
          <article className="contact-card contact-card--dark">
            <p className="eyebrow">Investors & creators</p>
            <p>Use our enquiry form, and our team will respond within two working days.</p>
            <Link href="/invest#invest" className="btn btn--gold">
              Make an enquiry
            </Link>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Our brands</p>
            <h2>Reservations & brand enquiries</h2>
          </header>
          <div className="brand-contacts">
            {brandContacts.map((b) => (
              <article key={b.slug} className="brand-contact">
                <h3>{b.name}</h3>
                <p className="muted">{b.address ?? b.location}</p>
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
