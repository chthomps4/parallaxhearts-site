import Image from "next/image";

export default function LunarArt({ priority = false }: { priority?: boolean }) {
  return (
    <div className="lunar-art">
      <Image
        src="/images/crown-of-phases/lunar-plate.webp"
        width={1000}
        height={1000}
        alt="A warm full moon within fine copper orbits above a reflection on dark water; an artistic astronomical plate."
        sizes="(max-width: 700px) 90vw, 48vw"
        preload={priority}
      />
    </div>
  );
}
