"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface PricingBentoGridProps {
  onSelectPlan?: (planId: string) => void;
}

export default function PricingBentoGrid({ onSelectPlan }: PricingBentoGridProps = {}) {
  const [mobileIndex, setMobileIndex] = useState(1); // start at Growth (index 1)
  const dragStartX = useRef<number>(0);


  return (
    <motion.section
      id="pricing-bento-grid"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ width: "100%", overflow: "hidden", boxSizing: "border-box" }}
    >

      {/* ══════════════════════════════════════════════ */}
      {/* MOBILE LAYOUT (< lg) — peek carousel         */}
      {/* ══════════════════════════════════════════════ */}
      <div className="block lg:hidden w-full py-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center px-6 mb-8">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="m-0 font-jakarta font-bold text-[24px] text-[#131600]"
            style={{ letterSpacing: "-0.6px" }}
          >
            Premium-Investor Access
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="m-0 font-jakarta font-normal text-[14px] leading-relaxed text-[#45474C]"
          >
            Select a subscription model that fits your portfolio scale. From single-asset insights to global agricultural surveillance.
          </motion.p>
        </div>

        {/* Peek carousel track */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={(e) => { dragStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const delta = dragStartX.current - e.changedTouches[0].clientX;
            if (delta > 50 && mobileIndex < 2) {
              const next = mobileIndex + 1;
              setMobileIndex(next);
                          } else if (delta < -50 && mobileIndex > 0) {
              const prev = mobileIndex - 1;
              setMobileIndex(prev);
                          }
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
              "--mi": mobileIndex,
              transform: "translateX(calc(var(--mi) * -1 * (100vw - 64px)))",
            } as React.CSSProperties}
          >
            {[
              {
                id: "starter", tier: "SILVER TIER", name: "Starter", price: "₹9,999", suffix: "/yr",
                features: ["Unlock 4 Premium Farmlands", "70-Year Title Search Records", "PDF Export Compliance Access"],
                popular: false,
              },
              {
                id: "growth", tier: "GOLD TIER", name: "Growth", price: "₹19,999", suffix: "",
                features: ["Unlocks 10 Farmlands", "Permanent GIS Access", "IO Risk Assessment", "Priority Document Request"],
                popular: true,
              },
              {
                id: "annual", tier: "PLATINUM TIER", name: "Annual Pass", price: "₹29,999", suffix: "/yr",
                features: ["Unlimited Unlocks for 1 Year", "Dedicated IO Support", "Early Access to Pre-Docs"],
                popular: false,
              },
            ].map((plan, i) => {
              const isActive = i === mobileIndex;
              return (
                <div
                  key={plan.id}
                  onClick={() => setMobileIndex(i)}
                  style={{
                    width: "calc(100vw - 80px)",
                    flexShrink: 0,
                    borderRadius: "28px",
                    overflow: "hidden",
                    background: "#FFFFFF",
                    border: isActive ? "2px solid #164573" : "1px solid rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    opacity: isActive ? 1 : 0.65,
                    transition: "opacity 0.4s ease, border 0.4s ease",
                  }}
                >
                  {/* Most Popular banner */}
                  {plan.popular && (
                    <div style={{ background: "#0F2F4C", padding: "12px 24px", textAlign: "center" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", letterSpacing: "0.3px" }}>Most Popular</span>
                    </div>
                  )}

                  {/* Price block */}
                  <div style={{ padding: "24px 24px 20px", textAlign: "center", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "10px", color: "#0F2F4C", textTransform: "uppercase", letterSpacing: "1.2px", opacity: 0.5 }}>{plan.tier}</span>
                    <h3 style={{ margin: "4px 0 14px", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "24px", color: "#0F2F4C" }}>{plan.name}</h3>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "3px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "42px", lineHeight: 1, color: "#0F2F4C" }}>{plan.price}</span>
                      {plan.suffix && <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "14px", color: "#636363" }}>{plan.suffix}</span>}
                    </div>
                  </div>

                  {/* Features + CTA */}
                  <div style={{ padding: "20px 24px 24px", background: "#F7F8F9", display: "flex", flexDirection: "column", gap: "14px" }}>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>{feat}</span>
                      </div>
                    ))}
                    <button
                      onClick={(e) => { e.stopPropagation(); if (onSelectPlan) onSelectPlan(plan.id); }}
                      style={{
                        marginTop: "6px", width: "100%", padding: "14px", borderRadius: "9999px",
                        background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                        border: "none",
                        fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "15px",
                        color: "#FFFFFF", cursor: "pointer",
                        boxShadow: "0px 8px 20px rgba(22,69,115,0.25)",
                      }}
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot pagination */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setMobileIndex(i)}
              style={{
                width: i === mobileIndex ? "20px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === mobileIndex ? "#0F2F4C" : "#D1D5DB",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════ */}
      {/* DESKTOP LAYOUT (>= lg)                        */}
      {/* ══════════════════════════════════════════════ */}
      <div className="hidden lg:flex flex-col items-center" style={{ margin: "80px 0", gap: "80px" }}>

        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="m-0 font-jakarta font-bold text-[36px] text-[#131600]"
            style={{ letterSpacing: "-0.9px" }}
          >
            Premium-Investor Access
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="m-0 font-jakarta font-normal text-[16px] leading-relaxed text-[#45474C] max-w-[672px]"
          >
            Select a subscription model that fits your portfolio scale. From single-asset insights to global agricultural surveillance.
          </motion.p>
        </div>

        {/* Cards */}
        <div
          className="flex items-center justify-center gap-0 w-full"
          style={{ maxWidth: "1153.84px", minHeight: "642px" }}
        >
          {[
            {
              id: "starter", tier: "SILVER TIER", name: "Starter", price: "₹9,999", suffix: "/yr",
              features: ["Unlock 4 Farmlands", "70-Year Title Search", "PDF Export Access"],
              highlight: false, popular: false,
            },
            {
              id: "growth", tier: "GOLD TIER", name: "Growth", price: "₹19,999", suffix: "",
              features: ["Unlocks 10 Farmlands", "Permanent GIS Access", "IO Risk Assessment", "Priority Document Request"],
              highlight: true, popular: true,
            },
            {
              id: "annual", tier: "PLATINUM TIER", name: "Annual Pass", price: "₹29,999", suffix: "/yr",
              features: ["Unlimited unlocks for 1 year", "Dedicated Intelligence Officer", "Early Access to Pre-Docs"],
              highlight: false, popular: false,
            },
          ].map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              onClick={() => {}}
              className={`relative flex flex-col w-full overflow-hidden transition-all duration-500 cursor-pointer bg-white ${
                tier.highlight
                  ? "max-w-[483.7px] min-h-[642px] z-20 shadow-[0px_30px_60px_rgba(0,0,0,0.12)] rounded-[42px] border-[4px] border-[#164573]"
                  : i === 0
                    ? "max-w-[335px] min-h-[428px] z-10 shadow-[0px_15px_40px_rgba(0,0,0,0.08)] rounded-l-[42px] rounded-r-none border border-[#F2F2F2]"
                    : "max-w-[335px] min-h-[428px] z-10 shadow-[0px_15px_40px_rgba(0,0,0,0.08)] rounded-r-[42px] rounded-l-none border border-[#F2F2F2]"
              }`}
            >
              {/* Most popular banner */}
              {tier.popular && (
                <div className="bg-[#164573] py-5 text-center">
                  <span className="text-[20px] font-semibold text-white font-jakarta">Most popular</span>
                </div>
              )}

              {/* Price header */}
              <div className={`flex flex-col items-center justify-center bg-white px-10 ${tier.highlight ? "py-10" : "py-8"}`}>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#0F2F4C] opacity-40 font-jakarta">{tier.tier}</span>
                <h3 className={`mt-2 font-bold text-[#0F2F4C] font-jakarta ${tier.highlight ? "text-[32px]" : "text-[26px]"}`}>{tier.name}</h3>
                <div className={`mt-4 font-extrabold text-[#0F2F4C] font-jakarta leading-none ${tier.highlight ? "text-[80px]" : "text-[52px]"}`}>
                  {tier.price}
                </div>
              </div>

              {/* Features + CTA */}
              <div className={`flex-1 bg-[#F8F9FA] px-8 lg:px-10 flex flex-col ${tier.highlight ? "py-12" : "py-10"}`}>
                <ul className={`flex-1 ${tier.highlight ? "space-y-6" : "space-y-5"}`}>
                  {tier.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, filter: "blur(8px)" }}
                      whileInView={{ opacity: 1, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: j * 0.08 }}
                      className="flex items-center gap-4"
                    >
                      <svg className="w-5 h-5 text-[#2780C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[16px] font-medium text-[#45474C] font-jakarta">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex justify-center">
                  {tier.highlight ? (
                    <button
                      onClick={(e) => { e.stopPropagation(); if (onSelectPlan) onSelectPlan(tier.id); }}
                      className="w-[380px] h-[52px] rounded-[30px] text-[18px] font-semibold text-white shadow-lg flex items-center justify-center cursor-pointer"
                      style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)" }}
                    >
                      Select Plan
                    </button>
                  ) : (
                    <button
                      onClick={(e) => { e.stopPropagation(); if (onSelectPlan) onSelectPlan(tier.id); }}
                      className="w-[240px] h-[52px] rounded-[30px] border border-[#2780C4] bg-[#AED6EF1A] text-[18px] font-semibold text-[#2780C4] hover:bg-[#2780C4] hover:text-white transition-all flex items-center justify-center cursor-pointer"
                    >
                      Select Plan
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
