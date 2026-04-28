import Link from "next/link";
import PhylaxEasterEggs from "./PhylaxEasterEggs";

type Character = {
  name: string;
  title: string;
  image: string;
  faction: string;
  role: string;
  summary: string;
  symbol: string;
  arc: string;
  keyLine: string;
};

const siteFont = `Georgia, "Times New Roman", Times, serif`;

const colors = {
  bg: "#050607",
  bgSoft: "#0b0d10",
  panel: "rgba(12, 15, 18, 0.82)",
  border: "rgba(196, 175, 145, 0.14)",
  text: "#f1ede6",
  textSoft: "rgba(241, 237, 230, 0.78)",
  textDim: "rgba(241, 237, 230, 0.56)",
  gold: "#d2b58b",
  ember: "#b65d31",
  blue: "#8da0b2",
};

const characters: Character[] = [
  {
    name: "Veyr",
    title: "The Binding Voice",
    image: "/images/phylax/characters/veyr.png",
    faction: "The Breach Court",
    role: "Leader of the oath; emotional center of the breach.",
    summary:
      "Veyr turns private longing into shared consequence. He begins as the keeper of lawful distance, but human vows wound him. He understands the shape of covenant without understanding love.",
    symbol: "Ember-lit hands over a broken oath circle.",
    arc: "Restraint → fascination → jealousy → oath → bondage.",
    keyLine: "Distance was the first law I broke.",
  },
  {
    name: "Korr Vane",
    title: "The Cinderwright",
    image: "/images/phylax/characters/Korr.png",
    faction: "The Breach Court",
    role: "Maker of instruments; architect of useful corruption.",
    summary:
      "Korr does not merely admire forbidden knowledge—he wants to shape it, carry it, and teach it into the world. He is the hand that turns wonder into craft, and craft into wound.",
    symbol: "Black tablets, forge sparks, carved designs.",
    arc: "Curiosity → invention → pride → transmission → ruin.",
    keyLine: "What can be made can also be misused.",
  },
  {
    name: "Nadir Quen",
    title: "The First Whisper",
    image: "/images/phylax/characters/Nadir.png",
    faction: "The Breach Court",
    role: "Voice of suggestion; the breach before the breach.",
    summary:
      "Nadir rarely commands. He leans, implies, and plants the sentence that the others were already afraid to admit. He does not begin the fire, but he teaches it where to breathe.",
    symbol: "Open palms beneath celestial fracture.",
    arc: "Observation → suggestion → permission → contagion.",
    keyLine: "The fall begins in the sentence nobody answers.",
  },
  {
    name: "Sevrin Ash",
    title: "The Gray Counsel",
    image: "/images/phylax/characters/sevren.png",
    faction: "The Breach Court",
    role: "Strategist of compromise; reason turned dark.",
    summary:
      "Sevrin is not reckless. He is worse—he is persuasive. He gives rebellion its sober tone, its logic, its language of necessity. He makes betrayal sound responsible.",
    symbol: "Steel in shadow, counsel in ash.",
    arc: "Caution → justification → consent → complicity.",
    keyLine: "The cleanest lie is the one shaped like wisdom.",
  },
  {
    name: "Dren Voss",
    title: "The Iron Tutor",
    image: "/images/phylax/characters/Dren.png",
    faction: "The Breach Court",
    role: "Teacher of force, discipline, and hardened knowledge.",
    summary:
      "Dren carries instruction like a weapon. Where others are seduced by beauty, he is drawn to systems of control. He represents the moment knowledge becomes training, hierarchy, and blade.",
    symbol: "A spear standard over broken ground.",
    arc: "Discipline → instruction → weaponization → dominion.",
    keyLine: "Every lesson sharpens something.",
  },
  {
    name: "Kovren",
    title: "The Star Divider",
    image: "/images/phylax/characters/Kovren.png",
    faction: "The Breach Court",
    role: "Interpreter of patterns; divider of wonder into omen.",
    summary:
      "Kovren once preserved the sky as order. After the breach, he breaks mystery into signs small enough to use, and use becomes exploitation. He divides the heavens until they can be consumed.",
    symbol: "Orbital geometry, fractured constellations, omen wheels.",
    arc: "Stewardship → decoding → manipulation → distortion.",
    keyLine: "Once named, the sky could be sold.",
  },
];

