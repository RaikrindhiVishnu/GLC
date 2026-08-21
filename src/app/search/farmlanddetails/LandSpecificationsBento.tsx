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
    icon: <img src="/assets/compareassets/Background (44).svg" alt="Total Area" width={40} height={40} />,
    isHighlighted: true,
  },
  {
    label: "WATER SOURCE",
    value: boreDepthProp,
    icon: <img src="/assets/compareassets/Background (45).svg" alt="Water Source" width={40} height={40} />,
    isHighlighted: false,
  },
  {
    label: "GROUND WATER",
    value: efficiencyProp,
    icon: <img src="/assets/compareassets/Background (46).svg" alt="Ground Water" width={40} height={40} />,
    isHighlighted: false,
  },
  {
    label: "SOIL TYPE",
    value: soilQualityProp,
    icon: <img src="/assets/compareassets/Background (47).svg" alt="Soil Type" width={40} height={40} />,
    isHighlighted: true,
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
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
      <motion.h2
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "11px", lineHeight: "13px", letterSpacing: "0.55px", textTransform: "uppercase", color: "#575E70", margin: 0 }}
      >
        LAND SPECIFICATIONS
      </motion.h2>

      {/* 2-col on mobile, 4-col on sm+ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-[795.2px]">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              background: item.isHighlighted ? "rgba(39, 128, 196, 0.1)" : "#FFFFFF",
              boxShadow: item.isHighlighted 
                ? "0px 2px 16px rgba(0, 0, 0, 0.024), inset 0px 1px 0px rgba(255, 255, 255, 0.5)" 
                : "0px 2px 16px rgba(0, 0, 0, 0.024), inset 0px 1px 0px rgba(255, 255, 255, 0.5)",
              borderRadius: "32px",
              padding: "24px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              minHeight: "150px",
              width: "186.8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", width: "100%" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#0F2F4C", letterSpacing: "-0.45px" }}>{item.value}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase", color: item.isHighlighted ? "rgba(39, 128, 196, 0.7)" : "#0F2F4C" }}>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
