"use client";

import { useState } from "react";

export default function ArchiveNote({
  title,
  evidence,
  children,
}: {
  title: string;
  evidence: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className="archive-note-wrapper">
      <button
        type="button"
        className="archive-note-button"
        aria-expanded={open}
        aria-label={`Open archive note: ${title}`}
        onClick={() => setOpen((value) => !value)}
      >
        ⊕
      </button>

      {open ? (
        <span className="archive-note-panel">
          <strong className="archive-note-label">{title}</strong>
          <span className="archive-note-evidence">{evidence}</span>
          {children}
        </span>
      ) : null}
    </span>
  );
}