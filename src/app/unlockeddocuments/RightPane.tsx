"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function RightPane() {
  const router = useRouter();

  return (
    <aside
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "clamp(20px, 2.8vh, 32px)",
        width: "clamp(200px, 23vw, 272px)",
        background: "#0F2F4C",
        borderRadius: "32px",
        gap: "clamp(12px, 1.8vh, 16px)",
        height: "fit-content",
        flexShrink: 0,
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.04)",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(15px, 2vh, 18px)",
          color: "#FFFFFF",
        }}
      >
        Need legal help?
      </h3>

      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 400,
          fontSize: "clamp(12px, 1.5vh, 14px)",
          lineHeight: "1.4",
          color: "#A5CCF2",
          opacity: 0.9,
        }}
      >
        Our in-house advocates can help with local documentation.
      </span>

      {/* Trailing action link button triggering direct support center engagement */}
      <button
        onClick={() => router.push("/home/supportcenter")}
        style={{
          background: "transparent",
          border: "none",
          padding: "clamp(8px, 1vh, 16px) 0 0 0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(11px, 1.4vh, 14px)",
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "#A5CCF2",
          }}
        >
          CHAT WITH SUPPORT
        </span>
        <span style={{ color: "#A5CCF2", fontSize: "14px", fontWeight: "bold" }}>→</span>
      </button>
    </aside>
  );
}
