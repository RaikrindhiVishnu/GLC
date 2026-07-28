"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

function RegistrationSuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  return (
    <div className="flex flex-col w-full max-w-[448px]">
      
      {/* ── TOP SECTION (Left Aligned) ── */}
      <div className="flex flex-col text-left items-start w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 lg:mb-4"
        >
          <Link href="/" className="inline-block shrink-0 [-webkit-tap-highlight-color:transparent] hover:opacity-80 transition-opacity">
            <img
              src="/assets/login/green land capital (1) 1.svg"
              alt="Green Land Capital"
              className="w-[120px] lg:w-[130px] h-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[32px] lg:text-[40px] font-bold text-[#353535] font-jakarta leading-[1.1] mb-1 lg:mb-2"
        >
          Registration Request<br/>Submitted
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[13px] lg:text-[15px] text-[#B8B8B8] font-jakarta leading-[1.5] max-w-[320px]"
        >
          We've sent a secure verification link to your email address:{" "}
          <span className="text-[#B8B8B8]">{email}</span>.
        </motion.p>
      </div>

      {/* ── SPACING ── */}
      <div className="min-h-[16px] flex-1 lg:min-h-[32px]" />

      {/* ── BOTTOM SECTION (Center Aligned) ── */}
      <div className="flex flex-col items-center text-center w-full">
        {/* Check Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center mb-4 lg:mb-5"
        >
          {/* Outer subtle glow/border */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[86px] h-[86px] lg:w-[96px] lg:h-[96px] rounded-full border-[3px] border-[#FFFFFF] shadow-[0_0_0_5px_#AED6EF] bg-[rgba(187,211,39,0.3)] opacity-20" />
          
          {/* Inner Gradient Circle */}
          <div 
            className="relative w-[66px] h-[66px] lg:w-[76px] lg:h-[76px] rounded-full flex items-center justify-center z-10 border-[4px] border-[#AED6EF]"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)" }}
          >
            <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </motion.div>

        {/* Status Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[20px] lg:text-[24px] font-bold text-[#0F2F4C] font-jakarta mb-1 lg:mb-2 tracking-[-0.6px] leading-[1.1] max-w-[340px]"
        >
          Registration completed successfully
        </motion.h2>

        {/* Status Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[13px] lg:text-[15px] text-[#2A3008] font-jakarta mb-2 lg:mb-4 max-w-[280px] leading-[1.5]"
        >
          Temporary credentials has been sent to your registered Email
        </motion.p>
      </div>
    </div>
  );
}

export default function RegistrationSuccessPage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-2 px-4 overflow-y-auto custom-scrollbar">
      <Suspense fallback={<div>Loading...</div>}>
        <RegistrationSuccessContent />
      </Suspense>
    </div>
  );
}
