"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useGetFarmlandByIdQuery, useGetFacilitiesByFarmlandIdQuery, FarmlandDetailResponse } from "../../../../services/farmland";
import { useGetAllMasterDataQuery } from "../../../../services/master";
import DetailsHero from "./DetailsHero";
import AddOnServices from "./AddOnServices";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GISAndConnectivityMap from "@/components/shared/GISAndConnectivityMap";
import LandSpecificationsBento from "../../../search/farmlanddetails/LandSpecificationsBento";
import FacilitiesAndCultivation from "@/components/shared/FacilitiesAndCultivation";

export default function MyAssetsDetailedPage() {
  const searchParams = useSearchParams();
  const farmlandId = 35; // Hardcoded to 35 as per backend request (was Number(searchParams.get("id")) || 1)
  const { data: res, isLoading } = useGetFarmlandByIdQuery({ farmland_id: farmlandId });
  const farmland = Array.isArray(res) ? res[0] : res;

  const { data: facilitiesDataRaw } = useGetFacilitiesByFarmlandIdQuery({ farmland_id: farmlandId });
  const facilitiesData = Array.isArray(facilitiesDataRaw) ? facilitiesDataRaw[0] : facilitiesDataRaw;
  const { data: masterDataRes } = useGetAllMasterDataQuery();
  const masterData = masterDataRes?.data;

  if (isLoading) {
    return (
      <main className="w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center">
        <span className="font-jakarta text-[#091426] font-bold text-lg">Loading asset details...</span>
      </main>
    );
  }

  if (!farmland) {
    return (
      <main className="w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center">
        <span className="font-jakarta text-[#091426] font-bold text-lg">Asset not found.</span>
      </main>
    );
  }

  const acreage = farmland?.land_specifications?.total_acers
    ? `${farmland.land_specifications.total_acers} Acres`
    : (facilitiesData?.acers ? `${facilitiesData.acers} Acres` : "Unknown");

  const soilId = facilitiesData?.soil?.type_id;
  const soilDesc = soilId && masterData?.soilTypeResult
    ? masterData.soilTypeResult.find((s: any) => s.id === soilId)?.description
    : (farmland?.land_specifications?.soil_type && (masterData as any)?.soilTypeResult?.find((s: any) => String(s.id) === String(farmland?.land_specifications?.soil_type))?.description) || "Red Laterite";

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <DetailsHero farmland={farmland} />

      <div className="w-full max-w-7xl px-4 lg:px-8 py-16 lg:py-24 flex flex-col gap-16 lg:gap-24 box-border">
        
        {/* NEW SECTION START */}
        <div className="flex flex-col lg:flex-row items-start mx-auto w-full max-w-[1184px]" style={{ gap: '48px' }}>
          {/* Left Column (70%) */}
          <div className="flex flex-col items-start w-full lg:w-[795.2px]" style={{ gap: '48px' }}>
             <GISAndConnectivityMap 
                lat={farmland?.location_details?.lat || "17.385044"} 
                long={farmland?.location_details?.long || "78.486671"} 
                polygon={farmland?.polygon || "[{\"type\":\"Polygon\",\"coordinates\":[[[78.486671,17.385044],[78.488671,17.385044],[78.488671,17.387044],[78.486671,17.387044],[78.486671,17.385044]]]}]"} 
             />
             <LandSpecificationsBento 
                areaProp={acreage}
                boreDepthProp={
                  facilitiesData?.water?.is_bore !== undefined
                    ? `${facilitiesData.water.is_bore} Borewells`
                    : (farmland?.land_specifications?.borewell !== undefined && farmland?.land_specifications?.borewell !== null
                      ? `${farmland.land_specifications.borewell} Borewells`
                      : "Not specified")
                }
                efficiencyProp="High Yield / 50ft"
                soilQualityProp="Red Laterite"
             />
          </div>
          {/* Right Column (30%) */}
          <div className="flex flex-col items-start w-full lg:w-[340.8px]" style={{ gap: '17px' }}>
             <FacilitiesAndCultivation 
                currentCrop="Mango Orchard"
                potentialCrop="Teak, Papaya, Cashew"
                facilitiesData={facilitiesData}
                railwayFallback="12km"
                airportFallback="45km"
                highwayFallback="5km"
             />
          </div>
        </div>
        {/* NEW SECTION END */}

        <AddOnServices />
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
