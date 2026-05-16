"use client";

import React from "react";

export default function LeftPane() {
  return (
    <aside
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        width: "clamp(220px, 23vw, 272px)",
        height: "clamp(460px, 70vh, 662px)",
        background: "#FFFFFF",
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.04)",
        borderRadius: "32px",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* ─── TOP IMAGE COVER PREVIEW ─── */}
      <div
        style={{
          width: "100%",
          height: "clamp(140px, 28vh, 256px)",
          position: "relative",
          background: "#E2E8F0",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Render stunning internal green crop texture fallback drawing */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 30% 70%, #4ADE80 0%, #166534 100%)",
            opacity: 0.9,
          }}
        />
        {/* Subtle decorative curved pattern lines */}
        <svg width="100%" height="100%" viewBox="0 0 272 256" fill="none" style={{ position: "absolute", inset: 0, opacity: 0.2 }}>
          <path d="M0 50 Q 136 100, 272 20" stroke="#FFFFFF" strokeWidth="4" fill="none" />
          <path d="M0 150 Q 136 200, 272 120" stroke="#FFFFFF" strokeWidth="3" fill="none" />
          <path d="M50 0 L 50 256" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* ─── LOWER ASSET SPECS CONTAINER ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "clamp(16px, 2.5vh, 32px)",
          gap: "clamp(12px, 1.8vh, 24px)",
          width: "100%",
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        {/* Asset Meta Identification Row */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(4px, 0.8vh, 8px)", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
            {/* Small icon badge indicator */}
            <div
              style={{
                width: "12px",
                height: "12px",
                background: "#BCD225",
                borderRadius: "3px",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(9px, 1.1vh, 10px)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#45474C",
              }}
            >
              ASSET ID: SOS 01
            </span>
          </div>

          {/* Master Heading Title */}
          <h1
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(20px, 3.2vh, 30px)",
              lineHeight: "1.2",
              letterSpacing: "-0.75px",
              color: "#0F2F4C",
            }}
          >
            GLC SOS 01
          </h1>

          {/* Core Valuation Detail Strip */}
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(13px, 1.6vh, 16px)",
              color: "#45474C",
              lineHeight: "1.4",
            }}
          >
            320 Acres • ₹5.2 Cr Total Valuation
          </span>
        </div>

        {/* Breathtaking Internal Agent Advisory Lock Notice */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "clamp(14px, 2vh, 24px)",
            width: "100%",
            background: "#EEF6FF",
            border: "1px solid rgba(39, 128, 196, 0.1)",
            borderRadius: "16px",
            gap: "8px",
          }}
        >
          {/* Header Row containing small lock shield representation */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "16px",
                height: "16px",
                background: "#2780C4",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(11px, 1.3vh, 13px)",
                color: "#2780C4",
              }}
            >
              Documents Unlocked
            </span>
          </div>

          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(11px, 1.4vh, 14px)",
              lineHeight: "1.5",
              color: "#2780C4",
            }}
          >
            A Sales Executive has been assigned to your profile regarding this property.
          </span>
        </div>
      </div>
    </aside>
  );
}
