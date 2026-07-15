"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function MaintenancePipelineFeed({ serviceSlug = "fencing-security" }: { serviceSlug?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const farmlandIdParam = searchParams.get("farmland") || "GLC-SOS-01";
  const plan = searchParams.get("plan");
  const organicPlanDisplay = plan === "timber" ? "Premium Timber (60/40) Split" : "Standard Agri-Yield (50/50)";

  // Service specific data mapping
  const serviceData: Record<string, { title: string, listTitle: string, phases: string[], price: string, subtext: string, middleImage: string | null }> = {
    "fencing-security": {
      title: "Fencing & Security",
      listTitle: "Fencing & Security",
      price: "₹4,50,000",
      phases: ["Site Survey & Planning", "Post Installation", "Chain Link", "Gate installation"],
      subtext: "Inspection in progress",
      middleImage: null
    },
    "borewell-drilling": {
      title: "Borewell & Drilling",
      listTitle: "Borewell & Drilling",
      price: "₹4,50,000",
      phases: ["Site Survey & Planning", "Drilling in Progress", "Water Testing & Development"],
      subtext: "Inspection in progress",
      middleImage: null
    },
    "farmhouse-construction": {
      title: "Farmhouse Construction",
      listTitle: "Farmhouse Construction",
      price: "₹2,50,000",
      phases: ["Site Clearing & Pre", "Foundation & Framing", "Plumbing & Electical"],
      subtext: "Inspection in progress",
      middleImage: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
    },
    "organic-farm-setup": {
      title: "Organic Farm Setup",
      listTitle: organicPlanDisplay,
      price: "₹4,50,000",
      phases: ["Field Officer Validation", "Deep Soil Analysis", "Organic Conversion", "Planting"],
      subtext: "Inspection in progress",
      middleImage: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    }
  };

  const currentService = serviceData[serviceSlug] || serviceData["fencing-security"];

  if (!mounted) {
    return <div className="w-full min-h-screen bg-[#F8F9FA]" />;
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-16 lg:py-24 box-border flex flex-col relative pb-[160px]">
      
      {/* ─── SPLIT-CONSOLE WRAPPER FRAME ─── */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-[40px] w-full">
        
        {/* LEFT COLUMN: Onboarding Phases (304px width as per Figma) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-[304px] flex-shrink-0 flex flex-col items-start p-8"
          style={{ 
            background: "#FFFFFF", 
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", 
            borderRadius: "48px",
            gap: "48px"
          }}
        >
          {/* Heading */}
          <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.5px", color: "#131600" }}>
            Onboarding Phases
          </h2>

          <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "48px" }}>
            {currentService.phases.map((phase, index) => {
              const isActive = index === 0;
              return (
                <div key={index} style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "24px", width: "100%", opacity: isActive ? 1 : 0.4 }}>
                  {isActive ? (
                    <div style={{ position: "relative", width: "32px", height: "32px", background: "#00629E", borderRadius: "9999px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                      <div style={{ position: "absolute", inset: 0, boxShadow: "0px 0px 0px 4px rgba(0, 98, 158, 0.2)", borderRadius: "9999px" }} />
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ zIndex: 1 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  ) : (
                    <div style={{ width: "32px", height: "32px", background: "#E1E3E4", borderRadius: "9999px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                      <svg width="10" height="13" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                  )}
                  
                  <div style={{ display: "flex", flexDirection: "column", marginTop: "-1px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: isActive ? "#091426" : "#45474C", textTransform: isActive ? "none" : "uppercase", letterSpacing: "0.35px" }}>
                      PHASE {index + 1}
                    </span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "22px", color: "#131600", marginTop: isActive ? "0px" : "0px" }}>
                      {phase}
                    </span>
                    {isActive && (
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#45474C", marginTop: "4px" }}>
                        {currentService.subtext}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* MIDDLE COLUMN: Live Site Updates (Only if image provided) */}
        {currentService.middleImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 lg:max-w-[500px] flex flex-col gap-4"
          >
            <h2 style={{ margin: "0 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.5px", color: "#131600" }}>
              Live Site Updates
            </h2>
            
            {/* Image Card */}
            <div style={{ width: "100%", height: "260px", borderRadius: "48px", overflow: "hidden", position: "relative" }}>
              <Image 
                src={currentService.middleImage} 
                alt="Site Update" 
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            
            {/* Status Card */}
            <div style={{ width: "100%", padding: "40px", background: "#F3F4F5", borderRadius: "48px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginTop: "16px" }}>
              <div style={{ width: "48px", height: "48px", background: "#E1E3E4", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0A2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#131600" }}>
                  Awaiting First Inspection
                </h3>
                <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", maxWidth: "260px" }}>
                  Satellite confirmation pending ground verification from Vikram.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* RIGHT COLUMN: Financials & Admin */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`w-full ${currentService.middleImage ? "lg:w-[380px]" : "lg:max-w-[660px] lg:flex-1"} flex flex-col gap-4 flex-shrink-0`}
        >
          <h2 style={{ margin: "0 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.5px", color: "#131600" }}>
            Financials & Admin
          </h2>

          {/* Dark glass card */}
          <div style={{ padding: "32px", background: "#091426", borderRadius: "48px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "240px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Header row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#FFFFFF" }}>
                  INITIAL SETUP INVOICE
                </span>
                <svg width="22" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="19" y1="4" x2="19" y2="4.01"></line>
                  <line x1="5" y1="4" x2="5" y2="4.01"></line>
                </svg>
              </div>
              
              {/* Price & Subtext */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "40px", letterSpacing: "-0.9px", color: "#FFFFFF" }}>
                  {currentService.price}
                </h3>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255, 255, 255, 0.4)" }}>
                  Due upon validation completion
                </span>
              </div>
            </div>
            
            {/* Button */}
            <div style={{ width: "100%", maxWidth: "481px", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(255, 255, 255, 0.002)", boxShadow: "0px 10px 15px -3px rgba(30, 58, 138, 0.4), 0px 4px 6px -4px rgba(30, 58, 138, 0.4)", borderRadius: "32px", zIndex: 0 }} />
              <button style={{ width: "100%", padding: "16px 0", background: "#2780C4", borderRadius: "32px", border: "none", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", position: "relative", zIndex: 1, cursor: "pointer" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#FFFFFF", textAlign: "center" }}>
                  Pay & Resume Work
                </span>
                <svg width="7" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* iOS style grouped list */}
          <div style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "48px", marginTop: "16px", width: "100%" }}>
            
            {/* Row 1 */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid #EDEEEF", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "40px", height: "40px", background: "#EDEEEF", borderRadius: "32px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                  <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#091426" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#131600" }}>
                  {farmlandIdParam}
                </span>
              </div>
              <svg width="8" height="12" viewBox="0 0 24 24" fill="none" stroke="#C5C6CD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
            
            {/* Row 2 */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "40px", height: "40px", background: "#EDEEEF", borderRadius: "32px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#091426" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#131600" }}>
                  {currentService.listTitle}
                </span>
              </div>
              <svg width="8" height="12" viewBox="0 0 24 24" fill="none" stroke="#C5C6CD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
