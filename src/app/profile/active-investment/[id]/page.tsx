"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ExitRequestModal from "./ExitRequestModal";

export default function ActiveInvestmentPage() {
  const router = useRouter();
  const params = useParams();
  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scale = vw / 1440;
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${scale})`;
        scalerRef.current.style.height = `${Math.max(960, vh / scale)}px`;
      }
      if (shellRef.current) {
        shellRef.current.style.height = `${vh}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <main style={{ background: "#F8F9FA", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      
      {/* ══ MOBILE HERO (< lg) ══ */}
      <div className="block lg:hidden relative w-full overflow-hidden" style={{ height: "100vh", background: "#091426" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80" alt="Estate Background" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          <Navbar variant="app" active="profile" />
        </div>
        <div style={{ position: "relative", zIndex: 2, padding: "48px 20px 32px", display: "flex", flexDirection: "column", gap: "24px", height: "calc(100vh - 80px)", justifyContent: "flex-end" }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(6px)", borderRadius: "9999px", padding: "6px 16px", marginBottom: "20px" }}
            >
              <div style={{ width: "8px", height: "8px", background: "#BCD225", borderRadius: "9999px" }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#091426" }}>AGRICULTURAL PLOT</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ margin: "0 0 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: 1, letterSpacing: "-1px", color: "#FFFFFF" }}
            >
              GLC SOS 01
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
               <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: "20px", color: "rgba(255,255,255,0.9)" }}>Medchal</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══ DESKTOP HERO (>= lg) ══ */}
      <div className="hidden lg:block relative w-full overflow-hidden" ref={shellRef} style={{ background: "#091426" }}>
         <div ref={scalerRef} style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-720px", width: "1440px", height: "960px", transformOrigin: "top center" }}>
            <section style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", padding: "0px", isolation: "isolate", width: "1440px", height: "960px", position: "relative", overflow: "hidden" }}>
               <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                  <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80" alt="Estate Background" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
               </div>
               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)", zIndex: 1 }} />
               
               {/* Nav Header */}
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
                     <button onClick={() => router.push("/home/unlockeddocuments")} style={{ position: "absolute", width: "52px", height: "52px", left: "1194px", top: "36px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(62.67px)", borderRadius: "50%", border: "none", boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 0px 1.25px 1.25px rgba(255,255,255,0.25), inset 0px -1.25px 1.25px rgba(255,255,255,0.25), inset 3.76px 5px 2.5px -1px rgba(255,255,255,0.55)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto" }}>
                        <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock" width={26} height={26} />
                     </button>
                     <button onClick={() => router.push("/home/supportcenter")} style={{ position: "absolute", width: "52px", height: "52px", left: "1261px", top: "36px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(62.67px)", borderRadius: "50%", border: "none", boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 0px 1.25px 1.25px rgba(255,255,255,0.25), inset 0px -1.25px 1.25px rgba(255,255,255,0.25), inset 3.76px 5px 2.5px -1px rgba(255,255,255,0.55)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto" }}>
                        <Image src="/assets/home/HeroScreen/notification-v2.svg" alt="Notifications" width={26} height={26} />
                     </button>
                     <div onClick={() => router.push("/profile")} style={{ position: "absolute", width: "52px", height: "52px", left: "1328px", top: "35px", borderRadius: "50%", border: "0.45px solid rgba(255,255,255,0.82)", overflow: "hidden", cursor: "pointer", pointerEvents: "auto" }}>
                        <img src="/assets/home/HeroScreen/person.svg" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }} />
                     </div>
                  </div>
               </div>

               {/* Content */}
               <div style={{ position: "relative", width: "1440px", padding: "0 48px 50px", display: "flex", flexDirection: "column", zIndex: 10, pointerEvents: "none" }}>
                  <motion.div
                     initial={{ opacity: 0, y: 8 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: 0.2 }}
                     style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(6px)", borderRadius: "9999px", padding: "6px 16px", marginBottom: "26px" }}
                  >
                     <div style={{ width: "8px", height: "8px", background: "#BCD225", borderRadius: "9999px" }} />
                     <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#091426" }}>AGRICULTURAL PLOT</span>
                  </motion.div>
                  <motion.h1
                     initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                     animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                     transition={{ duration: 0.6, delay: 0.3 }}
                     style={{ margin: "0 0 26px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "60px", lineHeight: "60px", letterSpacing: "-1.5px", color: "#FFFFFF" }}
                  >
                     GLC SOS 01
                  </motion.h1>
                  <motion.div
                     initial={{ opacity: 0, y: 8 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.45 }}
                     style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                     <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                     <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: "24px", color: "rgba(255,255,255,0.9)" }}>Medchal</span>
                  </motion.div>
               </div>
            </section>
         </div>
      </div>

      {/* ══ INVESTMENT DETAILS SECTION ══ */}
      <section className="w-full flex justify-center py-16 lg:py-[100px] px-6 lg:px-12 z-10 relative">
         <div className="w-full max-w-[1312px] flex flex-col gap-10">
            {/* Title */}
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", lineHeight: "48px", letterSpacing: "-1.2px", color: "#0F2F4C" }}>
               Investment Details
            </h2>

            {/* Split Layout */}
            <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
               
               {/* Left Column: Current Value Card */}
               <div className="w-full lg:w-[770px] bg-white rounded-[32px] shadow-[0px_4px_40px_rgba(9,20,38,0.04)] h-auto lg:h-[310px] relative p-6 lg:p-8 flex flex-col">
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C", marginBottom: "6px" }}>
                     Current Value
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "48px", letterSpacing: "-0.96px", color: "#2780C4", marginBottom: "40px" }}>
                     ₹12,75,000
                  </span>
                  
                  <div className="w-full flex flex-col sm:flex-row gap-4 mt-auto">
                     {/* Cumulative Yield */}
                     <div className="flex-1 bg-[#F8F9FA] border border-[rgba(196,198,207,0.3)] rounded-[16px] p-6 flex flex-col justify-center gap-2">
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#74777F", textTransform: "capitalize", letterSpacing: "-0.4px" }}>
                           Cumulative Yield
                        </span>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#002045" }}>
                           ₹42,500
                        </span>
                     </div>
                     {/* Next Payout */}
                     <div className="flex-1 bg-[#F8F9FA] border border-[rgba(196,198,207,0.3)] rounded-[16px] p-6 flex flex-col justify-center gap-2">
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#74777F", textTransform: "capitalize", letterSpacing: "-0.4px" }}>
                           Next Payout
                        </span>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#002045" }}>
                           June 15, 2026
                        </span>
                     </div>
                  </div>
               </div>

               {/* Right Column: Terms & Management Cards */}
               <div className="w-full lg:w-[507px] flex flex-col gap-8">
                  
                  {/* Terms & Documentation */}
                  <div className="w-full bg-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.8)] rounded-[32px] p-7 flex flex-col gap-5 shadow-[0px_8px_32px_rgba(24,28,32,0.04),inset_0px_1px_1px_1px_rgba(255,255,255,0.9)]" style={{ backdropFilter: "blur(20px)" }}>
                     <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "22px", color: "#181C20" }}>
                        Terms & Documentation
                     </h3>
                     
                     <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center py-2">
                           <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#47617C" }}>Investment Date</span>
                           <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#181C20" }}>March 12, 2026</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                           <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#47617C" }}>Holding Period</span>
                           <div className="flex gap-1 items-center">
                              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#181C20" }}>Locked</span>
                              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#47617C" }}>(Min 36 Months)</span>
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col gap-3 pt-4 border-t border-[rgba(196,198,207,0.2)]">
                        <button className="w-full h-[58px] bg-[#F1F3FA] border border-[rgba(255,255,255,0.15)] rounded-full px-4 flex justify-between items-center cursor-pointer hover:opacity-80 transition-opacity">
                           <div className="flex items-center gap-3">
                              <div className="w-[30px] h-[30px] rounded-full bg-[#E5EEF6] flex items-center justify-center">
                                 <svg width="15" height="19" viewBox="0 0 24 24" fill="none" stroke="#00609A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                              </div>
                              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#181C20" }}>View Title Deed & Passbook</span>
                           </div>
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#47617C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>

                        <button className="w-full h-[58px] bg-[#F1F3FA] border border-[rgba(255,255,255,0.15)] rounded-full px-4 flex justify-between items-center cursor-pointer hover:opacity-80 transition-opacity">
                           <div className="flex items-center gap-3">
                              <div className="w-[30px] h-[30px] rounded-full bg-[#E5EEF6] flex items-center justify-center">
                                 <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#00609A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                              </div>
                              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#181C20" }}>View Permanent GIS Map</span>
                           </div>
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#47617C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                     </div>
                  </div>

                  {/* Investment Management */}
                  <div className="w-full bg-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.8)] rounded-[32px] p-7 flex flex-col gap-4 shadow-[0px_8px_32px_rgba(24,28,32,0.04),inset_0px_1px_1px_1px_rgba(255,255,255,0.9)]" style={{ backdropFilter: "blur(20px)" }}>
                     <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#181C20" }}>
                        Investment Management
                     </h3>
                     
                     <button onClick={() => setIsExitModalOpen(true)} className="w-full bg-[#FFF5F5] border border-[#FFDAD6] rounded-[32px] p-4 flex justify-between items-center cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="flex items-center gap-4">
                           <div className="w-[38px] h-[38px] rounded-full bg-[rgba(255,218,214,0.5)] flex items-center justify-center">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BA1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                           </div>
                           <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#181C20", textAlign: "left" }}>Request Investment<br/>Exit / Cancellation</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#47617C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                     </button>
                     
                     <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", color: "#47617C", margin: "0 4px" }}>
                        Exits are subject to GLC liquidation protocols and early exit penalties. Contact your Wealth Manager for formal review.
                     </p>
                  </div>
               </div>
               
            </div>
         </div>
      </section>

      {/* ══ CTA & FOOTER ══ */}
      <CTA />
      <Footer />

      <ExitRequestModal isOpen={isExitModalOpen} onClose={() => setIsExitModalOpen(false)} />
    </main>
  );
}
