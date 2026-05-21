"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SERVICES = [
  {
    key: "Borewell Installation",
    tag: { label: "ESSENTIAL SETUP", bg: "#E7E8E9", color: "#191C1D" },
    borderTop: false,
    iconBg: "rgba(39,128,196,0.1)",
    icon: (
      <svg width="20" height="25" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "Water & Utilities Setup",
    desc: "Installation of high-yield borewells, solar power grids, and automated irrigation lines.",
    btnLabel: "+ Add to Estimate",
    btnLabelAdded: "✓ Added to Estimate",
  },
  {
    key: "Chainlink Fencing",
    tag: null,
    borderTop: false,
    iconBg: "rgba(39,128,196,0.1)",
    icon: (
      <svg width="20" height="25" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Boundary & Security",
    desc: "Reinforced perimeter fencing, gatehouse construction, and AI-enabled thermal surveillance.",
    btnLabel: "+ Add to Estimate",
    btnLabelAdded: "✓ Added to Estimate",
  },
  {
    key: "Eco-Luxury Build",
    tag: { label: "PREMIUM LIFESTYLE", bg: "#2780C4", color: "#FFFFFF" },
    borderTop: true,
    iconBg: "rgba(39,128,196,0.2)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    title: "Eco-Luxury Farmhouse Build",
    desc: "Sustainable architectural design tailored to your lifestyle. Pre-approved permit processing included.",
    btnLabel: "View Designs & Add",
    btnLabelAdded: "✓ Added to Estimate",
  },
  {
    key: "Agri-Ready Preparation",
    tag: null,
    borderTop: false,
    iconBg: "rgba(39,128,196,0.1)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Agri-Ready Preparation",
    desc: "Soil enrichment, leveling, and plot division for immediate high-yield crop cultivation.",
    btnLabel: "+ Add to Estimate",
    btnLabelAdded: "✓ Added to Estimate",
  },
];

const STEPS = [
  { num: 1, title: "Feasibility", desc: "On-site land assessment and technical viability checks." },
  { num: 2, title: "Work Order", desc: "Milestone tracking and encrypted milestone dispatch." },
  { num: 3, title: "Tracking", desc: "Real-time drone feeds and live site surveillance." },
];

export default function MaintenanceServicesCatalog() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>(["Borewell Installation", "Chainlink Fencing"]);

  const toggleService = (name: string) => {
    setSelectedServices((prev) => prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 box-border flex flex-col gap-12">

      {/* ─── SECTION HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 w-full"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.1", letterSpacing: "-1.2px", color: "#0F2F4C" }}>
            Asset Development & Maintenance
          </h2>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "32px", color: "#45474C", maxWidth: "640px" }}>
            Transform your bare land into a fully operational estate with our end-to-end infrastructure and construction services.
          </span>
        </div>

        <div
          style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "16px 24px", gap: "16px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", cursor: "pointer", flexShrink: 0 }}
          onClick={() => alert("Loading complete localized land survey mapping registries...")}
        >
          <div style={{ width: "18px", height: "20px", background: "#2780C4", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "10px", color: "#FFFFFF", fontWeight: "bold" }}>⌖</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>ACTIVE ASSET</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>GLC SOS 01 Estate & Survey</span>
          </div>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#75777D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 1 6 6 11 1" />
          </svg>
        </div>
      </motion.div>

      {/* ─── MAIN CONTENT SPLIT ─── */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">

        {/* LEFT: Service catalog + trust banner */}
        <div className="w-full lg:flex-1 flex flex-col gap-8">

          {/* Service grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "32px",
                  gap: "16px",
                  background: "#FFFFFF",
                  boxShadow: "0px 4px 40px rgba(9,20,38,0.04)",
                  borderRadius: "32px",
                  borderTop: svc.borderTop ? "4px solid #2780C4" : undefined,
                }}
              >
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", background: svc.iconBg, borderRadius: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {svc.icon}
                  </div>
                  {svc.tag && (
                    <div style={{ background: svc.tag.bg, borderRadius: "9999px", padding: "4px 12px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: svc.tag.color, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                        {svc.tag.label}
                      </span>
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>{svc.title}</h3>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#45474C" }}>{svc.desc}</p>
                </div>

                <button
                  onClick={() => toggleService(svc.key)}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "12px 0",
                    width: "100%",
                    height: "46px",
                    background: selectedServices.includes(svc.key) ? "rgba(39,128,196,0.08)" : "transparent",
                    border: selectedServices.includes(svc.key) ? "1px solid #2780C4" : "1px solid #C5C6CD",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: selectedServices.includes(svc.key) ? "#2780C4" : "#0F2F4C" }}>
                    {selectedServices.includes(svc.key) ? svc.btnLabelAdded : svc.btnLabel}
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Trust banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "40px", isolation: "isolate", width: "100%", background: "rgba(207,229,255,0.3)", borderRadius: "32px", position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", width: "256px", height: "256px", right: "-80px", bottom: "-80px", background: "rgba(0,98,158,0.05)", filter: "blur(32px)", borderRadius: "9999px", zIndex: 0 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%", zIndex: 1, position: "relative" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C" }}>
                100% Digital Execution
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                {STEPS.map((step) => (
                  <div key={step.num} style={{ display: "flex", flexDirection: "row", gap: "16px", flex: 1 }}>
                    <div style={{ width: "32px", height: "32px", background: "#0F2F4C", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#FFFFFF" }}>{step.num}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>{step.title}</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "15px", color: "#45474C" }}>{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Order ticket + location */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full lg:w-103.5 lg:shrink-0 flex flex-col gap-8"
        >
          {/* Summary card */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px", gap: "24px", width: "100%", background: "#FFFFFF", border: "1px solid #EDEEEF", boxShadow: "0px 20px 60px rgba(9,20,38,0.06)", borderRadius: "32px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#0F2F4C" }}>Your Request Summary</h3>
              <div style={{ background: "#EDEEEF", borderRadius: "16px", padding: "4px 8px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#45474C" }}>
                  {selectedServices.length} {selectedServices.length === 1 ? "ITEM" : "ITEMS"}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", minHeight: "136px" }}>
              {selectedServices.length === 0 ? (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#A6A8B1", fontSize: "14px", fontStyle: "italic" }}>
                  Select development services from the catalog map to configure estimates.
                </div>
              ) : (
                selectedServices.map((item) => (
                  <div key={item} style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px", width: "100%", height: "56px", background: "#F3F4F5", borderRadius: "48px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#0F2F4C" }}>{item}</span>
                    </div>
                    <button onClick={() => toggleService(item)} style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C5C6CD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={() => {
                if (selectedServices.length === 0) return alert("Please specify at least one action service estimate configuration item.");
                router.push("/home/maintenance?submitted=true");
              }}
              style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "20px 0", width: "100%", height: "56px", background: "radial-gradient(50% 130.51% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "32px", border: "none", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", cursor: selectedServices.length > 0 ? "pointer" : "not-allowed", opacity: selectedServices.length > 0 ? 1 : 0.6 }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.5px" }}>Request Service Estimate</span>
            </button>

            <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "16px", gap: "12px", width: "100%", background: "#F3F4F5", borderRadius: "48px" }}>
              <div style={{ width: "12px", height: "12px", background: "#75777D", borderRadius: "6px", flexShrink: 0, marginTop: "4px" }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "20px", color: "#45474C" }}>
                Our architecture team will review your selection and generate a detailed cost sheet within 48 hours.
              </span>
            </div>

            <div onClick={() => alert("Launching secure encrypted stream dispatch to authorized Regional Development Architect...")} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px", width: "100%", cursor: "pointer" }}>
              <div style={{ width: "12px", height: "11px", background: "#2780C4", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "7px", color: "#FFFFFF", fontWeight: "bold" }}>📞</span>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#2780C4" }}>Speak to a Development Architect</span>
            </div>
          </div>

          {/* Location widget */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px", gap: "16px", width: "100%", background: "#FFFFFF", border: "1px solid #EDEEEF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", width: "100%" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "9999px", background: "#E2E8F0", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%, #4ADE80 0%, #166534 100%)" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>Site Status</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "#45474C" }}>GPS verified | Active Feeds</span>
              </div>
            </div>
            <div style={{ width: "100%", height: "128px", background: "#EDEEEF", borderRadius: "32px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="100%" height="100%" viewBox="0 0 364 128" fill="none" preserveAspectRatio="none" style={{ opacity: 0.5 }}>
                <rect width="364" height="128" fill="#F1F5F9" />
                <path d="M0 30 Q 90 0, 180 50 T 364 20 L 364 128 L 0 128 Z" fill="#E2E8F0" />
                <path d="M0 70 Q 120 40, 240 90 T 364 80 L 364 128 L 0 128 Z" fill="#CBD5E1" />
                <line x1="50" y1="0" x2="50" y2="128" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="0" x2="200" y2="128" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
              <div style={{ position: "absolute", bottom: "12px", right: "12px", background: "rgba(15,47,76,0.85)", borderRadius: "12px", padding: "4px 8px" }}>
                <span style={{ fontSize: "9px", color: "#FFFFFF", fontWeight: "bold", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>🛰️ FEED READY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
