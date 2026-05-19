"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TransformingLegacyGallery() {
  const [scale, setScale] = useState(1);
  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1260;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      setScale(currentScale);
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${currentScale})`;
      }
      if (shellRef.current) {
        shellRef.current.style.height = `${318 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{
        width: "100%",
        margin: "60px 0 120px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <h2
        className="m-0 font-jakarta font-extrabold text-[28px] md:text-[36px] text-[#001F3F] text-center flex flex-wrap justify-center gap-x-2"
      >
        {"Transforming Land into Legacy".split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Gallery Carousel Array */}
      <div 
        ref={shellRef} 
        style={{ 
          position: "relative", 
          width: "1164px", 
          maxWidth: "100%", 
          height: "318px",
          flexShrink: 0 
        }}
      >
        <div
          ref={scalerRef}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: "-582px",
            width: "1164px",
            height: "318px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            boxSizing: "border-box",
          }}
        >
          {/* Card 1: Action Trigger "Involve" */}
          <div
            style={{
              width: "170px",
              height: "138px",
              borderRadius: "20px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "2px solid #FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", letterSpacing: "0.5px" }}>
              Involve
            </span>
          </div>

          {/* Photo Block 2 */}
          <div
            style={{
              width: "256px",
              height: "193px",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
              background: "#FFFFFF",
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/search/image2.4.svg"
              alt="Farmland high angle view"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Focal Vertical Tower Photo Block 3 */}
          <div
            style={{
              width: "220px",
              height: "318px",
              borderRadius: "52px",
              overflow: "hidden",
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.18)",
              border: "4px solid #FFFFFF",
              background: "#FFFFFF",
              boxSizing: "border-box",
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/search/image3.3.svg"
              alt="Golden premium yielding view"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Photo Block 4 */}
          <div
            style={{
              width: "252px",
              height: "193px",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
              background: "#FFFFFF",
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/search/image2.6.svg"
              alt="Agronomy ongoing working harvest"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Card 5: Action Trigger "Impact" */}
          <div
            style={{
              width: "170px",
              height: "138px",
              borderRadius: "20px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "2px solid #FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", letterSpacing: "0.5px" }}>
              Impact
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
