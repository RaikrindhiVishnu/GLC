"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SupportCenterContent() {
  const router = useRouter();
  return (
    <section className="box-border w-full flex flex-col items-center relative bg-[#F8F9FA] pb-20 md:pb-[120px]">
      {/* Responsive Content Container */}
      <div className="relative w-full max-w-[1152px] mx-auto px-4 sm:px-6 md:px-8 mt-8 md:mt-[100px] flex flex-col lg:flex-row gap-8 justify-between items-stretch">
        
        {/* 1. Left Column - Human Concierge Card */}
        <div className="w-full lg:w-[757.33px] shrink-0 flex flex-col justify-between box-border bg-white border border-[#C5C6CD]/20 rounded-[32px] md:rounded-[48px] p-6 sm:p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(9,20,38,0.05)] z-10">
          
          {/* Top Header shell */}
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="m-0 font-extrabold text-2xl sm:text-3xl md:text-[36px] leading-tight md:leading-[40px] tracking-tight md:tracking-[-0.9px] text-[#091426]">
              Speak with your Support
            </h2>
            <span className="font-medium text-base sm:text-lg text-[#45474C]">
              Specialist
            </span>

            {/* Overlay Pill capsules */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="bg-[#F8F9FA] rounded-full px-3 py-1 border border-[#E7E8E9]">
                <span className="font-bold text-[11px] sm:text-xs tracking-[0.6px] uppercase text-[#091426]">
                  EQUITY EXPERT
                </span>
              </div>

              <div className="bg-[#F8F9FA] rounded-full px-3 py-1 border border-[#E7E8E9]">
                <span className="font-bold text-[11px] sm:text-xs tracking-[0.6px] uppercase text-[#091426]">
                  AGRI TECH SPECIALIST
                </span>
              </div>
            </div>
          </div>

          {/* Conversation message preview container */}
          <div className="box-border flex flex-col items-start p-5 sm:p-6 w-full bg-[#F3F4F5]/60 rounded-[24px] md:rounded-[32px] border border-[#C5C6CD]/15 my-6 md:my-8">
            <p className="m-0 italic font-normal text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-[32px] text-[#091426]/80">
              &ldquo;Hello Arjun, We&apos;ve reviewed your escrow status for GLC SOS 01 project. Would you like to finalize the documents now?&rdquo;
            </p>
          </div>

          {/* Primary Chat Button trigger */}
          <button
            onClick={() => router.push("/home/supportcenter?view=chat")}
            className="box-border flex flex-row justify-center items-center px-6 py-4 md:px-10 md:py-5 gap-4 w-full sm:w-[267px] h-[56px] md:h-[68px] bg-[radial-gradient(50%_50%_at_50%_50%,#2780C4_0%,#164573_100%)] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] rounded-full border-none cursor-pointer transition-all hover:translate-y-[-2px] hover:brightness-110 active:translate-y-0"
          >
            <span className="font-bold text-base sm:text-lg text-center text-white">
              CHAT WITH SUPPORT
            </span>
          </button>
        </div>

        {/* 2. Right Aside - Bento Style Stack Column */}
        <div className="w-full lg:w-[362.67px] shrink-0 flex flex-col gap-8 justify-start">
          
          {/* Module A: Active Tracker Component */}
          <div className="box-border flex flex-col justify-between p-6 sm:p-8 w-full min-h-[228px] bg-white border border-[#C5C6CD]/20 rounded-[32px] md:rounded-[48px] shadow-[0_20px_40px_-15px_rgba(9,20,38,0.05)] relative">
            
            {/* Top Header Row */}
            <div className="flex flex-row justify-between items-start w-full gap-2">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-[10px] tracking-[2px] uppercase text-[#45474C]">
                  ACTIVE REQUEST
                </span>
                <h3 className="m-0 font-black text-xl sm:text-[24px] leading-tight tracking-[-0.6px] text-[#091426]">
                  Ticket #1042
                </h3>
              </div>

              {/* Secure context icon SVG */}
              <div className="w-8 h-8 rounded-lg bg-[#00629E]/10 flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
            </div>

            {/* Progress Tracker Core */}
            <div className="flex flex-col gap-3 w-full mt-6">
              {/* Status capsule line */}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="bg-[#69B6FE]/20 rounded-full px-3 py-1">
                  <span className="font-bold text-[10px] sm:text-[11px] uppercase text-[#00629E]">
                    INVESTIGATING
                  </span>
                </div>

                <span className="font-extrabold text-xs text-[#00629E]">
                  65%
                </span>
              </div>

              {/* Native Continuous Gradient Base track */}
              <div className="w-full h-2 bg-[#EDEEEF] rounded-full relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[65%] bg-gradient-to-r from-[#2780C4] to-[#69B6FE] rounded-full" />
              </div>

              {/* Footer Checkpoints distribution labels */}
              <div className="flex flex-row justify-between items-center w-full">
                <span className="font-bold text-[9px] sm:text-[10px] text-[#45474C]">
                  SUBMITTED
                </span>
                <span className="font-black text-[9px] sm:text-[10px] text-[#00629E]">
                  REVIEWING
                </span>
                <span className="font-bold text-[9px] sm:text-[10px] text-[#45474C]">
                  RESOLVED
                </span>
              </div>
            </div>
          </div>

          {/* Module B: AI Intelligence Component */}
          <div className="box-border flex flex-col justify-between p-6 sm:p-8 w-full min-h-[442px] bg-white border border-[#C5C6CD]/20 rounded-[32px] md:rounded-[48px] shadow-[0_20px_40px_-15px_rgba(9,20,38,0.05)] relative">
            
            {/* Header block row */}
            <div className="flex flex-row items-center gap-4 w-full">
              {/* Sparkling AI gradient icon platform */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#BCD225] to-[#2780C4] rounded-2xl flex items-center justify-center shadow-md shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a2 2 0 0 1 2 2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2zm0 16a2 2 0 0 1 2 2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2zm10-8a2 2 0 0 1-2 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2zM4 12a2 2 0 0 1-2 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2zm8-4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path>
                </svg>
              </div>

              {/* Titles stack */}
              <div className="flex flex-col">
                <h3 className="m-0 font-bold text-base sm:text-lg text-[#091426]">
                  AI Assistant
                </h3>
                <span className="font-normal text-xs text-[#45474C]">
                  Intelligent quick actions
                </span>
              </div>
            </div>

            {/* Informative alert box container */}
            <div className="box-border flex flex-col items-start p-4 sm:p-5 w-full bg-[#F8F9FA] border border-[#C5C6CD]/20 rounded-2xl my-4">
              <span className="font-normal text-xs sm:text-xs leading-relaxed text-[#45474C]">
                Based on your current portfolio, you may need assistance with these common requests:
              </span>
            </div>

            {/* Dynamic list button shortcuts matrix */}
            <div className="flex flex-col gap-2 w-full mt-auto">
              <button
                onClick={() => alert("Direct routing to Secure Site Visit calendar allocation setup portal...")}
                className="box-border flex flex-row justify-between items-center px-4 py-3 sm:py-3.5 w-full bg-white border border-[#E7E8E9] rounded-xl sm:rounded-2xl cursor-pointer transition-colors hover:border-[#2780C4] hover:bg-[#FAFAFA]"
              >
                <span className="font-bold text-xs sm:text-sm text-[#091426]">
                  Schedule Site Visit
                </span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="#091426" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                  <polyline points="1 1 5 5 1 9"></polyline>
                </svg>
              </button>

              <button
                onClick={() => alert("Opening Escrow Security Terms and direct refund evaluation pipeline parameters...")}
                className="box-border flex flex-row justify-between items-center px-4 py-3 sm:py-3.5 w-full bg-white border border-[#E7E8E9] rounded-xl sm:rounded-2xl cursor-pointer transition-colors hover:border-[#2780C4] hover:bg-[#FAFAFA]"
              >
                <span className="font-bold text-xs sm:text-sm text-[#091426]">
                  Escrow Refund Policy
                </span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="#091426" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                  <polyline points="1 1 5 5 1 9"></polyline>
                </svg>
              </button>

              <button
                onClick={() => alert("Verifying status hash certificates for unlocked GLC base deeds...")}
                className="box-border flex flex-row justify-between items-center px-4 py-3 sm:py-3.5 w-full bg-white border border-[#E7E8E9] rounded-xl sm:rounded-2xl cursor-pointer transition-colors hover:border-[#2780C4] hover:bg-[#FAFAFA]"
              >
                <span className="font-bold text-xs sm:text-sm text-[#091426]">
                  Verify Unlocked Documents
                </span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="#091426" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                  <polyline points="1 1 5 5 1 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
