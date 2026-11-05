import Link from "next/link";
import { socialLinks } from "../lib/seo";
import Arrow from "../components/Arrow";
export default function ShopPage() {
  return (
    <main className="publication-page">
      <header className="editorial-container archive-intro">
        <p className="editorial-label">Shop</p>
        <h1>
          Take a little
          <br />
          <em>of the work with you.</em>
        </h1>
        <p className="hero-deck">
          The existing Parallax Hearts Ko-fi page is the place to check current
          offerings.
        </p>
      </header>
      <section className="editorial-container reading-intro">
        <div className="commerce-note">
          <h2>Check the current listing.</h2>
          <p>
            Availability, prices, delivery details, and purchase terms are shown
            on Ko-fi. This website does not take payments. Previous guide prices
            and bundles are not listed here while their current availability is
            being confirmed.
          </p>
          <a
            className="copper-button"
            href={socialLinks.koFi}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Parallax Hearts on Ko-fi <Arrow />
          </a>
        </div>
        <div className="editorial-actions">
          <Link className="text-link" href="/music">
            Listen first <Arrow />
          </Link>
          <Link className="text-link" href="/support">
            Other ways to support <Arrow />
          </Link>
          <Link className="text-link" href="/contact">
            Ask about an item <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
