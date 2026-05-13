"use client";

import React from "react";

interface StickySidebarRightProps {
  title?: string;
  price?: string;
  locationSubtitle?: string;
}

export default function StickySidebarRight({
  title = "GLC SOS 01",
  price = "₹5.2 Cr",
  locationSubtitle = "Tanuku, Andhra Pradesh",
}: StickySidebarRightProps) {
  return (
    <aside
      style={{
        width: "411.59px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flexShrink: 0,
      }}
    >
      {/* 1. Financial Anchor Card */}
      <div
        style={{
          width: "100%",
          background: "#FFFFFF",
          border: "1px solid rgba(237, 238, 239, 0.5)",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "48px",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        {/* Title stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: "-0.6px",
              color: "#262C00",
              margin: 0,
            }}
          >
            {title}
          </h2>

          {/* Subtitle location with dark map marker */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#45474C",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {locationSubtitle}
            </span>
          </div>
        </div>

        {/* Massive 48px Price module */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#45474C",
            }}
          >
            ESTIMATED CAPITAL REQUIRED
          </span>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "48px",
              lineHeight: "48px",
              letterSpacing: "-2.4px",
              color: "#0F2F4C",
            }}
          >
            {price}
          </span>
        </div>

        {/* Call to action stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Primary Action Button */}
          <button
            onClick={() => {
              alert(`Escrow initialization requested for ${title}. Designated officer notified.`);
            }}
            style={{
              width: "100%",
              height: "56px",
              background: "#0F2F4C",
              borderRadius: "48px",
              border: "none",
              color: "#FFFFFF",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
              transition: "opacity 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Reserve Farmland
          </button>

          {/* Secondary Action Button */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Farmland listing URL successfully copied to clipboard.");
            }}
            style={{
              width: "100%",
              height: "58px",
              backgroundColor: "transparent",
              border: "1px solid #C5C6CD",
              borderRadius: "48px",
              color: "#45474C",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#F8F9FA")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Share Details
          </button>
        </div>
      </div>

      {/* 2. Premium Access Module */}
      <div
        style={{
          width: "100%",
          background: "#091426",
          borderRadius: "48px",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Concentric Double Border Rings hosting custom Lock icon */}
        <div
          style={{
            position: "relative",
            width: "96px",
            height: "96px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Outer ring */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "2px solid #69B6FE",
              opacity: 0.2,
              borderRadius: "9999px",
            }}
          />
          {/* Inner ring */}
          <div
            style={{
              position: "absolute",
              inset: "16px",
              border: "2px solid #2780C4",
              borderRadius: "9999px",
            }}
          />
          {/* Lock Icon */}
          <svg
            width="24"
            height="31"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            style={{ zIndex: 1 }}
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        {/* Headings */}
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Verified Legal Dossier Locked
        </span>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: "13.5px",
            lineHeight: "22px",
            color: "#8590A6",
            textAlign: "center",
            marginBottom: "24px",
            maxWidth: "300px",
          }}
        >
          Premium soil reports, mutation records, and regional water permissions are strictly secured.
        </span>

        {/* Bright Blue CTA Button */}
        <button
          onClick={() => {
            alert("Verification layer unlocked. Downloading proprietary legal dossier compressed package.");
          }}
          style={{
            width: "100%",
            height: "56px",
            background: "#2780C4",
            borderRadius: "48px",
            border: "none",
            color: "#FFFFFF",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            boxShadow: "0px 4px 12px rgba(39, 128, 196, 0.3)",
          }}
        >
          <span>Unlock All Documents</span>
        </button>
      </div>

      {/* 3. Base Reusable Workflow CTA button */}
      <button
        onClick={() => {
          alert("Opening document integrity matrix inside secure overlay window.");
        }}
        style={{
          width: "100%",
          height: "64px",
          background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
          borderRadius: "48px",
          border: "none",
          color: "#FFFFFF",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
      >
        View Verified Docs
      </button>
    </aside>
  );
}
