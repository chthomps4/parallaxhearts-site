import Link from "next/link";

const contactSubject = "Dispatches from Vallen";
const contactBody =
  "Add me to Dispatches from Vallen for Parallax Hearts, What the Town Keeps, chapter updates, song notes, and project news.";
const signupHref = `mailto:chad@parallaxhearts.org?subject=${encodeURIComponent(
  contactSubject,
)}&body=${encodeURIComponent(contactBody)}`;

export default function DispatchSignup() {
  return (
    <section id="dispatches" className="dispatch-signup" aria-labelledby="dispatch-signup-title">
      <div className="site-container">
        <div className="glass-panel dispatch-signup-panel">
          <div>
            <p className="kicker">Dispatches from Vallen</p>
            <h2 id="dispatch-signup-title" className="section-title">
              Get the next chapter, song note, or Vallen dispatch.
            </h2>
            <p className="body-copy" style={{ margin: "18px 0 0" }}>
              A quiet update list for Parallax Hearts, <em>What the Town Keeps</em>,
              visual-novel pages, song notes, and creative updates. No
              noise. Just the next thing worth sending.
            </p>
          </div>

          <div className="dispatch-signup-actions">
            <a className="primary-button" href={signupHref}>
              Ask to join the list
            </a>
            <Link className="secondary-button" href="/contact">
              Contact / Social Links
            </Link>
            <p className="soft-copy dispatch-signup-note">
              This opens your email app for now. A dedicated email-list provider
              can be connected later without changing the site structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

