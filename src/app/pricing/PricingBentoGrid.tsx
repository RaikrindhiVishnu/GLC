"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface PricingBentoGridProps {
  onSelectPlan?: (planId: string) => void;
}

export default function PricingBentoGrid({ onSelectPlan }: PricingBentoGridProps = {}) {
  const [selectedTier, setSelectedTier] = useState<string>("growth"); 

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
        shellRef.current.style.height = `${789 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <motion.section
      id="pricing-bento-grid"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{
        width: "100%",
        margin: "100px 0",
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
          height: "789px",
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
            height: "789px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {/* Exactly the original Hardcoded figma layout container elements with no strings modified */}
          {/* Header Titles */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", width: "100%" }}>
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
                textAlign: "center",
              }}
            >
              Premium-Investor Access
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#45474C",
                textAlign: "center",
                maxWidth: "672px",
              }}
            >
              Choose the perfect plan to accelerate your agricultural portfolio with GLC&apos;s proprietary continuous data stream, premium title pre-checks, and dedicated advisory pipelines.
            </motion.p>
          </div>

          {/* Horizontal Stack Matrix */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "32px",
              width: "1280px",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            {/* 1. STARTER TIER */}
            <div
              onClick={() => setSelectedTier("starter")}
              style={{
                flex: 1,
                height: "560px",
                background: "#FFFFFF",
                borderRadius: "42px",
                boxShadow: selectedTier === "starter" ? "0px 12px 32px rgba(39, 128, 196, 0.15)" : "0px 4px 18px rgba(0, 0, 0, 0.06)",
                border: selectedTier === "starter" ? "2px solid #2780C4" : "1px solid rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform: selectedTier === "starter" ? "translateY(-8px)" : "translateY(0)",
                boxSizing: "border-box",
              }}
            >
              {/* Top Container */}
              <div style={{ padding: "36px", display: "flex", flexDirection: "column", alignItems: "center", borderBottom: "1px solid rgba(0, 0, 0, 0.08)", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#0F2F4C", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.5 }}>
                  silver Tier
                </span>
                <h3 style={{ margin: "4px 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "26px", color: "#0F2F4C" }}>
                  Starter
                </h3>
                <div style={{ marginTop: "16px", display: "flex", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "42px", color: "#0F2F4C" }}>₹9,999</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#636363", marginLeft: "4px" }}>/yr</span>
                </div>
              </div>

              {/* Bottom Specs List */}
              <div style={{ padding: "36px", background: "#F5F5F5", display: "flex", flexDirection: "column", gap: "24px", flex: 1, justifyContent: "space-between", boxSizing: "border-box" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    "Unlock 4 Premium Farmlands",
                    "70-Year Title Search Records",
                    "PDF Export Compliance Access",
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="1.5 5.5 4.5 8.5 10.5 1.5"></polyline>
                        </svg>
                      </div>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "15px", color: "#45474C" }}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectPlan) onSelectPlan("starter");
                  }}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "9999px",
                    background: selectedTier === "starter" ? "#2780C4" : "rgba(174, 214, 239, 0.15)",
                    border: selectedTier === "starter" ? "none" : "1px solid #2780C4",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: selectedTier === "starter" ? "#FFFFFF" : "#2780C4",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    marginTop: "16px",
                  }}
                >
                  Select Starter Plan
                </button>
              </div>
            </div>

            {/* 2. GROWTH TIER (MOST POPULAR / ELEVATED) */}
            <div
              onClick={() => setSelectedTier("growth")}
              style={{
                flex: 1,
                height: "600px",
                background: "#FFFFFF",
                borderRadius: "42px",
                boxShadow: selectedTier === "growth" ? "0px 24px 48px rgba(22, 69, 115, 0.22)" : "0px 12px 32px rgba(0, 0, 0, 0.12)",
                border: selectedTier === "growth" ? "2px solid #164573" : "1px solid rgba(0, 0, 0, 0.08)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                transform: selectedTier === "growth" ? "scale(1.04) translateY(-8px)" : "scale(1.02)",
                boxSizing: "border-box",
              }}
            >
              {/* Absolute Focus Ribbon */}
              <div style={{ position: "absolute", top: "20px", right: "20px", background: "#FF5200", padding: "6px 16px", borderRadius: "9999px", zIndex: 5 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Most Popular
                </span>
              </div>

              {/* Top Container */}
              <div style={{ padding: "42px 36px", display: "flex", flexDirection: "column", alignItems: "center", borderBottom: "1px solid rgba(0, 0, 0, 0.08)", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#0F2F4C", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.5 }}>
                  gold Tier
                </span>
                <h3 style={{ margin: "4px 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "28px", color: "#0F2F4C" }}>
                  Growth
                </h3>
                <div style={{ marginTop: "16px", display: "flex", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "70px", color: "#0F2F4C", lineHeight: "70px" }}>₹19,999</span>
                </div>
              </div>

              {/* Bottom Specs List */}
              <div style={{ padding: "42px 36px", background: "#F5F5F5", display: "flex", flexDirection: "column", gap: "28px", flex: 1, justifyContent: "space-between", boxSizing: "border-box" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {[
                    "Unlocks 10 High-Yield Farmlands",
                    "Permanent GIS Map Overlays Access",
                    "Intelligence Officer Risk Assessment",
                    "Priority Document Pre-Request",
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="1.5 5.5 4.5 8.5 10.5 1.5"></polyline>
                        </svg>
                      </div>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#131600" }}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectPlan) onSelectPlan("growth");
                  }}
                  style={{
                    width: "100%",
                    padding: "18px",
                    borderRadius: "9999px",
                    background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                    border: "none",
                    boxShadow: "0px 10px 20px rgba(22, 69, 115, 0.25)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    color: "#FFFFFF",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    marginTop: "12px",
                  }}
                >
                  Select Growth Plan
                </button>
              </div>
            </div>

            {/* 3. ANNUAL PASS TIER */}
            <div
              onClick={() => setSelectedTier("annual")}
              style={{
                flex: 1,
                height: "560px",
                background: "#FFFFFF",
                borderRadius: "42px",
                boxShadow: selectedTier === "annual" ? "0px 12px 32px rgba(39, 128, 196, 0.15)" : "0px 4px 18px rgba(0, 0, 0, 0.06)",
                border: selectedTier === "annual" ? "2px solid #2780C4" : "1px solid rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform: selectedTier === "annual" ? "translateY(-8px)" : "translateY(0)",
                boxSizing: "border-box",
              }}
            >
              {/* Top Container */}
              <div style={{ padding: "36px", display: "flex", flexDirection: "column", alignItems: "center", borderBottom: "1px solid rgba(0, 0, 0, 0.08)", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#0F2F4C", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.5 }}>
                  platinum Tier
                </span>
                <h3 style={{ margin: "4px 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "26px", color: "#0F2F4C" }}>
                  Annual Pass
                </h3>
                <div style={{ marginTop: "16px", display: "flex", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "42px", color: "#0F2F4C" }}>₹29,999</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#636363", marginLeft: "4px" }}>/yr</span>
                </div>
              </div>

              {/* Bottom Specs List */}
              <div style={{ padding: "36px", background: "#F5F5F5", display: "flex", flexDirection: "column", gap: "24px", flex: 1, justifyContent: "space-between", boxSizing: "border-box" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    "Unlimited continuous unlocks for 1 year",
                    "Dedicated Intelligence Officer Support",
                    "Early Access to Verified Pre-Docs",
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="1.5 5.5 4.5 8.5 10.5 1.5"></polyline>
                        </svg>
                      </div>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "15px", color: "#45474C" }}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectPlan) onSelectPlan("annual");
                  }}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "9999px",
                    background: selectedTier === "annual" ? "#2780C4" : "rgba(174, 214, 239, 0.15)",
                    border: selectedTier === "annual" ? "none" : "1px solid #2780C4",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: selectedTier === "annual" ? "#FFFFFF" : "#2780C4",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    marginTop: "16px",
                  }}
                >
                  Select Platinum Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
