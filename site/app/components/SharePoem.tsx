"use client";

import { useState } from "react";

export default function SharePoem({
  title,
  url,
  localReview = false,
  reviewPath,
  kind = "poem",
  compact = false,
}: {
  title: string;
  url: string;
  localReview?: boolean;
  reviewPath?: string;
  kind?: "poem" | "fragment";
  compact?: boolean;
}) {
  const [message, setMessage] = useState("");
  const [manualLink, setManualLink] = useState("");
  async function copy() {
    const link = localReview
      ? reviewPath
        ? new URL(reviewPath, window.location.href).href
        : window.location.href
      : url;
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(link);
      setMessage("Link copied.");
    } catch {
      setManualLink(link);
      setMessage("Copy this link manually.");
    }
  }
  async function share() {
    if (!navigator.share) return copy();
    try {
      await navigator.share({ title, url });
      setMessage("Share sheet opened.");
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError"))
        await copy();
    }
  }
  return (
    <div className="share-poem">
      <div className="share-actions">
        {!localReview && (
          <button type="button" onClick={share}>
            Share {kind}
          </button>
        )}
        <button type="button" onClick={copy}>
          {localReview ? "Copy local review link" : "Copy link"}
        </button>
      </div>
      {localReview && !compact && (
        <p className="contact-note">
          Review links work only on this machine. Public sharing is available
          after publication approval.
        </p>
      )}
      <p role="status">{message}</p>
      {manualLink && (
        <label className="manual-link">
          {kind === "poem" ? "Poem link" : "Fragment link"}
          <input
            readOnly
            value={manualLink}
            onFocus={(event) => event.target.select()}
          />
        </label>
      )}
    </div>
  );
}
