"use client";

import React, { useMemo } from "react";
import TrendingCard from "../trendingfarmlands/TrendingCard";
import { useGetFarmlandByTagAndStateQuery } from "../../../services/home";
import { useGetAllGeoMasterDataQuery, useGetAllMasterDataQuery } from "../../../services/master";

export default function PopularGrid() {
  const [currentPage, setCurrentPage] = React.useState(0);

  // Fetch MOSPOP tag (id=2)
  const { data: res, isLoading } = useGetFarmlandByTagAndStateQuery({ tag_ids: [2], state_id: 1 });
  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();
  const { data: masterData } = useGetAllMasterDataQuery();
  
  const defaultFarmlands = [
    { farmland_id: "glc-sos-01", farmland_code: "GLC SOS 01", fallback_location: "VIZAG, A.P.", land_description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.", farmland_img: "/assets/home/PopularFarmlands/glc1.svg", price: 15000000 },
    { farmland_id: "glc-sos-02", farmland_code: "GLC SOS 02", fallback_location: "TANUKU, A.P.", land_description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.", farmland_img: "/assets/home/PopularFarmlands/glc2.svg", price: 12000000 },
    { farmland_id: "glc-sos-03", farmland_code: "GLC SOS 03", fallback_location: "BHIMAVARAM, A.P.", land_description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.", farmland_img: "/assets/home/PopularFarmlands/glcsos3.svg", price: 18000000 },
    { farmland_id: "glc-sos-04", farmland_code: "GLC SOS 04", fallback_location: "RAJAHMUNDRY, A.P.", land_description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.", farmland_img: "/assets/home/PopularFarmlands/glc1.svg", price: 21000000 },
    { farmland_id: "glc-sos-05", farmland_code: "GLC SOS 05", fallback_location: "VIZAG, A.P.", land_description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.", farmland_img: "/assets/home/PopularFarmlands/glc2.svg", price: 14000000 },
  ];
  const farmlands = res?.data && res.data.length > 0 ? res.data : defaultFarmlands;

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
    const locationStr = farm.fallback_location || getLocationDetails(farm.farmland_district_id || farm.location_details?.district_id).fullStr;
    let imgUrl = farm.farmland_image || farm.farmland_img;
    if (imgUrl === "null" || imgUrl?.toLowerCase().endsWith('.pdf')) {
      imgUrl = "";
    }
    
    // Format price
    const rawPrice = farm.price || farm.per_acer_value || 0;
    const formattedPrice = Number(rawPrice).toLocaleString('en-IN');
    
    // Map tag
    let displayTag = "Most Popular";
    const tagsArr = farm.farmland_tag_ids || farm.tag_ids;
    if (Array.isArray(tagsArr) && tagsArr.length > 0) {
      const tagsList = masterData?.data?.tagResult || (masterData as any)?.tagResult || [];
      const found = tagsList.find((t: any) => t.id === Number(tagsArr[0]) || t.tag_id === Number(tagsArr[0]));
      if (found) {
        displayTag = found.description || found.name || found.tag_name || displayTag;
      }
    }
    
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
        description={farm.land_description || "A highly sought-after farmland listing."}
        price={`₹${formattedPrice}`}
        location={locationStr}
        tagText={displayTag}
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
          Most Popular Farmlands
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
          <div className="col-span-1 md:col-span-3 flex justify-center items-center py-20">
            <span className="font-jakarta text-[#0F2F4C]">Loading popular properties...</span>
          </div>
        ) : paginatedFarmlands.length > 0 ? (
          paginatedFarmlands.map((farm, i) => renderCard(farm, i))
        ) : (
          <div className="col-span-1 md:col-span-3 flex justify-center items-center py-20">
            <span className="font-jakarta text-[#0F2F4C]">No popular properties found.</span>
          </div>
        )}
      </div>
    </div>
  );
}
