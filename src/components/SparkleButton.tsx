"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

export default function SparkleButton() {
  const router = useRouter();
  const [isGlass, setIsGlass] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Dynamically locate the hero/cover element on any page
      const heroEl = 
        document.getElementById("hero-section") || 
        document.getElementById("hero-screen") ||
        document.getElementById("search-hero-screen") ||
        document.querySelector('[id*="hero"]') || 
        document.querySelector('[id*="Hero"]') ||
        document.querySelector('[class*="hero"]') || 
        document.querySelector('[class*="Hero"]') ||
        document.querySelector("section") ||
        (() => {
          // Look for top cover/header divs (e.g., in profile page)
          const divs = Array.from(document.querySelectorAll("div"));
          return divs.find(d => {
            const rect = d.getBoundingClientRect();
            return rect.height > 300 && rect.height < window.innerHeight * 1.5 && (rect.top + window.scrollY) <= 100;
          });
        })();

      const heroBottom = heroEl ? (heroEl.getBoundingClientRect().bottom + window.scrollY) : window.innerHeight;
      const ctaSection = document.getElementById("cta-section");
      
      // Calculate based on the physical position of the button (approx. 80px from viewport bottom)
      const buttonPhysicalPos = window.scrollY + window.innerHeight - 80;
      
      let pastHero = buttonPhysicalPos >= heroBottom;
      let beforeCta = true;

      if (ctaSection) {
        const ctaTop = ctaSection.getBoundingClientRect().top + window.scrollY;
        // Trigger glass state when the button itself crosses into the CTA section
        if (buttonPhysicalPos > ctaTop) {
          beforeCta = false;
        }
      }

      // It is glass when not past hero or when past CTA, and solid in between
      setIsGlass(!(pastHero && beforeCta));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      onClick={() => router.push("/home/ai-generated-farmlands")}
      className="fixed bottom-8 right-6 md:right-[60px] z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full transition-all duration-500 cursor-pointer"
      style={isGlass ? glassStyle : solidStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="A.I. Suggested Farmlands"
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