const featureCards = [
  {
    title: "The Story",
    text: "A cinematic descent from sacred distance into longing, oath, knowledge, corruption, consequence, and return.",
    href: "#story",
  },
  {
    title: "The Breach Court",
    text: "The central figures of the fall—observers, teachers, whisperers, and makers whose fascination becomes history.",
    href: "#characters",
  },
  {
    title: "The World",
    text: "Black stone platforms, storm-lit heights, fractured star geometry, ember ruin, and vast cosmic silence.",
    href: "#world",
  },
];

const lorePoints = [
  [
    "Before the breach",
    "The order above is severe, beautiful, and exact. The Watchers are not monsters yet. They are guardians of distance.",
  ],
  [
    "The first wound",
    "Human life introduces what cannot be held at scale: warmth, touch, mortality, marriage, grief, nearness.",
  ],
  [
    "The oath",
    "Longing becomes mutual consent. What should have remained private becomes a bond, and the bond becomes collective consequence.",
  ],
  [
    "The descent",
    "Knowledge passes downward—craft, signs, war, adornment, division, and altered desire.",
  ],
];

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 0%, rgba(70,95,120,0.18), transparent 34%), radial-gradient(circle at 92% 14%, rgba(182,93,49,0.10), transparent 26%), linear-gradient(180deg, #030507 0%, #050607 40%, #09080a 100%)",
        color: colors.text,
        fontFamily: siteFont,
      }}
    >
      {children}
    </main>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "min(1180px, calc(100% - 32px))",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}

