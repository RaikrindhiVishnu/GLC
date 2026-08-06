"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useLenis } from 'lenis/react';
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    key: "borewell-drilling",
    tag: { label: "ESSENTIAL STEP 1", bg: "#E7E8E9", color: "#191C1D" },
    borderTop: false,
    iconSrc: "/assets/maintenance/Overlay (13).svg",
    title: "Borewell & Drilling",
    desc: "Installation of high-yield borewells, solar power grids, and automated irrigation lines.",
    btnLabel: "+ Add to Estimate",
    btnLabelAdded: "✓ Added to Estimate",
  },
  {
    key: "fencing-security",
    tag: null,
    borderTop: false,
    iconSrc: "/assets/maintenance/Overlay (14).svg",
    title: "Fencing & Security",
    desc: "Reinforced perimeter fencing, gatehouse construction, and AI-enabled thermal surveillance.",
    btnLabel: "+ Add to Estimate",
    btnLabelAdded: "✓ Added to Estimate",
  },
  {
    key: "farmhouse-construction",
    tag: { label: "PREMIUM LIFESTYLE", bg: "#2780C4", color: "#FFFFFF" },
    borderTop: true,
    iconSrc: "/assets/maintenance/Overlay (15).svg",
    title: "Farmhouse Construction",
    desc: "Sustainable architectural design tailored to your lifestyle. Pre-approved permit processing included.",
    btnLabel: "View Floorplans & Add",
    btnLabelAdded: "✓ Added to Estimate",
  },
  {
    key: "organic-farm-setup",
    tag: null,
    borderTop: false,
    iconSrc: "/assets/maintenance/Overlay (16).svg",
    title: "Organic Farming Setup",
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

function MaintenanceServicesCatalogInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const farmlandId = searchParams.get("farmland") || "Unknown Asset";
  // Views are not incremented on the owner's dashboard

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const lenis = useLenis();

  useEffect(() => {
    if (showModal) {
      if (lenis) lenis.stop();
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
    } else {
      if (lenis) lenis.start();
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
    }
    return () => {
      if (lenis) lenis.start();
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
    };
  }, [showModal, lenis]);

  const toggleService = (name: string) => {
    setSelectedServices((prev) => prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]);
  };

  const handleTrackProgress = () => {
    if (selectedServices.length === 1) {
      if (selectedServices[0] === "organic-farm-setup") {
        router.push("/home/organicfarmingsetup");
      } else {
        router.push(`/home/maintenance/track-progress/${selectedServices[0]}`);
      }
    } else if (selectedServices.length > 1) {
      router.push(`/home/maintenance/select-service?services=${selectedServices.join(",")}`);
    }
  };

  return (
    <>
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
              Asset Development &<br />Maintenance
            </h2>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "32px", color: "#45474C", maxWidth: "640px" }}>
              Transform your bare land into a fully operational estate with our end-to-end infrastructure and construction services.
            </span>
          </div>

          <div
            style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "16px 24px", gap: "16px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", cursor: "pointer", flexShrink: 0 }}
          >
            <img src="/assets/maintenance/Icon (27).svg" alt="Active Asset Icon" width={18} height={20} style={{ flexShrink: 0 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>ACTIVE ASSET</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>
                {farmlandId.replace(/-/g, " ")}
              </span>
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
                    <img src={svc.iconSrc} alt={svc.title} width={48} height={48} style={{ flexShrink: 0 }} />
                    {svc.tag && (
                      <div style={{ background: svc.tag.bg, borderRadius: "100px", padding: "6px 12px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: svc.tag.color, textAlign: "center" }}>
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
                  <div style={{ display: "flex", alignItems: "center", justifyItems: "center", height: "100%", color: "#A6A8B1", fontSize: "14px", fontStyle: "italic", textAlign: "center" }}>
                    Select development services from the catalog to configure estimates.
                  </div>
                ) : (
                  selectedServices.map((item) => {
                    const svc = SERVICES.find((s) => s.key === item);
                    return (
                      <div key={item} style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px", width: "100%", height: "56px", background: "#F3F4F5", borderRadius: "48px" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                          <img src={svc?.iconSrc} alt={svc?.title} width={24} height={24} style={{ flexShrink: 0, borderRadius: "50%" }} />
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#0F2F4C" }}>{svc?.title}</span>
                        </div>
                        <button onClick={() => toggleService(item)} style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                          <img src="/assets/maintenance/Icon (25).svg" alt="Remove" width={16} height={18} />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              <button
                disabled={selectedServices.length === 0}
                onClick={() => {
                  if (selectedServices.length === 1 && selectedServices[0] === "organic-farm-setup") {
                    router.push("/home/organicfarmingsetup");
                  } else {
                    setShowModal(true);
                  }
                }}
                style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "20px 0", width: "100%", height: "56px", background: selectedServices.length > 0 ? "radial-gradient(50% 130.51% at 50% 50%, #2780C4 0%, #164573 100%)" : "#C5C6CD", borderRadius: "32px", border: "none", boxShadow: selectedServices.length > 0 ? "0px 10px 15px -3px rgba(0,0,0,0.1)" : "none", cursor: selectedServices.length > 0 ? "pointer" : "not-allowed" }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.5px" }}>GENERATE WORK ORDER</span>
              </button>

              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "16px", gap: "12px", width: "100%", background: "#F3F4F5", borderRadius: "48px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#75777D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "20px", color: "#45474C" }}>
                  Our architecture team will review your selection and generate a detailed cost sheet within 48 hours.
                </span>
              </div>
              
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "0px", gap: "7.99px", width: "100%", height: "20px", marginTop: "12px", marginBottom: "8px", cursor: "pointer" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", width: "11.67px", height: "10.5px" }}>
                  <img src="/assets/maintenance/Icon (31).svg" alt="Architect" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", display: "flex", alignItems: "center", textAlign: "center", color: "#2780C4" }}>Speak to a Development Architect</span>
              </div>
            </div>

            {/* Location widget */}
            <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px", gap: "16px", width: "100%", background: "#FFFFFF", border: "1px solid #EDEEEF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px" }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", width: "100%" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "9999px", overflow: "hidden", flexShrink: 0, background: "#E2E8F0" }}>
                  <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=200&auto=format&fit=crop" alt="Site" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>Site Status</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "#45474C" }}>42% Infrastructure Ready</span>
                </div>
              </div>
              <div style={{ width: "100%", height: "128px", borderRadius: "32px", overflow: "hidden", position: "relative" }}>
                <img src="/assets/maintenance/Rectangle 4166 (11).svg" alt="Site Status Map" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SUCCESS MODAL ─── */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" style={{
            background: "rgba(9, 20, 38, 0.6)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="flex flex-col bg-[#FFFFFF] relative overflow-hidden"
              style={{
                width: "932px",
                maxWidth: "100%",
                maxHeight: "calc(100vh - 80px)",
                borderRadius: "48px",
                boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
              }}
            >
              <div data-lenis-prevent className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col items-center" style={{ padding: "50px 22px", gap: "29px" }}>
              
                {/* Header Icon */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
                  <div style={{ position: "relative", width: "96px", height: "96px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "5px solid #AED6EF", borderRadius: "9999px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 10px 15px -3px rgba(39, 128, 196, 0.2), 0px 4px 6px -4px rgba(39, 128, 196, 0.2)" }}>
                    <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                      <path d="M4 14L14 24L32 4" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "502px" }}>
                  <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "55px", lineHeight: "55px", letterSpacing: "-1.38px", color: "#131600", textAlign: "center", paddingBottom: "14px" }}>
                    Request Submitted
                  </h1>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#414753", textAlign: "center", maxWidth: "494px" }}>
                    Your service request has been registered. A Field Officer will be assigned shortly to begin the validation process for your property.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "56px", width: "100%", maxWidth: "740px", flexWrap: "wrap", marginTop: "20px" }}>
                  {/* Card 1: Selected Services */}
                  <div style={{ width: "342px", display: "flex", flexDirection: "column", padding: "24px", background: "#FFFFFF", borderRadius: "48px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.04)" }}>
                    <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.7px", textTransform: "uppercase", color: "#424750", marginBottom: "20px" }}>
                      Selected Services
                    </h2>
                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {selectedServices.map((serviceId, index) => {
                        const srv = SERVICES.find((s) => s.key === serviceId);
                        if (!srv) return null;
                        return (
                          <React.Fragment key={serviceId}>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", padding: "12px 0" }}>
                              <img src={srv.iconSrc} alt={srv.title} width={40} height={40} style={{ borderRadius: "50%", flexShrink: 0 }} />
                              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#003667" }}>{srv.title}</span>
                            </div>
                            {index < selectedServices.length - 1 && (
                              <div style={{ width: "100%", height: "1px", background: "#C2C6D2", opacity: 0.3 }} />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card 2: Summary */}
                  <div style={{ width: "342px", display: "flex", flexDirection: "column", padding: "32px", background: "#FFFFFF", borderRadius: "48px", boxShadow: "0px 4px 40px rgba(26, 28, 28, 0.04)" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "16px", borderBottom: "1px solid #F1F3FA", marginBottom: "16px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.58)" }}>
                        SERVICE TYPE
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "14px", lineHeight: "20px", color: "#0F2F4C", textAlign: "right", maxWidth: "120px" }}>
                        {selectedServices.length > 1 ? "Multiple Services" : SERVICES.find((s) => s.key === selectedServices[0])?.title}
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid #F1F3FA", marginBottom: "16px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.58)" }}>
                        TARGET PROPERTY
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "14px", lineHeight: "20px", letterSpacing: "-0.35px", color: "#0F2F4C" }}>
                        {farmlandId}
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.58)", width: "75px" }}>
                        CURRENT STATUS
                      </span>
                      <div style={{ background: "rgba(39, 128, 196, 0.2)", borderRadius: "9999px", padding: "6px 16px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", lineHeight: "16px", letterSpacing: "0.55px", textTransform: "uppercase", color: "#0F2F4C", textAlign: "center" }}>
                          PENDING FO VALIDATION
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Deck */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "22px", marginTop: "24px", flexWrap: "wrap", width: "100%" }}>
                  <button
                    onClick={handleTrackProgress}
                    style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "18px 29px", width: "100%", maxWidth: "400px", background: "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9209px", border: "none", cursor: "pointer", boxShadow: "0px 9px 13px -2.7px rgba(0, 0, 0, 0.1)" }}
                  >
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16.5px", lineHeight: "26px", color: "#FFFFFF" }}>
                      Track Progress & Invoices
                    </span>
                  </button>

                  <button
                    onClick={() => router.push("/home")}
                    style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "18px 29px", width: "100%", maxWidth: "403px", background: "#FFFFFF", border: "1.84px solid #2780C4", borderRadius: "9209px", cursor: "pointer" }}
                  >
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16.5px", lineHeight: "26px", color: "#2780C4" }}>
                      Return to Home
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function MaintenanceServicesCatalog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MaintenanceServicesCatalogInner />
    </Suspense>
  );
}
