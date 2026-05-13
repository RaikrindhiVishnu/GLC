"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function AddOnServices() {
  // Track selected draft cart items matching requested design functionality
  const [requestedServices, setRequestedServices] = useState<string[]>(["borewell", "solar"]);

  const toggleService = (id: string) => {
    if (requestedServices.includes(id)) {
      setRequestedServices(requestedServices.filter((s) => s !== id));
    } else {
      setRequestedServices([...requestedServices, id]);
    }
  };

  return (
    <section
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        width: "1184px",
        maxWidth: "100%",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* ─── SECTION HEADER ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px",
          width: "100%",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "28px",
            lineHeight: "1.2",
            letterSpacing: "-1px",
            color: "#131600",
            marginBottom: "8px",
          }}
        >
          Add-On Services
        </h2>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            color: "#45474C",
          }}
        >
          Enhance your agricultural asset.
        </span>
      </div>

      {/* ─── SPLIT-CONSOLE LAYOUT FRAME ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          gap: "48px",
        }}
      >
        {/* Left Side (Catalog Grid): 70% Content Width Split */}
        <div
          style={{
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "36px",
            width: "795px",
            flexShrink: 0,
          }}
        >
          {/* Service Card 1: Farmhouse Construction */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              background: "#FFFFFF",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
              borderRadius: "32px",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Fluid Preview Image Slot */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "180px",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "20px",
                background: "#F3F4F5",
              }}
            >
              <Image
                src="/assets/home/TrendingFarmlands/glcsos01.svg"
                alt="Farmhouse Construction Architecture"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Title Heading */}
            <h3
              style={{
                margin: "0 0 16px 0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                lineHeight: "28px",
                color: "#131600",
                width: "100%",
              }}
            >
              Farmhouse Construction
            </h3>

            {/* Bullet Item Layout */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", marginBottom: "28px", flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", background: "#00629E", borderRadius: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>
                  Architectural Planning
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", background: "#00629E", borderRadius: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>
                  Sustainable Materials
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => toggleService("farmhouse")}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 24px",
                width: "100%",
                height: "48px",
                border: requestedServices.includes("farmhouse") ? "none" : "1px solid #C5C6CD",
                borderRadius: "9999px",
                background: requestedServices.includes("farmhouse") ? "#EDEEEF" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#091426" }}>
                {requestedServices.includes("farmhouse") ? "✓ Added to Request" : "+ Add to Request"}
              </span>
            </button>
          </div>

          {/* Service Card 2: Borewell & Irrigation */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              background: "#FFFFFF",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
              borderRadius: "32px",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "180px",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "20px",
                background: "#F3F4F5",
              }}
            >
              <Image
                src="/assets/home/TrendingFarmlands/glcsos02.svg"
                alt="Borewell & Irrigation System"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <h3
              style={{
                margin: "0 0 16px 0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                lineHeight: "28px",
                color: "#131600",
                width: "100%",
              }}
            >
              Borewell & Irrigation
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", marginBottom: "28px", flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", background: "#00629E", borderRadius: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>
                  Hydro-Geological Survey
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", background: "#00629E", borderRadius: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>
                  Smart Drip Network
                </span>
              </div>
            </div>

            <button
              onClick={() => toggleService("borewell")}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 24px",
                width: "100%",
                height: "48px",
                border: requestedServices.includes("borewell") ? "none" : "1px solid #C5C6CD",
                borderRadius: "9999px",
                background: requestedServices.includes("borewell") ? "#EDEEEF" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#091426" }}>
                {requestedServices.includes("borewell") ? "✓ Added to Request" : "+ Add to Request"}
              </span>
            </button>
          </div>

          {/* Service Card 3: Organic Farm Setup */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              background: "#FFFFFF",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
              borderRadius: "32px",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "180px",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "20px",
                background: "#F3F4F5",
              }}
            >
              <Image
                src="/assets/home/TrendingFarmlands/glcsos03.svg"
                alt="Organic Farm Setup Protocol"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <h3
              style={{
                margin: "0 0 16px 0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                lineHeight: "28px",
                color: "#131600",
                width: "100%",
              }}
            >
              Organic Farm Setup
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", marginBottom: "28px", flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", background: "#00629E", borderRadius: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>
                  Soil Enrichment Program
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", background: "#00629E", borderRadius: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>
                  Crop Selection Strategy
                </span>
              </div>
            </div>

            <button
              onClick={() => toggleService("organic")}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 24px",
                width: "100%",
                height: "48px",
                border: requestedServices.includes("organic") ? "none" : "1px solid #C5C6CD",
                borderRadius: "9999px",
                background: requestedServices.includes("organic") ? "#EDEEEF" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#091426" }}>
                {requestedServices.includes("organic") ? "✓ Added to Request" : "+ Add to Request"}
              </span>
            </button>
          </div>

          {/* Service Card 4: Solar Power Grid */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              background: "#FFFFFF",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
              borderRadius: "32px",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "180px",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "20px",
                background: "#F3F4F5",
              }}
            >
              <Image
                src="/assets/home/YourListings/glcsos3.svg"
                alt="Solar Power Grid Integration"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <h3
              style={{
                margin: "0 0 16px 0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                lineHeight: "28px",
                color: "#131600",
                width: "100%",
              }}
            >
              Solar Power Grid
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", marginBottom: "28px", flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", background: "#00629E", borderRadius: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>
                  On-Grid Integration
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", background: "#00629E", borderRadius: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>
                  Energy Storage Battery
                </span>
              </div>
            </div>

            <button
              onClick={() => toggleService("solar")}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 24px",
                width: "100%",
                height: "48px",
                border: requestedServices.includes("solar") ? "none" : "1px solid #C5C6CD",
                borderRadius: "9999px",
                background: requestedServices.includes("solar") ? "#EDEEEF" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#091426" }}>
                {requestedServices.includes("solar") ? "✓ Added to Request" : "+ Add to Request"}
              </span>
            </button>
          </div>
        </div>

        {/* Aside Right Column (Summary Console): 30% Width Container */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "40px",
            width: "340px",
            flexGrow: 1,
            background: "#FFFFFF",
            borderRadius: "48px",
            boxShadow: "0px 10px 30px rgba(9, 20, 38, 0.05)",
            alignSelf: "stretch",
          }}
        >
          {/* Top Cart Content Block */}
          <div style={{ display: "flex", flexDirection: "column", width: "100%", flexGrow: 1 }}>
            <h3
              style={{
                margin: "0 0 28px 0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                lineHeight: "28px",
                color: "#131600",
              }}
            >
              Your Service Request
            </h3>

            {/* Selected items container */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
              {requestedServices.length === 0 ? (
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "#8590A6", fontStyle: "italic", lineHeight: "1.5" }}>
                  No pending draft work orders selected. Click &quot;+ Add to Request&quot; on any module to schedule.
                </span>
              ) : null}

              {/* Draft Item: Borewell & Irrigation */}
              {requestedServices.includes("borewell") && (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: "12px", borderBottom: "1px solid #F3F4F5" }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "42px", height: "42px", background: "#F3F4F5", borderRadius: "48px", flexShrink: 0 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                      </svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#131600" }}>
                        Borewell & Irrigation
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.5px", color: "#00629E" }}>
                        (DRAFT)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleService("borewell")}
                    style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#75777D" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              )}

              {/* Draft Item: Solar Power Grid */}
              {requestedServices.includes("solar") && (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: "12px", borderBottom: "1px solid #F3F4F5" }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "42px", height: "42px", background: "#F3F4F5", borderRadius: "48px", flexShrink: 0 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#131600" }}>
                        Solar Power Grid
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.5px", color: "#00629E" }}>
                        (DRAFT)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleService("solar")}
                    style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#75777D" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              )}

              {/* Draft Item: Farmhouse Construction */}
              {requestedServices.includes("farmhouse") && (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: "12px", borderBottom: "1px solid #F3F4F5" }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "42px", height: "42px", background: "#F3F4F5", borderRadius: "48px", flexShrink: 0 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      </svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#131600" }}>
                        Farmhouse Const.
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.5px", color: "#00629E" }}>
                        (DRAFT)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleService("farmhouse")}
                    style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#75777D" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              )}

              {/* Draft Item: Organic Farm Setup */}
              {requestedServices.includes("organic") && (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: "12px", borderBottom: "1px solid #F3F4F5" }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "42px", height: "42px", background: "#F3F4F5", borderRadius: "48px", flexShrink: 0 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#131600" }}>
                        Organic Farm Setup
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.5px", color: "#00629E" }}>
                        (DRAFT)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleService("organic")}
                    style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#75777D" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Primary Action Embedded Console */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              width: "100%",
              background: "#091426",
              borderRadius: "32px",
              marginTop: "32px",
            }}
          >
            <h4
              style={{
                margin: "0 0 8px 0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "24px",
                color: "#FFFFFF",
              }}
            >
              Request Official Work Order
            </h4>

            <p
              style={{
                margin: "0 0 24px 0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "1.5",
                color: "#8590A6",
              }}
            >
              Ready to initiate your infrastructure project? Generate a binding estimate to proceed.
            </p>

            <button
              onClick={() => alert(`Successfully scheduled official work order estimate token for ${requestedServices.length} module(s).`)}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "14px 0px",
                width: "100%",
                background: "#00629E",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0px 10px 20px rgba(0, 98, 158, 0.3)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#FFFFFF",
                }}
              >
                Generate Order
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
