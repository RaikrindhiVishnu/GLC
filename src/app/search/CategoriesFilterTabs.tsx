"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Complete pristine list of 7 Staggered Liquid Glass Chips mapped exactly to user input tokens
const initialGlassChips = [
  { id: "chip-1", label: "Vizag", weight: 700 },
  { id: "chip-2", label: "Andhra Pradesh", weight: 500 },
  { id: "chip-3", label: "1 - 5 Cr", weight: 500 },
  { id: "chip-4", label: "20 Acres", weight: 500 },
  { id: "chip-5", label: "GLC’s Exclusive", weight: 500 },
  { id: "chip-6", label: "Canal Access", weight: 500 },
  { id: "chip-7", label: "Senior Water Rights", weight: 500 },
];

export default function CategoriesFilterTabs() {
  const [glassChips, setGlassChips] = useState(initialGlassChips);

  const dismissChip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setGlassChips((prev) => prev.filter((chip) => chip.id !== id));
  };

  return (
    <div style={{ width: "100%", marginTop: "30px", marginBottom: "10px" }}>

      {/* ─── STAGGERED LIQUID GLASS CHIPS HORIZONTAL ROW ─── */}
      {/* Implements expanded vertical bounding container padding (10px 60px) to prevent native scroll clipping box cutoff */}
      <section
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "10px 60px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {glassChips.map((chip, i) => (
          <motion.div
            key={chip.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px 20px",
              gap: "8px",
              height: "42px",
              background: "#FFFFFF",
              border: "1px solid rgba(22, 69, 115, 0.4)",
              boxShadow: "0px 4px 12px rgba(22, 69, 115, 0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: "9999px",
              flexShrink: 0,
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              // Self-contained smooth background tint transition avoiding external translation bounds cutoff entirely
              e.currentTarget.style.background = "#F4F7FA";
              e.currentTarget.style.borderColor = "rgba(22, 69, 115, 0.8)";
              e.currentTarget.style.boxShadow = "0px 6px 16px rgba(22, 69, 115, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
              e.currentTarget.style.borderColor = "rgba(22, 69, 115, 0.4)";
              e.currentTarget.style.boxShadow = "0px 4px 12px rgba(22, 69, 115, 0.05)";
            }}
          >
            {/* Chip Text Label */}
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: chip.weight,
                fontSize: "14px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#164573",
                transition: "color 0.2s ease",
              }}
            >
              {chip.label}
            </span>

            {/* Dismiss Cross Trigger vector (maki:cross) */}
            <button
              onClick={(e) => dismissChip(chip.id, e)}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              aria-label={`Remove ${chip.label} filter`}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#164573" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1L11 11M11 1L1 11" />
              </svg>
            </button>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
