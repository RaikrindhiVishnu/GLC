"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VerificationStandardsSection() {
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
        shellRef.current.style.height = `${576 * currentScale}px`;
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
        margin: "80px 0",
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
          height: "576px",
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
            height: "576px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "80px",
            boxSizing: "border-box",
          }}
        >
          {/* Exactly the original Hardcoded figma layout container elements with no strings modified */}
          {/* Left Visual Bento Composition mapped perfectly to the designated Pricing SVG suite */}
          <div style={{ position: "relative", width: "568px", height: "576px", flexShrink: 0 }}>
            {/* Top expansive block */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "320px",
                borderRadius: "32px",
                overflow: "hidden",
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.15)",
                background: "#FFFFFF",
              }}
            >
              <img
                src="/assets/pricing/pricing3.1.svg"
                alt="Analytics standard graph preview"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Bottom Left inset block */}
            <div
              style={{
                position: "absolute",
                top: "336px",
                left: 0,
                width: "276px",
                height: "240px",
                borderRadius: "32px",
                overflow: "hidden",
                boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
                background: "#FFFFFF",
              }}
            >
              <img
                src="/assets/pricing/pricing3.2.svg"
                alt="Satellite imagery field overlay"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Bottom Right inset block */}
            <div
              style={{
                position: "absolute",
                top: "336px",
                right: 0,
                width: "276px",
                height: "240px",
                borderRadius: "32px",
                overflow: "hidden",
                boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
                background: "#FFFFFF",
              }}
            >
              <img
                src="/assets/pricing/pricing3.3.svg"
                alt="Clear title document seal"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* Right Feature Itemized Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px", flex: 1, boxSizing: "border-box" }}>
            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "36px",
                color: "#131600",
                letterSpacing: "-0.9px",
              }}
            >
              The GLC Verification Standard
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {/* Standard 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#E7E8E9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#091426" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h4 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#131600" }}>
                    70 - Year Title Chain
                  </h4>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>
                    Deep-dive land verification reports mapping every clear title trace to guarantee true owner integrity and undisputed agricultural zoning permissions.
                  </p>
                </div>
              </motion.div>

              {/* Standard 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#E7E8E9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#091426" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <circle cx="12" cy="11" r="3"></circle>
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h4 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#131600" }}>
                    Intelligence Officer Checks
                  </h4>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>
                    Local ground-level intelligence gathering to verify physical site boundaries, true neighborhood sentiment, and local access network constraints.
                  </p>
                </div>
              </motion.div>

              {/* Standard 3 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#E7E8E9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#091426" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="6.5"></line>
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h4 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#131600" }}>
                    Agronomy Reports
                  </h4>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>
                    Scientific soil analyses, water table projections, active yielding capacity forecasts, and long-term biological viability metrics given directly from native tests.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
