"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function MaintenanceOnboardSection() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    code: "+91",
    contactNumber: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("submitted=true")) {
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home/maintenance/services");
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

      {/* ─── SECTION HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.1", letterSpacing: "-1.2px", color: "#0F2F4C" }}>
          Onboard your Asset
        </h2>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "32px", color: "#45474C" }}>
          Initialize your land discovery and management journey.
        </span>
      </motion.div>

      {/* ─── PHASE 01: MAP + OWNER DETAILS ─── */}
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
          <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "32px", letterSpacing: "-1.2px", color: "#0F2F4C", textTransform: "uppercase" }}>OWNER DETAILS</h3>
              <div style={{ width: "48px", height: "4px", background: "#2780C4" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
              {/* FULL LEGAL NAME */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={labelStyle}>FULL LEGAL NAME</label>
                <input type="text" placeholder="Executive Name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} style={inputStyle} />
              </div>

              {/* CODE + CONTACT NUMBER */}
              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "120px", flexShrink: 0 }}>
                  <label style={labelStyle}>CODE</label>
                  <input type="text" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} style={{ ...inputStyle, height: "56px", textAlign: "center", fontWeight: 700 }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label style={labelStyle}>CONTACT NUMBER</label>
                  <input type="text" placeholder="000 000 0000" value={formData.contactNumber} onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })} style={inputStyle} />
                </div>
              </div>

              {/* CORPORATE EMAIL */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={labelStyle}>CORPORATE EMAIL</label>
                <input type="email" placeholder="name@corporation.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} />
              </div>
            </div>
            <button type="submit" style={{ display: "none" }} />
          </form>
        </motion.div>
      </div>

      {/* ─── SUBMIT BUTTON ─── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <button
          onClick={handleSubmit}
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

      {/* ─── SUCCESS MODAL ─── */}
      {isSubmitted && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(9,20,38,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", boxSizing: "border-box" }}
          onClick={() => setIsSubmitted(false)}
        >
          <div
            style={{ background: "#FFFFFF", borderRadius: "clamp(24px, 4vh, 48px)", boxSizing: "border-box", padding: "clamp(24px, 4vh, 50.65px) clamp(16px, 2vw, 22.10px)", width: "100%", maxWidth: "932px", maxHeight: "95vh", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", boxShadow: "0px 40px 80px -20px rgba(9,20,38,0.25)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ width: "clamp(60px, 9vh, 96px)", height: "clamp(60px, 9vh, 96px)", background: "radial-gradient(59.38% 41.98% at 50% 50%, #2780C4 0%, #164573 100%)", border: "clamp(3px, 0.5vh, 5px) solid #AED6EF", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(39,128,196,0.2), 0px 4px 6px -4px rgba(39,128,196,0.2)", flexShrink: 0 }}>
              <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4.5vh, 55.26px)", lineHeight: "1.1", letterSpacing: "-1.38px", color: "#131600", marginTop: "clamp(12px, 2vh, 22.10px)", marginBottom: "clamp(8px, 1.5vh, 14.74px)", textAlign: "center" }}>
              Request Submitted
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "clamp(13px, 1.8vh, 16.58px)", lineHeight: "1.4", color: "#45474C", maxWidth: "574px", textAlign: "center", margin: "0 0 clamp(16px, 2.5vh, 36.84px) 0" }}>
              A Field Officer (FO) has been assigned to conduct your site validation and prepare the final cost estimate.
            </p>
            <div style={{ background: "#FFFFFF", boxShadow: "0px 18.42px 36.84px rgba(9,20,38,0.06)", borderRadius: "clamp(16px, 3vh, 29.47px)", width: "100%", maxWidth: "825.21px", display: "flex", flexDirection: "column", overflow: "hidden", boxSizing: "border-box", flexShrink: 1 }}>
              <div style={{ padding: "clamp(12px, 2vh, 24px) clamp(16px, 3vw, 32px)", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", borderBottom: "1px solid rgba(0,0,0,0.04)", flexShrink: 0 }}>
                {[
                  { label: "SERVICE TYPE", value: "Farmhouse Construction" },
                  { label: "TARGET PROPERTY", value: "GLC SOS 01" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(9px, 1.2vh, 10.13px)", letterSpacing: "1px", color: "#75777D", textTransform: "uppercase" }}>{item.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(14px, 2vh, 18.42px)", color: "#131600" }}>{item.value}</span>
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(9px, 1.2vh, 10.13px)", letterSpacing: "1px", color: "#75777D", textTransform: "uppercase" }}>CURRENT STATUS</span>
                  <div style={{ background: "#CFE5FF", borderRadius: "9999px", padding: "clamp(4px, 0.6vh, 5.53px) clamp(10px, 1.5vw, 14.74px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(9px, 1.2vh, 11.05px)", letterSpacing: "0.28px", color: "#004673", textTransform: "uppercase" }}>PENDING FO VALIDATION</span>
                  </div>
                </div>
              </div>
              <div style={{ height: "clamp(120px, 24vh, 294.72px)", width: "100%", position: "relative", overflow: "hidden", flexShrink: 1 }}>
                <img src="/assets/maintenance/hero.svg" alt="GLC SOS 01 Site Survey View" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(9,20,38,0.75) 0%, rgba(9,20,38,0) 100%)" }} />
                <div style={{ position: "absolute", left: "clamp(16px, 3vw, 36.84px)", bottom: "clamp(12px, 2vh, 24px)" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(10px, 1.5vh, 12.89px)", letterSpacing: "2.58px", color: "#FFFFFF", textTransform: "uppercase", opacity: 0.95 }}>SITE: GLC SOS 01 • SECTOR A</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "clamp(16px, 2.5vh, 44.21px)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "12px", width: "100%", maxWidth: "825.21px", flexWrap: "wrap", boxSizing: "border-box" }}>
              <button
                onClick={() => router.push("/home/maintenance/services")}
                style={{ background: "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", boxShadow: "0px 9.21px 13.82px -2.76px rgba(0,0,0,0.15)", border: "none", height: "clamp(44px, 6vh, 62.84px)", flex: "1 1 250px", maxWidth: "399.71px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0 16px" }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(13px, 1.8vh, 16.58px)", color: "#FFFFFF", textAlign: "center" }}>Track Progress & Invoices</span>
              </button>
              <button
                onClick={() => router.push("/home/maintenance/services")}
                style={{ background: "transparent", border: "clamp(1.5px, 0.2vh, 1.842px) solid #2780C4", borderRadius: "9999px", height: "clamp(44px, 6vh, 62.84px)", flex: "1 1 250px", maxWidth: "399.71px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0 16px" }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(13px, 1.8vh, 16.58px)", color: "#2780C4", textAlign: "center" }}>Return to Services Hub</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
