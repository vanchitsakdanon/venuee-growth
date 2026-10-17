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
          background: "#171717",
          color: "#ededed",
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(62,207,142,0.22), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#3ecf8e",
              boxShadow: "0 0 24px #3ecf8e",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>venuee</div>
          <div style={{ fontSize: 20, color: "#3ecf8e", marginLeft: 12 }}>
            {"// PERFORMANCE MARKETING"}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -1, lineHeight: 1.05 }}>
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
