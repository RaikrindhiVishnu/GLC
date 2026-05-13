import React from "react";
import MaintenanceHero from "./MaintenanceHero";
import MaintenanceOnboardSection from "./MaintenanceOnboardSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function MaintenanceOfFarmlandPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      {/* 1. Cinematic Hero Overlay Module */}
      <MaintenanceHero />

      {/* Spacing alignment block preserving visual hierarchy */}
      <div style={{ height: "48px", width: "100%" }} />

      {/* 2. Onboard Split Control Panel Form Widget */}
      <MaintenanceOnboardSection />

      {/* 3. Universal Yield Branding Graphic Landscape Banner */}
      <CTA />

      {/* 4. Global Site Navigation Matrix */}
      <Footer />
    </main>
  );
}
