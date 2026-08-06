"use client";

import { motion } from "framer-motion";

export default function TrendingHero() {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/assets/trending-farmlands/Rectangle 4166 (22).svg') center/cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[992px] mx-auto px-4 flex flex-col items-center gap-[37px] mt-[64px] pb-[80px]">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white whitespace-nowrap w-full"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 7vw, 100px)",
            lineHeight: "1.05",
            letterSpacing: "-1.8px",
          }}
        >
          Trending Farmlands
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white w-full"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(14px, 2vw, 24px)",
            lineHeight: "32px",
          }}
        >
          <div className="flex justify-between w-full">
            <span>Manage</span>
            <span>your</span>
            <span>premium</span>
            <span>agricultural</span>
            <span>assets,</span>
            <span>track</span>
            <span>performance,</span>
            <span>and</span>
            <span>access</span>
            <span>your</span>
          </div>
          
          <div className="text-center w-full mt-1">
            secure legal vault.
          </div>
        </motion.div>
      </div>

    </div>
  );
}
