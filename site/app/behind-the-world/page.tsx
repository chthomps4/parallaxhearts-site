import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behind the World | Parallax Hearts",
  description:
    "How Vallen became a place — the origin of the town, the music, and the story world behind What the Town Keeps by Parallax Hearts.",
  keywords: [
    "Behind the World",
    "Vallen",
    "What the Town Keeps",
    "Parallax Hearts",
    "origin story",
    "Elias Vale",
    "indie music",
    "cinematic storytelling",
    "graphic novel",
    "progressive acoustic alternative",
  ],
  openGraph: {
    title: "Behind the World | Parallax Hearts",
    description:
      "How Vallen became a place — the origin of the town, the music, and the story world behind What the Town Keeps.",
    images: [{ url: "/images/btw-hero.jpg", width: 1536, height: 1024 }],
  },
};

export default function BehindTheWorldPage() {
  return (
    <main className="site-shell">
      {/* ─── Hero ─── */}
      <section style={{ padding: "0 0 34px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "38px",
              minHeight: "72vh",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Image
              src="/images/btw-hero.jpg"
              alt="A rain-soaked small-town street at dusk — porch lights glowing, a figure walking away into fog"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 1180px"
              style={{
                objectFit: "cover",
                objectPosition: "center 40%",
                filter: "saturate(0.78) contrast(1.06)",
              }}
            />

            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(4,5,6,0.04) 0%, rgba(4,5,6,0.42) 40%, rgba(4,5,6,0.96) 100%), radial-gradient(circle at 22% 22%, rgba(210,181,139,0.18), transparent 28%)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "920px",
                padding: "clamp(30px, 6vw, 64px)",
              }}
            >
              <p className="kicker">Behind the World</p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(46px, 8.5vw, 96px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.07em",
                  fontWeight: 400,
                  textShadow: "0 16px 48px rgba(0,0,0,0.62)",
                }}
              >
                How Vallen became a place.
              </h1>

              <p
                style={{
                  margin: "22px 0 0",
                  maxWidth: "760px",
                  color: "var(--paper)",
                  fontSize: "clamp(19px, 2.8vw, 27px)",
                  lineHeight: 1.38,
                }}
              >
                A note on where the music, the story, and the town came from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 1: The Feeling ─── */}
      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(28px, 5.5vw, 52px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
              gap: "32px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">The feeling</p>

              <h2 className="section-title" style={{ maxWidth: "680px" }}>
                It started as a feeling I couldn&rsquo;t get rid of.
              </h2>

              <p className="body-copy" style={{ margin: "22px 0 0" }}>
                There was this image that kept coming back &mdash; a house at
                the end of an inspection, the way a room looks after everyone
                has left but before the lights go off. A kitchen counter with a
                coffee ring. A window where the rain hasn&rsquo;t stopped in
                what feels like weeks. Not dramatic. Not haunted. Just&hellip;
                heavy with something no one ever named out loud.
              </p>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                I was writing songs and kept noticing they all seemed to take
                place in the same weather. The same light. As if every lyric I
                put down was walking the same wet street, passing the same rail
                crossing, looking at the same row of houses where something had
                gone unrepaired for a long time &mdash; not the roof, not the
                foundation. Something else.
              </p>

              <p
                className="body-copy"
                style={{
                  margin: "18px 0 0",
                  fontStyle: "italic",
                  color: "var(--gold)",
                }}
              >
                So I stopped pretending these were separate songs and started
                asking: what if they all come from the same place?
              </p>
            </div>

            <div
              style={{
                overflow: "hidden",
                borderRadius: "24px",
                alignSelf: "stretch",
              }}
            >
              <Image
                src="/images/btw-kitchen.jpg"
                alt="Empty kitchen after an inspection — coffee ring on counter, clipboard, rain on the window"
                width={800}
                height={800}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  minHeight: "340px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Vallen Appeared ─── */}
      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(28px, 5.5vw, 52px)",
              display: "grid",
              gridTemplateColumns: "minmax(280px, 0.8fr) minmax(0, 1.2fr)",
              gap: "32px",
              alignItems: "start",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                borderRadius: "24px",
                alignSelf: "stretch",
              }}
            >
              <Image
                src="/images/btw-station.jpg"
                alt="Empty train station platform at dusk — wet bench, rail lines disappearing into fog"
                width={800}
                height={800}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  minHeight: "340px",
                }}
              />
            </div>

            <div>
              <p className="kicker">The town</p>

              <h2 className="section-title" style={{ maxWidth: "680px" }}>
                That&rsquo;s when Vallen appeared.
              </h2>

              <p className="body-copy" style={{ margin: "22px 0 0" }}>
                Not all at once. A porch light here. A station platform there. A
                quick stop on a county road where the fluorescent light buzzes
                and the cashier doesn&rsquo;t look up. Streets that are always a
                little too empty at dusk. The kind of town where people say
                &ldquo;it&rsquo;s quiet&rdquo; and mean something more
                complicated than quiet.
              </p>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                I gave the town a home inspector &mdash; Elias Vale &mdash;
                because I needed someone whose job is to look closely. Someone
                trained to measure, to note damage, to check what&rsquo;s behind
                walls. And then I needed Vallen to slowly teach him that some
                things can&rsquo;t be measured. That the most important
                structural damage in a person&rsquo;s life doesn&rsquo;t show up
                on a report.
              </p>

              <p
                className="body-copy"
                style={{
                  margin: "18px 0 0",
                  fontStyle: "italic",
                  color: "var(--gold)",
                }}
              >
                The album is the soundtrack to that realization. Every song is a
                room Elias walks through. Every lyric is a note he almost wrote
                down but couldn&rsquo;t explain in professional terms. The music
                is what the inspection missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: A Town That Remembers ─── */}
      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "34px",
              minHeight: "52vh",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Image
              src="/images/btw-window.jpg"
              alt="Rain-streaked window with a ghostly reflection looking out at warm town lights at night"
              fill
              sizes="(max-width: 980px) 100vw, 1180px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                filter: "saturate(0.74) contrast(1.04)",
              }}
            />

            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(4,5,6,0.08) 0%, rgba(4,5,6,0.58) 50%, rgba(4,5,6,0.96) 100%)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "820px",
                padding: "clamp(30px, 6vw, 58px)",
              }}
            >
              <p className="kicker">Is Vallen real?</p>

              <h2
                className="section-title"
                style={{
                  textShadow: "0 12px 40px rgba(0,0,0,0.52)",
                }}
              >
                It&rsquo;s real in the way that matters.
              </h2>

              <p className="body-copy" style={{ margin: "22px 0 0" }}>
                It&rsquo;s every town where people stayed too long or left too
                early. Where the houses hold more than the owners admit. Where
                the weather never quite clears and the conversations that needed
                to happen didn&rsquo;t &mdash; not because anyone was cruel, but
                because the words were too heavy to carry across the kitchen.
              </p>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The graphic novel, the visuals, the music &mdash; they all live
                in the same rain. That&rsquo;s the part I&rsquo;m most careful
                about. Everything has to feel like it belongs to the same place.
                The same dusk. The same distance between people who once stood
                closer.
              </p>

              <p
                className="body-copy"
                style={{
                  margin: "18px 0 0",
                  fontStyle: "italic",
                  color: "var(--gold)",
                }}
              >
                I&rsquo;m not building a universe. I&rsquo;m describing a town I
                keep returning to every time I sit down to write. And every time
                I go back, it has a little more to show me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA / Explore ─── */}
      <section style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(28px, 5.5vw, 52px)",
              textAlign: "center",
            }}
          >
            <p className="kicker">Enter the world</p>

            <h2 className="section-title">
              The music, the story, and the town all connect.
            </h2>

            <p
              className="body-copy"
              style={{
                margin: "20px auto 0",
                maxWidth: "720px",
              }}
            >
              <em>What the Town Keeps</em> is part album, part story archive,
              part graphic novel. Rain-soaked songs from a town that remembers
              what people leave behind.
            </p>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <Link href="/music" className="primary-button">
                Listen to the Album
              </Link>

              <Link href="/graphic-novel/chapter-one/page-001" className="secondary-button">
                Read the Visual Novel
              </Link>

              <Link href="/story" className="secondary-button">
                Explore Vallen
              </Link>

              <Link href="/support" className="secondary-button">
                Support the Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section .glass-panel[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
