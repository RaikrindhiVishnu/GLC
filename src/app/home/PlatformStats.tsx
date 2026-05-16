"use client";

import React, { useEffect, useRef, useState } from "react";

export default function PlatformStats() {
  const stats = [
    { value: "₹45Cr+", label: "MANAGED ASSETS" },
    { value: "100%", label: "VERIFIED CLEAR TITLES" },
    { value: "1,200+", label: "ACTIVE INVESTORS" },
  ];

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
        shellRef.current.style.height = `${216 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="platform-stats"
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
          width: "1216px", 
          maxWidth: "100%", 
          height: "216px",
          flexShrink: 0 
        }}
      >
        <div
          ref={scalerRef}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: "-608px",
            width: "1216px",
            height: "216px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {/* Exactly the original Hardcoded figma layout container elements with no strings modified */}
          {/* Heading */}
          <h2
            style={{
              maxWidth: "700px",
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "48px",
              textAlign: "center",
              color: "#0F2F4C",
              letterSpacing: "-1.2px",
            }}
          >
            Empowering investors through data-driven agricultural assets.
          </h2>

          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "1216px",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "48px",
                    lineHeight: "60px",
                    color: "#0F2F4C",
                    textAlign: "center",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "1.4px",
                    color: "#45474C",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
