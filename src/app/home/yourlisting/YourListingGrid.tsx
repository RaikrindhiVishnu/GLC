"use client";

import React, { useEffect, useState } from "react";
import { useGetUserUploadedFarmlandsQuery } from "@/services/upload";
import { useGetAllGeoMasterDataQuery } from "@/services/master";
import { s3Service } from "@/services/s3";
import { useRouter } from "next/navigation";

interface YourListingCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  tagText: string;
  imageUrl: string;
  linkDestination: string;
  reverseLayout?: boolean;
}

function YourListingCard({
  id,
  title,
  description,
  price,
  location,
  tagText,
  imageUrl,
  linkDestination,
  reverseLayout = false,
}: YourListingCardProps) {
  const router = useRouter();
  const [resolvedImageUrl, setResolvedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      if (!imageUrl || imageUrl === "null" || imageUrl === "") {
        if (isMounted) setResolvedImageUrl(null);
        return;
      }
      if (imageUrl.startsWith("http") || imageUrl.startsWith("data:") || imageUrl.startsWith("/")) {
        if (isMounted) setResolvedImageUrl(imageUrl);
        return;
      }
      try {
        const res = await s3Service.generateUrl({ key: imageUrl, filename: imageUrl, folderPath: '' });
        if (isMounted && res.url) {
          setResolvedImageUrl(res.url);
        }
      } catch (e) {
        if (isMounted) setResolvedImageUrl(null);
      }
    };
    fetchImage();
    return () => { isMounted = false; };
  }, [imageUrl]);

  return (
    <div
      className={`w-full bg-white rounded-[30px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex ${
        reverseLayout ? 'flex-col-reverse' : 'flex-col'
      } mb-6 border border-[#E5E7EB]/50`}
    >
      {/* Top Image Section */}
      <div 
        className="relative w-full flex flex-col items-center justify-center bg-[#F4F4F5] shrink-0"
        style={{ height: reverseLayout ? '373px' : '320px' }}
      >
        {resolvedImageUrl ? (
          <img
            src={resolvedImageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setResolvedImageUrl(null)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-[#9CA3AF]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="font-jakarta text-[12px] font-medium">No Image</span>
          </div>
        )}
      </div>

      {/* Content Section (Figma Aligned) */}
      <div className="p-8 flex flex-col items-start text-left gap-3 flex-1 justify-between">
        <div className="flex flex-col items-start gap-3 w-full">
          {/* Tag Pill */}
          <div className="bg-[#E7E8E9] rounded-full px-3 py-1 self-start inline-flex items-center">
            <span className="font-jakarta font-bold text-[10px] leading-[15px] uppercase text-[#45474C]">
              {tagText}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-jakarta font-bold text-[24px] leading-[32px] text-[#131600] text-left w-full m-0">
            {title}
          </h3>

          {/* Description */}
          <p className="font-jakarta font-normal text-[16px] leading-[24px] text-[#45474C] text-left w-full m-0 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Footer row */}
        <div className="flex flex-row items-end justify-between w-full mt-4 pt-2 gap-4">
          <div className="flex flex-col items-start gap-[3.5px]">
            <span className="font-jakarta font-bold text-[18px] leading-[28px] text-[#111827]">
              {price}
            </span>
            <div className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                <path d="M6 0C3.79086 0 2 1.79086 2 4C2 7 6 12 6 12C6 12 10 7 10 4C10 1.79086 8.20914 0 6 0ZM6 5.5C5.17157 5.5 4.5 4.82843 4.5 4C4.5 3.17157 5.17157 2.5 6 2.5C6.82843 2.5 7.5 3.17157 7.5 4C7.5 4.82843 6.82843 5.5 6 5.5Z" fill="#6B7280" />
              </svg>
              <span className="font-jakarta font-normal text-[12px] leading-[16px] text-[#6B7280]">
                {location}
              </span>
            </div>
          </div>

          <button
            onClick={() => router.push(linkDestination)}
            className="font-jakarta font-bold text-[14px] leading-[20px] text-[#00629E] hover:underline bg-transparent border-none cursor-pointer p-0 shrink-0 self-end"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

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

  const getLocationString = (farm: any) => {
    if (farm.district_name && farm.state_name) {
      return `${farm.district_name}, ${farm.state_name}`.toUpperCase();
    }
    const districtId = farm.location_details?.district_id || farm.farmland_locations?.district_id || farm.district_id;
    if (!districtId || !geoDataRes?.districts) return "Location Not Available";
    const district = geoDataRes.districts.slice(1).find((d: any[]) => d[0] === districtId);
    if (!district) return "Location Not Available";
    
    const stateId = district[1];
    const state = geoDataRes.states?.slice(1).find((s: any[]) => s[0] === stateId);
    if (!state) return String(district[3]).toUpperCase();
    
    const stateStr = state[2] ? state[2] : state[3];
    return `${district[3]}, ${stateStr}`.toUpperCase();
  };

  const formatPrice = (price?: number | string) => {
    if (!price) return "Price on Request";
    const num = Number(price);
    if (isNaN(num)) return "Price on Request";
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(1)}Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(1)}L`;
    return `₹${num}`;
  };

  const farmlands = uploadData?.data || [];

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
          Your Listing ({farmlands.length})
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
          {displayedFarmlands.map((farm: any, index: number) => (
            <YourListingCard
              key={farm.farmland_id}
              id={String(farm.farmland_id)}
              title={farm.farm_code || farm.farmland_code || `FL${farm.farmland_id}`}
              description={"Your listed farmland property."}
              price={formatPrice(farm.valuation)}
              location={getLocationString(farm)}
              tagText={"Your Listing"}
              imageUrl={farm.farmland_image || farm.farmland_img || ""}
              linkDestination={`/home/yourlisting/details?id=${farm.farmland_id}`}
              reverseLayout={index % 3 === 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
