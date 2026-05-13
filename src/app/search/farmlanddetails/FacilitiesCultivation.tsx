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
        height: "254px",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        flexShrink: 0,
      }}
    >
      {/* Left Card: Connectivity Hub */}
      <div
        style={{
          flex: 1,
          height: "100%",
          background: "#FFFFFF",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "48px",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Header Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Blue square Icon Wrapper */}
          <div
            style={{
              width: "24px",
              height: "24px",
              background: "#2780C4",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
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

        {/* List Rows Container */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Row 1 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "12px",
              borderBottom: "1px solid #E1E3E4",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                color: "#45474C",
              }}
            >
              Railway station
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                color: "#0F2F4C",
              }}
            >
              18km
            </span>
          </div>

          {/* Row 2 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "12px",
              borderBottom: "1px solid #E1E3E4",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                color: "#45474C",
              }}
            >
              Commercial airport
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                color: "#0F2F4C",
              }}
            >
              45km
            </span>
          </div>

          {/* Row 3 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                color: "#45474C",
              }}
            >
              Highway junction
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                color: "#0F2F4C",
              }}
            >
              2.5km
            </span>
          </div>
        </div>
      </div>

      {/* Right Card: Cultivation Ledger */}
      <div
        style={{
          flex: 1,
          height: "100%",
          background: "#FFFFFF",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "48px",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Header Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Blue square Icon Wrapper */}
          <div
            style={{
              width: "24px",
              height: "24px",
              background: "#2780C4",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
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

        {/* List Rows Container */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Row 1: Active Crop */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#0F2F4C",
                  maxWidth: "130px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {currentCrop.split("/")[0] || currentCrop}
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "9px",
                  color: "#45474C",
                  textTransform: "uppercase",
                }}
              >
                PRIMARY CANOPY
              </span>
            </div>

            {/* Custom Light Green Status Pill */}
            <div
              style={{
                background: "rgba(188, 210, 37, 0.2)",
                borderRadius: "9999px",
                padding: "4px 12px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                color: "#424B00",
              }}
            >
              ACTIVE
            </div>
          </div>

          {/* Row 2: Secondary / Ready Crop */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#0F2F4C",
                  maxWidth: "130px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Table Grapes
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "9px",
                  color: "#45474C",
                  textTransform: "uppercase",
                }}
              >
                INTERCROPPED
              </span>
            </div>

            {/* Custom Gray Status Pill */}
            <div
              style={{
                background: "#EDEEEF",
                borderRadius: "9999px",
                padding: "4px 12px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                color: "#45474C",
              }}
            >
              READY
            </div>
          </div>

          {/* Row 3: Targeted Future Crop */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#0F2F4C",
                  maxWidth: "130px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {potentialCrop.split("&")[0] || potentialCrop}
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "9px",
                  color: "#45474C",
                  textTransform: "uppercase",
                }}
              >
                POTENTIAL EXPANSION
              </span>
            </div>

            {/* Custom Blue Status Pill */}
            <div
              style={{
                background: "rgba(105, 182, 254, 0.2)",
                borderRadius: "9999px",
                padding: "4px 12px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "10px",
                color: "#004673",
              }}
            >
              TARGET
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
