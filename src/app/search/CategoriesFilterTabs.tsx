"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchContext } from "./SearchContext";

export default function CategoriesFilterTabs() {
  const { filters, setFilters, masterData, geoData } = useSearchContext();

  // Generate chips dynamically based on filters
  const generateChips = () => {
    const chips: { id: string, label: string, weight: number, onDismiss: () => void }[] = [];

    // State
    if (filters.state_id && filters.state_id.length > 0) {
      const stateId = filters.state_id[0];
      const stateName = geoData?.states?.slice(1)?.find(s => s[0] === stateId)?.[3] || `State ${stateId}`;
      chips.push({
        id: `state-${stateId}`,
        label: stateName,
        weight: 700,
        onDismiss: () => setFilters({ ...filters, state_id: [], district_id: [], mandal_id: [] })
      });
    }

    // District
    if (filters.district_id && filters.district_id.length > 0) {
      const districtId = filters.district_id[0];
      const districtName = geoData?.districts?.slice(1)?.find(d => d[0] === districtId)?.[3] || `District ${districtId}`;
      chips.push({
        id: `district-${districtId}`,
        label: districtName,
        weight: 500,
        onDismiss: () => setFilters({ ...filters, district_id: [], mandal_id: [] })
      });
    }

    // Mandal
    if (filters.mandal_id && filters.mandal_id.length > 0) {
      const mandalId = filters.mandal_id[0];
      const mandalName = geoData?.mandals?.slice(1)?.find(m => m[0] === mandalId)?.[3] || `Mandal ${mandalId}`;
      chips.push({
        id: `mandal-${mandalId}`,
        label: mandalName,
        weight: 500,
        onDismiss: () => setFilters({ ...filters, mandal_id: [] })
      });
    }

    // Tags
    if (filters.tag_ids && filters.tag_ids.length > 0) {
      filters.tag_ids.forEach(tagId => {
        const tagName = masterData?.data?.tagResult?.find((t: any) => t.id === tagId)?.name || `Tag ${tagId}`;
        chips.push({
          id: `tag-${tagId}`,
          label: tagName,
          weight: 500,
          onDismiss: () => setFilters({
            ...filters,
            tag_ids: filters.tag_ids?.filter(id => id !== tagId)
          })
        });
      });
    }

    return chips;
  };

  const activeChips = generateChips();

  if (activeChips.length === 0) return null;

  return (
    <div style={{ width: "100%", marginTop: "30px", marginBottom: "10px" }}>

      {/* ─── STAGGERED LIQUID GLASS CHIPS HORIZONTAL ROW ─── */}
      {/* Implements expanded vertical bounding container padding (10px 60px) to prevent native scroll clipping box cutoff */}
      <section
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="px-4 sm:px-6 lg:px-15 py-2.5"
      >
        {activeChips.map((chip, i) => (
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
              onClick={(e) => {
                e.stopPropagation();
                chip.onDismiss();
              }}
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
