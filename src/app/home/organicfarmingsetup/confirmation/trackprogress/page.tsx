"use client";

import React, { Suspense } from "react";
import VerificationHero from "@/app/home/verification/VerificationHero";
import MaintenancePipelineFeed from "@/app/home/maintenance/track-progress/MaintenancePipelineFeed";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function TrackProgressContent() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      <VerificationHero
        title="Track Progress"
        subtitle="Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline"
      />

      <MaintenancePipelineFeed serviceSlug="organic-farm-setup" />

      <CTA />
      <Footer />
    </main>
  );
}

export default function OrganicFarmingSetupTrackProgressPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#F8F9FA]" />}>
      <TrackProgressContent />
    </Suspense>
  );
}
