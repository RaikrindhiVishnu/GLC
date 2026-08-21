"use client";

import React from "react";
import { GetFacilitiesByFarmlandIdResponse } from "@/services/farmland";
import { useGetAllMasterDataQuery } from "@/services/master";

interface FacilitiesAndCultivationProps {
  currentCrop?: string;
  potentialCrop?: string;
  facilitiesData?: GetFacilitiesByFarmlandIdResponse;
  railwayFallback?: string;
  airportFallback?: string;
  highwayFallback?: string;
}

export default function FacilitiesAndCultivation({
  currentCrop = "Mango Orchard",
  potentialCrop = "Teak, Papaya, Cashew",
  facilitiesData,
  railwayFallback = "12km",
  airportFallback = "45km",
  highwayFallback = "5km", // using for hospital in fallback
}: FacilitiesAndCultivationProps) {
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
  const futureCropsSuggestions = getParsedValue((facilitiesData as any)?.future_crops_suggetions) || "High-density Dragon Fruit";

  const railwayDistance = getDistanceDesc(facilitiesData?.railway?.distance_id) || railwayFallback;
  const airportDistance = getDistanceDesc(facilitiesData?.airport?.distance_id) || airportFallback;
  const hospitalDistance = getDistanceDesc((facilitiesData as any)?.hospital?.distance_id) || highwayFallback;

  return (
    <div className="flex flex-col w-[340.8px]" style={{ gap: "17px" }}>
      {/* FACILITIES Section */}
      <div className="flex flex-col w-full" style={{ gap: "16px" }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.8px", textTransform: "uppercase", color: "#0F2F4C", paddingLeft: "8px" }}>
          FACILITIES
        </span>
        <div className="flex flex-col w-full" style={{ gap: "12px" }}>
          {/* Row 1 */}
          <div className="flex flex-row justify-between w-full" style={{ gap: "12px" }}>
            {/* Railway */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "16px 20px", gap: "8px", width: "auto", flex: 1, height: "56px", background: "#FFFFFF", boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.024), inset 0px 1px 0px rgba(255, 255, 255, 0.5)", borderRadius: "32px", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "19px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="19" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="16" rx="2" ry="2"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><path d="M8 19l-2 3"></path><path d="M16 19l2 3"></path><path d="M8 15h0"></path><path d="M16 15h0"></path></svg>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#0F2F4C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Railway ({railwayDistance})
              </span>
            </div>
            {/* Airport */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "16px 20px", gap: "8px", width: "auto", flex: 1, height: "56px", background: "#FFFFFF", boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.024), inset 0px 1px 0px rgba(255, 255, 255, 0.5)", borderRadius: "32px", boxSizing: "border-box" }}>
              <div style={{ width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <img src="/assets/compareassets/Icon (32).svg" alt="Airport" width={20} height={20} />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#0F2F4C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Airport ({airportDistance})
              </span>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-row w-full">
            {/* Hospitals */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "16px 20px", gap: "8px", width: "auto", display: "inline-flex", height: "56px", background: "#FFFFFF", boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.024), inset 0px 1px 0px rgba(255, 255, 255, 0.5)", borderRadius: "32px", boxSizing: "border-box" }}>
              <div style={{ width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <img src="/assets/compareassets/Container (38).svg" alt="Hospitals" width={20} height={20} />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#0F2F4C", whiteSpace: "nowrap" }}>
                Hospitals ({hospitalDistance})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CULTIVATION DETAILS Section */}
      <div className="flex flex-col w-full" style={{ gap: "16px", paddingTop: "16px" }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.8px", textTransform: "uppercase", color: "#0F2F4C", paddingLeft: "8px" }}>
          CULTIVATION DETAILS
        </span>
        <div className="flex flex-col w-full" style={{ gap: "16px" }}>
          
          {/* Current Cultivation */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", padding: "20px", width: "340.8px", height: "83px", background: "#FFFFFF", boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.024), inset 0px 1px 0px rgba(255, 255, 255, 0.5)", borderRadius: "32px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#0F2F4C" }}>
                CURRENT CULTIVATION
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                {currentCultivationDesc}
              </span>
            </div>
            <div style={{ width: "18px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/assets/compareassets/Icon (33).svg" alt="Current Cultivation" width={18} height={20} />
            </div>
          </div>

          {/* Crops that can be grown */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", padding: "20px", width: "340.8px", height: "83px", background: "#FFFFFF", boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.024), inset 0px 1px 0px rgba(255, 255, 255, 0.5)", borderRadius: "32px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#0F2F4C" }}>
                CROPS THAT CAN BE GROWN
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "250px" }}>
                {cropsThatCanBeGrown}
              </span>
            </div>
            <div style={{ width: "22px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/assets/compareassets/Icon (34).svg" alt="Crops" width={22} height={18} />
            </div>
          </div>

          {/* Future Crop Suggestions */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", padding: "20px", width: "340.8px", height: "83px", background: "#FFFFFF", boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.024), inset 0px 1px 0px rgba(255, 255, 255, 0.5)", borderRadius: "32px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#0F2F4C" }}>
                FUTURE CROP SUGGESTIONS
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "250px" }}>
                {futureCropsSuggestions}
              </span>
            </div>
            <div style={{ width: "18px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/assets/compareassets/Icon (35).svg" alt="Future Crops" width={18} height={20} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
