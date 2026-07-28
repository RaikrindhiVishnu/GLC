"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function MaintenanceHero() {
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
      <div className="block lg:hidden relative w-full h-[80vh] min-h-125 overflow-hidden" style={{ background: "#091426" }}>
        <Image src="/assets/maintenance/hero.svg" alt="Maintenance of Farmland Hero" fill priority style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.65), rgba(0,0,0,0.4))", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          <Navbar variant="app" active="search" />
        </div>
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "calc(80vh - 72px)", padding: "32px 20px 48px", textAlign: "center" }}>
          <motion.h1
            initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[42px] sm:text-[64px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-1.5px", color: "#FFFFFF", margin: "0 0 20px", lineHeight: 1.1, whiteSpace: "nowrap" }}
          >
            Maintenance of Farmland
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,0.8)", maxWidth: "800px", margin: 0 }}
          >
            Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline
          </motion.p>
        </div>
      </div>

      {/* ══ DESKTOP LAYOUT (>= lg) — scaler shell ══ */}
      <div className="hidden lg:block" ref={shellRef} style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div ref={scalerRef} style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-720px", width: "1440px", height: "960px", transformOrigin: "top center" }}>
          <section style={{ position: "relative", width: "1440px", height: "960px", background: "#091426", overflow: "hidden", display: "flex", justifyContent: "center" }}>
            <Image src="/assets/maintenance/hero.svg" alt="Maintenance of Farmland Hero" fill priority style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.45))", zIndex: 1 }} />

            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "1440px", height: "960px", zIndex: 20, pointerEvents: "none" }}>
              <div style={{ position: "absolute", width: "150px", height: "64px", left: "60px", top: "24px", cursor: "pointer", pointerEvents: "auto", display: "flex", alignItems: "center" }} onClick={() => router.push("/home")}>
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
              <button onClick={() => router.push("/home/unlockeddocuments")} style={{ position: "absolute", width: "52px", height: "52px", left: "1194px", top: "36px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(62.67px)", borderRadius: "50%", border: "none", boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 0px 1.25px 1.25px rgba(255,255,255,0.25), inset 0px -1.25px 1.25px rgba(255,255,255,0.25), inset 3.76px 5px 2.5px -1px rgba(255,255,255,0.55)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto" }}>
                <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock" width={26} height={26} />
              </button>
              <button onClick={() => router.push("/home/supportcenter")} style={{ position: "absolute", width: "52px", height: "52px", left: "1261px", top: "36px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(62.67px)", borderRadius: "50%", border: "none", boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 0px 1.25px 1.25px rgba(255,255,255,0.25), inset 0px -1.25px 1.25px rgba(255,255,255,0.25), inset 3.76px 5px 2.5px -1px rgba(255,255,255,0.55)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto" }}>
                <Image src="/assets/home/HeroScreen/notification-v2.svg" alt="Notifications" width={26} height={26} />
                
              </button>


              <div style={{ position: "absolute", width: "1200px", left: "calc(50% - 600px)", top: "340px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", pointerEvents: "auto" }}>
                <motion.h1
                  initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "96px", lineHeight: "1", textAlign: "center", letterSpacing: "-1.8px", color: "#FFFFFF", whiteSpace: "nowrap" }}
                >
                  Maintenance of Farmland
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "24px", lineHeight: "32px", textAlign: "center", color: "#FFFFFF", maxWidth: "996px" }}
                >
                  Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline
                </motion.p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
