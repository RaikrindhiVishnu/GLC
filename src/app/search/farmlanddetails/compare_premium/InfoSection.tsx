"use client";

import React from "react";

export default function InfoSection() {
  return (
    <div className="relative w-full h-[608px] overflow-hidden">
      {/* Background Image: 4488 1 */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "url('/assets/search/farmlanddetails/compare-premium/4488.jpg') center/cover",
        }}
      />
      
      {/* Rectangle 4167: Top Gradient Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-[139px] z-1"
        style={{
          background: "linear-gradient(180deg, #F8F9FA 0%, rgba(248, 249, 250, 0) 100%)",
        }}
      />

      {/* Background Removal Image: c7554e73-4a08-4bc0-95c2-9c56c675eddb 1 */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[311px] z-2"
        style={{
          background: "url('/assets/search/farmlanddetails/compare-premium/bg_removal.png') center/cover",
          backgroundPosition: "bottom",
        }}
      />

      {/* Text Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h2 
          className="text-center text-[#0F2F4C] max-w-[738px]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "55px",
            letterSpacing: "-1.2px",
          }}
        >
          Simple steps. Smart technology. Real yields.
        </h2>
      </div>
    </div>
  );
}
