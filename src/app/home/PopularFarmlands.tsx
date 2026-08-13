"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";

import { useGetFarmlandByTagAndStateQuery } from "../../services/home";
import { useGetAllMasterDataQuery, useGetAllGeoMasterDataQuery } from "../../services/master";
import { useGetUserDetailsByIdQuery } from "../../services/user";

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

  const apiFarmlands = res?.data && res.data.length > 0 
    ? res.data.map((item: any, idx: number) => {
        const hasValidImg = item.farmland_img && (item.farmland_img.startsWith('/') || item.farmland_img.startsWith('http') || item.farmland_img.startsWith('data:')) && !item.farmland_img.toLowerCase().endsWith('.pdf');
        return {
          id: item.farmland_id.toString(),
          title: item.farmland_code,
          location: item.farmland_district_id ? getLocationString(item.farmland_district_id) : "Vizag, A.P.",
          description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
          img: hasValidImg ? item.farmland_img : `/assets/home/PopularFarmlands/glc${(idx % 2) + 1}.svg`
        };
      })
    : defaultFarmlands;

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
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[60px] mb-6 lg:mb-8">
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
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[60px]">
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
          <div className="flex justify-center items-center w-full h-[260px]">
            <span className="font-jakarta text-[#0F2F4C]">Loading popular properties...</span>
          </div>
        ) : apiFarmlands.map((land, i) => (
          <motion.div
            key={land.id}
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={(e) => handleCardClick(e, land.id)}
            className="flex flex-col lg:flex-row w-[290px] sm:w-[500px] lg:w-[600.23px] h-auto lg:min-h-[260.43px] shrink-0 bg-white border border-[#EDEEEF]/60 rounded-[32px] lg:rounded-[39.94px] overflow-hidden cursor-pointer box-border group pointer-events-auto"
          >
            {/* Left Side: Image (45%) */}
            <div className="relative w-full h-[180px] lg:w-[266.58px] lg:h-auto lg:min-h-[260.43px] shrink-0 overflow-hidden pointer-events-none">
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />

              <Image
                src={land.img}
                alt={land.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Right Side: Content (55%) */}
            <div className="flex flex-1 flex-col justify-between pt-6 px-6 pb-6 lg:pt-[53.25px] lg:px-[33.28px] lg:pb-[33.28px] bg-white box-border pointer-events-none relative">

              {/* Container Stack */}
              <div className="flex flex-col items-start w-full">

                {/* Title */}
                <h3 className="m-0 font-jakarta font-extrabold text-[20px] lg:text-[24px] leading-[37px] tracking-[-1.25px] text-[#001F3F] capitalize">
                  {land.title}
                </h3>

                {/* Location Wrapper */}
                <div className="flex items-center gap-[4.99px] pb-[16.64px] mt-[4.99px]">
                  <MapPin size={12} color="#43474E" className="shrink-0" />
                  <span className="font-jakarta font-medium text-[11.65px] leading-[17px] text-[#43474E] block">
                    {land.location}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-[39.94px] h-[0.83px] bg-[rgba(0,31,63,0.2)] mt-0.5" />
              </div>

              {/* Description Box */}
              <div className="pt-[23.3px] w-full">
                <p className="m-0 font-jakarta font-normal text-[11.65px] leading-[19px] text-[#43474E] w-full max-w-[216.44px] block">
                  {land.description}
                </p>
              </div>
            </div>

          </motion.div>
        ))}
        </div>
      </div>

    </section>
  );
}
