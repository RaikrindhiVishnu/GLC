"use client";

import CompareNavigation from "./CompareNavigation";
import CompareHero from "./CompareHero";
import FilterChips from "./FilterChips";
import FeaturedCard from "./FeaturedCard";
import StandardCard from "./StandardCard";
import Footer from "@/components/Footer";

export default function CompareFarmlandPremium() {
  const standardCardsData = [
    {
      title: "GLC SOS 02",
      description: "High-altitude tea plantation with stable annual yield history and organic export license.",
      acreage: "12.5 Acres",
      imageUrl: "/assets/search/image2.2.svg",
      overlayText: "Satellite view"
    },
    {
      title: "GLC SOS 03",
      description: "Flood-resistant alluvial soil perfect for sustainable rice farming and seasonal pulses.",
      acreage: "45.0 Acres",
      imageUrl: "/assets/search/image2.3.svg",
      overlayText: "Soil view"
    },
    {
      title: "GLC SOS 04",
      description: "Established orchard with mature fruit-bearing trees and cold storage proximity.",
      acreage: "83.2 Acres",
      imageUrl: "/assets/search/image2.4.svg",
      overlayText: "Orchard view"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center overflow-x-hidden">
      <CompareNavigation />
      
      {/* Top Hero Section */}
      <CompareHero />

      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center pb-[100px] mt-[80px] z-20 gap-[80px]">
        {/* Filter Chips */}
        <div className="w-full max-w-[1440px] px-8 md:px-[60px]">
          <FilterChips />
        </div>

        {/* Bento Grid layout */}
        <div className="w-full max-w-[1440px] px-8 md:px-[60px] flex flex-col gap-[40px]">
          {/* Featured Wide Card */}
          <FeaturedCard />

          {/* 3 Column Standard Cards */}
          <div className="flex flex-row flex-wrap justify-between gap-[32px] w-full">
            {standardCardsData.map((card, index) => (
              <StandardCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Standard Footer Components */}
      <Footer />
    </div>
  );
}
