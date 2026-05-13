"use client";

import React from "react";
import Image from "next/image";

export default function VerificationPipelineFeed() {
  return (
    <section
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px 32px 64px",
        width: "1280px",
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* ─── FEED HEADER ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px",
          width: "100%",
          marginBottom: "48px",
        }}
      >
        <h2
          style={{
            margin: "0 0 12px 0",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "48px",
            lineHeight: "1.2",
            letterSpacing: "-1.5px",
            color: "#131600",
          }}
        >
          Verification Pipeline
        </h2>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "32px",
            color: "rgba(69, 71, 76, 0.8)",
            maxWidth: "672px", // Enforcing design line breaks natively
          }}
        >
          Comprehensive asset auditing for Green Land Capital. Real-time status of land acquisition and agronomy certification.
        </span>
      </div>

      {/* ─── SPLIT-CONSOLE WRAPPER FRAME ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          gap: "48px",
        }}
      >
        {/* LEFT COLUMN: 4-Tier Pipeline Tracker (Fluid Content Box) */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "40px",
            background: "#FFFFFF",
            border: "1px solid rgba(197, 198, 205, 0.15)",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "32px",
            width: "800px",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* Timeline Stack Container */}
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            
            {/* STEP 1: Initial Document Screening */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "24px", width: "100%" }}>
              {/* Vertical Icon Node Slot */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                {/* Cleared Check Circle */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#C5DFFF",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Inline Check SVG */}
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1.5 5.5 5 9 12.5 1.5"></polyline>
                  </svg>
                </div>
                {/* Connecting Track Strip */}
                <div style={{ width: "2px", height: "72px", background: "#AED6EF", marginTop: "8px" }} />
              </div>

              {/* Data Row Info */}
              <div style={{ display: "flex", flexDirection: "column", paddingTop: "4px", paddingBottom: "24px", flexGrow: 1 }}>
                <h3 style={{ margin: "0 0 4px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C" }}>
                  Initial Document Screening (Cleared)
                </h3>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "#45474C" }}>
                  KYC, Title Deeds, and Encumbrance Certificates verified.
                </span>
              </div>
            </div>

            {/* STEP 2: Ground & Agronomy Audit */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "24px", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#C5DFFF",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1.5 5.5 5 9 12.5 1.5"></polyline>
                  </svg>
                </div>
                <div style={{ width: "2px", height: "100px", background: "#AED6EF", marginTop: "8px" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", paddingTop: "4px", paddingBottom: "24px", flexGrow: 1 }}>
                <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C" }}>
                  Ground & Agronomy Audit (Cleared)
                </h3>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "#45474C", marginBottom: "12px" }}>
                  Physical site inspection and soil quality analysis completed by external partners.
                </span>

                {/* Embedded download link file preview button */}
                <button
                  onClick={() => alert("Downloading secure agronomy analysis base documents...")}
                  style={{
                    boxSizing: "border-box",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "8px 16px",
                    gap: "8px",
                    width: "fit-content",
                    background: "#F3F4F5",
                    border: "1px solid rgba(197, 198, 205, 0.3)",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#0F2F4C" }}>
                    Download Soil & Water Report (PDF)
                  </span>
                </button>
              </div>
            </div>

            {/* STEP 3: Intelligence & Dispute Check (Active State Layer) */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "24px", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                {/* Active Indicator Pin */}
                <div
                  style={{
                    boxSizing: "border-box",
                    width: "40px",
                    height: "40px",
                    background: "#FFFFFF",
                    border: "2px solid rgba(39, 128, 196, 0.3)",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "12px", height: "12px", background: "#2780C4", borderRadius: "9999px" }} />
                </div>
                <div style={{ width: "2px", height: "145px", background: "#E1E3E4", marginTop: "8px" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", paddingTop: "4px", paddingBottom: "24px", flexGrow: 1 }}>
                {/* Header info split holding active state flag */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "12px" }}>
                  <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C" }}>
                    Intelligence & Dispute Check (In Progress)
                  </h3>
                  {/* Sky Blue Active Indicator Capsule */}
                  <div style={{ background: "rgba(0, 98, 158, 0.1)", borderRadius: "9999px", padding: "4px 12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.6px", color: "#2780C4" }}>
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Highlighted Alert Micro-Module exactly matching screenshot parity */}
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "20px",
                    gap: "12px",
                    width: "100%",
                    background: "rgba(105, 182, 254, 0.15)",
                    border: "1px solid rgba(0, 98, 158, 0.2)",
                    borderRadius: "20px",
                  }}
                >
                  <div style={{ width: "20px", height: "20px", borderRadius: "10px", background: "#2780C4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "12px", color: "#FFFFFF" }}>i</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>
                      Latest Update (2 hours ago)
                    </span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.5", color: "#45474C" }}>
                      Intelligence team is currently verifying historical legal disputes with local sub-registrar office. No major red flags detected yet. Preliminary clearance expected within 48 hours.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 4: Final Legal Clearance */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "24px", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                {/* Gray neutral outer outline pending tracker */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#EDEEEF",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Subtle placeholder point */}
                  <div style={{ width: "10px", height: "10px", background: "rgba(69, 71, 76, 0.3)", borderRadius: "9999px" }} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", paddingTop: "4px", opacity: 0.5, flexGrow: 1 }}>
                <h3 style={{ margin: "0 0 4px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C" }}>
                  Final Legal Clearance (Pending)
                </h3>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "#45474C" }}>
                  Signature of final audit and issuance of Green Certificate.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Aside Micro-Widgets Framework (Fluid Content Stack) */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "32px",
            width: "384px",
            flexShrink: 0,
          }}
        >
          {/* Widget 1: Asset Context Card */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              width: "100%",
              background: "#FFFFFF",
              border: "1px solid rgba(197, 198, 205, 0.15)",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "32px",
            }}
          >
            {/* Padded Preview Screen placeholder slot */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "178px",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "20px",
                background: "#F3F4F5",
              }}
            >
              <Image
                src="/assets/verification-of-farmland/pipeline.svg"
                alt="GLC SOS 01 Estate Direct Mapping"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Header info layout line */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%", marginBottom: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", color: "#131600" }}>
                  GLC SOS 01
                </h3>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#2780C4" }}>
                  Zaheerabad Region
                </span>
              </div>
              {/* Context Tag Flag */}
              <div style={{ background: "#CFE5FF", borderRadius: "9999px", padding: "4px 12px", marginTop: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#004A78" }}>
                  IO Audit Active
                </span>
              </div>
            </div>

            {/* Matrix Data Footer Layout split with top boundary */}
            <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingTop: "16px", borderTop: "1px solid #F3F4F5" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "1px", color: "rgba(69, 71, 76, 0.6)" }}>
                  EST. COMPLETION
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#131600" }}>
                  Oct 24, 2024
                </span>
              </div>
              <div style={{ height: "32px", width: "1px", background: "#F3F4F5" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "1px", color: "rgba(69, 71, 76, 0.6)" }}>
                  ASSET ID
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#131600" }}>
                  RE-99210
                </span>
              </div>
            </div>
          </div>

          {/* Widget 2: Live Activity Log Card */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              width: "100%",
              background: "#F3F4F5",
              borderRadius: "32px",
            }}
          >
            <h3 style={{ margin: "0 0 24px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#131600" }}>
              Ground Updates
            </h3>

            {/* List Tracking items block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
              {/* Row 1 */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px", width: "100%" }}>
                <span style={{ width: "64px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#2780C4", flexShrink: 0, marginTop: "2px" }}>
                  10:45 AM
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#131600" }}>
                    Site Visit Initiated
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "#45474C" }}>
                    Intelligence team reached sub-registrar office.
                  </span>
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px", width: "100%" }}>
                <span style={{ width: "64px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#2780C4", flexShrink: 0, marginTop: "2px" }}>
                  Yesterday
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#131600" }}>
                    Soil Samples Validated
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "#45474C" }}>
                    Lab report uploaded for block A-12.
                  </span>
                </div>
              </div>

              {/* Row 3 */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px", width: "100%" }}>
                <span style={{ width: "64px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#2780C4", flexShrink: 0, marginTop: "2px" }}>
                  Oct 12
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#131600" }}>
                    Agronomy Pass
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "#45474C" }}>
                    Step 2 officially moved to cleared status.
                  </span>
                </div>
              </div>

              {/* Row 4 */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px", width: "100%" }}>
                <span style={{ width: "64px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#2780C4", flexShrink: 0, marginTop: "2px" }}>
                  Oct 11
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#131600" }}>
                    Hydrology Check
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "#45474C" }}>
                    Water table depth confirmed at 340ft.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Widget 3: Sticky Bottom Support Console */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "32px",
              width: "100%",
              background: "#091426",
              boxShadow: "0px 20px 25px -5px rgba(9, 20, 38, 0.2)",
              borderRadius: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Primary trigger button slot */}
            <button
              onClick={() => alert("Connecting direct encrypted audit operations support desk link...")}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px 0px",
                width: "100%",
                background: "#FFFFFF",
                borderRadius: "48px",
                border: "none",
                cursor: "pointer",
                marginBottom: "16px",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#091426" }}>
                Contact Support
              </span>
            </button>

            {/* Exact footnote parity string */}
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "11px", lineHeight: "16px", textAlign: "center", color: "rgba(255, 255, 255, 0.4)" }}>
              This pipeline is updated in real-time by on-ground legal and agronomy teams. Data displayed is strictly confidential.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
