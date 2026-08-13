"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { useGetFarmlandByTagAndStateQuery } from "../../services/home";
import { useGetUserDetailsByIdQuery } from "../../services/user";
import { useGetAllGeoMasterDataQuery } from "../../services/master";

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

  const getTagText = (index: number) => {
    const tags = ["Most Bookmarked", "Most Popular", "Most Viewed", "Hot Deals"];
    return tags[index % tags.length];
  };

  return (
    <section id="recommended-farmlands" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      
      {/* Section Header */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[60px] mb-6 lg:mb-8">
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
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[60px]">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-4 md:gap-[32px] w-full overflow-x-auto pb-8 hide-scrollbar select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
        <style dangerouslySetInnerHTML={{
          __html: `
          #recommended-farmlands .hide-scrollbar::-webkit-scrollbar { display: none; }
          #recommended-farmlands .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        {isLoading ? (
          <div className="flex justify-center items-center w-full h-[367px]">
            <span className="font-jakarta text-[#0F2F4C]">Loading recommended properties...</span>
          </div>
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
              className="flex flex-col w-[300px] sm:w-[362px] min-h-[367px] h-auto shrink-0 bg-white rounded-[29px] overflow-hidden cursor-pointer group pointer-events-auto"
              style={{
                boxShadow: "0px 7.32697px 9.15871px -5.49523px rgba(0, 0, 0, 0.1)"
              }}
            >
              {/* Top Image Area */}
              <div className="relative w-full h-[234px] shrink-0 pointer-events-none">
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

              {/* Bottom Content Area */}
              <div className="flex flex-col pt-[17px] pl-[16px] pr-[16px] pb-[20px] min-h-[132.54px] h-auto pointer-events-none">
                <h3 className="m-0 font-jakarta font-extrabold text-[24px] leading-[28px] text-[#001F3F]">
                  {item.farmland_code}
                </h3>

                <div className="flex items-center gap-[6px] mt-[11px]">
                  <MapPin size={12} color="#000000" className="shrink-0" />
                  <span className="font-manrope font-bold text-[12px] leading-[16px] tracking-[-0.275px] text-[#000000]">
                    {item.farmland_district_id ? getLocationString(item.farmland_district_id) : "VIZAG, A.P."}
                  </span>
                </div>

                <div className="mt-[10px] bg-white/95 border-[0.6px] border-[#CACDD4] rounded-[8px] h-[26px] px-[12px] flex items-center shadow-sm w-max">
                  <span className="font-jakarta font-medium text-[12px] leading-[15px] tracking-[0.5px] capitalize text-[#091426]">
                    {getTagText(i)}
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
