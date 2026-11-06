import Link from "next/link";
import { getVisibleQuotes } from "../lib/quotes";
import Arrow from "./Arrow";

export default async function QuoteFeature() {
  const quotes = await getVisibleQuotes();
  const quote = quotes.find((item) => item.featured) || quotes[0];
  if (!quote) return null;
  return (
    <section
      className="editorial-container fragment-feature"
      aria-labelledby="fragment-feature-title"
    >
      <div>
        <h2 className="editorial-label" id="fragment-feature-title">
          Quotes &amp; fragments
        </h2>
        <blockquote>
          <p>{quote.text}</p>
        </blockquote>
      </div>
      <Link className="text-link" href={`/quotes#${quote.slug}`}>
        Read the fragments <Arrow />
      </Link>
    </section>
  );
}
