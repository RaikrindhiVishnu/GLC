"use client";

import React, { useState } from "react";
import ManageSubscriptionsHero from "./ManageSubscriptionsHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ManageSubscriptionsPage() {
  // Dynamic active subscription tier state selection mapping figma bento slots
  const [selectedTier, setSelectedTier] = useState<string>("pro-annual");

  return (
    <div className="w-full flex flex-col relative min-h-screen bg-[#F8F9FA] select-none box-border overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ─── MASTER HERO SECTION ─── */}
      <ManageSubscriptionsHero />


      {/* ─── MAIN SPATIAL WORKBENCH CANVAS (3-Pane Architecture) ─── */}
      <section className="w-full max-w-[1340px] mx-auto px-4 sm:px-8 py-12 md:py-16 relative z-30 box-border flex-grow">
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 justify-center">
          
          {/* ─── SECTION 1: LEFT PANE - ACTIVE MEMBERSHIP HUB ─── */}
          <div className="w-full lg:w-[304px] shrink-0 flex flex-col">
            <div className="w-full bg-white shadow-sm border border-slate-100 rounded-[48px] p-8 flex flex-col items-center justify-between box-border min-h-[580px] lg:h-[840px]">
              
              {/* Header Title Row */}
              <div className="w-full flex items-center justify-between">
                <span className="font-bold text-lg text-[#0F2F4C] tracking-[-0.5px]">
                  Active Membership
                </span>
                {/* Micro Outline Settings/Check Indicator */}
                <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-slate-400 text-xs">
                  ✓
                </div>
              </div>

              {/* Central Concentric Ring Progress Engine perfectly matched to screenshot specs */}
              <div className="flex flex-col items-center justify-center my-auto py-6 relative">
                {/* Apple-style dynamic radial indicator arc box */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                  {/* Base track arc */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 192 192">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="#F3F4F5"
                      strokeWidth="14"
                    />
                    {/* Active deep blue dynamic cap */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="#0F2F4C"
                      strokeWidth="14"
                      strokeDasharray="502"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>

                  {/* Foreground statistics perfectly centered */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-1">
                    <span className="font-extrabold text-3xl sm:text-4xl text-[#0F2F4C] block leading-none">
                      4 / 4
                    </span>
                    <span className="font-bold text-[9px] sm:text-[10px] tracking-[1px] text-[#45474C] uppercase block mt-1.5">
                      UNLOCKS USED
                    </span>
                  </div>
                </div>

                {/* Silver Tier Tag Badge */}
                <div className="mt-6 bg-[#CFE5FF] px-4 py-1.5 rounded-full shadow-2xs">
                  <span className="font-bold text-xs tracking-[0.6px] text-[#2780C4] uppercase block">
                    ACTIVE: SILVER TIER
                  </span>
                </div>
              </div>

              {/* Bottom Next Autorenewal Schedule row strictly bounded with gray separator line */}
              <div className="w-full pt-5 border-t border-slate-100 flex items-center gap-2.5 mt-auto">
                {/* Custom slate vector icon proxy */}
                <div className="w-4 h-4 rounded-xs border border-slate-400 flex items-center justify-center text-[9px] text-slate-500 font-bold shrink-0">
                  📅
                </div>
                <span className="font-normal text-xs sm:text-sm text-[#45474C] truncate">
                  Next Autorenewal: Nov 1, 2026
                </span>
              </div>

            </div>
          </div>


          {/* ─── SECTION 2: CENTER PANE - TIER MATRIX ─── */}
          <div className="w-full lg:w-[443px] shrink-0 flex flex-col">
            <div className="w-full flex flex-col gap-6 box-border lg:h-[840px]">
              
              {/* Table Matrix Header Row */}
              <div className="flex items-center justify-between w-full px-2">
                <span className="font-bold text-xl sm:text-2xl text-[#0F2F4C] tracking-[-0.6px]">
                  Expansion Tiers
                </span>
                <span className="font-normal text-xs sm:text-sm text-[#45474C]">
                  Annual billing (save 20%)
                </span>
              </div>

              {/* Tier Cards Stacking View */}
              <div className="flex flex-col gap-4.5">
                
                {/* Tier Card 1: Starter */}
                <div
                  onClick={() => setSelectedTier("starter")}
                  className={`w-full bg-white/80 backdrop-blur-md border rounded-[32px] p-5 sm:p-6 flex items-center justify-between box-border cursor-pointer transition-all ${
                    selectedTier === "starter"
                      ? "border-[#2780C4] shadow-md ring-1 ring-[#2780C4]"
                      : "border-slate-200/60 shadow-2xs hover:border-slate-300"
                  }`}
                >
                  {/* Left block holding node icon & context string stack */}
                  <div className="flex items-center gap-4">
                    {/* Square Dark Rounded Icon Anchor */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0F2F4C] rounded-2xl flex items-center justify-center shrink-0 shadow-inner text-white">
                      🚀
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold text-base sm:text-lg text-[#0F2F4C]">
                        Starter
                      </span>
                      <span className="font-normal text-xs sm:text-sm text-[#45474C]">
                        Ideal for solo investigators
                      </span>
                    </div>
                  </div>

                  {/* Right Cost Column */}
                  <div className="flex flex-col items-end shrink-0">
                    <span className="font-black text-xl sm:text-2xl text-[#0F2F4C] tracking-[-0.5px]">
                      ₹9,999
                    </span>
                    <span className="font-bold text-[9px] sm:text-[10px] tracking-[1px] text-[#75777D] uppercase mt-0.5">
                      PER ANNUM
                    </span>
                  </div>
                </div>

                {/* Tier Card 2: Growth */}
                <div
                  onClick={() => setSelectedTier("growth")}
                  className={`w-full bg-white/80 backdrop-blur-md border rounded-[32px] p-5 sm:p-6 flex items-center justify-between box-border cursor-pointer transition-all ${
                    selectedTier === "growth"
                      ? "border-[#2780C4] shadow-md ring-1 ring-[#2780C4]"
                      : "border-slate-200/60 shadow-2xs hover:border-slate-300"
                  }`}
                >
                  {/* Left block holding node icon & context string stack */}
                  <div className="flex items-center gap-4">
                    {/* Square Dark Rounded Icon Anchor */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0F2F4C] rounded-2xl flex items-center justify-center shrink-0 shadow-inner text-white">
                      📈
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold text-base sm:text-lg text-[#0F2F4C]">
                        Growth
                      </span>
                      <span className="font-normal text-xs sm:text-sm text-[#45474C]">
                        Enhanced data analytics suite
                      </span>
                    </div>
                  </div>

                  {/* Right Cost Column */}
                  <div className="flex flex-col items-end shrink-0">
                    <span className="font-black text-xl sm:text-2xl text-[#0F2F4C] tracking-[-0.5px]">
                      ₹19,999
                    </span>
                    <span className="font-bold text-[9px] sm:text-[10px] tracking-[1px] text-[#75777D] uppercase mt-0.5">
                      PER ANNUM
                    </span>
                  </div>
                </div>

                {/* Tier Card 3: Pro Annual (Figma Selected Accent Anchor) */}
                <div
                  onClick={() => setSelectedTier("pro-annual")}
                  className={`w-full bg-white backdrop-blur-md border rounded-[32px] p-5 sm:p-6 flex items-center justify-between box-border cursor-pointer transition-all relative overflow-hidden ${
                    selectedTier === "pro-annual"
                      ? "border-b-4 border-[#2780C4] shadow-lg ring-1 ring-[#2780C4]/20"
                      : "border-slate-200/60 shadow-2xs hover:border-slate-300"
                  }`}
                >
                  {/* Left block holding node icon & context string stack */}
                  <div className="flex items-center gap-4">
                    {/* Square Dark Rounded Icon Anchor */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0F2F4C] rounded-2xl flex items-center justify-center shrink-0 shadow-inner text-white">
                      🛡️
                    </div>
                    <div className="flex flex-col gap-1">
                      {/* Title paired directly inline with tag pill */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-base sm:text-lg text-[#0F2F4C]">
                          Pro Annual
                        </span>
                        <span className="bg-[#2780C4] text-white text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase inline-block">
                          MOST POPULAR
                        </span>
                      </div>
                      <span className="font-normal text-xs sm:text-sm text-[#45474C]">
                        Full portfolio discovery tools
                      </span>
                    </div>
                  </div>

                  {/* Right Cost Column */}
                  <div className="flex flex-col items-end shrink-0">
                    <span className="font-black text-xl sm:text-2xl text-[#2780C4] tracking-[-0.5px]">
                      ₹29,999
                    </span>
                    <span className="font-bold text-[9px] sm:text-[10px] tracking-[1px] text-[#75777D] uppercase mt-0.5">
                      PER ANNUM
                    </span>
                  </div>
                </div>

              </div>

              {/* Executable Cancellation Trigger aligned perfectly on the exact horizontal baseline as the Right Pane Upgrade button */}
              <div className="w-full flex items-center justify-center mt-auto pb-[72px]">
                <button
                  onClick={() => {
                    if (confirm("Are you sure you want to initialize complete subscription termination? Your farmlands database index access will revert to basic viewer level.")) {
                      alert("Subscription termination signal logged successfully. Retaining premium features until billing end cycle.");
                    }
                  }}
                  className="bg-transparent border-none font-semibold text-base sm:text-lg text-[#E53935] hover:underline cursor-pointer py-2 px-4 transition-all"
                >
                  Cancel Subscription
                </button>
              </div>

            </div>
          </div>


          {/* ─── SECTION 3: RIGHT PANE - PLATINUM ANCHOR ─── */}
          <div className="w-full lg:w-[405px] shrink-0 flex flex-col">
            <div className="w-full bg-[#091426] shadow-2xl rounded-[48px] p-8 sm:p-10 flex flex-col justify-between box-border relative overflow-hidden min-h-[580px] lg:h-[840px]">
              
              {/* Internal Ambient Abstract Glow Node Overlay */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#2780C4] opacity-15 blur-[50px] rounded-full pointer-events-none z-0" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#164573] opacity-25 blur-[40px] rounded-full pointer-events-none z-0" />

              {/* Master Content Core wrapper */}
              <div className="flex flex-col relative z-10 flex-grow">
                
                {/* Upper Badge block */}
                <div className="w-full flex items-start justify-between pb-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-black text-[10px] tracking-[2px] text-[#2780C4] uppercase block">
                      ELITE ACCESS
                    </span>
                    <h2 className="m-0 font-extrabold text-3xl sm:text-4xl text-white tracking-[-1.5px] leading-tight">
                      Platinum Tier
                    </h2>
                  </div>

                  {/* Top Right Solid Anchor Star Badge */}
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#2780C4] text-base">
                    ★
                  </div>
                </div>

                {/* Vertically Aligned Features Catalog array */}
                <div className="flex flex-col gap-5 pt-8 my-auto border-t border-white/10">
                  {[
                    "Unlimited Investor Unlocks",
                    "Real-time Terminal Access",
                    "Concierge Outreach Support",
                    "24/7 Priority Relationship Manager",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      {/* Translucent overlay circle wrapper housing checkmark icon */}
                      <div className="w-6 h-6 rounded-full bg-[#2780C4]/20 flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="font-medium text-sm sm:text-base text-[#D8E3FB]">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Executable Command Container */}
                <div className="w-full flex flex-col items-center gap-3 pt-8 mt-auto">
                  <button
                    onClick={() => alert("Redirecting securely to absolute global multi-channel payment layer for instant transition into elite Platinum framework status.")}
                    className="w-full py-4 bg-[radial-gradient(circle_at_center,#2780C4_0%,#164573_100%)] hover:opacity-95 transition-all active:scale-95 text-white font-bold text-sm sm:text-base rounded-full shadow-lg border-none cursor-pointer block tracking-wide"
                  >
                    ★ UPGRADE TO PLATINUM
                  </button>

                  <span className="font-medium text-[10px] sm:text-[11px] text-[#8590A6] tracking-wide text-center block px-2">
                    Secure checkout via Apple Pay & Stripe
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─── REUSED BASE COMPONENT ECOSYSTEM (CTA + FOOTER) ─── */}
      <div className="w-full flex flex-col relative z-20 mt-auto">
        <CTA />
        <Footer />
      </div>

    </div>
  );
}
