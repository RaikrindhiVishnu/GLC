"use client";

import React from "react";
import { motion } from "framer-motion";

interface LandSpecificationsBentoProps {
  areaProp?: string;
  boreDepthProp?: string;
  efficiencyProp?: string;
  soilQualityProp?: string;
}

const specs = (areaProp: string, boreDepthProp: string, efficiencyProp: string, soilQualityProp: string) => [
  {
    label: "TOTAL AREA",
    value: areaProp,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z" />
        <polyline points="15 3 15 8 21 8" />
        <path d="M7 17h5" /><path d="M7 13h10" /><path d="M7 9h4" />
      </svg>
    ),
  },
  {
    label: "BORE DEPTH",
    value: boreDepthProp,
    icon: (
      <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    label: "EFFICIENCY",
    value: efficiencyProp,
    icon: (
      <svg width="20" height="13" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "SOIL QUALITY",
    value: soilQualityProp,
    icon: (
      <svg width="18" height="19" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

export default function LandSpecificationsBento({
  areaProp = "320 Acres",
  boreDepthProp = "100m",
  efficiencyProp = "High Yield",
  soilQualityProp = "Red Laterite",
}: LandSpecificationsBentoProps) {
  const items = specs(areaProp, boreDepthProp, efficiencyProp, soilQualityProp);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>
      <motion.h2
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.6px", color: "#0F2F4C", margin: 0 }}
      >
        Land Specifications
      </motion.h2>

      {/* 2-col on mobile, 4-col on sm+ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{ background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "20px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px", minHeight: "130px" }}
            className="lg:rounded-[48px] lg:p-6"
          >
            <div style={{ width: "48px", height: "48px", background: "#CFE5FF", borderRadius: "32px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>{item.label}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "28px", color: "#0F2F4C" }}>{item.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
