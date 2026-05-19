"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const documents = [
  { id: "doc-1", title: "GLC SOS 01", status: "VERIFIED", date: "Oct 24, 2025" },
  { id: "doc-2", title: "GLC SOS 02", status: "VERIFIED", date: "Oct 24, 2025" },
  { id: "doc-3", title: "GLC SOS 03", status: "VERIFIED", date: "Oct 24, 2025" },
  { id: "doc-4", title: "GLC SOS 04", status: "VERIFIED", date: "Oct 24, 2025" },
  { id: "doc-5", title: "GLC SOS 05", status: "VERIFIED", date: "Oct 24, 2025" },
];

export default function UnlockedDocs() {
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
    <section
      id="unlocked-docs"
      className="w-full bg-transparent py-12 lg:py-[70px] px-4 sm:px-6 lg:px-8 overflow-hidden box-border"
    >
      {/* Figma white container capsule (Fully Responsive) */}
      <div
        className="w-full max-w-7xl mx-auto bg-white border border-[#EDEEEF]/60 rounded-[32px] md:rounded-[48px] p-6 md:p-8 flex flex-col gap-6 md:gap-8 box-border"
      >
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <h2 className="m-0 font-jakarta font-bold text-[20px] md:text-[24px] leading-[32px] text-[#0F2F4C] flex gap-x-[6px] items-center">
            {"Unlocked Docs".split(" ").map((word, i) => (
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
          <button
            className="bg-none border-none font-jakarta font-bold text-[14px] md:text-[18px] leading-[32px] text-[#0F2F4C] cursor-pointer p-0 flex items-center hover:opacity-75 transition-opacity [-webkit-tap-highlight-color:transparent]"
          >
            View All
          </button>
        </div>

        {/* Scrollable Container (Drag-to-Scroll) */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-[24px] w-full overflow-x-auto pb-2 hide-scrollbar select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            #unlocked-docs .hide-scrollbar::-webkit-scrollbar { display: none; }
            #unlocked-docs .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />
          
          {documents.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={handleCardClick}
              className="box-border flex flex-col justify-center items-center p-6 w-[210px] h-[240px] min-w-[210px] bg-white border border-[#EDEEEF] rounded-[40px] cursor-pointer shrink-0 pointer-events-auto"
            >
              {/* PDF Icon Container */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "rgba(255, 218, 216, 0.4)",
                  backdropFilter: "blur(2px)",
                  borderRadius: "9999px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
                className="pointer-events-none"
              >
                <Image
                  src="/assets/home/UnlockedDocs/pdf.svg"
                  alt="PDF"
                  width={26}
                  height={26}
                />
              </div>

              {/* Text Content */}
              <div 
                style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px" }}
                className="pointer-events-none"
              >
                
                {/* Heading 3 */}
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#001F3F",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  {doc.title}
                </h3>

                {/* Status Badge Container */}
                <div 
                  style={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center", 
                    padding: "2px 0px 0px",
                    gap: "8px", 
                    width: "100%",
                    height: "auto"
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M14 4L6 12L2 8L3.4 6.6L6 9.2L12.6 2.6L14 4Z" fill="#006D37"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "11px",
                      lineHeight: "16px",
                      letterSpacing: "1.2px",
                      color: "#006D37",
                      display: "flex",
                      alignItems: "center",
                      width: "auto",
                      height: "auto",
                    }}
                  >
                    {doc.status}
                  </span>
                </div>

                {/* Date Container */}
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "11px",
                    lineHeight: "16px",
                    letterSpacing: "0.3px",
                    color: "#43474E",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  {doc.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
