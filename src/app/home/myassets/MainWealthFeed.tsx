"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MainWealthFeed() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"sole" | "fractional">("sole");
  const [hoveredBtn1, setHoveredBtn1] = useState(false);
  const [hoveredCertBtn, setHoveredCertBtn] = useState(false);

  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "48px",
        width: "1248px", // Clean wrapper accommodating left + right columns and gap
        maxWidth: "1280px",
        flexShrink: 0,
      }}
    >
      {/* ─── WEALTH HEADER SECTION ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: "24px",
          width: "100%",
        }}
      >
        {/* Massive 48px Indicator Heading */}
        <h2
          style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "48px",
            lineHeight: "48px",
            letterSpacing: "-1.2px",
            color: "#0F2F4C",
          }}
        >
          Total Asset Value: ₹1.85 Cr
        </h2>

        {/* Badge Capsules Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Badge 1: Total Holdings */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "8px 20px",
              gap: "8px",
              background: "#E7E8E9",
              borderRadius: "9999px",
            }}
          >
            {/* Native Inline CSS Proxy Icon */}
            <div style={{ width: "10.5px", height: "11.67px", background: "#45474C", borderRadius: "2px" }} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#45474C",
              }}
            >
              Total Holdings: 12.5 Acres
            </span>
          </div>

          {/* Badge 2: Active Vault */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "8px 20px",
              gap: "8px",
              background: "#E7E8E9",
              borderRadius: "9999px",
            }}
          >
            {/* Proxy Icon */}
            <div style={{ width: "12.83px", height: "10.5px", background: "#45474C", borderRadius: "2px" }} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#45474C",
              }}
            >
              Active Vault: 3 Properties
            </span>
          </div>
        </div>
      </div>

      {/* ─── BENTO FEED LAYOUT SPACE ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "32px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT COLUMN: SOLE OWNERSHIP FEED */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "32px",
            width: "790.39px",
            flexShrink: 0,
          }}
        >
          {/* Segmented Switch Control */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "6px",
              gap: "4px",
              background: "#F3F4F5",
              borderRadius: "9999px",
            }}
          >
            {/* Button Option 1 */}
            <button
              onClick={() => setActiveTab("sole")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 32px",
                height: "40px",
                background: activeTab === "sole" ? "#0F2F4C" : "transparent",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: activeTab === "sole" ? "0px 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: activeTab === "sole" ? 700 : 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: activeTab === "sole" ? "#FFFFFF" : "#45474C",
                }}
              >
                Sole Ownership
              </span>
            </button>

            {/* Button Option 2 */}
            <button
              onClick={() => setActiveTab("fractional")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 32px",
                height: "40px",
                background: activeTab === "fractional" ? "#0F2F4C" : "transparent",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: activeTab === "fractional" ? "0px 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: activeTab === "fractional" ? 700 : 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: activeTab === "fractional" ? "#FFFFFF" : "#45474C",
                }}
              >
                Fractional Assets
              </span>
            </button>
          </div>

          {/* PROPERTY CARD 1: MANAGED ASSET */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "32px",
              gap: "32px",
              width: "790.39px",
              height: "256px",
              background: "#FFFFFF",
              borderRadius: "32px",
              boxShadow: "0px 8px 40px rgba(9, 20, 38, 0.04)",
            }}
          >
            {/* Left Box Image container */}
            <div
              style={{
                position: "relative",
                width: "192px",
                height: "192px",
                borderRadius: "32px",
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,0.05)",
              }}
            >
              <Image
                src="/assets/home/YourListings/glcsos1.svg"
                alt="GLC SOS 01 Asset Preview"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Right Information Split framework */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "502.39px",
                height: "192px",
                flexGrow: 1,
              }}
            >
              {/* Stack Upper block */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                {/* Header row + status tag */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                  <h3
                    onClick={() => router.push("/home/myassets/details")}
                    style={{
                      margin: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#0F2F4C",
                      cursor: "pointer",
                    }}
                  >
                    GLC SOS 01
                  </h3>
                  {/* Sky Blue Active Organic Tag */}
                  <div
                    style={{
                      background: "#93C5FD",
                      borderRadius: "9999px",
                      padding: "4px 12px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "10px",
                        lineHeight: "15px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "#0F2F4C",
                      }}
                    >
                      ACTIVE: 50/50 ORGANIC YIELD
                    </span>
                  </div>
                </div>

                {/* Registration text breakdown */}
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#45474C",
                  }}
                >
                  5.0 Acres • Registered Dec 2025
                </span>

                {/* Valuation String */}
                <span
                  style={{
                    marginTop: "4px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "#0F2F4C",
                  }}
                >
                  Estimated Value: ₹1.20 Cr
                </span>
              </div>

              {/* Lower Controls Toolbar */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                {/* Left side circular utility icon shortcuts */}
                <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                  <div style={{ width: "40px", height: "40px", background: "#F3F4F5", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "14px", height: "16px", border: "1.5px solid #0F2F4C", borderRadius: "2px" }} />
                  </div>
                  <div style={{ width: "40px", height: "40px", background: "#F3F4F5", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "16px", height: "16px", border: "1.5px solid #0F2F4C", borderRadius: "8px" }} />
                  </div>
                </div>

                {/* Primary Tracking Button */}
                <button
                  onClick={() => router.push("/home/myassets/details")}
                  onMouseEnter={() => setHoveredBtn1(true)}
                  onMouseLeave={() => setHoveredBtn1(false)}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 24px",
                    height: "40px",
                    background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s ease",
                    opacity: hoveredBtn1 ? 0.9 : 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "20px",
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Track Yield Payouts
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* PROPERTY CARD 2: BARE LAND ASSET */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "32px",
              gap: "32px",
              width: "790.39px",
              height: "256px",
              background: "#FFFFFF",
              borderRadius: "32px",
              boxShadow: "0px 8px 40px rgba(9, 20, 38, 0.04)",
            }}
          >
            {/* Left Framework container */}
            <div
              style={{
                position: "relative",
                width: "192px",
                height: "192px",
                borderRadius: "32px",
                background: "#F3F4F5",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src="/assets/my-assets/image2.1.svg"
                alt="GLC SOS 02 Asset Preview"
                fill
                style={{ objectFit: "cover", opacity: 0.8 }}
              />
            </div>

            {/* Right Data Array */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "502.39px",
                height: "192px",
                flexGrow: 1,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#0F2F4C",
                    }}
                  >
                    GLC SOS 02
                  </h3>
                  {/* Gray Neutral Badge */}
                  <div style={{ background: "#E7E8E9", borderRadius: "9999px", padding: "4px 12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", color: "#45474C" }}>
                      UNMANAGED
                    </span>
                  </div>
                </div>

                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>
                  2.5 Acres • Registered Jan 2026
                </span>

                <span style={{ marginTop: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>
                  Value: ₹45.00 L
                </span>
              </div>

              {/* Dynamic Shortcut link text */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#00629E",
                  }}
                >
                  Request Add-On Services
                </span>
                {/* Arrow Caret Inline */}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#00629E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* PROPERTY CARD 3: BARE LAND ASSET */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "32px",
              gap: "32px",
              width: "790.39px",
              height: "256px",
              background: "#FFFFFF",
              borderRadius: "32px",
              boxShadow: "0px 8px 40px rgba(9, 20, 38, 0.04)",
            }}
          >
            {/* Left box container */}
            <div
              style={{
                position: "relative",
                width: "192px",
                height: "192px",
                borderRadius: "32px",
                background: "#F3F4F5",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src="/assets/my-assets/image2.2.svg"
                alt="GLC SOS 03 Preview"
                fill
                style={{ objectFit: "cover", opacity: 0.8 }}
              />
            </div>

            {/* Right stack info */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "502.39px",
                height: "192px",
                flexGrow: 1,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#0F2F4C",
                    }}
                  >
                    GLC SOS 03
                  </h3>
                  <div style={{ background: "#E7E8E9", borderRadius: "9999px", padding: "4px 12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", color: "#45474C" }}>
                      UNMANAGED
                    </span>
                  </div>
                </div>

                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>
                  2.5 Acres • Registered Jan 2026
                </span>

                <span style={{ marginTop: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>
                  Value: ₹45.00 L
                </span>
              </div>

              {/* Dynamic shortcut link */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#00629E",
                  }}
                >
                  Request Add-On Services
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#00629E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ─── ASIDE RIGHT COLUMN: SIDEBAR WIDGETS ─── */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "32px",
            width: "425.59px",
            flexShrink: 0,
          }}
        >
          {/* Widget 1: Fractional Holdings Tracker */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              gap: "24px",
              width: "425.59px",
              background: "#FFFFFF",
              border: "1px solid rgba(197, 198, 205, 0.1)",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "32px",
            }}
          >
            {/* Category text heading */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#0F2F4C" }}>
                ACTIVE POOL INVESTMENTS
              </span>
              <div style={{ width: "20px", height: "20px", borderRadius: "10px", background: "#00629E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "6px", height: "6px", background: "#FFFFFF", borderRadius: "3px" }} />
              </div>
            </div>

            {/* Main title stack breakdown */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>
                Premium Timber Estate
              </h3>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", width: "100%" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#45474C" }}>
                  2.1 Acres / ₹50,00,000
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>
                  100% Funded
                </span>
              </div>
            </div>

            {/* Gradient progress track line */}
            <div style={{ width: "100%", height: "8px", background: "#EDEEEF", borderRadius: "9999px", overflow: "hidden" }}>
              <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #2780C4 0%, #93C5FD 100%)", borderRadius: "9999px" }} />
            </div>

            {/* Outline validation trigger button */}
            <button
              onClick={() => router.push("/pool-buying/pooldetails")}
              onMouseEnter={() => setHoveredCertBtn(true)}
              onMouseLeave={() => setHoveredCertBtn(false)}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "46px",
                background: hoveredCertBtn ? "#F8F9FA" : "transparent",
                border: "1px solid #75777D",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C", letterSpacing: "0.5px" }}>
                VIEW POOL DETAILS
              </span>
            </button>
          </div>

          {/* Widget 2: Security Digital Vault module */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              width: "425.59px",
              background: "#CFE5FF",
              borderRadius: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Absolute accent radial glow inside container */}
            <div
              style={{
                position: "absolute",
                width: "192px",
                height: "192px",
                right: "-48px",
                bottom: "-47px",
                background: "rgba(105, 182, 254, 0.2)",
                filter: "blur(32px)",
                borderRadius: "9999px",
                zIndex: 0,
              }}
            />

            {/* Content sitting cleanly above glow */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: 1, width: "100%" }}>
              {/* Lock Icon circle container */}
              <div style={{ width: "48px", height: "48px", background: "#0F2F4C", borderRadius: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Embedded Inline SVG padlock */}
                <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>

              <h4 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#001D34" }}>
                Secured in Digital Vault
              </h4>

              <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#004A78" }}>
                All your property documents and certificates are encrypted and stored in our ISO-certified digital vault.
              </p>

              {/* Contact routing text */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", marginTop: "4px", cursor: "pointer" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "14px", color: "#0F2F4C" }}>
                  Contact Wealth Manager
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#0F2F4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Widget 3: Asset Breakdown Micro-Card */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "24px",
              gap: "16px",
              width: "425.59px",
              height: "96px",
              background: "#F2F2F2",
              borderRadius: "32px",
            }}
          >
            {/* White Circular capsule slot */}
            <div style={{ width: "48px", height: "48px", background: "#FFFFFF", borderRadius: "9999px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "16px", color: "#0F2F4C" }}>
                %
              </span>
            </div>

            {/* Return breakdown typography */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.6px", color: "#45474C" }}>
                TOTAL RETURN REALIZED
              </span>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: "6px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C" }}>
                  +12.4% avg
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
