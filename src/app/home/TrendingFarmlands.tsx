"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FarmlandCardSkeleton from "@/components/ui/FarmlandCardSkeleton";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { useGetFarmlandByTagAndStateQuery } from "../../services/home";
import { useGetAllGeoMasterDataQuery } from "../../services/master";

const TAG_MAP: Record<number, string> = {
  1: "GLC Recommended",
  2: "Most Popular",
  3: "Trending",
  4: "GLC Exclusive"
};

export default function TrendingFarmlands() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: res, isLoading } = useGetFarmlandByTagAndStateQuery({ tag_ids: [1, 2, 3], state_id: 1 });
  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();
  const farmlands = res?.data || [];

  // Helper to format location
  const getLocationString = (districtId?: number) => {
    if (!districtId || !geoDataRes?.districts) return "UNKNOWN LOCATION";
    const district = geoDataRes.districts.slice(1).find(d => d[0] === districtId);
    if (!district) return "UNKNOWN LOCATION";
    
    const stateId = district[1];
    const state = geoDataRes.states?.slice(1).find(s => s[0] === stateId);
    if (!state) return String(district[3]).toUpperCase();
    
    const stateStr = state[2] ? state[2] : state[3];
    return `${district[3]}, ${stateStr}`.toUpperCase();
  };

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
    const walk = (x - startX) * 2.0; // Responsive drag velocity multiplier

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
    <section id="trending-farmlands" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">

      {/* Section Header Wrapper (Constrained to Page Margin) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[60px] mb-6 lg:mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-jakarta font-extrabold text-[20px] md:text-[24px] leading-[1.2] text-[#0F2F4C] m-0 flex gap-x-[6px]">
            {"Trending Farmlands".split(" ").map((word, i) => (
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
          <button onClick={() => router.push("/home/trendingfarmlands")} className="bg-transparent border-none font-jakarta font-extrabold text-[14px] md:text-[18px] leading-[40px] text-[#0F2F4C] cursor-pointer [-webkit-tap-highlight-color:transparent] hover:opacity-70 transition-opacity">
            View all
          </button>
        </div>
      </div>

      {/* Cards Scrollable Container (Free Drag-to-Scroll + Asymmetric Offset Layout) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[60px]">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-4 md:gap-6 lg:gap-[30px] w-full overflow-x-auto pb-[180px] -mb-[164px] hide-scrollbar select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
        >
        <style dangerouslySetInnerHTML={{
          __html: `
          #trending-farmlands .hide-scrollbar::-webkit-scrollbar { display: none; }
          #trending-farmlands .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        {isLoading ? (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <FarmlandCardSkeleton key={i} variant="horizontal" />
            ))}
          </>
        ) : farmlands.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[260px]">
            <span className="font-jakarta text-[#0F2F4C]">No trending properties found.</span>
          </div>
        ) : (
          farmlands.map((item, i) => (
            <motion.div
              key={item.farmland_id}
              initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={(e) => handleCardClick(e, item.farmland_id.toString())}
              className="flex flex-col sm:flex-row w-[280px] sm:w-[450px] lg:w-[511px] h-auto sm:min-h-[200px] lg:min-h-[261px] shrink-0 bg-white shadow-[0px_11px_38px_rgba(0,31,63,0.04)] rounded-[24px] lg:rounded-[45px] cursor-pointer box-border group pointer-events-auto"
            >
              {/* Left Side: Image */}
              <div className="relative w-full h-[180px] sm:w-[180px] lg:w-[205px] sm:h-full shrink-0 pointer-events-none overflow-hidden rounded-t-[24px] sm:rounded-t-none sm:rounded-l-[24px] lg:rounded-l-[45px]">
                <Image
                  src={
                    (() => {
                      const url = item.farmland_img;
                      if (!url || url === "null" || url === "") return `/assets/home/TrendingFarmlands/glcsos0${(i % 3) + 1}.svg`;
                      if (url.toLowerCase().endsWith('.pdf')) return `/assets/home/TrendingFarmlands/glcsos0${(i % 3) + 1}.svg`;
                      if (url.startsWith("http") || url.startsWith("data:") || url.startsWith("/")) return url;
                      return `/assets/home/TrendingFarmlands/glcsos0${(i % 3) + 1}.svg`;
                    })()
                  }
                  alt={item.farmland_code}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-6 lg:px-[30px] lg:pt-[48px] lg:pb-[49px] box-border">
                <div className="flex flex-col gap-[8px]">

                  {/* Tag */}
                  {(() => {
                    const tagIds = item.farmland_tag_ids || [];
                    const firstTagId = tagIds[0];
                    const firstTagLabel = firstTagId && TAG_MAP[firstTagId] ? TAG_MAP[firstTagId] : null;
                    const extraCount = tagIds.length > 1 ? tagIds.length - 1 : 0;
                    
                    if (!firstTagLabel) return null;
                    
                    const isEven = i % 2 === 0;
                    const bgColor = isEven ? "rgba(0, 31, 63, 0.1)" : "rgba(207, 102, 103, 0.1)";
                    const fgColor = isEven ? "#001F3F" : "#CF6667";

                    return (
                      <div className="relative flex items-center gap-[4px] w-fit">
                        <div
                          style={{ background: bgColor }}
                          className="inline-flex items-center px-[11px] py-[4px] gap-[8px] rounded-full pointer-events-none"
                        >
                          {!isEven ? (
                            /* Red Label: Bookmark Icon */
                            <svg width="9" height="10" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                              <path d="M1 1H9V11L5 8.5L1 11V1Z" fill="#CF6667" stroke="#CF6667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            /* Grey Label: Star Icon */
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

                            {/* Dropdown Menu */}
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
                  <h3 className="m-0 font-jakarta font-extrabold text-[20px] lg:text-[24px] lg:leading-[28px] text-[#001F3F] pt-[8px] pointer-events-none">
                    {item.farmland_code}
                  </h3>

                  {/* Description */}
                  <p className="m-0 font-jakarta font-normal text-[12px] lg:text-[13px] lg:leading-[22px] text-[#43474E] line-clamp-2 pointer-events-none">
                    Verified real-time GLC farmland offering optimal returns and curated organic facilities.
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center pt-[20px] lg:pt-[28px] mt-[12px] lg:mt-[16px] border-t border-[#EDEEEF] gap-[8px] pointer-events-none w-full">
                  <MapPin size={14} color="#64748B" className="shrink-0" />
                  <span className="font-jakarta font-bold text-[10px] lg:text-[11px] lg:leading-[15px] tracking-[0.3px] uppercase text-[#64748B]">
                    {getLocationString(item.farmland_district_id)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        )}
        </div>
      </div>

    </section>
  );
}
