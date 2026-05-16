"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const filterButtons = [
  {
    id: "search-farmland",
    label: "Search for Farmland",
    icon: "/assets/home/FiltersScreen/Icons.svg",
    width: 50,
    height: 46.65,
  },
  {
    id: "pool-buying",
    label: "Pool Buying",
    icon: "/assets/home/FiltersScreen/Icons (1).svg",
    width: 47,
    height: 47,
  },
  {
    id: "my-assets",
    label: "My Assets",
    icon: "/assets/home/FiltersScreen/Icons (2).svg",
    width: 61,
    height: 47,
  },
  {
    id: "verification-farmland",
    label: "Verification of farmland",
    icon: "/assets/home/FiltersScreen/Icons (3).svg",
    width: 43,
    height: 47,
  },
  {
    id: "maintenance-farmland",
    label: "Maintainence of farmland",
    icon: "/assets/home/FiltersScreen/Icons (4).svg",
    width: 45,
    height: 46.6,
  },
  {
    id: "sell-land",
    label: "Sell your land",
    icon: "/assets/home/FiltersScreen/Icons (5).svg",
    width: 47,
    height: 47,
  },
];

export default function FiltersScreen() {
  const router = useRouter();
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
        shellRef.current.style.height = `${180 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="filters-section"
      style={{
        padding: "70px 0",
        width: "100%",
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
          height: "180px",
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
            height: "180px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          {/* Exactly the original Hardcoded figma layout container elements with no strings modified */}
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => {
                if (btn.id === "pool-buying") {
                  router.push("/pool-buying");
                } else if (btn.id === "search-farmland") {
                  router.push("/search");
                } else if (btn.id === "my-assets") {
                  router.push("/home/myassets");
                } else if (btn.id === "verification-farmland") {
                  router.push("/home/verification");
                } else if (btn.id === "maintenance-farmland") {
                  router.push("/home/maintenance");
                } else if (btn.id === "sell-land") {
                  router.push("/home/sellyourland");
                }
              }}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "24px",
                gap: "25px",
                width: "200px",
                height: "180px",
                background: "#FFFFFF",
                borderRadius: "32px",
                border: "1px solid #E5E7EB",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.02)",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.02)";
              }}
            >
              <div
                style={{
                  width: `${btn.width}px`,
                  height: `${btn.height}px`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Image src={btn.icon} alt={btn.label} width={btn.width} height={btn.height} priority />
              </div>
              <div
                style={{
                  width: "100%",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "20px",
                  textAlign: "center",
                  letterSpacing: "1.4px",
                  textTransform: "capitalize",
                  color: "#45474C",
                }}
              >
                {btn.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
