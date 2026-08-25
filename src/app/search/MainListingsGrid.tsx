"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSearchContext } from "./SearchContext";
import { 
  useGetAllFarmlandsByStateIdQuery,
  useAddLandToUserSavedListMutation,
  useRemoveFarmLandFromUserSavedListMutation,
  useGetAllSavedFarmlandsByUserIdQuery,
} from "../../services/farmland";
import { useGetAllGeoMasterDataQuery } from "../../services/master";
import { useGetUserUploadedFarmlandsQuery } from "../../services/upload";
import { s3Service } from "@/services/s3";
import TagGroup from "../../components/TagGroup";
import { mapTagIdsToNames } from "../../utils/tagMapper";
import FarmlandCardSkeleton from "@/components/ui/FarmlandCardSkeleton";

// Helper component to resolve S3 images for search cards
const S3ResolvedImage = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => {
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
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#F4F4F5" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "8px" }}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A1A1AA", fontSize: "12px", fontWeight: 500 }}>No Image</span>
      </div>
    );
  }

  return (
    <img 
      src={resolved} 
      alt={alt} 
      onError={() => setResolved(null)}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
    />
  );
};

// Absolute data parity mapping precisely to the 6 newly uploaded search assets
const gridMatches = [
  {
    id: "match-1",
    title: "GLC SOS 01",
    price: "₹4.8Cr",
    tags: ["RED LATERITE", "ACTIVE YIELD"],
    description: "High-yield mango grove with established irrigation systems and road access.",
    img: "/assets/search/image2.1.svg", 
    layout: "image-top",
    cardHeight: "583px",
    imageHeight: "320px",
  },
  {
    id: "match-2",
    title: "GLC SOS 02",
    price: "₹6.2Cr",
    tags: ["EXPANSION READY"],
    description: "Elevated terrain suitable for premium grape varieties and boutique agro- tourism.",
    img: "/assets/search/image2.2.svg", 
    layout: "text-top",
    cardHeight: "636px",
    imageHeight: "373px",
  },
  {
    id: "match-3",
    title: "GLC SOS 03",
    price: "₹3.9Cr",
    tags: ["PRISTINE WATER", "ORGANIC CERT"],
    description: "Unrivaled water rights and pure organic certification for premium exports.",
    img: "/assets/search/image2.3.svg", 
    layout: "image-top",
    cardHeight: "623px",
    imageHeight: "384px",
  },
  {
    id: "match-4",
    title: "GLC SOS 04",
    price: "₹4.8Cr",
    tags: ["RED LATERITE", "ACTIVE YIELD"],
    description: "High-yield mango grove with established irrigation systems and road access.",
    img: "/assets/search/image2.4.svg", 
    layout: "image-top",
    cardHeight: "583px",
    imageHeight: "320px",
  },
  {
    id: "match-5",
    title: "GLC SOS 05",
    price: "₹6.2Cr",
    tags: ["EXPANSION READY"],
    description: "Elevated terrain suitable for premium grape varieties and boutique agro- tourism.",
    img: "/assets/search/image2.5.svg", 
    layout: "text-top",
    cardHeight: "636px",
    imageHeight: "373px",
  },
  {
    id: "match-6",
    title: "GLC SOS 06",
    price: "₹3.9Cr",
    tags: ["PRISTINE WATER", "ORGANIC CERT"],
    description: "Unrivaled water rights and pure organic certification for premium exports.",
    img: "/assets/search/image2.6.svg", 
    layout: "image-top",
    cardHeight: "623px",
    imageHeight: "384px",
  },
];

