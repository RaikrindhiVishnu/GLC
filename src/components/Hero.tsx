"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero-section" className="relative flex h-[80vh] md:h-screen min-h-[500px] md:min-h-[640px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero/userhome.mp4" type="video/mp4" />
        </video>

        {/* General dim layer */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Top fade layer */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="z-10 flex w-full max-w-[1440px] flex-col items-center px-4 text-center">
        <h1 className="text-shadow-premium flex flex-col items-center justify-let font-extrabold tracking-[-4px] text-white">
          <span className="block text-[48px] leading-[1] md:text-[76px] flex flex-wrap gap-x-2 md:gap-x-4 justify-center">
            {"Discover".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block text-[48px] leading-[1] md:text-[76px] flex flex-wrap gap-x-2 md:gap-x-4 justify-center mt-1">
            {"Premium Farmlands".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass-search mt-[36px] flex h-[64px] w-full max-w-[560px] items-center gap-3 rounded-[100px] px-[12px] py-[8px]"
        >
          <div className="flex flex-1 items-center px-[16px]">
            <input
              type="text"
              placeholder="Search Investments..."
              className="w-full bg-transparent text-[16px] font-medium leading-[21px] text-white placeholder:text-white focus:outline-none"
            />
          </div>
          <button className="flex h-[42px] min-w-[42px] items-center justify-center rounded-full bg-white cursor-pointer hover:bg-gray-100 transition-colors">
            <Image
              src="/assets/hero/search.svg"
              alt="Filter"
              width={16}
              height={16}
            />
          </button>
        </motion.div>
      </div>
    </section >
  );
}
