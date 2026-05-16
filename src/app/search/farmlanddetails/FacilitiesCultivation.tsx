"use client";

import React from "react";

interface FacilitiesCultivationProps {
  currentCrop?: string;
  potentialCrop?: string;
}

export default function FacilitiesCultivation({
  currentCrop = "Mango Grove",
  potentialCrop = "Superfood Berry Clusters",
}: FacilitiesCultivationProps) {
  return (
    <div
      style={{
        width: "764.41px",
        display: "flex",
        justifyContent: "space-between",
        gap: "24px",
        flexShrink: 0,
      }}
    >
      {/* Left Card: Connectivity Hub */}
      <div
        style={{
          flex: 1,
          background: "#FFFFFF",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "48px",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Header Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "24px",
              height: "23px",
              background: "#2780C4",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              color: "#0F2F4C",
            }}
          >
            Connectivity Hub
          </span>
        </div>

        {/* List of Data Points */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Item 1 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid #E1E3E4" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#45474C" }}>
              Railway Station
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>
              12km
            </span>
          </div>
          {/* Item 2 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid #E1E3E4" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#45474C" }}>
              Domestic Airport
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>
              45km
            </span>
          </div>
          {/* Item 3 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#45474C" }}>
              Highway Access
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>
              2.5km
            </span>
          </div>
        </div>
      </div>

      {/* Right Card: Cultivation Ledger */}
      <div
        style={{
          flex: 1,
          background: "#FFFFFF",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "48px",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Header Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "18px",
              height: "20px",
              background: "#2780C4",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              color: "#0F2F4C",
            }}
          >
            Cultivation Ledger
          </span>
        </div>

        {/* List of Crops */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Item 1 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>
                Mango Orchard
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "#45474C", textTransform: "uppercase" }}>
                CURRENT STATUS
              </span>
            </div>
            <div style={{ background: "rgba(188, 210, 37, 0.2)", borderRadius: "9999px", padding: "4px 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#424B00" }}>
              PRODUCING
            </div>
          </div>
          {/* Item 2 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>
                Teak, Papaya
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "#45474C", textTransform: "uppercase" }}>
                POTENTIAL YIELD
              </span>
            </div>
            <div style={{ background: "#EDEEEF", borderRadius: "9999px", padding: "4px 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#45474C" }}>
              READY
            </div>
          </div>
          {/* Item 3 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>
                High-density Dragon Fruit
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "#45474C", textTransform: "uppercase" }}>
                FUTURE EXPANSION
              </span>
            </div>
            <div style={{ background: "rgba(105, 182, 254, 0.2)", borderRadius: "9999px", padding: "4px 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#004673" }}>
              PLANNED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
