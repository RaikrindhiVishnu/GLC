"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LeftConsole() {
  const [hoveredAvailable, setHoveredAvailable] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "32px",
        gap: "40px",
        width: "100%",
        background: "#FFFFFF",
        borderRadius: "32px",
        boxShadow: "0px 25px 50px -12px rgba(9, 20, 38, 0.05)",
        position: "relative",
      }}
      className="lg:p-10 lg:rounded-[48px]"
    >
      {/* Header Block */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px", width: "100%" }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#45474C" }}>
          INVESTMENT SPOTLIGHT
        </span>
        <h2 style={{ margin: "4px 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "32px", lineHeight: "40px", letterSpacing: "-0.9px", color: "#131600" }} className="lg:text-[36px] lg:leading-[45px]">
          GLC SOS 01
        </h2>
        <span style={{ marginTop: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>
          Commercial Farming • High Yield Assets
        </span>
      </div>

      {/* Blueprint Map */}
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "448px",
            aspectRatio: "1 / 1",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,0.05)",
          }}
        >
          <img src="/assets/poolinvestments/Project Genesis Zaheerabad.svg" alt="Agrarian Asset Base Map" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />

          {/* Secured Piece 1 */}
          <div style={{ position: "absolute", left: "0%", right: "45%", top: "0%", bottom: "55%", background: "#091426", opacity: 0.85, borderRadius: "16px", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: 700, fontFamily: "sans-serif" }}>SECURED</span>
          </div>
          {/* Secured Piece 2 */}
          <div style={{ position: "absolute", left: "60%", right: "0%", top: "0%", bottom: "45%", background: "#091426", opacity: 0.85, borderRadius: "16px", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: 700, fontFamily: "sans-serif" }}>SECURED</span>
          </div>
          {/* Secured Piece 3 */}
          <div style={{ position: "absolute", left: "0%", right: "55%", top: "50%", bottom: "0%", background: "#091426", opacity: 0.85, borderRadius: "16px", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: 700, fontFamily: "sans-serif" }}>SECURED</span>
          </div>

          {/* Available Piece 4 */}
          <div
            onMouseEnter={() => setHoveredAvailable(true)}
            onMouseLeave={() => setHoveredAvailable(false)}
            style={{
              boxSizing: "border-box",
              position: "absolute",
              left: "50%",
              right: "0%",
              top: "60%",
              bottom: "0%",
              background: hoveredAvailable ? "rgba(188, 210, 37, 0.15)" : "rgba(188, 210, 37, 0.05)",
              border: "4px dashed #BCD225",
              borderRadius: "16px",
              zIndex: 2,
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative", width: "32px", height: "32px", background: "#BCD225", borderRadius: "9999px", boxShadow: "0px 0px 15px rgba(188, 210, 37, 0.6)", display: "flex", alignItems: "center", justifyContent: "center", transform: hoveredAvailable ? "scale(1.15)" : "scale(1)", transition: "transform 0.2s ease" }}>
              <div style={{ width: "10px", height: "10px", background: "#091426", borderRadius: "9999px" }} />
            </div>
            <div style={{ position: "absolute", bottom: "calc(100% + 12px)", background: "#091426", borderRadius: "24px", padding: "8px 16px", display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", boxShadow: "0px 10px 25px rgba(0,0,0,0.2)", opacity: hoveredAvailable ? 1 : 0.9, transform: hoveredAvailable ? "translateY(-4px)" : "translateY(0px)", transition: "all 0.2s ease", pointerEvents: "none", whiteSpace: "nowrap" }}>
              <div style={{ width: "8px", height: "8px", background: "#BCD225", borderRadius: "9999px" }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF" }}>1 Plot Remaining</span>
              <div style={{ position: "absolute", bottom: "-4px", left: "50%", transform: "translateX(-50%) rotate(45deg)", width: "8px", height: "8px", background: "#091426" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Parameter Summary Bottom Row */}
      <div style={{ boxSizing: "border-box", width: "100%", borderTop: "1px solid #EDEEEF", paddingTop: "24px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        {[
          { label: "ASSET CLASS", value: "Industrial Grade" },
          { label: "LOCATION", value: "Pune Outer, IN" },
          { label: "RISK PROFILE", value: "Moderate" },
        ].map((item) => (
          <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#45474C" }}>{item.label}</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "28px", color: "#131600" }}>{item.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
