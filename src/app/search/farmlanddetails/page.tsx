"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Decoupled specialized view modules mimicking absolute/auto-layout figma parameters
import FarmlandDetailsHero from "./FarmlandDetailsHero";
import MediaHub from "./MediaHub";
import LandSpecificationsBento from "./LandSpecificationsBento";
import FacilitiesCultivation from "./FacilitiesCultivation";
import StickySidebarRight from "./StickySidebarRight";
import DiscoveryGridSection from "./DiscoveryGridSection";
import FilterPropertiesModal from "./compare/FilterPropertiesModal";
import { useGetFacilitiesByFarmlandIdQuery, useGetFarmlandByIdQuery } from "@/services/farmland";
import { useGetAllMasterDataQuery } from "@/services/master";
import { useUpdateViewsForFarmlandByIdMutation } from "@/services/home";

// Comprehensive metadata mapping to deliver premium custom parameters per selected farmland listing
const farmlandRegistry: Record<
  string,
  {
    title: string;
    price: string;
    acreage: string;
    locationSubtitle: string;
    tags: string[];
    description: string;
    heroBg: string;
    energyAccess: { left: string; right: string };
    hydraulicDepth: { left: string; right: string };
    lastMile: { left: string; right: string };
    nearestCity: { left: string; right: string };
    transitAccess: { left: string; right: string };
    medicalAccess: { left: string; right: string };
    soilComposition: { title: string; desc: string };
    currentVegetation: string;
    potentialVegetation: string;
  }
