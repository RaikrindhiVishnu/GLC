"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FarmlandCardSkeleton from "@/components/ui/FarmlandCardSkeleton";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";

import { useGetFarmlandByTagAndStateQuery } from "../../services/home";
import { useGetAllMasterDataQuery, useGetAllGeoMasterDataQuery } from "../../services/master";
import { useGetUserDetailsByIdQuery } from "../../services/user";
import { s3Service } from "../../services/s3";

const TAG_MAP: Record<number, string> = {
  1: "GLC Recommended",
  2: "Most Popular",
  3: "Trending",
  4: "GLC Exclusive"
};

const ResolvedImage = ({ imageUrl, alt, className }: { imageUrl: string; alt: string; className?: string }) => {
  const [resolved, setResolved] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchImg = async () => {
      if (!imageUrl || imageUrl === "null" || imageUrl === "") {
        if (isMounted) setResolved(null);
        return;
      }
      if (imageUrl.startsWith("http") || imageUrl.startsWith("data:") || imageUrl.startsWith("/")) {
        if (isMounted) setResolved(imageUrl);
        return;
      }
      try {
        const res = await s3Service.generateUrl({ key: imageUrl, filename: imageUrl, folderPath: '' });
        if (isMounted && res.url) {
          setResolved(res.url);
        }
      } catch (e) {
        if (isMounted) setResolved(null);
      }
    };
    fetchImg();
    return () => { isMounted = false; };
  }, [imageUrl]);

  if (!resolved) {
    return (
      <div className={`w-full h-full bg-[#F4F4F5] flex flex-col items-center justify-center ${className || ""}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "8px" }}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
    );
  }

  return <Image src={resolved} alt={alt} fill className={className} onError={() => setResolved(null)} />;
};

const defaultFarmlands = [
  {
    id: "glc-sos-01",
    title: "GLC SOS 01",
    location: "Vizag, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glc1.svg",
  },
  {
    id: "glc-sos-02",
    title: "GLC SOS 02",
    location: "Tanuku, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glc2.svg",
  },
  {
    id: "glc-sos-03",
    title: "GLC SOS 03",
    location: "Bhimavaram, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glcsos3.svg",
  },
  {
    id: "glc-sos-04",
    title: "GLC SOS 04",
    location: "Rajahmundry, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glc1.svg",
  },
  {
    id: "glc-sos-05",
    title: "GLC SOS 05",
    location: "Vizag, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/PopularFarmlands/glc2.svg",
  },
];

export default function PopularFarmlands() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const [userId, setUserId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);

  const { data: userDetailsResponse } = useGetUserDetailsByIdQuery(
    { user_id: userId || 0 },
    { skip: !mounted || !userId }
  );

  const { data: masterDataResponse } = useGetAllMasterDataQuery();
  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();

  const getLocationString = (districtId?: number) => {
    if (!districtId || !geoDataRes?.districts) return "UNKNOWN LOCATION";
    const district = geoDataRes.districts.slice(1).find((d: any[]) => d[0] === districtId);
    if (!district) return "UNKNOWN LOCATION";
    
    const stateId = district[1];
    const state = geoDataRes.states?.slice(1).find((s: any[]) => s[0] === stateId);
    if (!state) return String(district[3]).toUpperCase();
    
    const stateStr = state[2] ? state[2] : state[3];
    return `${district[3]}, ${stateStr}`.toUpperCase();
  };

  const stateId = (userDetailsResponse?.data as any)?.state_id || 1;
  const tagResult = masterDataResponse?.data?.tagResult || [];
  const popularTag = tagResult.find((tag: any) => tag.code === "MOSPOP");
  const tagId = popularTag ? popularTag.id : 2;

  const { data: res, isLoading } = useGetFarmlandByTagAndStateQuery(
    { tag_ids: [tagId], state_id: stateId },
    { skip: !mounted }
  );

  const apiFarmlands = res?.data || [];

  // Drag scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragged, setDragged] = useState(false);

  // Click-and-drag scrolling handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2.0; // Drag speed multiplier

    if (Math.abs(walk) > 5) {
      setDragged(true);
    }
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleCardClick = (e: React.MouseEvent, id: string) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      router.push(`/search/farmlanddetails?id=${id}`);
    }
  };

  return (
    <section id="popular-farmlands" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">

      {/* Section Header Wrapper (Constrained to Page Margin) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[24px] mb-6 lg:mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-jakarta font-extrabold text-[20px] md:text-[24px] leading-[36px] text-[#0F2F4C] m-0 flex gap-x-[6px]">
            {"Most Popular Farmlands".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <button onClick={() => router.push("/home/popularfarmlands")} className="bg-transparent border-none font-jakarta font-extrabold text-[14px] md:text-[18px] leading-[36px] text-[#0F2F4C] cursor-pointer [-webkit-tap-highlight-color:transparent] hover:opacity-70 transition-opacity">
            View All
          </button>
        </div>
      </div>

      {/* Cards Scrollable Container (Free Drag-to-Scroll + Asymmetric Offset Layout) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[24px]">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-[26.62px] w-full overflow-x-auto pb-4 hide-scrollbar select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
        >
        <style dangerouslySetInnerHTML={{
          __html: `
          #popular-farmlands .hide-scrollbar::-webkit-scrollbar { display: none; }
          #popular-farmlands .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        {isLoading ? (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <FarmlandCardSkeleton key={i} variant="horizontal" />
            ))}
          </>
        ) : apiFarmlands.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[260px]">
            <span className="font-jakarta text-[#0F2F4C]">No popular properties found.</span>
          </div>
        ) : apiFarmlands.map((land: any, i: number) => (
          <motion.div
            key={land.farmland_id}
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={(e) => handleCardClick(e, land.farmland_id.toString())}
            className="flex flex-col lg:flex-row w-[290px] sm:w-[500px] lg:w-[600.23px] h-auto lg:min-h-[260.43px] shrink-0 bg-white border border-[#EDEEEF]/60 rounded-[32px] lg:rounded-[39.94px] overflow-hidden cursor-pointer box-border group pointer-events-auto"
          >
            {/* Left Side: Image (45%) */}
            <div className="relative w-full h-[180px] lg:w-[266.58px] lg:h-auto lg:min-h-[260.43px] shrink-0 overflow-hidden pointer-events-none">
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />

              <ResolvedImage
                imageUrl={land.farmland_img}
                alt={land.farmland_code}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Right Side: Content (55%) */}
            <div className="flex flex-1 flex-col justify-between pt-6 px-6 pb-6 lg:pt-[53.25px] lg:px-[33.28px] lg:pb-[33.28px] bg-white box-border pointer-events-none relative">

              {/* Container Stack */}
              <div className="flex flex-col items-start w-full">

                {/* Tag */}
                {(() => {
                  const tagIds = land.farmland_tag_ids || [];
                  const firstTagId = tagIds[0];
                  const firstTagLabel = firstTagId && TAG_MAP[firstTagId] ? TAG_MAP[firstTagId] : null;
                  const extraCount = tagIds.length > 1 ? tagIds.length - 1 : 0;
                  
                  if (!firstTagLabel) return null;
                  
                  const isEven = i % 2 === 0;
                  const bgColor = isEven ? "rgba(0, 31, 63, 0.1)" : "rgba(207, 102, 103, 0.1)";
                  const fgColor = isEven ? "#001F3F" : "#CF6667";

                  return (
                    <div className="relative flex items-center gap-[4px] w-fit mb-[8px]">
                      <div
                        style={{ background: bgColor }}
                        className="inline-flex items-center px-[11px] py-[4px] gap-[8px] rounded-full pointer-events-none"
                      >
                        {!isEven ? (
                          <svg width="9" height="10" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <path d="M1 1H9V11L5 8.5L1 11V1Z" fill="#CF6667" stroke="#CF6667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <path d="M6 1L7.5 4.5H11L8.2 6.5L9.5 10L6 7.8L2.5 10L3.8 6.5L1 4.5H4.5L6 1Z" fill="#001F3F" />
                          </svg>
                        )}
                        <span
                          style={{ color: fgColor }}
                          className="font-jakarta font-bold text-[9.5px] leading-[14px] tracking-[0.95px] uppercase"
                        >
                          {firstTagLabel}
                        </span>
                      </div>

                      {/* Extra Tags Badge (Hover Tooltip) */}
                      {extraCount > 0 && (
                        <div 
                          className="group/badge cursor-pointer inline-flex items-center justify-center px-[6px] py-[4px] rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] transition-colors border border-[#E2E8F0] pointer-events-auto relative z-50"
                        >
                          <span className="font-jakarta font-bold text-[9.5px] leading-[14px] text-[#475569]">
                            +{extraCount}
                          </span>

                          <div 
                            className="hidden group-hover/badge:flex absolute top-full left-[10px] mt-[8px] bg-white rounded-[16px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)] p-[12px] z-50 flex-col gap-[8px] min-w-[140px]"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {tagIds.slice(1).map((tagId: number) => (
                              <div key={tagId} className="bg-[#F4F6F8] rounded-full px-[16px] py-[8px] flex items-center justify-center transition-colors hover:bg-[#E2E8F0]">
                                <span className="font-jakarta font-semibold text-[12px] text-[#001F3F] whitespace-nowrap">
                                  {TAG_MAP[tagId] || `Tag ${tagId}`}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Title */}
                <h3 className="m-0 font-jakarta font-extrabold text-[20px] lg:text-[24px] leading-[37px] tracking-[-1.25px] text-[#001F3F] capitalize">
                  {land.farmland_code}
                </h3>

                {/* Location Wrapper */}
                <div className="flex items-center gap-[4.99px] pb-[16.64px] mt-[4.99px]">
                  <MapPin size={12} color="#43474E" className="shrink-0" />
                  <span className="font-jakarta font-medium text-[11.65px] leading-[17px] text-[#43474E] block">
                    {land.farmland_district_id ? getLocationString(land.farmland_district_id) : "Vizag, A.P."}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-[39.94px] h-[0.83px] bg-[rgba(0,31,63,0.2)] mt-0.5" />
              </div>

              {/* Description Box & Price */}
              <div className="pt-[23.3px] w-full flex flex-col gap-2">
                <p className="font-jakarta font-normal text-[11.65px] leading-[19px] text-[#43474E] m-0 line-clamp-2 w-full text-justify lg:text-left">
                  Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.
                </p>
                <div className="font-jakarta font-bold text-[14px] lg:text-[18px] text-[#001F3F] mt-2">
                  ₹{Number(land.price || land.per_acer_value || 0).toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>

    </section>
  );
}
