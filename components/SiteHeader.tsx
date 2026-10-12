"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brands, contact, projects, verticals } from "@/lib/content";

type MenuItem = { href: string; label: string; note?: string };
type Menu = { href: string; label: string; items?: MenuItem[]; intro?: string };

const menus: Menu[] = [
  {
    href: "/about",
    label: "The Group",
    intro: "Since 2014, a group built on quality service.",
    items: [
      { href: "/about", label: "About NRS Group", note: "Story, vision & companies" },
      { href: "/founder", label: "Our Founder", note: "R. P. Verma" },
      { href: "/careers", label: "Careers", note: "Join the NRS family" },
    ],
  },
  {
    href: "/businesses",
    label: "Businesses",
    intro: "Six verticals, one standard.",
    items: verticals.map((v) => ({ href: `/businesses/${v.slug}`, label: v.title, note: v.company.split(" · ")[0] })),
  },
  {
    href: "/brands",
    label: "Our Brands",
    intro: "Hotels and restaurants guests come back to.",
    items: brands.filter((b) => b.confirmed).map((b) => ({ href: `/brands/${b.slug}`, label: b.name, note: b.location })),
  },
  {
    href: "/projects",
    label: "Projects",
    intro: "What we are building next.",
    items: [
      ...projects.filter((p) => !p.comingSoon).map((p) => ({ href: `/projects/${p.slug}`, label: p.name, note: p.status })),
      { href: "/upcoming-plan", label: "Upcoming Plan", note: "The road ahead" },
    ],
  },
  { href: "/invest", label: "Invest" },
  { href: "/contact", label: "Contact" },
];

export function Logo({ footer }: { footer?: boolean }) {
  return (
    <span className={`brand${footer ? " brand--footer" : ""}`}>
      <span className="brand__mark">NRS</span>
      <span className="brand__name">Group</span>
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (m: Menu) =>
    pathname === m.href || pathname.startsWith(m.href + "/") || (m.items?.some((i) => pathname === i.href) ?? false);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Hospitality · Food & Dining · Construction · Real Estate · Leisure</span>
          <span className="topbar__contact">
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </span>
        </div>
      </div>
      <div className="container site-header__inner">
        <Link href="/" aria-label="NRS Group home">
          <Logo />
        </Link>
        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
        <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`} aria-label="Main">
          {menus.map((m) => (
            <div key={m.href} className={`nav-item${m.items ? " has-menu" : ""}`}>
              <Link href={m.href} className="nav-link" aria-current={isActive(m) ? "page" : undefined}>
                {m.label}
                {m.items && (
                  <svg viewBox="0 0 10 6" aria-hidden="true" className="caret">
                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                )}
              </Link>
              {m.items && (
                <div className="mega">
                  <div className="mega__intro">
                    <p className="mega__title">{m.label}</p>
                    <p>{m.intro}</p>
                  </div>
                  <ul className="mega__list">
                    {m.items.map((i) => (
                      <li key={i.href}>
                        <Link href={i.href}>
                          <strong>{i.label}</strong>
                          {i.note && <span>{i.note}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <Link href="/invest#invest" className="btn btn--gold btn--sm nav-cta">
            Invest with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
