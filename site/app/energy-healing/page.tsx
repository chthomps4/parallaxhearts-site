import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import Arrow from "../components/Arrow";

export const metadata: Metadata = buildMetadata({
  title: "Energy & Healing: Practice, Meaning & Evidence | Parallax Hearts",
  description:
    "An educational introduction to energy-healing traditions, personal experience, relaxation, and what scientific evidence can and cannot establish.",
  path: "/energy-healing",
});
const sections = [
  ["language", "What energy means"],
  ["traditions", "Practices & traditions"],
  ["evidence", "What the evidence says"],
  ["attention", "A quiet practice"],
  ["care", "Making informed choices"],
  ["sources", "Further reading"],
];
export default function EnergyHealingPage() {
  return (
    <main className="publication-page prose-page">
      <header className="editorial-container article-heading">
        <p className="editorial-label">Explorations · Energy &amp; healing</p>
        <h1>
          Room for wonder.
          <br />
          <em>Room for questions.</em>
        </h1>
        <p className="hero-deck">
          An introduction to healing traditions, the experience of feeling
          calmer, and the difference between a meaningful ritual and a medical
          claim.
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
            <section id="language">
              <h2>
                One word.
                <br />
                <em>Different meanings.</em>
              </h2>
              <p>
                In physics, energy is a measurable quantity. In everyday speech,
                it can describe vitality, mood, or the atmosphere of a room. In
                healing traditions, it may refer to a spiritual life force or a
                practitioner’s model of balance. Those uses are not
                interchangeable.
              </p>
              <p>
                A person can value an experience of warmth, attention, or
                connection without that experience demonstrating a
                scientifically established energy field. Here, curiosity and
                clear language belong together.
              </p>
            </section>
            <section id="traditions">
              <h2>What people practice.</h2>
              <dl>
                <dt>Reiki</dt>
                <dd>
                  A Japanese-origin practice in which a practitioner places
                  their hands lightly on or near a person’s body, with the
                  intention of supporting healing. The proposed transfer or
                  direction of healing energy is a belief within the practice,
                  not an established physical mechanism.
                </dd>
                <dt>Therapeutic Touch and related approaches</dt>
                <dd>
                  These practices use hands near the body and ideas about a
                  person’s energy field. Despite the name, contact may not be
                  involved. Their claims and methods should be evaluated
                  individually.
                </dd>
                <dt>Sound, stillness, and ritual</dt>
                <dd>
                  Music, comfortable surroundings, quiet attention, and personal
                  rituals may shape an experience. That does not establish that
                  a particular frequency, crystal, geometric shape, or ritual
                  cures a condition.
                </dd>
              </dl>
              <p>
                This is an educational exploration, not an offer of treatment or
                a claim of practitioner certification.
              </p>
            </section>
            <section id="evidence">
              <h2>
                What would count
                <br />
                <em>as evidence?</em>
              </h2>
              <p>
                A testimonial tells us about someone’s experience. A health
                claim needs more: suitable comparison groups, careful
                measurement, enough participants, assessment of harms, and
                results that independent researchers can reproduce.
              </p>
              <p>
                The U.S. National Center for Complementary and Integrative
                Health describes Reiki research as inconsistent and generally
                low quality, and states that Reiki has not been clearly shown
                effective for any health-related purpose. It also notes that
                scientific evidence does not support the existence of the energy
                field proposed in Reiki.
              </p>
              <div className="evidence-note">
                <p>
                  Feeling relaxed does not demonstrate that an illness has been
                  treated. Evidence for relaxation or mindfulness cannot simply
                  be borrowed to validate Reiki, “healing frequencies,” quantum
                  explanations of emotion, or other proposed energy mechanisms.
                </p>
              </div>
              <p>
                Scientific terms such as <em>resonance</em>, <em>frequency</em>,
                and <em>quantum</em> have specific meanings. They can be rich
                poetic metaphors; using them in a metaphor does not establish a
                medical explanation.
              </p>
            </section>
            <section id="attention">
              <h2>
                A small practice
                <br />
                <em>of attention.</em>
              </h2>
              <p>
                If you would like a quiet moment, try this without aiming to
                change or cure anything:
              </p>
              <ol>
                <li>
                  Choose a comfortable place. Keep your eyes open or closed,
                  whichever feels easier.
                </li>
                <li>
                  Notice the support of the chair or ground. Let your breathing
                  stay natural; no breath holding or forced rhythm is needed.
                </li>
                <li>
                  Notice one sound, one point of contact, and one thing you can
                  see.
                </li>
                <li>
                  Stop or turn your attention outward if the exercise feels
                  uncomfortable.
                </li>
              </ol>
              <p>
                This is a simple attention exercise, not an energy treatment.
                Stillness is optional; a short walk or ordinary conversation may
                suit you better.
              </p>
            </section>
            <section id="care">
              <h2>
                Keep your choices
                <br />
                <em>in your own hands.</em>
              </h2>
              <p>
                Before paying for a session, ask what happens, whether touch is
                involved, what the practitioner claims, what training they have,
                and what it costs. Consent includes the right to refuse touch,
                end a session, or decline a proposed explanation.
              </p>
              <p>
                Be cautious about guaranteed cures, pressure to buy repeated
                sessions, or advice to stop prescribed treatment. Energy-healing
                practices should not replace medical assessment, prescribed
                care, or urgent help. Discuss persistent or concerning symptoms
                with a qualified health professional.
              </p>
            </section>
            <section id="sources">
              <h2>Read beyond this page.</h2>
              <ul>
                <li>
                  <a
                    href="https://www.nccih.nih.gov/health/reiki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NCCIH: Reiki
                  </a>{" "}
                  — overview of the practice, research limitations, and proposed
                  mechanism.
                </li>
                <li>
                  <a
                    href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NCCIH: Meditation and Mindfulness
                  </a>{" "}
                  — a separate topic, with its own evidence and safety
                  considerations.
                </li>
              </ul>
              <p>
                These references are for further reading, not endorsements of a
                service. No health information is collected on this site.
              </p>
              <Link className="text-link" href="/sacred-geometry">
                Explore pattern and meaning <Arrow />
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
