import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#businesses", label: "Businesses" },
  { href: "/#projects", label: "Upcoming" },
  { href: "/#founder", label: "Founder" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="NRS Group home">
          <span className="brand__mark">NRS</span>
          <span className="brand__name">Group</span>
        </Link>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true" />
        <label htmlFor="nav-toggle" className="nav-toggle__btn" aria-label="Open menu">
          <span />
        </label>
        <nav className="site-nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="/#invest" className="btn btn--gold btn--sm">
            Invest with us
          </a>
        </nav>
      </div>
    </header>
  );
}