> = {
  "match-1": {
    title: "GLC SOS 01",
    price: "₹4.80 Cr",
    acreage: "320 Acres",
    locationSubtitle: "Tanuku, Andhra Pradesh",
    tags: ["ACTIVE & MANAGED", "RED LATERITE"],
    description: "High-yield mango grove with established irrigation systems and road access.",
    heroBg: "/assets/search/image2.1.png",
    energyAccess: { left: "3-Phase Industrial Grid", right: "Solar-Ready Infrastructure" },
    hydraulicDepth: { left: "100m", right: "Dedicated Canal Access" },
    lastMile: { left: "40ft Black Top Approach", right: "Internal Private Paved Roads" },
    nearestCity: { left: "Zaheerabad (15km)", right: "Hyderabad Outer Ring (85km)" },
    transitAccess: { left: "RGIA Airport (90m)", right: "Major Freight Terminal (20km)" },
    medicalAccess: { left: "Apollo Regional Outpost (10km)", right: "District General Hospital (12km)" },
    soilComposition: {
      title: "Red Laterite",
      desc: "High water retention, ideal for moisture-intensive crops and long-term sustainability.",
    },
    currentVegetation: "Seasonal Rice / Cotton Cultivation",
    potentialVegetation: "Sandalwood & Exotic Timber",
  },
  "match-2": {
    title: "GLC SOS 02",
    price: "₹6.20 Cr",
    acreage: "320 Acres",
    locationSubtitle: "Chittoor Region, Premium Belt",
    tags: ["EXPANSION READY", "HIGH ELEVATION"],
    description: "Elevated terrain suitable for premium grape varieties and boutique agro-tourism.",
    heroBg: "/assets/search/image2.2.svg",
    energyAccess: { left: "Dedicated Sub-station Line", right: "Micro-Hydro Generation Ready" },
    hydraulicDepth: { left: "100m", right: "Perennial Stream Frontage" },
    lastMile: { left: "State Highway Direct Exit", right: "Gravel Reinforced Paths" },
    nearestCity: { left: "Tirupati Hub (25km)", right: "Chennai Corridor (110km)" },
    transitAccess: { left: "Renigunta Junction (18km)", right: "Inland Container Depot (30km)" },
    medicalAccess: { left: "Specialty Care Center (15km)", right: "Emergency Helipad Site (5km)" },
    soilComposition: {
      title: "Red Laterite",
      desc: "Excellent internal drainage metrics, optimally supporting deep-root fruit orchards.",
    },
    currentVegetation: "Table Grapes & Citrus Groves",
    potentialVegetation: "Export Quality Avocados",
  },
  "match-3": {
    title: "GLC SOS 03",
    price: "₹3.90 Cr",
    acreage: "4.2 Acres",
    locationSubtitle: "Kurnool Agrarian Sector",
    tags: ["PRISTINE WATER", "ORGANIC CERT"],
    description: "Unrivaled water rights and pure organic certification for premium exports.",
    heroBg: "/assets/search/image2.3.svg",
    energyAccess: { left: "Standard Rural Grid Feed", right: "15kW Off-Grid Solar Array" },
    hydraulicDepth: { left: "Dual Deep Borewells", right: "Drip Automation Piping Installed" },
    lastMile: { left: "Panchayat Maintained Tar Road", right: "Perimeter Fenced Track" },
    nearestCity: { left: "Kurnool City Center (22km)", right: "Anantapur Expressway (60km)" },
    transitAccess: { left: "Kurnool Airport Access (35km)", right: "National Highway Logistics (10km)" },
    medicalAccess: { left: "Community Health Hub (8km)", right: "Trauma Care Wing (20km)" },
    soilComposition: {
      title: "Alluvial Silty Clay",
      desc: "Rich macro-nutrients profile perfectly matched for high-density rotational cash crops.",
    },
    currentVegetation: "Certified Organic Turmeric / Ginger",
    potentialVegetation: "High-Density Superfood Berry Clusters",
  },
  "match-4": {
    title: "GLC SOS 04",
    price: "₹4.80 Cr",
    acreage: "5.0 Acres",
    locationSubtitle: "Godavari Basin Fertile Tract",
    tags: ["RED LATERITE", "ACTIVE YIELD"],
    description: "High-yield mango grove with established irrigation systems and road access.",
    heroBg: "/assets/search/image2.4.svg",
    energyAccess: { left: "3-Phase Industrial Grid", right: "Solar-Ready Infrastructure" },
    hydraulicDepth: { left: "Riverbed Filter Wells", right: "Automated Sprinkler Grid" },
    lastMile: { left: "Concrete Approach Bridges", right: "Wide Turning Radius Lanes" },
    nearestCity: { left: "Rajahmundry Center (12km)", right: "Kakinada Port Access (65km)" },
    transitAccess: { left: "Domestic Air Strip (25km)", right: "Railway Goods Siding (14km)" },
    medicalAccess: { left: "Multi-Specialty Institute (10km)", right: "Rural Primary Clinic (3km)" },
    soilComposition: {
      title: "Deep Deltaic Alluvium",
      desc: "Naturally sustained moisture levels with superior biological activity indicators.",
    },
    currentVegetation: "Banganapalli Mango Plantations",
    potentialVegetation: "Intercropped Cocoa & Arecanut",
  },
  "match-5": {
    title: "GLC SOS 05",
    price: "₹6.20 Cr",
    acreage: "7.0 Acres",
    locationSubtitle: "Anantapur Solar / Agro Corridor",
    tags: ["EXPANSION READY", "COMMERCIAL ZONED"],
    description: "Elevated terrain suitable for premium grape varieties and boutique agro-tourism.",
    heroBg: "/assets/search/image2.5.svg",
    energyAccess: { left: "Industrial Feeder Line", right: "Grid-Tie Net Metering Active" },
    hydraulicDepth: { left: "Rainwater Harvesting Catchment", right: "Deep Aquifer Extraction" },
    lastMile: { left: "Direct NH-44 Service Road Frontage", right: "Heavy Machinery Cleared Lanes" },
    nearestCity: { left: "Anantapur Core (18km)", right: "Bengaluru North Perimeter (140km)" },
    transitAccess: { left: "BLR International Airport (120km)", right: "Dedicated Agro Processing SEZ (15km)" },
    medicalAccess: { left: "Super Specialty Hub (18km)", right: "Highway Fast-Response Unit (6km)" },
    soilComposition: {
      title: "Gravelly Sandy Loam",
      desc: "Optimized thermal capacity promoting rapid root establishment for semi-arid species.",
    },
    currentVegetation: "Pomegranate Cultivation Matrix",
    potentialVegetation: "Dragon Fruit Trellis Systems",
  },
  "match-6": {
    title: "GLC SOS 06",
    price: "₹3.90 Cr",
    acreage: "6.0 Acres",
    locationSubtitle: "Visakhapatnam Hinterlands",
    tags: ["PRISTINE WATER", "ORGANIC CERT"],
    description: "Unrivaled water rights and pure organic certification for premium exports.",
    heroBg: "/assets/search/image2.6.svg",
    energyAccess: { left: "High-Tension Overpass Drop", right: "Battery Backup Bay Enclosed" },
    hydraulicDepth: { left: "Mountain Runoff Filtration Basins", right: "Gravity Fed Distribution Network" },
    lastMile: { left: "Scenic Hillside Bitumen Roads", right: "Stone-Paved Terraced Pathways" },
    nearestCity: { left: "Vizag Outer Limits (30km)", right: "Anakapalle Trade Market (15km)" },
    transitAccess: { left: "Visakhapatnam Port Gateway (40km)", right: "Industrial Freight Depots (22km)" },
    medicalAccess: { left: "Naval Base Hospital Perimeter (25km)", right: "Local Trust Facility (7km)" },
    soilComposition: {
      title: "Forest Humus Topsoil Overlay",
      desc: "Superb naturally composted organic layer harboring thriving beneficial mycorrhizal networks.",
    },
    currentVegetation: "Cashew Nut Trees & Native Shrubbery",
    potentialVegetation: "Premium Shade-Grown Robusta Coffee",
  },
};

