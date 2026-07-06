"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function DetailsHero() {
  const router = useRouter();
  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scale = vw / 1440;
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${scale})`;
        scalerRef.current.style.height = `${Math.max(960, vh / scale)}px`;
        const section = scalerRef.current.children[0] as HTMLElement;
        if (section) section.style.height = '100%';
      }
      if (shellRef.current) shellRef.current.style.height = `${vh}px`;
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {/* ══ MOBILE LAYOUT (< lg) ══ */}
      <div className="block lg:hidden relative w-full overflow-hidden" style={{ background: "#091426" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/assets/poolinvestments/pooldetailshero.svg" alt="GLC SOS 01 Background" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          <Navbar variant="app" active="search" />
        </div>
        <div style={{ position: "relative", zIndex: 2, padding: "48px 20px 32px", display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Title block */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(6px)", borderRadius: "9999px", padding: "6px 16px", marginBottom: "20px" }}
            >
              <div style={{ width: "8px", height: "8px", background: "#BCD225", borderRadius: "9999px" }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#091426" }}>ACTIVE & MANAGED</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ margin: "0 0 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", lineHeight: 1, letterSpacing: "-1.5px", color: "#FFFFFF" }}
            >
              GLC SOS 01
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", color: "rgba(255,255,255,0.9)" }}
            >
              Sandalwood &amp; Organic Estate - Zaheerabad
            </motion.span>
          </div>

          {/* Wealth Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.4)", backdropFilter: "blur(12px)", borderRadius: "32px", padding: "28px", display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "YOUR HOLDING", value: "5.0 Acres", color: "#131600" },
                { label: "CURRENT ESTIMATED VALUE", value: "₹1.50 Cr", color: "#091426" },
                { label: "MANAGEMENT PLAN", value: "50/50 Intercropping System", color: "#091426" },
                { label: "NEXT TARGET PAYOUT", value: "May 2026 (Estimated)", color: "#00629E" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>{item.label}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══ DESKTOP LAYOUT (>= lg) — scaler shell ══ */}
      <div className="hidden lg:block" ref={shellRef} style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div ref={scalerRef} style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-720px", width: "1440px", height: "960px", transformOrigin: "top center" }}>
          <section style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0px", isolation: "isolate", width: "1440px", height: "960px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
              <Image src="/assets/poolinvestments/pooldetailshero.svg" alt="GLC SOS 01 Estate Overview Background" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)", zIndex: 1 }} />

            {/* Nav */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "178px", zIndex: 20, pointerEvents: "none", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "1440px", height: "100%" }}>
                <div onClick={() => router.push("/home")} style={{ position: "absolute", width: "150px", height: "64px", left: "60px", top: "24px", cursor: "pointer", pointerEvents: "auto", display: "flex", alignItems: "center" }}>
                  <Image src="/assets/common/Logo green land 1.svg" alt="Green Land Capital" width={150} height={64} style={{ objectFit: "contain" }} />
                </div>
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "center", padding: "10px", gap: "10px", position: "absolute", width: "242px", height: "68px", left: "calc(50% - 121px)", top: "25px", background: "rgba(255,255,255,0.1)", boxShadow: "0px 8px 6px rgba(0,0,0,0.05), inset 3px 4px 2px -3px rgba(255,255,255,0.55), inset 0px -1px 1px rgba(255,255,255,0.25)", backdropFilter: "blur(50px)", borderRadius: "100px", pointerEvents: "auto", justifyContent: "space-between" }}>
                  {[
                    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, route: "/home" },
                    { icon: <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={22} height={22} />, route: "/search" },
                    { icon: <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing" width={22} height={20} />, route: "/pricing" },
                    { icon: <Image src="/assets/home/HeroScreen/user 1.png" alt="Profile" width={22} height={22} />, route: "/profile" },
                  ].map((item, i) => (
                    <button key={i} onClick={() => router.push(item.route)} style={{ width: "48px", height: "48px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                      {item.icon}
                    </button>
                  ))}
                </div>
                <button onClick={() => router.push("/home/unlockeddocuments")} style={{ position: "absolute", width: "52px", height: "52px", left: "1194px", top: "36px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(62.67px)", borderRadius: "125px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto" }}>
                  <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock" width={26} height={26} />
                </button>
                <button onClick={() => router.push("/home/supportcenter")} style={{ position: "absolute", width: "52px", height: "52px", left: "1261px", top: "36px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(62.67px)", borderRadius: "125px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto" }}>
                  <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications" width={26} height={26} />
                  <span style={{ position: "absolute", width: "6px", height: "6px", left: "27px", top: "13px", background: "#E53935", border: "0.9px solid rgba(255,255,255,0.9)", borderRadius: "50%" }} />
                </button>
                <div onClick={() => router.push("/profile")} style={{ position: "absolute", width: "52px", height: "52px", left: "1328px", top: "35px", borderRadius: "50%", border: "0.45px solid rgba(255,255,255,0.82)", overflow: "hidden", cursor: "pointer", pointerEvents: "auto" }}>
                  <img src="/assets/home/HeroScreen/person.svg" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }} />
                </div>
              </div>
            </div>

            {/* Lower Title + Snapshot Card */}
            <div style={{ position: "relative", width: "1440px", maxWidth: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", pointerEvents: "none" }}>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", padding: "0px 48px 96px", width: "100%", position: "relative", zIndex: 10 }}>
                <div style={{ boxSizing: "border-box", display: "inline-flex", flexDirection: "row", alignItems: "center", padding: "6px 16px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(6px)", borderRadius: "9999px", marginBottom: "24px" }}>
                  <div style={{ width: "8px", height: "8px", background: "#BCD225", borderRadius: "9999px", flexShrink: 0, marginRight: "8px" }} />
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#091426" }}>ACTIVE & MANAGED</span>
                </div>
                <motion.h1
                  initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ margin: "0 0 16px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "64px", lineHeight: "1", letterSpacing: "-1.5px", color: "#FFFFFF" }}
                >
                  GLC SOS 01
                </motion.h1>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "22px", color: "rgba(255,255,255,0.9)" }}>Sandalwood &amp; Organic Estate - Zaheerabad</span>
              </div>

              {/* Wealth Snapshot Card */}
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "40px", position: "absolute", width: "500px", height: "204px", right: "48px", bottom: "132px", background: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.4)", backdropFilter: "blur(12px)", borderRadius: "48px", zIndex: 15, pointerEvents: "auto", boxShadow: "0px 20px 25px -5px rgba(9,20,38,0.05)" }}>
                <div style={{ boxSizing: "border-box", width: "418px", height: "122px", position: "relative" }}>
                  <div style={{ position: "absolute", height: "51px", left: "0px", right: "225px", top: "0px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>YOUR HOLDING</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#131600" }}>5.0 Acres</span>
                  </div>
                  <div style={{ position: "absolute", height: "51px", left: "225px", right: "0px", top: "0px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>CURRENT ESTIMATED VALUE</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "32px", color: "#091426" }}>₹1.50 Cr</span>
                  </div>
                  <div style={{ position: "absolute", height: "39px", left: "0px", right: "225px", top: "83px", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>MANAGEMENT PLAN</span>
                    <span style={{ marginTop: "2px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#091426" }}>50/50 Intercropping System</span>
                  </div>
                  <div style={{ position: "absolute", height: "39px", left: "225px", right: "0px", top: "83px", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>NEXT TARGET PAYOUT</span>
                    <span style={{ marginTop: "2px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#00629E" }}>May 2026 (Estimated)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
