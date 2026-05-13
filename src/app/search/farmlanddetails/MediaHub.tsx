"use client";

import React from "react";
import Image from "next/image";

interface MediaHubProps {
  primaryImage: string;
  title: string;
}

export default function MediaHub({ primaryImage, title }: MediaHubProps) {
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
      {/* 1. Primary Asset View Container (Height 480px, rounded 48px) */}
      <div
        style={{
          position: "relative",
          width: "764.41px",
          height: "480px",
          background: "rgba(255, 255, 255, 0.002)",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "48px",
          overflow: "hidden",
        }}
      >
        <img
          src={primaryImage}
          alt={`${title} Primary View`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={(e) => {
            e.currentTarget.src = "/assets/compareassets/farm1.jpg";
          }}
        />

        {/* Ambient overlay badge for enhanced UI feel */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            background: "rgba(15, 47, 76, 0.85)",
            backdropFilter: "blur(8px)",
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BCD225" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              color: "#FFFFFF",
              letterSpacing: "0.5px",
            }}
          >
            VERIFIED ASSET MEDIA
          </span>
        </div>
      </div>

      {/* 2. Secondary Mapping Module row (Height 256px side-by-side) */}
      <div
        style={{
          width: "764.41px",
          height: "256px",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* Left Module: GIS Topology Card */}
        <div
          style={{
            position: "relative",
            flex: 1,
            height: "256px",
            background: "#0F2F4C",
            borderRadius: "48px",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          {/* Decorative absolute GIS backdrop shape mapped to bottom left layout */}
          <div
            style={{
              position: "absolute",
              left: "-10px",
              bottom: "-20px",
              width: "220px",
              height: "180px",
              background: "rgba(25, 28, 29, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(16px)",
              borderRadius: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            {/* Illuminated Vector Polygon outline mimicking Parcel geometry */}
            <div
              style={{
                width: "120px",
                height: "100px",
                background: "rgba(39, 128, 196, 0.15)",
                border: "3.84px solid #2780C4",
                borderRadius: "16px",
                transform: "rotate(-10deg) skew(15deg)",
                filter: "drop-shadow(0px 0px 12px rgba(187, 211, 39, 0.6))",
              }}
            />
          </div>

          {/* Top Title Bar */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "28px",
                color: "#FFFFFF",
              }}
            >
              GIS Topology
            </span>
            {/* Square top indicator badge */}
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "#2780C4",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* Bottom Title Bar */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#CFE5FF",
                marginBottom: "2px",
              }}
            >
              GIS TOPOLOGY
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "28px",
                color: "#FFFFFF",
              }}
            >
              Parcel Outline
            </div>
          </div>
        </div>

        {/* Right Module: Road/Power Map Card */}
        <div
          style={{
            flex: 1,
            height: "256px",
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
          {/* Top Header Row with micro-tags */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
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
                CONNECTIVITY
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#0F2F4C",
                }}
              >
                Road/Power Map
              </span>
            </div>

            {/* Inline Micro Tag Capsules */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end", maxWidth: "150px" }}>
              <div
                style={{
                  background: "#EDEEEF",
                  borderRadius: "9999px",
                  padding: "4px 10px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "9px",
                  color: "#45474C",
                }}
              >
                HWY DIRECT
              </div>
              <div
                style={{
                  background: "#EDEEEF",
                  borderRadius: "9999px",
                  padding: "4px 10px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "9px",
                  color: "#45474C",
                }}
              >
                PAVED
              </div>
            </div>
          </div>

          {/* Mapped external visual snippet / line preview block */}
          <div
            style={{
              width: "100%",
              height: "117px",
              border: "1px solid #EDEEEF",
              borderRadius: "32px",
              background: "#FAFAFB",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Beautiful generic road vector graphics to mimic GIS line raster block */}
            <svg width="100%" height="100%" viewBox="0 0 300 117" fill="none">
              {/* Grid Background lines */}
              <line x1="0" y1="30" x2="300" y2="30" stroke="#E1E3E4" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="70" x2="300" y2="70" stroke="#E1E3E4" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="100" y1="0" x2="100" y2="117" stroke="#E1E3E4" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="200" y1="0" x2="200" y2="117" stroke="#E1E3E4" strokeWidth="1" strokeDasharray="4 4" />

              {/* Main vector route connections */}
              <path
                d="M-10 80 Q 80 10 160 60 T 320 20"
                stroke="#2780C4"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M-10 110 Q 120 100 180 30 T 320 90"
                stroke="#FF5200"
                strokeWidth="2.5"
                strokeDasharray="6 3"
                fill="none"
              />

              {/* Node highlights */}
              <circle cx="160" cy="60" r="6" fill="#0F2F4C" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="240" cy="40" r="6" fill="#BCD225" stroke="#FFFFFF" strokeWidth="2" />
            </svg>

            {/* Subdued map status overlay inside container */}
            <span
              style={{
                position: "absolute",
                bottom: "8px",
                right: "12px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "9px",
                color: "#75777D",
                background: "rgba(255, 255, 255, 0.8)",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              Satellite Layer Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
