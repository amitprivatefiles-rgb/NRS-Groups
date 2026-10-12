"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/brands", label: "Our Brands" },
  { href: "/projects", label: "Projects" },
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

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Hospitality · Food & Dining · Real Estate · Leisure</span>
          <span className="topbar__contact">
            <a href="tel:+917044470888">+91 70444 70888</a>
            <a href="mailto:info@nrsgroups.in">info@nrsgroups.in</a>
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
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname.startsWith(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link href="/invest#invest" className="btn btn--gold btn--sm">
            Invest with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
