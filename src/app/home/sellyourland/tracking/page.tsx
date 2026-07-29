"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { useSearchParams } from "next/navigation";
import { useDeleteFarmlandListingMutation, useGetFarmlandByIdQuery } from "@/services/farmland";
import { useGetTrackingForUserUploadedFarmlandQuery } from "@/services/user";
import MapWrapper from "@/components/MapWrapper";

export default function TrackingPage() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawStep, setWithdrawStep] = useState(1);
  const [showReasonSelect, setShowReasonSelect] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [remarks, setRemarks] = useState("");
  const searchParams = useSearchParams();
  const farmlandId = parseInt(searchParams.get("farmland") || searchParams.get("id") || "0", 10);
  const [deleteFarmlandListing, { isLoading: isDeleting }] = useDeleteFarmlandListingMutation();

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

  const acreage = farmlandData?.land_specifications?.total_acers || 10;

  useEffect(() => {
    if (showWithdrawModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setWithdrawStep(1);
      setShowReasonSelect(false);
      setSelectedReason("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showWithdrawModal]);

  const isValidUrl = (url: string | undefined | null) => {
    if (!url || url === "null" || url === "") return false;
    if (url.startsWith("http") || url.startsWith("data:")) return true;
    return false;
  };

  const heroImgUrl = isValidUrl(farmlandData?.farmland_img) 
    ? farmlandData.farmland_img 
    : "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop";

  return (
    <div style={{ width: "100%", background: "#F8F9FA", position: "relative", minHeight: "100vh" }}>
      
      {/* ─── 1. CINEMATIC HERO ─── */}
      <section style={{ position: "relative", width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        
        {/* Background Image & Gradient */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          <img 
            src={heroImgUrl} 
            alt="Hero Background"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            crossOrigin="anonymous"
          />
        </div>
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)" }} />
        
        {/* Content Container */}
        <div style={{ position: "relative", zIndex: 2, padding: "0 48px 70px", width: "100%", maxWidth: "1920px", margin: "0 auto", boxSizing: "border-box" }}>
          
          <div style={{ display: "flex", alignItems: "center", padding: "6px 16px", background: "#FFDAD6", backdropFilter: "blur(6px)", borderRadius: "9999px", width: "fit-content", marginBottom: "26px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#BA1A1A" }}>PRIORITY</span>
          </div>
          
          <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 60px)", letterSpacing: "-1.5px", color: "#FFFFFF" }}>
            {farmlandData?.farmland_code || "GLC Processing..."}
          </h1>
        </div>
      </section>

      {/* ─── 2. MAIN TRACKING CONTENT ─── */}
      <section style={{ position: "relative", width: "100%", maxWidth: "1300px", marginLeft: "auto", marginRight: "auto", padding: "80px 48px 120px", boxSizing: "border-box", zIndex: 3 }}>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: 4-Tier Pipeline Tracker */}
          <div className="flex-1" style={{ background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.15)", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "40px", boxSizing: "border-box", position: "relative" }}>
            
            <div style={{ display: "flex", flexDirection: "column", position: "relative", maxWidth: "600px" }}>
              
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

                return (
                  <div key={step.id} style={{ display: "flex", gap: "24px", position: "relative", zIndex: 1, marginBottom: index === 3 ? "0" : "48px", opacity: isLocked ? (index === 3 ? 0.5 : 0.8) : 1 }}>
                    {index < 3 && (
                      <div style={{ position: "absolute", left: "19px", top: "40px", bottom: "-48px", width: "2px", background: isCompleted ? "#AED6EF" : "#E1E3E4", zIndex: 0 }} />
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
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: descColor, maxWidth: "286px" }}>{step.desc}</span>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Right Column: Context Card */}
          <div className="w-full lg:w-[384px]" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.15)", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "32px", boxSizing: "border-box" }}>
              
              {/* Map View */}
              <div style={{ width: "100%", height: "160px", background: "#F1F5F9", borderRadius: "36px", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
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

              {/* Status Header */}
              <div style={{ marginBottom: "24px", position: "relative" }}>
                <h2 style={{ margin: "0 0 12px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", color: "#131600", letterSpacing: "-0.6px" }}>
                  Pending Listing
                </h2>
                <div style={{ background: "#CFE5FF", borderRadius: "9999px", padding: "4px 12px", width: "fit-content" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#004A78" }}>Status : {getStatusText()}</span>
                </div>
              </div>

              <div style={{ width: "100%", height: "1px", background: "#F3F4F5", margin: "24px 0" }} />

              {/* Acreage Details */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(69, 71, 76, 0.6)" }}>Total Acreage</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>{acreage} Acres</span>
              </div>
            </div>

            {/* Info Text (System Note Footer) */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginTop: "20px", padding: "0 8px" }}>
              <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "20px", color: "#9CA3AF" }}>The standard CCS screening process takes 24–48 hours.<br />You will be notified once your passbook is verified.</span>
            </div>

            {/* Action Button */}
            <button 
              onClick={() => setShowWithdrawModal(true)}
              style={{ width: "100%", height: "68.56px", background: "rgba(255, 255, 255, 0.002)", border: "2px solid #2780C4", borderRadius: "39.18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 12.24px 18.36px -3.67px rgba(0, 0, 0, 0.1), 0px 4.9px 7.35px -4.9px rgba(0, 0, 0, 0.1)", marginTop: "16px" }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14.7px", color: "#2780C4", letterSpacing: "-0.43px", textTransform: "capitalize" }}>Withdrawal Listing Request</span>
            </button>

          </div>

        </div>
      </section>

      {/* ─── 3. BOTTOM BANNER SECTION ─── */}
      <CTA />

      <Footer />

      {/* ─── WITHDRAWAL MODAL ─── */}
      {showWithdrawModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(9, 20, 38, 0.2)", backdropFilter: "blur(16px)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", padding: "24px", boxSizing: "border-box" }}>
          
          <div style={{ width: "100%", maxWidth: "932px", maxHeight: "100%", background: "#FFFFFF", borderRadius: "48px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", padding: "24px 8px 24px 24px", boxSizing: "border-box" }}>
            <div data-lenis-prevent style={{ width: "100%", height: "100%", overflowY: "auto", paddingRight: "16px", display: "flex", flexDirection: "column", alignItems: "center", boxSizing: "border-box", paddingTop: "26px", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            
            {withdrawStep === 1 ? (
              <>
              {/* Hero Section */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "725px", marginBottom: "40px", gap: "24px" }}>
              
              <div style={{ width: "96px", height: "96px", background: "#EFDBE1", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#BA1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>

              <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 55px)", lineHeight: "1", letterSpacing: "-1.38px", color: "#131600", textAlign: "center" }}>
                Are you sure you want to<br/>Withdraw ?
              </h2>

              <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#414753", textAlign: "center" }}>
                Withdrawing your listing will immediately terminate the CCS review process. All<br/>current audit progress, including document verification and valuation assessments will be voided
              </p>
            </div>

            {/* Middle Section: Feedback & Impact */}
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%", maxWidth: "741px", gap: "40px", marginBottom: "40px" }}>
              
              {/* Left: Feedback */}
              <div style={{ display: "flex", flexDirection: "column", flex: "1 1 343px", gap: "16px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#47617C", marginLeft: "8px" }}>
                  Reason for Withdrawal
                </span>
                
                <div 
                  onClick={() => setShowReasonSelect(true)}
                  style={{ width: "100%", height: "58px", background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.05)", borderRadius: "9999px", display: "flex", alignItems: "center", padding: "0 24px", boxShadow: "0px 4px 40px rgba(26, 28, 28, 0.06)", boxSizing: "border-box", cursor: "pointer" }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: selectedReason ? "#181C20" : "rgba(112, 120, 129, 0.6)" }}>
                    {selectedReason || "Select a reason..."}
                  </span>
                </div>

                <div style={{ width: "100%", height: "128px", background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.05)", borderRadius: "32px", display: "flex", alignItems: "flex-start", padding: "20px 24px", boxShadow: "0px 4px 40px rgba(26, 28, 28, 0.06)", boxSizing: "border-box" }}>
                  <textarea 
                    placeholder="Add any additional comments for our compliance team..."
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    style={{ width: "100%", height: "100%", border: "none", outline: "none", background: "transparent", resize: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "#181C20" }}
                  />
                </div>
              </div>

              {/* Right: Impact Summary */}
              <div style={{ display: "flex", flexDirection: "column", flex: "1 1 343px", background: "rgba(241, 243, 250, 0.4)", borderRadius: "32px", padding: "24px", gap: "24px", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#707881", textAlign: "center", width: "100%" }}>
                  Protocol Impact Summary
                </span>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "20px", height: "20px", border: "2px solid rgba(27, 121, 189, 0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 24 24" fill="none" stroke="#00609A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#404750" }}>Stop all CCS verification procedures.</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "20px", height: "20px", border: "2px solid rgba(27, 121, 189, 0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 24 24" fill="none" stroke="#00609A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#404750" }}>Remove property from the pending marketplace queue.</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "20px", height: "20px", border: "2px solid rgba(27, 121, 189, 0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 24 24" fill="none" stroke="#00609A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#404750" }}>Delete current audit progress for this listing.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Support Note */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "20px", color: "#707881", textAlign: "center" }}>
                Need help with your listing? Our support team can assist<br/>with concerns rather than withdrawing.
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#2780C4", cursor: "pointer" }}>
                Contact Support
              </span>
            </div>

            {/* Action Deck */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", width: "100%" }}>
              <button 
                disabled={isDeleting}
                onClick={async () => {
                  try {
                    const reasonOptions = [
                      "Decided to keep the property",
                      "Found a private buyer / Sold offline",
                      "Missing required legal documents",
                      "Need to correct submitted property details",
                      "Concerns about the valuation process",
                      "Other (Please specify below)"
                    ];
                    let reason_id = reasonOptions.indexOf(selectedReason) + 1;
                    if (reason_id === 0) reason_id = 6;
                    
                    const res = await deleteFarmlandListing({
                      farmland_id: farmlandId,
                      reason_id,
                      remarks: remarks || selectedReason
                    }).unwrap();
                    
                    setWithdrawStep(2);
                  } catch (error) {
                    console.error("Failed to delete listing", error);
                    alert("Failed to delete listing.");
                  }
                }}
                style={{ width: "100%", maxWidth: "400px", height: "62.84px", background: "#BA1A1A", borderRadius: "9999px", border: "none", cursor: isDeleting ? "not-allowed" : "pointer", opacity: isDeleting ? 0.7 : 1, boxShadow: "0px 9.2px 13.8px -2.76px rgba(0, 0, 0, 0.1), 0px 3.68px 5.52px -3.68px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16.58px", color: "#FFFFFF" }}>{isDeleting ? "Withdrawing..." : "Confirm Withdrawal"}</span>
              </button>
              
              <button 
                onClick={() => setShowWithdrawModal(false)}
                style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px" }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#404750", letterSpacing: "0.35px", textTransform: "uppercase" }}>
                  CANCEL & KEEP LISTING ACTIVE
                </span>
              </button>
            </div>
            </>
            ) : (
              <>
              {/* STEP 2: SUCCESS MODAL */}
              
              {/* Hero Section */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "725px", marginBottom: "40px", gap: "24px" }}>
                
                <div style={{ width: "96px", height: "96px", background: "radial-gradient(59.38% 41.98% at 50% 50%, #2780C4 0%, #164573 100%)", border: "5px solid #AED6EF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(39, 128, 196, 0.2)" }}>
                  <svg width="36" height="27" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>

                <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 55px)", lineHeight: "1", letterSpacing: "-1.38px", color: "#131600", textAlign: "center" }}>
                  Listing Successfully<br/>Withdrawn
                </h2>

                <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#414753", textAlign: "center" }}>
                  Your property has been successfully removed from the marketplace<br/>queue. The CCS review process has been immediately terminated
                </p>
              </div>

              {/* Middle Section: Status & Re-engagement */}
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: "740px", gap: "40px", marginBottom: "40px" }}>
                
                {/* Left: Status Summary Card */}
                <div style={{ display: "flex", flexDirection: "column", flex: "1 1 343px", background: "#FFFFFF", borderRadius: "40px", padding: "32px", gap: "24px", boxShadow: "0px 40px 80px rgba(24, 28, 32, 0.04)", boxSizing: "border-box", position: "relative", overflow: "hidden" }}>
                  
                  {/* Glassmorphic accent inside card */}
                  <div style={{ position: "absolute", width: "256px", height: "256px", right: "-80px", bottom: "-80px", background: "#F1F3FA", opacity: 0.5, filter: "blur(30px)", borderRadius: "50%", zIndex: 0 }} />
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", letterSpacing: "1.4px", textTransform: "uppercase", color: "#47617C" }}>Property Status</span>
                      <div style={{ background: "#F1F3FA", borderRadius: "9999px", padding: "8px 16px", width: "100%" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#181C20" }}>Inactive / Withdrawn</span>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", letterSpacing: "1.4px", textTransform: "uppercase", color: "#47617C" }}>CCS Audit Status</span>
                      <div style={{ background: "rgba(255, 218, 214, 0.3)", borderRadius: "9999px", padding: "8px 16px", width: "100%", display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "13.33px", height: "13.33px", border: "2.5px solid #BA1A1A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: "5px", height: "5px", background: "#BA1A1A", borderRadius: "50%" }} />
                        </div>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#BA1A1A" }}>Halted</span>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", letterSpacing: "1.4px", textTransform: "uppercase", color: "#47617C" }}>Marketplace Status</span>
                      <div style={{ background: "#F1F3FA", borderRadius: "9999px", padding: "8px 16px", width: "100%" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#404750" }}>Removed from Queue</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginTop: "8px", position: "relative", zIndex: 1 }}>
                    <svg width="14" height="18" viewBox="0 0 24 24" fill="#47617C" style={{ flexShrink: 0, marginTop: "4px" }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#404750" }}>All submitted legal documents and passbook copies have been securely archived in accordance with SEBI and GLC data privacy protocols.</span>
                  </div>
                </div>

                {/* Right: Re-engagement Section */}
                <div style={{ display: "flex", flexDirection: "column", flex: "1 1 343px", background: "#FFFFFF", borderRadius: "32px", padding: "32px", gap: "12px", boxShadow: "0px 40px 80px rgba(24, 28, 32, 0.05)", boxSizing: "border-box", alignSelf: "flex-start" }}>
                  <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "20px", color: "#181C20", textAlign: "center" }}>Want to list again later?</h3>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#404750", textAlign: "center" }}>
                    You can restart the CCS screening process and submit this property for valuation at any time from your portfolio dashboard. A new audit will be required.
                  </p>
                </div>

              </div>

              {/* Action Deck */}
              <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "20px" }}>
                <button 
                  onClick={() => setShowWithdrawModal(false)}
                  style={{ width: "100%", maxWidth: "400px", height: "62.84px", background: "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", cursor: "pointer", boxShadow: "0px 9.2px 13.8px -2.76px rgba(0, 0, 0, 0.1), 0px 3.68px 5.52px -3.68px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16.58px", color: "#FFFFFF" }}>Return to Listing</span>
                </button>
              </div>
              </>
            )}

            </div>
          </div>
        </div>
      )}
      {/* ─── REASON SELECTION OVERLAY ─── */}
      {showReasonSelect && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0, 0, 0, 0.1)", zIndex: 10000, display: "flex", justifyContent: "center", alignItems: "center", padding: "24px", boxSizing: "border-box" }}>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 24px", width: "100%", maxWidth: "460px", background: "#FFFFFF", boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.2)", borderRadius: "24px", boxSizing: "border-box" }}>
            
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "24px", gap: "16px" }}>
              <div style={{ width: "40px", height: "40px", background: "rgba(0, 97, 165, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0061A5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#002045", textAlign: "center" }}>
                Select Reason
              </h3>
            </div>

            {/* Options Matrix */}
            <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "4px", marginBottom: "24px" }}>
              {[
                "Decided to keep the property",
                "Found a private buyer / Sold offline",
                "Missing required legal documents",
                "Need to correct submitted property details",
                "Concerns about the valuation process",
                "Other (Please specify below)"
              ].map((reason, i) => (
                <div 
                  key={i}
                  onClick={() => {
                    setSelectedReason(reason);
                    setShowReasonSelect(false);
                  }}
                  style={{ display: "flex", alignItems: "center", padding: "12px 20px", width: "100%", height: "44px", borderRadius: "16px", cursor: "pointer", boxSizing: "border-box" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#F8F9FA"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#43474E" }}>
                    {reason}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer Cancel */}
            <button 
              onClick={() => setShowReasonSelect(false)}
              style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#0061A5" }}>
                Cancel Selection
              </span>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
