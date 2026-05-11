import Link from "next/link";
import { mainNavigation } from "../config/navigation";

export default function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header" aria-label="Primary site header">
      <div className="site-container site-header-inner">
        <Link href="/" className="site-brand" aria-label="Parallax Hearts home">
          <span className="site-brand-main">Parallax Hearts</span>
          <span className="site-brand-sub">What the Town Keeps</span>
        </Link>

        <nav className="site-desktop-nav" aria-label="Primary navigation">
          {mainNavigation.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={label === active ? "site-nav-link is-active" : "site-nav-link"}
            >
              {label}
            </Link>
          ))}
        </nav>

        <details className="site-mobile-nav">
          <summary aria-label="Open navigation menu">Menu</summary>
          <nav className="site-mobile-nav-panel" aria-label="Mobile navigation">
            {mainNavigation.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={label === active ? "site-mobile-link is-active" : "site-mobile-link"}
              >
                {label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
