"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ShareSelectionModal from "./ShareSelectionModal";
import PlotConfirmationModal from "./PlotConfirmationModal";

export default function RightConsole() {
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px", width: "100%", maxWidth: "492px", flexShrink: 0 }}
    >
      {/* ─── CARD 1: FUNDING PROGRESS ─── */}
      <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "center", padding: "32px", gap: "32px", width: "100%", background: "#FFFFFF", border: "1px solid #F3F4F5", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px" }}>
        {/* Radial Meter */}
        <div style={{ position: "relative", width: "96px", height: "96px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="96" height="96" viewBox="0 0 96 96" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="48" cy="48" r="36" fill="none" stroke="#EDEEEF" strokeWidth="12" />
            <circle cx="48" cy="48" r="36" fill="none" stroke="#091426" strokeWidth="12" strokeDasharray="226.19" strokeDashoffset="56.55" strokeLinecap="round" />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "16px", lineHeight: "20px", color: "#091426" }}>75%</span>
          </div>
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px", flexGrow: 1 }}>
          <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.4px", color: "#131600" }}>Funding Progress</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
            {[["Raised", "₹7.5 Cr"], ["Target", "₹10 Cr"]].map(([label, value]) => (
              <div key={label} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>{label}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#131600" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CARD 2: TERMS ─── */}
      <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "8px", width: "100%", background: "#FFFFFF", border: "1px solid #F3F4F5", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px" }}>
        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px", width: "100%", background: "#FFFFFF", borderRadius: "48px" }}>
          <div style={{ paddingBottom: "16px", width: "100%" }}>
            <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.4px", color: "#131600" }}>Investment Terms</h3>
          </div>
          <div style={{ boxSizing: "border-box", width: "100%", background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.1)", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "48px", overflow: "hidden" }}>
            {[
              { label: "Share Size", value: "₹25,00,000", valueColor: "#131600", bold: true },
              { label: "Expected ROI", value: "14% p.a.", valueColor: "#2780C4", bold: true },
              { label: "Lock-in Period", value: "3 Years", valueColor: "#131600", bold: true },
              { label: "Asset ID", value: "GLC SOS 01", valueColor: "#131600", bold: true },
            ].map((row, i) => (
              <div key={row.label} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px", borderTop: i > 0 ? "1px solid rgba(197, 198, 205, 0.2)" : "none" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>{row.label}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: row.bold ? 800 : 700, fontSize: "14px", color: row.valueColor }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── BUTTON: SELECT POOL ─── */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "20px 0px", width: "400px", height: "57px", background: hoveredBtn ? "radial-gradient(50% 50% at 50% 50%, #308ED6 0%, #1A548B 100%)" : "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "none", borderRadius: "9999px", cursor: "pointer", transition: "all 0.2s ease", boxShadow: hoveredBtn ? "0px 8px 25px rgba(27, 105, 166, 0.4)" : "0px 12px 24px -8px rgba(9, 20, 38, 0.4)" }}
        >
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF", letterSpacing: "-0.45px" }}>SELECT POOL</span>
        </button>
      </div>

      {/* ─── CARD 3: ESCROW CHECKOUT ─── */}
      <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px", gap: "32px", width: "100%", background: "#091426", borderRadius: "32px", boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", width: "100%" }}>
          <div style={{ width: "48px", height: "48px", background: "rgba(255, 255, 255, 0.2)", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF" }}>100% Escrow Protected</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#8590A6" }}>Secured by SEBI Registered Trustee</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#8590A6" }}>TOTAL INVESTMENT</span>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "36px", lineHeight: "40px", color: "#FFFFFF" }}>₹25,00,000</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#8590A6" }}>INR</span>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "10px", lineHeight: "16px", textAlign: "center", color: "rgba(133, 144, 166, 0.6)", maxWidth: "420px" }}>
            By clicking "Claim Final Plot", you agree to the Asset Management Agreement and confirm you are an Accredited Investor.
          </span>
        </div>
      </div>

      <ShareSelectionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={() => {
          setIsModalOpen(false);
          setTimeout(() => setIsConfirmationOpen(true), 300);
        }}
      />
      
      <PlotConfirmationModal 
        isOpen={isConfirmationOpen} 
        onClose={() => setIsConfirmationOpen(false)} 
      />
    </motion.aside>
  );
}
