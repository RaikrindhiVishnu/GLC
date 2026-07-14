import React from "react";
import VerificationHero from "./VerificationHero";
import VerificationFarmlandsGrid from "./VerificationFarmlandsGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function VerificationOfFarmlandPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      <VerificationHero 
        title="Verification Farmlands" 
        subtitle="Verify every farmland through comprehensive legal, survey, ownership, and compliance checks to invest with complete confidence." 
      />
      <VerificationFarmlandsGrid />
      <CTA />
      <Footer />
    </main>
  );
}
