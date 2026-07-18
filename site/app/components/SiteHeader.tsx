"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { mainNavigation } from "../config/navigation";

function getActiveLabel(pathname: string) {
  if (pathname === "/") return "Home";
  if (pathname.startsWith("/music")) return "Listen";
  if (pathname.startsWith("/graphic-novel")) return "Read";
  if (pathname.startsWith("/project") || pathname.startsWith("/story")) return "Story";
  if (pathname.startsWith("/support") || pathname.startsWith("/shop")) return "Support";
  if (pathname.startsWith("/about")) return "About";
  if (pathname.startsWith("/contact")) return "Contact";
  return undefined;
}

export default function SiteHeader({ active }: { active?: string }) {
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLabel = getActiveLabel(pathname);

  useEffect(() => {
    if (isMobileMenuOpen) {
      firstMobileLinkRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  // Some older pages still render their own <SiteHeader active="..." /> inside the page.
  // The root layout now owns the global header, so page-level instances return null.
  if (active) return null;

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleMobileMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Escape" || !isMobileMenuOpen) {
      return;
    }

    event.preventDefault();
    closeMobileMenu();
    menuButtonRef.current?.focus();
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
              aria-current={label === activeLabel ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-mobile-nav" onKeyDown={handleMobileMenuKeyDown}>
          <button
            ref={menuButtonRef}
            type="button"
            className="site-mobile-menu-button"
            aria-controls="mobile-site-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>

          {isMobileMenuOpen ? (
            <nav
              id="mobile-site-navigation"
              className="site-mobile-nav-panel"
              aria-label="Mobile navigation"
            >
              {mainNavigation.map(([label, href], index) => (
                <Link
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  key={label}
                  href={href}
                  className={label === activeLabel ? "site-mobile-link is-active" : "site-mobile-link"}
                  aria-current={label === activeLabel ? "page" : undefined}
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
