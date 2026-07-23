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

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1360;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${currentScale})`;
      }
      if (shellRef.current) {
        shellRef.current.style.height = `${1329 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
                    { text: "SAFE", stroke: "#047857", textColor: "#047857" },
                    { text: "Clear Title", stroke: "#00629E", textColor: "#45474C" },
                    { text: "Organic-Ready", stroke: "#00629E", textColor: "#45474C" },
                  ].map((s) => (
                    <div key={s.text} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={s.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 600, color: s.textColor }}>{s.text}</span>
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
              style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-640px", width: "1280px", height: "1329px", transformOrigin: "top center", willChange: "transform" }}
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
                <div style={{ width: "1216px", height: "472px", position: "relative" }}>
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
                      style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px", gap: "24px", position: "absolute", width: "384px", height: "465px", left: `${idx * 416}px`, top: "0px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px" }}
                    >
                      {/* Header */}
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "320px", height: "49px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C" }}>{card.farm_code}</span>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <span style={{ fontSize: "14px" }}>📍</span>
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>Unknown Location</span>
                          </div>
                        </div>
                        <div style={{ background: "#2780C4", borderRadius: "9999px", padding: "4px 12px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#FFFFFF" }}>PREMIUM</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div style={{ width: "320px", height: "79px", position: "relative" }}>
                        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", padding: "16px", gap: "4px", position: "absolute", width: "152px", height: "79px", left: "0px", top: "0px", background: "#F3F4F5", borderRadius: "32px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#75777D" }}>ACRES</span>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#0F2F4C" }}>N/A</span>
                        </div>
                        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", padding: "16px", gap: "4px", position: "absolute", width: "152px", height: "79px", right: "0px", top: "0px", background: "#F3F4F5", borderRadius: "32px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#75777D" }}>VALUE</span>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#0F2F4C" }}>N/A</span>
                        </div>
                      </div>

                      {/* Status */}
                      <div style={{ width: "320px", height: "68px", position: "relative" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "absolute", height: "24px", left: "0px", top: "8px" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#45474C" }}>{`Unlocked ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "absolute", height: "24px", left: "166px", top: "8px" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#047857" }}>SAFE</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "absolute", height: "24px", left: "0px", top: "44px" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#45474C" }}>Clear Title</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "absolute", height: "24px", left: "166px", top: "44px" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#45474C" }}>Organic-Ready</span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "320px", paddingTop: "8px" }}>
                        <button onClick={() => setSelectedDossier(card)} style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "320px", height: "57px", background: "radial-gradient(50% 155.86% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "32px", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", boxShadow: "0px 4px 6px -1px rgba(9,20,38,0.2), 0px 2px 4px -2px rgba(9,20,38,0.2)" }}>
                          View Documents
                        </button>
                        <button onClick={() => router.push("/search/farmlanddetails?id=match-1")} style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", width: "320px", height: "56px", border: "2px solid rgba(197,198,205,0.3)", borderRadius: "32px", background: "transparent", cursor: "pointer" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="1 6 1 22 12 18 23 22 23 6 12 2 1 6" /><line x1="12" y1="2" x2="12" y2="18" />
                          </svg>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>Open GIS Boundary</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

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

      {/* ─── SHARED DOSSIER MODAL ─── */}
      {selectedDossier && (
        <div
          onClick={() => setSelectedDossier(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(9,20,38,0.65)", backdropFilter: "blur(16.5px)", WebkitBackdropFilter: "blur(16.5px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px, 2.5vh, 48px)", boxSizing: "border-box", zIndex: 1000 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "stretch", padding: "clamp(24px, 4vh, 48px)", width: "1280px", maxWidth: "100%", height: "clamp(550px, 90vh, 937px)", background: "#F3F4F5", borderRadius: "48px", position: "relative", overflow: "hidden", boxShadow: "0px 24px 60px rgba(0,0,0,0.2)" }}
          >
            <button onClick={() => setSelectedDossier(null)} style={{ position: "absolute", top: "24px", right: "24px", width: "40px", height: "40px", borderRadius: "9999px", background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0px 2px 8px rgba(0,0,0,0.05)", zIndex: 50, color: "#0F2F4C", fontSize: "16px", fontWeight: "bold" }} title="Close">✕</button>

            {/* Left pane */}
            <div style={{ boxSizing: "border-box", width: "clamp(220px, 20vw, 272px)", height: "100%", background: "#FFFFFF", boxShadow: "0px 8px 30px rgba(0,0,0,0.04)", borderRadius: "32px", display: "flex", flexDirection: "column", overflow: "hidden", flexShrink: 0 }}>
              <div style={{ width: "100%", height: "clamp(140px, 25vh, 256px)", position: "relative", background: "#161B22" }}>
                <img src="/assets/search/image2.1.png" alt={`${selectedDossier.farm_code || selectedDossier.id || 'Asset'} Plot Satellite`} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.src = "/assets/compareassets/farm1.jpg"; }} />
              </div>
              <div style={{ boxSizing: "border-box", padding: "clamp(16px, 2.5vh, 32px)", display: "flex", flexDirection: "column", gap: "clamp(16px, 2.5vh, 24px)", flexGrow: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "16px", height: "16px", borderRadius: "9999px", background: "#BCD225", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "10px", color: "#0F2F4C", fontWeight: "bold" }}>✓</span>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", color: "#45474C", textTransform: "uppercase" }}>ASSET ID: {(selectedDossier.farm_code || selectedDossier.id || "").replace("GLC ", "")}</span>
                  </div>
                  <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vh, 30px)", color: "#0F2F4C", letterSpacing: "-0.75px", lineHeight: "1.1" }}>{selectedDossier.farm_code || selectedDossier.id}</h3>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "clamp(13px, 1.8vh, 16px)", color: "#45474C", lineHeight: "1.4" }}>
                    {selectedDossier.acres || selectedDossier.size || "N/A"} Acres • <span style={{ color: "#2780C4", fontWeight: 700 }}>{selectedDossier.val || selectedDossier.price || "N/A"} Total Valuation</span>
                  </span>
                </div>
                <div style={{ boxSizing: "border-box", padding: "clamp(12px, 2vh, 20px)", background: "#EEF6FF", border: "1px solid rgba(39,128,196,0.15)", borderRadius: "16px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ marginTop: "2px", flexShrink: 0 }}>
                    <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "clamp(11px, 1.5vh, 13px)", lineHeight: "1.5", color: "#2780C4" }}>Documents Unlocked. A Sales Executive has been assigned to your profile regarding this property.</span>
                </div>
              </div>
            </div>

            {/* Center pane */}
            <div style={{ boxSizing: "border-box", flex: 1, margin: "0 clamp(12px, 1.5vw, 24px)", background: "#FFFFFF", boxShadow: "0px 8px 30px rgba(0,0,0,0.04)", borderRadius: "48px", padding: "clamp(16px, 2.2vh, 32px)", display: "flex", flexDirection: "column", justifyContent: "space-between", overflowY: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexShrink: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2.8vh, 28px)", color: "#0F2F4C", letterSpacing: "-0.5px", lineHeight: "1.1" }}>Verified Documentation</h2>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "clamp(12px, 1.5vh, 14px)", color: "#45474C" }}>Official regulatory and institutional clearances</span>
                </div>
                <div style={{ background: "#A5CCF2", borderRadius: "9999px", padding: "4px 12px", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(9px, 1.2vh, 11px)", color: "#0F2F4C", letterSpacing: "0.5px", textTransform: "uppercase" }}>INSTITUTIONAL GRADE</span>
                </div>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "stretch", padding: "clamp(4px, 0.8vh, 8px)", gap: "clamp(4px, 0.8vh, 8px)", background: "#F3F4F5", borderRadius: "24px", margin: "clamp(8px, 1.5vh, 16px) 0", flexGrow: 1, justifyContent: "center" }}>
                {[
                  { icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>, label: "Title Deed & Passbook", sub: "VERIFIED GOVERNMENT RECORD", btnText: "View Full PDF", action: () => alert("Decrypting official title deed passbook package...") },
                  { icon: <><polygon points="1 6 1 22 12 18 23 22 23 6 12 2 1 6" /><line x1="12" y1="2" x2="12" y2="18" /></>, label: "Permanent GIS Boundary Map", sub: "SATELLITE VERIFIED COORDINATES", btnText: "Open Interactive Map", action: () => alert("Launching multi-spectral interactive WebGIS container view overlay...") },
                  { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>, label: "Intelligence Officer (IO) Risk Assessment", sub: "SECURITY CLEARANCE: TIER 1", btnText: "View Risk Report", action: () => alert("Compiling automated background audit cross-reference checks...") },
                  { icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>, label: "Historical Yield & Soil Insights", sub: "PRODUCTIVITY MATRIX 2019–2024", btnText: "View Data Table", action: () => alert("Downloading raw JSON array metrics mapping seasonal multi-crop outputs...") },
                ].map((row) => (
                  <div key={row.label} style={{ boxSizing: "border-box", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(10px, 1.4vh, 14px) clamp(16px, 2vw, 20px)", background: "#FFFFFF", borderRadius: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 1.5vw, 16px)" }}>
                      <div style={{ width: "clamp(36px, 4.5vh, 42px)", height: "clamp(36px, 4.5vh, 42px)", borderRadius: "48px", background: "#EEF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">{row.icon}</svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 1.6vh, 15px)", color: "#0F2F4C" }}>{row.label}</span>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "clamp(9px, 1.1vh, 11px)", color: "#45474C", letterSpacing: "1px", textTransform: "uppercase" }}>{row.sub}</span>
                      </div>
                    </div>
                    <button onClick={row.action} style={{ boxSizing: "border-box", padding: "clamp(6px, 1vh, 8px) clamp(12px, 1.5vw, 16px)", background: "transparent", border: "1px solid rgba(39,128,196,0.2)", borderRadius: "9999px", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", flexShrink: 0 }} onMouseEnter={(e) => { e.currentTarget.style.background = "#EEF6FF"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(11px, 1.3vh, 13px)", color: "#2780C4" }}>{row.btnText}</span>
                      <span style={{ color: "#2780C4", fontWeight: "bold", fontSize: "12px" }}>↗</span>
                    </button>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(8px, 1.2vh, 12px)", flexShrink: 0 }}>
                <button onClick={() => router.push("/home/supportcenter/supportchat")} style={{ width: "100%", height: "clamp(42px, 5.5vh, 52px)", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", color: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.8vh, 16px)", cursor: "pointer", boxShadow: "0px 12px 24px -8px rgba(9,20,38,0.4)" }}>BOOK SITE VISIT</button>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "11px" }}>🛡️</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "clamp(9px, 1.1vh, 11px)", color: "#45474C", letterSpacing: "1px", textTransform: "uppercase" }}>BANK-GRADE ENCRYPTION & VERIFIED VERIFICATION</span>
                </div>
              </div>
            </div>

            {/* Right pane */}
            <div style={{ boxSizing: "border-box", width: "clamp(220px, 20vw, 272px)", display: "flex", flexDirection: "column", flexShrink: 0 }}>
              <div style={{ boxSizing: "border-box", width: "100%", height: "clamp(180px, 28vh, 220px)", background: "#0F2F4C", borderRadius: "32px", padding: "clamp(20px, 3vh, 32px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h4 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(16px, 2vh, 18px)", color: "#FFFFFF" }}>Need legal help?</h4>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.5vh, 14px)", color: "#CFE5FF", lineHeight: "1.4" }}>Our in-house advocates can help with local documentation.</p>
                </div>
                <button onClick={() => router.push("/home/supportcenter")} style={{ background: "transparent", border: "none", padding: 0, display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(12px, 1.5vh, 14px)", color: "#A5CCF2", letterSpacing: "1.4px", textTransform: "uppercase" }}>CHAT WITH SUPPORT</span>
                  <span style={{ color: "#A5CCF2", fontWeight: "bold", fontSize: "14px" }}>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
