import React from "react";
import VerificationHero from "../VerificationHero";
import VerificationPipelineFeed from "../VerificationPipelineFeed";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function VerificationTrackerPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      <VerificationHero 
        title="Verification Tracker" 
        subtitle="Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline"
      />
      <VerificationPipelineFeed />
      <CTA />
      <Footer />
    </main>
  );
}
