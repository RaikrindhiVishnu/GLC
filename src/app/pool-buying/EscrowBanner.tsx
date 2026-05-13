"use client";

import React from "react";

export default function EscrowBanner() {
  return (
    /* ─── SECTION 3: ESCROW BANNER SECTION ─── */
    <section
      style={{
        width: "100%",
        background: "#091426",
        padding: "80px 32px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        zIndex: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1216px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "48px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Glowing Outer Shield Capsule */}
        <div
          style={{
            width: "96px",
            height: "96px",
            background: "#1E293B",
            boxShadow: "0px 0px 50px rgba(105, 182, 254, 0.15)",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* Inner neon blue shield icon */}
          <svg width="32" height="40" viewBox="0 0 24 24" fill="none" stroke="#69B6FE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        </div>

        {/* Context Explanations */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, minWidth: "300px" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "40px",
              color: "#FFFFFF",
            }}
          >
            100% Protected
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "29px",
              color: "#8590A6",
              maxWidth: "850px",
            }}
          >
            All investment funds are held in SEBI-regulated Escrow accounts. Funds are only released
            to the project once the pool is 100% subscribed. If the target is not met within the
            stipulated time, investors receive a full refund within 48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
