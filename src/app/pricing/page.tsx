"use client";

import PricingHeroSection from "./PricingHeroSection";
import PricingBentoGrid from "./PricingBentoGrid";
import VerificationStandardsSection from "./VerificationStandardsSection";
import TransformingLegacyGallery from "./TransformingLegacyGallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function PricingScreen() {
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
      <PricingBentoGrid />

      {/* ─── SECTION 3: THE GLC VERIFICATION STANDARD ─── */}
      <VerificationStandardsSection />

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
