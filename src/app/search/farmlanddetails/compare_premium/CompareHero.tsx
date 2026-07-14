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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col items-center gap-9.25">
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
          Compare Farmlands
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-white w-full px-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(14px, 2vw, 24px)",
            lineHeight: "1.55",
          }}
        >
          <span className="md:whitespace-nowrap">Compare farmland locations, pricing, amenities, legal status, and investment potential</span> <br className="hidden md:block" /> <span className="md:whitespace-nowrap">to confidently choose the property that best matches your goals.</span>
        </motion.p>
      </div>

    </div>
  );
}
