"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FilterOverlay from "@/app/search/filter/FilterOverlay";
import Navbar from "@/components/Navbar";

export default function HeroScreen() {
  const [searchVal, setSearchVal] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <section
      id="hero-screen"
      style={{
        position: "relative" as const,
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="flex flex-col items-center justify-start h-[80vh] md:h-screen min-h-[500px] md:min-h-[640px]"
    >
      {/* Background Image + Dark Overlay */}
      <div
        style={{
          position: "absolute" as const,
          inset: 0,
          background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
          zIndex: 1,
        }}
      />
      <Image
        src="/assets/home/HeroScreen/hero.svg"
        alt="Farmland background"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <Navbar variant="app" active="home" />

      {/* ─── MASTER FOREGROUND CONTENT LAYER (Groups Heading and Search Bar perfectly into a single stack array preventing vertical collision) ─── */}
      <div 
        style={{
          position: "absolute" as const,
          inset: 0,
          zIndex: 5,
          boxSizing: "border-box",
        }}
        className="flex flex-col items-center justify-center px-4 pointer-events-none"
      >
        <div className="w-full max-w-[1018px] flex flex-col items-center pointer-events-auto">
          
          {/* Foreground Title Typography */}
          <h1
            className="text-shadow-premium flex flex-col items-center justify-center font-extrabold tracking-[-4px] text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
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

          {/* Interactive Search Query Bar locked natively into standard gap spacing */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass-search mt-[36px] flex h-[64px] w-full max-w-[560px] items-center gap-3 rounded-[100px] px-[12px] py-[8px] justify-between"
          >
            {/* Search Input */}
            <input
              id="search-investments"
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search Investments..."
              className="flex-1 bg-transparent text-[16px] font-medium leading-[21px] text-white placeholder:text-white focus:outline-none pl-3 md:pl-5 pr-2 py-2"
            />

            {/* Search Button triggering local interactive filter modal overlay */}
            <button
              id="btn-search"
              onClick={() => setIsFilterOpen(true)}
              className="flex h-[42px] min-w-[42px] items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
            >
              <Image src="/assets/home/HeroScreen/inside search.svg" alt="Search" width={16} height={16} />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Embedded absolute mobility overlay moving seamlessly with document scroll */}
      <FilterOverlay isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

    </section>
  );
}
