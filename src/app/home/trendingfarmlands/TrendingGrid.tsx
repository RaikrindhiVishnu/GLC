"use client";

import React from "react";
import TrendingCard from "./TrendingCard";

export default function TrendingGrid() {
  const cardsData = [
    {
      id: "1",
      title: "GLC SOS 01",
      description: "High-yield mango grove with established irrigation systems and road access.",
      price: "₹5.2Cr",
      location: "Vizag, A.P.",
      tagText: "Trending Listing",
      imageUrl: "/assets/search/image2.1.svg",
    },
    {
      id: "2",
      title: "GLC SOS 02",
      description: "Elevated terrain suitable for premium grape varieties and boutique agro-tourism.",
      price: "₹6.2Cr",
      location: "Tanuku, A.P.",
      tagText: "Most Viewed Listing",
      imageUrl: "/assets/search/image2.2.svg",
    },
    {
      id: "3",
      title: "GLC SOS 03",
      description: "Unrivaled water rights and pure organic certification for premium exports.",
      price: "₹6.2Cr",
      location: "Tanuku, A.P.",
      tagText: "Most Viewed Listing",
      imageUrl: "/assets/search/image2.3.svg",
    },
    {
      id: "4",
      title: "GLC SOS 04",
      description: "Flood-resistant alluvial soil perfect for sustainable rice farming.",
      price: "₹4.4Cr",
      location: "Vizag, A.P.",
      tagText: "Trending Listing",
      imageUrl: "/assets/search/image2.4.svg",
    },
    {
      id: "5",
      title: "GLC SOS 05",
      description: "Established orchard with mature fruit-bearing trees and cold storage proximity.",
      price: "₹6.2Cr",
      location: "Eluru, A.P.",
      tagText: "Hot Deal",
      imageUrl: "/assets/home/PopularFarmlands/glc1.svg",
    },
    {
      id: "6",
      title: "GLC SOS 06",
      description: "Modernized agricultural estate ready for immediate integration and yields.",
      price: "₹2.9Cr",
      location: "Eluru, A.P.",
      tagText: "Trending Listing",
      imageUrl: "/assets/home/PopularFarmlands/glc2.svg",
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mt-12 mb-24">
      {/* Header section */}
      <div className="flex flex-row justify-between items-center mb-8">
        <h2 className="font-jakarta font-bold text-[24px] leading-[32px] text-[#131600]">
          Trending farmlands
        </h2>
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0F2F4C]" />
          <div className="w-2 h-2 rounded-full bg-[#E1E3E4]" />
          <div className="w-2 h-2 rounded-full bg-[#E1E3E4]" />
        </div>
      </div>

      {/* Masonry Layout: 3 Columns */}
      <div className="flex flex-col md:flex-row gap-8 items-start w-full">
        {/* Column 1 */}
        <div className="flex-1 flex flex-col w-full gap-8">
          <TrendingCard {...cardsData[0]} />
          <TrendingCard {...cardsData[3]} />
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex flex-col w-full gap-8">
          <TrendingCard {...cardsData[1]} reverseLayout={true} />
          <TrendingCard {...cardsData[4]} reverseLayout={true} />
        </div>

        {/* Column 3 */}
        <div className="flex-1 flex flex-col w-full gap-8">
          <TrendingCard {...cardsData[2]} />
          <TrendingCard {...cardsData[5]} />
        </div>
      </div>
    </div>
  );
}
