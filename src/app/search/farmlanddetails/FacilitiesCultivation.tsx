"use client";

import React from "react";
import { motion } from "framer-motion";

import { GetFacilitiesByFarmlandIdResponse } from "@/services/farmland";
import { useGetAllMasterDataQuery } from "@/services/master";

interface FacilitiesCultivationProps {
  currentCrop?: string;
  potentialCrop?: string;
  facilitiesData?: GetFacilitiesByFarmlandIdResponse;
}

export default function FacilitiesCultivation({
  currentCrop = "Mango Grove",
  potentialCrop = "Superfood Berry Clusters",
  facilitiesData,
}: FacilitiesCultivationProps) {
  const { data: masterDataRes } = useGetAllMasterDataQuery();
  const masterData = masterDataRes?.data;

  const getDistanceDesc = (id?: number) => {
    if (!id || !masterData?.distancesResult) return null;
    const distance = masterData.distancesResult.find((d: any) => d.id === id);
    return distance ? `${distance.description}km` : null;
  };

  const getCropDesc = (id?: number) => {
    if (!id || !masterData?.cropsResult) return "Unknown";
    const crop = masterData.cropsResult.find((c: any) => c.id === id);
    return crop ? crop.description : "Unknown";
  };

  const cropsThatCanBeGrown = facilitiesData?.crops_that_can_be_grown?.map(id => getCropDesc(id)).join(", ") || potentialCrop;
  const currentCultivationDesc = getCropDesc(facilitiesData?.current_cultivation) || currentCrop;

  return (
    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full">
      {/* Left Card: Connectivity Hub */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ flex: 1, background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "28px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "20px" }}
        className="lg:rounded-[48px] lg:p-8"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "24px", height: "23px", background: "#2780C4", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C" }}>Connectivity Hub</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { label: "Railway Station", value: getDistanceDesc(facilitiesData?.railway?.distance_id) || "12km" },
            { label: "Domestic Airport", value: getDistanceDesc(facilitiesData?.airport?.distance_id) || "45km" },
            { label: "Highway Access", value: facilitiesData?.road_appoarch?.road_width ? `${facilitiesData.road_appoarch.road_width}m` : "2.5km" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: i < 2 ? "14px" : 0, borderBottom: i < 2 ? "1px solid #E1E3E4" : "none" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#45474C" }}>{item.label}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0F2F4C" }}>{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Card: Cultivation Ledger */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ flex: 1, background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "28px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "20px" }}
        className="lg:rounded-[48px] lg:p-8"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "18px", height: "20px", background: "#2780C4", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C" }}>Cultivation Ledger</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { title: currentCultivationDesc, sub: "CURRENT STATUS", badge: "PRODUCING", badgeBg: "rgba(188,210,37,0.2)", badgeColor: "#424B00" },
            { title: cropsThatCanBeGrown, sub: "POTENTIAL YIELD", badge: "READY", badgeBg: "#EDEEEF", badgeColor: "#45474C" },
            { title: "High-density Dragon Fruit", sub: "FUTURE EXPANSION", badge: "PLANNED", badgeBg: "rgba(105,182,254,0.2)", badgeColor: "#004673" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>{item.title}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "#45474C", textTransform: "uppercase" }}>{item.sub}</span>
              </div>
              <div style={{ background: item.badgeBg, borderRadius: "9999px", padding: "4px 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: item.badgeColor, flexShrink: 0 }}>{item.badge}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
