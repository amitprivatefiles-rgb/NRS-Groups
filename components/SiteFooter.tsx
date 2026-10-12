import Link from "next/link";
import { contact, group, liveBrands, projects } from "@/lib/content";
import { Logo } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__about">
          <Logo footer />
          <p>{group.intro}</p>
          <p className="site-footer__motto">&ldquo;{group.philosophy}&rdquo;</p>
          <p className="socials">
            {contact.social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </p>
        </div>
        <div>
          <h3>The Group</h3>
          <ul>
            <li><Link href="/about">About NRS Group</Link></li>
            <li><Link href="/founder">Our Founder</Link></li>
            <li><Link href="/businesses">Our Businesses</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/invest">Invest with Us</Link></li>
            <li><Link href="/upcoming-plan">Upcoming Plan</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Our Brands</h3>
          <ul>
            {liveBrands().map((b) => (
              <li key={b.slug}>
                <Link href={`/brands/${b.slug}`}>{b.name}</Link>
              </li>
            ))}
          </ul>
          <h3 className="site-footer__sub">Projects</h3>
          <ul>
            {projects
              .filter((p) => !p.comingSoon)
              .map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3>Head Office</h3>
          <address>
            {contact.addressLines.map((l) => (
              <span key={l}>
                {l}
                <br />
              </span>
            ))}
          </address>
          <p>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <br />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </div>
      <div className="container site-footer__base">
        <span>© {new Date().getFullYear()} NRS Group. All rights reserved.</span>
        <span>{group.legalLine}</span>
      </div>
    </footer>
  );
}
