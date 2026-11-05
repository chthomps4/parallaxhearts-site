import Link from "next/link";
import Arrow from "./Arrow";

export default function Explorations() {
  return (
    <section
      className="explorations-section"
      aria-labelledby="explorations-heading"
    >
      <div className="editorial-container explorations-layout">
        <div>
          <p className="editorial-label">Explorations</p>
          <h2 id="explorations-heading">
            Patterns,
            <br />
            presence &amp;
            <br />
            <em>possibility.</em>
          </h2>
        </div>
        <div className="exploration-rows">
          <article>
            <h3>Sacred geometry</h3>
            <p>Circles, spirals, and the meeting of mathematics and meaning.</p>
            <Link className="text-link" href="/sacred-geometry">
              Explore the patterns <Arrow />
            </Link>
          </article>
          <article>
            <h3>Energy &amp; healing</h3>
            <p>
              Traditions, quiet practices, and an honest look at the evidence.
            </p>
            <Link className="text-link" href="/energy-healing">
              Read the introduction <Arrow />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
