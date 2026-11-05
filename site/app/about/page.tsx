import Image from "next/image";
import Link from "next/link";
import Arrow from "../components/Arrow";

export default function AboutPage() {
  return (
    <main className="publication-page">
      <header className="editorial-container archive-intro">
        <p className="editorial-label">About Parallax Hearts</p>
        <h1>
          One imagination.
          <br />
          <em>Many forms.</em>
        </h1>
        <p className="hero-deck">
          The creative home of Chad Thompson: poetry, music, writing, and visual
          storytelling.
        </p>
      </header>
      <section className="editorial-container contact-layout">
        <div>
          <p className="editorial-copy">
            Parallax Hearts brings original work together across disciplines. A
            poem can begin with an ordinary moment. A song can lead into a
            story. A geometric pattern can become a way of asking a different
            question.
          </p>
          <p className="editorial-copy">
            <em>Crown of Phases</em> is the featured poetry collection,
            exploring lunar imagery, inner sovereignty, and the patterns we
            notice in human experience. Astrology and other symbolic references
            are creative language, not predictions or claims of scientific
            authority.
          </p>
          <p className="editorial-copy">
            The music and story world of <em>What the Town Keeps</em> remain
            part of that larger home: an album, a visual novel, and a companion
            book in development, all connected to the fictional town of Vallen.
          </p>
          <div className="editorial-actions">
            <Link className="text-link" href="/crown-of-phases">
              Crown of Phases <Arrow />
            </Link>
            <Link className="text-link" href="/music">
              The music <Arrow />
            </Link>
          </div>
        </div>
        <Image
          src="/images/field-notes.jpg"
          alt="Papers, a cup, and writing materials in the atmospheric world of What the Town Keeps."
          width={1536}
          height={1024}
          sizes="(max-width: 800px) 90vw, 45vw"
        />
      </section>
      <section className="parchment-band">
        <div className="editorial-container">
          <p className="editorial-label">Find your way in</p>
          <h2>Follow what catches your attention.</h2>
          <div className="prose-columns">
            <div>
              <h3>Poems &amp; patterns</h3>
              <p>
                Explore Crown of Phases, the poetry archive, and an introduction
                to sacred geometry.
              </p>
              <Link className="text-link" href="/poetry">
                Explore the poetry <Arrow />
              </Link>
            </div>
            <div>
              <h3>Music &amp; story worlds</h3>
              <p>
                Listen to the music, enter Vallen, or start with the first page
                of the visual novel.
              </p>
              <Link
                className="text-link"
                href="/graphic-novel/chapter-one/page-001"
              >
                Start reading <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
