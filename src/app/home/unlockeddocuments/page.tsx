import React from "react";
import UnlockedDocsHero from "./UnlockedDocsHero";
import UnlockedDocsGrid from "./UnlockedDocsGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Unlocked Documents | Green Land Capital",
  description: "Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline.",
};

export default function UnlockedDocumentsWorkspacePage() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 1. Full-Bleed Responsive Hero Banner Layer filling 100% browser viewport width */}
      <UnlockedDocsHero />

      {/* 2. Main High-Fidelity Unlocked Dossiers Vault Grid layer naturally centered below hero stack */}
      <UnlockedDocsGrid />

      {/* 3. Master Reusable CTA Banner Block */}
      <CTA />

      {/* 4. Global Master Footer Block */}
      <Footer />
    </main>
  );
}
