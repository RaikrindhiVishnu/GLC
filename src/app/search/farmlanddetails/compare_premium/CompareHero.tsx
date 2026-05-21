"use client";

import { motion } from "framer-motion";

export default function CompareHero() {
  return (
    <div className="relative w-full h-[80vh] md:h-screen min-h-125 md:min-h-160 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/assets/search/farmlanddetails/compare-premium/hero.svg') center/cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 flex flex-col items-center gap-9.25">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 7vw, 100px)",
            lineHeight: 1.05,
            letterSpacing: "-1.8px",
          }}
        >
          Compare Farmlands
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-white w-275 max-w-[95vw]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(14px, 2vw, 24px)",
            lineHeight: "1.55",
          }}
        >
          Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy,
          {" "}and intelligence audit pipeline
        </motion.p>
      </div>

    </div>
  );
}
