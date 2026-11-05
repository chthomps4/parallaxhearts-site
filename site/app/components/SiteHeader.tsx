"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { mainNavigation } from "../config/navigation";

function HeaderNavigation({ pathname }: { pathname: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const activePath = /^(\/graphic-novel|\/book|\/story)/.test(pathname)
    ? "/project"
    : pathname;
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1101px)");
    const closeAtDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeAtDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeAtDesktop);
    };
  }, [open]);
  function escape(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    }
  }
  const current = (href: string) =>
    activePath === href || activePath.startsWith(`${href}/`);
  return (
    <header className="site-header" aria-label="Primary site header">
      <div className="editorial-container site-header-inner">
        <Link href="/" className="site-brand" aria-label="Parallax Hearts home">
          <span className="brand-orbit" aria-hidden="true" />
          <span className="site-brand-main">Parallax Hearts</span>
        </Link>
        <nav className="site-desktop-nav" aria-label="Primary navigation">
          {mainNavigation.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              className={`site-nav-link${current(href) ? " is-active" : ""}`}
              aria-current={current(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div ref={panelRef} className="site-mobile-nav" onKeyDown={escape}>
          <button
            ref={buttonRef}
            type="button"
            className="site-mobile-menu-button"
            aria-controls="mobile-site-navigation"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
          {open && (
            <nav
              id="mobile-site-navigation"
              className="site-mobile-nav-panel"
              aria-label="Mobile navigation"
            >
              {mainNavigation.map(([label, href], index) => (
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  key={href}
                  href={href}
                  className={`site-mobile-link${current(href) ? " is-active" : ""}`}
                  aria-current={current(href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
export default function SiteHeader({ active }: { active?: string }) {
  const pathname = usePathname();
  // Root layout owns the sole header. Older archive pages retain inert instances.
  if (active) return null;
  return <HeaderNavigation key={pathname} pathname={pathname} />;
}
