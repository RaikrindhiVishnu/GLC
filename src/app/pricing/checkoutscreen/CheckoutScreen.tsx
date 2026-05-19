"use client";

import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface CheckoutScreenProps {
  planId?: string;
  onBack: () => void;
}

export default function CheckoutScreen({ planId = "growth", onBack }: CheckoutScreenProps) {
  // Local state for payment method selection mapping figma specs
  const [selectedMethod, setSelectedMethod] = useState<"card" | "upi" | "netbanking">("card");

  // Determine dynamic pricing labels based on clicked tier, with robust figma fallback
  let planName = "Pro Investor Plan";
  let planPrice = "₹29,999";
  let planDesc = "Includes 4 premium document unlocks per month.";

  if (planId === "starter") {
    planName = "Starter Access Plan";
    planPrice = "₹9,999";
    planDesc = "Includes basic farmlands registry search and initial ledger verification access.";
  } else if (planId === "growth") {
    planName = "Growth Access Plan";
    planPrice = "₹19,999";
    planDesc = "Includes 10 high-yield premium document unlocks and full permanent GIS overlays.";
  } else if (planId === "annual") {
    planName = "Pro Investor Plan";
    planPrice = "₹29,999";
    planDesc = "Includes 4 premium document unlocks per month.";
  }

  return (
    <div className="w-full flex flex-col relative min-h-screen bg-[#F8F9FA] select-none box-border overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ─── MASTER HEADER HERO BANNER SECTION (Parity with PricingHeroSection) ─── */}
      <section className="w-full relative min-h-[520px] md:min-h-[720px] lg:h-[960px] flex flex-col items-center justify-center px-4 sm:px-8 box-border overflow-hidden shrink-0 bg-[#131600]">
        
        {/* Background Composite Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <img
          src="/assets/checkout/checkouthero.svg"
          alt="Pricing Checkout Hero Backdrop"
          className="w-full h-full object-cover absolute inset-0 z-0 opacity-90"
        />

        <Navbar variant="app" active="pricing" />


        {/* ─── FOREGROUND TYPOGRAPHY CONTENT LAYER (Figma spec coordinates matched) ─── */}
        <div className="relative z-20 max-w-[996px] w-full flex flex-col items-center gap-6 text-center px-4 mt-12 sm:mt-16 md:mt-24">
          <h1 className="m-0 font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[100px] text-white tracking-tight sm:tracking-[-1.8px] leading-tight sm:leading-none max-w-[848px]">
            CheckOut Screen
          </h1>
          <p className="m-0 font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-[996px] leading-relaxed sm:leading-[32px]">
            Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline
          </p>
        </div>

      </section>


      {/* ─── MAIN TWO-COLUMN CHECKOUT OVERLAY PANEL ─── */}
      <section className="w-full max-w-[1340px] mx-auto px-4 sm:px-8 py-12 md:py-16 relative z-30 box-border flex-grow">
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 justify-center">
          
          {/* LEFT COLUMN: SUBSCRIPTION DETAILS (40% width desktop) */}
          <div className="w-full lg:w-[480px] shrink-0 flex flex-col">
            <div className="w-full bg-white border border-[#C5C6CD]/20 shadow-sm rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col gap-8 box-border flex-grow">
              
              {/* Header Badge & Title */}
              <div className="flex items-center gap-4">
                {/* Light Blue Circle Icon */}
                <div className="w-14 h-14 rounded-full bg-[#CFE5FF] flex items-center justify-center shrink-0 shadow-inner">
                  {/* Internal Icon representation */}
                  <div className="w-6 h-6 rounded-xs bg-[#00629E] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 rotate-45 transform" />
                    <span className="text-white text-xs font-bold">★</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="m-0 font-bold text-xl sm:text-2xl text-[#131600] tracking-[-0.6px] leading-tight">
                    Your Subscription
                  </h2>
                  <span className="font-normal text-xs sm:text-sm text-[#45474C] mt-0.5">
                    Review your selected tier
                  </span>
                </div>
              </div>

              {/* Selected Plan Details block */}
              <div className="flex flex-col gap-1 border-t border-b border-slate-100 py-6 my-2">
                <h3 className="m-0 font-bold text-lg sm:text-xl text-[#091426]">
                  {planName}
                </h3>
                <p className="m-0 font-normal text-xs sm:text-sm text-[#45474C] leading-relaxed mt-1">
                  {planDesc}
                </p>

                {/* Features inline map matching screenshot exactly */}
                <div className="flex flex-col gap-3.5 mt-5">
                  {[
                    "Verified Legal Dossiers",
                    "Permanent GIS Access",
                    "IO Risk Levels",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#BCD225] flex items-center justify-center shrink-0 shadow-2xs">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#191C1D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="font-medium text-sm sm:text-base text-[#191C1D]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Premium Asset Graphic Visualizer matching screenshot layout */}
              <div className="mt-auto bg-[#F3F4F5] rounded-[32px] p-5 sm:p-6 flex flex-col gap-4 box-border w-full">
                {/* Lush Asset Picture container */}
                <div className="w-full h-[140px] rounded-2xl overflow-hidden relative shadow-inner flex items-end p-3 box-border bg-slate-100">
                  <img
                    src="/assets/checkout/Background (1).svg"
                    alt="Premium Assets Overview"
                    className="w-full h-full object-cover absolute inset-0 z-0"
                  />
                  {/* Bottom gradient shadow for readable text overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent z-10" />
                  
                  {/* Simulated bottom left label overlay */}
                  <div className="relative z-20 bg-white/90 backdrop-blur-sm rounded-md px-2.5 py-1 shadow-2xs">
                    <span className="font-extrabold text-[10px] tracking-[1px] text-[#091426] uppercase block">
                      PREMIUM ASSETS
                    </span>
                  </div>
                </div>

                {/* Italic statement */}
                <p className="m-0 font-normal italic text-xs text-[#45474C] leading-relaxed">
                  &ldquo;Empowering sustainable land investment through precision data.&rdquo;
                </p>
              </div>

            </div>
          </div>


          {/* RIGHT COLUMN: PAYMENT CONSOLE (60% width desktop) */}
          <div className="w-full lg:w-[680px] shrink-0 flex flex-col">
            <div className="w-full bg-white shadow-sm border border-[#C5C6CD]/20 rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col gap-8 box-border flex-grow">
              
              {/* Dark Header Pricing Card */}
              <div className="w-full bg-[#091426] rounded-[28px] p-6 sm:p-8 flex items-center justify-between box-border relative overflow-hidden shadow-xl">
                {/* Internal dynamic details stack */}
                <div className="flex flex-col gap-2 relative z-10">
                  <span className="font-bold text-[10px] tracking-[2px] text-[#8590A6] uppercase block">
                    SUBSCRIPTION AMOUNT
                  </span>
                  <span className="font-black text-4xl sm:text-5xl text-white tracking-[-1.2px] block">
                    {planPrice}
                  </span>
                </div>

                {/* Concentric Circle Icon Element perfectly modeling figma coordinates */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shrink-0 select-none mr-2">
                  {/* Outer Rings */}
                  <div className="absolute inset-0 border-[2px] sm:border-[3px] border-[#2780C4]/20 rounded-full box-border" />
                  <div className="absolute inset-2 sm:inset-3 border-[2px] sm:border-[3px] border-[#2780C4]/40 rounded-full box-border" />
                  <div className="absolute inset-4 sm:inset-6 border-[2px] sm:border-[3px] border-[#2780C4]/60 rounded-full box-border" />
                  
                  {/* Core Blue Dot Node */}
                  <div className="w-10 h-10 rounded-full bg-[#2780C4] shadow-[0_0_20px_rgba(0,98,154,0.5)] flex items-center justify-center relative z-10">
                    {/* Inner minimal shield shape */}
                    <div className="w-3 h-4 bg-white rounded-2xs shadow-2xs" />
                  </div>
                </div>
              </div>


              {/* Payment Method Selector Section */}
              <div className="flex flex-col gap-4 w-full mt-2">
                <span className="font-bold text-[10px] tracking-[2px] text-[#45474C] uppercase block px-1">
                  PAYMENT METHOD
                </span>

                {/* Container holds 3 stacked payment rows */}
                <div className="w-full bg-white border border-[#C5C6CD]/40 rounded-2xl flex flex-col overflow-hidden box-border">
                  
                  {/* Option 1: Card (Default Active mapping figma background layer) */}
                  <div
                    onClick={() => setSelectedMethod("card")}
                    className={`w-full p-4 sm:p-5 flex items-center justify-between border-b border-slate-200/60 transition-colors cursor-pointer box-border ${
                      selectedMethod === "card" ? "bg-[#F3F4F5]/60" : "hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Generic simple graphic indicator */}
                      <div className="w-6 h-5 rounded-xs bg-[#091426] flex items-center justify-center shrink-0 shadow-2xs relative overflow-hidden">
                        <div className="absolute top-1 left-0 right-0 h-0.5 bg-white/20" />
                      </div>
                      <span className="font-semibold text-sm sm:text-base text-[#091426]">
                        Credit / Debit Card
                      </span>
                    </div>

                    {/* Radio state visualizer */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center box-border ${
                      selectedMethod === "card" ? "border-[#00629E]" : "border-slate-300"
                    }`}>
                      {selectedMethod === "card" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00629E]" />
                      )}
                    </div>
                  </div>

                  {/* Option 2: UPI Transfer */}
                  <div
                    onClick={() => setSelectedMethod("upi")}
                    className={`w-full p-4 sm:p-5 flex items-center justify-between border-b border-slate-200/60 transition-colors cursor-pointer box-border ${
                      selectedMethod === "upi" ? "bg-[#F3F4F5]/60" : "hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Outline pill */}
                      <div className="w-5 h-5 rounded-xs border border-slate-400/80 flex items-center justify-center shrink-0">
                        <span className="text-[9px] font-bold text-slate-500">U</span>
                      </div>
                      <span className="font-medium text-sm sm:text-base text-[#45474C]">
                        UPI Transfer
                      </span>
                    </div>

                    {/* Radio state visualizer */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center box-border ${
                      selectedMethod === "upi" ? "border-[#00629E]" : "border-slate-300"
                    }`}>
                      {selectedMethod === "upi" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00629E]" />
                      )}
                    </div>
                  </div>

                  {/* Option 3: Net Banking */}
                  <div
                    onClick={() => setSelectedMethod("netbanking")}
                    className={`w-full p-4 sm:p-5 flex items-center justify-between transition-colors cursor-pointer box-border ${
                      selectedMethod === "netbanking" ? "bg-[#F3F4F5]/60" : "hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Outline bank building */}
                      <div className="w-5 h-5 rounded-xs border border-slate-400/80 flex items-center justify-center shrink-0">
                        <span className="text-[9px] font-bold text-slate-500">Ⅲ</span>
                      </div>
                      <span className="font-medium text-sm sm:text-base text-[#45474C]">
                        Net Banking
                      </span>
                    </div>

                    {/* Radio state visualizer */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center box-border ${
                      selectedMethod === "netbanking" ? "border-[#00629E]" : "border-slate-300"
                    }`}>
                      {selectedMethod === "netbanking" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00629E]" />
                      )}
                    </div>
                  </div>

                </div>
              </div>


              {/* Cost Breakdown Ledger Table */}
              <div className="flex flex-col gap-3.5 pt-4 w-full">
                {/* Row 1 */}
                <div className="flex items-center justify-between w-full px-1">
                  <span className="font-normal text-sm sm:text-base text-[#45474C]">
                    Plan Amount
                  </span>
                  <span className="font-medium text-sm sm:text-base text-[#45474C]">
                    {planPrice}
                  </span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between w-full px-1">
                  <span className="font-normal text-sm sm:text-base text-[#45474C]">
                    Platform Fee
                  </span>
                  <span className="font-bold text-xs sm:text-xs tracking-wider text-[#00629E] uppercase">
                    WAIVED
                  </span>
                </div>

                {/* Horizontal Separator */}
                <div className="w-full h-px bg-slate-200 my-2" />

                {/* Total Payable Summary Row */}
                <div className="flex items-end justify-between w-full px-1">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-[10px] tracking-[1px] text-[#45474C] uppercase block">
                      TOTAL PAYABLE
                    </span>
                    <span className="font-black text-3xl sm:text-4xl text-[#091426] tracking-[-1px] block leading-none">
                      {planPrice}
                    </span>
                  </div>

                  <span className="font-normal text-[10px] sm:text-xs text-[#45474C] text-right max-w-[140px] block">
                    Inclusive of applicable local taxes
                  </span>
                </div>
              </div>


              {/* Base CTA Executable Action perfectly aligned with figma styling */}
              <div className="flex flex-col items-center gap-3 pt-6 w-full mt-2">
                <button
                  onClick={() => alert(`Initiating secure processing pipeline for total transaction balance: ${planPrice}`)}
                  className="w-full max-w-[420px] py-4 bg-[radial-gradient(circle_at_center,#2780C4_0%,#164573_100%)] hover:opacity-95 transition-all active:scale-95 text-white font-bold text-sm sm:text-base rounded-full shadow-md cursor-pointer border-none block"
                >
                  PAY {planPrice} & UPGRADE
                </button>

                {/* Micro Assurance footer string updated to figma spec text */}
                <div className="flex items-center justify-center gap-1.5 opacity-70 mt-1">
                  <span className="text-[10px] inline-block">🔒</span>
                  <span className="font-medium text-[11px] text-[#45474C] tracking-tight">
                    Your unlocks will be available instantly upon success.
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
