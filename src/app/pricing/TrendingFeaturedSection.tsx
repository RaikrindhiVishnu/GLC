"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const carouselItems = [
  { id: 0, title: "GLC SOS 05", region: "Anantapur Range", price: "₹4.1 Cr", img: "/assets/home/PopularFarmlands/glc1.svg" },
  { id: 1, title: "GLC SOS 06", region: "Krishna Delta", price: "₹3.8 Cr", img: "/assets/home/PopularFarmlands/glc2.svg" },
  { id: 2, title: "GLC SOS 07", region: "Godavari Basin", price: "₹6.0 Cr", img: "/assets/home/PopularFarmlands/glcsos3.svg" },
  { id: 3, title: "GLC SOS 01", region: "Vizag, A.P.", price: "₹5.2 Cr", img: "/assets/home/CompareAssets/compare3.svg" },
  { id: 4, title: "GLC SOS 02", region: "Nellore Plains", price: "₹4.5 Cr", img: "/assets/home/TrendingFarmlands/glcsos01.svg" },
  { id: 5, title: "GLC SOS 03", region: "Srikakulam Coast", price: "₹3.2 Cr", img: "/assets/home/TrendingFarmlands/glcsos02.svg" },
  { id: 6, title: "GLC SOS 04", region: "Prakasam Tracts", price: "₹5.0 Cr", img: "/assets/home/TrendingFarmlands/glcsos03.svg" },
];

const slotConfigs = [
  { width: "164.74px", height: "296.53px", left: "0px",      top: "59.91px", zIndex: 1, brightness: 0.65 },
  { width: "196.84px", height: "356.44px", left: "96.85px",  top: "29.95px", zIndex: 2, brightness: 0.75 },
  { width: "278.57px", height: "416.35px", left: "247.61px", top: "0px",     zIndex: 3, brightness: 0.9  },
  { width: "379px",    height: "494.35px", left: "451px",    top: "-38.58px",zIndex: 10, brightness: 1   },
  { width: "278.57px", height: "416.35px", left: "753.82px", top: "0px",     zIndex: 3, brightness: 0.9  },
  { width: "196.84px", height: "356.44px", left: "986.31px", top: "29.95px", zIndex: 2, brightness: 0.75 },
  { width: "164.74px", height: "296.53px", left: "1115.26px",top: "59.91px", zIndex: 1, brightness: 0.65 },
];

