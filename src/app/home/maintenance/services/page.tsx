import React from "react";
import MaintenanceHero from "../MaintenanceHero";
import MaintenanceServicesCatalog from "./MaintenanceServicesCatalog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function MaintenanceServicesPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      {/* 1. Cinematic Persistent Hero Overlay Module */}
      <MaintenanceHero />

      {/* Spacing alignment block preserving structural layout hierarchy */}
      <div style={{ height: "48px", width: "100%" }} />

      {/* 2. Secondary Service Catalog & Development Estimator Layout Matrix */}
      <MaintenanceServicesCatalog />

      {/* 3. Universal Yield Branding Landscape Call-To-Action Ribbon */}
      <CTA />

      {/* 4. Global Corporate Identity Footer Shell Layout */}
      <Footer />
    </main>
  );
}
