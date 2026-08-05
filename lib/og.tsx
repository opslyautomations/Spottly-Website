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
          background: "linear-gradient(135deg, #0B2545 0%, #1D4ED8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#93C5FD",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#0B2545",
            }}
          >
            S
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#ffffff" }}>Spottly</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 56, fontWeight: 700, color: "#ffffff", lineHeight: 1.15 }}>{title}</div>
          <div style={{ fontSize: 28, color: "#BFDBFE" }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#93C5FD" }}>
          House Cleaning in Los Angeles &middot; www.spottly.co
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
