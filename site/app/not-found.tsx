import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Parallax Hearts",
  description: "The requested Parallax Hearts archive page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="site-shell">
      <section className="not-found-section">
        <div className="site-container not-found-copy">
          <p className="kicker">Archive gap / 404</p>
          <h1 className="not-found-title">
            This page slipped out of the archive.
          </h1>
          <p className="body-copy" style={{ margin: "22px 0 0", maxWidth: "680px" }}>
            The address may be old, mistyped, or no longer part of Vallen&apos;s
            public record. The main story paths are still open.
          </p>
          <div className="not-found-actions">
            <Link className="primary-button" href="/">
              Return home
            </Link>
            <Link
              className="secondary-button"
              href="/graphic-novel/chapter-one/page-001"
            >
              Start the visual novel
            </Link>
            <Link className="secondary-button" href="/music">
              Open the music page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
