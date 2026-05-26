"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import LeftPane from "./LeftPane";
import CenterPane from "./CenterPane";
import RightPane from "./RightPane";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const TABS = ["Info", "Documents", "Support"] as const;
type Tab = typeof TABS[number];

export default function UnlockedDocumentsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("Documents");

  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box" }}>

      {/* ─── HEADER BAR (shared) ─── */}
      <div style={{ width: "100%", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(16px, 4vw, 60px)", background: "#FFFFFF", borderBottom: "1px solid #EDEEEF", boxSizing: "border-box", flexShrink: 0 }}>
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => router.push("/home")}>
          <Image src="/assets/common/Logo green land 1.svg" alt="Green Land Capital Official Logo" width={140} height={50} style={{ objectFit: "contain" }} />
        </div>
        <span className="hidden sm:block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(12px, 1.4vh, 16px)", color: "#0F2F4C", letterSpacing: "0.5px" }}>
          SECURE LEGAL DOSSIER DETAIL
        </span>
        <button onClick={() => router.push("/home")} style={{ background: "#EEF6FF", border: "1px solid rgba(39,128,196,0.2)", borderRadius: "9999px", padding: "8px 16px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <span style={{ fontSize: "14px", color: "#2780C4", fontWeight: "bold" }}>←</span>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#2780C4" }}>BACK</span>
        </button>
      </div>

      {/* ─── MOBILE TREE ─── */}
      <div className="block lg:hidden w-full px-4 py-6 box-border flex flex-col gap-4" style={{ flex: "1 0 auto" }}>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: "8px" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ flex: 1, padding: "10px 0", background: activeTab === tab ? "#0F2F4C" : "#E7E8E9", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: activeTab === tab ? "#FFFFFF" : "#45474C", transition: "all 0.2s" }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Info tab */}
        {activeTab === "Info" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div style={{ width: "100%", height: "200px", position: "relative", background: "radial-gradient(circle at 30% 70%, #4ADE80 0%, #166534 100%)", borderRadius: "24px 24px 0 0", overflow: "hidden" }}>
              <svg width="100%" height="100%" viewBox="0 0 272 200" fill="none" style={{ position: "absolute", inset: 0, opacity: 0.2 }}>
                <path d="M0 50 Q 136 100, 272 20" stroke="#FFFFFF" strokeWidth="4" fill="none" />
                <path d="M0 150 Q 136 200, 272 120" stroke="#FFFFFF" strokeWidth="3" fill="none" />
                <path d="M50 0 L 50 200" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 6" />
              </svg>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "0 0 24px 24px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "12px", height: "12px", background: "#BCD225", borderRadius: "3px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>ASSET ID: SOS 01</span>
              </div>
              <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "28px", letterSpacing: "-0.75px", color: "#0F2F4C" }}>GLC SOS 01</h2>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>320 Acres • ₹5.2 Cr Total Valuation</span>
              <div style={{ boxSizing: "border-box", padding: "16px", background: "#EEF6FF", border: "1px solid rgba(39,128,196,0.1)", borderRadius: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <div style={{ width: "16px", height: "16px", background: "#2780C4", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#2780C4" }}>Documents Unlocked</span>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "13px", lineHeight: "1.5", color: "#2780C4" }}>
                  A Sales Executive has been assigned to your profile regarding this property.
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Documents tab */}
        {activeTab === "Documents" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "#FFFFFF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "22px", letterSpacing: "-0.5px", color: "#0F2F4C" }}>Verified Documentation</h2>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: "#45474C" }}>Official regulatory and institutional clearances</span>
              </div>
              <div style={{ background: "#A5CCF2", borderRadius: "9999px", padding: "4px 12px", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#0F2F4C", textTransform: "uppercase", letterSpacing: "0.5px" }}>Institutional Grade</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#F3F4F5", borderRadius: "16px", padding: "8px" }}>
              {[
                { title: "Title Deed & Passbook", sub: "VERIFIED GOVERNMENT RECORD", action: "View Full PDF", alert: "Streaming native protected PDF layout securely from regulatory archives..." },
                { title: "Permanent GIS Boundary Map", sub: "SATELLITE VERIFIED COORDINATES", action: "Open Map", alert: "Launching advanced spatial multi-spectral GIS mapping frame..." },
                { title: "IO Risk Assessment", sub: "SECURITY CLEARANCE: TIER 1", action: "View Report", alert: "Displaying complete IO due diligence dossier indices..." },
                { title: "Historical Yield & Soil Insights", sub: "PRODUCTIVITY MATRIX 2019–2024", action: "View Table", alert: "Rendering dynamic historic yield grids and continuous soil sample metric vectors..." },
              ].map((row) => (
                <div key={row.title} style={{ background: "#FFFFFF", borderRadius: "12px", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                  <div style={{ flexGrow: 1 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C", display: "block", marginBottom: "2px" }}>{row.title}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>{row.sub}</span>
                  </div>
                  <button
                    onClick={() => router.push("/home/unlockeddocuments")}
                    style={{ flexShrink: 0, padding: "6px 14px", background: "transparent", border: "1px solid rgba(39,128,196,0.2)", borderRadius: "9999px", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#2780C4" }}
                  >
                    {row.action}
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push("/home/supportcenter/supportchat")}
              style={{ width: "100%", height: "52px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFFF", boxShadow: "0px 12px 24px -8px rgba(9,20,38,0.4)" }}
            >
              BOOK SITE VISIT
            </button>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "11px" }}>🛡️</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>BANK-GRADE ENCRYPTION & VERIFIED VERIFICATION</span>
            </div>
          </motion.div>
        )}

        {/* Support tab */}
        {activeTab === "Support" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "#0F2F4C", borderRadius: "24px", padding: "32px 24px", display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#FFFFFF" }}>Need legal help?</h3>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "1.5", color: "#A5CCF2" }}>
              Our in-house advocates can help with local documentation.
            </span>
            <button
              onClick={() => router.push("/home/supportcenter")}
              style={{ background: "transparent", border: "none", paddingTop: "8px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", textTransform: "uppercase", color: "#A5CCF2" }}>CHAT WITH SUPPORT</span>
              <span style={{ color: "#A5CCF2", fontWeight: "bold", fontSize: "16px" }}>→</span>
            </button>
          </motion.div>
        )}
      </div>

      {/* ─── DESKTOP TREE ─── */}
      <div className="hidden lg:flex w-full flex-col items-center">
        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "stretch", padding: "clamp(24px, 3vh, 48px)", gap: "clamp(16px, 2vw, 32px)", width: "100%", maxWidth: "1280px", height: "clamp(550px, 80vh, 937px)", background: "#F3F4F5", borderRadius: "48px", margin: "clamp(20px, 3vh, 40px) 0", overflow: "hidden" }}>
          <LeftPane />
          <CenterPane />
          <RightPane />
        </div>
      </div>

      {/* ─── TRAILING ─── */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <CTA />
        <Footer />
      </section>

    </main>
  );
}
