"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const SERVICE_CONFIG: Record<string, { title: string; amount: string; image: string; phases: string[] }> = {
  "farmhouse-construction": {
    title: "Farmhouse Construction",
    amount: "₹2,50,000",
    image: "/assets/Track Progress/Overlay+Shadow (1).svg",
    phases: [
      "Site Clearing & Pre-Inspection",
      "Foundation & Excavation",
      "Plumbing & Electrical",
      "Structural Construction"
    ]
  },
  "borewell-drilling": {
    title: "Borewell Drilling",
    amount: "₹1,20,000",
    image: "/assets/home/TrendingFarmlands/glcsos02.svg",
    phases: [
      "Field Officer Validation",
      "Hydro-Geological Survey",
      "Borewell Drilling",
      "Pump Installation"
    ]
  },
  "organic-farm-setup": {
    title: "Organic Farm Setup",
    amount: "₹85,000",
    image: "/assets/home/TrendingFarmlands/glcsos03.svg",
    phases: [
      "Field Officer Validation",
      "Soil Analysis",
      "Organic Conversion",
      "Planting"
    ]
  },
  "fencing-security": {
    title: "Fencing & Security",
    amount: "₹1,50,000",
    image: "/assets/home/YourListings/glcsos3.svg",
    phases: [
      "Field Officer Validation",
      "Boundary Survey",
      "Fencing Installation",
      "Security Setup"
    ]
  }
};

