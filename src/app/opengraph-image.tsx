import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const stack = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AI Workflow"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#03060a",
          color: "#f8fafc",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,212,255,0.16) 1px, transparent 1px), linear-gradient(180deg, rgba(16,185,129,0.12) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 70,
            top: 58,
            right: 70,
            bottom: 58,
            border: "1px solid rgba(0,212,255,0.34)",
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.13), rgba(16,185,129,0.06), rgba(245,158,11,0.08))",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 124,
            top: 120,
            width: 420,
            height: 260,
            border: "1px solid rgba(0,212,255,0.38)",
            borderRadius: 999,
            transform: "rotate(-8deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 154,
            top: 160,
            width: 360,
            height: 210,
            border: "1px solid rgba(245,158,11,0.34)",
            borderRadius: 999,
            transform: "rotate(7deg)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "74px 88px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#00d4ff",
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            NQC / Fullstack JavaScript Developer
          </div>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              flexDirection: "column",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: -2,
            }}
          >
            <span style={{ fontSize: 92, color: "#f8fafc" }}>Nguyen</span>
            <span
              style={{
                fontSize: 112,
                color: "#00d4ff",
                textShadow: "8px 0 #10b981, 16px 0 #f59e0b",
              }}
            >
              Quoc Cuong
            </span>
          </div>

          <div
            style={{
              marginTop: 34,
              display: "flex",
              maxWidth: 730,
              color: "rgba(248,250,252,0.72)",
              fontSize: 30,
              lineHeight: 1.32,
            }}
          >
            React / Next.js, Node.js, MongoDB, Web3, AI-native workflow, and
            product signal from 1.8M+ YouTube subscribers.
          </div>

          <div style={{ marginTop: 42, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {stack.map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(0,212,255,0.3)",
                  background: "rgba(0,212,255,0.08)",
                  color: "#7de7ff",
                  padding: "10px 16px",
                  borderRadius: 10,
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
