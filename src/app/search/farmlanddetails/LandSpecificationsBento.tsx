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
    icon: <img src="/assets/search/Background (17).svg" alt="Total Area" width={48} height={48} />,
  },
  {
    label: "BORE DEPTH",
    value: boreDepthProp,
    icon: <img src="/assets/search/Background (18).svg" alt="Bore Depth" width={48} height={48} />,
  },
  {
    label: "EFFICIENCY",
    value: efficiencyProp,
    icon: <img src="/assets/search/Background (19).svg" alt="Efficiency" width={48} height={48} />,
  },
  {
    label: "SOIL QUALITY",
    value: soilQualityProp,
    icon: <img src="/assets/search/Background (20).svg" alt="Soil Quality" width={48} height={48} />,
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
            style={{
              background: item.label === "SOIL QUALITY" ? "url('/assets/compareassets/leaf.svg') center/cover no-repeat" : "#FFFFFF",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
              borderRadius: "32px",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              minHeight: "130px",
              color: item.label === "SOIL QUALITY" ? "#FFFFFF" : "inherit"
            }}
            className="lg:rounded-[48px] lg:p-6"
          >
            <div style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: item.label === "SOIL QUALITY" ? "rgba(255,255,255,0.7)" : "#45474C" }}>{item.label}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "28px", color: item.label === "SOIL QUALITY" ? "#FFFFFF" : "#0F2F4C" }}>{item.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
