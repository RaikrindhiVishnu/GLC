import React from "react";
import VerificationHero from "./VerificationHero";
import VerificationPipelineFeed from "./VerificationPipelineFeed";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function VerificationOfFarmlandPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      {/* 1. Cinematic Hero Section */}
      <VerificationHero />

      {/* Spacing gap preserving perfect modular balance */}
      <div style={{ height: "100px", width: "100%" }} />

      {/* 2. Main 4-Tier Tracker and Aside context modules array */}
      <VerificationPipelineFeed />

      {/* 4. Global Action trigger & Footer layer */}
      <CTA />
      <Footer />
    </main>
  );
}
