"use client";

import React, { useState } from "react";

export default function GamificationBanner() {
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "64px 48px 48px",
        width: "1216px",
        height: "247px",
        background: "#091426",
        borderRadius: "48px",
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Glow Effect */}
      <div
        style={{
          position: "absolute",
          width: "384px",
          height: "384px",
          right: "-96px",
          top: "-80px",
          background: "#2780C4",
          opacity: 0.1,
          filter: "blur(50px)",
          borderRadius: "9999px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Left Container Stack */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px",
          gap: "8px",
          width: "422.25px",
          height: "135px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Background pill */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "4px 12px",
            width: "160.31px",
            height: "23px",
            background: "#2780C4",
            borderRadius: "9999px",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: "136.31px",
              height: "15px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "10px",
              lineHeight: "15px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#191E00",
            }}
          >
            TIER: DIGITAL CURATOR
          </span>
        </div>

        {/* Heading 2 Container */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "8px 0px 0px",
            width: "422.25px",
            height: "48px",
            alignSelf: "stretch",
          }}
        >
          <span
            style={{
              width: "380.2px",
              height: "40px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "40px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "-0.9px",
              color: "#FFFFFF",
            }}
          >
            Elite Yield Acceleration
          </span>
        </div>

        {/* Text Description Stack Container */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            width: "422.25px",
            maxWidth: "448px",
            height: "48px",
            alignSelf: "stretch",
          }}
        >
          <span
            style={{
              width: "422.25px",
              height: "48px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              display: "block", // Block display supports clean line breaks
              color: "#BCC7DE",
            }}
          >
            Your portfolio has reached the curator threshold. Access <br />
            2.5% bonus yield on your next land acquisition.
          </span>
        </div>
      </div>

      {/* Button Wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        <button
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 32px",
            isolation: "isolate",
            width: "204px",
            height: "56px",
            background: hoveredBtn ? "#1F69A4" : "#2780C4",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            position: "relative",
            transition: "all 0.2s ease",
            transform: hoveredBtn ? "scale(1.02)" : "scale(1)",
          }}
        >
          {/* Button:shadow layer element */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255, 255, 255, 0.002)",
              boxShadow: "0px 25px 50px -12px rgba(39, 128, 196, 0.2)",
              borderRadius: "6px",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          <span
            style={{
              width: "140px",
              height: "24px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "16px",
              lineHeight: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#FFFFFF",
              position: "relative",
              zIndex: 1,
            }}
          >
            Claim Bonus Yield
          </span>
        </button>
      </div>
    </div>
  );
}
