"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGetVerificationLandsByUserIdQuery } from "../../../services/verification";

// Configuration layout engine mapping precisely to CSS spatial specs
const slotConfigs = [
  // Slot 0: Layer 3 Left
  { width: "164.74px", height: "296.53px", left: "0px", top: "59.91px", zIndex: 1, brightness: 0.65 },
  // Slot 1: Layer 2 Left
  { width: "196.84px", height: "356.44px", left: "96.85px", top: "29.95px", zIndex: 2, brightness: 0.75 },
  // Slot 2: Layer 1 Left
  { width: "278.57px", height: "416.35px", left: "247.61px", top: "0px", zIndex: 3, brightness: 0.9 },
  // Slot 3: Central Active Focal Stage
  { width: "379px", height: "494.35px", left: "451px", top: "-38.58px", zIndex: 10, brightness: 1 },
  // Slot 4: Layer 1 Right
  { width: "278.57px", height: "416.35px", left: "753.82px", top: "0px", zIndex: 3, brightness: 0.9 },
  // Slot 5: Layer 2 Right
  { width: "196.84px", height: "356.44px", left: "986.31px", top: "29.95px", zIndex: 2, brightness: 0.75 },
  // Slot 6: Layer 3 Right
  { width: "164.74px", height: "296.53px", left: "1115.26px", top: "59.91px", zIndex: 1, brightness: 0.65 },
];

