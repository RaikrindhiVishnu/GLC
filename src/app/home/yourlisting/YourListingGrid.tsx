"use client";

import React, { useEffect, useState } from "react";
import TrendingCard from "@/app/home/trendingfarmlands/TrendingCard";
import { useGetUserUploadedFarmlandsQuery } from "@/services/upload";

export default function YourListingGrid() {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUserId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);

  const { data: uploadData, isLoading } = useGetUserUploadedFarmlandsQuery(
    { userId: userId },
    { skip: userId === 0 }
  );

  const formatPrice = (price?: number) => {
    if (!price) return "Price on Request";
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)}Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L`;
    return `₹${price}`;
  };

  const farmlands = uploadData?.data || [];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mt-12 mb-24">
      {/* Header section */}
      <div className="flex flex-row justify-between items-center mb-8">
        <h2 className="font-jakarta font-bold text-[24px] leading-[32px] text-[#131600]">
          Your Listing
        </h2>
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0F2F4C]" />
          <div className="w-2 h-2 rounded-full bg-[#E1E3E4]" />
          <div className="w-2 h-2 rounded-full bg-[#E1E3E4]" />
        </div>
      </div>

      {isLoading ? (
        <div className="w-full text-center py-10 font-jakarta text-gray-500">Loading your listings...</div>
      ) : farmlands.length === 0 ? (
        <div className="w-full text-center py-10 font-jakarta text-gray-500">You haven't listed any farmlands yet.</div>
      ) : (
        /* Masonry Layout: 3 Columns */
        <div className="flex flex-col md:flex-row gap-8 items-start w-full">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col w-full gap-8">
            {farmlands.filter((_, i) => i % 3 === 0).map((farm) => (
              <TrendingCard
                key={farm.farmland_id}
                id={String(farm.farmland_id)}
                title={farm.farm_code || "Your Listing"}
                description={"Your listed farmland property."}
                price={formatPrice(farm.valuation)}
                location={"Location N/A"}
                tagText={"Your Listing"}
                imageUrl={farm.farmland_img || "/assets/search/image2.1.svg"}
                linkDestination={`/home/yourlisting/details?id=${farm.farmland_id}`}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col w-full gap-8">
            {farmlands.filter((_, i) => i % 3 === 1).map((farm) => (
              <TrendingCard
                key={farm.farmland_id}
                id={String(farm.farmland_id)}
                title={farm.farm_code || "Your Listing"}
                description={"Your listed farmland property."}
                price={formatPrice(farm.valuation)}
                location={"Location N/A"}
                tagText={"Your Listing"}
                imageUrl={farm.farmland_img || "/assets/search/image2.1.svg"}
                linkDestination={`/home/yourlisting/details?id=${farm.farmland_id}`}
                reverseLayout={true}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col w-full gap-8">
            {farmlands.filter((_, i) => i % 3 === 2).map((farm) => (
              <TrendingCard
                key={farm.farmland_id}
                id={String(farm.farmland_id)}
                title={farm.farm_code || "Your Listing"}
                description={"Your listed farmland property."}
                price={formatPrice(farm.valuation)}
                location={"Location N/A"}
                tagText={"Your Listing"}
                imageUrl={farm.farmland_img || "/assets/search/image2.1.svg"}
                linkDestination={`/home/yourlisting/details?id=${farm.farmland_id}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
