"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const farmlands = [
  {
    id: "glc-sos-01",
    title: "GLC SOS 01",
    location: "Vizag, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glc1.svg",
  },
  {
    id: "glc-sos-02",
    title: "GLC SOS 02",
    location: "Tanuku, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glc2.svg",
  },
  {
    id: "glc-sos-03",
    title: "GLC SOS 03",
    location: "Bhimavaram, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glcsos3.svg",
  },
  {
    id: "glc-sos-04",
    title: "GLC SOS 04",
    location: "Rajahmundry, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glc1.svg",
  },
  {
    id: "glc-sos-05",
    title: "GLC SOS 05",
    location: "Vizag, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glc2.svg",
  },
];

export default function PopularFarmlands() {
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
    const walk = (x - startX) * 2.0; // Drag speed multiplier
    
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
    <section id="popular-farmlands" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      
      {/* Section Header Wrapper (Constrained to Page Margin) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-jakarta font-extrabold text-[20px] md:text-[24px] leading-[36px] text-[#0F2F4C] m-0 flex gap-x-[6px]">
            {"Most Popular Farmlands".split(" ").map((word, i) => (
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
          <button className="bg-transparent border-none font-jakarta font-extrabold text-[14px] md:text-[18px] leading-[36px] text-[#0F2F4C] cursor-pointer [-webkit-tap-highlight-color:transparent] hover:opacity-70 transition-opacity">
            View All
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
        className={`flex gap-[26.62px] w-full overflow-x-auto pb-4 hide-scrollbar pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc((100vw-1280px)/2+32px)] pr-4 sm:pr-6 lg:pr-8 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          #popular-farmlands .hide-scrollbar::-webkit-scrollbar { display: none; }
          #popular-farmlands .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        
        {farmlands.map((land, i) => (
          <motion.div
            key={land.id}
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={handleCardClick}
            className="flex flex-col lg:flex-row w-[290px] sm:w-[500px] lg:w-[600.23px] h-auto lg:h-[260.43px] shrink-0 bg-white border border-[#EDEEEF]/60 rounded-[32px] lg:rounded-[39.94px] overflow-hidden cursor-pointer box-border group pointer-events-auto"
          >
            {/* Left Side: Image (45%) */}
            <div className="relative w-full h-[180px] lg:w-[266.58px] lg:h-[260.43px] shrink-0 overflow-hidden pointer-events-none">
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              
              <Image
                src={land.img}
                alt={land.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Right Side: Content (55%) */}
            <div className="flex flex-1 flex-col justify-between pt-6 px-6 pb-6 lg:pt-[53.25px] lg:px-[33.28px] lg:pb-[33.28px] bg-white box-border pointer-events-none relative">
              
              {/* Container Stack */}
              <div className="flex flex-col items-start w-full">
                
                {/* Title */}
                <h3 className="m-0 font-jakarta font-extrabold text-[20px] lg:text-[24px] leading-[37px] tracking-[-1.25px] text-[#001F3F] capitalize">
                  {land.title}
                </h3>
                
                {/* Location Wrapper */}
                <div className="flex items-center gap-[4.99px] pb-[16.64px] mt-[4.99px]">
                  {/* Precise Pin Icon */}
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M4 0C1.79 0 0 1.79 0 4C0 7 4 10 4 10C4 10 8 7 8 4C8 1.79 6.21 0 4 0ZM4 5.5C3.17 5.5 2.5 4.83 2.5 4C2.5 3.17 3.17 2.5 4 2.5C4.83 2.5 5.5 3.17 5.5 4C5.5 4.83 4.83 5.5 4 5.5Z" fill="#43474E" />
                  </svg>
                  <span className="font-jakarta font-medium text-[11.65px] leading-[17px] text-[#43474E] block">
                    {land.location}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-[39.94px] h-[0.83px] bg-[rgba(0,31,63,0.2)] mt-0.5" />
              </div>

              {/* Description Box */}
              <div className="pt-[23.3px] w-full">
                <p className="m-0 font-jakarta font-normal text-[11.65px] leading-[19px] text-[#43474E] w-full max-w-[216.44px] block">
                  {land.description}
                </p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
