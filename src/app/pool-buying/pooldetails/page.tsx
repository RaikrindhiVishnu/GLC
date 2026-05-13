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
        minHeight: "5325px", // High fidelity full document depth target
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
      <section
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 24px",
          gap: "32px",
          width: "100%",
          maxWidth: "1280px",
          marginTop: "100px", // Sets master start point exactly matching top: 1060px relative to absolute document layout
          marginBottom: "100px",
          zIndex: 30,
          flexWrap: "wrap",
        }}
      >
        {/* Left Console: Fractional Layout Blueprint (55% Nominal) */}
        <LeftConsole />

        {/* Right Console: Investment Controls & Escrow Checkout Panel (40% Nominal) */}
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
