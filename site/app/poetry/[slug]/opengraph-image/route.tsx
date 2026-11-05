import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getVisiblePoem } from "../../../lib/poetry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const size = { width: 1200, height: 630 };
export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  },
) {
  const poem = await getVisiblePoem((await params).slug);
  if (!poem) notFound();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F0DFC0",
          color: "#171B28",
          padding: "65px 80px",
          border: "8px solid #B88854",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 5 }}>
          PARALLAX HEARTS · CROWN OF PHASES
        </div>
        <div
          style={{
            fontSize: poem.title.length > 25 ? 74 : 96,
            lineHeight: 1.1,
          }}
        >
          {poem.title}
        </div>
        <div style={{ fontSize: 28 }}>A poem by Chad Thompson</div>
      </div>
    ),
    { ...size, headers: { "Cache-Control": "private, no-store" } },
  );
}
