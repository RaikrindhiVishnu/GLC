"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TrackProgressHero from "./TrackProgressHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function TrackProgressPage() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col relative min-h-screen bg-[#F8F9FA] select-none box-border overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ─── DEDICATED TRACK PROGRESS HERO LAYER (Fits exactly to one screen depth responsively) ─── */}
      <TrackProgressHero />


      {/* ─── MAIN CONTENT WORKBENCH AREA ─── */}
      {/* Responsive layout containers guaranteeing seamless adaptive columns on desktop and robust block stacking on smaller viewports */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 py-12 md:py-20 relative z-30 box-border flex-grow flex flex-col gap-12">
        
        {/* Adaptive Column Grid Setup matching requested screenshot pane distributions exactly */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ─── PANE 1: ONBOARDING PHASES (Left Column spanning 3 grid tracks on large screens) ─── */}
          <div className="lg:col-span-3 flex flex-col w-full">
            <div className="w-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[48px] p-6 sm:p-8 box-border flex flex-col gap-8">
              
              {/* Heading 2 */}
              <h2 className="m-0 font-bold text-lg sm:text-xl text-[#131600] tracking-[-0.5px]">
                Onboarding Phases
              </h2>

              {/* Dynamic Phases Stack container */}
              <div className="flex flex-col gap-8 w-full box-border">
                
                {/* Phase 1: Active configuration */}
                <div className="w-full flex items-start gap-4 box-border">
                  {/* Indicator capsule */}
                  <div className="w-8 h-8 rounded-full bg-[#00629E] flex items-center justify-center shrink-0 shadow-xs relative mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white block" />
                  </div>

                  <div className="flex flex-col gap-1 flex-grow">
                    <span className="font-bold text-xs text-[#091426] tracking-[0.35px] uppercase block">
                      PHASE 1
                    </span>
                    <span className="font-bold text-base sm:text-lg text-[#131600] leading-tight block">
                      Field Officer Validation
                    </span>
                    <span className="font-normal text-xs sm:text-sm text-[#45474C] block mt-0.5">
                      Inspection in progress
                    </span>
                  </div>
                </div>


                {/* Phase 2: Locked configuration */}
                <div className="w-full flex items-center gap-4 box-border opacity-40">
                  {/* Indicator capsule */}
                  <div className="w-8 h-8 rounded-full bg-[#E1E3E4] flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#45474C] block" />
                  </div>

                  <div className="flex flex-col gap-0.5 flex-grow">
                    <span className="font-bold text-xs text-[#45474C] tracking-[0.35px] uppercase block">
                      PHASE 2
                    </span>
                    <span className="font-semibold text-base sm:text-lg text-[#131600] leading-tight block">
                      Deep Soil Analysis
                    </span>
                  </div>
                </div>


                {/* Phase 3: Locked configuration */}
                <div className="w-full flex items-center gap-4 box-border opacity-40">
                  {/* Indicator capsule */}
                  <div className="w-8 h-8 rounded-full bg-[#E1E3E4] flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#45474C] block" />
                  </div>

                  <div className="flex flex-col gap-0.5 flex-grow">
                    <span className="font-bold text-xs text-[#45474C] tracking-[0.35px] uppercase block">
                      PHASE 3
                    </span>
                    <span className="font-semibold text-base sm:text-lg text-[#131600] leading-tight block">
                      Organic Conversion
                    </span>
                  </div>
                </div>


                {/* Phase 4: Locked configuration */}
                <div className="w-full flex items-center gap-4 box-border opacity-40">
                  {/* Indicator capsule */}
                  <div className="w-8 h-8 rounded-full bg-[#E1E3E4] flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#45474C] block" />
                  </div>

                  <div className="flex flex-col gap-0.5 flex-grow">
                    <span className="font-bold text-xs text-[#45474C] tracking-[0.35px] uppercase block">
                      PHASE 4
                    </span>
                    <span className="font-semibold text-base sm:text-lg text-[#131600] leading-tight block">
                      Planting
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>


          {/* ─── PANE 2: LIVE SITE UPDATES (Center Flexible Canvas spanning 5 grid tracks on large screens) ─── */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Heading 2 */}
            <h2 className="m-0 font-bold text-lg sm:text-xl text-[#131600] tracking-[-0.5px] px-2">
              Live Site Updates
            </h2>

            {/* Immersive Preview Visual Anchor directly rendering exported source SVG vector context */}
            <div className="w-full h-[240px] sm:h-[307.78px] rounded-[48px] overflow-hidden relative box-border select-none shadow-sm flex items-center justify-center bg-white/5">
              <img
                src="/assets/Track Progress/Overlay+Shadow.svg"
                alt="Active Target Sprout Validation Screen"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Waiting State Bento Component Block */}
            <div className="w-full bg-[#F3F4F5] rounded-[48px] p-8 sm:p-12 box-border flex flex-col items-center justify-center gap-4 text-center">
              
              {/* Circular placeholder icon overlay */}
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                <span className="text-xl block text-[#C5C6CD]">🚫</span>
              </div>

              {/* Heading 3 */}
              <span className="font-bold text-base sm:text-lg text-[#131600] block">
                Awaiting First Inspection
              </span>

              {/* Subtext description mapping requested text exactly */}
              <p className="m-0 font-normal text-sm sm:text-base text-[#45474C] max-w-[320px] leading-relaxed">
                Satellite confirmation pending ground verification from Vikram.
              </p>

            </div>

          </div>


          {/* ─── PANE 3: FINANCIALS & ADMIN (Right Column spanning 4 grid tracks on large screens) ─── */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            
            {/* Heading 2 */}
            <h2 className="m-0 font-bold text-lg sm:text-xl text-[#131600] tracking-[-0.5px] px-2">
              Financials & Admin
            </h2>

            {/* Dark glass invoice card */}
            <div className="w-full bg-[#091426] rounded-[48px] p-8 box-border flex flex-col justify-between h-[240px] relative shadow-md">
              
              {/* Top Row: Label tag identification */}
              <div className="w-full flex items-center justify-between">
                <span className="font-bold text-xs text-white tracking-[1.2px] uppercase">
                  INITIAL SETUP INVOICE
                </span>
                <span className="w-3 h-3 rounded-full bg-[#2780C4] block shadow-xs" />
              </div>

              {/* Middle Stack: Appraised cost figure */}
              <div className="flex flex-col gap-1 w-full">
                <span className="font-extrabold text-3xl sm:text-4xl md:text-[36px] text-white tracking-[-0.9px] leading-none">
                  ₹4,50,000
                </span>
                <span className="font-normal text-xs text-white/40 block mt-1">
                  Due upon validation completion
                </span>
              </div>

              {/* Bottom Trigger Execution Button matching screenshot text precisely */}
              <div className="w-full flex items-center justify-start sm:justify-center">
                <button
                  onClick={() => router.push("/pricing")}
                  className="w-full sm:w-[220px] h-[56px] bg-[#2780C4] hover:bg-[#2780C4]/90 active:scale-[0.99] transition-all text-white font-bold text-sm sm:text-base rounded-full shadow-md border-none cursor-pointer block tracking-wide text-center box-border"
                >
                  Pay & Resume Work &gt;
                </button>
              </div>

            </div>


            {/* iOS style grouped list enclosure */}
            <div className="w-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[48px] flex flex-col box-border overflow-hidden">
              
              {/* Sibling element row 1 */}
              <div 
                onClick={() => router.push("/home")}
                className="w-full p-4 sm:px-6 py-4 border-b border-[#EDEEEF] flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors box-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EDEEEF] flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[#091426]">📄</span>
                  </div>
                  <span className="font-bold text-sm sm:text-base text-[#131600]">
                    GLC 505 01
                  </span>
                </div>
                <span className="text-[#C5C6CD] text-xl font-bold block select-none">&rsaquo;</span>
              </div>


              {/* Sibling element row 2 */}
              <div 
                onClick={() => router.push("/pricing")}
                className="w-full p-4 sm:px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors box-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EDEEEF] flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[#091426]">📊</span>
                  </div>
                  <span className="font-bold text-sm sm:text-base text-[#131600]">
                    Standard Agri-Yield (50/50)
                  </span>
                </div>
                <span className="text-[#C5C6CD] text-xl font-bold block select-none">&rsaquo;</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ─── SHARED COMPONENT REUSE (CTA + FOOTER) ─── */}
      <div className="w-full flex flex-col relative z-20 mt-auto">
        <CTA />
        <Footer />
      </div>

    </div>
  );
}
