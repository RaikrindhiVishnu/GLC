"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CompareNavigation from "./CompareNavigation";
import CompareHero from "./CompareHero";
import FilterChips from "./FilterChips";
import FeaturedCard from "./FeaturedCard";
import StandardCard from "./StandardCard";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useGetFarmlandsForComparisonQuery } from "@/services/farmland";
import { useGetAllMasterDataQuery } from "@/services/master";

export default function CompareFarmlandPremium() {
  const { data: comparisonResponse, isLoading } = useGetFarmlandsForComparisonQuery({ state_id: 12 });
  const { data: masterData } = useGetAllMasterDataQuery();

  const soilTypes = masterData?.data?.soilTypeResult || [];

  const dynamicCardsData = comparisonResponse?.data?.map(farm => {
    const soil = soilTypes.find(s => s.id === farm.soil_type_id);
    return {
      title: farm.farmland_code,
      description: `₹${farm.price?.toLocaleString()} - Premium farmland location.`,
      acreage: `${farm.acers} Acres`,
      imageUrl: farm.farmland_img || "/assets/search/image2.2.svg",
      overlayText: soil?.name || "View"
    };
  }) || [];

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
            {isLoading ? (
              <div className="col-span-full text-center py-10 font-bold text-[#0F2F4C]">Loading comparisons...</div>
            ) : dynamicCardsData.length === 0 ? (
              <div className="col-span-full text-center py-10 text-[#45474C]">No farmlands found for comparison in this state.</div>
            ) : (
              dynamicCardsData.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StandardCard {...card} />
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>

      <CTA />

      {/* Standard Footer Components */}
      <Footer />
    </div>
  );
}
