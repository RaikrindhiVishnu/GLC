"use client";

import React, { useState } from "react";

export default function RightConsole() {
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <aside
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: 0,
        width: "492px",
        height: "898px",
        flexShrink: 0,
      }}
    >
      {/* ─── CARD 1: FUNDING PROGRESS CARD ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "32px",
          gap: "32px",
          width: "492px",
          height: "162px",
          background: "#FFFFFF",
          border: "1px solid #F3F4F5",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "32px",
          flex: "none",
        }}
      >
        {/* Radial Meter Visual Frame */}
        <div
          style={{
            position: "relative",
            width: "96px",
            height: "96px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Native SVG Circular Chart */}
          <svg width="96" height="96" viewBox="0 0 96 96" style={{ transform: "rotate(-90deg)" }}>
            {/* Background Track Ring */}
            <circle
              cx="48"
              cy="48"
              r="36"
              fill="none"
              stroke="#EDEEEF"
              strokeWidth="12"
            />
            {/* Active Progress Ring representing exactly 75% */}
            <circle
              cx="48"
              cy="48"
              r="36"
              fill="none"
              stroke="#091426"
              strokeWidth="12"
              strokeDasharray="226.19"
              strokeDashoffset="56.55" // 25% empty
              strokeLinecap="round"
            />
          </svg>
          {/* Inner Percentage Value Indicator */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#091426",
              }}
            >
              75%
            </span>
          </div>
        </div>

        {/* Text Breakdown Layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            width: "298px",
            flexGrow: 1,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-0.4px",
              color: "#131600",
            }}
          >
            Funding Progress
          </h3>

          {/* Metrics Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
            {/* Row 1: Funded */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>
                Funded
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#131600" }}>
                ₹3.75 Cr
              </span>
            </div>
            {/* Row 2: Remaining */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>
                Remaining
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#131600" }}>
                ₹1.25 Cr
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CARD 2: TERMS CARD ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "8px",
          width: "492px",
          background: "#FFFFFF",
          border: "1px solid #F3F4F5",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "32px",
          flex: "none",
        }}
      >
        {/* Inner Padding Frame */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "24px",
            width: "100%",
            background: "#FFFFFF",
            borderRadius: "48px",
          }}
        >
          {/* Header Title */}
          <div style={{ paddingBottom: "16px", width: "100%" }}>
            <h3
              style={{
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.4px",
                color: "#131600",
              }}
            >
              Investment Terms
            </h3>
          </div>

          {/* Styled Border List Module */}
          <div
            style={{
              boxSizing: "border-box",
              width: "100%",
              background: "#FFFFFF",
              border: "1px solid rgba(197, 198, 205, 0.1)",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "48px",
              overflow: "hidden",
            }}
          >
            {/* Row 1: Target Yield */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>
                Target Yield
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#2780C4" }}>
                14% p.a.
              </span>
            </div>

            {/* Row 2: Min Investment */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                borderTop: "1px solid rgba(197, 198, 205, 0.2)",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>
                Min. Investment
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#131600" }}>
                ₹25,00,000
              </span>
            </div>

            {/* Row 3: Asset ID */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                borderTop: "1px solid rgba(197, 198, 205, 0.2)",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>
                Asset ID
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "14px", color: "#131600" }}>
                GLC SOS 01
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CARD 3: ESCROW CHECKOUT CARD ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "32px",
          gap: "32px",
          width: "492px",
          background: "#091426",
          borderRadius: "32px",
          boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          position: "relative",
          flex: "none",
        }}
      >
        {/* Protection Shield Context Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            width: "100%",
          }}
        >
          {/* Glass Overlay Circle */}
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>

          {/* Label Stack */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF" }}>
              100% Protected
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#8590A6" }}>
              Institutional Escrow
            </span>
          </div>
        </div>

        {/* Pricing Layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#8590A6",
            }}
          >
            TOTAL INVESTMENT
          </span>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: "8px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                fontSize: "36px",
                lineHeight: "40px",
                color: "#FFFFFF",
              }}
            >
              ₹25,00,000
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#8590A6" }}>
              per seat
            </span>
          </div>
        </div>

        {/* Dynamic Action Checkout Button */}
        <button
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0px",
            width: "100%",
            height: "68px",
            background: hoveredBtn ? "rgba(255, 255, 255, 0.15)" : "transparent",
            border: "1px solid #FFFFFF",
            borderRadius: "48px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: hoveredBtn ? "0px 8px 25px rgba(255, 255, 255, 0.1)" : "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              color: "#FFFFFF",
              letterSpacing: "-0.45px",
            }}
          >
            Claim Final Plot
          </span>
        </button>

        {/* Disclaimer Bottom Text */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "10px",
              lineHeight: "16px",
              textAlign: "center",
              color: "rgba(133, 144, 166, 0.6)",
              maxWidth: "420px",
            }}
          >
            * Funds are held securely in escrow until legal verification and land registry transfer are complete.
          </span>
        </div>
      </div>
    </aside>
  );
}
