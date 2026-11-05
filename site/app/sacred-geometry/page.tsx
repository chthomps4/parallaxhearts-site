import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import GeometryConstruction from "../components/GeometryConstruction";
import Arrow from "../components/Arrow";

export const metadata: Metadata = buildMetadata({
  title: "Sacred Geometry: Pattern & Meaning | Parallax Hearts",
  description:
    "Explore circles, spirals, symmetry, and the golden ratio. An introduction that distinguishes geometric construction from symbolic meaning.",
  path: "/sacred-geometry",
});
const sections = [
  ["what-it-means", "Pattern & meaning"],
  ["circle-construction", "Build a pattern"],
  ["spirals", "Circles & spirals"],
  ["golden-ratio", "The golden ratio"],
  ["practice", "Try it on paper"],
  ["reading", "Further reading"],
];
export default function SacredGeometryPage() {
  return (
    <main className="publication-page prose-page">
      <header className="editorial-container article-heading">
        <p className="editorial-label">Explorations · Sacred geometry</p>
        <h1>
          The shape of things.
          <br />
          <em>The meaning we make.</em>
        </h1>
        <p className="hero-deck">
          Circles, spirals, symmetry, and proportion. A way to look more closely
          at patterns—and at the stories we give them.
        </p>
      </header>
      <div className="parchment-band">
        <div className="editorial-container article-layout">
          <aside className="article-toc">
            <p>In this exploration</p>
            <nav aria-label="On this page">
              {sections.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
          </aside>
          <div className="article-prose">
            <section id="what-it-means">
              <h2>Two ways of looking.</h2>
              <p>
                “Sacred geometry” is a broad modern label for geometric forms
                given spiritual, religious, or philosophical meaning. Circles,
                repeated polygons, and carefully chosen proportions appear in
                art and architecture across different places and periods. Their
                meanings belong to particular traditions; they do not all share
                one universal interpretation.
              </p>
              <p>
                There are two useful questions:{" "}
                <em>How is the pattern made?</em> and{" "}
                <em>What does it mean to someone?</em> Mathematics can answer
                the first with definitions and construction. The second calls
                for history, context, and personal interpretation.
              </p>
              <div className="evidence-note">
                <p>
                  A pattern can be mathematically precise and personally
                  meaningful without proving that it emits healing energy,
                  determines fate, or has a measurable spiritual power.
                </p>
              </div>
            </section>
            <section id="circle-construction">
              <h2>
                A compass, a circle,
                <br />
                <em>a shared space.</em>
              </h2>
              <p>
                A repeated-circle design begins with a simple constraint: keep
                the radius unchanged. Move the center, draw another circle, and
                let their intersections guide the next marks. Try the three
                steps below.
              </p>
              <GeometryConstruction />
              <p>
                The lens-shaped overlap is often called a <em>vesica piscis</em>
                . Arrangements of six circles around a central circle are also
                used in modern designs called the “Seed of Life.” Those symbolic
                names are not the mathematical explanation: equal radii and
                60-degree spacing produce the geometry.
              </p>
            </section>
            <section id="spirals">
              <h2>
                Returning is not
                <br />
                <em>always repeating.</em>
              </h2>
              <p>
                A circle keeps a fixed distance from its center. A spiral
                changes that distance as it turns. That makes a useful image for
                growth, memory, or revisiting an old question—but those are
                literary meanings we bring to the shape.
              </p>
              <dl>
                <dt>Archimedean spiral</dt>
                <dd>
                  The radius grows by the same amount with each turn. In polar
                  coordinates, one form is <code>r = a + bθ</code>. Its turns
                  have constant radial spacing.
                </dd>
                <dt>Logarithmic spiral</dt>
                <dd>
                  The radius grows by a constant factor over equal angular
                  steps. One form is <code>r = ae^(bθ)</code>. This makes a
                  self-similar spiral as it expands.
                </dd>
              </dl>
              <p>
                Natural forms can resemble these patterns without matching them
                exactly. A shell, a storm, and a galaxy should not be assumed to
                follow the same equation just because they all curve.
              </p>
              <Link className="text-link" href="/poetry">
                Explore poetry and patterns <Arrow />
              </Link>
            </section>
            <section id="golden-ratio">
              <h2>
                A proportion,
                <br />
                <em>not a prescription.</em>
              </h2>
              <p>
                Divide a line into a longer part <code>a</code> and a shorter
                part <code>b</code>. When the ratio of the whole line to the
                longer part equals the ratio of the longer part to the shorter,{" "}
                <code>(a + b) / a = a / b</code>, the shared ratio is{" "}
                <code>φ = (1 + √5) / 2</code>, approximately 1.618.
              </p>
              <p>
                A golden rectangle has that width-to-height ratio. It is one
                compositional tool among many. Not every pleasing artwork, face,
                building, or natural object fits it; an attractive overlay is
                not evidence that a maker intentionally used it.
              </p>
              <p>
                A common diagram made from quarter-circle arcs in Fibonacci
                squares approximates a spiral. It is not exactly the same curve
                as a logarithmic golden spiral. A poetic connection can be
                valuable without making the mathematics less precise.
              </p>
            </section>
            <section id="practice">
              <h2>Leave the construction lines.</h2>
              <ol>
                <li>
                  Draw a circle with a compass. Keep the compass opening fixed.
                </li>
                <li>
                  Place its point anywhere on the circumference and draw a
                  second circle.
                </li>
                <li>
                  Use an intersection as your next center. Continue at the same
                  radius.
                </li>
                <li>
                  Notice what repeats, which spaces meet, and what you choose to
                  emphasize.
                </li>
              </ol>
              <p>
                You do not need to assign a spiritual meaning. Drawing slowly
                can simply be an exercise in attention, a starting point for a
                poem, or an exploration of shape.
              </p>
            </section>
            <section id="reading">
              <h2>Go back to the construction.</h2>
              <p>
                <a
                  href="https://mathcs.clarku.edu/~djoyce/java/elements/bookI/propI1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Euclid’s Elements, Book I, Proposition 1
                </a>{" "}
                shows an equilateral triangle constructed with two equal-radius
                circles.{" "}
                <a
                  href="https://mathcs.clarku.edu/~djoyce/java/elements/bookVI/propVI30.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book VI, Proposition 30
                </a>{" "}
                treats division in extreme and mean ratio, the proportion now
                commonly called the golden ratio.
              </p>
              <p>
                For any spiritual or historical interpretation, look for a
                source specific to the culture, period, and object being
                discussed. Mathematical construction alone cannot authenticate a
                modern origin story.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
