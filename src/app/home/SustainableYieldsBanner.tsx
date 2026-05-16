"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SustainableYieldsBanner() {
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
        shellRef.current.style.height = `${500 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="sustainable-yields"
      style={{
        width: "100%",
        margin: "70px 0",
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
          height: "500px",
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
            height: "500px",
            transformOrigin: "top center",
            willChange: "transform",
          }}
        >
          {/* Exactly the original Hardcoded figma layout container elements with no strings modified */}
          <div
            style={{
              width: "1280px",
              height: "500px",
              position: "relative",
              borderRadius: "48px",
              overflow: "hidden",
              boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img
              src="/assets/home/SustainableYieldsBanner/yieldsbanner.svg"
              alt="Sustainable Practices"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(0deg, #131600 0%, rgba(19, 22, 0, 0.4) 50%, rgba(19, 22, 0, 0) 100%)",
                zIndex: 1,
              }}
            />

            {/* Content Container */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "64px",
                zIndex: 2,
              }}
            >
              <h2
                style={{
                  maxWidth: "585px",
                  margin: "0 0 24px 0",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "48px",
                  lineHeight: "48px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Sustainable Practices for Generational Wealth
              </h2>

              <button
                onClick={() => router.push("/home/organicfarmingsetup")}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 40px",
                  width: "265px",
                  height: "54px",
                  background: "none",
                  border: "3px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "9999px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 1)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.background = "none";
                }}
              >
                Organic Farming Setup
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
