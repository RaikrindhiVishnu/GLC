"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGetVerificationLandsByUserIdQuery } from "../../../services/verification";
import { useGetAllGeoMasterDataQuery } from "../../../services/master";
import TrendingFeaturedSection from "../../search/TrendingFeaturedSection";

export default function VerificationFarmlandsGrid() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setMounted(true);
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);

  const { data: res, isLoading } = useGetVerificationLandsByUserIdQuery(
    { user_id: userId || 0, offset: 0, limit: 200 },
    { skip: !mounted || !userId }
  );

  const apiFarmlands = (res?.data || []).filter((land: any) => land.is_active);
  
  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();
  const allDistricts = geoDataRes?.districts?.slice(1) || [];

  const getDistrictName = (districtId: number) => {
    if (!districtId) return "Unknown";
    const district = allDistricts.find((d: any[]) => d[0] === districtId);
    return district ? district[2] : `District ${districtId}`;
  };

  const formatPrice = (price: number) => {
    if (!price) return "₹0.0 L";
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    }
    return `₹${(price / 100000).toFixed(1)} L`;
  };

  // Pagination Logic
  const totalCount = apiFarmlands.length;
  const numPages = Math.max(1, Math.ceil(totalCount / 6));
  const dotsCount = Math.min(5, numPages);
  const displayedFarmlands = apiFarmlands.slice(currentPage * 6, (currentPage + 1) * 6);

  const renderCard = (land: any, colIndex: number) => {
    const isImageTop = land.type === "image-top";

    let cardHeight, imageHeight;
    if (colIndex === 0) {
      cardHeight = "587px";
      imageHeight = "320px";
    } else if (colIndex === 1) {
      cardHeight = "648px";
      imageHeight = "373px";
    } else {
      cardHeight = "635px";
      imageHeight = "384px";
    }

    return (
      <motion.div
        key={land.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: colIndex * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col bg-white border border-[#F3F4F5] rounded-[30px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] cursor-pointer w-full"
        style={{ minHeight: cardHeight, height: "max-content", overflow: "hidden", isolation: "isolate" }}
        onClick={() => router.push(`/home/verification/tracker?farmland=${land.id}`)}
      >
        {isImageTop && (
          <div className="relative w-full bg-[#F3F4F6] flex-shrink-0" style={{ height: imageHeight, borderTopLeftRadius: "30px", borderTopRightRadius: "30px", overflow: "hidden" }}>
            {land.image ? (
              <img 
                src={land.image} 
                alt={land.name} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                onError={(e) => { 
                  e.currentTarget.onerror = null; 
                  // Forcefully load a beautiful fallback farmland image if the AWS URL is expired/403
                  e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; 
                }} 
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-jakarta font-bold text-[28px] text-[#D1D5DB] tracking-wider">{land.name}</span>
              </div>
            )}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30 shadow-sm z-10">
              <span className="font-jakarta font-bold text-[10px] tracking-[0.2px] text-[#0F2F4C]">{land.status}</span>
            </div>
          </div>
        )}

        <div className="p-8 flex flex-col flex-1 min-h-0">
          <div className="flex flex-col gap-3">
            <h3 className="m-0 font-jakarta font-bold text-[24px] text-[#131600] truncate">{land.name}</h3>
          </div>

          <p className="m-0 mt-4 font-jakarta font-normal text-[16px] leading-[24px] text-[#45474C] overflow-hidden text-ellipsis line-clamp-2">
            {land.desc}
          </p>

          <div className="flex flex-row justify-between items-end mt-auto pt-6">
            <div className="flex flex-col">
              <span className="font-jakarta font-bold text-[18px] text-[#111827]">{land.price}</span>
              <span className="font-jakarta font-normal text-[12px] text-[#6B7280] flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="truncate max-w-[100px]">{land.location}</span>
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/home/verification/tracker?farmland=${land.id}`);
              }}
              className="text-[#00629E] font-jakarta font-bold text-[14px]"
            >
              View Details
            </button>
          </div>
        </div>

        {!isImageTop && (
          <div className="relative w-full bg-[#F3F4F6] flex-shrink-0 mt-auto" style={{ height: imageHeight, borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px", overflow: "hidden" }}>
            {land.image ? (
              <img 
                src={land.image} 
                alt={land.name} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                onError={(e) => { 
                  e.currentTarget.onerror = null; 
                  // Forcefully load a beautiful fallback farmland image if the AWS URL is expired/403
                  e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; 
                }} 
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-jakarta font-bold text-[28px] text-[#D1D5DB] tracking-wider">{land.name}</span>
              </div>
            )}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30 shadow-sm z-10">
              <span className="font-jakarta font-bold text-[10px] tracking-[0.2px] text-[#0F2F4C]">{land.status}</span>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="w-full max-w-[1248px] mx-auto px-4 lg:px-8 py-16 lg:py-24 box-border flex flex-col items-center bg-[#F8F9FA]">
      {/* Header */}
      <div className="flex flex-row justify-between items-center w-full mb-12">
        <h2 className="m-0 font-jakarta font-bold text-[24px] lg:text-[24px] text-[#131600]">
          Verification of Farmlands
        </h2>
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => router.push("/home/verification/onboard")}
            className="bg-gradient-to-r from-[#2780C4] to-[#164573] text-white font-jakarta font-bold text-[14px] px-6 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform"
          >
            UPLOAD
          </button>
          <div className="flex gap-1.5 items-center ml-2">
            {Array.from({ length: dotsCount }).map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${currentPage === i ? "bg-[#0F2F4C]" : "bg-[#E1E3E4] hover:bg-[#C5C7C8]"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[300px]">
          <span className="font-jakarta text-[#0F2F4C]">Loading verified farmlands...</span>
        </div>
      ) : displayedFarmlands.length === 0 ? (
        <div className="flex justify-center items-center w-full h-[300px]">
          <span className="font-jakarta text-[#0F2F4C]">No farmlands in verification found.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
          {displayedFarmlands.map((land: any, index: number) => {
            const colIndex = index % 3;
            let layoutType = "image-top";
            let viewLabel = "TRENDING LISTING";
            if (colIndex === 1) {
              layoutType = "text-top";
              viewLabel = "MOST VIEWED LISTING";
            } else if (colIndex === 2) {
              viewLabel = "HOT DEALS";
            }

            return renderCard({
              id: land.farmland_id.toString(),
              name: land.farmland_code,
              location: getDistrictName(land.farmland_location?.district_id),
              price: formatPrice(land.price),
              image: land.farmland_img,
              status: land.is_active ? "Active Verification" : "Pending",
              views: viewLabel,
              desc: "Verified real-time GLC farmland offering optimal returns and curated organic facilities.",
              type: layoutType
            }, colIndex);
          })}
        </div>
      )}

    </section>
  );
}
