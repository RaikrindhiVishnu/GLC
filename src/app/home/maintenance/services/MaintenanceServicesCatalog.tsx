"use client";

import React, { useState } from "react";

export default function MaintenanceServicesCatalog() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Borewell Installation",
    "Chainlink Fencing",
  ]);

  const toggleService = (serviceName: string) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
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
      {/* ─── SECTION HEADER (HERO AREA DUMP) ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          marginBottom: "48px",
        }}
      >
        {/* Left Heading Core */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "15.25px",
            width: "701.45px",
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
            Asset Development & Maintenance
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
            Transform your bare land into a fully operational estate with our end-to-end infrastructure and construction services.
          </span>
        </div>

        {/* Right Active Asset Dropdown Selection Strip Box */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "16px 24px",
            gap: "16px",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "32px",
            cursor: "pointer",
          }}
          onClick={() => alert("Loading complete localized land survey mapping registries...")}
        >
          {/* Circular Core Asset Logo Pin */}
          <div
            style={{
              width: "18px",
              height: "20px",
              background: "#2780C4",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "10px", color: "#FFFFFF", fontWeight: "bold" }}>⌖</span>
          </div>

          {/* Core Text Stack */}
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
              ACTIVE ASSET
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#0F2F4C",
              }}
            >
              GLC SOS 01 Estate & Survey
            </span>
          </div>

          {/* Right Down Chevron Icon */}
          <div style={{ width: "12px", height: "7.4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#75777D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 1 6 6 11 1"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT SPLIT LAYOUT ENGINE ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          gap: "32px",
        }}
      >
        {/* ─── LEFT COLUMN: SERVICE CATALOG BENTO GRID & TRUST BANNER ─── */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "769.59px",
            gap: "32px",
            flexShrink: 0,
          }}
        >
          {/* Service Catalog Bento Grid Frame */}
          <div
            style={{
              position: "relative",
              width: "769.59px",
              height: "656.5px",
            }}
          >
            {/* CARD 01: Water & Utilities Setup */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "32px 32px 54.75px",
                gap: "7.4px",
                position: "absolute",
                height: "310.15px",
                left: "0px",
                right: "400.8px",
                top: "0px",
                background: "#FFFFFF",
                boxShadow: "0px 4px 40px rgba(9, 20, 38, 0.04)",
                borderRadius: "32px",
                justifyContent: "space-between",
              }}
            >
              {/* Top Banner Row */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                {/* Circular Icon shell */}
                <div style={{ width: "48px", height: "48px", background: "rgba(39, 128, 196, 0.1)", borderRadius: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="25" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                </div>
                {/* Tag Pill */}
                <div style={{ background: "#E7E8E9", borderRadius: "9999px", padding: "4px 12px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#191C1D", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                    ESSENTIAL SETUP
                  </span>
                </div>
              </div>

              {/* Title & Desc Stack */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>
                  Water & Utilities Setup
                </h3>
                <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#45474C" }}>
                  Installation of high-yield borewells, solar power grids, and automated irrigation lines.
                </p>
              </div>

              {/* Dynamic Action Trigger Button */}
              <button
                onClick={() => toggleService("Borewell Installation")}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 0px",
                  gap: "8px",
                  width: "100%",
                  height: "46px",
                  background: selectedServices.includes("Borewell Installation") ? "rgba(39, 128, 196, 0.08)" : "transparent",
                  border: selectedServices.includes("Borewell Installation") ? "1px solid #2780C4" : "1px solid #C5C6CD",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: selectedServices.includes("Borewell Installation") ? "#2780C4" : "#0F2F4C" }}>
                  {selectedServices.includes("Borewell Installation") ? "✓ Added to Estimate" : "+ Add to Estimate"}
                </span>
              </button>
            </div>

            {/* CARD 02: Boundary & Security */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "32px",
                gap: "7.3px",
                position: "absolute",
                height: "310.3px",
                left: "400.79px",
                right: "0px",
                top: "0px",
                background: "#FFFFFF",
                boxShadow: "0px 4px 40px rgba(9, 20, 38, 0.04)",
                borderRadius: "32px",
                justifyContent: "space-between",
              }}
            >
              {/* Top Banner Row */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                {/* Circular Icon shell */}
                <div style={{ width: "48px", height: "48px", background: "rgba(39, 128, 196, 0.1)", borderRadius: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="25" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
              </div>

              {/* Title & Desc Stack */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>
                  Boundary & Security
                </h3>
                <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#45474C" }}>
                  Reinforced perimeter fencing, gatehouse construction, and AI-enabled thermal surveillance.
                </p>
              </div>

              {/* Dynamic Action Trigger Button */}
              <button
                onClick={() => toggleService("Chainlink Fencing")}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 0px",
                  gap: "8px",
                  width: "100%",
                  height: "46px",
                  background: selectedServices.includes("Chainlink Fencing") ? "rgba(39, 128, 196, 0.08)" : "transparent",
                  border: selectedServices.includes("Chainlink Fencing") ? "1px solid #2780C4" : "1px solid #C5C6CD",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: selectedServices.includes("Chainlink Fencing") ? "#2780C4" : "#0F2F4C" }}>
                  {selectedServices.includes("Chainlink Fencing") ? "✓ Added to Estimate" : "+ Add to Estimate"}
                </span>
              </button>
            </div>

            {/* CARD 03: Eco-Luxury Farmhouse Build (Premium Focus) */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "32px",
                gap: "7.3px",
                position: "absolute",
                height: "314.3px",
                left: "0px",
                right: "400.8px",
                top: "342.25px",
                background: "#FFFFFF",
                borderTop: "4px solid #2780C4",
                boxShadow: "0px 4px 40px rgba(9, 20, 38, 0.04)",
                borderRadius: "32px",
                justifyContent: "space-between",
              }}
            >
              {/* Top Banner Row */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                {/* Circular Icon shell */}
                <div style={{ width: "48px", height: "48px", background: "rgba(39, 128, 196, 0.2)", borderRadius: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </div>
                {/* Premium Highlight Tag */}
                <div style={{ background: "#2780C4", borderRadius: "9999px", padding: "4px 12px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#FFFFFF", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                    PREMIUM LIFESTYLE
                  </span>
                </div>
              </div>

              {/* Title & Desc Stack */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>
                  Eco-Luxury Farmhouse Build
                </h3>
                <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#45474C" }}>
                  Sustainable architectural design tailored to your lifestyle. Pre-approved permit processing included.
                </p>
              </div>

              {/* Dynamic Action Trigger Button */}
              <button
                onClick={() => toggleService("Eco-Luxury Build")}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 0px",
                  width: "100%",
                  height: "46px",
                  background: selectedServices.includes("Eco-Luxury Build") ? "rgba(39, 128, 196, 0.08)" : "transparent",
                  border: selectedServices.includes("Eco-Luxury Build") ? "1px solid #2780C4" : "1px solid #C5C6CD",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: selectedServices.includes("Eco-Luxury Build") ? "#2780C4" : "#0F2F4C" }}>
                  {selectedServices.includes("Eco-Luxury Build") ? "✓ Added to Estimate" : "View Designs & Add"}
                </span>
              </button>
            </div>

            {/* CARD 04: Agri-Ready Preparation */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "32px 32px 58.75px",
                gap: "7.4px",
                position: "absolute",
                height: "314.15px",
                left: "400.79px",
                right: "0px",
                top: "342.25px",
                background: "#FFFFFF",
                boxShadow: "0px 4px 40px rgba(9, 20, 38, 0.04)",
                borderRadius: "32px",
                justifyContent: "space-between",
              }}
            >
              {/* Top Banner Row */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                {/* Circular Icon shell */}
                <div style={{ width: "48px", height: "48px", background: "rgba(39, 128, 196, 0.1)", borderRadius: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
              </div>

              {/* Title & Desc Stack */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>
                  Agri-Ready Preparation
                </h3>
                <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#45474C" }}>
                  Soil enrichment, leveling, and plot division for immediate high-yield crop cultivation.
                </p>
              </div>

              {/* Dynamic Action Trigger Button */}
              <button
                onClick={() => toggleService("Agri-Ready Preparation")}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 0px",
                  gap: "8px",
                  width: "100%",
                  height: "46px",
                  background: selectedServices.includes("Agri-Ready Preparation") ? "rgba(39, 128, 196, 0.08)" : "transparent",
                  border: selectedServices.includes("Agri-Ready Preparation") ? "1px solid #2780C4" : "1px solid #C5C6CD",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: selectedServices.includes("Agri-Ready Preparation") ? "#2780C4" : "#0F2F4C" }}>
                  {selectedServices.includes("Agri-Ready Preparation") ? "✓ Added to Estimate" : "+ Add to Estimate"}
                </span>
              </button>
            </div>
          </div>

          {/* ─── TRUST BANNER COMPONENT ENGINE ─── */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "40px",
              isolation: "isolate",
              width: "769.59px",
              background: "rgba(207, 229, 255, 0.3)",
              borderRadius: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background Soft Accent Blur Halo */}
            <div
              style={{
                position: "absolute",
                width: "256px",
                height: "256px",
                right: "-80px",
                bottom: "-80px",
                background: "rgba(0, 98, 158, 0.05)",
                filter: "blur(32px)",
                borderRadius: "9999px",
                zIndex: 0,
              }}
            />

            {/* Inner Stack Layer */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%", zIndex: 1, position: "relative" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C" }}>
                100% Digital Execution
              </h3>

              {/* Universal Horizon Columns Steps Row */}
              <div style={{ position: "relative", width: "100%", height: "73px" }}>
                
                {/* Step 1: Feasibility */}
                <div style={{ display: "flex", flexDirection: "row", gap: "16px", position: "absolute", left: "0px", width: "220px", height: "73px" }}>
                  {/* Round Step Symbol */}
                  <div style={{ width: "32px", height: "32px", background: "#0F2F4C", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#FFFFFF" }}>1</span>
                  </div>
                  {/* Title Info stack */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                      Feasibility
                    </span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "15px", color: "#45474C" }}>
                      On-site land assessment and technical viability checks.
                    </span>
                  </div>
                </div>

                {/* Step 2: Work Order */}
                <div style={{ display: "flex", flexDirection: "row", gap: "16px", position: "absolute", left: "240.53px", width: "220px", height: "73px" }}>
                  {/* Round Step Symbol */}
                  <div style={{ width: "32px", height: "32px", background: "#0F2F4C", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#FFFFFF" }}>2</span>
                  </div>
                  {/* Title Info stack */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                      Work Order
                    </span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "15px", color: "#45474C" }}>
                      Milestone tracking and encrypted milestone dispatch.
                    </span>
                  </div>
                </div>

                {/* Step 3: Tracking */}
                <div style={{ display: "flex", flexDirection: "row", gap: "16px", position: "absolute", left: "481.06px", width: "220px", height: "73px" }}>
                  {/* Round Step Symbol */}
                  <div style={{ width: "32px", height: "32px", background: "#0F2F4C", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#FFFFFF" }}>3</span>
                  </div>
                  {/* Title Info stack */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                      Tracking
                    </span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "15px", color: "#45474C" }}>
                      Real-time drone feeds and live site surveillance.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ─── ASIDE RIGHT COLUMN: STICKY ORDER TICKET CONSOLE ─── */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "414.41px",
            gap: "32px",
            flexShrink: 0,
          }}
        >
          {/* Box 1: Your Request Summary */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              gap: "24px",
              width: "100%",
              background: "#FFFFFF",
              border: "1px solid #EDEEEF",
              boxShadow: "0px 20px 60px rgba(9, 20, 38, 0.06)",
              borderRadius: "32px",
            }}
          >
            {/* Header Line */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#0F2F4C" }}>
                Your Request Summary
              </h3>
              {/* Counter Strip Token */}
              <div style={{ background: "#EDEEEF", borderRadius: "16px", padding: "4px 8px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#45474C" }}>
                  {selectedServices.length} {selectedServices.length === 1 ? "ITEM" : "ITEMS"}
                </span>
              </div>
            </div>

            {/* Selected items List Matrix */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", minHeight: "136px" }}>
              {selectedServices.length === 0 ? (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#A6A8B1", fontSize: "14px", fontStyle: "italic" }}>
                  Select development services from the catalog map to configure estimates.
                </div>
              ) : (
                selectedServices.map((item) => (
                  <div
                    key={item}
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px",
                      width: "100%",
                      height: "56px",
                      background: "#F3F4F5",
                      borderRadius: "48px",
                    }}
                  >
                    {/* Left Icon + Title Block */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                      {/* Check dot marker */}
                      <div style={{ width: "16px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#0F2F4C" }}>
                        {item}
                      </span>
                    </div>

                    {/* Delete item click hook */}
                    <button
                      onClick={() => toggleService(item)}
                      style={{
                        background: "transparent",
                        border: "none",
                        width: "16px",
                        height: "18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C5C6CD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Core Action Button Template */}
            <button
              onClick={() => {
                if (selectedServices.length === 0) return alert("Please specify at least one action service estimate configuration item.");
                alert(`Estimate initialization routine engaged for:\n- ${selectedServices.join("\n- ")}\nSecure cost routing channel encrypted.`);
              }}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 0px",
                width: "100%",
                height: "56px",
                background: "radial-gradient(50% 130.51% at 50% 50%, #2780C4 0%, #164573 100%)",
                borderRadius: "32px",
                border: "none",
                boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
                cursor: selectedServices.length > 0 ? "pointer" : "not-allowed",
                opacity: selectedServices.length > 0 ? 1 : 0.6,
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Request Service Estimate
              </span>
            </button>

            {/* Context Timeline Assurance Banner */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "16px",
                gap: "12px",
                width: "100%",
                background: "#F3F4F5",
                borderRadius: "48px",
              }}
            >
              <div style={{ width: "12px", height: "12px", background: "#75777D", borderRadius: "6px", flexShrink: 0, marginTop: "4px" }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "20px", color: "#45474C" }}>
                Our architecture team will review your selection and generate a detailed cost sheet within 48 hours.
              </span>
            </div>

            {/* Support Agent Shortcut line link */}
            <div
              onClick={() => alert("Launching secure encrypted stream dispatch to authorized Regional Development Architect...")}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              {/* Central small square symbol layout matching image dumps */}
              <div style={{ width: "12px", height: "11px", background: "#2780C4", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "7px", color: "#FFFFFF", fontWeight: "bold" }}>📞</span>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#2780C4" }}>
                Speak to a Development Architect
              </span>
            </div>
          </div>

          {/* Box 2: Mini Map/Location Context */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "24px",
              gap: "16px",
              width: "100%",
              background: "#FFFFFF",
              border: "1px solid #EDEEEF",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "32px",
            }}
          >
            {/* Top Preview Card Bar */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", width: "100%" }}>
              {/* Avatar Orbit thumbnail simulation */}
              <div style={{ width: "40px", height: "40px", borderRadius: "9999px", background: "#E2E8F0", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                {/* Native mini canvas mimicking green plot satellite visual representation */}
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%, #4ADE80 0%, #166534 100%)" }} />
              </div>

              {/* Title info layer */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#0F2F4C" }}>
                  Site Status
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#45474C" }}>
                  GPS verified | Active Feeds
                </span>
              </div>
            </div>

            {/* Bottom Embedded Map Frame Simulation */}
            <div
              style={{
                boxSizing: "border-box",
                width: "100%",
                height: "128px",
                background: "#EDEEEF",
                borderRadius: "32px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Native vector background contour lines mimic */}
              <svg width="100%" height="100%" viewBox="0 0 364 128" fill="none" preserveAspectRatio="none" style={{ opacity: 0.5 }}>
                <rect width="364" height="128" fill="#F1F5F9" />
                <path d="M0 30 Q 90 0, 180 50 T 364 20 L 364 128 L 0 128 Z" fill="#E2E8F0" />
                <path d="M0 70 Q 120 40, 240 90 T 364 80 L 364 128 L 0 128 Z" fill="#CBD5E1" />
                <line x1="50" y1="0" x2="50" y2="128" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="0" x2="200" y2="128" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Overlaid green live tracking tag preview indicator */}
              <div style={{ position: "absolute", bottom: "12px", right: "12px", background: "rgba(15, 47, 76, 0.85)", borderRadius: "12px", padding: "4px 8px" }}>
                <span style={{ fontSize: "9px", color: "#FFFFFF", fontWeight: "bold", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>🛰️ FEED READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
