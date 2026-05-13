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

      {/* Bento Cards Row Container (Height 155px) */}
      <div
        style={{
          width: "100%",
          height: "155px",
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Card 1: TOTAL AREA */}
        <div
          style={{
            flex: 1,
            height: "155px",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
            }}
          >
            {/* Custom SVG Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>

          {/* Bottom Labels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#45474C",
              }}
            >
              TOTAL AREA
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "24px",
                color: "#0F2F4C",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
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
            height: "155px",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
            }}
          >
            {/* Water Drop Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>

          {/* Bottom Labels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#45474C",
              }}
            >
              BORE DEPTH
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "24px",
                color: "#0F2F4C",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
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
            height: "155px",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
            }}
          >
            {/* Efficiency / Activity Sparkline Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>

          {/* Bottom Labels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#45474C",
              }}
            >
              EFFICIENCY
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "24px",
                color: "#0F2F4C",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
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
            height: "155px",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
            }}
          >
            {/* Leaf / Soil Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" />
            </svg>
          </div>

          {/* Bottom Labels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#45474C",
              }}
            >
              SOIL QUALITY
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "24px",
                color: "#0F2F4C",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
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
