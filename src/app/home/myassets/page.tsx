"use client";

import React from "react";
import MyAssetsHero from "./MyAssetsHero";
import MainWealthFeed from "./MainWealthFeed";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function MyAssetsPage() {
  return (
    <main
      style={{
        boxSizing: "border-box",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <MyAssetsHero />

      <section className="w-full max-w-7xl px-4 lg:px-8 pt-16 lg:pt-24 pb-12 box-border" style={{ zIndex: 10 }}>
        <MainWealthFeed />
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
