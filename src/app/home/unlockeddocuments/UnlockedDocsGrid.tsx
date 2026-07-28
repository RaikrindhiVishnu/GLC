"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGetUserUnlockedFarmlandsQuery } from "../../../services/unlocked";

export default function UnlockedDocsGrid() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Unlocks");
  const [selectedDossier, setSelectedDossier] = useState<any | null>(null);

  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);



  const filterTabs = ["All Unlocks"];

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const userId = 5; // Hardcoded to 5 for unlocked documents
  const { data: res, isLoading: isQueryLoading } = useGetUserUnlockedFarmlandsQuery(
    { userId },
    { skip: !mounted || !userId }
  );
  
  const isLoading = !mounted || isQueryLoading;
  const farmlands = res?.data || [];

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1360;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${currentScale})`;
      }
      if (shellRef.current && scalerRef.current) {
        const contentHeight = scalerRef.current.scrollHeight;
        shellRef.current.style.height = `${contentHeight * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [selectedDossier, farmlands]);

  useEffect(() => {
    if (farmlands && farmlands.length > 0 && !selectedDossier) {
      setSelectedDossier(farmlands[0]);
    }
  }, [farmlands, selectedDossier]);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>

      {/* ─── MOBILE TREE ─── */}
      <div className="block lg:hidden">
        <section className="w-full px-4 py-12 flex flex-col gap-8 box-border">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#004A78" }}>
              PREMIUM ASSET DISCOVERY
            </span>
            <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 8vw, 48px)", letterSpacing: "-2px", color: "#0F2F4C", lineHeight: 1.1 }}>
              Intelligence Vault
            </h2>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#0F2F4C", borderRadius: "9999px", padding: "10px 20px", marginTop: "4px", alignSelf: "flex-start", boxShadow: "0px 10px 15px -3px rgba(9,20,38,0.1)" }}>
              <svg width="12" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "13px", color: "#FFFFFF", whiteSpace: "nowrap" }}>3 Premium Unlocks Remaining</span>
              <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.2)" }} />
              <span onClick={() => router.push("/pricing")} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#CFE5FF", cursor: "pointer" }}>
                Get More Credits
              </span>
            </div>
          </motion.div>

          {/* Search + Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >


            {/* Filter tabs */}
            <div style={{ display: "flex", flexDirection: "row", gap: "8px", overflowX: "auto", paddingBottom: "4px", WebkitOverflowScrolling: "touch" as any, scrollbarWidth: "none" as any }}>
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    style={{ flexShrink: 0, padding: "10px 20px", height: "40px", background: isActive ? "#0F2F4C" : "#E7E8E9", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "13px", color: isActive ? "#FFFFFF" : "#45474C", whiteSpace: "nowrap" }}
                  >
                    {tab}
                  </button>
                );
              })}
              <button
                onClick={() => router.push("/home/unlockeddocuments")}
                style={{ flexShrink: 0, width: "40px", height: "40px", background: "#F3F4F5", borderRadius: "9999px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {isLoading ? (
              <div className="flex justify-center items-center h-[200px]">
                <span className="font-jakarta text-[#0F2F4C]">Loading unlocked documents...</span>
              </div>
            ) : farmlands.length === 0 ? (
              <div className="flex justify-center items-center h-[200px]">
                <span className="font-jakarta text-[#0F2F4C]">No unlocked documents found.</span>
              </div>
            ) : farmlands.map((card, idx) => (
              <motion.div
                key={card.farmland_id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{ background: "#FFFFFF", borderRadius: "24px", padding: "24px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "20px" }}
              >
                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C" }}>{card.farm_code}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                      <span style={{ fontSize: "12px" }}>📍</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: "#45474C", fontWeight: 500 }}>Unknown Location</span>
                    </div>
                  </div>
                  <div style={{ background: "#2780C4", borderRadius: "9999px", padding: "4px 10px", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "10px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "1px" }}>PREMIUM</span>
                  </div>
                </div>

                {/* Metrics */}
                <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "16px", padding: "14px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "10px", fontWeight: 700, color: "#75777D", letterSpacing: "0.5px", textTransform: "uppercase" }}>ACRES</span>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#0F2F4C", marginTop: "4px" }}>N/A</div>
                  </div>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "16px", padding: "14px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "10px", fontWeight: 700, color: "#75777D", letterSpacing: "0.5px", textTransform: "uppercase" }}>VALUE</span>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#0F2F4C", marginTop: "4px" }}>N/A</div>
                  </div>
                </div>

                {/* Status indicators */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px" }}>
                  {[
                    { text: `Unlocked ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`, stroke: "#00629E", textColor: "#45474C" },
                    { text: "SAFE", stroke: "#047857", textColor: "#047857", icon: "/assets/unlockdocuments/Container (19).svg" },
                    { text: "Clear Title", stroke: "#00629E", textColor: "#45474C", icon: "/assets/unlockdocuments/Icon (22).svg" },
                    { text: "Solar Grid Zone", stroke: "#00629E", textColor: "#45474C", icon: "/assets/unlockdocuments/Container (23).svg" },
                    { text: "Organic-Ready", stroke: "#00629E", textColor: "#45474C", icon: "/assets/unlockdocuments/Container (22).svg" }
                  ].map((status, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      {status.icon ? (
                        <Image src={status.icon} width={14} height={14} alt={status.text} />
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={status.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 600, color: status.textColor }}>{status.text}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <button
                    onClick={() => setSelectedDossier(card)}
                    style={{ width: "100%", height: "52px", background: "radial-gradient(50% 155.86% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", boxShadow: "0px 4px 6px -1px rgba(9,20,38,0.2)" }}
                  >
                    View Documents
                  </button>
                  <button
                    onClick={() => router.push("/search/farmlanddetails?id=match-1")}
                    style={{ width: "100%", height: "48px", border: "2px solid rgba(197,198,205,0.3)", borderRadius: "9999px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", cursor: "pointer" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="1 6 1 22 12 18 23 22 23 6 12 2 1 6" />
                      <line x1="12" y1="2" x2="12" y2="18" />
                    </svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>Open GIS Boundary</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedDossier && (
            <div style={{ width: "100%", marginTop: "32px" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "24px" }}>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "20px", color: "#0F2F4C", margin: 0 }}>
                  Document Available
                </h2>
              </div>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Card 1: Legal Documents */}
                <div style={{ position: "relative", width: "100%", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "24px", padding: "24px" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <Image src="/assets/unlockdocuments/Overlay (7).svg" alt="Legal Documents" width={48} height={48} />
                  </div>
                  <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#0B1C30" }}>Legal Documents</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(66, 71, 79, 0.6)" }}>
                    <span>PDF</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>4.2 MB</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>Oct 12, 2023</span>
                  </div>
                </div>
                {/* Card 2: Asset Valuation */}
                <div style={{ position: "relative", width: "100%", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "24px", padding: "24px" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <Image src="/assets/unlockdocuments/Overlay (8).svg" alt="Asset Valuation" width={48} height={48} />
                  </div>
                  <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#0B1C30" }}>Asset Valuation</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(66, 71, 79, 0.6)" }}>
                    <span>XLSX</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>1.8 MB</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>Jan 05, 2024</span>
                  </div>
                </div>
                {/* Card 3: Agriculture Report */}
                <div style={{ position: "relative", width: "100%", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "24px", padding: "24px" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <Image src="/assets/unlockdocuments/Overlay (9).svg" alt="Agriculture Report" width={48} height={48} />
                  </div>
                  <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#0B1C30" }}>Agriculture Report</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(66, 71, 79, 0.6)" }}>
                    <span>PDF</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>12.5 MB</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>Feb 14, 2024</span>
                  </div>
                </div>
                {/* Card 4: Local Intelligence */}
                <div style={{ position: "relative", width: "100%", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "24px", padding: "24px" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <Image src="/assets/unlockdocuments/Overlay (10).svg" alt="Local Intelligence" width={48} height={48} />
                  </div>
                  <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#0B1C30" }}>Local Intelligence</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(66, 71, 79, 0.6)" }}>
                    <span>PDF</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>8.7 MB</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>Sep 30, 2023</span>
                  </div>
                </div>
                {/* Card 5: Land & Boundaries */}
                <div style={{ position: "relative", width: "100%", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "24px", padding: "24px" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <Image src="/assets/unlockdocuments/Overlay (11).svg" alt="Land & Boundaries" width={48} height={48} />
                  </div>
                  <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#0B1C30" }}>Land & Boundaries</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(66, 71, 79, 0.6)" }}>
                    <span>ZIP</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>25.4 MB</span><div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} /><span>Nov 20, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conversion Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ position: "relative", borderRadius: "32px", overflow: "hidden", minHeight: "240px", display: "flex", alignItems: "flex-end" }}
          >
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
              <Image src="/assets/unlockdocuments/asset.svg" alt="Secure Asset Conversion Backdrop" fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(9,20,38,0.3) 0%, rgba(9,20,38,0.85) 100%)", zIndex: 1 }} />
            <div style={{ position: "relative", zIndex: 2, padding: "32px 24px", width: "100%", boxSizing: "border-box" }}>
              <h2 style={{ margin: "0 0 8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 5vw, 28px)", color: "#FFFFFF", letterSpacing: "-0.5px" }}>
                Ready to secure an asset?
              </h2>
              <p style={{ margin: "0 0 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#8590A6", lineHeight: 1.6 }}>
                Join exclusive investment pools and co-own verified Grade-A agricultural land.
              </p>
              <button
                onClick={() => router.push("/pool-buying")}
                style={{ padding: "14px 28px", background: "#00629E", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFFF", boxShadow: "0px 10px 15px -3px rgba(0,98,158,0.2)" }}
              >
                View Active Pools
              </button>
            </div>
          </motion.div>

        </section>
      </div>

      {/* ─── DESKTOP TREE ─── */}
      <div className="hidden lg:block">
        <div style={{ width: "100%", display: "flex", justifyContent: "center", overflow: "hidden" }}>
          <div
            ref={shellRef}
            style={{ position: "relative", width: "1280px", maxWidth: "100%", height: "1329px", flexShrink: 0 }}
          >
            <div
              ref={scalerRef}
              style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-640px", width: "1280px", height: "auto", minHeight: "1329px", transformOrigin: "top center", willChange: "transform" }}
            >
              <section style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "128px 32px 96px", gap: "48px", width: "1280px" }}>

                {/* Header & Credit Hub */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", padding: "0px", width: "1216px", height: "84.5px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "8.5px", width: "357px", height: "84.5px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#004A78" }}>
                      PREMIUM ASSET DISCOVERY
                    </span>
                    <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", lineHeight: "60px", letterSpacing: "-3px", color: "#0F2F4C" }}>
                      Intelligence Vault
                    </h2>
                  </div>
                  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "center", padding: "12px 24px", gap: "16px", isolation: "isolate", width: "418.66px", height: "44px", background: "#0F2F4C", borderRadius: "9999px", position: "relative" }}>
                    <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.002)", boxShadow: "0px 10px 15px -3px rgba(9,20,38,0.1), 0px 4px 6px -4px rgba(9,20,38,0.1)", borderRadius: "9999px", zIndex: 0 }} />
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", height: "20px", zIndex: 1 }}>
                      <svg width="12" height="15.75" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF", whiteSpace: "nowrap" }}>3 Premium Unlocks Remaining</span>
                    </div>
                    <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.2)", zIndex: 2 }} />
                    <div onClick={() => router.push("/pricing")} style={{ cursor: "pointer", zIndex: 3 }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#CFE5FF" }}>Get More Credits</span>
                    </div>
                  </div>
                </div>

                {/* Search & Filters */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", padding: "16px", gap: "24px", width: "1216px", height: "84px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px" }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", height: "44px" }}>
                    {filterTabs.map((tab) => {
                      const isActive = activeFilter === tab;
                      return (
                        <button key={tab} onClick={() => setActiveFilter(tab)} style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "12px 24px", height: "44px", background: isActive ? "#0F2F4C" : "#E7E8E9", borderRadius: "32px", border: "none", cursor: "pointer" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: isActive ? "#FFFFFF" : "#45474C", whiteSpace: "nowrap" }}>{tab}</span>
                        </button>
                      );
                    })}
                    <button onClick={() => router.push("/home/unlockeddocuments")} style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "12px", width: "42px", height: "42px", background: "#F3F4F5", borderRadius: "9999px", border: "none", cursor: "pointer" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
                        <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
                        <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
                        <line x1="17" y1="16" x2="23" y2="16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Dossier Grid */}
                <div style={{ width: "1216px", height: "auto", minHeight: "472px", paddingBottom: "32px", position: "relative", display: "flex", flexDirection: "row", gap: "32px", overflowX: "auto" }}>
                  {isLoading ? (
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", color: "#0F2F4C" }}>Loading unlocked documents...</span>
                    </div>
                  ) : farmlands.length === 0 ? (
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", color: "#0F2F4C" }}>No unlocked documents found.</span>
                    </div>
                  ) : farmlands.map((card, idx) => (
                    <div
                      key={card.farmland_id}
                      style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px", gap: "24px", flexShrink: 0, width: "384px", height: "auto", minHeight: "501px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", position: "relative" }}
                    >
                      {/* Container */}
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", padding: "0px", gap: "122px", width: "320px", height: "49px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "4px", width: "120px", height: "49px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "25px", color: "#0F2F4C" }}>{card.farm_code || "GLC SOS 04"}</span>
                          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "4px", width: "120px", height: "20px" }}>
                            <div style={{ width: "10.67px", height: "13.33px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="11" height="14" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#45474C", whiteSpace: "nowrap" }}>West Godavari</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "4px 12px", background: "#2780C4", borderRadius: "9999px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#FFFFFF" }}>PREMIUM</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div style={{ width: "320px", height: "79px", position: "relative" }}>
                        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "16px", gap: "4px", position: "absolute", width: "152px", height: "79px", left: "0px", top: "0px", background: "#F3F4F5", borderRadius: "32px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#75777D" }}>ACRES</span>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#0F2F4C" }}>200</span>
                        </div>
                        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "16px", gap: "4px", position: "absolute", width: "152px", height: "79px", left: "168px", top: "0px", background: "#F3F4F5", borderRadius: "32px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#75777D" }}>VALUE</span>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#0F2F4C" }}>₹4.2Cr</span>
                        </div>
                      </div>

                      {/* Status */}
                      <div style={{ width: "320px", height: "104px", position: "relative" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "0px", top: "8px" }}>
                          <div style={{ width: "12px", height: "13.33px", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="12" height="13" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "#45474C", whiteSpace: "nowrap" }}>Unlocked Oct 12</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "166px", top: "8px" }}>
                          <div style={{ width: "13.33px", height: "13.33px", display: "flex", alignItems: "center", justifyContent: "center" }}><Image src="/assets/unlockdocuments/Container (19).svg" width={13} height={13} alt="SAFE" /></div>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "#047857" }}>SAFE</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "0px", top: "44px" }}>
                          <div style={{ width: "14.67px", height: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}><Image src="/assets/unlockdocuments/Icon (22).svg" width={15} height={14} alt="Clear Title" /></div>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "#45474C" }}>Clear Title</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "166px", top: "44px" }}>
                          <div style={{ width: "11.33px", height: "11.33px", display: "flex", alignItems: "center", justifyContent: "center" }}><Image src="/assets/unlockdocuments/Container (23).svg" width={11} height={11} alt="Solar Grid Zone" /></div>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "#45474C", whiteSpace: "nowrap" }}>Solar Grid Zone</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "0px", top: "80px" }}>
                          <div style={{ width: "11.33px", height: "11.33px", display: "flex", alignItems: "center", justifyContent: "center" }}><Image src="/assets/unlockdocuments/Container (22).svg" width={11} height={11} alt="Organic-Ready" /></div>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "#45474C", whiteSpace: "nowrap" }}>Organic-Ready</span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "8px 0px 0px", gap: "12px", width: "320px", height: "133px" }}>
                        <button onClick={() => setSelectedDossier(card)} style={{ position: "relative", boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px 0px", width: "320px", height: "57px", background: "radial-gradient(50% 155.86% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "32px", border: "none", cursor: "pointer", boxShadow: "0px 4px 6px -1px rgba(9,20,38,0.2), 0px 2px 4px -2px rgba(9,20,38,0.2)" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", textAlign: "center", color: "#FFFFFF", zIndex: 1 }}>Download Documents</span>
                        </button>
                        <button onClick={() => router.push("/search/farmlanddetails?id=match-1")} style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px 0px", gap: "8px", width: "320px", height: "56px", border: "2px solid rgba(197, 198, 205, 0.3)", borderRadius: "32px", background: "transparent", cursor: "pointer" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", textAlign: "center", color: "#0F2F4C" }}>Book Site Visit</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {selectedDossier && (
                  <div style={{ position: "relative", width: "1216px", marginTop: "48px" }}>
                    <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "32px"}}>
                        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "28px", color: "#0F2F4C", margin: 0 }}>
                        Document Available
                        </h2>
                    </div>
                    
                    <div style={{ position: "relative", width: "1184px", display: "flex", flexWrap: "wrap", gap: "32px" }}>
                      
                      {/* Card 1: Legal Documents */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ marginBottom: "32px" }}>
                          <Image src="/assets/unlockdocuments/Overlay (7).svg" alt="Legal Documents" width={64} height={64} />
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Legal Documents</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>PDF</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>4.2 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Oct 12, 2023</span>
                        </div>
                      </div>

                      {/* Card 2: Asset Valuation */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ marginBottom: "32px" }}>
                          <Image src="/assets/unlockdocuments/Overlay (8).svg" alt="Asset Valuation" width={64} height={64} />
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Asset Valuation</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>XLSX</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>1.8 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Jan 05, 2024</span>
                        </div>
                      </div>
                      
                      {/* Card 3: Agriculture Report */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ marginBottom: "32px" }}>
                          <Image src="/assets/unlockdocuments/Overlay (9).svg" alt="Agriculture Report" width={64} height={64} />
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Agriculture Report</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>PDF</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>12.5 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Feb 14, 2024</span>
                        </div>
                      </div>

                      {/* Card 4: Local Intelligence */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ marginBottom: "32px" }}>
                          <Image src="/assets/unlockdocuments/Overlay (10).svg" alt="Local Intelligence" width={64} height={64} />
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Local Intelligence</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>PDF</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>8.7 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Sep 30, 2023</span>
                        </div>
                      </div>

                      {/* Card 5: Land & Boundaries */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ marginBottom: "32px" }}>
                          <Image src="/assets/unlockdocuments/Overlay (11).svg" alt="Land & Boundaries" width={64} height={64} />
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Land & Boundaries</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>DWG / PDF</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>24.3 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Nov 20, 2023</span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}
                
                <div style={{marginTop: "64px"}}></div>

                {/* Conversion Banner */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "0px", isolation: "isolate", width: "1216px", height: "320px", background: "rgba(255,255,255,0.002)", boxShadow: "0px 25px 50px -12px rgba(0,98,158,0.1)", borderRadius: "48px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image src="/assets/unlockdocuments/asset.svg" alt="Secure Asset Conversion Backdrop" fill style={{ objectFit: "cover", objectPosition: "center" }} />
                  </div>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(9,20,38,0.9) 0%, rgba(9,20,38,0.4) 50%, rgba(9,20,38,0) 100%)", zIndex: 1 }} />
                  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "0px 64px", gap: "24px", width: "672px", maxWidth: "672px", height: "320px", position: "relative", zIndex: 2 }}>
                    <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "45px", color: "#FFFFFF" }}>Ready to secure an asset?</h2>
                    <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "28px", color: "#8590A6", width: "544px" }}>
                      Join exclusive investment pools and co-own verified Grade-A agricultural land with fractionalized smart contracts.
                    </p>
                    <button onClick={() => router.push("/pool-buying")} style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "16px 40px", height: "60px", background: "#00629E", borderRadius: "32px", border: "none", cursor: "pointer", boxShadow: "0px 10px 15px -3px rgba(0,98,158,0.2), 0px 4px 6px -4px rgba(0,98,158,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF", position: "relative" }}>
                      <div style={{ position: "absolute", inset: 0, borderRadius: "32px", boxShadow: "0px 10px 15px -3px rgba(0,98,158,0.2)", zIndex: 0 }} />
                      <span style={{ zIndex: 1 }}>View Active Pools</span>
                    </button>
                  </div>
                </div>

              </section>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
