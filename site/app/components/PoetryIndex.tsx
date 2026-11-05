"use client";

import { useState } from "react";
import type { PublicPoem } from "../lib/poetry";
import PoemCard from "./PoemCard";

export default function PoetryIndex({ poems }: { poems: PublicPoem[] }) {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("");
  const [collection, setCollection] = useState("");
  const [form, setForm] = useState("");
  const themes = [...new Set(poems.flatMap((poem) => poem.themes))].sort();
  const collections = [...new Set(poems.map((poem) => poem.collection))].sort();
  const forms = [...new Set(poems.map((poem) => poem.form))].sort();
  const query = search.trim().toLocaleLowerCase();
  const filtered = poems.filter(
    (poem) =>
      (!theme || poem.themes.includes(theme)) &&
      (!collection || poem.collection === collection) &&
      (!form || poem.form === form) &&
      [poem.title, poem.summary, ...poem.poemLines]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query),
  );
  return (
    <>
      <form
        className="poetry-filters"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="filter-field">
          <label htmlFor="poetry-search">Find a poem</label>
          <input
            id="poetry-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="A title, a word, a line…"
          />
        </div>
        <div className="filter-field">
          <label htmlFor="poetry-theme">Theme</label>
          <select
            id="poetry-theme"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            <option value="">All themes</option>
            {themes.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="poetry-collection">Collection</label>
          <select
            id="poetry-collection"
            value={collection}
            onChange={(event) => setCollection(event.target.value)}
          >
            <option value="">All collections</option>
            {collections.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="poetry-form">Form</label>
          <select
            id="poetry-form"
            value={form}
            onChange={(event) => setForm(event.target.value)}
          >
            <option value="">All forms</option>
            {forms.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        {(search || theme || collection || form) && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setTheme("");
              setCollection("");
              setForm("");
            }}
          >
            Clear filters
          </button>
        )}
      </form>
      <p className="results-count" role="status">
        {filtered.length} {filtered.length === 1 ? "poem" : "poems"}
      </p>
      <h2 className="visually-hidden">Poems</h2>
      <div className="poem-grid">
        {filtered.map((poem) => (
          <PoemCard key={poem.slug} poem={poem} />
        ))}
      </div>
      {!filtered.length && (
        <p className="empty-results">
          No poems match those filters. Try another word or clear your filters.
        </p>
      )}
    </>
  );
}
