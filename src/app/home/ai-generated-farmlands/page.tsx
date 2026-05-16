"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AIFarmlandsHero from "./AIFarmlandsHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function AIGeneratedFarmlandsPage() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col relative min-h-screen bg-[#F8F9FA] select-none box-border overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ─── DEDICATED AI SUGGESTED FARMLANDS HERO LAYER ─── */}
      <AIFarmlandsHero />


      {/* ─── MAIN BENTO CONSOLE WORKBENCH AREA ─── */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-12 md:py-20 relative z-30 box-border flex-grow flex flex-col gap-12">
        
        {/* AI Context Statement Header Section */}
        <div className="w-full flex flex-col items-start gap-2 border-b border-slate-100 pb-6 box-border">
          <h2 className="m-0 font-extrabold text-4xl sm:text-5xl md:text-[60px] text-[#0F2F4C] tracking-[-1.5px] leading-tight md:leading-[60px]">
            Curated for Arjun
          </h2>
          <p className="m-0 font-medium text-base sm:text-lg text-[#45474C] max-w-[804px] leading-relaxed">
            We found 3 premium assets matching your preference for Zone A-1 and a ₹2Cr - ₹5Cr budget.
          </p>
        </div>


        {/* Responsive Bento Grid Engine array matching specific width layout logic */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ─── COLUMN A: HERO SPLIT (60% Main Master Asset View Canvas spanning 7 Grid Columns) ─── */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full bg-white border border-white/50 shadow-[0_10px_40px_-10px_rgba(9,20,38,0.04)] rounded-[48px] overflow-hidden flex flex-col justify-between box-border relative flex-grow">
              
              {/* Massive Card Overlap Framework */}
              <div className="w-full h-[320px] sm:h-[420px] relative select-none overflow-hidden shrink-0">
                {/* Immersive high-fidelity visual asset backdrop loading requested target asset exactly */}
                <img
                  src="/assets/ai-suggested/GLC SOS 04.svg"
                  alt="Premium Agricultural Zone Master View"
                  className="w-full h-full object-cover absolute inset-0 z-0 brightness-95 scale-105"
                />
                {/* Atmospheric inner shading mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />

                {/* Absolute Top-Left Image Alignment Indicator Pill */}
                <div className="absolute left-6 top-6 z-20 bg-white/90 backdrop-blur-[6px] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xs box-border">
                  <span className="w-3 h-3 rounded-full bg-[#0F2F4C] block shadow-2xs" />
                  <span className="font-bold text-xs text-[#0F2F4C] tracking-wide block">
                    98% AI Match
                  </span>
                </div>
              </div>

              {/* Lower White Base Console Housing Integrated Layout Blocks */}
              <div className="w-full p-6 sm:p-10 flex flex-col gap-6 box-border bg-white rounded-t-[48px] -mt-12 relative z-20">
                
                {/* Top row alignment block: Asset Nomenclature + Spatial coordinates vs. Appraised values */}
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#F3F4F5] pb-6 box-border">
                  <div className="flex flex-col gap-1">
                    <span className="font-extrabold text-2xl sm:text-3xl md:text-[36px] text-[#0F2F4C] leading-none">
                      GLC SOS 04
                    </span>
                    <span className="font-medium text-sm sm:text-base text-[#45474C] block mt-1">
                      Himalayan Foothills, Uttarakhand
                    </span>
                  </div>

                  <div className="flex flex-col items-start sm:items-end shrink-0">
                    <span className="font-extrabold text-2xl sm:text-3xl md:text-[30px] text-[#0F2F4C] leading-none">
                      ₹4.2 Cr
                    </span>
                    <span className="font-bold text-[11px] sm:text-xs text-[#424B00] tracking-[1.2px] uppercase block mt-1.5">
                      PRIME YIELD ASSET
                    </span>
                  </div>
                </div>


                {/* Inset Glass Card: Intelligence Lens layer block exactly reproducing blue container context */}
                <div className="w-full bg-[#CFE5FF]/30 border border-white/40 backdrop-blur-md rounded-[32px] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 box-border">
                  {/* Left circular target deep blue badge */}
                  <div className="w-12 h-12 rounded-full bg-[#00629E] flex items-center justify-center shrink-0 shadow-xs">
                    <span className="text-white text-base block font-bold">✨</span>
                  </div>

                  <p className="m-0 font-semibold text-sm sm:text-base text-[#004673] leading-relaxed flex-grow">
                    AI Insight: Projected to capitalize on a 22% CAGR in organic exports over the next 5 years.
                  </p>
                </div>


                {/* Master Action Trigger encapsulation */}
                <div className="pt-2">
                  <button
                    onClick={() => router.push("/home/unlockeddocuments")}
                    className="px-8 py-4 bg-[radial-gradient(50.07%_119.45%_at_50%_50%,#2780C4_0%,#164573_100%)] hover:opacity-95 active:scale-[0.99] transition-all text-white font-bold text-sm sm:text-base rounded-full shadow-md border-none cursor-pointer block tracking-wide"
                  >
                    Explore Unlocked Dossier
                  </button>
                </div>

              </div>

            </div>
          </div>


          {/* ─── COLUMN B: ALTERNATIVE OPPORTUNITIES (35% Column view logic stacked sidecards spanning 5 Grid Columns) ─── */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Alternative Asset Card Option 1: GLC SOS 02 */}
            <div className="w-full bg-white border border-white/50 shadow-[0_10px_40px_-10px_rgba(9,20,38,0.04)] rounded-[48px] p-6 box-border flex flex-col gap-5">
              
              {/* Image window display canvas loading explicit source asset exactly */}
              <div className="w-full h-[192px] rounded-[32px] overflow-hidden relative select-none bg-slate-100">
                <img
                  src="/assets/ai-suggested/GLC SOS 02.svg"
                  alt="GLC SOS 02 Spatial Coverage"
                  className="w-full h-full object-cover absolute inset-0 z-0 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

                {/* Rightmost Absolute Image Match Index Overlay */}
                <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs">
                  <span className="font-bold text-[10px] text-[#0F2F4C] tracking-wider block uppercase">
                    94% MATCH
                  </span>
                </div>
              </div>

              {/* Title / Pricing identification baseline row */}
              <div className="w-full flex items-center justify-between px-2 box-border">
                <span className="font-extrabold text-lg sm:text-xl text-[#0F2F4C]">
                  GLC SOS 02
                </span>
                <span className="font-bold text-base sm:text-lg text-[#0F2F4C]">
                  ₹2.8 Cr
                </span>
              </div>

              {/* Interactive Transparent Border Trigger Button matching image layout precisely */}
              <button
                onClick={() => router.push("/pricing")}
                className="w-full py-3 sm:py-4 bg-transparent border-2 border-[#2780C4] rounded-full text-[#2780C4] font-bold text-sm sm:text-base cursor-pointer hover:bg-[#2780C4]/5 active:scale-[0.99] transition-all block text-center tracking-wide"
              >
                Funded
              </button>

            </div>


            {/* Alternative Asset Card Option 2: GLC SOS 10 */}
            <div className="w-full bg-white border border-white/50 shadow-[0_10px_40px_-10px_rgba(9,20,38,0.04)] rounded-[48px] p-6 box-border flex flex-col gap-5">
              
              {/* Image window display canvas loading explicit source asset exactly */}
              <div className="w-full h-[192px] rounded-[32px] overflow-hidden relative select-none bg-slate-100">
                <img
                  src="/assets/ai-suggested/GLC SOS 10.svg"
                  alt="GLC SOS 10 Landscape Proxy"
                  className="w-full h-full object-cover absolute inset-0 z-0 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

                {/* Rightmost Absolute Image Match Index Overlay */}
                <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs">
                  <span className="font-bold text-[10px] text-[#0F2F4C] tracking-wider block uppercase">
                    92% MATCH
                  </span>
                </div>
              </div>

              {/* Title / Pricing identification baseline row */}
              <div className="w-full flex items-center justify-between px-2 box-border">
                <span className="font-extrabold text-lg sm:text-xl text-[#0F2F4C]">
                  GLC SOS 10
                </span>
                <span className="font-bold text-base sm:text-lg text-[#0F2F4C]">
                  ₹5.1 Cr
                </span>
              </div>

              {/* Interactive Transparent Border Trigger Button matching image layout precisely */}
              <button
                onClick={() => router.push("/pricing")}
                className="w-full py-3 sm:py-4 bg-transparent border-2 border-[#2780C4] rounded-full text-[#2780C4] font-bold text-sm sm:text-base cursor-pointer hover:bg-[#2780C4]/5 active:scale-[0.99] transition-all block text-center tracking-wide"
              >
                Funded
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ─── NATIVE MODULE REUSE (CTA + FOOTER) ─── */}
      <div className="w-full flex flex-col relative z-20 mt-auto">
        <CTA />
        <Footer />
      </div>

    </div>
  );
}
