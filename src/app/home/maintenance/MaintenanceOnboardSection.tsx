"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MaintenanceOnboardSection() {
  const router = useRouter();
  
  // Local state for Owner Details inputs
  const [formData, setFormData] = useState({
    fullName: "",
    code: "+91",
    contactNumber: "",
    email: "",
  });

  // Modal display active trigger hook mapping the Request Submitted screen
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("submitted=true")) {
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Directly route to the Maintenance Services hub upon submitting land details
    router.push("/home/maintenance/services");
  };

  return (
    <section
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        width: "1216px",
        maxWidth: "100%",
        margin: "0 auto 100px",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* ─── SECTION HEADER ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          height: "97px",
          marginBottom: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "15.25px",
            width: "520px",
            maxWidth: "768px",
          }}
        >
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
            Onboard your Asset
          </h2>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "32px",
              color: "#45474C",
            }}
          >
            Initialize your land discovery and management journey.
          </span>
        </div>
      </div>

      {/* ─── PHASE 01 PANEL CONTAINER (SPLIT LAYOUT) ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
          width: "100%",
          height: "513px",
          gap: "48px",
        }}
      >
        {/* LEFT COLUMN: Map Component Engine Preview */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0px 0px 48px",
            background: "#FFFFFF",
            boxShadow: "40px 0px 40px rgba(9, 20, 38, 0.04)",
            borderRadius: "48px",
            width: "592px",
            height: "513px",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
          }}
        >
          {/* Topographic Contour Texture Backdrop matching absolute grayscale token preview */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#F1F5F9",
              zIndex: 0,
            }}
          >
            {/* Native SVG drawing beautiful intersecting valley/mountain ridge topological lines */}
            <svg width="100%" height="100%" viewBox="0 0 592 513" fill="none" preserveAspectRatio="none" style={{ opacity: 0.8 }}>
              {/* Ground Base Texture */}
              <rect width="592" height="513" fill="#E2E8F0" />
              {/* Layered Ridge Geometries mimicking absolute screen dump textures */}
              <path d="M0 120 Q 150 100, 300 250 T 592 180 L 592 513 L 0 513 Z" fill="#CBD5E1" opacity="0.6" />
              <path d="M0 220 Q 180 190, 350 350 T 592 300 L 592 513 L 0 513 Z" fill="#94A3B8" opacity="0.4" />
              <path d="M100 0 Q 250 300, 592 400 L 592 0 Z" fill="#F8FAFC" opacity="0.5" />
              {/* Detailed Contour Topology linear strips */}
              <path d="M-50 50 C 150 200, 400 100, 650 300" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.9" />
              <path d="M-50 150 C 200 300, 350 200, 650 450" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M100 -50 C 200 200, 500 350, 550 550" stroke="#E2E8F0" strokeWidth="4" fill="none" opacity="0.8" />
              <path d="M250 -50 C 300 250, 450 450, 400 550" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.6" />
            </svg>
          </div>

          {/* Shading Layer Overlay Gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.6) 100%)",
              zIndex: 1,
            }}
          />

          {/* Overlaid Button and Tag controls precisely mapped to bottom spacing dump */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              zIndex: 5,
              position: "relative",
            }}
          >
            {/* Button: DROP GPS PIN TO LOCATE */}
            <button
              onClick={() => alert("Calibrating on-ground satellite geolocation coordinate pin map layout...")}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "16px 32px",
                gap: "12px",
                width: "305.19px",
                height: "56px",
                background: "#0F2F4C",
                borderRadius: "9999px",
                border: "none",
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
                cursor: "pointer",
                justifyContent: "center",
              }}
            >
              {/* Icon slot */}
              <div style={{ width: "16px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#FFFFFF",
                  letterSpacing: "0.4px",
                }}
              >
                DROP GPS PIN TO LOCATE
              </span>
            </button>

            {/* Tag Overlay Blur Container */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 16px",
                width: "238.88px",
                height: "32px",
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                borderRadius: "9999px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "rgba(9, 20, 38, 0.6)",
                }}
              >
                GEOSPATIAL PRECISION REQUIRED
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Owner Details Native Form Control Card */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "40px",
            background: "#FFFFFF",
            boxShadow: "40px 0px 40px rgba(9, 20, 38, 0.04)",
            borderRadius: "48px",
            width: "576px",
            height: "513px",
          }}
        >
          <form onSubmit={handleSubmit} style={{ width: "512px", maxWidth: "100%", display: "flex", flexDirection: "column" }}>
            
            {/* Header Title Layer Margin Block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "512px", height: "44px", marginBottom: "24px" }}>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "-1.2px",
                  color: "#0F2F4C",
                  textTransform: "uppercase",
                }}
              >
                OWNER DETAILS
              </h3>
              {/* Underline bar token */}
              <div style={{ width: "48px", height: "4px", background: "#2780C4" }} />
            </div>

            {/* Fields Outer Vertical Stack Container */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "512px", height: "283px" }}>
              
              {/* Field 1: FULL LEGAL NAME */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "512px", height: "78px" }}>
                <label
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "15px",
                    letterSpacing: "1px",
                    color: "#45474C",
                    textTransform: "uppercase",
                    paddingLeft: "4px",
                  }}
                >
                  FULL LEGAL NAME
                </label>
                <input
                  type="text"
                  placeholder="Executive Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    boxSizing: "border-box",
                    width: "512px",
                    height: "55px",
                    background: "#F3F4F5",
                    borderRadius: "16px",
                    border: "none",
                    padding: "17px 24px 18px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#191C1D",
                    outline: "none",
                  }}
                />
              </div>

              {/* Split Input Grid Row Container: CODE & CONTACT NUMBER */}
              <div style={{ position: "relative", width: "512px", height: "79px" }}>
                {/* Left Column: Code */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", position: "absolute", left: "0px", width: "160px", height: "79px" }}>
                  <label
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "10px",
                      lineHeight: "15px",
                      letterSpacing: "1px",
                      color: "#45474C",
                      textTransform: "uppercase",
                      paddingLeft: "4px",
                    }}
                  >
                    CODE
                  </label>
                  <input
                    type="text"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    style={{
                      boxSizing: "border-box",
                      width: "160px",
                      height: "56px",
                      background: "#F3F4F5",
                      borderRadius: "16px",
                      border: "none",
                      padding: "16px 24px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#191C1D",
                      outline: "none",
                      textAlign: "center",
                    }}
                  />
                </div>

                {/* Right Column: Contact Number */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", position: "absolute", left: "176px", width: "336px", height: "78px" }}>
                  <label
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "10px",
                      lineHeight: "15px",
                      letterSpacing: "1px",
                      color: "#45474C",
                      textTransform: "uppercase",
                      paddingLeft: "4px",
                    }}
                  >
                    CONTACT NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="000 000 0000"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    style={{
                      boxSizing: "border-box",
                      width: "336px",
                      height: "55px",
                      background: "#F3F4F5",
                      borderRadius: "16px",
                      border: "none",
                      padding: "17px 24px 18px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#191C1D",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Field 3: CORPORATE EMAIL */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "512px", height: "78px" }}>
                <label
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "15px",
                    letterSpacing: "1px",
                    color: "#45474C",
                    textTransform: "uppercase",
                    paddingLeft: "4px",
                  }}
                >
                  CORPORATE EMAIL
                </label>
                <input
                  type="email"
                  placeholder="name@corporation.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    boxSizing: "border-box",
                    width: "512px",
                    height: "55px",
                    background: "#F3F4F5",
                    borderRadius: "16px",
                    border: "none",
                    padding: "17px 24px 18px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#191C1D",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Hidden fallback submit engine hook */}
            <button type="submit" style={{ display: "none" }} />
          </form>
        </div>
      </div>

      {/* ─── PRIMARY CTA BUTTON SUBMISSION ENGINE BLOCK ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px 0px 0px",
          width: "336px",
        }}
      >
        {/* Core trigger button token dump layout */}
        <button
          onClick={handleSubmit}
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0px",
            width: "336px",
            height: "57px",
            background: "radial-gradient(50% 166.92% at 50% 50%, #2780C4 0%, #164573 100%)",
            borderRadius: "30px",
            border: "none",
            boxShadow: "0px 20px 25px -5px rgba(9, 20, 38, 0.1), 0px 8px 10px -6px rgba(9, 20, 38, 0.1)",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFFF",
              letterSpacing: "-0.4px",
            }}
          >
            SUBMIT LAND DETAILS
          </span>
        </button>

        {/* Footer Support Desk Shortcut Link layout wrapper */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px 0px 0px",
            width: "336px",
            height: "48px",
          }}
        >
          <div
            onClick={() => alert("Launching live agronomy encrypted channel dispatch support desk...")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            {/* Inner line symbol drawing chat icon dump */}
            <div
              style={{
                width: "13.33px",
                height: "13.33px",
                background: "#00629E",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "9px", color: "#FFFFFF", fontWeight: "bold" }}>💬</span>
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#00629E",
              }}
            >
              Chat with Support
            </span>
          </div>
        </div>
      </div>

      {/* ─── SUCCESS CONFIRMATION MODAL OVERLAY POPUP (MAPPED EXACTLY TO USER FIGMA SCREEN SPECIFICATIONS) ─── */}
      {isSubmitted && (
        <div 
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(9, 20, 38, 0.6)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            boxSizing: "border-box",
          }}
          onClick={() => setIsSubmitted(false)}
        >
          {/* Main Container */}
          <div 
            style={{
              background: "#FFFFFF",
              borderRadius: "clamp(24px, 4vh, 48px)",
              boxSizing: "border-box",
              padding: "clamp(24px, 4vh, 50.65px) clamp(16px, 2vw, 22.10px)",
              width: "100%",
              maxWidth: "932px",
              maxHeight: "95vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Checkmark Ring Block */}
            <div 
              style={{
                width: "clamp(60px, 9vh, 96px)",
                height: "clamp(60px, 9vh, 96px)",
                background: "radial-gradient(59.38% 41.98% at 50% 50%, #2780C4 0%, #164573 100%)",
                border: "clamp(3px, 0.5vh, 5px) solid #AED6EF",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 10px 15px -3px rgba(39, 128, 196, 0.2), 0px 4px 6px -4px rgba(39, 128, 196, 0.2)",
                position: "relative",
                flexShrink: 0,
              }}
            >
              {/* White inner thick checkmark icon path */}
              <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            {/* Heading Title: Request Submitted */}
            <h2 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 4.5vh, 55.26px)",
                lineHeight: "1.1",
                letterSpacing: "-1.38px",
                color: "#131600",
                marginTop: "clamp(12px, 2vh, 22.10px)",
                marginBottom: "clamp(8px, 1.5vh, 14.74px)",
                textAlign: "center",
              }}
            >
              Request Submitted
            </h2>

            {/* Subtitle text */}
            <p 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(13px, 1.8vh, 16.58px)",
                lineHeight: "1.4",
                color: "#45474C",
                maxWidth: "574px",
                textAlign: "center",
                margin: "0 0 clamp(16px, 2.5vh, 36.84px) 0",
              }}
            >
              A Field Officer (FO) has been assigned to conduct your site validation and prepare the final cost estimate.
            </p>

            {/* Executive Summary Card Frame */}
            <div 
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 18.42px 36.84px rgba(9, 20, 38, 0.06)",
                borderRadius: "clamp(16px, 3vh, 29.47px)",
                width: "100%",
                maxWidth: "825.21px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxSizing: "border-box",
                flexShrink: 1,
              }}
            >
              {/* Top Panel: Data Rows Stack */}
              <div 
                style={{
                  padding: "clamp(12px, 2vh, 24px) clamp(16px, 3vw, 32px)",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                  borderBottom: "1px solid rgba(0,0,0,0.04)",
                  flexShrink: 0,
                }}
              >
                {/* Column 1: SERVICE TYPE */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(9px, 1.2vh, 10.13px)", letterSpacing: "1px", color: "#75777D", textTransform: "uppercase" }}>
                    SERVICE TYPE
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(14px, 2vh, 18.42px)", color: "#131600" }}>
                    Farmhouse Construction
                  </span>
                </div>

                {/* Column 2: TARGET PROPERTY */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(9px, 1.2vh, 10.13px)", letterSpacing: "1px", color: "#75777D", textTransform: "uppercase" }}>
                    TARGET PROPERTY
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(14px, 2vh, 18.42px)", color: "#131600" }}>
                    GLC SOS 01
                  </span>
                </div>

                {/* Column 3: CURRENT STATUS */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(9px, 1.2vh, 10.13px)", letterSpacing: "1px", color: "#75777D", textTransform: "uppercase" }}>
                    CURRENT STATUS
                  </span>
                  {/* Status Capsule block */}
                  <div 
                    style={{
                      background: "#CFE5FF",
                      borderRadius: "9999px",
                      padding: "clamp(4px, 0.6vh, 5.53px) clamp(10px, 1.5vw, 14.74px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(9px, 1.2vh, 11.05px)", letterSpacing: "0.28px", color: "#004673", textTransform: "uppercase" }}>
                      PENDING FO VALIDATION
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Panel: Farm Photo Container */}
              <div 
                style={{
                  height: "clamp(120px, 24vh, 294.72px)",
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 1,
                }}
              >
                {/* Absolutely positioned satellite artwork source preview */}
                <img 
                  src="/assets/maintenance/hero.svg"
                  alt="GLC SOS 01 Site Survey View"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* Linear gradient shadow tint overlay */}
                <div 
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(0deg, rgba(9, 20, 38, 0.75) 0%, rgba(9, 20, 38, 0) 100%)",
                  }}
                />
                {/* Absolutely positioned Site marker tag */}
                <div 
                  style={{
                    position: "absolute",
                    left: "clamp(16px, 3vw, 36.84px)",
                    bottom: "clamp(12px, 2vh, 24px)",
                  }}
                >
                  <span 
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(10px, 1.5vh, 12.89px)",
                      letterSpacing: "2.58px",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      opacity: 0.95,
                    }}
                  >
                    SITE: GLC SOS 01 • SECTOR A
                  </span>
                </div>
              </div>
            </div>

            {/* Action Deck: margin wrapper block */}
            <div 
              style={{
                marginTop: "clamp(16px, 2.5vh, 44.21px)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                width: "100%",
                maxWidth: "825.21px",
                flexWrap: "wrap",
                boxSizing: "border-box",
              }}
            >
              {/* Button 1: Track Progress & Invoices */}
              <button
                onClick={() => router.push("/home/maintenance/services")}
                style={{
                  background: "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)",
                  borderRadius: "9999px",
                  boxShadow: "0px 9.21px 13.82px -2.76px rgba(0, 0, 0, 0.15), 0px 3.68px 5.53px -3.68px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  height: "clamp(44px, 6vh, 62.84px)",
                  flex: "1 1 250px",
                  maxWidth: "399.71px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  padding: "0 16px",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(13px, 1.8vh, 16.58px)", color: "#FFFFFF", textAlign: "center" }}>
                  Track Progress & Invoices
                </span>
              </button>

              {/* Button 2: Return to Services Hub */}
              <button
                onClick={() => router.push("/home/maintenance/services")}
                style={{
                  background: "transparent",
                  border: "clamp(1.5px, 0.2vh, 1.842px) solid #2780C4",
                  borderRadius: "9999px",
                  height: "clamp(44px, 6vh, 62.84px)",
                  flex: "1 1 250px",
                  maxWidth: "399.71px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  padding: "0 16px",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(13px, 1.8vh, 16.58px)", color: "#2780C4", textAlign: "center" }}>
                  Return to Services Hub
                </span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
