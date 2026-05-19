"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const listings = [
  { id: "listing-1", title: "GLC SOS 01", price: "₹85 Lakhs", img: "/assets/home/YourListings/glcsos1.svg" },
  { id: "listing-2", title: "GLC SOS 02", price: "₹1.2 Cr", img: "/assets/home/YourListings/glcsos2.svg" },
  { id: "listing-3", title: "GLC SOS 03", price: "₹95 Lakhs", img: "/assets/home/YourListings/glcsos3.svg" },
  { id: "listing-4", title: "GLC SOS 04", price: "₹2.4 Cr", img: "/assets/home/YourListings/glcsos4.svg" },
];

export default function YourListings() {
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
    <section id="your-listings" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      
      {/* Section Header Wrapper (Constrained to Page Margin) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-jakarta font-extrabold text-[20px] md:text-[24px] leading-[1.2] text-[#0F2F4C] m-0 flex gap-x-[6px]">
            {"Your Listings".split(" ").map((word, i) => (
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
        className={`flex gap-4 md:gap-6 lg:gap-[32px] w-full overflow-x-auto pb-4 hide-scrollbar pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc((100vw-1280px)/2+32px)] pr-4 sm:pr-6 lg:pr-8 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          #your-listings .hide-scrollbar::-webkit-scrollbar { display: none; }
          #your-listings .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        
        {listings.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={handleCardClick}
            className="flex flex-col items-center p-5 lg:p-[28px] w-[260px] lg:w-[296px] shrink-0 bg-white shadow-[0px_8px_6px_rgba(0,0,0,0.05),inset_3px_4px_2px_-3px_rgba(255,255,255,0.55)] rounded-[24px] lg:rounded-[30px] cursor-pointer box-border group pointer-events-auto"
          >
            {/* Image */}
            <div className="relative w-full aspect-[1.25] rounded-[15px] overflow-hidden mb-4 shrink-0 pointer-events-none">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="w-full m-0 mb-1 font-jakarta font-bold text-[16px] lg:text-[18px] leading-[28px] text-[#0F2F4C] pointer-events-none">
              {item.title}
            </h3>

            {/* Price */}
            <p className="w-full m-0 mb-4 font-jakarta font-normal text-[13px] lg:text-[14px] leading-[20px] text-[#0F2F4C] pointer-events-none">
              {item.price}
            </p>

            {/* Button */}
            <button className="w-full h-[48px] lg:h-[52px] bg-[radial-gradient(50%_50%_at_50%_50%,#2780C4_0%,#164573_100%)] rounded-full border-none font-jakarta font-semibold text-[14px] lg:text-[16px] text-white uppercase cursor-pointer shrink-0 hover:opacity-90 transition-opacity">
              View Details
            </button>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
