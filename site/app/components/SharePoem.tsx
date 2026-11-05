"use client";

import { useState } from "react";

export default function SharePoem({
  title,
  url,
  localReview = false,
}: {
  title: string;
  url: string;
  localReview?: boolean;
}) {
  const [message, setMessage] = useState("");
  const [showLink, setShowLink] = useState(false);
  async function copy() {
    const link = localReview ? window.location.href : url;
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(link);
      setMessage("Link copied.");
    } catch {
      setShowLink(true);
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
            Share poem
          </button>
        )}
        <button type="button" onClick={copy}>
          {localReview ? "Copy local review link" : "Copy link"}
        </button>
      </div>
      {localReview && (
        <p className="contact-note">
          Review links work only on this machine. Public sharing is available
          after publication approval.
        </p>
      )}
      <p role="status">{message}</p>
      {showLink && (
        <label className="manual-link">
          Poem link
          <input
            readOnly
            value={localReview ? window.location.href : url}
            onFocus={(event) => event.target.select()}
          />
        </label>
      )}
    </div>
  );
}
