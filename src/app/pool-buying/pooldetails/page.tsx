"use client";

import React from "react";
import PoolDetailsHero from "./PoolDetailsHero";
import LeftConsole from "./LeftConsole";
import RightConsole from "./RightConsole";
import EscrowBanner from "../EscrowBanner";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function PoolDetailsPage() {
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
      {/* ─── SECTION 1: POOL DETAILS HERO SECTION ─── */}
      <PoolDetailsHero />

      {/* ─── SECTION 2: SPLIT CONSOLE MAIN CONTENT LAYER ─── */}
      <section className="flex flex-col lg:flex-row items-start justify-center w-full max-w-7xl px-4 lg:px-6 mt-16 lg:mt-24 mb-16 lg:mb-24 gap-6 lg:gap-8 box-border" style={{ zIndex: 30 }}>
        <LeftConsole />
        <RightConsole />
      </section>

      {/* ─── SECTION 3: SHARED ESCROW BANNER BLOCK ─── */}
      <div style={{ width: "100%", position: "relative", zIndex: 20 }}>
        <EscrowBanner />
      </div>

      {/* ─── SECTION 4: PROCESS WINDING PATH BLOCK ─── */}
      <div
        style={{
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "1280px",
          position: "relative",
          zIndex: 10,
          padding: "100px 0px",
        }}
      >
        <Process />
      </div>

      {/* ─── SECTION 5: CTA LANDSCAPE HEADER LAYER ─── */}
      <div style={{ width: "100%", position: "relative", zIndex: 15 }}>
        <CTA />
      </div>

      {/* ─── SECTION 6: GLOBAL FOOTER LIBRARY ─── */}
      <div style={{ width: "100%", position: "relative", zIndex: 25 }}>
        <Footer />
      </div>
    </main>
  );
}
