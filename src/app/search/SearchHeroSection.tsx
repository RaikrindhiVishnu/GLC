"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FilterOverlay from "./filter/FilterOverlay";
import Navbar from "@/components/Navbar";
import { useSearchContext } from "./SearchContext";

export default function SearchHeroSection() {
  const { searchQuery, setSearchQuery } = useSearchContext();
  const [localSearch, setLocalSearch] = useState(searchQuery || "");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = () => {
    setSearchQuery(localSearch);
    // Scroll to the listings grid
    document.getElementById("listings-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="search-hero-screen"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="flex flex-col items-center justify-start h-[80vh] md:h-screen min-h-125 md:min-h-160"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
          zIndex: 1,
        }}
      />
      <Image
        src="/assets/search/search.svg"
        alt="Farmland Search screen cover background"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <Navbar variant="app" active="search" />

      <div
        style={{ position: "absolute", inset: 0, zIndex: 5, boxSizing: "border-box" }}
        className="flex flex-col items-center justify-center px-4 pointer-events-none"
      >
        <div className="w-full max-w-254.5 flex flex-col items-center pointer-events-auto">

          <h1 className="text-shadow-premium flex flex-col items-center justify-center font-jakarta font-extrabold tracking-[-4px] text-white">
            <span className="flex text-[48px] leading-none md:text-[76px] flex-wrap gap-x-2 md:gap-x-4 justify-center">
              {"Find your next".split(" ").map((word, i) => (
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
            <span className="flex text-[48px] leading-none md:text-[76px] flex-wrap gap-x-2 md:gap-x-4 justify-center mt-1">
              {"high-yield asset".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45 + i * 0.15 }}
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
            transition={{ duration: 0.8, delay: 0.75 }}
            className="glass-search mt-9 flex h-16 w-full max-w-140 items-center gap-3 rounded-[100px] px-3 py-2 justify-between"
          >
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search Farmlands..."
              className="flex-1 bg-transparent text-[16px] font-medium leading-5.25 text-white placeholder:text-white focus:outline-none pl-3 md:pl-5 pr-2 py-2"
            />
            <button
              onClick={handleSearch}
              className="relative flex h-10.5 w-10.5 min-w-10.5 items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors shrink-0 cursor-pointer shadow-sm"
            >
              <Image src="/assets/home/HeroScreen/inside search.svg" alt="Search" width={18} height={18} />
            </button>
          </motion.div>

        </div>
      </div>

      <FilterOverlay isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </section>
  );
}
