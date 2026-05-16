"use client";

import React from "react";

export default function CenterPane() {
  // Configured parameterized payload array reproducing absolute layout strings requested
  const documentRows = [
    {
      title: "Title Deed & Passbook",
      subtitle: "VERIFIED GOVERNMENT RECORD",
      action: "View Full PDF",
      alertText: "Streaming native protected PDF layout securely from regulatory archives...",
    },
    {
      title: "Permanent GIS Boundary Map",
      subtitle: "SATELLITE VERIFIED COORDINATES",
      action: "Open Interactive Map",
      alertText: "Launching advanced spatial multi-spectral GIS mapping frame...",
    },
    {
      title: "Intelligence Officer (IO) Risk Assessment",
      subtitle: "SECURITY CLEARANCE: TIER 1",
      action: "View Risk Report",
      alertText: "Displaying complete IO due diligence dossier indices...",
    },
    {
      title: "Historical Yield & Soil Insights",
      subtitle: "PRODUCTIVITY MATRIX 2019-2024",
      action: "View Data Table",
      alertText: "Rendering dynamic historic yield grids and continuous soil sample metric vectors...",
    },
  ];

  return (
    <section
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        padding: "clamp(24px, 3vh, 40px)",
        gap: "clamp(12px, 1.8vh, 18px)",
        flex: "1 1 500px",
        maxWidth: "608px",
        height: "100%",
        background: "#FFFFFF",
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.04)",
        borderRadius: "48px",
        overflow: "hidden",
        justifyContent: "space-between",
      }}
    >
      {/* ─── SECTION TOP HEADER ROW ─── */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(22px, 3.2vh, 30px)",
              lineHeight: "1.2",
              letterSpacing: "-0.75px",
              color: "#0F2F4C",
            }}
          >
            Verified Documentation
          </h2>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(13px, 1.6vh, 16px)",
              color: "#45474C",
            }}
          >
            Official regulatory and institutional clearances
          </span>
        </div>

        {/* Institutional Grade Top Cyan Tag Indicator */}
        <div
          style={{
            background: "#A5CCF2",
            borderRadius: "9999px",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            alignSelf: "flex-start",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(9px, 1.1vh, 12px)",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              color: "#0F2F4C",
            }}
          >
            Institutional Grade
          </span>
        </div>
      </div>

      {/* ─── MASTER INNER DOCUMENTATION ACCORDION LIST WRAPPER ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          padding: "clamp(10px, 1.5vh, 16px)",
          gap: "clamp(8px, 1.2vh, 12px)",
          width: "100%",
          background: "#F3F4F5",
          borderRadius: "24px",
          flexGrow: 1,
          justifyContent: "space-around",
        }}
      >
        {documentRows.map((row, idx) => (
          <div
            key={idx}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "clamp(10px, 1.5vh, 16px) clamp(14px, 2vw, 20px)",
              background: "#FFFFFF",
              borderRadius: "16px",
              width: "100%",
              gap: "10px",
            }}
          >
            {/* Left Header info block */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "clamp(10px, 1.5vw, 16px)", flexGrow: 1 }}>
              {/* Internal icon symbol container */}
              <div
                style={{
                  width: "clamp(32px, 4.5vh, 46px)",
                  height: "clamp(32px, 4.5vh, 46px)",
                  background: "#EEF6FF",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div style={{ width: "12px", height: "14px", background: "#2780C4", borderRadius: "2px" }} />
              </div>

              {/* Title descriptions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(13px, 1.6vh, 16px)",
                    color: "#0F2F4C",
                  }}
                >
                  {row.title}
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(9px, 1.1vh, 12px)",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#45474C",
                  }}
                >
                  {row.subtitle}
                </span>
              </div>
            </div>

            {/* Right Trigger Target Button link */}
            <button
              onClick={() => alert(row.alertText)}
              style={{
                background: "transparent",
                border: "1px solid rgba(39, 128, 196, 0.2)",
                borderRadius: "9999px",
                padding: "clamp(6px, 1vh, 10px) clamp(12px, 1.5vw, 20px)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#EEF6FF";
                e.currentTarget.style.borderColor = "#2780C4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(39, 128, 196, 0.2)";
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(11px, 1.3vh, 14px)",
                  color: "#2780C4",
                }}
              >
                {row.action}
              </span>
              <div style={{ width: "8px", height: "8px", background: "#2780C4", borderRadius: "1px" }} />
            </button>
          </div>
        ))}
      </div>

      {/* ─── PRIMARY RADIAL SUBMIT HERO TRIGGER ─── */}
      <button
        onClick={() => alert("Initializing customized guided field assessment route scheduling engine...")}
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          height: "clamp(44px, 5.5vh, 57px)",
          background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
          borderRadius: "9999px",
          border: "none",
          boxShadow: "0px 12px 24px -8px rgba(9, 20, 38, 0.4)",
          margin: "4px auto 0",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 1.8vh, 18px)",
            color: "#FFFFFF",
            letterSpacing: "0.5px",
          }}
        >
          BOOK SITE VISIT
        </span>
      </button>

      {/* ─── FOOTER SECURITY DISCLOSURE BANNER ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "clamp(8px, 1.2vh, 12px)",
          borderTop: "1px solid rgba(197, 198, 205, 0.1)",
          gap: "8px",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: "clamp(10px, 1.2vh, 12px)" }}>🛡️</span>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(9px, 1.1vh, 12px)",
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            color: "#45474C",
            textAlign: "center",
          }}
        >
          BANK-GRADE ENCRYPTION & VERIFIED VERIFICATION
        </span>
      </div>
    </section>
  );
}
