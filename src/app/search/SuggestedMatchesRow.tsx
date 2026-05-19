"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Absolute data parity derived directly from official AI Suggested Matches CSS block metrics
const suggestedMatches = [
  {
    id: "sugg-1",
    title: "GLC SOS 01",
    subtitle: "Guntur District, AP",
    price: "₹3.2Cr",
    matchScore: "98% MATCH",
    img: "/assets/home/CompareAssets/compare1.svg",
  },
  {
    id: "sugg-2",
    title: "GLC SOS 02",
    subtitle: "Chittoor Region",
    price: "₹4.8Cr",
    matchScore: "95% MATCH",
    img: "/assets/home/CompareAssets/compare2.svg",
  },
  {
    id: "sugg-3",
    title: "GLC SOS 03",
    subtitle: "Kurnool Belt",
    price: "₹2.1Cr",
    matchScore: "92% MATCH",
    img: "/assets/home/CompareAssets/compare4.svg",
  },
];

export default function SuggestedMatchesRow() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({
    "sugg-1": true, 
  });

  const [scale, setScale] = useState(1);
  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1260; 
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      setScale(currentScale);
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${currentScale})`;
      }
      if (shellRef.current) {
        shellRef.current.style.height = `${509 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{
        width: "100%",
        margin: "40px 0",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div 
        ref={shellRef} 
        style={{ 
          position: "relative", 
          width: "1184px", 
          maxWidth: "100%", 
          height: "509px",
          flexShrink: 0 
        }}
      >
        <div
          ref={scalerRef}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: "-592px",
            width: "1184px",
            height: "509px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Exactly the original Hardcoded figma layout container elements with no strings modified */}
          {/* ─── SECTION HEADER ─── */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 16px" }}>
            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#131600",
              }}
            >
              AI Suggested Matches
            </motion.h2>

            {/* 3 Indicator Dots on the right */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", background: "#0F2F4C", borderRadius: "9999px" }} />
              <div style={{ width: "8px", height: "8px", background: "#E1E3E4", borderRadius: "9999px" }} />
              <div style={{ width: "8px", height: "8px", background: "#E1E3E4", borderRadius: "9999px" }} />
            </div>
          </div>

          {/* ─── ROW GRID ─── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              boxSizing: "border-box",
            }}
          >
            {suggestedMatches.map((item) => {
              const isBookmarked = !!bookmarks[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => router.push(`/search/farmlanddetails?id=${item.id.replace("sugg", "match")}`)}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "30px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "445px", 
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    border: "1px solid #F1F5F9",
                    transition: "transform 0.2s ease, boxShadow 0.2s ease",
                    cursor: "pointer",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  {/* Internal Card Content Wrapper with exactly 24px padding */}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between", boxSizing: "border-box" }}>
                    
                    {/* Top Image Box */}
                    <div style={{ position: "relative", width: "100%", height: "256px", borderRadius: "16px", overflow: "hidden", flexShrink: 0 }}>
                      <Image src={item.img} alt={item.title} fill style={{ objectFit: "cover" }} />

                      {/* Top-Left Frosted Lime Score Pill */}
                      <div
                        style={{
                          position: "absolute",
                          top: "16px",
                          left: "16px",
                          background: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(6px)",
                          WebkitBackdropFilter: "blur(6px)",
                          borderRadius: "9999px",
                          padding: "6px 12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          zIndex: 5,
                        }}
                      >
                        <div style={{ width: "8px", height: "8px", background: "#BCD225", borderRadius: "9999px" }} />
                        <span
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "11px",
                            lineHeight: "16px",
                            color: "#131600",
                            letterSpacing: "0.55px",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.matchScore}
                        </span>
                      </div>

                      {/* Top-Right Frosted 48x48 Heart Button */}
                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        style={{
                          position: "absolute",
                          top: "24px",
                          right: "24px",
                          width: "48px",
                          height: "48px",
                          background: "#FFFFFF",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          borderRadius: "9999px",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                          zIndex: 5,
                        }}
                      >
                        <svg width="20" height="18" viewBox="0 0 24 24" fill={isBookmarked ? "#2780C4" : "none"} stroke="#2780C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </button>
                    </div>

                    {/* Bottom Metadata Block */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "flex-end" }}>
                      {/* Title */}
                      <h3
                        style={{
                          margin: "20px 0 0 0",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: "28px",
                          color: "#131600",
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Subtitle / Region */}
                      <p
                        style={{
                          margin: "4px 0 12px 0",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#45474C",
                        }}
                      >
                        {item.subtitle}
                      </p>

                      {/* Price & Action Separator Row */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingTop: "16px",
                          borderTop: "1px solid #EDEEEF",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#091426",
                          }}
                        >
                          {item.price}
                        </span>

                        {/* Vector Right Arrow in deep blue */}
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#00629E",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          →
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
