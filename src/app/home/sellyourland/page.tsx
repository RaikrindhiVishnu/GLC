import React from "react";
import SellYourLandHero from "./SellYourLandHero";
import SellYourLandConsole from "./SellYourLandConsole";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function SellYourLandWorkspacePage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      {/* 1. Dedicated Edge-to-Edge Farmland Verification Hero Layer */}
      <SellYourLandHero />

      {/* Spacing spacer layout element preserving exact design harmony */}
      <div style={{ height: "48px", width: "100%" }} />

      {/* 2. Primary Three-Phase Institutional Listing Input Console Matrix */}
      <SellYourLandConsole />

      {/* 3. Global Universal Branding Yield Graphic Invitation Banner */}
      <CTA />

      {/* 4. Global Corporate Navigation Core Identity Footer */}
      <Footer />
    </main>
  );
}
