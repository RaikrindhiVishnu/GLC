"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const locations = [
  { id: "loc-tanuku", name: "Tanuku", img: "/assets/home/TrendingLocations/tanuku.svg" },
  { id: "loc-bhimavaram", name: "Bhimavaram", img: "/assets/home/TrendingLocations/bhimavaram.svg" },
  { id: "loc-rajahmundry", name: "Rajahmundary", img: "/assets/home/TrendingLocations/rajamudry.svg" },
  { id: "loc-vizag", name: "Vizag", img: "/assets/home/TrendingLocations/vizag.svg" },
];

export default function TrendingLocations() {
  const [scale, setScale] = useState(1);
  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1360;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      setScale(currentScale);
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${currentScale})`;
      }
      if (shellRef.current) {
        shellRef.current.style.height = `${402 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="trending-locations"
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "70px 0",
        background: "#FFFFFF",
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
          width: "1280px", 
          maxWidth: "100%", 
          height: "402px",
          flexShrink: 0 
        }}
      >
        <div
          ref={scalerRef}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: "-640px",
            width: "1280px",
            height: "402px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Exactly the original Hardcoded figma layout container elements with no strings modified */}
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "1280px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "24px",
                lineHeight: "40px",
                color: "#0F2F4C",
              }}
            >
              Top Selling Locations
            </h2>
            <button
              style={{
                background: "none",
                border: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "18px",
                lineHeight: "40px",
                color: "#0F2F4C",
                cursor: "pointer",
              }}
            >
              View All
            </button>
          </div>

          {/* Cards Container */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              width: "1280px",
              overflowX: "auto",
              paddingBottom: "10px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              #trending-locations ::-webkit-scrollbar { display: none; }
            `}} />
            {locations.map((loc) => (
              <div
                key={loc.id}
                style={{
                  position: "relative",
                  width: "320px",
                  height: "320px",
                  minWidth: "320px",
                  borderRadius: "48px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {/* Image + Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))",
                    zIndex: 1,
                  }}
                />
                <Image
                  src={loc.img}
                  alt={loc.name}
                  fill
                  style={{ objectFit: "cover" }}
                />

                {/* Location Name */}
                <div
                  style={{
                    position: "absolute",
                    left: "24px",
                    top: "268px",
                    zIndex: 2,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "#FFFFFF",
                  }}
                >
                  {loc.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
