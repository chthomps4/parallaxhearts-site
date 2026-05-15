"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { mainNavigation } from "../config/navigation";

function getActiveLabel(pathname: string) {
  if (pathname === "/") return "Home";
  if (pathname.startsWith("/music")) return "Listen";
  if (pathname.startsWith("/graphic-novel")) return "Read";
  if (pathname.startsWith("/project") || pathname.startsWith("/story")) return "Story";
  if (pathname.startsWith("/field-notes") || pathname.startsWith("/forbidden-knowledge")) return "Field Notes";
  if (
    pathname.startsWith("/websites") ||
    pathname.startsWith("/website-intake") ||
    pathname.startsWith("/website-services") ||
    pathname.startsWith("/website-planning") ||
    pathname.startsWith("/portfolio")
  ) {
    return "Services";
  }
  if (pathname.startsWith("/support") || pathname.startsWith("/shop")) return "Support";
  if (pathname.startsWith("/about")) return "About";
  if (pathname.startsWith("/contact")) return "Contact";
  return undefined;
}

export default function SiteHeader({ active }: { active?: string }) {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  // Some older pages still render their own <SiteHeader active="..." /> inside the page.
  // The root layout now owns the global header, so page-level instances return null.
  if (active) return null;

  // PHYLAX uses its own intentionally darker sub-world navigation.
  // Hiding the global header here prevents the double-navbar bug reported in the audit.
  if (pathname.startsWith("/phylax")) return null;

  const activeLabel = getActiveLabel(pathname);

  function closeMobileMenu() {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }

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
              className={label === activeLabel ? "site-nav-link is-active" : "site-nav-link"}
            >
              {label}
            </Link>
          ))}
        </nav>

        <details className="site-mobile-nav" ref={mobileMenuRef}>
          <summary aria-label="Open navigation menu">Menu</summary>
          <nav className="site-mobile-nav-panel" aria-label="Mobile navigation">
            {mainNavigation.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={label === activeLabel ? "site-mobile-link is-active" : "site-mobile-link"}
                onClick={closeMobileMenu}
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
