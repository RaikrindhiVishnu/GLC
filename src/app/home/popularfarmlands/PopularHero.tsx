"use client";

import { motion } from "framer-motion";

export default function PopularHero() {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/assets/popular/Rectangle 4166 (25).svg') center/cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[896px] mx-auto px-8 flex flex-col items-center gap-[37px] mt-[64px] pb-[80px]">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white whitespace-nowrap"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 7vw, 100px)",
            lineHeight: "1.05", // matching 72px / 100px approximately or 1.05 to maintain responsive scaling
            letterSpacing: "-1.8px",
          }}
        >
          Most Popular Farmlands
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-white w-full max-w-[954px]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(14px, 2vw, 24px)",
            lineHeight: "32px",
          }}
        >
          <span className="whitespace-nowrap">Manage your premium agricultural assets, track performance, and access your</span><br/>secure legal vault.
        </motion.p>
      </div>

    </div>
  );
}
