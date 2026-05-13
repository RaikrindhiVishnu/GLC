"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface MainGridProps {
  onSelectPool: (poolId: string) => void;
}

export default function MainGrid({ onSelectPool }: MainGridProps) {
  const router = useRouter();

  return (
    /* ─── SECTION 2: MAIN GRID CONTENT (POOL CARDS) ─── */
    <section
      style={{
        position: "relative",
        width: "1216px",
        height: "635px",
        margin: "100px auto 120px auto", // Guarantees top edge sits exactly at top: 1060px relative to document top (960px hero + 100px margin) without overlapping
        zIndex: 30,
      }}
    >
      {/* ─── CARD 1: PROJECT GENESIS ZAHEERABAD ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          position: "absolute",
          width: "592px",
          height: "635px",
          left: "0px",
          top: "0px",
          background: "#FFFFFF",
          boxShadow: "0px 8px 40px rgba(9, 20, 38, 0.04)",
          borderRadius: "48px",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0px 20px 50px rgba(9, 20, 38, 0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0px 8px 40px rgba(9, 20, 38, 0.04)";
        }}
      >
        {/* Top Image Box */}
        <div
          style={{
            boxSizing: "border-box",
            width: "592px",
            height: "256px",
            position: "relative",
            flex: "none",
            order: 0,
          }}
        >
          <img
            src="/assets/poolinvestments/Project Genesis Zaheerabad.svg"
            alt="Project Genesis Zaheerabad"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Background Badge */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 16px",
              position: "absolute",
              height: "28px",
              right: "15.99px",
              top: "16px",
              background: "#BA1A1A",
              borderRadius: "9999px",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                whiteSpace: "nowrap",
              }}
            >
              CLOSING SOON
            </span>
          </div>
        </div>

        {/* Details Container */}
        <div
          style={{
            boxSizing: "border-box",
            width: "592px",
            height: "379px",
            position: "relative",
            flex: "none",
            order: 1,
          }}
        >
          {/* Heading 3 */}
          <div
            style={{
              position: "absolute",
              height: "32px",
              left: "32px",
              top: "32px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#0F2F4C",
              }}
            >
              GLC SOS 01
            </span>
          </div>

          {/* Location row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
              gap: "8px",
              position: "absolute",
              height: "20px",
              left: "32px",
              top: "72px",
            }}
          >
            {/* Icon container */}
            <div style={{ width: "9.33px", height: "11.67px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="9.33" height="11.67" viewBox="0 0 24 24" fill="#2780C4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#45474C",
              }}
            >
              Telangana, India • GIS Verified
            </span>
          </div>

          {/* Progress Bar Container */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "16px 0px 24px",
              gap: "8px",
              position: "absolute",
              height: "76px",
              left: "32px",
              width: "528px",
              top: "100px",
            }}
          >
            {/* Labels Row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: "528px",
                height: "20px",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#0F2F4C" }}>
                3/4 Seats Funded
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#45474C" }}>
                Remaining: ₹1.25 Cr
              </span>
            </div>
            {/* Tracks */}
            <div style={{ width: "528px", height: "8px", background: "#EDEEEF", borderRadius: "9999px", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "0%",
                  right: "25%",
                  top: 0,
                  bottom: 0,
                  background: "linear-gradient(90deg, #2780C4 0%, #93C5FD 100%)",
                  borderRadius: "9999px",
                }}
              />
            </div>
          </div>

          {/* Financials Block */}
          <div
            style={{
              position: "absolute",
              height: "75px",
              left: "32px",
              width: "528px",
              top: "184px",
              background: "#F3F4F5",
              borderRadius: "32px",
              boxSizing: "border-box",
            }}
          >
            {/* Asset Value Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", position: "absolute", height: "43px", left: "16px", top: "16px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>
                ASSET VALUE
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                ₹5.00 Cr
              </span>
            </div>

            {/* Share Price Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", position: "absolute", height: "43px", left: "186.67px", top: "16px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>
                SHARE PRICE
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                ₹25.00 L
              </span>
            </div>

            {/* Returns Model Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", position: "absolute", height: "43px", left: "357.33px", top: "16px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>
                RETURNS MODEL
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#2780C4" }}>
                Lease + Yield
              </span>
            </div>
          </div>

          {/* Button Block */}
          <button
            onClick={() => router.push("/pool-buying/pooldetails")}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px 0px",
              position: "absolute",
              height: "56px",
              left: "32px",
              width: "528px",
              top: "291px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "32px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 8px 16px rgba(39, 128, 196, 0.2)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.95")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.4px",
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              View Pool Details
            </span>
          </button>
        </div>
      </div>

      {/* ─── CARD 2: HERITAGE TIMBER ESTATE ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          position: "absolute",
          width: "592px",
          height: "635px",
          left: "624px",
          top: "0px",
          background: "#FFFFFF",
          boxShadow: "0px 8px 40px rgba(9, 20, 38, 0.04)",
          borderRadius: "48px",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0px 20px 50px rgba(9, 20, 38, 0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0px 8px 40px rgba(9, 20, 38, 0.04)";
        }}
      >
        {/* Top Image Box */}
        <div
          style={{
            boxSizing: "border-box",
            width: "592px",
            height: "256px",
            position: "relative",
            flex: "none",
            order: 0,
          }}
        >
          <img
            src="/assets/poolinvestments/Container (10).svg"
            alt="Heritage Timber Estate"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Background Badge */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 16px",
              position: "absolute",
              height: "28px",
              right: "16px",
              top: "16px",
              background: "#D7EE44",
              borderRadius: "9999px",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                color: "#0F2F4C",
                whiteSpace: "nowrap",
              }}
            >
              NEW ADDITION
            </span>
          </div>
        </div>

        {/* Details Container */}
        <div
          style={{
            boxSizing: "border-box",
            width: "592px",
            height: "379px",
            position: "relative",
            flex: "none",
            order: 1,
          }}
        >
          {/* Heading 3 */}
          <div
            style={{
              position: "absolute",
              height: "32px",
              left: "32px",
              top: "32px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#0F2F4C",
              }}
            >
              GLC SOS 01
            </span>
          </div>

          {/* Location row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
              gap: "8px",
              position: "absolute",
              height: "20px",
              left: "32px",
              top: "72px",
            }}
          >
            {/* Icon container */}
            <div style={{ width: "9.33px", height: "11.67px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="9.33" height="11.67" viewBox="0 0 24 24" fill="#2780C4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#45474C",
              }}
            >
              Andhra Pradesh, India • Managed Agro-Forestry
            </span>
          </div>

          {/* Progress Bar Container */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "16px 0px 24px",
              gap: "8px",
              position: "absolute",
              height: "76px",
              left: "32px",
              width: "528px",
              top: "100px",
            }}
          >
            {/* Labels Row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: "528px",
                height: "20px",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#0F2F4C" }}>
                1/4 Seats Funded
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#45474C" }}>
                Remaining: ₹10.8 Cr
              </span>
            </div>
            {/* Tracks */}
            <div style={{ width: "528px", height: "8px", background: "#EDEEEF", borderRadius: "9999px", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "0%",
                  right: "75%",
                  top: 0,
                  bottom: 0,
                  background: "linear-gradient(90deg, #2780C4 0%, #93C5FD 100%)",
                  borderRadius: "9999px",
                }}
              />
            </div>
          </div>

          {/* Financials Block */}
          <div
            style={{
              position: "absolute",
              height: "75px",
              left: "32px",
              width: "528px",
              top: "184px",
              background: "#F3F4F5",
              borderRadius: "32px",
              boxSizing: "border-box",
            }}
          >
            {/* Asset Value Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", position: "absolute", height: "43px", left: "16px", top: "16px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>
                ASSET VALUE
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                ₹12.0 Cr
              </span>
            </div>

            {/* Share Price Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", position: "absolute", height: "43px", left: "186.67px", top: "16px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>
                SHARE PRICE
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                ₹30.0 L
              </span>
            </div>

            {/* Returns Model Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", position: "absolute", height: "43px", left: "357.33px", top: "16px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>
                RETURNS MODEL
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#2780C4" }}>
                Asset Appreciation
              </span>
            </div>
          </div>

          {/* Button Block */}
          <button
            onClick={() => router.push("/pool-buying/pooldetails")}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px 0px",
              position: "absolute",
              height: "56px",
              left: "32px",
              width: "528px",
              top: "291px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "32px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 8px 16px rgba(39, 128, 196, 0.2)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.95")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.4px",
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              View Pool Details
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
