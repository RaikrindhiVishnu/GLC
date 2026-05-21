"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
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
      {/* Mobile Navbar */}
      <div className="block lg:hidden w-full sticky top-0 z-50">
        <Navbar variant="app" active="comparepremium" forceScrolled={true} />
      </div>

      <CompareNavigation />

      {/* Top Hero Section */}
      <CompareHero />

      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center pb-24 mt-10 lg:mt-20 z-20 gap-16 lg:gap-20">
        {/* Filter Chips */}
        <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-15">
          <FilterChips />
        </div>

        {/* Bento Grid layout */}
        <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-15 flex flex-col gap-10">
          {/* Featured Wide Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FeaturedCard />
          </motion.div>

          {/* Standard Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {standardCardsData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StandardCard {...card} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Standard Footer Components */}
      <Footer />
    </div>
  );
}
