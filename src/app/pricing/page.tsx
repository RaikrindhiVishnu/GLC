"use client";

import React, { useState } from "react";
import PricingHeroSection from "./PricingHeroSection";
import PricingBentoGrid from "./PricingBentoGrid";
import VerificationStandardsSection from "./VerificationStandardsSection";
import TransformingLegacyGallery from "./TransformingLegacyGallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CheckoutScreen from "./checkoutscreen/CheckoutScreen";

export default function PricingScreen() {
  // Local navigation state: null shows main pricing; string ID shows specialized CheckoutScreen
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  if (selectedPlanId) {
    return (
      <CheckoutScreen
        planId={selectedPlanId}
        onBack={() => setSelectedPlanId(null)}
      />
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* ─── SECTION 1: MASTER HERO HEADER BANNER ─── */}
      <PricingHeroSection />

      {/* ─── SECTION 2: PRICING BENTO GRID MATRIX ─── */}
      <PricingBentoGrid onSelectPlan={(planId) => setSelectedPlanId(planId)} />

      {/* ─── SECTION 3: THE GLC VERIFICATION STANDARD ─── */}
      <VerificationStandardsSection />

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "40px 0" }}>
        <button
          onClick={() => window.location.href = "/profile/managesubscriptions"}
          style={{ padding: "16px 32px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", boxShadow: "0px 10px 15px -3px rgba(39, 128, 196, 0.2)" }}
        >
          Manage Subscription
        </button>
      </div>

      {/* ─── SECTION 4: TRANSFORMING LAND INTO LEGACY GALLERY ─── */}
      <TransformingLegacyGallery />

      {/* ─── SECTION 5: BOTTOM LANDSCAPE BANNER & FOOTER LIBRARY ─── */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
        <CTA />
        <Footer />
      </section>
    </main>
  );
}
