"use client";

import React, { useState } from "react";
import HeroSection from "./HeroSection";
import MainGrid from "./MainGrid";
import EscrowBanner from "./EscrowBanner";
import ModalOverlay from "./ModalOverlay";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function PoolBuyingScreen() {
  const [selectedPool, setSelectedPool] = useState<string | null>(null);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* ─── SECTION 1: HERO HEADER SECTION ─── */}
      <HeroSection />

      {/* ─── SECTION 2: MAIN GRID CONTENT (POOL CARDS) ─── */}
      <MainGrid onSelectPool={setSelectedPool} />

      {/* ─── SECTION 3: ESCROW BANNER SECTION ─── */}
      <EscrowBanner />

      {/* ─── SECTION 4: PROCESS WINDING PATH BLOCK ─── */}
      <div style={{ position: "relative", width: "100%", zIndex: 10 }}>
        <Process />
      </div>

      {/* ─── SECTION 5: CTA LANDSCAPE LAYER & FOOTER LIBRARY ─── */}
      <div style={{ position: "relative", width: "100%", zIndex: 20, display: "flex", flexDirection: "column" }}>
        <CTA />
        <Footer />
      </div>

      {/* ─── INTERACTIVE MODAL OVERLAY MOCKUP ─── */}
      <ModalOverlay selectedPool={selectedPool} onClose={() => setSelectedPool(null)} />
    </main>
  );
}