function TrackProgressHero() {
  const router = useRouter();
  return (
    <section className="w-full relative h-[80vh] md:h-screen min-h-[500px] md:min-h-[640px] flex flex-col items-center justify-start box-border select-none overflow-hidden bg-[#2780C4] shrink-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Track Progress/TrackProgess.hero.svg"
          alt="Track Real-time Implementation Workspace"
          fill
          priority
          className="object-cover object-center brightness-95"
        />
        <div className="absolute inset-0 bg-black/45 z-10" />
      </div>

      <div className="w-full px-4 sm:px-12 py-6 relative z-20 flex items-center justify-between max-w-[1600px] mx-auto box-border">
        <div onClick={() => router.push("/home")} className="cursor-pointer shrink-0 relative transition-transform hover:scale-105 active:scale-95">
          <Image src="/assets/common/Logo green land 1.svg" alt="Green Land Capital Brand" width={150} height={64} className="object-contain" />
        </div>

        <div className="hidden md:flex items-center bg-white/10 shadow-[0_8px_6px_rgba(0,0,0,0.05)] backdrop-blur-md border border-white/20 rounded-full p-2 gap-2 box-border">
          <button onClick={() => router.push("/home")} className="px-6 py-3 bg-transparent rounded-full text-white font-extrabold text-sm tracking-wider uppercase border-none cursor-pointer hover:bg-white/10 transition-colors block">HOME</button>
          <button onClick={() => router.push("/search")} className="w-11 h-11 rounded-full bg-transparent border-none flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={20} height={20} />
          </button>
          <button onClick={() => router.push("/pricing")} className="w-11 h-11 rounded-full bg-transparent border-none flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Wishlist" width={20} height={18} />
          </button>
          <button onClick={() => router.push("/profile")} className="w-11 h-11 rounded-full bg-transparent border-none flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
            <Image src="/assets/home/HeroScreen/user 1.png" alt="User" width={20} height={20} />
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button onClick={() => router.push("/home/unlockeddocuments")} className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all shrink-0">
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Lock" width={22} height={22} />
          </button>
          <button className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center cursor-pointer relative hover:bg-white/20 transition-all shrink-0">
            <Image src="/assets/home/HeroScreen/notification-v2.svg" alt="Notifications" width={22} height={22} />
            <span className="absolute top-0 sm:top-1 right-0 sm:right-1 w-3 h-3 sm:w-[14px] sm:h-[14px] bg-[#E33629] rounded-full flex items-center justify-center text-[8px] sm:text-[9px] font-bold text-white border-[1.5px] border-white shadow-sm">4</span>
          </button>
          <button onClick={() => router.push("/profile")} className="hidden sm:flex w-[52px] h-[52px] rounded-full border-[2.5px] border-white overflow-hidden cursor-pointer hover:scale-105 transition-transform shrink-0">
            <Image src="/assets/home/HeroScreen/Ellipse 2.png" alt="Profile" width={52} height={52} className="object-cover" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function DynamicTrackProgressPage() {
  const router = useRouter();
  const params = useParams();
  
  // Default to farmhouse if not found
  const serviceSlug = typeof params?.serviceSlug === "string" ? params.serviceSlug : "farmhouse-construction";
  const config = SERVICE_CONFIG[serviceSlug] || SERVICE_CONFIG["farmhouse-construction"];

  return (
    <div className="w-full flex flex-col relative min-h-screen bg-[#F8F9FA] select-none box-border overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      <TrackProgressHero />

      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 py-12 md:py-20 relative z-30 box-border flex-grow flex flex-col gap-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* PANE 1: ONBOARDING PHASES */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:col-span-3 flex flex-col w-full">
            <div className="w-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[48px] p-6 sm:p-8 box-border flex flex-col gap-8">
              <h2 className="m-0 font-bold text-lg sm:text-xl text-[#131600] tracking-[-0.5px]">
                Onboarding Phases
              </h2>

              <div className="flex flex-col gap-8 w-full box-border">
                {config.phases.map((phaseTitle, index) => {
                  const isActive = index === 0;
                  return (
                    <div key={index} className={`w-full flex items-start gap-4 box-border ${!isActive ? 'opacity-40 items-center' : ''}`}>
                      {isActive ? (
                        <div className="w-8 h-8 rounded-full bg-[#00629E] flex items-center justify-center shrink-0 relative mt-0.5 shadow-[0_0_0_4px_rgba(0,98,158,0.2)]">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#E1E3E4] flex items-center justify-center shrink-0">
                          <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.5" y="5.5" width="7" height="6" rx="1" stroke="#45474C" strokeWidth="1.2"/>
                            <path d="M2.5 5.5V3.5C2.5 2.11929 3.61929 1 5 1C6.38071 1 7.5 2.11929 7.5 3.5V5.5" stroke="#45474C" strokeWidth="1.2"/>
                          </svg>
                        </div>
                      )}

                      <div className="flex flex-col gap-0.5 flex-grow">
                        <span className={`font-bold text-xs tracking-[0.35px] uppercase block ${isActive ? 'text-[#091426]' : 'text-[#45474C]'}`}>
                          PHASE {index + 1}
                        </span>
                        <span className={`text-base sm:text-lg text-[#131600] leading-tight block ${isActive ? 'font-bold' : 'font-semibold'}`}>
                          {phaseTitle}
                        </span>
                        {isActive && (
                          <span className="font-normal text-xs sm:text-sm text-[#45474C] block mt-0.5">
                            Inspection in progress
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* PANE 2: LIVE SITE UPDATES */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="lg:col-span-5 flex flex-col gap-6 w-full">
            <h2 className="m-0 font-bold text-lg sm:text-xl text-[#131600] tracking-[-0.5px] px-2">
              Live Site Updates
            </h2>
            <div className="w-full h-[240px] sm:h-[307.78px] rounded-[48px] overflow-hidden relative box-border select-none shadow-sm flex items-center justify-center bg-white/5">
              <img
                src={config.image}
                alt="Live Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full bg-[#F3F4F5] rounded-[48px] p-8 sm:p-12 box-border flex flex-col items-center justify-center gap-4 text-center">
              <img src="/assets/Track Progress/Overlay (2).svg" alt="Awaiting inspection" className="w-16 h-16 shrink-0" />
              <span className="font-bold text-base sm:text-lg text-[#131600] block">
                Awaiting First Inspection
              </span>
              <p className="m-0 font-normal text-sm sm:text-base text-[#45474C] max-w-[320px] leading-relaxed">
                Satellite confirmation pending ground verification from Vikram.
              </p>
            </div>
          </motion.div>

          {/* PANE 3: FINANCIALS & ADMIN */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="lg:col-span-4 flex flex-col gap-6 w-full">
            <h2 className="m-0 font-bold text-lg sm:text-xl text-[#131600] tracking-[-0.5px] px-2">
              Financials & Admin
            </h2>
            
            <div className="w-full bg-[#091426] rounded-[48px] p-8 box-border flex flex-col justify-between h-[240px] relative shadow-md">
              <div className="w-full flex items-center justify-between">
                <span className="font-bold text-xs text-white tracking-[1.2px] uppercase">
                  INITIAL SETUP INVOICE
                </span>
                <img src="/assets/Track Progress/Icon (19).svg" alt="Invoice icon" className="w-5 h-4 shrink-0" />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <span className="font-extrabold text-3xl sm:text-4xl md:text-[36px] text-white tracking-[-0.9px] leading-none">
                  {config.amount}
                </span>
                <span className="font-normal text-xs text-white/40 block mt-1">
                  Due upon validation completion
                </span>
              </div>
              <div className="w-full flex items-center justify-start sm:justify-center">
                <button
                  onClick={() => router.push("/pricing")}
                  className="w-full sm:w-[220px] h-[56px] bg-[#2780C4] hover:bg-[#2780C4]/90 active:scale-[0.99] transition-all text-white font-bold text-sm sm:text-base rounded-full shadow-md border-none cursor-pointer block tracking-wide text-center box-border"
                >
                  Pay & Resume Work &gt;
                </button>
              </div>
            </div>

            <div className="w-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[48px] flex flex-col box-border overflow-hidden">
              <div 
                onClick={() => router.push("/home")}
                className="w-full p-4 sm:px-6 py-4 border-b border-[#EDEEEF] flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors box-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EDEEEF] flex items-center justify-center shrink-0">
                    <img src="/assets/Track Progress/Icon (17).svg" alt="Document icon" className="w-4 h-5" />
                  </div>
                  <span className="font-bold text-sm sm:text-base text-[#131600]">
                    GLC SOS 01
                  </span>
                </div>
                <span className="text-[#C5C6CD] text-xl font-bold block select-none">&rsaquo;</span>
              </div>

              <div 
                onClick={() => router.push("/pricing")}
                className="w-full p-4 sm:px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors box-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EDEEEF] flex items-center justify-center shrink-0">
                    <img src="/assets/Track Progress/Icon (18).svg" alt="Chart icon" className="w-[18px] h-[18px]" />
                  </div>
                  <span className="font-bold text-sm sm:text-base text-[#131600]">
                    {config.title}
                  </span>
                </div>
                <span className="text-[#C5C6CD] text-xl font-bold block select-none">&rsaquo;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full flex flex-col relative z-20 mt-auto">
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
