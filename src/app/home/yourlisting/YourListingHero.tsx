"use client";

import { motion } from "framer-motion";

export default function YourListingHero() {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "url('/assets/trending-farmlands/Rectangle 4166 (22).svg') center/cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center gap-6 mt-[64px]">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left text-white whitespace-nowrap w-full"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 7vw, 100px)",
            lineHeight: 1.05,
            letterSpacing: "-1.8px",
          }}
        >
          Your Listing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-left text-white max-w-[1000px] w-full"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(14px, 2vw, 24px)",
            lineHeight: "1.35",
          }}
        >
          Discover premium farmland locations with fertile soil, excellent connectivity, and strong long term investment potential.
        </motion.p>
      </div>

    </div>
  );
}
