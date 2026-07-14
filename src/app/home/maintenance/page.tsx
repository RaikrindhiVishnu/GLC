import React from "react";
import MaintenanceHero from "./MaintenanceHero";
import MaintenanceListings from "./MaintenanceListings";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function MaintenanceOfFarmlandPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      {/* 1. Cinematic Hero Overlay Module */}
      <MaintenanceHero />

      {/* 2. Listings Module */}
      <MaintenanceListings />

      {/* 3. Universal Yield Branding Graphic Landscape Banner */}
      <CTA />

      {/* 4. Global Site Navigation Matrix */}
      <Footer />
    </main>
  );
}
