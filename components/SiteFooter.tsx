import { contact, group } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__grid">
        <div>
          <p className="brand brand--footer">
            <span className="brand__mark">NRS</span>
            <span className="brand__name">Group</span>
          </p>
          <p className="muted">{group.tagline}</p>
          <p className="muted">&ldquo;{group.philosophy}&rdquo;</p>
        </div>
        <div>
          <h3>Head office</h3>
          <address>{contact.address}</address>
        </div>
        <div>
          <h3>Get in touch</h3>
          <p>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="socials">
            {contact.social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="container site-footer__base">
        <span>© {new Date().getFullYear()} NRS Group. All rights reserved.</span>
        <span>NRS Hospitality Pvt. Ltd. · GSTIN 21AAHCN2872F1ZQ</span>
      </div>
    </footer>
  );
}
