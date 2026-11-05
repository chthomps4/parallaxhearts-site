import Link from "next/link";
import { socialLinks } from "../lib/seo";
import Arrow from "../components/Arrow";
export default function SupportPage() {
  return (
    <main className="publication-page">
      <header className="editorial-container archive-intro">
        <p className="editorial-label">Support the work</p>
        <h1>
          A listen. A share.
          <br />
          <em>A little encouragement.</em>
        </h1>
        <p className="hero-deck">
          There are many ways to support independent creative work.
        </p>
      </header>
      <section className="parchment-band">
        <div className="editorial-container">
          <div className="prose-columns">
            <div>
              <h2>Start with the work.</h2>
              <p>
                Listen to a song, spend time with a poem, or share a link with
                someone who might enjoy it. The public story archive remains
                open to read.
              </p>
              <Link
                className="text-link"
                href="/graphic-novel/chapter-one/page-001"
              >
                Read the visual novel <Arrow />
              </Link>
            </div>
            <div>
              <h2>Visit Ko-fi.</h2>
              <p>
                Parallax Hearts has an existing Ko-fi page. Check that page
                directly for current support options and the terms of any
                membership or purchase. No tier benefits or recurring charges
                are promised here.
              </p>
              <a
                className="text-link"
                href={socialLinks.koFi}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Ko-fi <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="editorial-container reading-intro">
        <h2>Thank you for being here.</h2>
        <p className="editorial-copy">
          Support is optional. A payment is never required to send a note or
          explore the public work.
        </p>
        <div className="editorial-actions">
          <Link className="text-link" href="/contact">
            Send a note <Arrow />
          </Link>
          <Link className="text-link" href="/shop">
            Shop information <Arrow />
          </Link>
          <Link className="text-link" href="/music">
            Explore the music <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
