"use client";

import React from "react";

interface LandSpecificationsBentoProps {
  areaProp?: string;
  boreDepthProp?: string;
  efficiencyProp?: string;
  soilQualityProp?: string;
}

export default function LandSpecificationsBento({
  areaProp = "320 Acres",
  boreDepthProp = "100m",
  efficiencyProp = "High Yield",
  soilQualityProp = "Red Laterite",
}: LandSpecificationsBentoProps) {
  return (
    <div
      style={{
        width: "764.41px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flexShrink: 0,
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "32px",
          letterSpacing: "-0.6px",
          color: "#0F2F4C",
          margin: 0,
        }}
      >
        Land Specifications
      </h2>

      {/* Bento Cards Row Container */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Card 1: TOTAL AREA */}
        <div
          style={{
            flex: 1,
            minHeight: "155px",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          {/* Background Icon Wrapper */}
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#CFE5FF",
              borderRadius: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* Custom SVG Icon - Ruler/Angle */}
            <svg width="17.02" height="17.02" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z" />
              <polyline points="15 3 15 8 21 8" />
              <path d="M7 17h5" />
              <path d="M7 13h10" />
              <path d="M7 9h4" />
            </svg>
          </div>

          {/* Bottom Labels Container */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 0, gap: 0, width: "100%" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#45474C",
                width: "100%",
              }}
            >
              TOTAL AREA
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#0F2F4C",
                width: "100%",
              }}
            >
              {areaProp}
            </span>
          </div>
        </div>

        {/* Card 2: BORE DEPTH */}
        <div
          style={{
            flex: 1,
            minHeight: "155px",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          {/* Background Icon Wrapper */}
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#CFE5FF",
              borderRadius: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* Water Drop Icon */}
            <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>

          {/* Bottom Labels Container */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 0, gap: 0, width: "100%" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#45474C",
                width: "100%",
              }}
            >
              BORE DEPTH
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#0F2F4C",
                width: "100%",
              }}
            >
              {boreDepthProp}
            </span>
          </div>
        </div>

        {/* Card 3: EFFICIENCY */}
        <div
          style={{
            flex: 1,
            minHeight: "155px",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          {/* Background Icon Wrapper */}
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#CFE5FF",
              borderRadius: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* Efficiency Sparkline Icon */}
            <svg width="20" height="13" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>

          {/* Bottom Labels Container */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 0, gap: 0, width: "100%" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#45474C",
                width: "100%",
              }}
            >
              EFFICIENCY
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#0F2F4C",
                width: "100%",
              }}
            >
              {efficiencyProp}
            </span>
          </div>
        </div>

        {/* Card 4: SOIL QUALITY */}
        <div
          style={{
            flex: 1,
            minHeight: "155px",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          {/* Background Icon Wrapper */}
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#CFE5FF",
              borderRadius: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* Layered/Stack Icon */}
            <svg width="18" height="19.05" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>

          {/* Bottom Labels Container */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 0, gap: 0, width: "100%" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#45474C",
                width: "100%",
              }}
            >
              SOIL QUALITY
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#0F2F4C",
                width: "100%",
              }}
            >
              {soilQualityProp}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
