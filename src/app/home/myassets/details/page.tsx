"use client";

import React from "react";
import DetailsHero from "./DetailsHero";
import DetailsFeed from "./DetailsFeed";
import AddOnServices from "./AddOnServices";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function MyAssetsDetailedPage() {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      {/* ─── FULL WIDTH EDGE-TO-EDGE CANVAS WRAPPER ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px",
          gap: "100px",
          width: "100%",
          maxWidth: "1920px",
          position: "relative",
        }}
      >
        {/* Section 1: Cinematic Hero & Wealth Snapshot Container */}
        <DetailsHero />

        {/* Section 2: Main Content Feed (Split Layout: 70% / 30%) */}
        <DetailsFeed />

        {/* Section 3: Add-On Services Catalog & Draft Work Orders */}
        <AddOnServices />

        {/* Standard Final Closing Blocks */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
