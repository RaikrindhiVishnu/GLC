"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FilterPropertiesModal from "./compare/FilterPropertiesModal";

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
  const router = useRouter();
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

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
          width: "411.59px",
          background: "#FFFFFF",
          border: "1px solid rgba(237, 238, 239, 0.5)",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "48px",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Title stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
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

          {/* Subtitle location */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div style={{ width: "9.33px", height: "11.67px", display: "flex", alignItems: "center" }}>
               <svg width="10" height="12" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#45474C",
              }}
            >
              {locationSubtitle}
            </span>
          </div>
        </div>

        {/* Price module */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4.5px" }}>
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
            VALUATION
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

        {/* Buttons stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            onClick={() => setIsCompareModalOpen(true)}
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
            }}
          >
            Compare Asset
          </button>

          <button
            style={{
              width: "100%",
              height: "58px",
              background: "transparent",
              border: "1px solid #C5C6CD",
              borderRadius: "48px",
              color: "#45474C",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Share Details
          </button>
        </div>
      </div>

      {/* 2. Premium Access Module */}
      <div
        style={{
          width: "411.59px",
          background: "#091426",
          borderRadius: "48px",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          isolation: "isolate",
        }}
      >
        {/* Lock Icon Module */}
        <div
          style={{
            position: "relative",
            width: "96px",
            height: "96px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.2,
              border: "2px solid #69B6FE",
              borderRadius: "9999px",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "16px",
              border: "2px solid #2780C4",
              borderRadius: "9999px",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="24" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "28px",
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
            fontSize: "14px",
            lineHeight: "23px",
            color: "#8590A6",
            textAlign: "center",
            marginBottom: "24px",
            maxWidth: "333px",
          }}
        >
          Access survey numbers, ownership history, and soil reports.
        </span>

        {/* Unlock Button */}
        <button
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
          }}
        >
          Unlock All Documents
        </button>
      </div>

      {/* 3. Workflow CTA Button */}
      <button
        style={{
          width: "411.59px",
          height: "64px",
          background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
          borderRadius: "48px",
          border: "none",
          color: "#FFFFFF",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
        }}
      >
        View Verified Docs
      </button>

      <FilterPropertiesModal 
        isOpen={isCompareModalOpen} 
        onClose={() => setIsCompareModalOpen(false)} 
      />
    </aside>
  );
}
