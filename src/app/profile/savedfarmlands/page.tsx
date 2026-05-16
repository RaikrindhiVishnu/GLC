"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SavedFarmlandsHero from "./SavedFarmlandsHero";
import TrendingFeaturedSection from "@/app/search/TrendingFeaturedSection";

import Footer from "@/components/Footer";

// Parameterized structure for the 6 custom saved farmland properties matching specifications
const initialSavedProperties = [
  {
    id: "property-1",
    mapId: "match-1",
    title: "GLC SOS 01",
    price: "₹4.8Cr",
    tags: ["HIGH YIELD", "SUSTAINABLE"],
    description: "High-yield mango grove with established irrigation systems and road access.",
    img: "/assets/home/TrendingFarmlands/glcsos01.svg",
    bookmarked: true,
  },
  {
    id: "property-2",
    mapId: "match-2",
    title: "GLC SOS 02",
    price: "₹6.2Cr",
    tags: ["ELEVATED", "PREMIUM"],
    description: "Elevated terrain suitable for premium grape varieties and boutique agro- tourism.",
    img: "/assets/home/TrendingFarmlands/glcsos02.svg",
    bookmarked: true,
  },
  {
    id: "property-3",
    mapId: "match-3",
    title: "GLC SOS 03",
    price: "₹5.9Cr",
    tags: ["ORGANIC", "EXPORT READY"],
    description: "Unrivaled water rights and pure organic certification for premium exports.",
    img: "/assets/home/TrendingFarmlands/glcsos03.svg",
    bookmarked: true,
  },
  {
    id: "property-4",
    mapId: "match-4",
    title: "GLC SOS 04",
    price: "₹4.6Cr",
    tags: ["HIGH YIELD", "SUSTAINABLE"],
    description: "High-yield mango grove with established irrigation systems and road access.",
    img: "/assets/home/PopularFarmlands/glc1.svg",
    bookmarked: true,
  },
  {
    id: "property-5",
    mapId: "match-5",
    title: "GLC SOS 05",
    price: "₹6.2Cr",
    tags: ["ELEVATED", "PREMIUM"],
    description: "Elevated terrain suitable for premium grape varieties and boutique agro- tourism.",
    img: "/assets/home/PopularFarmlands/glc2.svg",
    bookmarked: true,
  },
  {
    id: "property-6",
    mapId: "match-6",
    title: "GLC SOS 06",
    price: "₹5.9Cr",
    tags: ["ORGANIC", "EXPORT READY"],
    description: "Unrivaled water rights and pure organic certification for premium exports.",
    img: "/assets/home/PopularFarmlands/glcsos3.svg",
    bookmarked: true,
  },
];

export default function SavedFarmlandsPage() {
  const router = useRouter();
  const [properties, setProperties] = useState(initialSavedProperties);

  // Toggle bookmark icon state locally to create a rich responsive micro-interaction
  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setProperties(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, bookmarked: !item.bookmarked };
      }
      return item;
    }));
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-[#F8F9FA] relative select-none">
      {/* Immersive Top Hero Component mapped directly to layout specs */}
      <SavedFarmlandsHero />

      {/* ─── SAVED FARMLANDS CORE GALLERY STAGE ─── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 flex flex-col gap-8 md:gap-[32px] z-10">
        {/* Section Header Row */}
        <div className="w-full flex flex-row items-center justify-between border-b border-gray-200/60 pb-4">
          <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold text-[#131600] font-jakarta tracking-tight">
            Saved Farmlands
          </h2>

          {/* Right Indicator Dot Triggers matching exact spatial dump items */}
          <div className="flex flex-row items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F2F4C] block shadow-xs" title="Page index 1" />
            <span className="w-2 h-2 rounded-full bg-[#E1E3E4] block transition-colors hover:bg-gray-400 cursor-pointer" title="Page index 2" />
            <span className="w-2 h-2 rounded-full bg-[#E1E3E4] block transition-colors hover:bg-gray-400 cursor-pointer" title="Page index 3" />
          </div>
        </div>

        {/* Master Responsive Grid Container displaying 6 specific premium property entries */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[32px]">
          {properties.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/search/farmlanddetails?id=${item.mapId}`)}
              className="group flex flex-col w-full bg-white rounded-[30px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-gray-100/40 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
            >
              {/* Card Image Area with upper hover overlay support */}
              <div className="relative w-full h-[280px] sm:h-[320px] bg-gray-50 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Glassmorphic Saved Heart Toggle Tool button */}
                <button
                  onClick={(e) => toggleBookmark(item.id, e)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-transform active:scale-90 hover:bg-white shadow-sm z-10"
                  title={item.bookmarked ? "Remove from saved assets" : "Add to saved assets"}
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={item.bookmarked ? "#2780C4" : "none"}
                    stroke="#2780C4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>

              {/* Lower Body Information Container */}
              <div className="flex flex-col p-6 sm:p-[32px] gap-3 flex-grow justify-between bg-white">
                <div className="flex flex-col gap-3">
                  {/* Categorized Tag array layout */}
                  <div className="flex flex-row flex-wrap items-center gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#E7E8E9] rounded-full text-[10px] font-bold text-[#45474C] font-jakarta tracking-wide uppercase block"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title Heading */}
                  <h3 className="text-xl sm:text-[24px] font-bold text-[#131600] font-jakarta leading-tight group-hover:text-[#2780C4] transition-colors">
                    {item.title}
                  </h3>

                  {/* Rich Subtitle Description layout supporting specific text wrapping specifications */}
                  <p className="text-sm sm:text-[16px] text-[#45474C] font-jakarta leading-[24px] line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Card Control Footer containing absolute monetary asset value & detail action triggers */}
                <div className="flex flex-row items-center justify-between pt-4 border-t border-gray-100 mt-2">
                  <span className="text-lg sm:text-[20px] font-bold text-[#091426] font-jakarta">
                    {item.price}
                  </span>

                  <div className="flex flex-row items-center gap-1 text-[#00629E] font-bold font-jakarta text-xs sm:text-[14px] group-hover:underline">
                    <span>View Details</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HIGHLIGHTED 3D COVERFLOW TRENDING CAROUSEL ─── */}
      <section className="w-full mt-12 overflow-hidden z-10">
        <TrendingFeaturedSection />
      </section>

      {/* ─── DYNAMIC GRAPHICAL STEP PIPELINE & TRAILING BANNER ─── */}


      {/* ─── MASTER EDGE-TO-EDGE PLATFORM FOOTER ─── */}
      <Footer />
    </main>
  );
}
