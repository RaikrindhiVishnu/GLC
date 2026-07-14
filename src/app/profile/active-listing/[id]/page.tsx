"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ActiveListingPage() {
  const router = useRouter();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
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
  }, []);

  // Screen Lock Logic for Modal
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div style={{ width: "100vw", overflowX: "hidden", position: "relative", backgroundColor: "#F8F9FA" }}>
      
      {/* 1. Strict 100vh Hero Section */}
      <div style={{
        width: "100vw", height: "100vh", position: "relative",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
      }}>
        {/* Full Width Background Image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div style={{
            width: "100%", height: "100%", backgroundColor: "#0F2F4C",
            backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')",
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
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
            }}>GLC SOS 01</span>
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
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px",
        }}>
          <div style={{ position: "absolute", width: "718px", height: "572px", left: "41px", top: "41px" }}>

            {/* Step 1: Submission Received */}
            <div style={{ position: "absolute", width: "718px", height: "112px", left: "0px", top: "0px" }}>
              <div style={{ position: "absolute", width: "40px", height: "112px", left: "0px", top: "0px" }}>
                <div style={{ position: "absolute", width: "40px", height: "40px", left: "0px", top: "0px", background: "#C5DFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="10" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div style={{ position: "absolute", width: "2px", height: "72px", left: "19px", top: "40px" }}>
                  <div style={{ position: "absolute", width: "2px", height: "64px", left: "0px", top: "8px", background: "#AED6EF" }} />
                </div>
              </div>
              <div style={{ position: "absolute", width: "309px", height: "60px", left: "64px", top: "0px" }}>
                <span style={{ position: "absolute", left: "0px", top: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>Submission Received</span>
                <span style={{ position: "absolute", left: "0px", top: "36px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>Property details and passbook uploaded</span>
              </div>
            </div>

            {/* Step 2: Document Verification (Active in design logic, originally step 3 in CSS but visually it's the second active step) */}
            <div style={{ position: "absolute", width: "718px", height: "134px", left: "0px", top: "160px" }}>
              <div style={{ position: "absolute", width: "40px", height: "144px", left: "0px", top: "0px" }}>
                <div style={{ position: "absolute", width: "40px", height: "40px", left: "0px", top: "0px", background: "#FFFFFF", border: "2px solid rgba(192, 199, 210, 0.3)", borderRadius: "9999px" }}>
                  <div style={{ position: "absolute", width: "12px", height: "12px", left: "12px", top: "12px", background: "#2780C4", borderRadius: "9999px" }} />
                </div>
                <div style={{ position: "absolute", width: "2px", height: "94px", left: "19px", top: "40px" }}>
                  <div style={{ position: "absolute", width: "2px", height: "85px", left: "0px", top: "8px", background: "#E1E3E4" }} />
                </div>
              </div>
              <div style={{ position: "absolute", width: "654px", height: "122px", left: "64px", top: "0px" }}>
                <span style={{ position: "absolute", left: "0px", top: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>Document Verification</span>
                <span style={{ position: "absolute", left: "0px", top: "33px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#5F5E5E" }}>CCS is reviewing legal documentation and land boundaries.</span>
              </div>
            </div>

            {/* Step 3: Valuation & Risk Audit (Inactive) */}
            <div style={{ position: "absolute", width: "718px", height: "112px", left: "0px", top: "306px" }}>
              <div style={{ position: "absolute", width: "40px", height: "112px", left: "0px", top: "0px" }}>
                <div style={{ position: "absolute", width: "40px", height: "40px", left: "0px", top: "0px", background: "#EDEEEF", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="21" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div style={{ position: "absolute", width: "2px", height: "72px", left: "19px", top: "40px" }}>
                  <div style={{ position: "absolute", width: "2px", height: "64px", left: "0px", top: "8px", background: "#E1E3E4" }} />
                </div>
              </div>
              <div style={{ position: "absolute", width: "400px", height: "64px", left: "64px", top: "0px" }}>
                <span style={{ position: "absolute", width: "400px", height: "28px", left: "0px", top: "4px", fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "20px", lineHeight: "28px", display: "flex", alignItems: "center", color: "#8797A5", whiteSpace: "nowrap" }}>Valuation & Risk Audit</span>
                <span style={{ position: "absolute", width: "400px", height: "24px", left: "0px", top: "40px", fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", color: "#A2A3A5", whiteSpace: "nowrap" }}>Available after validation</span>
              </div>
            </div>

            {/* Step 4: Final Legal Clearance (Inactive) */}
            <div style={{ position: "absolute", width: "718px", height: "60px", left: "0px", top: "436px" }}>
              <div style={{ position: "absolute", width: "40px", height: "40px", left: "0px", top: "0px", background: "#EDEEEF", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="21" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <div style={{ position: "absolute", width: "257px", height: "60px", left: "64px", top: "0px", opacity: 0.5 }}>
                <span style={{ position: "absolute", left: "0px", top: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>Live on GLC Marketplace</span>
              </div>
            </div>

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
            background: "url('/images/map-placeholder.jpg') center/cover", opacity: 0.8, borderRadius: "24px",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <div style={{ width: "32px", height: "32px", background: "#FFFFFF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#404750" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
          </div>

          <div style={{ position: "absolute", width: "318px", height: "40px", left: "33px", top: "220px" }}>
            <span style={{ position: "absolute", left: "0px", top: "0px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.6px", color: "#131600" }}>Pending Listing</span>
            <div style={{ position: "absolute", left: "0px", top: "40px", background: "#CFE5FF", borderRadius: "9999px", padding: "4px 12px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#004A78" }}>Status : Under CCS Review</span>
            </div>
          </div>

          <div style={{ boxSizing: "border-box", position: "absolute", width: "318px", height: "39px", left: "33px", top: "310px", borderTop: "1px solid #F3F4F5" }}>
            <div style={{ position: "absolute", width: "100%", height: "40px", left: "0px", top: "16px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(69, 71, 76, 0.6)" }}>Total Acreage</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "20px", color: "#0F2F4C" }}>10 Acres</span>
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
