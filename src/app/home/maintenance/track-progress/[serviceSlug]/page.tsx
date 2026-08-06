import React from "react";
import VerificationHero from "@/app/home/verification/VerificationHero";
import MaintenancePipelineFeed from "../MaintenancePipelineFeed";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default async function MaintenanceTrackProgressPage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params;

  // Use the exact same layout as the Figma/Verification design
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      <VerificationHero
        title="Track Progress"
        subtitle="Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline"
      />

      {/* Dynamic 2-column layout based on the service slug */}
      <MaintenancePipelineFeed serviceSlug={serviceSlug} />

      <CTA />
      <Footer />
    </main>
  );
}
