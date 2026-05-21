"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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

  const inputStyle: React.CSSProperties = {
    boxSizing: "border-box",
    width: "100%",
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
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "10px",
    lineHeight: "15px",
    letterSpacing: "1px",
    color: "#45474C",
    textTransform: "uppercase",
    paddingLeft: "4px",
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 box-border flex flex-col gap-12">

      {/* ─── 1. CONSOLE HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.1", letterSpacing: "-0.9px", color: "#0F2F4C" }}>
          Institutional Listing Console
        </h2>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#45474C" }}>
          Secure your assets within the institutional capital grid.
        </span>
      </motion.div>

      {/* ─── 2. PHASE 01: MAP + OWNER DETAILS ─── */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">

        {/* LEFT: Map preview */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 0 48px",
            background: "#FFFFFF",
            boxShadow: "40px 0px 40px rgba(9,20,38,0.04)",
            borderRadius: "48px",
            minHeight: "320px",
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "#F1F5F9", zIndex: 0 }}>
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
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)", zIndex: 1 }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", zIndex: 5, position: "relative" }}>
            <button
              onClick={() => alert("Calibrating on-ground satellite geolocation coordinate pin map layout...")}
              style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "16px 32px", gap: "12px", background: "#0F2F4C", borderRadius: "9999px", border: "none", boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)", cursor: "pointer", justifyContent: "center" }}
            >
              <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", letterSpacing: "0.4px" }}>DROP GPS PIN TO LOCATE</span>
            </button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 16px", background: "rgba(255,255,255,0.8)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", borderRadius: "9999px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "rgba(9,20,38,0.6)" }}>GEOSPATIAL PRECISION REQUIRED</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Owner details form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full lg:flex-1"
          style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "40px", background: "#FFFFFF", boxShadow: "40px 0px 40px rgba(9,20,38,0.04)", borderRadius: "48px" }}
        >
          <form onSubmit={handleIntermediateSubmit} style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "32px", letterSpacing: "-1.2px", color: "#0F2F4C", textTransform: "uppercase" }}>OWNER DETAILS</h3>
              <div style={{ width: "48px", height: "4px", background: "#2780C4" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
              {/* FULL LEGAL NAME */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={labelStyle}>FULL LEGAL NAME</label>
                <input type="text" name="fullName" placeholder="Executive Name" value={formData.fullName} onChange={handleInputChange} style={inputStyle} />
              </div>

              {/* CODE + CONTACT NUMBER */}
              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "120px", flexShrink: 0 }}>
                  <label style={labelStyle}>CODE</label>
                  <input type="text" name="code" value={formData.code} onChange={handleInputChange} style={{ ...inputStyle, height: "56px", textAlign: "center", fontWeight: 700 }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label style={labelStyle}>CONTACT NUMBER</label>
                  <input type="text" name="contactNumber" placeholder="000 000 0000" value={formData.contactNumber} onChange={handleInputChange} style={inputStyle} />
                </div>
              </div>

              {/* CORPORATE EMAIL */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={labelStyle}>CORPORATE EMAIL</label>
                <input type="email" name="email" placeholder="name@corporation.com" value={formData.email} onChange={handleInputChange} style={inputStyle} />
              </div>
            </div>
            <button type="submit" style={{ display: "none" }} />
          </form>
        </motion.div>
      </div>

      {/* Submit + Support */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <button
          onClick={handleIntermediateSubmit}
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px 0", width: "100%", maxWidth: "336px", height: "57px", background: "radial-gradient(50% 166.92% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "30px", border: "none", boxShadow: "0px 20px 25px -5px rgba(9,20,38,0.1), 0px 8px 10px -6px rgba(9,20,38,0.1)", cursor: "pointer" }}
        >
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", letterSpacing: "-0.4px" }}>SUBMIT LAND DETAILS</span>
        </button>
        <div onClick={() => alert("Launching live agronomy encrypted channel dispatch support desk...")} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <div style={{ width: "13px", height: "13px", background: "#00629E", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "9px", color: "#FFFFFF", fontWeight: "bold" }}>💬</span>
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#00629E" }}>Chat with Support</span>
        </div>
      </div>

      {/* ─── 3. PHASE 02: LAND SPECIFICS ─── */}
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%", gap: "32px", opacity: 0.4, transition: "opacity 0.3s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
        >
          <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "32px", letterSpacing: "-1.2px", textTransform: "uppercase", color: "#0F2F4C" }}>
            PHASE 02: LAND SPECIFICS
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {[
              { label: "STATE/REGION", name: "region" },
              { label: "ACREAGE", name: "acreage" },
              { label: "BASE VALUATION (₹)", name: "baseValuation" },
            ].map((slot) => (
              <div
                key={slot.name}
                style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px", gap: "16px", background: "#FFFFFF", border: "1px solid #F3F4F5", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "48px", flex: 1 }}
              >
                <label style={labelStyle}>{slot.label}</label>
                <div style={{ width: "100%", height: "48px", background: "#F3F4F5", borderRadius: "32px", display: "flex", alignItems: "center", padding: "0 16px", boxSizing: "border-box" }}>
                  <input
                    type="text"
                    name={slot.name}
                    value={formData[slot.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    style={{ width: "100%", background: "transparent", border: "none", outline: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "#0F2F4C" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Media upload */}
          <div
            onClick={() => alert("Initiating file input proxy handlers...")}
            style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "48px 64px", width: "100%", border: "2px dashed #C5C6CD", borderRadius: "48px", cursor: "pointer", gap: "12px" }}
          >
            <svg width="33" height="24" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 16l-4-4-4 4" /><path d="M12 12v9" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            </svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", textTransform: "uppercase", color: "#45474C", textAlign: "center" }}>
              PROPERTY MEDIA UPLOAD ZONE (Optional)
            </span>
          </div>
        </div>
      </motion.div>

      {/* ─── 4. PHASE 03 & SUBMISSION ─── */}
      <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">

        {/* Left: Legal docs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-80"
          style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", padding: "40px", background: "#FFFFFF", border: "1px solid rgba(197,198,205,0.1)", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "48px" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
            <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.5px", textTransform: "uppercase", color: "#0F2F4C" }}>
              PHASE 03: LEGAL DOCS
            </h3>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#45474C" }}>
              Please upload your primary 7/12 extract and Sale Deeds for instant OCR verification.
            </span>
          </div>
          <div style={{ paddingTop: "32px", width: "100%" }}>
            <button
              onClick={() => alert("Launching local storage file input array bindings...")}
              style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "16px 0", width: "100%", height: "60px", border: "2px solid #0F2F4C", borderRadius: "48px", background: "transparent", cursor: "pointer" }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>UPLOAD DOCUMENTS</span>
            </button>
          </div>
        </motion.div>

        {/* Right: Institutional audit trigger */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full lg:flex-1"
          style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "48px", gap: "40px", background: "#0F2F4C", boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)", borderRadius: "48px", flexWrap: "wrap" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", flex: 1, minWidth: "200px" }}>
            <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "30px", lineHeight: "36px", letterSpacing: "-1.5px", color: "#FFFFFF" }}>
              Trigger<br />Institutional Audit
            </h3>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#BCC7DE" }}>
              Once triggered, our AI-driven risk models and human auditors will verify your land title within 48 hours for immediate institutional listing.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", minWidth: "260px" }}>
            <button
              onClick={handleFinalAuditTrigger}
              style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "24px 32px", gap: "16px", width: "100%", background: "#2780C4", borderRadius: "16px", border: "none", cursor: "pointer", boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>SECURED VIA FACEID</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.5px", color: "#FFFFFF" }}>SUBMIT FOR CCS SCREENING</span>
              </div>
            </button>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#2780C4" }}>DIGITAL SIGNATURE REQUIRED</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