export default function TrendingFeaturedSection() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(3);
  const [wrapId, setWrapId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number>(0);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1360;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      if (scalerRef.current) scalerRef.current.style.transform = `scale(${currentScale})`;
      if (shellRef.current) shellRef.current.style.height = `${456 * currentScale}px`;
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getSlotIndex = (itemIndex: number, active: number) => {
    const offset = (itemIndex - active + 7) % 7;
    if (offset === 0) return 3;
    if (offset === 1) return 4;
    if (offset === 2) return 5;
    if (offset === 3) return 6;
    if (offset === 4) return 0;
    if (offset === 5) return 1;
    return 2;
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const wrappingItemIndex = carouselItems.findIndex((item) => getSlotIndex(item.id, activeIndex) === 0);
    setWrapId(wrappingItemIndex);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : carouselItems.length - 1));
    setTimeout(() => { setWrapId(null); setIsAnimating(false); }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const wrappingItemIndex = carouselItems.findIndex((item) => getSlotIndex(item.id, activeIndex) === 6);
    setWrapId(wrappingItemIndex);
    setActiveIndex((prev) => (prev < carouselItems.length - 1 ? prev + 1 : 0));
    setTimeout(() => { setWrapId(null); setIsAnimating(false); }, 500);
  };

  const handleCardClick = (id: number) => {
    if (isAnimating) return;
    if (id === activeIndex) {
      const mapId = `match-${(id % 6) + 1}`;
      router.push(`/search/farmlanddetails?id=${mapId}`);
      return;
    }
    setActiveIndex(id);
  };

  return (
    <section style={{ width: "100%", overflow: "hidden", boxSizing: "border-box" }}>

      {/* ══════════════════════════════════════════════════════ */}
      {/* MOBILE LAYOUT (< lg)                                  */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="block lg:hidden w-full overflow-hidden py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 mb-8"
        >
          <span className="font-jakarta font-bold text-[20px] leading-tight text-[#001F3F]">Farmland trending in</span>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="font-jakarta font-extrabold text-[20px] leading-tight text-brand-secondary">All Categories</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="2 2 7 7 12 2" />
            </svg>
          </div>
        </motion.div>

        <div
          className="relative w-full overflow-hidden"
          onTouchStart={(e) => { dragStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const delta = dragStartX.current - e.changedTouches[0].clientX;
            if (delta > 50) handleNext();
            else if (delta < -50) handlePrev();
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
              paddingLeft: "40px",
              paddingRight: "40px",
              willChange: "transform",
              transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
              "--mi": activeIndex,
              transform: "translateX(calc(var(--mi) * -1 * (100vw - 64px)))",
            } as React.CSSProperties}
          >
            {carouselItems.map((item) => {
              const isActive = item.id === activeIndex;
              return (
                <div
                  key={`mob-${item.id}`}
                  onClick={() => handleCardClick(item.id)}
                  style={{
                    width: "calc(100vw - 80px)", height: "400px", flexShrink: 0,
                    borderRadius: "24px", overflow: "hidden", position: "relative",
                    cursor: isActive ? "default" : "pointer",
                    opacity: isActive ? 1 : 0.6,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <Image src={item.img} alt={item.title} fill priority={isActive} sizes="80vw" style={{ objectFit: "cover" }} />
                  <div
                    style={{
                      position: "absolute", left: 0, right: 0, bottom: 0, height: "110px",
                      background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)", borderRadius: "0 0 24px 24px",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "0 20px", boxSizing: "border-box",
                      opacity: isActive ? 1 : 0, transition: "opacity 0.4s ease",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "18px", color: "#F5F7FA" }}>{item.title}</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "14px", color: "#F5F7FA" }}>{item.region}</span>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "18px", color: "#F5F7FA" }}>{item.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "19.39px", marginTop: "32px" }}>
          <button onClick={handlePrev} disabled={isAnimating} style={{ width: "41.7px", height: "41.7px", border: "0.969701px solid #0F2F4C", borderRadius: "96.9701px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: isAnimating ? "default" : "pointer", opacity: isAnimating ? 0.6 : 1 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button onClick={handleNext} disabled={isAnimating} style={{ width: "41.7px", height: "41.7px", border: "0.969701px solid #0F2F4C", borderRadius: "96.9701px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: isAnimating ? "default" : "pointer", opacity: isAnimating ? 0.6 : 1 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════ */}
      {/* DESKTOP LAYOUT (>= lg)                                */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex flex-col items-center" style={{ margin: "0 0 80px 0", gap: "60px", overflow: "hidden" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap flex-row items-center justify-center gap-x-2 gap-y-1 px-4"
        >
          <span className="font-jakarta font-bold text-[28px] leading-tight text-[#001F3F]">Farmland trending in</span>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="font-jakarta font-extrabold text-[28px] leading-tight text-brand-secondary">All Categories</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="2 2 7 7 12 2" />
            </svg>
          </div>
        </motion.div>

        <div ref={shellRef} style={{ position: "relative", width: "1280px", maxWidth: "100%", height: "456px", flexShrink: 0 }}>
          <div
            ref={scalerRef}
            style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-640px", width: "1280px", height: "456px", transformOrigin: "top center", willChange: "transform" }}
          >
            <div style={{ position: "absolute", top: "38.58px", left: 0, width: "1280px", height: "416.35px" }}>
              {carouselItems.map((item) => {
                const slotIdx = getSlotIndex(item.id, activeIndex);
                const config = slotConfigs[slotIdx];
                const isActive = slotIdx === 3;
                const isWrapping = wrapId === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item.id)}
                    style={{
                      position: "absolute",
                      width: config.width, height: config.height,
                      left: config.left, top: config.top, zIndex: config.zIndex,
                      borderRadius: "30px", overflow: "hidden",
                      cursor: isActive ? "default" : "pointer",
                      boxShadow: isActive ? "0px 15px 40px rgba(0,0,0,0.35)" : "0px 9.98px 24.96px rgba(0,0,0,0.25)",
                      transition: isWrapping ? "none" : "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                      opacity: isWrapping ? 0 : 1,
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, transition: isWrapping ? "none" : "filter 0.5s ease", filter: `brightness(${config.brightness})` }}>
                      <Image src={item.img} alt={item.title} fill priority={isActive} sizes={isActive ? "400px" : "300px"} style={{ objectFit: "cover" }} />
                    </div>

                    <div
                      style={{
                        position: "absolute", left: 0, right: 0, bottom: 0, height: "146px",
                        background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)", borderRadius: "0 0 30px 30px",
                        display: "flex", flexDirection: "column", justifyContent: "center",
                        padding: "0 28px", boxSizing: "border-box",
                        opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none",
                        transition: isWrapping ? "none" : "opacity 0.4s ease",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "24px", lineHeight: "30px", color: "#F5F7FA" }}>{item.title}</span>
                          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "23px", color: "#F5F7FA" }}>{item.region}</span>
                        </div>
                        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "24px", lineHeight: "30px", color: "#F5F7FA" }}>{item.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "19.39px" }}>
          <button
            onClick={handlePrev} disabled={isAnimating}
            style={{ width: "41.7px", height: "41.7px", border: "0.969701px solid #0F2F4C", borderRadius: "96.9701px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: isAnimating ? "default" : "pointer", opacity: isAnimating ? 0.6 : 1, transition: "all 0.2s ease" }}
            onMouseEnter={(e) => { if (!isAnimating) { e.currentTarget.style.background = "#0F2F4C"; const s = e.currentTarget.querySelector("svg") as SVGElement | null; if (s) s.style.stroke = "#FFFFFF"; }}}
            onMouseLeave={(e) => { if (!isAnimating) { e.currentTarget.style.background = "transparent"; const s = e.currentTarget.querySelector("svg") as SVGElement | null; if (s) s.style.stroke = "#0F2F4C"; }}}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s ease" }}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext} disabled={isAnimating}
            style={{ width: "41.7px", height: "41.7px", border: "0.969701px solid #0F2F4C", borderRadius: "96.9701px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: isAnimating ? "default" : "pointer", opacity: isAnimating ? 0.6 : 1, transition: "all 0.2s ease" }}
            onMouseEnter={(e) => { if (!isAnimating) { e.currentTarget.style.background = "#0F2F4C"; const s = e.currentTarget.querySelector("svg") as SVGElement | null; if (s) s.style.stroke = "#FFFFFF"; }}}
            onMouseLeave={(e) => { if (!isAnimating) { e.currentTarget.style.background = "transparent"; const s = e.currentTarget.querySelector("svg") as SVGElement | null; if (s) s.style.stroke = "#0F2F4C"; }}}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s ease" }}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}