function TopNav() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Project", href: "/project" },
    { label: "Music", href: "/music" },
    { label: "PHYLAX", href: "/phylax" },
    { label: "Story", href: "#story" },
    { label: "Characters", href: "#characters" },
    { label: "World", href: "#world" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(12px)",
        background: "rgba(3,5,7,0.72)",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            padding: "18px 0",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              color: colors.text,
              textDecoration: "none",
              fontSize: "34px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Parallax Hearts
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color:
                    item.label === "PHYLAX" ? colors.gold : colors.textSoft,
                  textDecoration: "none",
                  fontSize: "15px",
                  letterSpacing: "0.04em",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
      </Container>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 16px",
        color: colors.gold,
        textTransform: "uppercase",
        letterSpacing: "0.22em",
        fontSize: "12px",
      }}
    >
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(90deg, rgba(2,4,6,0.96) 0%, rgba(2,4,6,0.88) 32%, rgba(2,4,6,0.58) 62%, rgba(2,4,6,0.82) 100%),
            linear-gradient(180deg, rgba(2,4,6,0.06) 0%, rgba(2,4,6,0.40) 65%, rgba(2,4,6,0.96) 100%),
            url('/images/phylax/atmosphere/upper-watch-hero.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          filter: "saturate(0.92) contrast(1.05)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 15%, rgba(210,181,139,0.10), transparent 24%), radial-gradient(circle at 82% 52%, rgba(182,93,49,0.10), transparent 28%)",
        }}
      />

      <Container>
        <div
          style={{
            position: "relative",
            padding: "88px 0 96px",
            maxWidth: "900px",
          }}
        >
          <Eyebrow>Parallax Hearts presents</Eyebrow>

          <h1
            style={{
              margin: 0,
              color: colors.text,
              fontSize: "clamp(54px, 9vw, 110px)",
              lineHeight: 0.92,
              letterSpacing: "-0.06em",
              fontWeight: 400,
              textShadow: "0 14px 44px rgba(0,0,0,0.55)",
            }}
          >
            PHYLAX:
            <br />
            The First Breach
          </h1>

          <p
            style={{
              margin: "28px 0 0",
              maxWidth: "760px",
              color: colors.textSoft,
              fontSize: "24px",
              lineHeight: 1.75,
              textShadow: "0 10px 26px rgba(0,0,0,0.52)",
            }}
          >
            A dark cinematic album world about watching, longing, descent,
            forbidden knowledge, consequence, and return.
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "10px",
              color: colors.textSoft,
              fontSize: "19px",
              lineHeight: 1.7,
            }}
          >
            <div>Before the breach, there was order.</div>
            <div>Before the oath, there was distance.</div>
            <div>Before they fell, they watched.</div>
          </div>

          <div
            style={{
              marginTop: "34px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="#story"
              style={{
                textDecoration: "none",
                color: "#091015",
                background: colors.gold,
                padding: "14px 22px",
                borderRadius: "999px",
                fontSize: "15px",
                letterSpacing: "0.05em",
              }}
            >
              Read the story
            </Link>

            <Link
              href="#characters"
              style={{
                textDecoration: "none",
                color: colors.text,
                border: `1px solid ${colors.border}`,
                background: "rgba(9,12,15,0.60)",
                padding: "14px 22px",
                borderRadius: "999px",
                fontSize: "15px",
                letterSpacing: "0.05em",
              }}
            >
              View characters
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section style={{ padding: "70px 0 30px" }}>
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {featureCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              style={{
                textDecoration: "none",
                color: colors.text,
                border: `1px solid ${colors.border}`,
                borderRadius: "24px",
                padding: "28px",
                background:
                  "linear-gradient(180deg, rgba(21,24,29,0.82), rgba(8,10,13,0.94))",
                boxShadow: "0 24px 70px rgba(0,0,0,0.28)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "32px",
                  lineHeight: 1.04,
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  margin: "14px 0 0",
                  color: colors.textSoft,
                  fontSize: "16px",
                  lineHeight: 1.8,
                }}
              >
                {card.text}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ThesisSection() {
  return (
    <section id="story" style={{ padding: "64px 0 26px" }}>
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.95fr",
            gap: "22px",
          }}
        >
          <div
            style={{
              border: `1px solid ${colors.border}`,
              borderRadius: "28px",
              padding: "34px",
              background:
                "linear-gradient(180deg, rgba(14,18,22,0.88), rgba(7,8,10,0.94))",
              boxShadow: "0 24px 70px rgba(0,0,0,0.26)",
            }}
          >
            <Eyebrow>Core thesis</Eyebrow>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(34px, 5vw, 56px)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                fontWeight: 400,
              }}
            >
              Sacred distance collapses under longing.
            </h2>

            <p
              style={{
                margin: "22px 0 0",
                color: colors.textSoft,
                fontSize: "18px",
                lineHeight: 1.95,
              }}
            >
              PHYLAX is not the story of monsters invading humanity. It is the
              story of ancient observers who were made to witness without
              possession, then slowly become wounded by what they are forbidden
              to experience.
            </p>

            <p
              style={{
                margin: "16px 0 0",
                color: colors.textSoft,
                fontSize: "18px",
                lineHeight: 1.95,
              }}
            >
              Humanity carries what they cannot study cleanly: warmth, touch,
              grief, birth, marriage, mortality, and the unbearable privilege of
              being near.
            </p>

            <p
              style={{
                margin: "16px 0 0",
                color: colors.textSoft,
                fontSize: "18px",
                lineHeight: 1.95,
              }}
            >
              The breach begins not with brute force, but with fascination.
              Fascination becomes permission. Permission becomes oath. Oath
              becomes descent. Descent becomes the long echo of consequence.
            </p>
          </div>

          <div
            style={{
              border: `1px solid ${colors.border}`,
              borderRadius: "28px",
              overflow: "hidden",
              minHeight: "100%",
              background: "#07090b",
              boxShadow: "0 24px 70px rgba(0,0,0,0.26)",
            }}
          >
            <img
              src="/images/phylax/atmosphere/black-mountain.png"
              alt="Phylax atmosphere"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "22px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {lorePoints.map(([title, text]) => (
            <article
              key={title}
              style={{
                border: `1px solid ${colors.border}`,
                borderRadius: "22px",
                padding: "22px",
                background: "rgba(14,17,21,0.74)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: colors.gold,
                  fontSize: "22px",
                  lineHeight: 1.1,
                  fontWeight: 400,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  margin: "12px 0 0",
                  color: colors.textSoft,
                  fontSize: "15px",
                  lineHeight: 1.8,
                }}
              >
                {text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WorldSection() {
  const worldImages = [
    {
      src: "/images/phylax/atmosphere/descent-path.png",
      title: "The Descent",
      text: "A path cut through silence, stone, and cosmic fracture.",
    },
    {
      src: "/images/phylax/atmosphere/dren-forge.png",
      title: "The Forge of Transmission",
      text: "Knowledge translated into practice, power, and injury.",
    },
    {
      src: "/images/phylax/atmosphere/black-mountain.png",
      title: "The Breach World",
      text: "A ruined geography of ember valleys, black ridges, and torn heavens.",
    },
  ];

  return (
    <section id="world" style={{ padding: "68px 0 10px" }}>
      <Container>
        <Eyebrow>The world</Eyebrow>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(38px, 5vw, 62px)",
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            fontWeight: 400,
          }}
        >
          Black stone, storm light, ember ruin.
        </h2>

        <p
          style={{
            margin: "18px 0 0",
            maxWidth: "760px",
            color: colors.textSoft,
            fontSize: "18px",
            lineHeight: 1.9,
          }}
        >
          The visual language of PHYLAX should feel ancient, cosmic, severe,
          and cinematic—never generic fantasy, never glossy, never loud for its
          own sake.
        </p>

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {worldImages.map((item) => (
            <article
              key={item.title}
              style={{
                border: `1px solid ${colors.border}`,
                borderRadius: "26px",
                overflow: "hidden",
                background: "rgba(10,12,14,0.84)",
                boxShadow: "0 24px 70px rgba(0,0,0,0.30)",
              }}
            >
              <div style={{ height: "320px" }}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ padding: "22px 22px 24px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "28px",
                    lineHeight: 1.04,
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: "12px 0 0",
                    color: colors.textSoft,
                    fontSize: "15px",
                    lineHeight: 1.8,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CharacterSection() {
  return (
    <section id="characters" style={{ padding: "76px 0 92px" }}>
      <Container>
        <Eyebrow>The Breach Court</Eyebrow>

        <h2
          style={{
            margin: 0,
            fontSize: "clamp(40px, 6vw, 70px)",
            lineHeight: 0.96,
            letterSpacing: "-0.045em",
            fontWeight: 400,
          }}
        >
          Figures of oath,
          <br />
          fracture, and transmission.
        </h2>

        <p
          style={{
            margin: "18px 0 0",
            maxWidth: "800px",
            color: colors.textSoft,
            fontSize: "18px",
            lineHeight: 1.9,
          }}
        >
          These are not random fantasy characters. They are symbolic centers of
          the fall: the binder, the whisperer, the tutor, the maker, the
          strategist, the divider of stars.
        </p>

        <div style={{ marginTop: "34px" }}>
          {characters.map((character, index) => (
            <CharacterFeature
              key={character.name}
              character={character}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function CharacterFeature({
  character,
  reverse,
}: {
  character: Character;
  reverse?: boolean;
}) {
  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: reverse ? "1.1fr 380px" : "380px 1.1fr",
        gap: "28px",
        alignItems: "stretch",
        marginBottom: "28px",
        border: `1px solid ${colors.border}`,
        borderRadius: "30px",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(14,18,22,0.88), rgba(7,8,10,0.96))",
        boxShadow: "0 28px 80px rgba(0,0,0,0.30)",
      }}
    >
      <div
        style={{
          order: reverse ? 2 : 1,
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 18%, rgba(210,181,139,0.10), transparent 34%), linear-gradient(180deg, rgba(12,15,18,1), rgba(5,6,8,1))",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "340px",
            height: "560px",
            borderRadius: "22px",
            overflow: "hidden",
            border: `1px solid ${colors.border}`,
            background: "#050607",
            boxShadow: "0 18px 50px rgba(0,0,0,0.36)",
          }}
        >
          <img
            src={character.image}
            alt={`${character.name} ${character.title}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              background: "#050607",
            }}
          />
        </div>
      </div>

      <div
        style={{
          order: reverse ? 1 : 2,
          padding: "34px 34px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: colors.gold,
            textTransform: "uppercase",
            letterSpacing: "0.20em",
            fontSize: "12px",
            marginBottom: "14px",
          }}
        >
          {character.faction}
        </div>

        <h3
          style={{
            margin: 0,
            fontSize: "clamp(38px, 5vw, 62px)",
            lineHeight: 0.96,
            fontWeight: 400,
            letterSpacing: "-0.04em",
          }}
        >
          {character.name}
        </h3>

        <p
          style={{
            margin: "10px 0 0",
            color: colors.gold,
            fontSize: "24px",
            lineHeight: 1.2,
          }}
        >
          {character.title}
        </p>

        <p
          style={{
            margin: "22px 0 0",
            color: colors.text,
            fontSize: "18px",
            lineHeight: 1.85,
          }}
        >
          {character.role}
        </p>

        <p
          style={{
            margin: "16px 0 0",
            color: colors.textSoft,
            fontSize: "17px",
            lineHeight: 1.95,
          }}
        >
          {character.summary}
        </p>

        <div
          style={{
            marginTop: "22px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
          }}
        >
          <div
            style={{
              border: `1px solid ${colors.border}`,
              borderRadius: "18px",
              padding: "18px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div
              style={{
                color: colors.gold,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "10px",
              }}
            >
              Symbol
            </div>
            <div
              style={{
                color: colors.textSoft,
                fontSize: "15px",
                lineHeight: 1.7,
              }}
            >
              {character.symbol}
            </div>
          </div>

          <div
            style={{
              border: `1px solid ${colors.border}`,
              borderRadius: "18px",
              padding: "18px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div
              style={{
                color: colors.gold,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "10px",
              }}
            >
              Arc
            </div>
            <div
              style={{
                color: colors.textSoft,
                fontSize: "15px",
                lineHeight: 1.7,
              }}
            >
              {character.arc}
            </div>
          </div>
        </div>

        <blockquote
          style={{
            margin: "24px 0 0",
            paddingLeft: "20px",
            borderLeft: "1px solid rgba(210,181,139,0.5)",
            color: colors.text,
            fontSize: "21px",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          “{character.keyLine}”
        </blockquote>
      </div>
    </article>
  );
}

function FooterCTA() {
  return (
    <section
      style={{
        padding: "0 0 110px",
      }}
    >
      <Container>
        <div
          style={{
            border: `1px solid ${colors.border}`,
            borderRadius: "30px",
            padding: "42px 34px",
            background:
              "linear-gradient(180deg, rgba(17,20,25,0.86), rgba(8,10,13,0.96))",
            textAlign: "center",
          }}
        >
          <Eyebrow>Next steps</Eyebrow>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(36px, 5vw, 58px)",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            Build the deeper archive next.
          </h2>
          <p
            style={{
              margin: "18px auto 0",
              maxWidth: "760px",
              color: colors.textSoft,
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            Once this landing page feels right, the next clean expansion is a
            dedicated Story page, Characters page, Lore page, and Descent page
            using this same visual language.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default function PhylaxPage() {
  return (
    <Shell>
      <TopNav />
      <PhylaxEasterEggs />
      <Hero />
      <FeatureGrid />
      <ThesisSection />
      <WorldSection />
      <CharacterSection />
      <FooterCTA />
    </Shell>
  );
}