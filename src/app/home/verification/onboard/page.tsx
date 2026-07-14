import React from "react";
import VerificationHero from "../VerificationHero";
import OnboardForm from "./OnboardForm";
import Footer from "@/components/Footer";

export default function OnboardYourAssetPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#FAFAFA", display: "flex", flexDirection: "column" }}>
      <VerificationHero 
        title="Verification Farmlands" 
        subtitle="Verify every farmland through comprehensive legal, survey, ownership, and compliance checks to invest with complete confidence." 
      />
      <OnboardForm />
      <Footer />
    </main>
  );
}
