export default function MusicPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0d",
        color: "#f3eee7",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          padding: "90px 24px 50px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              margin: "0 0 12px 0",
              fontSize: "12px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(243,238,231,0.58)",
            }}
          >
            Parallax Hearts
          </p>

          <h1
            style={{
              margin: "0 0 18px 0",
              fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
              lineHeight: 1.05,
              fontWeight: 400,
            }}
          >
            Music
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.75,
              color: "rgba(243,238,231,0.76)",
            }}
          >
            Official releases, direct support, and featured work from
            Parallax Hearts.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "56px 24px 90px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gap: "30px",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "32px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
              boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
            }}
          >
            <p
              style={{
                margin: "0 0 10px 0",
                fontSize: "12px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(243,238,231,0.55)",
              }}
            >
              Featured Album
            </p>

            <h2
              style={{
                margin: "0 0 14px 0",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                lineHeight: 1.1,
                fontWeight: 400,
              }}
            >
              What the Town Keeps
            </h2>

            <p
              style={{
                margin: "0 0 24px 0",
                maxWidth: "780px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(243,238,231,0.78)",
              }}
            >
              A dark, cinematic acoustic alt-rock record shaped by memory,
              distance, emotional aftermath, and the quiet ways people remain
              with us after they’ve gone from our lives. Built on textured
              guitars, restrained dynamics, and intimate vocals, the album
              stays grounded and human while carrying deeper narrative weight.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <a
                href="https://ko-fi.com/parallaxhearts"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 24px",
                  borderRadius: "999px",
                  backgroundColor: "#f3eee7",
                  color: "#0b0b0d",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontSize: "12px",
                  fontWeight: 700,
                  border: "1px solid #f3eee7",
                }}
              >
                Get it on Ko-fi
              </a>

              <a
                href="https://ko-fi.com/parallaxhearts"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 24px",
                  borderRadius: "999px",
                  backgroundColor: "transparent",
                  color: "#f3eee7",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontSize: "12px",
                  fontWeight: 700,
                  border: "1px solid rgba(243,238,231,0.22)",
                }}
              >
                Support the Project
              </a>
            </div>

            <p
              style={{
                margin: "18px 0 0 0",
                fontSize: "13px",
                lineHeight: 1.6,
                color: "rgba(243,238,231,0.48)",
              }}
            >
              Available through the official Parallax Hearts Ko-fi page.
            </p>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "26px",
            }}
          >
            <h3
              style={{
                margin: "0 0 14px 0",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              Support the project directly
            </h3>

            <p
              style={{
                margin: 0,
                maxWidth: "760px",
                fontSize: "16px",
                lineHeight: 1.75,
                color: "rgba(243,238,231,0.72)",
              }}
            >
              Direct support helps fund future releases, artwork, videos, and
              the ongoing world of Parallax Hearts.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}