export default function VerificationTrendingCarousel() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0); 
  const [wrapId, setWrapId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);

  const { data: res, isLoading } = useGetVerificationLandsByUserIdQuery(
    { user_id: userId || 0, offset: 0, limit: 200 },
    { skip: !mounted || !userId }
  );

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1360;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${currentScale})`;
      }
      if (shellRef.current) {
        shellRef.current.style.height = `${456 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Include all items, regardless of whether they have an image
  const validItems = res?.data || [];
  
  if (!isLoading && validItems.length === 0) {
    return null; // Return nothing if no real items have images
  }

  // To preserve the gorgeous 7-card 3D fan-out effect, we pad the array to exactly 7 items
  let carouselItems: any[] = [];
  if (validItems.length > 0) {
    while (carouselItems.length < 7) {
      carouselItems = [...carouselItems, ...validItems];
    }
    carouselItems = carouselItems.slice(0, 7);
  } else {
    // Fallback just in case while loading
    carouselItems = Array(7).fill({ id: 0, farmland_code: "Loading...", price: "...", farmland_img: "/assets/search/image2.1.svg" });
  }

  const getSlotIndex = (itemIndex: number, active: number) => {
    const offset = (itemIndex - active + 7) % 7;
    if (offset === 0) return 3;
    if (offset === 1) return 4;
    if (offset === 2) return 5;
    if (offset === 3) return 6;
    if (offset === 4) return 0;
    if (offset === 5) return 1;
    if (offset === 6) return 2;
    return 3;
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const wrappingItemIndex = carouselItems.findIndex((_, idx) => getSlotIndex(idx, activeIndex) === 6);
    setWrapId(wrappingItemIndex);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 6));
    setTimeout(() => {
      setWrapId(null);
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const wrappingItemIndex = carouselItems.findIndex((_, idx) => getSlotIndex(idx, activeIndex) === 0);
    setWrapId(wrappingItemIndex);
    setActiveIndex((prev) => (prev < 6 ? prev + 1 : 0));
    setTimeout(() => {
      setWrapId(null);
      setIsAnimating(false);
    }, 500);
  };

  const handleCardClick = (idx: number, id: number) => {
    if (isAnimating) return;
    if (idx === activeIndex) {
      router.push(`/home/verification/tracker?farmland=${id}`);
      return;
    }
    setActiveIndex(idx);
  };

  return (
    <div className="mt-24 w-full flex flex-col items-center justify-center mb-16 relative overflow-hidden">
      
      {/* Header */}
      <h3 className="font-jakarta font-bold text-[16px] text-[#131600] flex items-center gap-2 mb-12">
        Verification Trending
        <span className="text-[#2780C4] flex items-center gap-1 cursor-pointer">
          All Categories 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </h3>

      {/* MOBILE LAYOUT (< lg) */}
      <div className="block lg:hidden w-full overflow-hidden">
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
            {carouselItems.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={`mob-${idx}`}
                  onClick={() => handleCardClick(idx, item.farmland_id)}
                  style={{
                    width: "calc(100vw - 80px)",
                    height: "420px",
                    flexShrink: 0,
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                    cursor: isActive ? "default" : "pointer",
                    opacity: isActive ? 1 : 0.6,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <div className="absolute inset-0 bg-[#F3F4F6] flex items-center justify-center z-[-1]">
                    <span className="font-jakarta font-bold text-[28px] text-[#D1D5DB] tracking-wider">{item.farmland_code}</span>
                  </div>
                  {item.farmland_img && (
                    <img 
                      src={item.farmland_img} 
                      alt={item.farmland_code} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
                      onError={(e) => { 
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; 
                      }} 
                    />
                  )}
                  
                  {/* Black gradient bottom overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col">
                        <h4 className="m-0 font-jakarta font-medium text-[14px] text-white">{item.farmland_code}</h4>
                        <span className="font-jakarta text-[12px] text-white/80 flex items-center gap-1 mt-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          Verification Active
                        </span>
                      </div>
                      <span className="font-jakarta font-bold text-[18px] text-white">₹{item.price?.toLocaleString() || item.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination arrows */}
        <div className="flex gap-8 mt-8 justify-center">
          <button onClick={handlePrev} disabled={isAnimating} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button onClick={handleNext} disabled={isAnimating} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

      {/* DESKTOP LAYOUT (>= lg) */}
      <div className="hidden lg:flex flex-col items-center w-full">
        <div ref={shellRef} style={{ position: "relative", width: "1280px", maxWidth: "100%", height: "456px", flexShrink: 0 }}>
          <div ref={scalerRef} style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-640px", width: "1280px", height: "456px", transformOrigin: "top center", willChange: "transform" }}>
            <div style={{ position: "absolute", top: "38.58px", left: 0, width: "1280px", height: "416.35px" }}>
              {carouselItems.map((item, idx) => {
                const slotIdx = getSlotIndex(idx, activeIndex);
                const config = slotConfigs[slotIdx];
                const isActive = slotIdx === 3;
                const isWrapping = wrapId === idx;

                return (
                  <div
                    key={`desk-${idx}`}
                    onClick={() => handleCardClick(idx, item.farmland_id)}
                    style={{
                      position: "absolute",
                      width: config.width,
                      height: config.height,
                      left: config.left,
                      top: config.top,
                      zIndex: config.zIndex,
                      borderRadius: "24px",
                      overflow: "hidden",
                      cursor: isActive ? "default" : "pointer",
                      boxShadow: isActive ? "0px 15px 40px rgba(0, 0, 0, 0.35)" : "0px 9.98434px 24.9608px rgba(0, 0, 0, 0.25)",
                      transition: isWrapping ? "none" : "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                      opacity: isWrapping ? 0 : 1,
                      boxSizing: "border-box",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, transition: isWrapping ? "none" : "filter 0.5s ease", filter: `brightness(${config.brightness})` }}>
                      <div className="absolute inset-0 bg-[#F3F4F6] flex items-center justify-center z-[-1]">
                        <span className="font-jakarta font-bold text-[28px] text-[#D1D5DB] tracking-wider">{item.farmland_code}</span>
                      </div>
                      {item.farmland_img && (
                        <img 
                          src={item.farmland_img} 
                          alt={item.farmland_code} 
                          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
                          onError={(e) => { 
                            e.currentTarget.onerror = null; 
                            e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; 
                          }} 
                        />
                      )}
                    </div>

                    {/* Gradient Overlay for active card matching Verification styling */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
                      style={{
                        opacity: isActive ? 1 : 0,
                        pointerEvents: isActive ? "auto" : "none",
                        transition: isWrapping ? "none" : "opacity 0.4s ease",
                      }}
                    >
                      <div className="flex justify-between items-end">
                        <div className="flex flex-col">
                          <h4 className="m-0 font-jakarta font-semibold text-[20px] text-white">{item.farmland_code}</h4>
                          <span className="font-jakarta text-[14px] text-white/80 flex items-center gap-1 mt-1">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Verification Active
                          </span>
                        </div>
                        <span className="font-jakarta font-bold text-[22px] text-white">₹{item.price?.toLocaleString() || item.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex gap-4 mt-12">
          <button onClick={handlePrev} disabled={isAnimating} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button onClick={handleNext} disabled={isAnimating} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

    </div>
  );
}
