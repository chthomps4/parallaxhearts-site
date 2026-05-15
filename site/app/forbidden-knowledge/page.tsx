import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl } from "../lib/seo";

const freeIntroCourseUrl =
  "https://www.skool.com/forbidden-knowledge-3060/classroom/64b17ccf?md=20063ee25dcf452f98717008a96ff36f";

const fkPageUrl = absoluteUrl("/forbidden-knowledge");

export const metadata: Metadata = {
  title: "Forbidden Knowledge | Free Intro Course",
  description:
    "Start the free Forbidden Knowledge intro course: source trails, evidence labels, ancient knowledge, and the 5-Level Rabbit Hole Method.",
  alternates: {
    canonical: fkPageUrl,
  },
  openGraph: {
    title: "Forbidden Knowledge | Free Intro Course",
    description:
      "Start the free Forbidden Knowledge intro course: source trails, evidence labels, ancient knowledge, and the 5-Level Rabbit Hole Method.",
    url: fkPageUrl,
    siteName: "Parallax Hearts",
    images: [{ url: absoluteUrl("/images/forbidden-knowledge.jpg"), width: 1200, height: 630, alt: "Forbidden Knowledge" }],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Forbidden Knowledge",
    "Forbidden Knowledge free course",
    "Forbidden Knowledge Circle",
    "ancient knowledge course",
    "lost etymology",
    "source trails",
    "evidence labels",
    "5-Level Rabbit Hole Method",
    "The Forbidden Knowledge Bible",
    "The Handbook",
  ],
};

const learnItems = [
  "How to follow a source trail",
  "How to separate evidence from speculation",
  "How to use the 5-Level Rabbit Hole Method",
  "How to read symbolic material without overclaiming",
  "How to build your own research archive",
];

const pathItems = [
  {
    title: "Free Intro Course",
    text: "Start here. Learn the method before going deeper.",
  },
  {
    title: "Forbidden Knowledge Circle",
    text: "The public community lane for source-conscious exploration.",
  },
  {
    title: "Inner Archive",
    text: "The deeper lane for templates, packets, prompts, and guided research as it develops.",
  },
  {
    title: "The Handbook",
    text: "The long-form codex: source trails, evidence methods, symbolic interpretation, and durable knowledge.",
  },
];

export default function ForbiddenKnowledgePage() {
  return (
    <main className="site-shell">
      <section style={{ padding: "58px 0 34px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "38px",
              padding: "clamp(30px, 6vw, 64px)",
              minHeight: "66vh",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Image
              src="/images/forbidden-knowledge.jpg"
              alt="Field Notes and Forbidden Knowledge research archive atmosphere"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1180px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                filter: "saturate(0.68) contrast(1.08)",
              }}
            />

            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(4,5,6,0.08), rgba(4,5,6,0.48) 46%, rgba(4,5,6,0.98) 100%), radial-gradient(circle at 20% 20%, rgba(210,181,139,0.22), transparent 30%), radial-gradient(circle at 82% 24%, rgba(127,141,155,0.18), transparent 32%)",
              }}
            />

            <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
              <p className="kicker">Free Intro Course</p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(54px, 9vw, 110px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.075em",
                  fontWeight: 400,
                  textShadow: "0 18px 54px rgba(0,0,0,0.68)",
                }}
              >
                Forbidden Knowledge, without losing the map.
              </h1>

              <p
                style={{
                  margin: "24px 0 0",
                  maxWidth: "790px",
                  color: "var(--paper)",
                  fontSize: "clamp(20px, 3vw, 29px)",
                  lineHeight: 1.35,
                }}
              >
                A grounded introduction to ancient knowledge, lost etymology,
                symbolism, source trails, evidence labels, and the discipline of
                knowing where speculation begins.
              </p>

              <p className="body-copy" style={{ margin: "20px 0 0", maxWidth: "790px" }}>
                Start with the free Skool course. It introduces the method behind
                Field Notes and <em>The Forbidden Knowledge Bible</em>: preserve
                mystery, protect truth.
              </p>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={freeIntroCourseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Start Free Course
                </a>

                <Link href="/field-notes" className="secondary-button">
                  Read Field Notes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 46px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.78fr)",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">What you will learn</p>
              <h2 className="section-title">A method before a rabbit hole.</h2>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The course is not built to sell certainty. It is built to give
                you a way to read claims, symbols, ancient material, and modern
                theories without collapsing everything into belief or dismissal.
              </p>
            </div>

            <aside
              style={{
                border: "1px solid var(--line)",
                borderRadius: "24px",
                padding: "24px",
                background:
                  "linear-gradient(180deg, rgba(210,181,139,0.10), rgba(255,255,255,0.025))",
              }}
            >
              {learnItems.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "14px 0",
                    borderTop: "1px solid var(--line)",
                    color: "var(--paper-soft)",
                    fontSize: "15px",
                    lineHeight: 1.55,
                  }}
                >
                  {item}
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">The path</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            {pathItems.map((item) => (
              <article
                key={item.title}
                className="glass-panel"
                style={{ padding: "24px", borderRadius: "24px" }}
              >
                <h2
                  style={{
                    margin: 0,
                    color: "var(--paper)",
                    fontSize: "25px",
                    lineHeight: 1.08,
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </h2>

                <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
              textAlign: "center",
            }}
          >
            <p className="kicker">Start here</p>

            <h2 className="section-title">Preserve mystery. Protect truth.</h2>

            <p
              className="body-copy"
              style={{
                margin: "20px auto 0",
                maxWidth: "760px",
              }}
            >
              Go deep, but keep the labels visible. That is the whole point of
              the method.
            </p>

            <div
              style={{
                marginTop: "28px",
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a
                href={freeIntroCourseUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Start Free Course
              </a>

              <Link href="/field-notes" className="secondary-button">
                Open Field Notes
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
