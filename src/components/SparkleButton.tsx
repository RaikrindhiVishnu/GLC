"use client";

import React, { useEffect, useState } from "react";

const glassStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.25)", // Increased from 0.15 for better mobile visibility
  boxShadow:
    "0px 10.03px 7.52px rgba(0,0,0,0.15), inset 3.76px 5.01px 2.51px -3.76px rgba(255,255,255,0.6), inset 0px -1.25px 1.25px rgba(255,255,255,0.3), inset 0px 1.25px 1.25px rgba(255,255,255,0.3)",
  backdropFilter: "blur(20px)", // Reduced blur slightly for performance on mobile
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.35)",
};

const solidStyle: React.CSSProperties = {
  background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
  boxShadow:
    "0px 10px 20px rgba(22, 69, 115, 0.3), inset 2px 2px 4px rgba(255,255,255,0.2)",
  border: "1px solid rgba(255,255,255,0.1)",
};

function getDocTop(el: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

export default function SparkleButton() {
  const [isGlass, setIsGlass] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const update = () => {
      const statsEl = document.getElementById("stats-section");
      const intentEl = document.getElementById("intent-section");
      const ctaEl = document.getElementById("cta-section");
      const footerEl = document.getElementById("footer-section");

      if (!statsEl) return;

      const vh = window.innerHeight;
      const buttonThreshold = vh - 100; // Trigger when section is 100px from bottom

      const statsRect = statsEl.getBoundingClientRect();
      const intentRect = intentEl?.getBoundingClientRect();
      const ctaRect = ctaEl?.getBoundingClientRect();
      const footerRect = footerEl?.getBoundingClientRect();

      // Detection flags
      const statsReached = statsRect.top <= buttonThreshold;
      const intentReached = intentRect ? intentRect.top <= buttonThreshold : false;
      const ctaReached = ctaRect ? ctaRect.top <= buttonThreshold : false;
      const footerReached = footerRect ? footerRect.top <= buttonThreshold : false;

      // Logic:
      const isOverHero = !statsReached;
      const isOverIntent = intentReached && (intentRect ? intentRect.bottom > buttonThreshold : false);
      const isOverCTA = ctaReached && (ctaRect ? ctaRect.bottom > buttonThreshold : true);
      const isOverFooter = footerReached;

      setIsGlass(isOverHero || isOverIntent || isOverCTA || isOverFooter);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Define colors for the sparkle based on state
  // Solid state (Dark Green button) -> Brand Accent (Lime)
  // Glass state (White button) -> White (or Brand Accent on hover)
  const getSparkleColor = (isPrimary: boolean) => {
    if (!isGlass) {
      return isHovered ? "white" : "#b5ca47"; // Requested Lime on Blue bg
    }
    return isHovered ? "#b5ca47" : "white"; // White on Glass bg
  };

  return (
    <button
      className="fixed bottom-8 right-6 md:right-[60px] z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full transition-all duration-500 cursor-pointer"
      style={isGlass ? glassStyle : solidStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M14 3L15.8 10.2L23 12L15.8 13.8L14 21L12.2 13.8L5 12L12.2 10.2L14 3Z" 
          fill={getSparkleColor(true)} 
          className="transition-colors duration-300"
        />
        <path 
          d="M22 18L22.9 21.1L26 22L22.9 22.9L22 26L21.1 22.9L18 22L21.1 21.1L22 18Z" 
          fill={getSparkleColor(false)} 
          opacity={isGlass ? "0.7" : "0.5"}
          className="transition-colors duration-300"
        />
      </svg>
    </button>
  );
}