function InnerFarmlandDetailsView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawId = searchParams.get("id") || "match-1";
  const [isCompareModalOpen, setIsCompareModalOpen] = React.useState(false);

  // Safely resolve active farmland dataset with default fallbacks
  const activeLand = farmlandRegistry[rawId] || farmlandRegistry["match-1"];
  
  const numericId = parseInt(rawId.replace(/\D/g, "")) || 101;
  const { data: facilitiesData, isLoading: isFacilitiesLoading } = useGetFacilitiesByFarmlandIdQuery({ farmland_id: numericId });
  const { data: farmlandDetailDataArray } = useGetFarmlandByIdQuery({ farmland_id: numericId });
  const farmlandDetailData = farmlandDetailDataArray?.[0];
  const { data: masterDataRes } = useGetAllMasterDataQuery();
  const [updateViews] = useUpdateViewsForFarmlandByIdMutation();
  const masterData = masterDataRes?.data;

  React.useEffect(() => {
    // Increment view count when this details view mounts
    if (numericId) {
      updateViews({ farmland_id: numericId }).catch(err => {
        console.error("Failed to update views:", err);
      });
    }
  }, [numericId, updateViews]);

  const soilId = facilitiesData?.soil?.type_id;
  const soilDesc = soilId && masterData?.soilTypeResult
    ? masterData.soilTypeResult.find((s: any) => s.id === soilId)?.description
    : activeLand.soilComposition.title;

  // Resolve Real Data
  const title = farmlandDetailData?.farmland_code || activeLand.title;
  
  let priceStr = activeLand.price;
  if (farmlandDetailData?.price) {
    priceStr = `₹${(farmlandDetailData.price / 10000000).toFixed(2)} Cr`;
  }

  let locationSubtitle = activeLand.locationSubtitle;
  if (farmlandDetailData?.location_details && masterData) {
    const loc = farmlandDetailData.location_details;
    const district = masterData.districtResult?.find((d: any) => d.id === loc.district_id)?.district_name;
    const state = masterData.stateResult?.find((s: any) => s.id === loc.state_id)?.state_name;
    if (district && state) {
      locationSubtitle = `${district}, ${state}`;
    }
  }

  const heroBg = farmlandDetailData?.farmland_img || activeLand.heroBg;
  const acreage = farmlandDetailData?.land_specifications?.total_acers 
    ? `${farmlandDetailData.land_specifications.total_acers} Acres` 
    : (facilitiesData?.acers ? `${facilitiesData.acers} Acres` : activeLand.acreage);
    
  const tags = activeLand.tags; // Fallback since API doesn't provide tags directly in detail response yet

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* ─── 1. CINEMATIC HERO SCREEN BLOCK (Height 960px precisely mapped) ─── */}
      <FarmlandDetailsHero
        title={title}
        locationSubtitle={locationSubtitle}
        tags={tags}
        heroBg={heroBg}
      />

      {/* ─── 2. MASTER BODY LAYOUT ─── */}
      <div className="w-full max-w-[1280px] mx-auto mt-8 lg:mt-16 px-4 lg:px-8 pb-16 box-border">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          {/* Left Column */}
          <div className="w-full flex flex-col gap-8">
            <MediaHub 
              primaryImage={heroBg} 
              title={title} 
              lat={farmlandDetailData?.location_details?.lat}
              long={farmlandDetailData?.location_details?.long}
              polygon={farmlandDetailData?.polygon}
            />
            <LandSpecificationsBento
              areaProp={acreage}
              boreDepthProp={facilitiesData?.water?.is_bore ? `${facilitiesData.water.is_bore} Borewells` : (farmlandDetailData?.land_specifications?.borewell ? `${farmlandDetailData.land_specifications.borewell} Borewells` : activeLand.hydraulicDepth.left)}
              efficiencyProp={facilitiesData?.water?.is_ground_water ? "Ground Water Available" : "High Yield"}
              soilQualityProp={soilDesc || farmlandDetailData?.land_specifications?.soil_type || activeLand.soilComposition.title}
            />
            <FacilitiesCultivation
              currentCrop={activeLand.currentVegetation}
              potentialCrop={activeLand.potentialVegetation}
              facilitiesData={facilitiesData}
            />
          </div>
          {/* Right Sidebar */}
          <div className="w-full lg:w-[411px] lg:flex-shrink-0">
            <StickySidebarRight
              title={title}
              price={priceStr}
              locationSubtitle={locationSubtitle}
              farmlandId={numericId}
            />
          </div>
        </div>
      </div>

      {/* ─── 3. SIMILAR REGIONAL OPPORTUNITIES GRID SECTION ─── */}
      <DiscoveryGridSection onOpenCompare={(id) => setIsCompareModalOpen(true)} />

      {/* ─── POPUP COMPARE MODAL OVERLAY ─── */}
      <FilterPropertiesModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
      />

      {/* ─── 6. GLOBAL CTA & REUSABLE FOOTER LAYER ─── */}
      <CTA />
      <Footer />
    </div>
  );
}

export default function FarmlandDetailsMasterPage() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "20px",
              fontWeight: 600,
              color: "#0F2F4C",
            }}
          >
            Resolving high-fidelity farmland profiles...
          </div>
        }
      >
        <InnerFarmlandDetailsView />
      </Suspense>
    </main>
  );
}
