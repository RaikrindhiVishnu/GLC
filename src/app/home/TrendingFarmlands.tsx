"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const trendingItems = [
  {
    id: "trending-1",
    title: "GLC SOS 01",
    location: "VIZAG, A.P",
    description: "High-yield sustainable corn production facility with automated irrigation...",
    tag: "HIGH YIELD 2025",
    tagColor: "rgba(0, 31, 63, 0.1)",
    tagTextColor: "#001F3F",
    img: "/assets/home/TrendingFarmlands/glcsos01.svg",
  },
  {
    id: "trending-2",
    title: "GLC SOS 02",
    location: "TAMILNADU",
    description: "Historic vineyard estate featuring boutique grape varieties and a climat...",
    tag: "MOST BOOKMARKED",
    tagColor: "rgba(207, 102, 103, 0.1)",
    tagTextColor: "#CF6667",
    img: "/assets/home/TrendingFarmlands/glcsos02.svg",
  },
  {
    id: "trending-3",
    title: "WHEAT RIDGE X",
    location: "SRIKAKULAM, A.P",
    description: "Expansive grain territory optimized for precision agriculture with drone...",
    tag: "HIGH YIELD 2024",
    tagColor: "rgba(0, 31, 63, 0.1)",
    tagTextColor: "#001F3F",
    img: "/assets/home/TrendingFarmlands/glcsos03.svg",
  },
];

export default function TrendingFarmlands() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Drag scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragged, setDragged] = useState(false);

  // Click-and-drag scrolling handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2.0; // Responsive drag velocity multiplier
    
    if (Math.abs(walk) > 5) {
      setDragged(true);
    }
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section id="trending-farmlands" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      
      {/* Section Header Wrapper (Constrained to Page Margin) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-jakarta font-extrabold text-[20px] md:text-[24px] leading-[1.2] text-[#0F2F4C] m-0 flex gap-x-[6px]">
            {"Trending Farmlands".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <button className="bg-transparent border-none font-jakarta font-extrabold text-[14px] md:text-[18px] leading-[40px] text-[#0F2F4C] cursor-pointer [-webkit-tap-highlight-color:transparent] hover:opacity-70 transition-opacity">
            View all
          </button>
        </div>
      </div>

      {/* Cards Scrollable Container (Free Drag-to-Scroll + Asymmetric Offset Layout) */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex gap-4 md:gap-6 lg:gap-[30px] w-full overflow-x-auto pb-4 hide-scrollbar pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc((100vw-1280px)/2+32px)] pr-4 sm:pr-6 lg:pr-8 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          #trending-farmlands .hide-scrollbar::-webkit-scrollbar { display: none; }
          #trending-farmlands .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        
        {trendingItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={handleCardClick}
            className="flex flex-col sm:flex-row w-[280px] sm:w-[450px] lg:w-[511px] shrink-0 bg-white shadow-[0px_11px_38px_rgba(0,31,63,0.04)] rounded-[24px] lg:rounded-[45px] overflow-hidden cursor-pointer box-border group pointer-events-auto"
          >
            {/* Left Side: Image */}
            <div className="relative w-full h-[180px] sm:w-[180px] lg:w-[204px] sm:h-[260px] shrink-0 pointer-events-none">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-6 lg:p-[30px] gap-4 box-border">
              <div className="flex flex-col gap-[8px]">
                
                {/* Tag */}
                <div
                  style={{ background: item.tagColor }}
                  className="inline-flex items-center px-[11px] py-[4px] rounded-full w-fit pointer-events-none"
                >
                  {item.tagTextColor === "#CF6667" ? (
                    /* Red Label: Bookmark Icon */
                    <svg width="9" height="10" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 shrink-0">
                      <path d="M1 1H9V11L5 8.5L1 11V1Z" fill="#CF6667" stroke="#CF6667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : item.tagTextColor === "#001F3F" ? (
                    /* Grey Label: Star Icon */
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 shrink-0">
                      <path d="M6 1L7.5 4.5H11L8.2 6.5L9.5 10L6 7.8L2.5 10L3.8 6.5L1 4.5H4.5L6 1Z" fill="#001F3F" />
                    </svg>
                  ) : null}
                  <span
                    style={{ color: item.tagTextColor }}
                    className="font-jakarta font-bold text-[9px] leading-[14px] tracking-[0.9px] uppercase"
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="m-0 font-jakarta font-extrabold text-[20px] lg:text-[24px] text-[#001F3F] mt-1 pointer-events-none">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="m-0 font-jakarta font-normal text-[12px] lg:text-[13.25px] leading-[1.6] text-[#43474E] line-clamp-2 pointer-events-none">
                  {item.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center pt-4 lg:pt-[22px] border-t border-[#EDEEEF] gap-2 mt-auto pointer-events-none">
                <svg width="10" height="12" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 16 6 16C6 16 12 10.5 12 6C12 2.68629 9.31371 0 6 0ZM6 8.5C4.61929 8.5 3.5 7.38071 3.5 6C3.5 4.61929 4.61929 3.5 6 8.5C7.38071 8.5 8.5 4.61929 8.5 6C8.5 7.38071 7.38071 8.5 6 8.5Z" fill="#64748B"/>
                </svg>
                <span className="font-jakarta font-bold text-[10px] lg:text-[11px] leading-[15px] tracking-[0.3px] uppercase text-[#64748B]">
                  {item.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
