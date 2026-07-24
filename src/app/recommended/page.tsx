"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import CompareNavigation from "@/app/search/farmlanddetails/compare_premium/CompareNavigation";
import RecommendedHero from "./RecommendedHero";
import RecommendedGrid from "./RecommendedGrid";
import TrendingFeaturedSection from "@/app/search/TrendingFeaturedSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function RecommendedFarmlandsPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center overflow-x-hidden">
      {/* Mobile Navbar */}
      <div className="block lg:hidden w-full sticky top-0 z-50">
        <Navbar variant="app" active="Recommended" forceScrolled={true} />
      </div>

      {/* Desktop Floating Navigation */}
      <CompareNavigation hideProfileImage={true} />

      {/* Top Hero Section */}
      <RecommendedHero />

      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center z-20">
        
        {/* Recommended Farmlands Grid Layout */}
        <RecommendedGrid />

        {/* Farmland Recommended In All Categories Carousel */}
        <TrendingFeaturedSection />

      </div>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
