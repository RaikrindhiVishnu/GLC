"use client";

import React, { useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import TrendingCard from "../home/trendingfarmlands/TrendingCard";
import { useGetFarmlandByTagAndStateQuery, useGetAllTopSellingLocationsQuery } from "../../services/home";
import { useGetAllGeoMasterDataQuery, useGetAllMasterDataQuery } from "../../services/master";

export default function TopSellingGrid() {
  const searchParams = useSearchParams();
  const initialLoc = searchParams.get('loc') || "ALL";
  
  const [activeTab, setActiveTab] = React.useState(initialLoc);
  const [currentPage, setCurrentPage] = React.useState(0);

  // Sync state if URL changes
  useEffect(() => {
    const loc = searchParams.get('loc');
    if (loc && loc !== activeTab) {
      setActiveTab(loc);
      setCurrentPage(0);
    }
  }, [searchParams]);

  const { data: res, isLoading } = useGetFarmlandByTagAndStateQuery({ tag_ids: [1, 2, 3], state_id: 1 });
  const { data: topSellingRes } = useGetAllTopSellingLocationsQuery({ state_id: 1 });
  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();
  const { data: masterData } = useGetAllMasterDataQuery();
  const farmlands = res?.data || [];

  // Helper to get formatted location string and district name
  const getLocationDetails = (districtId?: number) => {
    if (!districtId || !geoDataRes?.districts) return { fullStr: "UNKNOWN LOCATION", districtName: "Unknown" };
    const district = geoDataRes.districts.slice(1).find(d => d[0] === districtId);
    if (!district) return { fullStr: "UNKNOWN LOCATION", districtName: "Unknown" };

    const districtName = String(district[3]);
    const stateId = district[1];
    const state = geoDataRes.states?.slice(1).find(s => s[0] === stateId);
    if (!state) return { fullStr: districtName.toUpperCase(), districtName };

    const stateStr = state[2] ? state[2] : state[3];
    return {
      fullStr: `${districtName}, ${stateStr}`.toUpperCase(),
      districtName
    };
  };

  // Dynamically build tabs from API Top Selling Locations
  const tabs = useMemo(() => {
    const apiLocations = topSellingRes?.data?.map((loc: any) => loc.district_name) || [];
    
    // Default fallback if API fails
    const defaultTabs = ["Tanuku", "Bhimavaram", "Rajamundry", "Eluru", "Hyderabad", "Pune", "Chennai"];
    const locsToUse = apiLocations.length > 0 ? apiLocations : defaultTabs;
    
    const baseTabs = ["ALL", ...locsToUse];
    
    // Always insert the active tab if it's missing (e.g. forced via URL)
    if (activeTab !== "ALL" && !baseTabs.includes(activeTab)) {
      return ["ALL", activeTab, ...locsToUse];
    }
    
    return baseTabs;
  }, [topSellingRes, activeTab]);

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(0); // Reset to first page on tab change
  };

  // Filter farmlands
  const filteredFarmlands = useMemo(() => {
    if (activeTab === "ALL") return farmlands;
    return farmlands.filter(f => {
      const { districtName } = getLocationDetails(f.farmland_district_id || f.location_details?.district_id);
      return districtName === activeTab;
    });
  }, [farmlands, activeTab, geoDataRes]);

  // Pagination logic (max 6 cards = 2 rows per page)
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredFarmlands.length / itemsPerPage));

  const paginatedFarmlands = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    return filteredFarmlands.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredFarmlands, currentPage]);

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
    let displayTag = "Trending Listing";
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
        description={farm.land_description || "A beautiful farmland listing."}
        price={`₹${formattedPrice}`}
        location={fullStr}
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

      {/* Location Tabs */}
      <div className="flex flex-row gap-3 overflow-x-auto hide-scrollbar mb-8 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-[40px] font-jakarta font-semibold text-[14px] md:text-[16px] leading-[24px] transition-colors cursor-pointer border ${activeTab === tab
              ? "bg-[#0F2F4C] text-white border-[#0F2F4C]"
              : "bg-white text-[#45474C] border-[#E1E3E4] hover:bg-gray-50"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Header section */}
      <div className="flex flex-row justify-between items-center mb-8">
        <h2 className="font-jakarta font-bold text-[24px] leading-[32px] text-[#131600]">
          Location: {activeTab === "ALL" ? "All Locations" : activeTab}
        </h2>
        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${currentPage === idx ? "bg-[#0F2F4C]" : "bg-[#E1E3E4] hover:bg-gray-300"
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Masonry Layout: 3 Columns */}
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[260px]">
          <span className="font-jakarta text-[#0F2F4C]">Loading trending properties...</span>
        </div>
      ) : filteredFarmlands.length === 0 ? (
        <div className="flex justify-center items-center w-full h-[260px]">
          <span className="font-jakarta text-[#0F2F4C]">No properties found for this location.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full">
          {paginatedFarmlands.map((farm, i) => renderCard(farm, i))}
        </div>
      )}
    </div>
  );
}
