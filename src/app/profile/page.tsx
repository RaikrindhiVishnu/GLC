"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* ─── HERO BACKGROUND (desktop only) ─── */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          width: "100%",
          height: "479.05px",
          left: "0px",
          top: "0px",
          zIndex: 0,
          overflow: "hidden",
          background: "#D9D9D9",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))", zIndex: 1 }} />
        <Image
          src="/assets/account/account-hero.svg"
          alt="Profile Background Cover"
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
        />
      </div>

      {/* ══════════════════════════════════════════════ */}
      {/* MOBILE LAYOUT (< lg)                          */}
      {/* ══════════════════════════════════════════════ */}
      <div className="block lg:hidden w-full" style={{ background: "#F0F1F2", zIndex: 10, position: "relative", paddingTop: "80px" }}>
        <Navbar variant="app" active="profile" forceScrolled={true} />

        <div style={{ padding: "16px 16px 40px" }}>

          {/* Dark profile card with avatar overlapping top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: "relative", marginTop: "55px" }}
          >
            {/* Avatar floating above card */}
            <div style={{ position: "absolute", top: "-55px", left: "50%", transform: "translateX(-50%)", width: "108px", height: "108px", borderRadius: "32px", overflow: "hidden", boxShadow: "0px 0px 0px 4px #F0F1F2, 0px 16px 32px -8px rgba(0,0,0,0.4)", background: "#D9D9D9", zIndex: 2 }}>
              <Image src="/assets/account/account-profile.svg" alt="Profile" fill style={{ objectFit: "cover" }} />
            </div>

            {/* Dark card */}
            <div style={{ background: "#091426", borderRadius: "24px", padding: "64px 20px 24px", position: "relative", overflow: "hidden" }}>
              {/* Ambient glow */}
              <div style={{ position: "absolute", width: "220px", height: "220px", right: "-60px", bottom: "-90px", border: "20px solid rgba(0,98,158,0.25)", filter: "blur(24px)", borderRadius: "9999px", pointerEvents: "none" }} />

              {/* Name + verify badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "18px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "-0.04em", color: "#FFFFFF" }}>Arjun Vardhan</span>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#2780C4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
              </div>

              {/* Edit Profile + Share row */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button style={{ flex: 1, height: "46px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "none", borderRadius: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", letterSpacing: "0.5px", textTransform: "uppercase" }}>Edit Profile</span>
                </button>
                <button style={{ width: "46px", height: "46px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "16px" }} />

              {/* Active Plan row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "1px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Active Plan</span>
                <div style={{ width: "26px", height: "26px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "20px", color: "#FFFFFF" }}>Silver Tier</span>

              {/* Divider */}
              <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", margin: "16px 0" }} />

              {/* Unlocks */}
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "42px", lineHeight: "1.1", letterSpacing: "-2px", color: "#FFFFFF" }}>4 Available<br />Unlocks</span>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: "0 0 20px" }}>Direct access to premium agricultural yields</p>

              {/* View Wallet History */}
              <button style={{ width: "100%", height: "50px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFFF" }}>View Wallet History</span>
              </button>
            </div>
          </motion.div>
        </div>{/* end padding wrapper */}

        {/* Identity & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ margin: "12px 16px 0", background: "#FFFFFF", borderRadius: "24px", padding: "20px 16px", boxShadow: "0px 4px 12px rgba(0,0,0,0.04)" }}
        >
          <div style={{ paddingBottom: "12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C", textTransform: "uppercase" }}>Identity & Contact</span>
          </div>
          {[
            { label: "Full Name", value: "Arjun Vardhan", badge: null },
            { label: "Mobile Number", value: "+91 98765 43210", badge: "OTP VERIFIED" },
            { label: "Email Address", value: "arjun.w@gmail.com", badge: null },
          ].map((row, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 4px", borderTop: i > 0 ? "1px solid #F5F5F5" : "none" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "13px", color: "#71717A" }}>{row.label}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>{row.value}</span>
                {row.badge && (
                  <span style={{ background: "#EFF6FF", color: "#2563EB", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "9px", padding: "2px 6px", borderRadius: "9999px" }}>{row.badge}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Regulatory Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ margin: "12px 16px 0", background: "#FFFFFF", borderRadius: "24px", padding: "20px 16px", boxShadow: "0px 4px 12px rgba(0,0,0,0.04)" }}
        >
          <div style={{ paddingBottom: "12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "13px", color: "#71717A", textTransform: "uppercase", letterSpacing: "1.2px" }}>Regulatory Compliance</span>
          </div>
          {[{ label: "Primary ID / Aadhaar" }, { label: "PAN Card Number" }].map((row, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 4px", borderTop: i > 0 ? "1px solid #F5F5F5" : "none" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "13px", color: "#71717A" }}>{row.label}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#059669"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#059669" }}>Verified</span>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 4px 0", opacity: 0.6 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#0F2F4C" style={{ flexShrink: 0 }}><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "11px", color: "#71717A", lineHeight: "16px" }}>Your data is encrypted per SEBI guidelines.</span>
          </div>
        </motion.div>

        {/* Active Operations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ margin: "12px 16px 0", background: "#FFFFFF", borderRadius: "24px", padding: "20px 24px", boxShadow: "0px 4px 12px rgba(0,0,0,0.04)" }}
        >
          <div style={{ paddingBottom: "16px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C", textTransform: "uppercase" }}>Active Operations</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { dot: "#2780C4", title: "Farmhouse Construction", sub: "Plot 24A - Concrete Foundation Phase", progress: 65, line: true },
              { dot: "#00629E", title: "Maintenance Cycle", sub: "Orchard 09 - Seasonal Pruning", progress: null, line: true },
              { dot: "#75777D", title: "Verifications", sub: "Annual Soil Report pending", progress: null, line: false },
            ].map((op, i) => (
              <div key={i} style={{ display: "flex", gap: "14px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "8px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: op.dot, flexShrink: 0 }} />
                  {op.line && <div style={{ width: "2px", flex: 1, background: "#E7E8E9", marginTop: "4px", minHeight: "32px" }} />}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px", flex: 1 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>{op.title}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "13px", color: "#45474C" }}>{op.sub}</span>
                  {op.progress && (
                    <div style={{ width: "100%", height: "5px", background: "#F3F4F5", borderRadius: "9999px", overflow: "hidden", marginTop: "4px" }}>
                      <div style={{ width: `${op.progress}%`, height: "100%", background: "#2780C4" }} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ paddingTop: "14px", borderTop: "1px solid #F5F5F5", marginTop: "16px" }}>
            <button style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", padding: 0 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#00629E" }}>View Live Feeds</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </motion.div>

        {/* Support & Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ margin: "12px 16px 40px" }}
        >
          <div style={{ padding: "0 16px 10px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "1.2px", color: "#0F2F4C", textTransform: "uppercase" }}>Support & Preferences</span>
          </div>
          <div style={{ background: "#FFFFFF", borderRadius: "24px", boxShadow: "0px 4px 12px rgba(0,0,0,0.04)", overflow: "hidden" }}>
            <div
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", cursor: "pointer" }}
              onClick={() => router.push("/home/supportcenter")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "15px", color: "#0F2F4C" }}>Support Centre</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4D4D8" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderTop: "1px solid #F5F5F5", cursor: "pointer" }}
              onClick={() => router.push("/profile/savedfarmlands")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "15px", color: "#0F2F4C" }}>Saved Farmlands</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4D4D8" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
          </div>
        </motion.div>

        {/* Mobile Sign Out — standalone centered at bottom */}
        <div style={{ display: "flex", justifyContent: "center", padding: "28px 16px 40px" }}>
          <button
            style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#E53935", letterSpacing: "0.5px", textTransform: "uppercase" }}>Sign Out</span>
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════ */}
      {/* DESKTOP LAYOUT (>= lg)                        */}
      {/* ══════════════════════════════════════════════ */}
      <div
        className="hidden lg:block"
        style={{ position: "relative", width: "1440px", minHeight: "1260px", background: "transparent", flexShrink: 0 }}
      >
        <Navbar variant="app" active="profile" />

        {/* ─── CENTRAL HERO GLASSMORPHIC PROFILE CONTAINER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: "absolute", width: "569px", height: "950px", left: "calc(50% - 569px/2)", top: "226.64px", zIndex: 10 }}
        >
          {/* Avatar */}
          <div
            style={{
              position: "absolute", width: "241.24px", height: "241.24px",
              left: "calc(50% - 241.24px/2)", top: "39px",
              borderRadius: "72.37px",
              boxShadow: "0px 0px 0px 6px #FFFFFF, 0px 37px 75px -18px rgba(0,0,0,0.35)",
              overflow: "hidden", zIndex: 20, background: "#F8F9FA",
            }}
          >
            <Image src="/assets/account/account-profile.svg" alt="Arjun Profile Frame Portrait" fill style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>

          {/* Dark card */}
          <div
            style={{
              position: "absolute", width: "569px", height: "732px", left: "0px", top: "157px",
              background: "#091426", borderRadius: "45px",
              boxShadow: "0px 24px 50px rgba(9, 20, 38, 0.25)", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", width: "320px", height: "320px", right: "-75px", bottom: "-135px", border: "24px solid rgba(0,98,158,0.3)", filter: "blur(20px)", borderRadius: "9999px", pointerEvents: "none", zIndex: 0 }} />
            <div style={{ boxSizing: "border-box", position: "absolute", width: "256px", height: "256px", right: "-35px", bottom: "-95px", border: "1px solid rgba(0,98,158,0.5)", borderRadius: "9999px", pointerEvents: "none", zIndex: 0 }} />
            <div style={{ position: "absolute", width: "128px", height: "128px", right: "45px", bottom: "-15px", background: "rgba(0,98,158,0.2)", filter: "blur(32px)", borderRadius: "9999px", pointerEvents: "none", zIndex: 0 }} />

            <div style={{ position: "absolute", top: "186px", left: "0px", right: "0px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "12px", zIndex: 10 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "45px", lineHeight: "57px", letterSpacing: "-0.04em", color: "#FFFFFF" }}>Arjun Vardhan</span>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#2780C4", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 2px 8px rgba(39,128,196,0.4)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M2 19h20v2H2v-2zm1.5-3l1.5-10 5.5 4 3-5 3 5 5.5-4 1.5 10H3.5z" /></svg>
              </div>
            </div>

            <div style={{ position: "absolute", top: "284px", left: "35px", right: "35px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
              <div style={{ height: "50px", background: "#2780C4", borderRadius: "20px", display: "flex", alignItems: "center", padding: "0 20px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "17.6px", color: "#FFFFFF", letterSpacing: "-0.02em" }}>Silver Tier • 4 Unlocks Available</span>
              </div>
              <button style={{ height: "50px", background: "#F8F9FA", borderRadius: "20px", border: "none", display: "flex", alignItems: "center", gap: "8px", padding: "0 18px", cursor: "pointer", transition: "opacity 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0F2F4C"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "17.6px", color: "#0F2F4C", letterSpacing: "-0.04em" }}>Edit Profile</span>
              </button>
              <button style={{ width: "50px", height: "50px", background: "#F8F9FA", borderRadius: "50%", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "opacity 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </button>
            </div>

            <div style={{ position: "absolute", top: "386px", left: "48px", zIndex: 10 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "22.88px", letterSpacing: "-0.04em", color: "#FFFFFF", opacity: 0.9 }}>Total Estimated Assets</span>
            </div>
            <div style={{ position: "absolute", top: "433px", left: "48px", width: "430px", height: "1px", background: "#CCCCCC", zIndex: 10 }} />
            <div style={{ position: "absolute", top: "448px", left: "48px", zIndex: 10 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "60px", lineHeight: "60px", letterSpacing: "-3px", color: "#FFFFFF" }}>₹1,248,500.00</span>
            </div>

            <div style={{ position: "absolute", top: "574px", left: "48px", display: "flex", flexDirection: "row", gap: "16px", zIndex: 10 }}>
              <button style={{ height: "46px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "32px", padding: "0 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")} onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF" }}>Wallet History</span>
              </button>
              <button onClick={() => router.push("/profile/managesubscriptions")} style={{ height: "46px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "32px", padding: "0 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")} onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF" }}>Manage Subscription</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ─── LEFT SIDEBAR ─── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ position: "absolute", width: "391px", height: "590px", left: "23px", top: "502px", background: "#FFFFFF", borderRadius: "32px", boxShadow: "0px 10px 25px -5px rgba(0,0,0,0.03)", boxSizing: "border-box", padding: "32px 16px", display: "flex", flexDirection: "column", gap: "24px", zIndex: 10 }}
        >
          {/* Identity & Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
            <div style={{ padding: "0 16px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", textTransform: "uppercase" }}>Identity & Contact</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #FAFAFA", boxShadow: "0px 1px 4px rgba(0,0,0,0.02)", width: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px 20px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A", whiteSpace: "nowrap" }}>Full Name</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>Arjun Vardhan</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderTop: "1px solid #FAFAFA" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A", whiteSpace: "nowrap" }}>Mobile Number</span>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", whiteSpace: "nowrap" }}>+91 98765 43210</span>
                  <span style={{ background: "#EFF6FF", color: "#2563EB", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", padding: "2px 8px", borderRadius: "9999px", whiteSpace: "nowrap" }}>OTP VERIFIED</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderTop: "1px solid #FAFAFA" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A", whiteSpace: "nowrap" }}>Email Address</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>arjun.w@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", marginTop: "8px" }}>
            <div style={{ padding: "0 16px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#71717A", textTransform: "uppercase" }}>Regulatory Compliance</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #FAFAFA", boxShadow: "0px 1px 4px rgba(0,0,0,0.02)", width: "100%", display: "flex", flexDirection: "column" }}>
              {[{ label: "Primary ID / Aadhaar" }, { label: "PAN Card Number" }].map((row, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderTop: i > 0 ? "1px solid #FAFAFA" : "none" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A" }}>{row.label}</span>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#059669"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#059669" }}>Verified</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", padding: "4px 16px", opacity: 0.6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#0F2F4C" style={{ flexShrink: 0 }}><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", color: "#71717A", lineHeight: "16px", width: "235.45px" }}>Your data is encrypted and stored as per SEBI<br />guidelines.</span>
            </div>
          </div>

        </motion.div>

        {/* ─── DESKTOP SIGN OUT ─── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{ position: "absolute", width: "391px", left: "23px", top: "1112px", display: "flex", justifyContent: "center", zIndex: 10 }}
        >
          <button
            style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#E53935", letterSpacing: "0.5px", textTransform: "uppercase" }}>Sign Out</span>
          </button>
        </motion.div>

        {/* ─── RIGHT SIDEBAR: ACTIVE OPERATIONS ─── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ position: "absolute", width: "377px", height: "392px", left: "1034px", top: "502px", background: "#FFFFFF", borderRadius: "32px", boxShadow: "0px 10px 25px -5px rgba(0,0,0,0.03)", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", zIndex: 10 }}
        >
          <div style={{ paddingBottom: "24px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", textTransform: "uppercase" }}>Active Operations</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", flexGrow: 1 }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "16px", height: "70px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2780C4", flexShrink: 0 }} />
                <div style={{ width: "2px", height: "54px", background: "#E7E8E9", marginTop: "4px" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", lineHeight: "20px" }}>Farmhouse Construction</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", lineHeight: "16px" }}>Plot 24A - Concrete Foundation Phase</span>
                <div style={{ width: "100%", height: "6px", background: "#F3F4F5", borderRadius: "9999px", overflow: "hidden", marginTop: "4px" }}>
                  <div style={{ width: "65%", height: "100%", background: "#2780C4" }} />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "16px", height: "56px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00629E", flexShrink: 0 }} />
                <div style={{ width: "2px", height: "40px", background: "#E7E8E9", marginTop: "4px" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", lineHeight: "20px" }}>Maintenance Cycle</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", lineHeight: "16px" }}>Orchard 09 - Seasonal Pruning</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "16px", height: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#75777D", flexShrink: 0 }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", lineHeight: "20px" }}>Verifications</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", lineHeight: "16px" }}>Annual Soil Report pending</span>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "16px", borderTop: "1px solid #FAFAFA", display: "flex", alignItems: "center" }}>
            <button style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", padding: 0 }} onClick={() => alert("Navigating to live feed networks...")}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#00629E" }}>View Live Feeds</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </motion.div>

        {/* ─── RIGHT SIDEBAR: SUPPORT & PREFERENCES ─── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ position: "absolute", width: "377px", height: "157px", left: "1034px", top: "929px", display: "flex", flexDirection: "column", gap: "12px", zIndex: 10 }}
        >
          <div style={{ padding: "0 16px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1.2px", color: "#0F2F4C", textTransform: "uppercase" }}>Support & Preferences</span>
          </div>
          <div style={{ background: "#FFFFFF", borderRadius: "24px", boxShadow: "0px 1px 4px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", cursor: "pointer", transition: "background 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")} onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")} onClick={() => router.push("/home/supportcenter")}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>Support Centre</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4D4D8" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderTop: "1px solid #FAFAFA", cursor: "pointer", transition: "background 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")} onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")} onClick={() => router.push("/profile/savedfarmlands")}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>Saved Farmlands</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4D4D8" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── CTA & FOOTER ─── */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
        <CTA />
        <Footer />
      </section>
    </main>
  );
}
