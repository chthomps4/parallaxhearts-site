import Link from "next/link";
import type { PublicPoem } from "../lib/poetry";
import Arrow from "./Arrow";
import PoemCard from "./PoemCard";

export default function PoetryShelf({ poems }: { poems: PublicPoem[] }) {
  if (!poems.length) return null;
  return (
    <section className="parchment-band" aria-labelledby="latest-poetry-title">
      <div className="editorial-container">
        <div className="section-heading-row">
          <div>
            <h2 id="latest-poetry-title">Small moments. Wider worlds.</h2>
            <p>Poetry from Crown of Phases</p>
          </div>
          <Link className="text-link" href="/poetry">
            View all poetry <Arrow />
          </Link>
        </div>
        <div className="poem-grid">
          {[
            ...poems.filter((poem) => poem.featured),
            ...poems.filter((poem) => !poem.featured),
          ]
            .slice(0, 4)
            .map((poem) => (
              <PoemCard key={poem.slug} poem={poem} />
            ))}
        </div>
        <div className="collection-statement">
          <p>
            Poems for the sovereign, the curious, and the beautifully
            unfinished.
          </p>
          <span>
            Lunar imagery, ordinary moments, and the patterns we notice in
            ourselves.
          </span>
          <Link className="text-link" href="/crown-of-phases">
            About the collection <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
