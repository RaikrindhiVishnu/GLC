"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { motion } from "framer-motion";

const SERVICE_MAP: Record<string, { name: string; desc: string; iconPath: string }> = {
  "farmhouse-construction": {
    name: "Farmhouse Construction",
    desc: "Track construction progress, materials, and milestones.",
    iconPath: "M8 0L0 6V18H16V6L8 0ZM8 2.5L13.5 6.6V16H2.5V6.6L8 2.5Z",
  },
  "fencing-security": {
    name: "Fencing & Security",
    desc: "Manage boundary fencing, gates, security systems, and surveillance.",
    iconPath: "M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14.5C4.42 14.5 1.5 11.58 1.5 8C1.5 4.42 4.42 1.5 8 1.5C11.58 1.5 14.5 4.42 14.5 8C14.5 11.58 11.58 14.5 8 14.5ZM7.25 4H8.75V8.5L12.5 10.75L11.75 12L7.25 9.25V4Z",
  },
  "borewell-drilling": {
    name: "Borewell Construction",
    desc: "Monitor drilling progress, depth updates, and completion status.",
    iconPath: "M8 0C8 0 15 7.16 15 11.5C15 15.64 11.87 19 8 19C4.13 19 1 15.64 1 11.5C1 7.16 8 0 8 0Z",
  },
  "organic-farm-setup": {
    name: "Organic Farming",
    desc: "Track organic cultivation activities, crop planning, and certifications.",
    iconPath: "M9 0C13.97 0 18 4.03 18 9C18 13.97 13.97 18 9 18C4.03 18 0 13.97 0 9C0 4.03 4.03 0 9 0ZM9 2.25C5.27 2.25 2.25 5.27 2.25 9C2.25 12.73 5.27 15.75 9 15.75C12.73 15.75 15.75 12.73 15.75 9C15.75 5.27 12.73 2.25 9 2.25Z M12.38 5.62C12.38 5.62 9 5.62 7.88 6.75C6.75 7.88 5.62 11.25 5.62 11.25C5.62 11.25 9 11.25 10.12 10.12C11.25 9 12.38 5.62 12.38 5.62Z",
  }
};

function SelectServiceContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  
  // Read services from URL if available, else fallback to all for demonstration
  const servicesParam = searchParams.get("services");
  const requestedServices = servicesParam ? servicesParam.split(",") : Object.keys(SERVICE_MAP);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-4 lg:p-12 relative" style={{
      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/assets/home/TrendingFarmlands/glcsos01.svg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      
      {/* Background Blur Overlay to match the modal style from Figma exactly */}
      <div className="absolute inset-0 z-0" style={{ backdropFilter: "blur(50px)", background: "rgba(9, 20, 38, 0.4)" }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="flex flex-col md:flex-row bg-[#FFFFFF] relative z-10 w-full max-w-[1100px]"
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          minHeight: "500px"
        }}
      >
        
        {/* Left Column */}
        <div style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "32px",
          gap: "35px",
          width: "100%",
          maxWidth: "346px",
          flexShrink: 0,
          background: "rgba(231, 231, 231, 0.42)",
          borderRight: "1px solid rgba(196, 198, 207, 0.3)",
        }}>
          
          {/* Header Row */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", width: "100%" }}>
            <button onClick={() => router.back()} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40px", height: "40px", background: "#E3E2E6", borderRadius: "9999px", border: "none", cursor: "pointer" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#002045"/>
              </svg>
            </button>
            <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.6px", color: "#0F2F4C" }}>
              Select Service
            </h1>
          </div>

          {/* Context Card & Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
            
            {/* Glass Card */}
            <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px", width: "100%", background: "rgba(255, 255, 255, 0.45)", border: "1px solid rgba(255, 255, 255, 0.5)", boxShadow: "0px 8px 32px rgba(31, 38, 135, 0.04)", backdropFilter: "blur(12px)", borderRadius: "13px", gap: "16px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "16px", background: "#C4C4C4", overflow: "hidden", flexShrink: 0 }}>
                <img src="/assets/home/TrendingFarmlands/glcsos01.svg" alt="Farmland" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.6)" }}>FARMLAND ID</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C", marginBottom: "4px" }}>GLC SOS01</span>
                <div style={{ background: "#CADAFF", borderRadius: "9999px", padding: "2px 10px", display: "inline-flex", width: "fit-content" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "-0.25px", textTransform: "uppercase", color: "#4F5F7F" }}>UNDER MAINTENANCE</span>
                </div>
              </div>
            </div>

            <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "29px", color: "#43474E" }}>
              Choose the service you want to manage for this farmland.
            </p>
          </div>

        </div>

        {/* Right Column Grid */}
        <div style={{
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          alignContent: "start",
          gap: "24px",
          padding: "48px",
          overflowY: "auto",
        }}>
          
          {requestedServices.map((serviceId) => {
            const srv = SERVICE_MAP[serviceId];
            if (!srv) return null;
            return (
              <div 
                key={serviceId}
                onClick={() => router.push(`/maintenance/${params.requestId}/${serviceId}`)}
                style={{ display: "flex", flexDirection: "row", padding: "24px", background: "#FFFFFF", boxShadow: "0px 4px 20px rgba(26, 54, 93, 0.05)", borderRadius: "16px", gap: "16px", cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ width: "56px", height: "56px", background: "#2780C4", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 16 18" fill="none">
                    <path d={srv.iconPath} fill="#FFFFFF"/>
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#002045" }}>{srv.name}</h3>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#43474E" }}>{srv.desc}</p>
                </div>
              </div>
            );
          })}

        </div>
      </motion.div>
    </div>
  );
}

export default function SelectServicePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <SelectServiceContent />
    </Suspense>
  );
}
