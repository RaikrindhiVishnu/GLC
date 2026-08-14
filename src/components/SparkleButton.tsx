"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AiCurationModal from "./AiCurationModal";

const glassStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.1)",
  boxShadow:
    "0px 10.03px 7.52px 0px #0000000D, inset 0px 1.25px 1.25px 0px #FFFFFF40, inset 0px -1.25px 1.25px 0px #FFFFFF40, inset 3.76px 5.01px 2.51px -3.76px #FFFFFF8C",
  backdropFilter: "blur(125.33px)",
  WebkitBackdropFilter: "blur(125.33px)",
};

const solidStyle: React.CSSProperties = {
  background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
  boxShadow:
    "0px 10px 20px rgba(22, 69, 115, 0.3), inset 2px 2px 4px rgba(255,255,255,0.2)",
  border: "1px solid rgba(255,255,255,0.1)",
};

export default function SparkleButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isGlass, setIsGlass] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMapFullscreen = (e: any) => {
      setIsHidden(e.detail);
    };
    window.addEventListener("mapFullscreenChange", handleMapFullscreen);
    return () => window.removeEventListener("mapFullscreenChange", handleMapFullscreen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const candidates = [
        ...Array.from(document.querySelectorAll('[id*="hero"]')),
        ...Array.from(document.querySelectorAll('[id*="Hero"]')),
        ...Array.from(document.querySelectorAll('[class*="hero"]')),
        ...Array.from(document.querySelectorAll('[class*="Hero"]')),
        ...Array.from(document.querySelectorAll("section"))
      ];
      
      let heroEl = candidates.find(el => el && el.getBoundingClientRect().height > 0);

      if (!heroEl) {
        const divs = Array.from(document.querySelectorAll("div"));
        heroEl = divs.find(d => {
          const rect = d.getBoundingClientRect();
          return rect.height > 300 && (rect.top + window.scrollY) <= 100;
        });
      }

      // If absolutely nothing matches, default to window innerHeight to assume a typical hero space
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

  const checkIsAuthenticated = (): boolean => {
    if (typeof window === "undefined") return false;
    const token = localStorage.getItem("token");
    if (!token || token === "null" || token === "undefined" || token.trim() === "") {
      return false;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (!payload.exp || payload.exp * 1000 > Date.now()) {
        return true;
      }
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken && refreshToken !== "null" && refreshToken !== "undefined") {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  const handleSparkleClick = () => {
    if (!checkIsAuthenticated()) {
      router.push("/login");
      return;
    }
    setIsModalOpen(true);
  };

  if (isHidden || pathname?.startsWith("/login")) return null;

  return (
    <>
      <button
        onClick={handleSparkleClick}
        className="fixed bottom-8 right-6 md:right-[60px] z-50 flex items-center justify-center rounded-full transition-all duration-500 cursor-pointer shrink-0"
        style={isGlass ? { ...glassStyle, width: '52px', height: '52px' } : { ...solidStyle, width: '52px', height: '52px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="A.I. Suggested Farmlands"
      >
        <svg width="22" height="22" viewBox="21 13 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31.002 22.386L31.9619 19.0288C32.3215 17.7721 34.1025 17.7721 34.4622 19.0288L35.4209 22.386C35.4816 22.5984 35.5955 22.7918 35.7516 22.948C35.9078 23.1042 36.1012 23.218 36.3136 23.2787L39.6709 24.2375C40.9275 24.5971 40.9275 26.3781 39.6709 26.7378L36.3136 27.6965C36.1012 27.7572 35.9078 27.8711 35.7516 28.0272C35.5955 28.1834 35.4816 28.3768 35.4209 28.5892L34.4622 31.9465C34.1025 33.2031 32.3215 33.2031 31.9619 31.9465L31.0031 28.5892C30.9424 28.3768 30.8286 28.1834 30.6724 28.0272C30.5162 27.8711 30.3228 27.7572 30.1104 27.6965L26.7532 26.7378C25.4965 26.3781 25.4965 24.5971 26.7532 24.2375L30.1104 23.2787C30.3228 23.218 30.5162 23.1042 30.6724 22.948C30.8286 22.7918 30.9424 22.5984 31.0031 22.386M39.8247 30.3702C40.1378 29.457 41.454 29.4559 41.766 30.3702L41.7942 30.4645L42.1149 31.7515L43.4019 32.0732C44.4419 32.3332 44.4419 33.8087 43.4019 34.0687L42.1149 34.3905L41.7942 35.6775C41.5342 36.7164 40.0576 36.7164 39.7976 35.6775L39.4759 34.3905L38.1889 34.0687C37.1489 33.8087 37.1489 32.3321 38.1889 32.0732L39.4759 31.7515L39.7976 30.4645L39.8247 30.3702ZM40.7954 32.851C40.733 32.9345 40.6589 33.0086 40.5754 33.071C40.6589 33.1333 40.733 33.2074 40.7954 33.2909C40.8577 33.2074 40.9318 33.1333 41.0153 33.071C40.9317 33.0083 40.8576 32.9338 40.7954 32.85M24.658 15.2025C24.9809 14.2589 26.3751 14.2903 26.6275 15.2967L26.9482 16.5837L28.2352 16.9055C29.2752 17.1655 29.2752 18.641 28.2352 18.901L26.9482 19.2227L26.6275 20.5097C26.3675 21.5486 24.8909 21.5486 24.6309 20.5097L24.3092 19.2227L23.0222 18.901C21.9822 18.641 21.9822 17.1644 23.0222 16.9055L24.3092 16.5837L24.6309 15.2967L24.658 15.2025ZM25.6287 17.6844C25.5663 17.7675 25.4922 17.8412 25.4088 17.9032C25.4923 17.9659 25.5664 18.0403 25.6287 18.1242C25.691 18.0403 25.765 17.9659 25.8486 17.9032C25.7651 17.8409 25.691 17.7679 25.6287 17.6844Z"
            fill={isGlass ? "white" : (isHovered ? "white" : "#b5ca47")}
            className="transition-colors duration-300"
          />
        </svg>
      </button>
      {isModalOpen && (
        <AiCurationModal
          onClose={() => setIsModalOpen(false)}
          onGenerate={() => {
            setIsModalOpen(false);
            if (!checkIsAuthenticated()) {
              router.push("/login");
            } else {
              router.push("/home/ai-generated-farmlands");
            }
          }}
        />
      )}
    </>
  );
}
