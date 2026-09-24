import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #172033 0%, #087BFF 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#7DBAFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#172033",
            }}
          >
            S
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#ffffff" }}>Spottly</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 56, fontWeight: 700, color: "#ffffff", lineHeight: 1.15 }}>{title}</div>
          <div style={{ fontSize: 28, color: "#B8DAFF" }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#7DBAFF" }}>
          House Cleaning in Los Angeles &middot; www.spottly.co
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
