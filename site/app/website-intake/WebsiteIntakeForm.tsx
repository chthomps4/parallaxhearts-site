"use client";

import { FormEvent, useState } from "react";

const contactEmail = "chad@parallaxhearts.org";

const fieldStyle = {
  width: "100%",
  border: "1px solid var(--line)",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.045)",
  color: "var(--paper)",
  padding: "14px 16px",
  fontSize: "16px",
  lineHeight: 1.45,
  outline: "none",
};

const labelStyle = {
  display: "block",
  color: "var(--paper)",
  fontSize: "15px",
  marginBottom: "8px",
};

const helpStyle = {
  display: "block",
  color: "var(--paper-soft)",
  fontSize: "13px",
  lineHeight: 1.45,
  marginTop: "6px",
};

const formGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const fullWidthStyle = {
  gridColumn: "1 / -1",
};

function inputValue(formData: FormData, name: string) {
  return String(formData.get(name) || "").trim();
}

export default function WebsiteIntakeForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = inputValue(formData, "name");
    const email = inputValue(formData, "email");
    const projectName = inputValue(formData, "projectName");
    const projectType = inputValue(formData, "projectType");
    const mainGoal = inputValue(formData, "mainGoal");
    const currentSite = inputValue(formData, "currentSite");
    const pages = inputValue(formData, "pages");
    const materials = inputValue(formData, "materials");
    const styleNotes = inputValue(formData, "styleNotes");
    const timeline = inputValue(formData, "timeline");
    const budget = inputValue(formData, "budget");
    const notes = inputValue(formData, "notes");

    const subject = `Website Request - ${projectName || name || "New Project"}`;

    const body = [
      "WEBSITE INTAKE REQUEST",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Project / Business Name: ${projectName}`,
      `Request Type: ${projectType}`,
      "",
      "MAIN GOAL",
      mainGoal,
      "",
      "CURRENT SITE / LINKS",
      currentSite,
      "",
      "PAGES NEEDED",
      pages,
      "",
      "MATERIALS AVAILABLE",
      materials,
      "",
      "STYLE / EXAMPLE NOTES",
      styleNotes,
      "",
      "TIMELINE",
      timeline,
      "",
      "BUDGET RANGE",
      budget,
      "",
      "EXTRA NOTES",
      notes,
    ].join("\n");

    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("Your email app should open with the intake details filled in. Review it, add attachments if needed, then send it.");
    window.location.href = mailtoUrl;
  }

  return (
    <form className="feature-card" onSubmit={handleSubmit} style={{ padding: "clamp(22px, 4vw, 34px)" }}>
      <div style={formGridStyle}>
        <div>
          <label htmlFor="name" style={labelStyle}>Your name *</label>
          <input id="name" name="name" required autoComplete="name" style={fieldStyle} />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>Your email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" style={fieldStyle} />
        </div>

        <div>
          <label htmlFor="projectName" style={labelStyle}>Business / project name *</label>
          <input id="projectName" name="projectName" required style={fieldStyle} />
        </div>

        <div>
          <label htmlFor="projectType" style={labelStyle}>What do you need? *</label>
          <select id="projectType" name="projectType" required style={fieldStyle} defaultValue="">
            <option value="" disabled>Select one</option>
            <option>New website build</option>
            <option>One-page starter site</option>
            <option>Ad landing page</option>
            <option>Artist / creator website</option>
            <option>Small business website</option>
            <option>Website cleanup</option>
            <option>Ongoing update support</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div style={fullWidthStyle}>
          <label htmlFor="mainGoal" style={labelStyle}>What should the site help visitors do? *</label>
          <textarea id="mainGoal" name="mainGoal" required rows={4} style={fieldStyle} placeholder="Contact you, book a service, listen, buy, read, subscribe, support the project, understand what you do, etc." />
        </div>

        <div style={fullWidthStyle}>
          <label htmlFor="currentSite" style={labelStyle}>Current website, social links, or examples</label>
          <textarea id="currentSite" name="currentSite" rows={4} style={fieldStyle} placeholder="Paste your current site, Facebook, Instagram, SoundCloud, Ko-fi, Skool, shop, YouTube, or examples of sites you like." />
        </div>

        <div style={fullWidthStyle}>
          <label htmlFor="pages" style={labelStyle}>Pages you think you need</label>
          <textarea id="pages" name="pages" rows={3} style={fieldStyle} placeholder="Home, About, Services, Music, Portfolio, Shop, Booking, Contact, Support, etc." />
        </div>

        <div style={fullWidthStyle}>
          <label htmlFor="materials" style={labelStyle}>What materials do you already have?</label>
          <textarea id="materials" name="materials" rows={3} style={fieldStyle} placeholder="Logo, photos, artwork, product images, written copy, music links, brand colors, rough notes, etc." />
          <span style={helpStyle}>The form prepares the email. Attach files from your email app before sending.</span>
        </div>

        <div style={fullWidthStyle}>
          <label htmlFor="styleNotes" style={labelStyle}>Style, mood, or example notes</label>
          <textarea id="styleNotes" name="styleNotes" rows={3} style={fieldStyle} placeholder="Clean and simple, cinematic, local business, artist portfolio, dark/minimal, warm and personal, etc." />
        </div>

        <div>
          <label htmlFor="timeline" style={labelStyle}>Rough timeline</label>
          <input id="timeline" name="timeline" style={fieldStyle} placeholder="No rush, 2 weeks, this month, before launch, etc." />
        </div>

        <div>
          <label htmlFor="budget" style={labelStyle}>Budget range</label>
          <input id="budget" name="budget" style={fieldStyle} placeholder="Flexible, under $500, $500–$1,000, not sure yet, etc." />
        </div>

        <div style={fullWidthStyle}>
          <label htmlFor="notes" style={labelStyle}>Anything else I should know?</label>
          <textarea id="notes" name="notes" rows={4} style={fieldStyle} />
        </div>
      </div>

      <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
        <button className="primary-button" type="submit" style={{ cursor: "pointer", border: 0 }}>
          Prepare email intake
        </button>
        <a className="ghost-button" href={`mailto:${contactEmail}?subject=Website%20Request`}>
          Email directly instead
        </a>
      </div>

      {status ? (
        <p className="soft-copy" role="status" aria-live="polite" style={{ marginTop: "18px" }}>
          {status}
        </p>
      ) : null}
    </form>
  );
}
