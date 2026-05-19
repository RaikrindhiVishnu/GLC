"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import DynamicCounter from "@/components/shared/DynamicCounter";

export default function DocumentUnlocks() {
  const router = useRouter();

  return (
    <section id="document-unlocks-section" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:gap-[32px] w-full items-start">

          {/* Top Part: Document Unlocks Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-[1280px] lg:h-[400px] bg-white shadow-[0px_12px_40px_rgba(0,31,63,0.04)] rounded-[48px] flex flex-col lg:flex-row overflow-hidden box-border border border-[#EDEEEF]/50 shrink-0"
          >
            {/* Left: Dark Hero Area (Visual Hero) */}
            <div className="w-full lg:w-[464px] min-h-[400px] lg:h-[400px] bg-black p-8 lg:p-[48px] flex flex-col justify-between box-border relative shrink-0 overflow-hidden isolate">
              {/* Glowing Overlays */}
              {/* Overlay 1 */}
              <div
                className="absolute pointer-events-none rounded-full bg-white/20 opacity-10 blur-[32px] z-0"
                style={{ left: "208px", right: "-80px", top: "-80px", bottom: "244px" }}
              />
              {/* Overlay 2 */}
              <div
                className="absolute pointer-events-none rounded-full bg-white/10 opacity-10 blur-[20px] z-[1]"
                style={{ left: "-80px", right: "208px", top: "243.75px", bottom: "-79.75px" }}
              />

              {/* Text Container */}
              <div className="relative z-10 flex flex-col items-start p-0 gap-[16.5px] w-full lg:w-[368px] lg:h-[121.5px] mb-8 lg:mb-0">
                <span className="font-jakarta font-extrabold text-[10px] leading-[15px] tracking-[3px] uppercase text-white/70">
                  Premium Access
                </span>
                <h2 className="m-0 font-jakarta font-bold text-[28px] lg:text-[36px] lg:leading-[45px] text-white w-full lg:w-[368px] lg:h-[90px] flex items-center">
                  Unlock Hidden Insights
                </h2>
              </div>

              {/* Member Status Card */}
              <div className="box-border flex flex-col items-start p-6 lg:p-[24px] gap-2 lg:gap-[8px] w-full lg:w-[368px] lg:h-[138px] bg-white/5 border border-white/10 backdrop-blur-[6px] rounded-[32px] relative z-10 mt-auto">
                <div className="flex flex-row items-center p-0 pb-2 lg:pb-[8px] gap-4 lg:gap-[16px] w-full lg:w-[318px] lg:h-[53px]">
                  {/* Icon Overlay container */}
                  <div className="flex flex-col items-start p-3 lg:p-[12px] w-[46px] h-[45px] bg-[#194F81]/20 rounded-[48px] shrink-0 justify-center items-center">
                    {/* Jagged Seal Badge SVG Icon with Checkmark */}
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <path d="M11 0.5L13.4 2.8L16.8 2.3L17.7 5.6L20.8 7.1L19.7 10.3L21.3 13.4L18.4 15.1L18 18.5L14.7 18.2L12.7 20.8L9.7 19.3L6.9 20.8L5 18.2L1.7 18.5L1.3 15.1L0 13.4L1.7 10.3L0.5 7.1L3.6 5.6L4.5 2.3L7.9 2.8L11 0.5Z" fill="#1C5A90"/>
                      <path d="M7 10.5L9.5 13L14.5 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start p-0 w-full lg:w-[114.5px] lg:h-[36px]">
                    <div className="font-jakarta font-bold text-[12px] leading-4 tracking-[1.2px] text-[#1B588D] uppercase w-full lg:w-[114.17px] h-4 flex items-center">
                      Member Status
                    </div>
                    <div className="font-jakarta font-semibold text-[14px] leading-5 text-white w-full lg:w-[114.5px] h-5 flex items-center">
                      Tier 1 Contributor
                    </div>
                  </div>
                </div>
                {/* Progress bar track */}
                <div className="w-full lg:w-[318px] h-1 bg-white/10 rounded-full relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "66.66%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 h-full bg-[#1A5082] rounded-full"
                  />
                </div>
                {/* Credits used text container */}
                <div className="flex flex-col items-end p-0 w-full lg:w-[318px] h-[15px]">
                  <span className="w-[88.88px] h-[15px] font-jakarta font-normal text-[10px] leading-[15px] flex items-center justify-end text-right text-white/50 uppercase">
                    4/6 CREDITS USED
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Clean Content Area */}
            <div className="flex-1 flex flex-col justify-center items-start p-8 lg:p-[48px] lg:w-[576px] lg:h-[400px] box-border">
              {/* Document Unlocks Label Margin */}
              <div className="flex flex-col items-start pb-4 lg:pb-[16px] w-full lg:w-[480px] lg:h-[37px]">
                <div className="flex flex-row items-center p-0 gap-2 lg:gap-[8px] w-full lg:w-[480px] lg:h-[21px]">
                  <div className="flex flex-col items-start p-0 w-[16px] h-[21px] shrink-0 justify-center">
                    {/* Outline Lock SVG Icon */}
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <rect x="1" y="8" width="14" height="12" rx="3" stroke="#2780C4" strokeWidth="2" />
                      <path d="M4 8V5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V8" stroke="#2780C4" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="8" cy="14" r="1.5" fill="#2780C4" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start p-0 w-[151.31px] h-[16px]">
                    <span className="w-[151.31px] h-[16px] font-jakarta font-bold text-[12px] leading-[16px] flex items-center tracking-[1.2px] text-transform: uppercase text-[#2780C4] uppercase">
                      Document Unlocks
                    </span>
                  </div>
                </div>
              </div>

              {/* Heading 3 Container */}
              <div className="flex flex-col items-start pb-6 lg:pb-[24px] w-full lg:w-[480px] lg:h-[60px]">
                <h3 className="m-0 font-jakarta font-bold text-[24px] lg:text-[30px] lg:leading-[36px] text-[#001F3F] w-full lg:w-[524px] lg:h-[36px] flex items-center">
                  4 Premium report credits remaining.
                </h3>
              </div>

              {/* Paragraph Margin */}
              <div className="flex flex-col items-start pb-10 lg:pb-[40px] w-full lg:w-[512px] lg:h-[99px]">
                <div className="flex flex-col items-start p-0 w-full lg:w-[718px] lg:h-[59px]">
                  <p className="m-0 font-jakarta font-normal text-[14px] lg:text-[18px] leading-[29px] text-[#64748B] flex items-center">
                    Use them to access deep-dive architectural surveys, soil analysis reports, and exclusive heritage archive data points curated by our editorial team.
                  </p>
                </div>
              </div>

              {/* Button Container */}
              <div className="flex flex-row items-start p-0 gap-4 lg:gap-[16px] w-full lg:w-[585px] lg:h-[60px]">
                <button
                  onClick={() => router.push("/home/unlockeddocuments")}
                  className="box-border flex flex-row justify-center items-center py-3 px-0 w-full sm:w-[214px] h-[60px] bg-[radial-gradient(50%_50%_at_50%_50%,#2780C4_0%,#164573_100%)] border-2 border-[#2780C4] rounded-[9999px] cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                  <span className="w-[106px] h-4 font-jakarta font-bold text-[12px] leading-4 flex items-center justify-center text-center tracking-[2.4px] text-white">
                    GET PREMIUM
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Part: Your Listings / Primary Listing Status */}
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[32px] box-border items-start">

            {/* Left: Listing Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-[842.67px] h-[256px] rounded-[48px] overflow-hidden relative shrink-0"
            >
              <Image
                src="/assets/home/DocumentUnlocks/doucmentsunlock.svg"
                alt="Primary Listing"
                fill
                className="object-cover block"
              />
              {/* Dark Overlay Gradient to make text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Primary Listing Label Margin */}
              <div className="absolute left-8 top-[165px] flex flex-col items-start p-0 pb-2 w-[calc(100%-64px)] h-6">
                <div className="flex flex-col items-start p-0 w-full lg:w-[778.66px] h-4">
                  <span className="w-full lg:w-[778.66px] h-4 font-jakarta font-bold text-[12px] leading-4 tracking-[1.2px] uppercase text-white/80 flex items-center">
                    Primary Listing
                  </span>
                </div>
              </div>

              {/* Listing Heading */}
              <div className="absolute left-8 top-[189px] flex flex-col items-start p-0 w-[calc(100%-64px)] h-9">
                <h3 className="m-0 font-jakarta font-bold text-[30px] leading-9 text-white w-full lg:w-[778.66px] h-9 flex items-center">
                  GLC SOS 01
                </h3>
              </div>
            </motion.div>

            {/* Right: Status Card */}
            <motion.div
              initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-[405.33px] h-[256px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[48px] p-8 lg:p-[82px_32px] flex flex-col justify-center border border-[#EDEEEF] box-border shrink-0"
            >
              {/* Heading 4:margin */}
              <div className="flex flex-col items-start p-0 pb-4 lg:pb-[16px] w-full lg:w-[341.33px] h-9">
                <div className="w-full lg:w-[341.33px] h-5 font-jakarta font-bold text-[14px] leading-5 tracking-[1.4px] uppercase text-[#45474C] flex items-center">
                  Listing Status
                </div>
              </div>

              {/* Container for Rows */}
              <div className="flex flex-col gap-3 lg:gap-[8px] w-full lg:w-[341.33px] h-14">
                {/* Row 1: Visibility */}
                <div className="flex flex-row justify-between items-center p-0 w-full lg:w-[341.33px] h-6">
                  <span className="w-[63.7px] h-6 font-jakarta font-medium text-[16px] leading-6 text-[#191C1D] flex items-center">
                    Visibility
                  </span>
                  <span className="w-[70px] h-6 font-jakarta font-bold text-[16px] leading-6 text-[#2780C4] flex items-center justify-end">
                    Premium
                  </span>
                </div>

                {/* Row 2: Inquiries */}
                <div className="flex flex-row justify-between items-center p-0 w-full lg:w-[341.33px] h-6">
                  <span className="w-[64.69px] h-6 font-jakarta font-medium text-[16px] leading-6 text-[#191C1D] flex items-center">
                    Inquiries
                  </span>
                  <span className="w-[85px] h-6 font-jakarta font-bold text-[16px] leading-6 text-[#091426] flex items-center justify-end whitespace-nowrap">
                    <DynamicCounter value={24} />&nbsp;Active
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
