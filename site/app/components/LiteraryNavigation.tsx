import Link from "next/link";
import { getVisibleQuotes } from "../lib/quotes";

export default async function LiteraryNavigation({
  active,
}: {
  active: "collection" | "poetry" | "quotes";
}) {
  const quotes = await getVisibleQuotes();
  const links = [
    ["collection", "Crown of Phases", "/crown-of-phases"],
    ["poetry", "All poems", "/poetry"],
    ...(quotes.length ? [["quotes", "Quotes & fragments", "/quotes"]] : []),
  ];
  return (
    <nav className="reading-navigation" aria-label="Crown of Phases reading">
      {links.map(([key, label, href]) => (
        <Link
          key={key}
          href={href}
          aria-current={active === key ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
