"use client";

import React from "react";
import { motion } from "framer-motion";

import { GetFacilitiesByFarmlandIdResponse } from "@/services/farmland";
import { useGetAllMasterDataQuery } from "@/services/master";

interface FacilitiesCultivationProps {
  currentCrop?: string;
  potentialCrop?: string;
  facilitiesData?: GetFacilitiesByFarmlandIdResponse;
  railwayFallback?: string;
  airportFallback?: string;
  highwayFallback?: string;
}

export default function FacilitiesCultivation({
  currentCrop = "Mango Grove",
  potentialCrop = "Superfood Berry Clusters",
  facilitiesData,
  railwayFallback = "Not specified",
  airportFallback = "Not specified",
  highwayFallback = "Not specified",
}: FacilitiesCultivationProps) {
  const { data: masterDataRes } = useGetAllMasterDataQuery();
  const masterData = masterDataRes?.data;

  const getDistanceDesc = (id?: number | string) => {
    if (!id || id === 0 || !masterData?.distancesResult) return null;
    const distance = masterData.distancesResult.find((d: any) => d.id === Number(id));
    return distance ? `${distance.description}km` : null;
  };

  const getCropDesc = (id?: number | string) => {
    if (!id || id === 0 || !masterData?.cropsResult) return null;
    const crop = masterData.cropsResult.find((c: any) => c.id === Number(id));
    return crop ? crop.description : null;
  };

  const parseCrops = (cropsData: any) => {
    if (Array.isArray(cropsData)) {
      const parsed = cropsData.map(id => getCropDesc(id)).filter(Boolean);
      return parsed.length > 0 ? parsed.join(", ") : "Not specified";
    }
    return getCropDesc(cropsData) || "Not specified";
  };

  const getParsedValue = (val: any) => {
    const parsed = parseCrops(val);
    return parsed !== "Not specified" ? parsed : null;
  };

  const cropsThatCanBeGrown = getParsedValue(facilitiesData?.crops_that_can_be_grown) || potentialCrop;
  const currentCultivationDesc = getParsedValue(facilitiesData?.current_cultivation) || currentCrop;
  const futureCropsSuggestions = getParsedValue(facilitiesData?.future_crops_suggetions) || potentialCrop;

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
          <img src="/assets/search/Container (27).svg" alt="Connectivity Hub" width={24} height={23} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C" }}>Connectivity Hub</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { label: "Railway Station", value: getDistanceDesc(facilitiesData?.railway?.distance_id) || railwayFallback },
            { label: "Domestic Airport", value: getDistanceDesc(facilitiesData?.airport?.distance_id) || airportFallback },
            { label: "Highway Access", value: facilitiesData?.road_appoarch?.road_width ? `${facilitiesData.road_appoarch.road_width}m` : highwayFallback },
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
          <img src="/assets/search/Container (28).svg" alt="Cultivation Ledger" width={18} height={20} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C" }}>Cultivation Ledger</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { title: currentCultivationDesc, sub: "CURRENT STATUS", badge: "PRODUCING", badgeBg: "rgba(188,210,37,0.2)", badgeColor: "#424B00" },
            { title: cropsThatCanBeGrown, sub: "POTENTIAL YIELD", badge: "READY", badgeBg: "#EDEEEF", badgeColor: "#45474C" },
            { title: futureCropsSuggestions, sub: "FUTURE EXPANSION", badge: "PLANNED", badgeBg: "rgba(105,182,254,0.2)", badgeColor: "#004673" },
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
