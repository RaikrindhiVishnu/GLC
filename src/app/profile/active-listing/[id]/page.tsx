"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MapWrapper from "@/components/MapWrapper";
import { useGetFarmlandByIdQuery } from "@/services/farmland";
import { useGetTrackingForUserUploadedFarmlandQuery } from "@/services/user";

export default function ActiveListingPage() {
  const router = useRouter();
  const params = useParams();
  const farmlandId = typeof params.id === 'string' ? parseInt(params.id, 10) : 0;

  const { data: farmlandResponse, isLoading: isFetchingData } = useGetFarmlandByIdQuery(
    { farmland_id: farmlandId },
    { skip: farmlandId === 0 }
  );

  const { data: trackingResponse } = useGetTrackingForUserUploadedFarmlandQuery(
    { farmland_id: farmlandId },
    { skip: farmlandId === 0 }
  );

  const farmlandData = farmlandResponse?.[0];

  const getStageStatus = (stageId: number) => {
    if (!trackingResponse?.stages) return 0;
    const stage = trackingResponse.stages.find((s: any) => s.milestone_stage_id === stageId);
    return stage ? stage.milestone_status_id : 0;
  };

  const getStatusText = () => {
    if (!trackingResponse?.farmland_status_id) return "Under CCS Review";
    const sid = trackingResponse.farmland_status_id;
    if (sid === 1) return "Under CCS Review";
    if (sid === 2) return "Approved";
    if (sid === 3) return "Rejected";
    return "Processing";
  };

  const initialLocation = farmlandData?.location_details?.lat && farmlandData?.location_details?.long
    ? { lat: parseFloat(farmlandData.location_details.lat), lng: parseFloat(farmlandData.location_details.long) }
    : undefined;

  let initialPolygon = undefined;
  if (farmlandData?.polygon) {
    if (Array.isArray(farmlandData.polygon)) {
      initialPolygon = farmlandData.polygon;
    } else if (typeof farmlandData.polygon === 'string') {
      try {
        const parsed = JSON.parse(farmlandData.polygon);
        if (Array.isArray(parsed)) {
          initialPolygon = parsed;
        }
      } catch (e) {
        console.error("Failed to parse polygon", e);
      }
    }
  }

  const acreage = farmlandData?.land_specifications?.total_acers || (farmlandData as any)?.acers || 10;

  const isValidUrl = (url: string | undefined | null) => {
    if (!url || url === "null" || url === "") return false;
    if (url.toLowerCase().endsWith('.pdf')) return false;
    if (url.startsWith("http") || url.startsWith("data:") || url.startsWith("/")) return true;
    return false;
  };

  const heroImgUrl = isValidUrl(farmlandData?.farmland_img) 
    ? (farmlandData?.farmland_img || "") 
    : "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function update() {
      if (isFullscreen) return; // Do not apply scale if in fullscreen, so fixed positioning works
      const vw = window.innerWidth;
      const scale = vw / 1440;
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${scale})`;
      }
      if (shellRef.current) {
        // Height of the bottom section is (3366 - 960) * scale
        shellRef.current.style.height = `${2406 * scale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isFullscreen]);

  useEffect(() => {
    const handleFullscreen = (e: any) => {
      setIsFullscreen(e.detail);
      if (e.detail && scalerRef.current) {
        scalerRef.current.style.transform = 'none';
      }
    };
    window.addEventListener("mapFullscreenChange", handleFullscreen);
    return () => window.removeEventListener("mapFullscreenChange", handleFullscreen);
  }, []);

  // Screen Lock Logic for Modal
  useEffect(() => {
    if (isModalOpen || isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, isFullscreen]);

  return (
    <div style={{ width: "100vw", overflowX: "hidden", position: "relative", backgroundColor: "#F8F9FA" }}>
      
      {/* 1. Strict 100vh Hero Section */}
      <div style={{
        width: "100vw", height: "100vh", position: "relative",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
      }}>
        {/* Full Width Background Image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          <img 
            src={heroImgUrl} 
            alt="Hero Background"
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
          />
          <div style={{
            position: "absolute", left: "0px", right: "0px", top: "0px", bottom: "0px",
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
          }} />
        </div>

        {/* Hero Content */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start",
          padding: "0px 48px 20px", width: "100%", zIndex: 1, position: "relative"
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 50px", marginBottom: "26px" }}>
            <div style={{
              display: "flex", flexDirection: "row", alignItems: "center", padding: "6px 16px",
              background: "#FFDAD6", backdropFilter: "blur(6px)", borderRadius: "9999px",
            }}>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px",
                lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#BA1A1A",
              }}>PRIORITY</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 50px", width: "100%", maxWidth: "1344px" }}>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "60px",
              lineHeight: "60px", letterSpacing: "-1.5px", color: "#FFFFFF",
            }}>{(farmlandData as any)?.farm_code || farmlandData?.farmland_code || `GLC SOS 0${farmlandId}`}</span>
          </div>
        </div>
      </div>

      {/* 2. Scaled Bottom Section */}
      <div ref={shellRef} style={{ position: "relative", width: "100vw", overflow: "hidden" }}>
        <div
          ref={scalerRef}
          style={{
            width: "1440px",
            height: "2406px",
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top left",
            background: "transparent",
            zIndex: 1,
          }}
        >
          {/* Shift everything up by 960px to compensate for the hero section we moved out */}
          <div style={{ position: "absolute", top: "-960px", left: 0, width: "1440px", height: "3366px" }}>
            
            {/* Section - Hero Area (Listing Status Header) */}
            <div style={{
              display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end",
              position: "absolute", height: "97px", left: "58px", right: "166px", top: "1004px",
            }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "15.25px", width: "302px" }}>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px",
              lineHeight: "48px", letterSpacing: "-1.2px", color: "#0F2F4C",
            }}>Listing Status</span>
          </div>
        </div>

        {/* Left Column: 4-Tier Pipeline Tracker */}
        <div style={{
          boxSizing: "border-box", position: "absolute", width: "800px", height: "578px",
          left: "72px", top: "1160px", background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.15)",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "41px"
        }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {/* The segments drawn by each step are sufficient to connect the nodes without overlapping the icons. */}

            {[
              { id: 1, title: "Submission Received", desc: "Property details and passbook uploaded" },
              { id: 2, title: "Document Verification", desc: "CCS is reviewing legal documentation and land boundaries." },
              { id: 3, title: "Valuation & Risk Audit", desc: "Available after validation" },
              { id: 4, title: "Live on GLC Marketplace", desc: "" }
            ].map((step, index) => {
              const status = getStageStatus(step.id);
              const isCompleted = status === 2;
              const isActive = status === 1;
              const isLocked = !isCompleted && !isActive;

              const titleColor = isCompleted || isActive ? "#0F2F4C" : "#8797A5";
              const descColor = isCompleted ? "#45474C" : (isActive ? "#5F5E5E" : "#A2A3A5");
              const tops = [0, 160, 306, 436];

              return (
                <div key={step.id} style={{ display: "flex", gap: "24px", position: "absolute", top: `${tops[index]}px`, left: "0px", zIndex: 1, opacity: isLocked ? (index === 3 ? 0.5 : 0.8) : 1 }}>
                  {index < 3 && (
                    <div style={{ position: "absolute", left: "19px", top: "40px", height: `${tops[index+1] - tops[index] - 40}px`, width: "2px", background: isCompleted ? "#AED6EF" : "#E1E3E4", zIndex: 0 }} />
                  )}
                  
                  {isCompleted && (
                    <div style={{ width: "40px", height: "40px", background: "#C5DFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="10" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  )}
                  
                  {isActive && (
                    <div style={{ width: "40px", height: "40px", background: "#FFFFFF", border: "2px solid rgba(192, 199, 210, 0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxSizing: "border-box" }}>
                      <div style={{ width: "12px", height: "12px", background: "#2780C4", borderRadius: "50%" }} />
                    </div>
                  )}
                  
                  {isLocked && (
                    <div style={{ width: "40px", height: "40px", background: "#EDEEEF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="16" height="21" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                  )}

                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "6px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: titleColor }}>{step.title}</span>
                    {step.desc && (
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: descColor, maxWidth: "400px" }}>{step.desc}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Asset Context Card */}
        <div style={{
          boxSizing: "border-box", position: "absolute", width: "384px", height: "367px",
          left: "938px", top: "1165px", background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.15)",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", overflow: "hidden"
        }}>
          {/* Map view of land */}
          <div style={{
            position: "absolute", left: "20px", right: "20px", top: "20px", height: "180px",
            background: "#F1F5F9", borderRadius: "24px",
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"
          }}>
            {isFetchingData ? (
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "#8C94A1" }}>Loading Map...</span>
            ) : (
              <MapWrapper 
                viewOnly 
                initialLocation={initialLocation}
                initialPolygon={initialPolygon}
              />
            )}
          </div>

          <div style={{ position: "absolute", width: "318px", height: "40px", left: "33px", top: "220px" }}>
            <span style={{ position: "absolute", left: "0px", top: "0px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.6px", color: "#131600" }}>Pending Listing</span>
            <div style={{ position: "absolute", left: "0px", top: "40px", background: "#CFE5FF", borderRadius: "9999px", padding: "4px 12px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#004A78" }}>Status : {getStatusText()}</span>
            </div>
          </div>

          <div style={{ boxSizing: "border-box", position: "absolute", width: "318px", height: "39px", left: "33px", top: "310px", borderTop: "1px solid #F3F4F5" }}>
            <div style={{ position: "absolute", width: "100%", height: "40px", left: "0px", top: "16px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(69, 71, 76, 0.6)" }}>Total Acreage</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "20px", color: "#0F2F4C" }}>{acreage} Acres</span>
            </div>
          </div>
        </div>

        {/* System Note Footer */}
        <div style={{
          position: "absolute", height: "35.75px", left: "961px", width: "343px", top: "1573px"
        }}>
          {/* Margin & Icon */}
          <div style={{
            position: "absolute", width: "10.67px", height: "16px", left: "8px", top: "0px",
            display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "2px 0px 0px"
          }}>
            <svg width="11" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          
          {/* Container & Text */}
          <div style={{
            position: "absolute", width: "298px", height: "36px", left: "36px", top: "-0.56px",
            display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 2.59px 0px 0px"
          }}>
            <div style={{
              width: "295.41px", height: "36px", fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: "normal", fontWeight: 500, fontSize: "11px", lineHeight: "18px",
              display: "flex", alignItems: "center", color: "#9CA3AF"
            }}>
              The standard CCS screening process takes 24–48 hours. You will be notified once your passbook is verified.
            </div>
          </div>
        </div>

        {/* Withdrawal Request Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{
          position: "absolute", left: "938px", top: "1640px", width: "384px", height: "64px",
          border: "1.5px solid #2780C4", borderRadius: "32px", background: "transparent",
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px",
          color: "#2780C4", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          Withdrawal Request
        </button>

        {/* CTA Area reuse (Simple steps. Smart technology.) */}
        <div style={{ position: "absolute", top: "1859px", left: "0px", right: "0px" }}>
          <CTA />
        </div>

        {/* Footer Area reuse */}
        <div style={{ position: "absolute", top: "2467px", left: "0px", right: "0px" }}>
          <Footer />
        </div>

          </div> {/* Close negative margin wrapper */}
        </div>
      </div>
      
      {/* Example Modal Overlay */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 9999,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFF", padding: "40px", borderRadius: "24px", width: "400px",
              display: "flex", flexDirection: "column", gap: "20px"
            }}
          >
            <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: "24px", color: "#0F2F4C" }}>Withdrawal Request</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans'", color: "#5F5E5E" }}>Are you sure you want to withdraw this listing?</p>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                width: "100%", height: "48px", background: "#2780C4", borderRadius: "24px",
                color: "#FFF", border: "none", cursor: "pointer", fontWeight: "bold"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
