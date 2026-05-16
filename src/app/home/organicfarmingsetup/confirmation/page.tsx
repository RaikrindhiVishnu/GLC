"use client";

import React from "react";
import { useRouter } from "next/navigation";
import OrganicFarmingSetupHero from "../OrganicFarmingSetupHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function OrganicFarmingSetupConfirmationPage() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col relative min-h-screen bg-[#F8F9FA] select-none box-border overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ─── MASTER HERO SECTION (Reused identical environmental background and header context) ─── */}
      <OrganicFarmingSetupHero />


      {/* ─── MAIN CONFIRMATION CANVAS AREA ─── */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-12 py-16 md:py-24 relative z-30 box-border flex-grow flex flex-col items-center">
        
        {/* ─── SECTION 1: HERO CONFIRMATION STATEMENT ─── */}
        <div className="w-full max-w-[896px] flex flex-col items-center gap-4 mb-16 box-border">
          
          {/* Radial Gradient Verified Ring Icon Slot */}
          <div className="w-[96px] h-[96px] rounded-full bg-[radial-gradient(59.38%_41.98%_at_50%_50%,#2780C4_0%,#164573_100%)] border-[5px] border-[#AED6EF] flex items-center justify-center relative shadow-sm box-border shrink-0">
            <span className="text-white text-4xl font-extrabold block">✓</span>
          </div>

          {/* Core Announcement Typography */}
          <h2 className="m-0 font-extrabold text-4xl sm:text-5xl md:text-[60px] text-[#131600] tracking-[-1.5px] leading-tight md:leading-[60px] text-center mt-3">
            Work Order Generated.
          </h2>

          {/* Explanatory Subtitle mapped to screenshot parameters precisely */}
          <p className="m-0 font-normal text-base sm:text-lg md:text-[20px] text-[#45474C] max-w-[672px] leading-relaxed text-center">
            Your land is now enrolled. A Field Officer (FO) has been assigned to begin site validation and soil preparation.
          </p>

        </div>


        {/* ─── SECTION 2: EXECUTIVE RECEIPT CARD CONSOLE ─── */}
        <div className="w-full max-w-[1024px] bg-white shadow-[0_40px_80px_-20px_rgba(9,20,38,0.04)] rounded-[48px] flex flex-col box-border overflow-hidden border border-slate-50">
          
          {/* Top Panel: Apple-style Inset metadata parameters */}
          <div className="w-full p-6 sm:p-12 box-border border-b border-[#F3F4F5]">
            <div className="w-full bg-[#F3F4F5] rounded-[32px] p-6 sm:p-8 flex flex-col gap-6 box-border">
              
              {/* Row item 1: Target Asset */}
              <div className="w-full flex items-center justify-between">
                <span className="font-semibold text-xs text-[#45474C] tracking-[1.2px] uppercase">
                  TARGET ASSET
                </span>
                <span className="font-bold text-base sm:text-lg text-[#131600]">
                  GLC 505 01
                </span>
              </div>

              {/* Row item 2: Management Plan selection record */}
              <div className="w-full flex items-center justify-between">
                <span className="font-semibold text-xs text-[#45474C] tracking-[1.2px] uppercase">
                  MANAGEMENT PLAN
                </span>
                <span className="font-bold text-base sm:text-lg text-[#00629E]">
                  Standard Agri-Yield (50/50)
                </span>
              </div>

              {/* Row item 3: Process cycle validation state */}
              <div className="w-full flex items-center justify-between">
                <span className="font-semibold text-xs text-[#45474C] tracking-[1.2px] uppercase">
                  CURRENT STATUS
                </span>
                <div className="bg-[#CFE5FF] px-4 py-1.5 rounded-full flex items-center justify-center shadow-xs">
                  <span className="font-black text-[11px] sm:text-xs text-[#004A78] tracking-[1.2px] uppercase block">
                    PENDING FO VALIDATION
                  </span>
                </div>
              </div>

            </div>
          </div>


          {/* Bottom Panel: High-res environment vector coverage section */}
          <div className="w-full h-[300px] sm:h-[438.84px] relative box-border overflow-hidden select-none">
            {/* Visual background proxy image */}
            <img
              src="/assets/organicfrmingsetup/Lush Farm Scene.svg"
              alt="Premium Active Agricultural Execution Framework"
              className="w-full h-full object-cover absolute inset-0 z-0 brightness-95"
            />
            {/* Dark bottom layer gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

            {/* Embedded Coordinates Watermark identifier */}
            <div className="absolute left-6 sm:left-[40px] bottom-6 sm:bottom-[32px] z-20">
              <span className="font-black text-xs sm:text-sm text-white tracking-[1.4px] uppercase block drop-shadow-md">
                SITE: GLC 505 01 • SECTOR A
              </span>
            </div>
          </div>

        </div>


        {/* ─── SECTION 3: ACTION DECK TRIGGER CONTAINER ─── */}
        <div className="mt-12 flex items-center justify-center w-full">
          <button
            onClick={() => router.push("/home/organicfarmingsetup/confirmation/trackprogress")}
            className="w-[268.44px] h-[68px] bg-[radial-gradient(49.92%_99.29%_at_50%_50%,#2780C4_0%,#164573_100%)] hover:opacity-95 active:scale-[0.99] transition-all text-white font-bold text-lg rounded-full shadow-md border-none cursor-pointer flex items-center justify-center gap-3 tracking-wide"
          >
            <span>TRACK PROGRESS</span>
            <span className="font-bold text-xl block">→</span>
          </button>
        </div>

      </section>


      {/* ─── REUSED BASE ECOSYSTEM LAYER (CTA + FOOTER) ─── */}
      <div className="w-full flex flex-col relative z-20 mt-auto">
        <CTA />
        <Footer />
      </div>

    </div>
  );
}
