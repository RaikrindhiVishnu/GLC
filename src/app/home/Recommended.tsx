"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FarmlandCardSkeleton from "@/components/ui/FarmlandCardSkeleton";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { useGetFarmlandByTagAndStateQuery } from "../../services/home";
import { useGetUserDetailsByIdQuery } from "../../services/user";
import { useGetAllGeoMasterDataQuery } from "../../services/master";
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

export default function Recommended() {
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

  const stateId = (userDetailsResponse?.data as any)?.state_id || 1;

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

  // Fetch recommended properties with empty tag_ids and user location
  const { data: res, isLoading } = useGetFarmlandByTagAndStateQuery({ tag_ids: [], state_id: stateId });
  const farmlands = res?.data || [];

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
    const walk = (x - startX) * 2.0; 
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
      return;
    }
    router.push(`/search/farmlanddetails?id=match-${id}`);
  };



  return (
    <section id="recommended-farmlands" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      
      {/* Section Header */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[24px] mb-6 lg:mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-jakarta font-extrabold text-[24px] leading-[36px] tracking-[-0.6px] text-[#001F3F] m-0">
            Recommended
          </h2>
          <button onClick={() => router.push("/recommended")} className="bg-transparent border-none font-jakarta font-extrabold text-[14px] md:text-[18px] leading-[20px] text-[#001F3F] cursor-pointer hover:opacity-70 transition-opacity">
            View all
          </button>
        </div>
      </div>

      {/* Cards Scrollable Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[24px]">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-4 md:gap-[32px] w-full overflow-x-auto pb-[180px] -mb-[148px] hide-scrollbar select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
        <style dangerouslySetInnerHTML={{
          __html: `
          #recommended-farmlands .hide-scrollbar::-webkit-scrollbar { display: none; }
          #recommended-farmlands .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        {isLoading ? (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <FarmlandCardSkeleton key={i} variant="vertical" />
            ))}
          </>
        ) : farmlands.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[367px]">
            <span className="font-jakarta text-[#0F2F4C]">No recommended properties found.</span>
          </div>
        ) : (
          farmlands.map((item, i) => (
            <motion.div
              key={item.farmland_id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={(e: React.MouseEvent) => handleCardClick(e, String(item.farmland_id))}
              className="flex flex-col w-[300px] sm:w-[362px] min-h-[367px] h-auto shrink-0 bg-white rounded-[29px] cursor-pointer group pointer-events-auto"
              style={{
                boxShadow: "0px 7.32697px 9.15871px -5.49523px rgba(0, 0, 0, 0.1)"
              }}
            >
              {/* Top Image Area */}
              <div className="relative w-full h-[234px] shrink-0 pointer-events-none overflow-hidden rounded-t-[29px]">
                <ResolvedImage
                  imageUrl={item.farmland_img}
                  alt={item.farmland_code}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              {/* Bottom Content Area */}
              <div className="flex flex-col pt-[17px] pl-[16px] pr-[16px] pb-[20px] min-h-[132.54px] h-auto pointer-events-auto">
                <h3 className="m-0 font-jakarta font-extrabold text-[24px] leading-[28px] text-[#001F3F]">
                  {item.farmland_code}
                </h3>

                <div className="flex items-center justify-between mt-[11px] w-full">
                  <div className="flex items-center gap-[6px]">
                    <MapPin size={12} color="#000000" className="shrink-0" />
                    <span className="font-manrope font-bold text-[12px] leading-[16px] tracking-[-0.275px] text-[#000000]">
                      {item.farmland_district_id ? getLocationString(item.farmland_district_id) : "VIZAG, A.P."}
                    </span>
                  </div>
                  <div className="font-jakarta font-bold text-[14px] text-[#001F3F]">
                    ₹{Number(item.price || item.per_acer_value || 0).toLocaleString('en-IN')}
                  </div>
                </div>

                {(() => {
                  const tagIds = item.farmland_tag_ids || [];
                  const firstTagId = tagIds[0];
                  const firstTagLabel = firstTagId && TAG_MAP[firstTagId] ? TAG_MAP[firstTagId] : null;
                  const extraCount = tagIds.length > 1 ? tagIds.length - 1 : 0;
                  
                  if (!firstTagLabel) return null;

                  return (
                    <div className="relative flex items-center gap-[4px] mt-[10px] w-fit pointer-events-auto">
                      <div className="bg-white/95 border-[0.6px] border-[#CACDD4] rounded-[8px] h-[26px] px-[12px] flex items-center shadow-sm w-max pointer-events-none">
                        <span className="font-jakarta font-medium text-[12px] leading-[15px] tracking-[0.5px] capitalize text-[#091426]">
                          {firstTagLabel}
                        </span>
                      </div>

                      {/* Extra Tags Badge */}
                      {extraCount > 0 && (
                        <div 
                          className="group/badge cursor-pointer bg-white/95 border-[0.6px] border-[#CACDD4] rounded-[8px] h-[26px] px-[8px] flex items-center shadow-sm hover:bg-gray-100 transition-colors pointer-events-auto relative z-50"
                        >
                          <span className="font-jakarta font-bold text-[11px] text-[#475569]">
                            +{extraCount}
                          </span>

                          {/* Dropdown Menu (Hover Tooltip) */}
                          <div 
                            className="hidden group-hover/badge:flex absolute top-full left-[10px] mt-[8px] bg-white rounded-[16px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)] p-[12px] z-50 flex-col gap-[8px] min-w-[140px] cursor-default"
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
              </div>

            </motion.div>
          ))
        )}
        </div>
      </div>

    </section>
  );
}
