"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import OrganicFarmingSetupHero from "./OrganicFarmingSetupHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function OrganicFarmingSetupPage() {
  const router = useRouter();
  // Plan switch selection state variable
  const [selectedPlan, setSelectedPlan] = useState<string>("agri-yield");
  // Toggle switch acceptance state variable
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(true);

  return (
    <div className="w-full flex flex-col relative min-h-screen bg-[#F8F9FA] select-none box-border overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ─── MASTER HERO SECTION ─── */}
      <OrganicFarmingSetupHero />


      {/* ─── MAIN CONTENT CANVAS WORKBENCH (Responsive Console matching absolute Figma layout tokens) ─── */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-12 py-16 md:py-28 relative z-30 box-border flex-grow">
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 justify-center max-w-[1280px] mx-auto">
          
          {/* ─── SECTION 1: LEFT PANEL - 55% VISUAL ANCHOR (Width: 633.59px, Height: 904px) ─── */}
          <div className="w-full lg:w-[633.59px] shrink-0 flex flex-col">
            <div className="w-full bg-white shadow-[0_25px_50px_-12px_rgba(9,20,38,0.05)] rounded-[48px] relative overflow-hidden flex flex-col justify-between box-border min-h-[600px] lg:h-[904px]">
              
              {/* Backing Lush Farm Scene Vector Composite Proxy */}
              <img
                src="/assets/organicfrmingsetup/Lush Farm Scene.svg"
                alt="Lush Organic Farming Execution Scene"
                className="w-full h-full object-cover absolute inset-0 z-0 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

              {/* Top Left Overlay Pill exactly matching screenshot string and padding */}
              <div className="relative z-20 m-8 self-start bg-white/90 shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px] px-4 py-2 rounded-full box-border">
                <span className="font-semibold text-xs sm:text-sm text-[#131600] tracking-wide block">
                  🌱 100% End-to-End Execution by GLC Agri-Experts
                </span>
              </div>

              {/* Bottom Text Overlap Core restricted to exact line height and font scale tokens */}
              <div className="relative z-20 m-8 sm:m-12 max-w-[459px]">
                <h2 className="m-0 font-extrabold text-5xl sm:text-[60px] text-white tracking-[-3px] leading-[54px] drop-shadow-sm">
                  Yield-Sharing for Generational Wealth
                </h2>
              </div>

            </div>
          </div>


          {/* ─── SECTION 2: RIGHT PANEL - 45% SETUP CONSOLE (Width: 518.41px, Height: 904px) ─── */}
          <div className="w-full lg:w-[518.41px] shrink-0 flex flex-col justify-between">
            <div className="w-full flex flex-col gap-10 box-border">
              
              {/* ─── SUBMODULE A: SELECT MANAGEMENT PLAN ─── */}
              <div className="w-full flex flex-col relative">
                <span className="font-bold text-[10px] tracking-[1px] text-[#45474C] uppercase block mb-3.5">
                  SELECT MANAGEMENT PLAN
                </span>

                {/* Stacking Grid container for dynamic Bento Plan toggle options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Plan Option 1: Standard Agri-Yield (Active state configuration) */}
                  <div
                    onClick={() => setSelectedPlan("agri-yield")}
                    className={`w-full p-6 rounded-[32px] flex flex-col justify-between relative cursor-pointer box-border transition-all h-[104px] ${
                      selectedPlan === "agri-yield"
                        ? "bg-white border-2 border-[#00629E] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                        : "bg-[#F3F4F5] border-2 border-transparent hover:border-slate-200"
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className={`font-bold text-lg ${selectedPlan === "agri-yield" ? "text-[#091426]" : "text-slate-500"}`}>
                        Standard Agri-Yield
                      </span>
                      <span className="font-medium text-xs sm:text-sm text-[#45474C]">
                        (50/50) Split
                      </span>
                    </div>

                    {/* Checkmark indicator slot */}
                    {selectedPlan === "agri-yield" && (
                      <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#00629E] flex items-center justify-center text-white text-[10px] font-bold">
                        ✓
                      </div>
                    )}
                  </div>

                  {/* Plan Option 2: Premium Timber */}
                  <div
                    onClick={() => setSelectedPlan("timber")}
                    className={`w-full p-6 rounded-[32px] flex flex-col justify-between relative cursor-pointer box-border transition-all h-[104px] ${
                      selectedPlan === "timber"
                        ? "bg-white border-2 border-[#00629E] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                        : "bg-[#F3F4F5] border-2 border-transparent hover:border-slate-200"
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className={`font-bold text-lg ${selectedPlan === "timber" ? "text-[#091426]" : "text-slate-400"}`}>
                        Premium Timber
                      </span>
                      <span className="font-medium text-xs sm:text-sm text-slate-400">
                        (60/40) Split
                      </span>
                    </div>

                    {/* Checkmark indicator slot */}
                    {selectedPlan === "timber" && (
                      <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#00629E] flex items-center justify-center text-white text-[10px] font-bold">
                        ✓
                      </div>
                    )}
                  </div>

                </div>
              </div>


              {/* ─── SUBMODULE B: EVERYTHING IS COVERED CHECKLIST INSET ─── */}
              <div className="w-full flex flex-col relative">
                <span className="font-bold text-[10px] tracking-[1px] text-[#45474C] uppercase block mb-3.5">
                  EVERYTHING IS COVERED
                </span>

                {/* Shared white backdrop card enclosing sequential inline checklist feature rows */}
                <div className="w-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[32px] flex flex-col box-border overflow-hidden border border-slate-50/80">
                  {[
                    "Soil Analysis & Prep",
                    "Organic Certification Conversion",
                    "Seed & Input Procurement",
                    "Labor & Equipment Management",
                    "Harvest Liquidation & Logistics",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-6 py-5 box-border h-[65px] ${
                        idx > 0 ? "border-t border-[#F3F4F5]" : ""
                      }`}
                    >
                      <span className="font-semibold text-base text-[#091426]">
                        {item}
                      </span>
                      <div className="w-5 h-5 rounded-full bg-[#00629E] flex items-center justify-center text-white shrink-0 text-xs font-bold">
                        ✓
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* ─── SUBMODULE C: DIGITAL VISIBILITY CARD LAYER ─── */}
              <div className="w-full bg-[#00629E]/5 border border-[#00629E]/10 rounded-[32px] p-6 flex flex-row items-start gap-4 box-border backdrop-blur-[6px]">
                {/* Circular left overlay anchor block holding eye context logo */}
                <div className="w-[46px] h-[46px] rounded-full bg-[#00629E]/10 flex items-center justify-center shrink-0 self-start">
                  <span className="text-[#00629E] text-base font-bold">👁️</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-bold text-lg text-[#091426]">
                    Complete Digital Visibility
                  </span>
                  <span className="font-normal text-sm text-[#45474C] leading-[20px]">
                    Real-time IoT sensors and drone imagery accessible 24/7 through your GLC dashboard.
                  </span>
                </div>
              </div>


              {/* ─── SUBMODULE D: BOTTOM ACTION DECK ─── */}
              <div className="w-full bg-white border border-[#F3F4F5] rounded-[32px] p-8 flex flex-col gap-8 box-border relative shadow-[0_25px_50px_-12px_rgba(9,20,38,0.1)]">
                
                {/* Toggle switch statement row */}
                <div className="w-full flex items-center justify-start gap-4">
                  <span className="font-bold text-sm text-[#091426]">
                    I agree to the Yield Sharing Terms
                  </span>

                  {/* Interactive gradient layout pill */}
                  <div
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    className={`w-[36px] h-[20px] rounded-full p-0.5 flex items-center cursor-pointer transition-all box-border ${
                      agreedToTerms
                        ? "bg-gradient-to-r from-[#ADFF2F] to-[#8FD91F] justify-end"
                        : "bg-slate-200 justify-start"
                    }`}
                  >
                    <span className="w-[15px] h-[15px] bg-white rounded-full shadow-xs block transition-all" />
                  </div>
                </div>

                {/* Left-Aligned Pill Action Button execution trigger matching the screenshot format exactly */}
                <div>
                  <button
                    onClick={() => {
                      if (!agreedToTerms) {
                        alert("Please accept the Yield Sharing Terms using the toggle switch to finalize your setup parameters.");
                        return;
                      }
                      router.push("/home/organicfarmingsetup/confirmation");
                    }}
                    className="w-[261px] h-[56px] bg-[radial-gradient(50%_50%_at_50%_50%,#2780C4_0%,#164573_100%)] hover:opacity-95 active:scale-[0.99] transition-all text-white font-bold text-base rounded-full shadow-md border-none cursor-pointer block tracking-wider text-center"
                  >
                    GENERATE WORK ORDER
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─── REUSED BASE ECOSYSTEM (CTA + FOOTER) ─── */}
      <div className="w-full flex flex-col relative z-20 mt-auto">
        <CTA />
        <Footer />
      </div>

    </div>
  );
}
