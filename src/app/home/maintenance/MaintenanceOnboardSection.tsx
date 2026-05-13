"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function MaintenanceOnboardSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    code: "+91",
    contactNumber: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            width: "576px", // Mapped exactly to left split remainder bounds dump
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
    </section>
  );
}
