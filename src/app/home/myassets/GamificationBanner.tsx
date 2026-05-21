"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GamificationBanner() {
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "48px 32px",
        width: "100%",
        background: "#091426",
        borderRadius: "48px",
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        flexWrap: "wrap",
        gap: "32px",
      }}
      className="lg:p-16"
    >
      {/* Glow Effect */}
      <div style={{ position: "absolute", width: "384px", height: "384px", right: "-96px", top: "-80px", background: "#2780C4", opacity: 0.1, filter: "blur(50px)", borderRadius: "9999px", zIndex: 0, pointerEvents: "none" }} />

      {/* Left Stack */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", position: "relative", zIndex: 1, flex: 1, minWidth: "280px" }}
      >
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "4px 12px", background: "#2780C4", borderRadius: "9999px" }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#191E00" }}>TIER: DIGITAL CURATOR</span>
        </div>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "40px", letterSpacing: "-0.9px", color: "#FFFFFF" }} className="lg:text-[36px]">
          Elite Yield Acceleration
        </span>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#BCC7DE" }}>
          Your portfolio has reached the curator threshold. Access 2.5% bonus yield on your next land acquisition.
        </span>
      </motion.div>

      {/* Button */}
      <div style={{ position: "relative", zIndex: 2, flexShrink: 0 }}>
        <button
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "16px 32px", width: "204px", height: "56px", background: hoveredBtn ? "#1F69A4" : "#2780C4", borderRadius: "20px", border: "none", cursor: "pointer", transition: "all 0.2s ease", transform: hoveredBtn ? "scale(1.02)" : "scale(1)" }}
        >
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#FFFFFF" }}>Claim Bonus Yield</span>
        </button>
      </div>
    </motion.div>
  );
}
