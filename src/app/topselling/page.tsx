"use client";

import TopSellingHero from "./TopSellingHero";
import TopSellingGrid from "./TopSellingGrid";
import { Suspense } from "react";
import TrendingFeaturedSection from "../search/TrendingFeaturedSection";
import CompareNavigation from "@/app/search/farmlanddetails/compare_premium/CompareNavigation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TopSellingScreen() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hide scrollbar but keep functionality */
        ::-webkit-scrollbar {
          display: none;
        }
        html, body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />
      <main style={{ minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>

        {/* Mobile Navbar */}
        <div className="block lg:hidden w-full sticky top-0 z-50">
          <Navbar variant="app" active="none" forceScrolled={true} />
        </div>

        {/* Desktop Floating Navigation */}
        <CompareNavigation hideProfileImage={true} />

        <TopSellingHero />

        <div className="w-full flex flex-col items-center z-20">
          <Suspense fallback={<div className="h-64 flex items-center justify-center font-jakarta text-[#0F2F4C]">Loading locations...</div>}>
            <TopSellingGrid />
          </Suspense>
          <TrendingFeaturedSection />
        </div>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
