"use client";

import { useEffect, useState } from "react";

type Signal = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  body: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
};

const signals: Signal[] = [
  {
    id: "glass-below",
    label: "The Glass Below",
    title: "The Glass Below",
    subtitle: "Observation becoming hunger.",
    body:
      "Before the breach, the Glass Below was an instrument of sacred distance. It allowed the Watchers to behold the Warm Below without touching it. After longing entered, it became private, obsessive, and nearly impossible to look away from.",
    position: { top: "28%", right: "18%" },
  },
  {
    id: "oath-circle",
    label: "The Oath Circle",
    title: "The Oath Circle",
    subtitle: "A lawful instrument misused.",
    body:
      "The circle was not built for rebellion. It was built to renew distance. Veyr did not create the first breach from nothing. He turned an existing sacred mechanism toward shared consequence.",
    position: { top: "54%", left: "47%" },
  },
  {
    id: "broken-armillary",
    label: "The Broken Armillary",
    title: "The Broken Armillary",
    subtitle: "Wonder divided into omen.",
    body:
      "Kovren once preserved the sky as order. After the breach, he divided mystery into signs small enough to use. In PHYLAX, the danger is not knowledge itself. The danger is knowledge severed from wisdom.",
    position: { top: "17%", left: "58%" },
  },
  {
    id: "ash-archive",
    label: "The Ash Archive",
    title: "The Ash Archive",
    subtitle: "Memory after fire.",
    body:
      "The Ash Archive is where language becomes unstable. Names survive, but not cleanly. Records remain, but some are burned, mistranslated, buried, or intentionally obscured. PHYLAX speaks like something recovered from that damage.",
    position: { bottom: "19%", right: "12%" },
  },
  {
    id: "first-law",
    label: "The First Law",
    title: "The First Law of the Upper Watch",
    subtitle: "You may behold what is below. You may not become its answer.",
    body:
      "This is the oldest boundary in the PHYLAX world. It is not cruelty. It is the protection of both watcher and watched. The tragedy begins when attention starts to believe it has earned possession.",
    position: { bottom: "28%", left: "11%" },
  },
];

export default function PhylaxEasterEggs() {
  const [activeSignal, setActiveSignal] = useState<Signal | null>(null);
  const [foundSignals, setFoundSignals] = useState<string[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem("phylax-found-signals");

    if (saved) {
      try {
        setFoundSignals(JSON.parse(saved));
      } catch {
        setFoundSignals([]);
      }
    }
  }, []);

  function openSignal(signal: Signal) {
    setActiveSignal(signal);

    setFoundSignals((current) => {
      if (current.includes(signal.id)) {
        return current;
      }

      const next = [...current, signal.id];
      window.localStorage.setItem("phylax-found-signals", JSON.stringify(next));
      return next;
    });
  }

  function closeSignal() {
    setActiveSignal(null);
  }

  return (
    <>
      <div
        aria-label="Hidden PHYLAX lore signals"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 35,
          pointerEvents: "none",
        }}
      >
        {signals.map((signal) => {
          const discovered = foundSignals.includes(signal.id);

          return (
            <button
              key={signal.id}
              type="button"
              aria-label={`Unlock hidden lore: ${signal.label}`}
              title={signal.label}
              onClick={() => openSignal(signal)}
              style={{
                position: "absolute",
                ...signal.position,
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                border: "1px solid rgba(210,181,139,0.18)",
                background: discovered
                  ? "radial-gradient(circle, rgba(210,181,139,0.42), rgba(182,93,49,0.10) 48%, transparent 70%)"
                  : "radial-gradient(circle, rgba(210,181,139,0.20), rgba(141,160,178,0.08) 48%, transparent 70%)",
                boxShadow: discovered
                  ? "0 0 28px rgba(210,181,139,0.22)"
                  : "0 0 22px rgba(141,160,178,0.12)",
                color: discovered ? "#d2b58b" : "rgba(241,237,230,0.48)",
                cursor: "pointer",
                pointerEvents: "auto",
                display: "grid",
                placeItems: "center",
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                fontSize: "18px",
                lineHeight: 1,
                transition:
                  "transform 220ms ease, opacity 220ms ease, box-shadow 220ms ease",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "scale(1.12)";
                event.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "scale(1)";
                event.currentTarget.style.opacity = "";
              }}
            >
              ✦
            </button>
          );
        })}
      </div>

      <div
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          zIndex: 36,
          pointerEvents: "none",
          color: "rgba(241,237,230,0.50)",
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          background: "rgba(3,5,7,0.62)",
          border: "1px solid rgba(210,181,139,0.12)",
          borderRadius: "999px",
          padding: "9px 12px",
          backdropFilter: "blur(10px)",
        }}
      >
        Signals found {foundSignals.length}/{signals.length}
      </div>

      {activeSignal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="phylax-signal-title"
          onClick={closeSignal}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            display: "grid",
            placeItems: "center",
            padding: "22px",
            background:
              "radial-gradient(circle at 50% 20%, rgba(210,181,139,0.08), transparent 28%), rgba(0,0,0,0.76)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "min(620px, 100%)",
              border: "1px solid rgba(210,181,139,0.24)",
              borderRadius: "28px",
              background:
                "linear-gradient(180deg, rgba(15,19,23,0.98), rgba(5,6,8,0.98))",
              boxShadow: "0 40px 120px rgba(0,0,0,0.58)",
              padding: "30px",
              color: "#f1ede6",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            <div
              style={{
                color: "#d2b58b",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "12px",
                marginBottom: "14px",
              }}
            >
              Hidden signal unlocked
            </div>

            <h2
              id="phylax-signal-title"
              style={{
                margin: 0,
                fontSize: "clamp(34px, 6vw, 54px)",
                lineHeight: 0.98,
                fontWeight: 400,
                letterSpacing: "-0.045em",
              }}
            >
              {activeSignal.title}
            </h2>

            <p
              style={{
                margin: "12px 0 0",
                color: "#d2b58b",
                fontSize: "20px",
                lineHeight: 1.45,
              }}
            >
              {activeSignal.subtitle}
            </p>

            <p
              style={{
                margin: "22px 0 0",
                color: "rgba(241,237,230,0.78)",
                fontSize: "18px",
                lineHeight: 1.9,
              }}
            >
              {activeSignal.body}
            </p>

            <div
              style={{
                marginTop: "28px",
                display: "flex",
                justifyContent: "space-between",
                gap: "14px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  color: "rgba(241,237,230,0.44)",
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Signal {foundSignals.length}/{signals.length}
              </span>

              <button
                type="button"
                onClick={closeSignal}
                style={{
                  border: "1px solid rgba(210,181,139,0.28)",
                  borderRadius: "999px",
                  background: "rgba(210,181,139,0.10)",
                  color: "#f1ede6",
                  padding: "12px 18px",
                  cursor: "pointer",
                  fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  fontSize: "15px",
                }}
              >
                Return to the archive
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
