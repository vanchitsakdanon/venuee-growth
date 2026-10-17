import { ImageResponse } from "next/og";

export const alt = "Venuee — Start your growth engine.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0e0e0e",
          color: "#ededed",
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(5,200,134,0.25), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#05c886",
              boxShadow: "0 0 24px #05c886",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>venuee</div>
          <div style={{ fontSize: 20, color: "#05c886", marginLeft: 12 }}>
            {"// PERFORMANCE MARKETING"}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            Start your growth engine.
          </div>
          <div style={{ fontSize: 30, color: "#a1a1a1" }}>
            Spend → Revenue → Margin. Measured in baht, not impressions.
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 24, color: "#a1a1a1" }}>
          <span>฿200M+ ad spend / yr</span>
          <span>฿1,200M+ revenue with partners</span>
          <span>#2 Thai Independent Agency · Meta 2025</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
