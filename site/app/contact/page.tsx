import Image from "next/image";
import type { Metadata } from "next";
import { buildMetadata, contactEmail, socialLinks } from "../lib/seo";
import Arrow from "../components/Arrow";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Parallax Hearts",
  description:
    "Contact Chad Thompson about Parallax Hearts poetry, music, writing, or visual work, and find the project’s existing social links.",
  path: "/contact",
});
const links = [
  ["Facebook", socialLinks.facebook],
  ["Instagram", socialLinks.instagram],
  ["YouTube", socialLinks.youtube],
  ["SoundCloud", socialLinks.soundCloud],
  ["Ko-fi", socialLinks.koFi],
];
export default function ContactPage() {
  return (
    <main className="publication-page">
      <header className="editorial-container archive-intro">
        <p className="editorial-label">Contact &amp; follow</p>
        <h1>
          A conversation
          <br />
          <em>starts somewhere.</em>
        </h1>
        <p className="hero-deck">
          A note about a poem, a question about the music, or an idea worth
          sharing.
        </p>
      </header>
      <section className="editorial-container contact-layout">
        <div>
          <a className="contact-address" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <p className="contact-note">
            This link opens your email app. It does not submit a form or
            subscribe you to a mailing list.
          </p>
          <div className="contact-links">
            {links.map(([label, href]) => (
              <a
                href={href}
                key={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                <Arrow />
              </a>
            ))}
          </div>
          <p className="contact-note">
            These links lead to external services. Keep sensitive personal or
            health information out of email enquiries.
          </p>
        </div>
        <Image
          src="/images/contact-porch.jpg"
          alt="A warm porch light above a weathered door in the rain."
          width={1200}
          height={1400}
          sizes="(max-width: 800px) 90vw, 45vw"
        />
      </section>
    </main>
  );
}
