"use client";

import React, { useState } from "react";

interface FilterOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterOverlay({ isOpen, onClose }: FilterOverlayProps) {
  // Local reactive states mapping the absolute figma button matrix
  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  
  // Custom collections interactive toggle matrices
  const [selectedLeft, setSelectedLeft] = useState<string[]>(["GLC's Exclusive"]);
  const [selectedRight, setSelectedRight] = useState<string[]>(["Silt Loam"]);

  // Special features switches
  const [organicCert, setOrganicCert] = useState(true);
  const [waterRights, setWaterRights] = useState(true);

  if (!isOpen) return null;

  const toggleLeft = (label: string) => {
    setSelectedLeft(prev => prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]);
  };

  const toggleRight = (label: string) => {
    setSelectedRight(prev => prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]);
  };

  return (
    /* Modal Overlay Backdrop */
    <div 
      style={{
        position: "fixed" as const,
        inset: 0,
        zIndex: 100,
        background: "rgba(9, 20, 38, 0.4)",
        backdropFilter: "blur(16.5px)",
        WebkitBackdropFilter: "blur(16.5px)",
        boxSizing: "border-box",
      }}
      className="select-none flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      {/* Main Modal Container mapped fluidly to fit perfectly inside the viewport without external page scroll */}
      <div 
        style={{
          background: "#F3F4F5",
          boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
          borderRadius: "48px",
          position: "relative" as const,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
        className="w-full max-w-[896px] h-[90vh] max-h-[921px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ─── HEADER SECTION (Fixed slice height 66px docked cleanly at top) ─── */}
        <div 
          style={{
            position: "absolute" as const,
            height: "66px",
            left: "0px",
            right: "0px",
            top: "0px",
            background: "#FFFFFF",
            borderTopLeftRadius: "48px",
            borderTopRightRadius: "48px",
            zIndex: 30,
            boxSizing: "border-box",
          }}
          className="flex justify-between items-center px-4 md:px-10 w-full"
        >
          {/* Subtle Close Trigger mapped precisely without dark solid fill */}
          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            title="Close filter panel"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>

          {/* Heading 1: Title */}
          <span 
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.6px",
              color: "#0F2F4C",
            }}
            className="text-lg md:text-[24px] leading-tight md:leading-[32px]"
          >
            Filter Properties
          </span>

          {/* CLEAR ALL Trigger */}
          <button
            onClick={() => {
              setSelectedLeft(["GLC's Exclusive"]);
              setSelectedRight(["Silt Loam"]);
              setOrganicCert(true);
              setWaterRights(true);
              setStateSearch("");
              setCitySearch("");
            }}
            style={{
              background: "transparent",
              border: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: "#45474C",
              cursor: "pointer",
              padding: 0,
            }}
            className="text-xs md:text-sm"
          >
            CLEAR ALL
          </button>
        </div>

        {/* ─── SCROLLABLE MATRIX CONTENT (Anchored natively between Header and Action Console to dynamically prevent overlap) ─── */}
        <div 
          style={{
            position: "absolute" as const,
            top: "66px", // Directly underneath the 66px tall Header Section
            bottom: "133px", // Directly above the 133px tall Action Console sticky footer
            left: "0px",
            right: "0px",
            overflowY: "scroll",
            boxSizing: "border-box",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="custom-no-scrollbar flex flex-col items-start px-4 md:px-10 pt-6 gap-8 pb-8 w-full"
        >
          {/* Embedded global styles guarantee absolute webkit scrollbar non-existence */}
          <style jsx global>{`
            .custom-no-scrollbar::-webkit-scrollbar {
              display: none !important;
            }
          `}</style>

          {/* 1. LOCATION SECTION */}
          <div className="w-full flex flex-col gap-4 box-border">
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                color: "#0F2F4C",
              }}
            >
              LOCATION
            </span>

            {/* Responsive side-by-side inputs row stackable on mobile */}
            <div className="w-full flex flex-col md:flex-row gap-4 box-border justify-between">
              {/* State Search Input Container */}
              <div 
                style={{
                  height: "57px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(197, 198, 205, 0.3)",
                  borderRadius: "9999px",
                  boxSizing: "border-box",
                }}
                className="w-full md:w-[400px] flex items-center relative pl-12 pr-4"
              >
                {/* Embedded absolute SVG marker */}
                <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#75777D" strokeWidth="2" className="absolute left-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <input 
                  type="text"
                  placeholder="State Search"
                  value={stateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                    color: "#0F2F4C",
                  }}
                  className="w-full text-sm md:text-base"
                />
              </div>

              {/* City / District Search Input Container */}
              <div 
                style={{
                  height: "57px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(197, 198, 205, 0.3)",
                  borderRadius: "9999px",
                  boxSizing: "border-box",
                }}
                className="w-full md:w-[400px] flex items-center relative pl-12 pr-4"
              >
                {/* Embedded absolute SVG marker */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75777D" strokeWidth="2" className="absolute left-4">
                  <path d="M3 6l6-3 6 3 6-3v12l-6 3-6-3-6 3V6z"></path>
                </svg>
                <input 
                  type="text"
                  placeholder="City / District Search"
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                    color: "#0F2F4C",
                  }}
                  className="w-full text-sm md:text-base"
                />
              </div>
            </div>
          </div>

          {/* 2. INVESTMENT & SCALE SECTION */}
          <div className="w-full flex flex-col gap-4 box-border">
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                color: "#0F2F4C",
              }}
            >
              INVESTMENT & SCALE
            </span>

            {/* Master White Track Container perfectly wrapping */}
            <div 
              style={{
                background: "#FFFFFF",
                borderRadius: "32px",
                boxSizing: "border-box",
              }}
              className="w-full p-4 md:p-8 flex flex-col md:flex-row gap-8 justify-between"
            >
              {/* Left Slider: Price Range */}
              <div className="w-full md:w-[352px] flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#45474C" }} className="text-sm md:text-base">
                    Price Range (₹)
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0F2F4C" }} className="text-xs md:text-sm">
                    ₹50L – ₹2.5Cr
                  </span>
                </div>

                {/* Track visual block */}
                <div className="relative w-full h-6 flex items-center">
                  <div style={{ height: "6px", background: "#E7E8E9", borderRadius: "9999px" }} className="absolute inset-x-0" />
                  <div style={{ height: "6px", background: "#2780C4", borderRadius: "9999px" }} className="absolute left-[20%] right-[30%]" />
                  
                  {/* Left Node */}
                  <div style={{ width: "20px", height: "20px", background: "#2780C4", border: "4px solid #FFFFFF", borderRadius: "9999px", boxShadow: "0px 4px 6px -4px rgba(0,0,0,0.1)" }} className="absolute left-[17%] -mt-[2px]" />
                  {/* Right Node */}
                  <div style={{ width: "20px", height: "20px", background: "#2780C4", border: "4px solid #FFFFFF", borderRadius: "9999px", boxShadow: "0px 4px 6px -4px rgba(0,0,0,0.1)" }} className="absolute left-[67%] -mt-[2px]" />
                </div>
              </div>

              {/* Right Slider: Property Size */}
              <div className="w-full md:w-[352px] flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#45474C" }} className="text-sm md:text-base">
                    Property Size (Acres)
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0F2F4C" }} className="text-xs md:text-sm">
                    10 – 45 Acres
                  </span>
                </div>

                {/* Track visual block */}
                <div className="relative w-full h-6 flex items-center">
                  <div style={{ height: "6px", background: "#E7E8E9", borderRadius: "9999px" }} className="absolute inset-x-0" />
                  <div style={{ height: "6px", background: "#2780C4", borderRadius: "9999px" }} className="absolute left-[15%] right-[40%]" />
                  
                  {/* Left Node */}
                  <div style={{ width: "20px", height: "20px", background: "#2780C4", border: "4px solid #FFFFFF", borderRadius: "9999px" }} className="absolute left-[12%] -mt-[2px]" />
                  {/* Right Node */}
                  <div style={{ width: "20px", height: "20px", background: "#2780C4", border: "4px solid #FFFFFF", borderRadius: "9999px" }} className="absolute left-[57%] -mt-[2px]" />
                </div>
              </div>

            </div>
          </div>

          {/* 3. CURATED COLLECTIONS SELECTION GRID */}
          <div className="w-full flex flex-col md:flex-row gap-8 justify-between box-border flex-shrink-0">
            
            {/* Left Curated Section block */}
            <div className="w-full md:w-[384px] flex flex-col gap-4">
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", color: "#0F2F4C" }}>
                CURATED COLLECTIONS
              </span>

              <div className="flex flex-wrap gap-2.5 pt-1 w-full">
                {/* Button 1: Most Searched */}
                <button
                  onClick={() => toggleLeft("Most Searched")}
                  style={{
                    background: selectedLeft.includes("Most Searched") ? "#2780C4" : "#E7E8E9",
                    color: selectedLeft.includes("Most Searched") ? "#FFFFFF" : "#45474C",
                    borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, cursor: "pointer"
                  }}
                  className="px-4 py-2 text-xs md:text-sm flex-grow md:flex-grow-0 text-center"
                >
                  Most Searched
                </button>

                {/* Button 2: GLC's Exclusive */}
                <button
                  onClick={() => toggleLeft("GLC's Exclusive")}
                  style={{
                    background: selectedLeft.includes("GLC's Exclusive") ? "#2780C4" : "#E7E8E9",
                    color: selectedLeft.includes("GLC's Exclusive") ? "#FFFFFF" : "#45474C",
                    borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, cursor: "pointer"
                  }}
                  className="px-4 py-2 text-xs md:text-sm flex-grow md:flex-grow-0 text-center"
                >
                  GLC's Exclusive
                </button>

                {/* Button 3: Premium Listing */}
                <button
                  onClick={() => toggleLeft("Premium Listing")}
                  style={{
                    background: selectedLeft.includes("Premium Listing") ? "#2780C4" : "#E7E8E9",
                    color: selectedLeft.includes("Premium Listing") ? "#FFFFFF" : "#45474C",
                    borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, cursor: "pointer"
                  }}
                  className="px-4 py-2 text-xs md:text-sm flex-grow md:flex-grow-0 text-center"
                >
                  Premium Listing
                </button>

                {/* Button 4: Trending Land */}
                <button
                  onClick={() => toggleLeft("Trending Land")}
                  style={{
                    background: selectedLeft.includes("Trending Land") ? "#2780C4" : "#E7E8E9",
                    color: selectedLeft.includes("Trending Land") ? "#FFFFFF" : "#45474C",
                    borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, cursor: "pointer"
                  }}
                  className="px-4 py-2 text-xs md:text-sm flex-grow md:flex-grow-0 text-center"
                >
                  Trending Land
                </button>
              </div>
            </div>

            {/* Right Curated Section block */}
            <div className="w-full md:w-[384px] flex flex-col gap-4">
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", color: "#0F2F4C" }}>
                CURATED COLLECTIONS
              </span>

              <div className="flex flex-wrap gap-2.5 pt-1 w-full">
                {/* Button 1: Borewell */}
                <button
                  onClick={() => toggleRight("Borewell")}
                  style={{
                    background: selectedRight.includes("Borewell") ? "#2780C4" : "#E7E8E9",
                    color: selectedRight.includes("Borewell") ? "#FFFFFF" : "#45474C",
                    borderRadius: "9999px", border: "none", cursor: "pointer"
                  }}
                  className="px-4 py-2 text-xs md:text-sm flex items-center justify-center gap-2 flex-grow md:flex-grow-0 font-medium"
                >
                  <span style={{ opacity: selectedRight.includes("Borewell") ? 1 : 0.7 }}>💧</span>
                  <span>Borewell</span>
                </button>

                {/* Button 2: Silt Loam */}
                <button
                  onClick={() => toggleRight("Silt Loam")}
                  style={{
                    background: selectedRight.includes("Silt Loam") ? "#2780C4" : "#E7E8E9",
                    color: selectedRight.includes("Silt Loam") ? "#FFFFFF" : "#45474C",
                    borderRadius: "9999px", border: "none", cursor: "pointer"
                  }}
                  className="px-4 py-2 text-xs md:text-sm flex items-center justify-center gap-2 flex-grow md:flex-grow-0 font-medium"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M2 22h20v-2H2v2zm3-4h14v-2H5v2zm12-5c0-3.87-3.13-7-7-7s-7 3.13-7 7h14z"></path>
                  </svg>
                  <span>Silt Loam</span>
                </button>

                {/* Button 3: Canal Access */}
                <button
                  onClick={() => toggleRight("Canal Access")}
                  style={{
                    background: selectedRight.includes("Canal Access") ? "#2780C4" : "#E7E8E9",
                    color: selectedRight.includes("Canal Access") ? "#FFFFFF" : "#45474C",
                    borderRadius: "9999px", border: "none", cursor: "pointer"
                  }}
                  className="px-4 py-2 text-xs md:text-sm flex items-center justify-center gap-2 flex-grow md:flex-grow-0 font-medium"
                >
                  <span style={{ opacity: selectedRight.includes("Canal Access") ? 1 : 0.7 }}>🌊</span>
                  <span>Canal Access</span>
                </button>

                {/* Button 4: Red Laterite */}
                <button
                  onClick={() => toggleRight("Red Laterite")}
                  style={{
                    background: selectedRight.includes("Red Laterite") ? "#2780C4" : "#E7E8E9",
                    color: selectedRight.includes("Red Laterite") ? "#FFFFFF" : "#45474C",
                    borderRadius: "9999px", border: "none", cursor: "pointer"
                  }}
                  className="px-4 py-2 text-xs md:text-sm flex items-center justify-center gap-2 flex-grow md:flex-grow-0 font-medium"
                >
                  <span style={{ opacity: selectedRight.includes("Red Laterite") ? 1 : 0.7 }}>⛰️</span>
                  <span>Red Laterite</span>
                </button>
              </div>
            </div>

          </div>

          {/* 4. SPECIAL FEATURES SECTION (iOS Grouped List) */}
          <div className="w-full flex flex-col gap-4 box-border flex-shrink-0 pb-6">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", color: "#0F2F4C" }}>
              SPECIAL FEATURES
            </span>

            {/* iOS Box Frame */}
            <div style={{ background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.1)", borderRadius: "32px" }} className="w-full flex flex-col box-border overflow-hidden">
              
              {/* Row 1 */}
              <div 
                onClick={() => setOrganicCert(!organicCert)}
                style={{ borderBottom: "1px solid rgba(197, 198, 205, 0.15)" }}
                className="w-full py-4 px-4 md:px-6 flex justify-between items-center cursor-pointer box-border"
              >
                <div className="flex flex-col pr-2">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, color: "#0F2F4C" }} className="text-sm md:text-base">
                    Organic-Ready Certificate
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", color: "#45474C" }} className="text-xs">
                    Vetted for chemical-free soil history
                  </span>
                </div>

                {/* Switch visual rendering */}
                <div 
                  style={{
                    background: organicCert ? "linear-gradient(135deg, #ADFF2F 0%, #8FD91F 100%)" : "#E7E8E9",
                    boxShadow: organicCert ? "0px 4px 12px rgba(173, 255, 47, 0.4)" : "none",
                    transition: "all 0.2s"
                  }}
                  className={`w-12 md:w-14 h-7 md:h-8 rounded-full flex items-center px-1 flex-shrink-0 ${organicCert ? "justify-end" : "justify-start"}`}
                >
                  <div className="w-5 md:w-6 h-5 md:h-6 bg-white rounded-full shadow-xs" />
                </div>
              </div>

              {/* Row 2 */}
              <div 
                onClick={() => setWaterRights(!waterRights)}
                className="w-full py-4 px-4 md:px-6 flex justify-between items-center cursor-pointer box-border"
              >
                <div className="flex flex-col pr-2">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, color: "#0F2F4C" }} className="text-sm md:text-base">
                    Senior Water Rights
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", color: "#45474C" }} className="text-xs">
                    Guaranteed multi-season stream allocation priority
                  </span>
                </div>

                {/* Switch visual rendering */}
                <div 
                  style={{
                    background: waterRights ? "linear-gradient(135deg, #ADFF2F 0%, #8FD91F 100%)" : "#E7E8E9",
                    boxShadow: waterRights ? "0px 4px 12px rgba(173, 255, 47, 0.4)" : "none",
                    transition: "all 0.2s"
                  }}
                  className={`w-12 md:w-14 h-7 md:h-8 rounded-full flex items-center px-1 flex-shrink-0 ${waterRights ? "justify-end" : "justify-start"}`}
                >
                  <div className="w-5 md:w-6 h-5 md:h-6 bg-white rounded-full shadow-xs" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ─── ACTION CONSOLE (STICKY FOOTER bounding strictly inside bottom container edge) ─── */}
        <div 
          style={{
            position: "absolute" as const,
            height: "133px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            background: "#FFFFFF",
            borderTop: "1px solid rgba(197, 198, 205, 0.1)",
            boxShadow: "0px -10px 30px rgba(0, 0, 0, 0.03)",
            borderBottomLeftRadius: "48px",
            borderBottomRightRadius: "48px",
            zIndex: 30,
            boxSizing: "border-box",
          }}
          className="flex items-center justify-center px-4 w-full"
        >
          <button
            onClick={onClose}
            style={{
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9999px",
              border: "none",
              boxShadow: "0px 12px 24px -8px rgba(9, 20, 38, 0.4)",
              cursor: "pointer",
            }}
            className="w-full max-w-[400px] h-[50px] md:h-[57px] flex items-center justify-center"
          >
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
              className="text-base md:text-lg"
            >
              SHOW PREMIUM FARMLANDS
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
