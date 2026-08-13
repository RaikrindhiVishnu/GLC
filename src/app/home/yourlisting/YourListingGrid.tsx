"use client";

import React, { useEffect, useState } from "react";
import TrendingCard from "@/app/home/trendingfarmlands/TrendingCard";
import { useGetUserUploadedFarmlandsQuery } from "@/services/upload";
import { useGetAllGeoMasterDataQuery } from "@/services/master";

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

  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();

  const getLocationString = (districtId?: number) => {
    if (!districtId || !geoDataRes?.districts) return "Location Not Available";
    const district = geoDataRes.districts.slice(1).find((d: any[]) => d[0] === districtId);
    if (!district) return "Location Not Available";
    
    const stateId = district[1];
    const state = geoDataRes.states?.slice(1).find((s: any[]) => s[0] === stateId);
    if (!state) return String(district[3]).toUpperCase();
    
    const stateStr = state[2] ? state[2] : state[3];
    return `${district[3]}, ${stateStr}`.toUpperCase();
  };

  const formatPrice = (price?: number) => {
    if (!price) return "Price on Request";
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)}Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L`;
    return `₹${price}`;
  };

  const farmlands = (uploadData?.data || []).filter((farm: any) => farm.is_active || (farm.master_milestone_stage_id && farm.master_milestone_stage_id > 1));

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(farmlands.length / itemsPerPage) || 1;
  const [currentPage, setCurrentPage] = useState(0);

  const displayedFarmlands = farmlands.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mt-12 mb-24">
      {/* Header section */}
      <div className="flex flex-row justify-between items-center mb-8">
        <h2 className="font-jakarta font-bold text-[24px] leading-[32px] text-[#131600]">
          Your Listing
        </h2>
        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer border-none p-0 ${currentPage === idx ? "bg-[#0F2F4C]" : "bg-[#E1E3E4] hover:bg-[#C1C3C4]"
                  }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="w-full text-center py-10 font-jakarta text-gray-500">Loading your listings...</div>
      ) : farmlands.length === 0 ? (
        <div className="w-full text-center py-10 font-jakarta text-gray-500">You haven't listed any farmlands yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
          {displayedFarmlands.map((farm, index) => (
            <TrendingCard
              key={farm.farmland_id}
              id={String(farm.farmland_id)}
              title={farm.farm_code || "Your Listing"}
              description={"Your listed farmland property."}
              price={formatPrice(farm.valuation)}
              location={farm.district_name ? `${farm.district_name}, ${farm.state_name}` : getLocationString(farm.location_details?.district_id || farm.farmland_locations?.district_id || farm.district_id)}
              tagText={"Your Listing"}
              imageUrl={farm.farmland_image || farm.farmland_img || ""}
              linkDestination={`/home/yourlisting/details?id=${farm.farmland_id}`}
              reverseLayout={index % 3 === 1}
              hideSaveIcon={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
