"use client";

import React, { useMemo } from "react";
import FarmlandCardSkeleton from "@/components/ui/FarmlandCardSkeleton";
import TrendingCard from "./TrendingCard";
import { useGetFarmlandByTagAndStateQuery } from "../../../services/home";
import { useGetAllGeoMasterDataQuery, useGetAllMasterDataQuery } from "../../../services/master";
import { mapTagIdsToNames } from "../../../utils/tagMapper";

export default function TrendingGrid() {
  const [currentPage, setCurrentPage] = React.useState(0);

  // Fetch Trending tags (id=1, 2, 3)
  const { data: res, isLoading } = useGetFarmlandByTagAndStateQuery({ tag_ids: [1, 2, 3], state_id: 1 });
  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();
  const { data: masterData } = useGetAllMasterDataQuery();
  
  const farmlands = res?.data || [];

  // Helper to get formatted location string
  const getLocationDetails = (districtId?: number) => {
    if (!districtId || !geoDataRes?.districts) return { fullStr: "UNKNOWN LOCATION" };
    const district = geoDataRes.districts.slice(1).find(d => d[0] === districtId);
    if (!district) return { fullStr: "UNKNOWN LOCATION" };

    const districtName = String(district[3]);
    const stateId = district[1];
    const state = geoDataRes.states?.slice(1).find(s => s[0] === stateId);
    if (!state) return { fullStr: districtName.toUpperCase() };

    const stateStr = state[2] ? state[2] : state[3];
    return {
      fullStr: `${districtName}, ${stateStr}`.toUpperCase(),
    };
  };

  // Pagination logic (max 6 cards = 2 rows per page)
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(farmlands.length / itemsPerPage));
  
  const paginatedFarmlands = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    return farmlands.slice(startIndex, startIndex + itemsPerPage);
  }, [farmlands, currentPage]);

  const renderCard = (farm: any, i: number) => {
    const { fullStr } = getLocationDetails(farm.farmland_district_id || farm.location_details?.district_id);
    let imgUrl = farm.farmland_image || farm.farmland_img;
    if (imgUrl === "null" || imgUrl?.toLowerCase().endsWith('.pdf')) {
      imgUrl = "";
    }
    
    // Format price
    const rawPrice = farm.price || farm.per_acer_value || 0;
    const formattedPrice = Number(rawPrice).toLocaleString('en-IN');
    
    // Map tag
    const tagsArr = farm.farmland_tag_ids || farm.tag_ids;
    let displayTags: string[] = mapTagIdsToNames(tagsArr, masterData);
    
    // Determine layout based on column
    const colIndex = i % 3;
    const isReverse = colIndex === 1; // Middle column is text-top
    let imgHeight = "320px"; // Left column
    let cHeight = "587px";
    
    if (colIndex === 1) {
      imgHeight = "373px"; // Middle column
      cHeight = "648px";
    } else if (colIndex === 2) {
      imgHeight = "390px"; // Right column
      cHeight = "640px";
    }
    
    return (
      <TrendingCard
        key={farm.farmland_id}
        id={farm.farmland_id.toString()}
        title={farm.farmland_code}
        description={farm.land_description || "A beautiful farmland listing."}
        price={`₹${formattedPrice}`}
        location={fullStr}
        tags={displayTags}
        imageUrl={imgUrl}
        reverseLayout={isReverse}
        imageHeight={imgHeight}
        cardHeight={cHeight}
        linkDestination={`/search/farmlanddetails?id=${farm.farmland_id}`}
      />
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mt-12 mb-24 z-20">
      {/* Header section */}
      <div className="flex flex-row justify-between items-center mb-8">
        <h2 className="font-jakarta font-bold text-[24px] leading-[32px] text-[#131600]">
          Trending farmlands
        </h2>
        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                  currentPage === idx ? "bg-[#0F2F4C]" : "bg-[#E1E3E4] hover:bg-[#A0A5AA]"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CSS Grid Layout: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full min-h-[648px]">
        {isLoading ? (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <FarmlandCardSkeleton key={i} variant="horizontal" />
            ))}
          </>
        ) : paginatedFarmlands.length > 0 ? (
          paginatedFarmlands.map((farm, i) => renderCard(farm, i))
        ) : (
          <div className="col-span-1 md:col-span-3 flex justify-center items-center py-20">
            <span className="font-jakarta text-[#0F2F4C]">No trending properties found.</span>
          </div>
        )}
      </div>
    </div>
  );
}