export default function MainListingsGrid() {
  const router = useRouter();
  const { filters, masterData, searchQuery } = useSearchContext();
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        setUserId(parseInt(storedUserId, 10));
      }
    }
  }, []);

  const savedQueryArg = useMemo(() => ({ user_id: userId || 0, offset: 0 }), [userId]);
  const { data: savedFarmlandsData } = useGetAllSavedFarmlandsByUserIdQuery(
    savedQueryArg,
    { skip: !userId }
  );

  const uploadQueryArg = useMemo(() => ({ userId: userId || 0 }), [userId]);
  const { data: uploadData } = useGetUserUploadedFarmlandsQuery(
    uploadQueryArg,
    { skip: !userId }
  );

  useEffect(() => {
    if (savedFarmlandsData && Array.isArray(savedFarmlandsData)) {
      const initialBookmarks: Record<string, boolean> = {};
      savedFarmlandsData.forEach((item: any) => {
        initialBookmarks[item.farm_land_id] = true;
      });
      setBookmarks(prev => {
        const keysNew = Object.keys(initialBookmarks);
        const keysPrev = Object.keys(prev);
        const hasChange = keysNew.length !== keysPrev.length || 
                          keysNew.some(k => !prev[k]) || 
                          keysPrev.some(k => !initialBookmarks[k]);
        if (hasChange) {
          return { ...prev, ...initialBookmarks };
        }
        return prev;
      });
    }
  }, [savedFarmlandsData]);

  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();

  const getLocationString = (districtId?: number) => {
    if (!districtId || !geoDataRes?.districts) return "Location Not Available";
    const district = geoDataRes.districts.slice(1).find((d: any[]) => d[0] === districtId);
    if (!district) return "Location Not Available";
    
    const stateId = district[1];
    const state = geoDataRes.states?.slice(1).find((s: any[]) => s[0] === stateId);
    if (!state) return String(district[3]).toUpperCase();
    
    const stateStr = state[2] ? state[2] : state[3];
    return `${district[3]}, ${stateStr}`.toUpperCase();
  };

  const [currentPage, setCurrentPage] = useState(0);

  const activeFilters = useMemo(() => {
    const payload: any = { offset: currentPage * 6 };
    if (filters.state_id && Array.isArray(filters.state_id) && filters.state_id.length > 0) {
      // Since all farmlands belong to Andhra Pradesh (State ID 1), omit state_id restriction for State 1 so all 40 AP farmlands are fetched
      if (!(filters.state_id.length === 1 && filters.state_id[0] === 1)) {
        payload.state_id = filters.state_id;
      }
    }
    if (filters.district_id && Array.isArray(filters.district_id) && filters.district_id.length > 0) {
      payload.district_id = filters.district_id;
    }
    if (filters.mandal_id && Array.isArray(filters.mandal_id) && filters.mandal_id.length > 0) {
      payload.mandal_id = filters.mandal_id;
    }
    if (filters.tag_ids && Array.isArray(filters.tag_ids) && filters.tag_ids.length > 0) {
      payload.tag_ids = filters.tag_ids;
    }
    if (filters.from_price !== undefined && filters.from_price > 1000000) payload.from_price = filters.from_price;
    if (filters.to_price !== undefined && filters.to_price < 150000000) payload.to_price = filters.to_price;
    if (filters.from_size !== undefined && filters.from_size > 1) payload.from_size = filters.from_size;
    if (filters.to_size !== undefined && filters.to_size < 100) payload.to_size = filters.to_size;

    return payload;
  }, [currentPage, filters]);

  const { data: res, isLoading } = useGetAllFarmlandsByStateIdQuery(activeFilters);

  let farmlands = res?.data || [];

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    farmlands = farmlands.filter(farm => {
      const codeMatch = farm.farmland_code?.toLowerCase().includes(q);
      const locMatch = getLocationString(farm.farmland_locations?.district_id).toLowerCase().includes(q);
      return codeMatch || locMatch;
    });
  }



  const totalCount = res?.total_count ? (searchQuery ? farmlands.length : res.total_count) : farmlands.length;

  const getStateTitle = () => {
    const selectedStateIds = filters.state_id;
    const selectedDistrictIds = filters.district_id;
    const selectedMandalIds = filters.mandal_id;

    if (selectedMandalIds && selectedMandalIds.length > 0) {
      const mandalId = selectedMandalIds[0];
      const foundMandal = geoDataRes?.mandals?.slice(1).find((m: any[]) => m[0] === mandalId);
      if (foundMandal) {
        const mandalName = String(foundMandal[3] || "");
        const districtId = foundMandal[1];
        const foundDistrict = geoDataRes?.districts?.slice(1).find((d: any[]) => d[0] === districtId);
        const distName = foundDistrict ? String(foundDistrict[3] || "") : "";
        return distName ? `${mandalName}, ${distName}` : mandalName;
      }
    }

    if (selectedDistrictIds && selectedDistrictIds.length > 0) {
      const districtId = selectedDistrictIds[0];
      const foundDistrict = geoDataRes?.districts?.slice(1).find((d: any[]) => d[0] === districtId);
      if (foundDistrict) {
        const distName = String(foundDistrict[3] || "");
        const stateId = foundDistrict[1];
        const foundState = geoDataRes?.states?.slice(1).find((s: any[]) => s[0] === stateId);
        const stateName = foundState ? String(foundState[2] || foundState[3] || "") : "";
        return stateName ? `${distName}, ${stateName}` : distName;
      }
    }

    if (selectedStateIds && selectedStateIds.length > 0) {
      const stateId = selectedStateIds[0];
      const foundState = geoDataRes?.states?.slice(1).find((s: any[]) => s[0] === stateId);
      if (foundState) {
        const rawName = String(foundState[2] || foundState[3] || "All Regions");
        return rawName
          .toLowerCase()
          .split(" ")
          .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");
      }
    }
    return "All Farmlands";
  };

  const displayedFarmlands = farmlands.slice(0, 6);
  const totalPages = Math.max(1, Math.ceil(totalCount / 6));

  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1260;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      
      const rowCount = Math.ceil(displayedFarmlands.length / 3);
      // Header is ~40px, each row is max 636px, gap is 32px
      const baseHeight = rowCount === 0 ? 100 : 40 + 32 + (rowCount * 636) + ((rowCount - 1) * 32) + 50;
      
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${currentScale})`;
        scalerRef.current.style.height = `${baseHeight}px`;
      }
      if (shellRef.current) {
        shellRef.current.style.height = `${baseHeight * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [displayedFarmlands.length]);

  const [addFarmland] = useAddLandToUserSavedListMutation();
  const [removeFarmland] = useRemoveFarmLandFromUserSavedListMutation();

  const toggleBookmark = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!userId) {
      alert("Please log in to save farmlands.");
      return;
    }

    const numericId = parseInt(id);

    // Check if the current user is the owner of this farmland
    const isOwner = uploadData?.data?.some((farm: any) => farm.farmland_id === numericId);
    if (isOwner) {
      alert("You cannot save your own listing.");
      return;
    }

    const isCurrentlySaved = !!bookmarks[id];

    // Optimistic UI update
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));

    try {
      if (isCurrentlySaved) {
        await removeFarmland({ user_id: userId, farm_land_id: numericId }).unwrap();
      } else {
        await addFarmland({ user_id: userId, farmland_id: numericId }).unwrap();
      }
    } catch (error: any) {
      const errorMsg = typeof error === 'string' ? error : JSON.stringify(error);
      
      if (error?.data?.message === "Farmland is already in saved list" || errorMsg.includes("already in saved list")) {
        console.warn("Farmland was already saved.");
      } else if (error?.data?.message === "Farmland is not in saved list" || errorMsg.includes("not in saved list")) {
        console.warn("Farmland was not in saved list.");
      } else {
        console.error("Failed to toggle save status", error);
        alert(`API Error: ${error?.data?.message || "Something went wrong"}`);
        // Revert optimistic update on failure
        setBookmarks((prev) => ({ ...prev, [id]: isCurrentlySaved }));
      }
    }
  };

  return (
    <motion.section
      id="listings-grid"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ width: "100%", overflow: "hidden", boxSizing: "border-box" }}
    >
      {/* ─── MOBILE LAYOUT (< lg) ─── */}
      <div className="block lg:hidden w-full py-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="font-jakarta font-bold text-[20px] text-[#131600] m-0">{getStateTitle()} ({totalCount} Matches)</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0F2F4C]" />
              <div className="w-2 h-2 rounded-full bg-[#E1E3E4]" />
              <div className="w-2 h-2 rounded-full bg-[#E1E3E4]" />
            </div>
          </div>
        </div>
        <div
          className="flex gap-4 w-full overflow-x-auto pb-4 pl-4 sm:pl-6 pr-4 sm:pr-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <FarmlandCardSkeleton key={i} variant="horizontal" />
            ))
          ) : displayedFarmlands.length === 0 ? (
            <div className="flex justify-center items-center w-full h-[260px]">
              <span className="font-jakarta text-[#0F2F4C]">No properties found.</span>
            </div>
          ) : displayedFarmlands.map((item, i) => {
            const isBookmarked = !!bookmarks[item.farmland_id];
            
            // Map tag IDs to names
            let parsedTags: any[] = [];
            if (Array.isArray(item.tag_ids)) {
              parsedTags = item.tag_ids;
            } else if (typeof item.tag_ids === 'string') {
              try { parsedTags = JSON.parse(item.tag_ids); } catch (e) {}
            }
            const mappedTags = mapTagIdsToNames(parsedTags, masterData);
            return (
              <motion.div
                key={`mob-${item.farmland_id}`}
                initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => router.push(`/search/farmlanddetails?id=${item.farmland_id}`)}
                style={{
                  width: "260px",
                  flexShrink: 0,
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #F1F5F9",
                  boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "160px" }}>
                  <S3ResolvedImage 
                    imageUrl={item.farmland_image || ""} 
                    alt={item.farmland_code} 
                  />
                  {mappedTags.length > 0 && (
                    <div style={{ position: "absolute", top: "12px", left: "12px", zIndex: 5 }}>
                      <TagGroup tags={mappedTags} theme="light" />
                    </div>
                  )}
                  <button
                    onClick={(e) => toggleBookmark(item.farmland_id.toString(), e)}
                    style={{ position: "absolute", top: "12px", right: "12px", width: "34px", height: "34px", background: "#FFFFFF", borderRadius: "9999px", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0,0,0,0.08)" }}
                  >
                    <svg width="16" height="14" viewBox="0 0 22 20" fill={isBookmarked ? "#2780C4" : "none"} stroke="#2780C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.61469 9.81897 2.0252 9.03568 1.61841C8.25238 1.21162 7.38263 0.999502 6.5 1Z" />
                    </svg>
                  </button>
                </div>
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {/* Tags are rendered on the image for mobile */}
                  <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "#131600" }}>{item.farmland_code}</h3>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "18px", color: "#45474C" }}>High-yield farmland ready for investment.</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px", marginTop: "4px", borderTop: "1px solid #EDEEEF" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#091426" }}>₹{item.price?.toLocaleString()}</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "10px", color: "#45474C", display: "flex", alignItems: "center", gap: "2px", marginTop: "2px" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {getLocationString(item.farmland_locations?.district_id)}
                      </span>
                    </div>
                    <span
                      onClick={(e) => { e.stopPropagation(); router.push(`/search/farmlanddetails?id=${item.farmland_id}`); }}
                      style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "12px", color: "#00629E", cursor: "pointer", textDecoration: "none" }}
                    >View Details</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─── DESKTOP LAYOUT (>= lg) ─── */}
      <div className="hidden lg:flex w-full justify-center" style={{ margin: "40px 0" }}>
      <div
        ref={shellRef}
        style={{
          position: "relative",
          width: "1184px",
          maxWidth: "100%",
          height: "1368px",
          flexShrink: 0
        }}
      >
        <div
          ref={scalerRef}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: "-592px",
            width: "1184px",
            height: "1368px", // will be overridden by JS
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Exactly the original Hardcoded figma layout container elements with no strings modified */}
          {/* ─── SECTION HEADER ─── */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 16px" }}>
            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#131600",
              }}
            >
              {getStateTitle()} ({totalCount} Matches)
            </motion.h2>

            {/* Indicator Dots on the right */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <div 
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  style={{ 
                    width: "8px", 
                    height: "8px", 
                    background: currentPage === idx ? "#0F2F4C" : "#E1E3E4", 
                    borderRadius: "9999px",
                    cursor: "pointer"
                  }} 
                />
              ))}
            </div>
          </div>

          {/* ─── 3-COLUMN GRID ─── */}
          {isLoading ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "32px",
                boxSizing: "border-box",
                alignItems: "start",
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <FarmlandCardSkeleton key={i} variant="vertical" />
              ))}
            </div>
          ) : displayedFarmlands.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              boxSizing: "border-box",
              alignItems: "start",
            }}
          >
            {displayedFarmlands.map((item, index) => {
              const isBookmarked = !!bookmarks[item.farmland_id];
              let parsedTags: any[] = [];
              if (Array.isArray(item.tag_ids)) {
                parsedTags = item.tag_ids;
              } else if (typeof item.tag_ids === 'string') {
                try { parsedTags = JSON.parse(item.tag_ids); } catch (e) {}
              }
              const mappedTags = mapTagIdsToNames(parsedTags, masterData);
              
              // Exact Figma layout by column index (0 = Left, 1 = Middle, 2 = Right)
              const colIndex = index % 3;
              const layout = colIndex === 1 ? "text-top" : "image-top";
              
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

              if (layout === "image-top") {
                return (
                  <div
                    key={item.farmland_id}
                    onClick={() => router.push(`/search/farmlanddetails?id=${item.farmland_id}`)}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "30px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: cardHeight,
                      height: "max-content",
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                      border: "1px solid #F1F5F9",
                      transition: "transform 0.2s ease, boxShadow 0.2s ease",
                      cursor: "pointer",
                      boxSizing: "border-box",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.05)";
                    }}
                  >
                    {/* Top Image Box */}
                    <div style={{ position: "relative", width: "100%", height: imageHeight, flexShrink: 0 }}>
                      <S3ResolvedImage 
                        imageUrl={item.farmland_image || (item as any).farmland_img || ""} 
                        alt={item.farmland_code} 
                      />

                      {/* Image Tag */}
                      {mappedTags.length > 0 && (
                        <div style={{ position: "absolute", top: "24px", left: "24px", zIndex: 5 }}>
                          <TagGroup tags={mappedTags} theme="light" />
                        </div>
                      )}

                      {/* Circular 48x48 Heart Button */}
                      <button
                        onClick={(e) => toggleBookmark(item.farmland_id.toString(), e)}
                        style={{
                          position: "absolute",
                          top: "24px",
                          right: "24px",
                          width: "48px",
                          height: "48px",
                          background: "#FFFFFF",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          borderRadius: "9999px",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                          zIndex: 5,
                        }}
                      >
                        <svg width="20" height="18" viewBox="0 0 22 20" fill={isBookmarked ? "#2780C4" : "none"} stroke="#2780C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.61469 9.81897 2.0252 9.03568 1.61841C8.25238 1.21162 7.38263 0.999502 6.5 1Z"></path>
                        </svg>
                      </button>
                    </div>

                    {/* Bottom Content Box with exactly 32px padding */}
                    <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1, justifyItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Title */}
                        <h3
                          style={{
                            margin: "0 0 0 0",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "32px",
                            color: "#131600",
                          }}
                        >
                          {item.farmland_code}
                        </h3>

                        {/* Description */}
                        <p
                          style={{
                            margin: "4px 0 0 0",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "24px",
                            color: "#45474C",
                          }}
                        >
                          High-yield farmland ready for investment.
                        </p>
                      </div>

                      {/* Price & Action Button Row */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span
                            style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 700,
                              fontSize: "20px",
                              lineHeight: "28px",
                              color: "#091426",
                            }}
                          >
                            ₹{item.price?.toLocaleString()}
                          </span>
                          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "12px", color: "#45474C", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            {getLocationString(item.farmland_locations?.district_id)}
                          </span>
                        </div>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/search/farmlanddetails?id=${item.farmland_id}`);
                          }}
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "#00629E",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Text-Top Layout View
                return (
                  <div
                    key={item.farmland_id}
                    onClick={() => router.push(`/search/farmlanddetails?id=${item.farmland_id}`)}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "30px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: cardHeight,
                      height: "max-content",
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                      border: "1px solid #F1F5F9",
                      transition: "transform 0.2s ease, boxShadow 0.2s ease",
                      cursor: "pointer",
                      boxSizing: "border-box",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.05)";
                    }}
                  >
                    {/* Top Content Box */}
                    <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between", boxSizing: "border-box" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {mappedTags.length > 0 && (
                          <div style={{ marginBottom: "12px" }}>
                            <TagGroup tags={mappedTags} theme="dark" />
                          </div>
                        )}

                        <h3
                          style={{
                            margin: "12px 0 0 0",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "32px",
                            color: "#131600",
                          }}
                        >
                          {item.farmland_code}
                        </h3>

                        <p
                          style={{
                            margin: "4px 0 0 0",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "24px",
                            color: "#45474C",
                          }}
                        >
                          High-yield farmland ready for investment.
                        </p>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span
                            style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 700,
                              fontSize: "20px",
                              lineHeight: "28px",
                              color: "#091426",
                            }}
                          >
                            ₹{item.price?.toLocaleString()}
                          </span>
                          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "12px", color: "#45474C", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            {getLocationString(item.farmland_locations?.district_id)}
                          </span>
                        </div>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/search/farmlanddetails?id=${item.farmland_id}`);
                          }}
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "#00629E",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Bottom Image Box */}
                    <div style={{ position: "relative", width: "100%", height: imageHeight, flexShrink: 0 }}>
                      <S3ResolvedImage 
                        imageUrl={item.farmland_image || (item as any).farmland_img || ""} 
                        alt={item.farmland_code} 
                      />

                      {/* Image Tag placeholder for text-top layout, tags are rendered in top block */}


                      {/* Floating Heart Button at Bottom Right */}
                      <button
                        onClick={(e) => toggleBookmark(item.farmland_id.toString(), e)}
                        style={{
                          position: "absolute",
                          bottom: "24px",
                          right: "24px",
                          width: "48px",
                          height: "48px",
                          background: "#FFFFFF",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          borderRadius: "9999px",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                          zIndex: 5,
                        }}
                      >
                        <svg width="20" height="18" viewBox="0 0 22 20" fill={isBookmarked ? "#2780C4" : "none"} stroke="#2780C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.61469 9.81897 2.0252 9.03568 1.61841C8.25238 1.21162 7.38263 0.999502 6.5 1Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "80px 24px",
                background: "#F8F9FA",
                borderRadius: "30px",
                border: "1px dashed #E5E7EB",
                textAlign: "center",
                width: "100%",
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "16px" }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#1F2937", margin: "0 0 8px 0" }}>
                No Properties Found
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#6B7280", margin: 0, maxWidth: "320px" }}>
                We couldn't find any properties matching your current search filters. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
      </div>{/* end desktop wrapper */}
    </motion.section>
  );
}
