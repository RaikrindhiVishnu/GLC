"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const KEY_FEATURES = [
  { label: "ENERGY ACCESS", icon: "energyaccess.svg", a: "3-Phase Industrial Grid", b: "Solar-Ready Infrastructure" },
  { label: "HYDRAULIC DEPTH", icon: "hydraulicdepth.svg", a: "Borewell 100m", b: "Canal Access" },
  { label: "LAST MILE", icon: "lastmile.svg", a: "40ft Black Top", b: "Gravel Approach" },
];
const CONNECTIVITY = [
  { label: "NEAREST CITY", icon: "nearest.svg", a: "Zaheerabad (15km)", b: "Vijayawada (120m)" },
  { label: "NEAREST AIRPORT", icon: "rgia.svg", a: "RGIA (90m)", b: "Canal Access" },
  { label: "NEAREST MEDICAL", icon: "apollo.svg", a: "Apollo (10km)", b: "Emergency (8km)" },
];

export default function CompareAssetsWorkspacePage() {
  const router = useRouter();

  return (
    <main style={{ width: "100%", minHeight: "100vh", backgroundColor: "#F8F9FA", display: "flex", flexDirection: "column", overflowX: "hidden" }}>

      {/* ═══════════════════════════════════════
          MOBILE TREE
      ═══════════════════════════════════════ */}
      <div className="block lg:hidden">

        {/* Mobile Hero */}
        <section style={{ position: "relative", width: "100%", minHeight: "60svh", overflow: "hidden" }}>
          <img src="/assets/compareassets/hero.svg" alt="Compare Assets Hero Backdrop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} onError={(e) => { e.currentTarget.src = "/assets/pricing/hero.svg"; }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1 }} />
          <div style={{ position: "relative", zIndex: 5 }}>
            <Navbar variant="app" active="compareassets" />
          </div>
          <div style={{ position: "relative", zIndex: 5, padding: "0 24px 56px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginTop: "clamp(40px, 10svh, 80px)" }}>
            <motion.h1
              initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 10vw, 72px)", lineHeight: 1.05, letterSpacing: "-1.5px", color: "#FFFFFF" }}
            >
              Compare Assets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.6", color: "rgba(255,255,255,0.85)", maxWidth: "360px" }}
            >
              Side-by-side performance and risk analysis for high-yield land investments.
            </motion.p>
          </div>
        </section>

        {/* Mobile Comparison Content */}
        <section className="w-full px-4 py-10 flex flex-col gap-8 box-border" style={{ paddingBottom: "100px" }}>

          {/* Asset header cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex gap-3">
            <div style={{ flex: 1, background: "#FFFFFF", borderRadius: "20px", padding: "16px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
                <Image src="/assets/compareassets/image2.1.svg" alt="GLC SOS 01" fill style={{ objectFit: "cover" }} />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0F2F4C", textAlign: "center" }}>GLC SOS 01</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", color: "#45474C", textAlign: "center" }}>₹1.20 Cr | 5.0 Acres</span>
            </div>
            <div style={{ flex: 1, background: "#FFFFFF", borderRadius: "20px", padding: "16px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
                <Image src="/assets/compareassets/image2.2.svg" alt="GLC SOS 02" fill style={{ objectFit: "cover" }} />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0F2F4C", textAlign: "center" }}>GLC SOS 02</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", color: "#45474C", textAlign: "center" }}>₹85.00 L | 2.5 Acres</span>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col gap-3">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/assets/compareassets/keyfeatures.svg" alt="Key Features" width={20} height={20} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", textTransform: "uppercase" }}>Key Features</span>
            </div>
            {KEY_FEATURES.map((row, i) => (
              <motion.div key={row.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "16px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Image src={`/assets/compareassets/${row.icon}`} alt={row.label} width={16} height={16} />
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#2780C4", textTransform: "uppercase", letterSpacing: "0.5px" }}>{row.label}</span>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "12px", padding: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#45474C", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "4px" }}>SOS 01</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{row.a}</span>
                  </div>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "12px", padding: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#45474C", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "4px" }}>SOS 02</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{row.b}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Connectivity */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col gap-3">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/assets/compareassets/connectivity.svg" alt="Connectivity" width={22} height={21} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", textTransform: "uppercase" }}>Connectivity</span>
            </div>
            {CONNECTIVITY.map((row, i) => (
              <motion.div key={row.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "16px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Image src={`/assets/compareassets/${row.icon}`} alt={row.label} width={16} height={16} />
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#2780C4", textTransform: "uppercase", letterSpacing: "0.5px" }}>{row.label}</span>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "12px", padding: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#45474C", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>SOS 01</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{row.a}</span>
                  </div>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "12px", padding: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#45474C", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>SOS 02</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{row.b}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cultivation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col gap-3">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/assets/compareassets/cultivation.svg" alt="Cultivation" width={18} height={20} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", textTransform: "uppercase" }}>Cultivation</span>
            </div>
            {[
              { id: "SOS 01", soil: "Black Cotton Soil", soilDesc: "High water retention, ideal for moisture-intensive crops.", current: "Seasonal Rice / Cotton Cultivation", potential: "Sandalwood", currentIcon: "leaf.svg", potentialIcon: "leaf.svg" },
              { id: "SOS 02", soil: "Red Laterite Soil", soilDesc: "Excellent drainage properties, perfect for plantation crops.", current: "Bare Land (Fallow)", potential: "Rice/Wheat", currentIcon: "block.svg", potentialIcon: "block.svg" },
            ].map((asset, i) => (
              <motion.div key={asset.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "20px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#2780C4", textTransform: "uppercase", letterSpacing: "0.5px" }}>GLC {asset.id}</span>
                <div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#45474C", textTransform: "uppercase", letterSpacing: "0.8px" }}>SOIL COMPOSITION</span>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C", marginTop: "4px" }}>{asset.soil}</div>
                  <p style={{ margin: "4px 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: "#45474C", lineHeight: 1.5 }}>{asset.soilDesc}</p>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,198,205,0.2)", paddingTop: "12px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#45474C", textTransform: "uppercase" }}>CURRENT</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                    <Image src={`/assets/compareassets/${asset.currentIcon}`} alt="indicator" width={14} height={14} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{asset.current}</span>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,198,205,0.2)", paddingTop: "12px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#45474C", textTransform: "uppercase" }}>POTENTIAL</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                    <Image src={`/assets/compareassets/${asset.potentialIcon}`} alt="indicator" width={14} height={14} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{asset.potential}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </section>

        {/* Fixed bottom select banner */}
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, display: "flex", gap: "10px", padding: "12px 16px", background: "rgba(255,255,255,0.97)", borderTop: "1px solid #EDEEEF", backdropFilter: "blur(8px)", boxSizing: "border-box" }}>
          <button onClick={() => router.push("/home/myassets/details")} style={{ flex: 1, height: "48px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#FFFFFF", cursor: "pointer" }}>
            SELECT SOS 01
          </button>
          <button onClick={() => router.push("/home/myassets/details")} style={{ flex: 1, height: "48px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#FFFFFF", cursor: "pointer" }}>
            SELECT SOS 02
          </button>
        </div>

        {/* CTA + Footer for mobile */}
        <CTA />
        <Footer />
      </div>

      {/* ═══════════════════════════════════════
          DESKTOP TREE
      ═══════════════════════════════════════ */}
      <div className="hidden lg:block">

        {/* ─── 1. FULL WIDTH HERO SCREEN BANNER LAYER ─── */}
        <section style={{ position: "relative", width: "100%", height: "100vh", background: "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35))", overflow: "hidden", flexShrink: 0 }}>
          <img src="/assets/compareassets/hero.svg" alt="Compare Assets Hero Backdrop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} onError={(e) => { e.currentTarget.src = "/assets/pricing/hero.svg"; }} />

          {/* Top Header Controls Shell */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 60px", height: "110px" }}>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer", flexShrink: 0 }} onClick={() => router.push("/home")}>
              <Image src="/assets/common/Logo green land 1.svg" alt="Green Land Capital Brand Logo" width={150} height={64} style={{ objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 14px", gap: "8px", height: "68px", background: "rgba(255,255,255,0.1)", boxShadow: "0px 8px 6px rgba(0,0,0,0.05), inset 3px 4px 2px -3px rgba(255,255,255,0.55), inset 0px -1px 1px rgba(255,255,255,0.25), inset 0px 1px 1px rgba(255,255,255,0.25)", backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)", borderRadius: "100px", flexShrink: 0 }}>
              {[
                { onClick: () => router.push("/home"), icon: <svg width="21.62" height="21.62" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
              ].map((item, i) => (
                <button key={i} onClick={item.onClick} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48px", height: "48px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", transition: "transform 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                  {item.icon}
                </button>
              ))}
              <button onClick={() => router.push("/search")} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48px", height: "48px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", transition: "transform 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={22} height={22} />
              </button>
              <button onClick={() => router.push("/pricing")} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48px", height: "48px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", transition: "transform 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing" width={22} height={20} />
              </button>
              <button onClick={() => router.push("/profile")} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48px", height: "48px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", transition: "transform 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                <Image src="/assets/home/HeroScreen/user 1.png" alt="User" width={21.62} height={21.62} />
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
              <button onClick={() => router.push("/home/unlockeddocuments")} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", background: "rgba(255,255,255,0.1)", boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)", backdropFilter: "blur(62px)", WebkitBackdropFilter: "blur(62px)", borderRadius: "50%", border: "none", cursor: "pointer" }}>
                <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock" width={26.32} height={26.32} />
              </button>
              <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", background: "rgba(255,255,255,0.1)", boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)", backdropFilter: "blur(62px)", WebkitBackdropFilter: "blur(62px)", borderRadius: "50%", border: "none", cursor: "pointer", position: "relative" }}>
                <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications" width={26.32} height={26.32} />
                <span style={{ position: "absolute", top: "13.5px", right: "11.6px", width: "6.3px", height: "6.3px", background: "#E53935", border: "1px solid rgba(255,255,255,0.9)", borderRadius: "50%" }} />
              </button>
              <div onClick={() => router.push("/profile")} style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", cursor: "pointer" }}>
                <img src="/assets/home/HeroScreen/person.svg" alt="User" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }} />
              </div>
            </div>
          </div>

          {/* Center Typography */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", padding: "0px 32px", gap: "37px", position: "absolute", width: "100%", maxWidth: "1200px", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
            <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "100px", lineHeight: "100px", textAlign: "center", letterSpacing: "-1.8px", color: "#FFFFFF" }}>Compare Assets</h1>
            <p style={{ margin: 0, maxWidth: "1200px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "24px", lineHeight: "32px", textAlign: "center", color: "#FFFFFF" }}>
              <span style={{ whiteSpace: "nowrap" }}>Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy,</span>
              <br />and intelligence audit pipeline
            </p>
          </div>

          {/* Sparkle button */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", position: "absolute", width: "52px", height: "51.39px", right: "60px", bottom: "60px", background: "#191C1D", boxShadow: "0px 10.0267px 7.52px rgba(0,0,0,0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255,255,255,0.25)", borderRadius: "125.333px", cursor: "pointer", zIndex: 10 }} onClick={() => router.push("/home/ai-generated-farmlands")}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M10.79 9.85333L11.7498 6.49608C12.1095 5.23941 13.8905 5.23941 14.2501 6.49608L15.2089 9.85333C15.2696 10.0657 15.3834 10.2591 15.5396 10.4153C15.6958 10.5715 15.8892 10.6853 16.1016 10.746L19.4588 11.7047C20.7155 12.0644 20.7155 13.8454 19.4588 14.2051L16.1016 15.1638C15.8892 15.2245 15.6958 15.3383 15.5396 15.4945C15.3834 15.6507 15.2696 15.8441 15.2089 16.0565L14.2501 19.4137C13.8905 20.6704 12.1095 20.6704 11.7498 19.4137L10.7911 16.0565C10.7304 15.8441 10.6165 15.6507 10.4604 15.4945C10.3042 15.3383 10.1108 15.2245 9.8984 15.1638L6.54115 14.2051C5.28448 13.8454 5.28448 12.0644 6.54115 11.7047L9.8984 10.746C10.1108 10.6853 10.3042 10.5715 10.4604 10.4153C10.6165 10.2591 10.7304 10.0657 10.7911 9.85333M19.6126 17.8375C19.9257 16.9242 21.242 16.9232 21.554 17.8375L21.5821 17.9317L21.9028 19.2187L23.1898 19.5405C24.2298 19.8005 24.2298 21.276 23.1898 21.536L21.9028 21.8577L21.5856 23.1447C21.3222 24.1837 19.8456 24.1837 19.5856 23.1447L19.2638 21.8577L17.9768 21.536C16.9368 21.276 16.9368 19.7994 17.9768 19.5405L19.2638 19.2187L19.5856 17.9317L19.6126 17.8375ZM4.44598 2.66975C4.76882 1.72616 6.16307 1.75758 6.41548 2.764L6.73615 4.051L8.02315 4.37275C9.06315 4.63275 9.06315 6.10825 8.02315 6.36825L6.73615 6.69L6.41548 7.977C6.15548 9.01591 4.6789 9.01591 4.4189 7.977L4.09715 6.69L2.81015 6.36825C1.77015 6.10825 1.77015 4.63166 2.81015 4.37275L4.09715 4.051L4.4189 2.764L4.44598 2.66975Z" fill="white"/></svg>
          </div>
        </section>

        {/* ─── 2. MAIN COMPARISON STACK MATRIX ─── */}
        <section style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "64px 32px", gap: "38px", width: "100%", maxWidth: "1280px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%", maxWidth: "1216px" }}>
            <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", lineHeight: "48px", letterSpacing: "-1.2px", color: "#0F2F4C" }}>Compare Assets</h1>
            <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#45474C" }}>Side-by-side performance and risk analysis for high-yield land investments.</p>
          </div>

          {/* Sticky Comparison Header */}
          <div style={{ boxSizing: "border-box", width: "1216px", height: "128px", background: "#FFFFFF", boxShadow: "0px 20px 50px rgba(0,0,0,0.04)", borderRadius: "32px", position: "relative", marginBottom: "16px" }}>
            <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px", gap: "24px", position: "absolute", height: "96px", left: "16px", right: "616px", top: "16px", background: "#FFFFFF", borderRadius: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "138px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", color: "#0F2F4C", textAlign: "center" }}>GLC SOS 01</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", marginTop: "4px", textAlign: "center" }}>₹1.20 Cr | 5.0 Acres</span>
              </div>
              <div style={{ width: "64px", height: "64px", borderRadius: "6px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <Image src="/assets/compareassets/image2.1.svg" alt="GLC SOS 01 Preview" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px", gap: "24px", position: "absolute", height: "96px", left: "616px", right: "16px", top: "16px", background: "#FFFFFF", borderRadius: "32px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "6px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <Image src="/assets/compareassets/image2.2.svg" alt="GLC SOS 02 Preview" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "143px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", color: "#0F2F4C", textAlign: "center" }}>GLC SOS 02</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", marginTop: "4px", textAlign: "center" }}>₹85.00 L | 2.5 Acres</span>
              </div>
            </div>
          </div>

          {/* ─── SECTION 1: KEY FEATURES ─── */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "32px", isolation: "isolate", width: "1216px", position: "relative" }}>
            <div style={{ position: "absolute", width: "1px", left: "calc(50% - 1px / 2)", top: "32px", bottom: "-32px", background: "#C5C6CD", zIndex: 0 }} />
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px 8px", gap: "12px", width: "1216px", height: "32px", zIndex: 1 }}>
              <Image src="/assets/compareassets/keyfeatures.svg" alt="Key Features Icon" width={22} height={22} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C", textTransform: "uppercase" }}>Key Features</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "38px", width: "100%", zIndex: 1 }}>
              {KEY_FEATURES.map((row) => (
                <div key={row.label} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative", height: "108px" }}>
                  <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.a}</span>
                  </div>
                  <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9,20,38,0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                    <Image src={`/assets/compareassets/${row.icon}`} alt={row.label} width={20} height={20} />
                  </div>
                  <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── SECTION 2: CONNECTIVITY ─── */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "32px", isolation: "isolate", width: "1216px", position: "relative", marginTop: "32px" }}>
            <div style={{ position: "absolute", width: "1px", left: "calc(50% - 1px / 2)", top: "32px", bottom: "-32px", background: "#C5C6CD", zIndex: 0 }} />
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px 8px", gap: "12px", width: "1216px", height: "32px", zIndex: 1 }}>
              <Image src="/assets/compareassets/connectivity.svg" alt="Connectivity Icon" width={24} height={23} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C", textTransform: "uppercase", letterSpacing: "1.2px" }}>Connectivity</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "38px", width: "100%", zIndex: 1 }}>
              {CONNECTIVITY.map((row) => (
                <div key={row.label} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative", height: "108px" }}>
                  <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.a}</span>
                  </div>
                  <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9,20,38,0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                    <Image src={`/assets/compareassets/${row.icon}`} alt={row.label} width={20} height={20} />
                  </div>
                  <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── SECTION 3: CULTIVATION ─── */}
          <div style={{ display: "flex", flexDirection: "column", width: "1216px", gap: "32px", marginTop: "26px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", padding: "0 8px" }}>
              <Image src="/assets/compareassets/cultivation.svg" alt="Cultivation Icon" width={18} height={20} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C", textTransform: "uppercase" }}>Cultivation</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "24px", width: "100%" }}>
              {[
                { soil: "Black Cotton Soil", soilDesc: "High water retention, ideal for moisture-intensive crops and long-term sustainability.", current: "Seasonal Rice / Cotton Cultivation", potential: "Sandalwood", currentIcon: "leaf.svg", potentialIcon: "leaf.svg" },
                { soil: "Red Laterite Soil", soilDesc: "Excellent drainage properties, perfect for plantation crops like Cashew or Mango.", current: "Bare Land (Fallow)", potential: "Rice/Wheat", currentIcon: "block.svg", potentialIcon: "block.svg" },
              ].map((asset, i) => (
                <div key={i} style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", padding: "40px", gap: "24px", width: "596px", background: "#FFFFFF", borderRadius: "32px", boxShadow: "0px 12px 40px rgba(0,31,63,0.04)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "512px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#45474C", textTransform: "uppercase" }}>SOIL COMPOSITION</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C" }}>{asset.soil}</span>
                      <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#45474C" }}>{asset.soilDesc}</p>
                    </div>
                    <div style={{ borderTop: "1px solid rgba(197,198,205,0.15)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#45474C", textTransform: "uppercase" }}>CURRENT VEGETATION</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <Image src={`/assets/compareassets/${asset.currentIcon}`} alt="indicator" width={17} height={17} />
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>{asset.current}</span>
                      </div>
                    </div>
                    <div style={{ borderTop: "1px solid rgba(197,198,205,0.15)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#45474C", textTransform: "uppercase" }}>POTENTIAL VEGETATION</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <Image src={`/assets/compareassets/${asset.potentialIcon}`} alt="indicator" width={17} height={17} />
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#45474C" }}>{asset.potential}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── STICKY BOTTOM SELECTION CONTROLS BANNER ─── */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "1216px", padding: "24px 32px", background: "rgba(255,255,255,0.95)", borderTop: "1px solid rgba(197,198,205,0.2)", borderRadius: "24px", boxShadow: "0px -10px 40px rgba(0,0,0,0.03)", gap: "48px", marginTop: "40px" }}>
            <button onClick={() => router.push("/home/myassets/details")} style={{ flex: 1, height: "52px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.35px", color: "#FFFFFF", cursor: "pointer" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>SELECT GLC SOS 01</button>
            <button onClick={() => router.push("/home/myassets/details")} style={{ flex: 1, height: "52px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.35px", color: "#FFFFFF", cursor: "pointer" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>SELECT GLC SOS 02</button>
          </div>

        </section>

        {/* ─── 3. CTA + FOOTER ─── */}
        <CTA />
        <Footer />
      </div>

    </main>
  );
}
