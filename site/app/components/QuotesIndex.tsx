"use client";
import { useState } from "react";
import type { PublicQuote } from "../lib/quotes";
import SharePoem from "./SharePoem";

export default function QuotesIndex({
  quotes,
  localReview,
}: {
  quotes: PublicQuote[];
  localReview: boolean;
}) {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("");
  const themes = [...new Set(quotes.flatMap((quote) => quote.themes))].sort();
  const filtered = quotes.filter(
    (quote) =>
      (!theme || quote.themes.includes(theme)) &&
      [quote.title, quote.text]
        .join(" ")
        .toLocaleLowerCase()
        .includes(search.trim().toLocaleLowerCase()),
  );
  return (
    <>
      <form
        className="poetry-filters fragment-filters"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="filter-field">
          <label htmlFor="fragment-search">Find a fragment</label>
          <input
            id="fragment-search"
            type="search"
            placeholder="A title, a word, a thought…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="fragment-theme">Theme</label>
          <select
            id="fragment-theme"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            <option value="">All themes</option>
            {themes.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        {(search || theme) && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setTheme("");
            }}
          >
            Clear filters
          </button>
        )}
      </form>
      <p className="results-count" role="status">
        {filtered.length} {filtered.length === 1 ? "fragment" : "fragments"}
      </p>
      <div className="fragment-grid">
        {filtered.map((quote) => (
          <article className="fragment-entry" id={quote.slug} key={quote.id}>
            <p className="editorial-label">{quote.themes.join(" · ")}</p>
            <h2>
              <a href={`#${quote.slug}`}>{quote.title}</a>
            </h2>
            <blockquote>
              <p>{quote.text}</p>
            </blockquote>
            <SharePoem
              title={quote.title}
              url={`https://www.parallaxhearts.org/quotes#${quote.slug}`}
              reviewPath={`/quotes#${quote.slug}`}
              localReview={localReview}
              kind="fragment"
              compact
            />
          </article>
        ))}
      </div>
      {!filtered.length && (
        <p className="empty-results">
          No fragments match those filters. Try another word or clear your
          filters.
        </p>
      )}
    </>
  );
}
