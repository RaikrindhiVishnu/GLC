"use client";

import React from "react";
import MyAssetsHero from "./MyAssetsHero";
import MainWealthFeed from "./MainWealthFeed";
import GamificationBanner from "./GamificationBanner";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function MyAssetsPage() {
  return (
    <main
      style={{
        boxSizing: "border-box",
        minHeight: "4086px", // Maps precisely to the high fidelity document bounds targeted
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* ─── LEVEL 1: FULL OVERLAY HERO SECTION ─── */}
      <MyAssetsHero />

      {/* ─── LEVEL 2: SPLIT FEED & SIDEBAR BENTO DASHBOARD ─── */}
      <section
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingTop: "100px", // Aligning top bounds with document grid coordinates
          paddingBottom: "64px",
          paddingLeft: "24px",
          paddingRight: "24px",
          zIndex: 10,
        }}
      >
        <MainWealthFeed />
      </section>

      {/* ─── LEVEL 3: GAMIFIED BONUS BANNER LAYER ─── */}
      <section
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingBottom: "100px",
          paddingLeft: "24px",
          paddingRight: "24px",
          zIndex: 15,
        }}
      >
        <GamificationBanner />
      </section>

      {/* ─── LEVEL 4: LANDSCAPE CTA SECTION ─── */}
      <div style={{ width: "100%", position: "relative", zIndex: 20 }}>
        <CTA />
      </div>

      {/* ─── LEVEL 5: GLOBAL FOOTER COMPONENT ─── */}
      <div style={{ width: "100%", position: "relative", zIndex: 25 }}>
        <Footer />
      </div>
    </main>
  );
}
