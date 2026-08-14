"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FarmlandDetailResponse, useGetAllLegalDocumentsByFarmlandIdQuery } from "../../../../services/farmland";

export default function DetailsFeed({ farmland }: { farmland: FarmlandDetailResponse }) {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<"operations" | "legal" | "tracking">("operations");
  const [hoveredResale, setHoveredResale] = useState(false);

  // Fetch Legal Documents
  const { data: legalDocsRes, isLoading: legalLoading } = useGetAllLegalDocumentsByFarmlandIdQuery(
    { farmlandId: farmland?.farmland_id || 101 },
    { skip: selectedTab !== "legal" }
  );

  const documents = legalDocsRes?.data ? Object.values(legalDocsRes.data) : null;

  return (
    <section className="flex flex-col lg:flex-row items-start gap-10 w-full">
      {/* ─── LEFT COLUMN (70% WIDTH) ─── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 min-w-0 flex flex-col gap-10"
        style={{ boxSizing: "border-box" }}
      >
        {/* Segmented Control */}
        <div
          style={{
            boxSizing: "border-box",
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "6px",
            background: "#F3F4F5",
            borderRadius: "48px",
            overflowX: "auto",
          }}
        >
          {/* Button 1: Operations & Yield */}
          <button
            onClick={() => setSelectedTab("operations")}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 32px",
              width: "191.78px",
              height: "44px",
              background: selectedTab === "operations" ? "#091426" : "transparent",
              borderRadius: "32px",
              border: "none",
              cursor: "pointer",
              position: "relative",
              boxShadow: selectedTab === "operations" ? "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)" : "none",
            }}
          >
            <span
              style={{
                width: "127.78px",
                height: "20px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: selectedTab === "operations" ? "#FFFFFF" : "#45474C",
              }}
            >
              Operations & Yield
            </span>
          </button>

          {/* Button 2: Legal Vault */}
          <button
            onClick={() => setSelectedTab("legal")}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 32px",
              width: "138.38px",
              height: "44px",
              background: selectedTab === "legal" ? "#091426" : "transparent",
              borderRadius: "32px",
              border: "none",
              cursor: "pointer",
              boxShadow: selectedTab === "legal" ? "0px 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
            }}
          >
            <span
              style={{
                width: "74.38px",
                height: "20px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: selectedTab === "legal" ? "#FFFFFF" : "#45474C",
              }}
            >
              Legal Vault
            </span>
          </button>

          {/* Button 3: Live Tracking */}
          <button
            onClick={() => setSelectedTab("tracking")}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 32px",
              width: "151.64px",
              height: "44px",
              background: selectedTab === "tracking" ? "#091426" : "transparent",
              borderRadius: "32px",
              border: "none",
              cursor: "pointer",
              boxShadow: selectedTab === "tracking" ? "0px 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
            }}
          >
            <span
              style={{
                width: "87.64px",
                height: "20px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: selectedTab === "tracking" ? "#FFFFFF" : "#45474C",
              }}
            >
              Live Tracking
            </span>
          </button>
        </div>

        {selectedTab === "operations" && (
          <>
        {/* Content Card: Current Crop Cycle */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "32px",
            gap: "32px",
            width: "100%",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "32px",
          }}
          className="lg:p-10"
        >
          {/* Header Track Container */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: "0px",
              width: "100%",
            }}
          >
            {/* Title subframe */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", flex: 1, minWidth: 0 }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "32px",
                  display: "block",
                  color: "#131600",
                }}
              >
                Current Crop Cycle
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  display: "block",
                  color: "#45474C",
                }}
              >
                Ongoing harvest preparation for high-yield timber and seasonal produce.
              </span>
            </div>

            {/* Target Progress Container */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", flexShrink: 0, marginLeft: "16px" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "36px",
                  lineHeight: "40px",
                  textAlign: "right",
                  color: "#091426",
                }}
              >
                65%
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  lineHeight: "16px",
                  textAlign: "right",
                  letterSpacing: "-0.6px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                CYCLE PROGRESS
              </span>
            </div>
          </div>

          {/* Progress Bar Track */}
          <div
            style={{
              width: "100%",
              height: "16px",
              background: "#F3F4F5",
              borderRadius: "9999px",
              position: "relative",
            }}
          >
            {/* Gradient Fill */}
            <div
              style={{
                position: "absolute",
                left: "0%",
                right: "35%",
                top: "0px",
                bottom: "0px",
                background: "linear-gradient(90deg, #2780C4 0%, #93C5FD 100%)",
                borderRadius: "9999px",
              }}
            />
          </div>

          {/* Bottom Container Split Frame */}
          <div className="w-full flex flex-col sm:flex-row gap-8 sm:gap-10">
            {/* Active Crops Column */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "24px", flex: 1 }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                ACTIVE CROPS
              </span>

              {/* Pills container */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
                {/* Pill 1 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "8px 16px", background: "#EDEEEF", borderRadius: "32px", boxSizing: "border-box" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#131600" }}>
                    Red Sandalwood
                  </span>
                </div>
                {/* Pill 2 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "8px 16px", background: "#EDEEEF", borderRadius: "32px", boxSizing: "border-box" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#131600" }}>
                    Seasonal Mango
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Yield Ledger Column */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "24px", flex: 1 }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                RECENT YIELD LEDGER
              </span>

              {/* Rows layout */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", width: "100%" }}>
                {/* Row 1 */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px", width: "100%", height: "72px", background: "#F3F4F5", borderRadius: "32px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#131600" }}>
                      Q3 Organic Split
                    </span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#45474C" }}>
                      Sept 2023
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#00629E" }}>
                    ₹4,50,000
                  </span>
                </div>

                {/* Row 2 */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px", width: "100%", height: "72px", background: "#F3F4F5", borderRadius: "32px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#131600" }}>
                      Mango Harvest Surplus
                    </span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#45474C" }}>
                      June 2023
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#00629E" }}>
                    ₹3,80,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Section: Visual Updates */}
        <div className="w-full flex flex-col sm:flex-row gap-4">
          {/* Sapling Growth Card */}
          <div
            style={{
              position: "relative",
              flex: 1,
              height: "208px",
              background: "#F3F4F5",
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/assets/home/YourListings/glcsos2.svg"
              alt="Sapling Growth Visual"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Soil Health Bento Container */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              gap: "24px",
              background: "#091426",
              borderRadius: "32px",
              overflow: "hidden",
              position: "relative",
              minHeight: "180px",
            }}
            className="w-full sm:w-61"
          >
            {/* Soft backdrop glow effect */}
            <div
              style={{
                position: "absolute",
                width: "113.62px",
                height: "113.5px",
                right: "-32.01px",
                bottom: "-31.54px",
                background: "#FFFFFF",
                opacity: 0.05,
                borderRadius: "9999px",
              }}
            />

            {/* Typography items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", zIndex: 1, position: "relative" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#FFFFFF", opacity: 0.6 }}>
                SOIL HEALTH
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "30px", lineHeight: "36px", color: "#FFFFFF" }}>
                {farmland.land_specifications?.soil_type || "9.2 PH"}
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF", opacity: 0.8, marginTop: "8px" }}>
                Optimal nutrient density achieved across Area A.
              </span>
            </div>
          </div>
        </div>
          </>
        )}

        {selectedTab === "legal" && (
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              padding: "32px",
              gap: "24px",
              width: "100%",
              background: "#FFFFFF",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "32px",
            }}
            className="lg:p-10"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", color: "#131600" }}>
                Verified Documentation
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "#45474C" }}>
                Official regulatory and institutional clearances
              </span>
            </div>

            {legalLoading && (
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "#45474C" }}>
                Loading documents...
              </span>
            )}

            {!legalLoading && documents && documents.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {documents.map((doc, idx) => (
                  <div key={idx} style={{ padding: "20px", background: "#F3F4F5", borderRadius: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>
                        {doc.description || doc.code}
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: doc.uploaded ? "#2780C4" : "#45474C" }}>
                        {doc.uploaded ? "Verified Document" : "Pending Verification"}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        const url = doc.versions?.[0]?.files?.[0]?.document_url;
                        if (url) window.open(url, "_blank");
                      }}
                      disabled={!doc.uploaded || !doc.versions?.[0]?.files?.[0]?.document_url}
                      style={{
                        padding: "12px 24px",
                        background: (doc.uploaded && doc.versions?.[0]?.files?.[0]?.document_url) ? "transparent" : "#E7E8E9",
                        border: (doc.uploaded && doc.versions?.[0]?.files?.[0]?.document_url) ? "1px solid rgba(39, 128, 196, 0.4)" : "none",
                        color: (doc.uploaded && doc.versions?.[0]?.files?.[0]?.document_url) ? "#2780C4" : "#A5CCF2",
                        borderRadius: "9999px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        cursor: (doc.uploaded && doc.versions?.[0]?.files?.[0]?.document_url) ? "pointer" : "not-allowed",
                        transition: "all 0.2s"
                      }}
                    >
                      View Document
                    </button>
                  </div>
                ))}
              </div>
            )}

            {!legalLoading && (!documents || documents.length === 0) && (
              <div style={{ padding: "32px", background: "#F3F4F5", borderRadius: "16px", textAlign: "center" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "#45474C" }}>
                  No legal documents available for this asset.
                </span>
              </div>
            )}
          </div>
        )}

      </motion.div>

      {/* ─── RIGHT COLUMN (30% WIDTH) ─── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full lg:w-[340px] lg:shrink-0 flex flex-col gap-8"
        style={{ boxSizing: "border-box" }}
      >
        {/* Wealth Manager Card */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "32px",
            gap: "32px",
            width: "100%",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "32px",
          }}
        >
          {/* Avatar and Info Row */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "276.8px", height: "64px" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "9999px", background: "#E7E8E9", position: "relative", overflow: "hidden", flexShrink: 0 }}>
              <Image src="/assets/home/HeroScreen/person.svg" alt="Wealth Manager Profile" fill style={{ objectFit: "cover", transform: "scale(1.2)" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "16px", width: "129.31px", height: "40px" }}>
              <span style={{ width: "113.31px", height: "24px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", color: "#131600" }}>
                Anirudh Varma
              </span>
              <span style={{ width: "89px", height: "16px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "16px", display: "flex", alignItems: "center", color: "#45474C" }}>
                Sales Executive
              </span>
            </div>
          </div>

          {/* INTIATE RESALE Button */}
          <button
            onClick={() => router.push("/home/sellyourland")}
            onMouseEnter={() => setHoveredResale(true)}
            onMouseLeave={() => setHoveredResale(false)}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px 0px",
              width: "276.8px",
              height: "56px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "32px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 10px 15px -3px rgba(9, 20, 38, 0.2), 0px 4px 6px -4px rgba(9, 20, 38, 0.2)",
              opacity: hoveredResale ? 0.9 : 1,
            }}
          >
            <span style={{ width: "122px", height: "24px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#FFFFFF" }}>
              INTIATE RESALE
            </span>
          </button>
        </div>

        {/* Asset Details Mini-Card */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "32px",
            gap: "24px",
            width: "100%",
            background: "#FFFFFF",
            borderRadius: "32px",
          }}
        >
          {/* Header Title */}
          <span
            style={{
              width: "276.8px",
              height: "16px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "12px",
              lineHeight: "16px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#45474C",
            }}
          >
            ASSET CREDENTIALS
          </span>

          {/* List Tracks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "276.8px", height: "156px" }}>
            {/* Item 1: Registered Title */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "276.8px", height: "36px" }}>
              {/* Premium Inline Vector Icon */}
              <div style={{ width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#091426" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "12px", width: "122.3px", height: "36px" }}>
                <span style={{ width: "106.23px", height: "20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", display: "flex", alignItems: "center", color: "#131600" }}>
                  Registered Title
                </span>
                <span style={{ width: "110.3px", height: "16px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", display: "flex", alignItems: "center", color: "#45474C" }}>
                  ZHB-2021-SOS-01
                </span>
              </div>
            </div>

            {/* Item 2: Geofenced Perimeter */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "276.8px", height: "36px" }}>
              <div style={{ width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#091426" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                  <line x1="9" y1="3" x2="9" y2="18"></line>
                  <line x1="15" y1="6" x2="15" y2="21"></line>
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "12px", width: "167.92px", height: "36px" }}>
                <span style={{ width: "147.31px", height: "20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", display: "flex", alignItems: "center", color: "#131600" }}>
                  Geofenced Perimeter
                </span>
                <span style={{ width: "155.92px", height: "16px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", display: "flex", alignItems: "center", color: "#45474C" }}>
                  Certified Satellite Boundary
                </span>
              </div>
            </div>

            {/* Item 3: Estate Protection */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "276.8px", height: "36px" }}>
              <div style={{ width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#091426" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "12px", width: "192.3px", height: "36px" }}>
                <span style={{ width: "118.86px", height: "20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", display: "flex", alignItems: "center", color: "#131600" }}>
                  Estate Protection
                </span>
                <span style={{ width: "180.3px", height: "16px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", display: "flex", alignItems: "center", color: "#45474C" }}>
                  24/7 Professional Security Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
