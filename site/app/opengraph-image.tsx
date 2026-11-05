import { ImageResponse } from "next/og";

export const alt =
  "Parallax Hearts — Crown of Phases. Poetry, music, stories and visual work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1021",
          color: "#F4F0E9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "65px 80px",
          justifyContent: "space-between",
          border: "2px solid #B88854",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 8 }}>PARALLAX HEARTS</div>
        <div style={{ fontSize: 108, lineHeight: 1.05 }}>Crown of Phases</div>
        <div
          style={{
            fontSize: 28,
            color: "#F0DFC0",
            borderTop: "1px solid #B88854",
            paddingTop: 25,
          }}
        >
          Poetry · Music · Stories · Art
        </div>
      </div>
    ),
    size,
  );
}
