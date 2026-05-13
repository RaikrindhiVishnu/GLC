"use client";

import React, { useState } from "react";

export default function SellYourLandConsole() {
  const [formData, setFormData] = useState({
    fullName: "",
    code: "+91",
    contactNumber: "",
    email: "",
    region: "",
    acreage: "",
    baseValuation: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIntermediateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Land Asset owner parameter payload securely archived.\nProceeding to verify Land Specifics and Institutional Audit workflows.`);
  };

  const handleFinalAuditTrigger = () => {
    if (!formData.fullName || !formData.contactNumber) {
      alert("Please ensure Owner Details parameters are populated prior to invoking CCS screening sequences.");
      return;
    }
    alert(
      `CCS Screening Pipeline Triggered Successfully:\n\n` +
      `Owner Entity: ${formData.fullName}\n` +
      `Region/State: ${formData.region || "Pending Survey"}\n` +
      `Acreage: ${formData.acreage || "N/A"} Acres\n` +
      `Base Valuation: ₹${formData.baseValuation || "Market Floating"}\n\n` +
      `FaceID digital authorization signature encrypted successfully.`
    );
  };

  return (
    <section
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "128px 48px 80px",
        gap: "48px",
        width: "1280px",
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* ─── 1. CONSOLE MAIN HEADER & STEPPER TITLE ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "1184px",
          maxWidth: "100%",
          gap: "8px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "48px",
            lineHeight: "48px",
            letterSpacing: "-0.9px",
            color: "#0F2F4C",
          }}
        >
          Institutional Listing Console
        </h2>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            color: "#45474C",
          }}
        >
          Secure your assets within the institutional capital grid.
        </span>
      </div>

      {/* ─── 2. PHASE 01: REUSED ONBOARDING ASSET BLOCK (FROM MAINTENANCE) ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "1184px",
          maxWidth: "100%",
        }}
      >
        {/* Strictly un-wrapped Fixed Layout Horizontal Split Container */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-between",
            width: "1184px",
            height: "513px",
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
            {/* Topographic Contour Texture Backdrop */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "#F1F5F9",
                zIndex: 0,
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 592 513" fill="none" preserveAspectRatio="none" style={{ opacity: 0.8 }}>
                <rect width="592" height="513" fill="#E2E8F0" />
                <path d="M0 120 Q 150 100, 300 250 T 592 180 L 592 513 L 0 513 Z" fill="#CBD5E1" opacity="0.6" />
                <path d="M0 220 Q 180 190, 350 350 T 592 300 L 592 513 L 0 513 Z" fill="#94A3B8" opacity="0.4" />
                <path d="M100 0 Q 250 300, 592 400 L 592 0 Z" fill="#F8FAFC" opacity="0.5" />
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

            {/* Overlaid Controls precisely positioned */}
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

          {/* RIGHT COLUMN: Owner Details Form Container */}
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
              flexShrink: 0,
            }}
          >
            <form onSubmit={handleIntermediateSubmit} style={{ width: "512px", maxWidth: "100%", display: "flex", flexDirection: "column" }}>
              {/* Header Title Layer */}
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
                <div style={{ width: "48px", height: "4px", background: "#2780C4" }} />
              </div>

              {/* Fields Stack Container */}
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
                    name="fullName"
                    placeholder="Executive Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
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

                {/* Split Input Grid Row: CODE & CONTACT NUMBER */}
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
                      name="code"
                      value={formData.code}
                      onChange={handleInputChange}
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
                      name="contactNumber"
                      placeholder="000 000 0000"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
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
                    name="email"
                    placeholder="name@corporation.com"
                    value={formData.email}
                    onChange={handleInputChange}
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

              <button type="submit" style={{ display: "none" }} />
            </form>
          </div>
        </div>

        {/* Master Submission Button Block copied exactly from Maintenance */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px 0px 0px",
            width: "336px",
            marginTop: "24px",
          }}
        >
          <button
            onClick={handleIntermediateSubmit}
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

          {/* Chat shortcut support bottom line */}
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
      </div>

      {/* ─── 3. PHASE 02 PANEL: LAND SPECIFICS (ABSOLUTE COORDINATE SPEC) ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "1184px",
          gap: "32px",
          opacity: 0.4,
          backgroundBlendMode: "saturation",
          transition: "opacity 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
      >
        {/* Heading 2 Layer */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "1184px", height: "32px" }}>
          <h3
            style={{
              margin: 0,
              width: "1184px",
              height: "32px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "24px",
              lineHeight: "32px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "-1.2px",
              textTransform: "uppercase",
              color: "#0F2F4C",
            }}
          >
            PHASE 02: LAND SPECIFICS
          </h3>
        </div>

        {/* Outer Container row holding absolute metric coordinate layout dumps */}
        <div style={{ position: "relative", width: "1184px", height: "145px" }}>
          {/* Slot 1: STATE/REGION */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              gap: "16px",
              position: "absolute",
              height: "145px",
              left: "0px",
              right: "810.67px",
              top: "0px",
              background: "#FFFFFF",
              border: "1px solid #F3F4F5",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "48px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "307.33px", height: "15px" }}>
              <label
                style={{
                  width: "307.33px",
                  height: "15px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                STATE/REGION
              </label>
            </div>
            <div
              style={{
                width: "307.33px",
                height: "48px",
                background: "#F3F4F5",
                borderRadius: "32px",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                boxSizing: "border-box",
              }}
            >
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  color: "#0F2F4C",
                }}
              />
            </div>
          </div>

          {/* Slot 2: ACREAGE */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              gap: "16px",
              position: "absolute",
              height: "145px",
              left: "405.33px",
              right: "405.33px",
              top: "0px",
              background: "#FFFFFF",
              border: "1px solid #F3F4F5",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "48px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "307.33px", height: "15px" }}>
              <label
                style={{
                  width: "307.33px",
                  height: "15px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                ACREAGE
              </label>
            </div>
            <div
              style={{
                width: "307.33px",
                height: "48px",
                background: "#F3F4F5",
                borderRadius: "32px",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                boxSizing: "border-box",
              }}
            >
              <input
                type="text"
                name="acreage"
                value={formData.acreage}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  color: "#0F2F4C",
                }}
              />
            </div>
          </div>

          {/* Slot 3: BASE VALUATION (₹) */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              gap: "16px",
              position: "absolute",
              height: "145px",
              left: "810.67px",
              right: "0px",
              top: "0px",
              background: "#FFFFFF",
              border: "1px solid #F3F4F5",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "48px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "307.33px", height: "15px" }}>
              <label
                style={{
                  width: "307.33px",
                  height: "15px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                BASE VALUATION (₹)
              </label>
            </div>
            <div
              style={{
                width: "307.33px",
                height: "48px",
                background: "#F3F4F5",
                borderRadius: "32px",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                boxSizing: "border-box",
              }}
            >
              <input
                type="text"
                name="baseValuation"
                value={formData.baseValuation}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  color: "#0F2F4C",
                }}
              />
            </div>
          </div>
        </div>

        {/* Property Media Dashed Envelope Box */}
        <div
          onClick={() => alert("Initiating file input proxy handlers...")}
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "64px",
            width: "1184px",
            height: "192px",
            border: "2px dashed #C5C6CD",
            borderRadius: "48px",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0px 0px 16px", width: "33px", height: "40px" }}>
            <div style={{ width: "33px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="33" height="24" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 16l-4-4-4 4"></path>
                <path d="M12 12v9"></path>
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
              </svg>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "361px", height: "20px" }}>
            <span
              style={{
                width: "361px",
                height: "20px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                color: "#45474C",
                justifyContent: "center",
              }}
            >
              PROPERTY MEDIA UPLOAD ZONE (Optional)
            </span>
          </div>
        </div>
      </div>

      {/* ─── 4. PHASE 03 & SUBMISSION PANEL (ABSOLUTE COORDINATE SPEC) ─── */}
      <div style={{ position: "relative", width: "1184px", height: "359.5px" }}>
        {/* Left Card: Phase 03 Legal Docs Upload Frame */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "40px",
            position: "absolute",
            left: "0px",
            right: "810.67px",
            top: "0px",
            bottom: "96.12px",
            background: "#FFFFFF",
            border: "1px solid rgba(197, 198, 205, 0.1)",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "15.38px", width: "291.33px", height: "89.38px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "291.33px", height: "28px" }}>
              <h3
                style={{
                  margin: 0,
                  width: "291.33px",
                  height: "28px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "20px",
                  lineHeight: "28px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "-0.5px",
                  textTransform: "uppercase",
                  color: "#0F2F4C",
                }}
              >
                PHASE 03: LEGAL DOCS
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "291.33px", height: "46px" }}>
              <span
                style={{
                  width: "291.33px",
                  height: "46px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "23px",
                  display: "flex",
                  alignItems: "center",
                  color: "#45474C",
                }}
              >
                Please upload your primary 7/12 extract and Sale Deeds for instant OCR verification.
              </span>
            </div>
          </div>

          {/* Upload Button Outline block */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px 0px 0px", width: "291.33px", height: "92px" }}>
            <button
              onClick={() => alert("Launching local storage file input array bindings...")}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px 0px",
                width: "291.33px",
                height: "60px",
                border: "2px solid #0F2F4C",
                borderRadius: "48px",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  width: "174.33px",
                  height: "24px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#0F2F4C",
                  justifyContent: "center",
                }}
              >
                UPLOAD DOCUMENTS
              </span>
            </button>
          </div>
        </div>

        {/* Right Card: Primary Submission Anchor Navy Frame */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "48px",
            gap: "40px",
            position: "absolute",
            height: "359.5px",
            left: "405.33px",
            right: "0px",
            top: "0px",
            background: "#0F2F4C",
            boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
            borderRadius: "48px",
          }}
        >
          {/* Text Info Column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", width: "324.58px", height: "264px", flexGrow: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "324.58px", height: "72px" }}>
              <h3
                style={{
                  margin: 0,
                  width: "324.58px",
                  height: "72px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "30px",
                  lineHeight: "36px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "-1.5px",
                  color: "#FFFFFF",
                }}
              >
                Trigger
                <br />
                Institutional Audit
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "324.58px", maxWidth: "448px", height: "176px" }}>
              <span
                style={{
                  width: "324.58px",
                  height: "176px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "29px",
                  display: "flex",
                  alignItems: "center",
                  color: "#BCC7DE",
                }}
              >
                Once triggered, our AI-driven risk models and human auditors will verify your land title within 48 hours for immediate institutional listing.
              </span>
            </div>
          </div>

          {/* Button Trigger Controls Layout Stack */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", width: "358.09px", height: "122px" }}>
            <button
              onClick={handleFinalAuditTrigger}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "24px 40px",
                gap: "16px",
                width: "358.09px",
                height: "91px",
                background: "#2780C4",
                borderRadius: "16px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "278.09px", height: "43px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "278.09px", height: "15px", opacity: 0.7 }}>
                  <span
                    style={{
                      width: "139.81px",
                      height: "15px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "10px",
                      lineHeight: "15px",
                      display: "flex",
                      alignItems: "center",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    SECURED VIA FACEID
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "278.09px", height: "28px" }}>
                  <span
                    style={{
                      width: "278.09px",
                      height: "28px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "20px",
                      lineHeight: "28px",
                      display: "flex",
                      alignItems: "center",
                      letterSpacing: "-0.5px",
                      color: "#FFFFFF",
                    }}
                  >
                    SUBMIT FOR CCS SCREENING
                  </span>
                </div>
              </div>
            </button>

            {/* Sub-label banner */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "175.89px", height: "15px" }}>
              <span
                style={{
                  width: "175.89px",
                  height: "15px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#2780C4",
                }}
              >
                DIGITAL SIGNATURE REQUIRED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
