import React from "react";
import MaintenanceHero from "../MaintenanceHero";
import MaintenanceServicesCatalog from "./MaintenanceServicesCatalog";
import Footer from "@/components/Footer";

export default function AssetDevelopmentPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      {/* 1. Cinematic Hero Overlay Module */}
      <MaintenanceHero 
        subtitle="Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline"
        bgImage="/assets/maintenance/fd486d57301edb1da6d438941c204302c2acea87.jpg"
      />

      {/* 2. Services Catalog & Tracker */}
      <MaintenanceServicesCatalog />

      {/* 3. Global Site Navigation Matrix */}
      <Footer />
    </main>
  );
}
