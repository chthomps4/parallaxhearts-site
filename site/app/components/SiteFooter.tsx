import Link from "next/link";
import { footerArchiveLinks, footerMainLinks } from "../config/navigation";
import Arrow from "./Arrow";

export default function SiteFooter() {
  return (
    <footer className="publication-footer">
      <div className="editorial-container">
        <div className="footer-invitation">
          <p>A different way of seeing.</p>
          <Link className="text-link" href="/contact">
            Send a note <Arrow />
          </Link>
        </div>
        <div className="footer-columns">
          <div>
            <Link className="footer-brand" href="/">
              Parallax Hearts
            </Link>
            <p>
              Poetry, music, stories
              <br />
              and visual work.
            </p>
            <small>© {new Date().getFullYear()} Parallax Hearts</small>
          </div>
          <div>
            <h2>Explore</h2>
            {footerMainLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h2>Other work</h2>
            {footerArchiveLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h2>Connect</h2>
            {[
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Shop", "/shop"],
              ["Support", "/support"],
            ].map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
