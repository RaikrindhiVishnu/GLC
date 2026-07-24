"use client";

import { motion } from "framer-motion";

export default function RecommendedHero() {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/assets/recommended/recommended-bg.jpg') center/cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center gap-6 mt-[64px]">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white whitespace-nowrap"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 7vw, 100px)",
            lineHeight: 1.05,
            letterSpacing: "-1.8px",
          }}
        >
          Recommended
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-white px-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(14px, 2vw, 24px)",
            lineHeight: "1.35",
          }}
        >
          Find the perfect farmland investment in our top selling locations, chosen for their<br className="hidden md:block" /> growth potential, accessibility, and long-term value.
        </motion.p>
      </div>

    </div>
  );
}
