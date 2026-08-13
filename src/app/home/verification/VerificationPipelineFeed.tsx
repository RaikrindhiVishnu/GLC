"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetVerificationLandsByUserIdQuery } from "../../../services/verification";

export default function VerificationPipelineFeed() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const farmlandIdParam = searchParams.get("farmland");
  const numericId = farmlandIdParam ? parseInt(farmlandIdParam.replace(/\D/g, "")) : null;

  const userId = 2; // Hardcoded to 2 as per backend request
  
  const { data: res, isLoading: isQueryLoading } = useGetVerificationLandsByUserIdQuery(
    { user_id: userId, offset: 0, limit: 200 },
    { skip: !mounted || !userId }
  );
  
  const isLoading = !mounted || isQueryLoading;
  const allLands = res?.data || [];
  
  // If farmland param is present, try to filter, or we can use mock data if needed.
  // The user asked to show mock farmland details based on the query parameter.
  const lands = farmlandIdParam 
    ? allLands.filter((land: any) => land.farmland_code === farmlandIdParam.replace(/-/g, ' ')) 
    : allLands;

  // In case we want to show a specific mock when not found in allLands
  const displayLands = (farmlandIdParam && lands.length === 0) 
    ? [{ 
        farmland_id: 999, 
        farmland_code: farmlandIdParam.replace(/-/g, ' '), 
        is_active: true, 
        created_on: new Date().toISOString(),
        farmland_img: "/assets/verification-of-farmland/pipeline.svg"
      }] 
    : lands;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 box-border flex flex-col">
      {/* ─── FEED HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%", marginBottom: "48px" }}
      >
        <h2 style={{ margin: "0 0 12px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.2", letterSpacing: "-1.5px", color: "#131600" }}>
          Verification Pipeline
        </h2>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "32px", color: "rgba(69,71,76,0.8)", maxWidth: "672px" }}>
          Comprehensive asset auditing for Green Land Capital. Real-time status of land acquisition and agronomy certification.
        </span>
      </motion.div>

      {/* ─── SPLIT-CONSOLE WRAPPER FRAME ─── */}
      <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
        {/* LEFT COLUMN: 4-Tier Pipeline Tracker */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:flex-1"
          style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "40px", background: "#FFFFFF", border: "1px solid rgba(197,198,205,0.15)", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", position: "relative" }}
        >
          {/* Timeline Stack Container */}
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            
            {/* STEP 1: Field Officer (FO) Audit */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "24px", width: "100%" }}>
              {/* Vertical Icon Node Slot */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                {/* Cleared Check Circle */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#C5DFFF",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Inline Check SVG */}
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1.5 5.5 5 9 12.5 1.5"></polyline>
                  </svg>
                </div>
                {/* Connecting Track Strip */}
                <div style={{ width: "2px", height: "72px", background: "#AED6EF", marginTop: "8px" }} />
              </div>

              {/* Data Row Info */}
              <div style={{ display: "flex", flexDirection: "column", paddingTop: "4px", paddingBottom: "24px", flexGrow: 1 }}>
                <h3 style={{ margin: "0 0 4px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C" }}>
                  Field Officer (FO) Audit
                </h3>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "#45474C" }}>
                  Physical boundaries, soil, and water access validated.
                </span>
              </div>
            </div>

            {/* STEP 2: Regional Officer (RO) Check */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "24px", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#C5DFFF",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1.5 5.5 5 9 12.5 1.5"></polyline>
                  </svg>
                </div>
                <div style={{ width: "2px", height: "72px", background: "#AED6EF", marginTop: "8px" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", paddingTop: "4px", paddingBottom: "24px", flexGrow: 1 }}>
                <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C" }}>
                  Regional Officer (RO) Check
                </h3>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "#45474C" }}>
                  Physical site inspection and soil quality analysis completed by external partners.
                </span>
              </div>
            </div>

            {/* STEP 3: Intelligence Officer (IO) Risk Assessment (Active) */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "24px", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                {/* Active Indicator Pin */}
                <div
                  style={{
                    boxSizing: "border-box",
                    width: "40px",
                    height: "40px",
                    background: "#FFFFFF",
                    border: "2px solid rgba(192, 199, 210, 0.3)",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "12px", height: "12px", background: "#2780C4", borderRadius: "9999px" }} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", paddingTop: "4px", paddingBottom: "24px", flexGrow: 1 }}>
                {/* Header info split holding active state flag */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "12px" }}>
                  <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C" }}>
                    Intelligence Officer (IO) Risk Assessment
                  </h3>
                  {/* Sky Blue Active Indicator Capsule */}
                  <div style={{ background: "rgba(0, 98, 158, 0.1)", borderRadius: "9999px", padding: "4px 12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.6px", color: "#2780C4" }}>
                      ACTIVE
                    </span>
                  </div>
                </div>

                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "#45474C" }}>
                  Final legal clearance and hazard mapping.
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT COLUMN: Aside Micro-Widgets */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full lg:w-96"
          style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px" }}
        >
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-[200px] bg-white rounded-[32px] border border-gray-100 shadow-sm">
              <span className="font-jakarta text-[#0F2F4C]">Loading verification assets...</span>
            </div>
          ) : (displayLands.length > 0 ? displayLands : [{ farmland_id: "mock", farmland_code: "GLC SOS 01", is_active: true }]).map((land: any) => (
            <React.Fragment key={land.farmland_id}>
              {/* Asset Context Card */}
              <div style={{
                boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start",
                padding: "32px", gap: "16px", width: "100%",
                background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.15)",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px"
              }}>
                {/* Property Image */}
                <div style={{
                  width: "100%", height: "178.88px", borderRadius: "48px",
                  backgroundImage: `url(${land.farmland_img || "/assets/verification-of-farmland/pipeline.svg"})`,
                  backgroundSize: "cover", backgroundPosition: "center"
                }} />

                {/* Title & Status */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingTop: "8px", width: "100%", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.6px", color: "#131600" }}>
                      GLC {land.farmland_code || `SOS 01`}
                    </h2>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: "#2780C4" }}>
                      Zaheerabad Region
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "4px 12px", background: "#CFE5FF", borderRadius: "9999px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#004A78", whiteSpace: "nowrap" }}>
                      In Progress
                    </span>
                  </div>
                </div>

                {/* Horizontal Divider & Data */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px 0px", gap: "16px", width: "100%", borderTop: "1px solid #F3F4F5" }}>
                  
                  {/* Est Completion */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px", flex: 1 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(69, 71, 76, 0.6)" }}>
                      EST. COMPLETION
                    </span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#131600" }}>
                      Oct 24, 2024
                    </span>
                  </div>

                  {/* Vertical Border */}
                  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "16px", gap: "4px", flex: 1, borderLeft: "1px solid #F3F4F5" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(69, 71, 76, 0.6)" }}>
                      TOTAL ACREAGE
                    </span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#131600" }}>
                      {land.acers || "77.00"} Acres
                    </span>
                  </div>
                </div>
              </div>

              {/* Section - Certificate Download */}
              <div style={{
                boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start",
                padding: "24px", gap: "24px", width: "100%",
                background: "linear-gradient(110.24deg, #121415 3.03%, #1C1F21 96.77%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                borderRadius: "40px", position: "relative", overflow: "hidden"
              }}>
                {/* Overlay+Blur */}
                <div style={{
                  position: "absolute", width: "128px", height: "128px", right: "-39px", top: "-39px",
                  background: "rgba(78, 95, 126, 0.2)", filter: "blur(30px)", borderRadius: "9999px", zIndex: 0
                }} />

                {/* Container (Header) */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px", width: "100%", zIndex: 1 }}>
                  {/* Icon Container */}
                  <div style={{
                    boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                    width: "46px", height: "48px", background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "16px", flexShrink: 0
                  }}>
                    <div style={{
                      boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                      width: "32px", height: "32px", border: "2px solid #B6C7EB", borderRadius: "9999px"
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Text Container */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                    <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "28px", color: "#FFFFFF" }}>
                      GLC Verification Certificate
                    </h3>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#FFFFFF", opacity: 0.49 }}>
                      Cryptographically signed and legally vetted.
                    </span>
                  </div>
                </div>

                {/* Download Button */}
                <button style={{
                  display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                  padding: "16px 0px", width: "100%", height: "48px",
                  background: "#2780C4", borderRadius: "9999px", border: "none", cursor: "pointer", zIndex: 2
                }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "15px", textAlign: "center", letterSpacing: "1.5px", textTransform: "uppercase", color: "#FFFFFF" }}>
                    DOWNLOAD OFFICIAL REPORT
                  </span>
                </button>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
