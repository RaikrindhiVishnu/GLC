"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ActiveDealsPage() {
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
        // Height of the bottom section is (3796 - 960) * scale
        shellRef.current.style.height = `${2836 * scale}px`;
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
            height: "2836px",
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top left",
            background: "transparent",
            zIndex: 1,
          }}
        >
          {/* Shift everything up by 960px to compensate for the hero section we moved out */}
          <div style={{ position: "absolute", top: "-960px", left: 0, width: "1440px", height: "3796px" }}>

        {/* Section - Hero Area (Deal Status Header) */}
        <div style={{
          display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end",
          position: "absolute", height: "97px", left: "58px", right: "166px", top: "1004px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "15.25px", width: "302px" }}>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px",
              lineHeight: "48px", letterSpacing: "-1.2px", color: "#0F2F4C",
            }}>Deal Status</span>
          </div>
        </div>

        {/* Left Column: 4-Tier Pipeline Tracker */}
        <div style={{
          boxSizing: "border-box", position: "absolute", width: "800px", height: "654px",
          left: "72px", top: "1160px", background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.15)",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px"
        }}>
          {/* Inner Container */}
          <div style={{ position: "absolute", width: "718px", height: "572px", left: "41px", top: "41px" }}>

            {/* Step 1: Token Advance Paid */}
            <div style={{ position: "absolute", width: "718px", height: "112px", left: "0px", top: "0px" }}>
              <div style={{ position: "absolute", width: "40px", height: "112px", left: "0px", top: "0px" }}>
                <div style={{ position: "absolute", width: "40px", height: "40px", left: "0px", top: "0px", background: "#D1E4FF", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="10" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div style={{ position: "absolute", width: "2px", height: "72px", left: "19px", top: "40px" }}>
                  <div style={{ position: "absolute", width: "2px", height: "64px", left: "0px", top: "8px", background: "#AED6EF" }} />
                </div>
              </div>
              <div style={{ position: "absolute", width: "400px", height: "60px", left: "64px", top: "0px" }}>
                <span style={{ position: "absolute", left: "0px", top: "4px", fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "20px", lineHeight: "28px", display: "flex", alignItems: "center", color: "#0F2F4C" }}>Token Advance Paid</span>
                <span style={{ position: "absolute", left: "0px", top: "36px", fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", color: "#45474C" }}>Completed on Oct 12</span>
              </div>
            </div>

            {/* Step 2: Validation in Progress (Active) */}
            <div style={{ position: "absolute", width: "718px", height: "134px", left: "0px", top: "160px" }}>
              <div style={{ position: "absolute", width: "40px", height: "144px", left: "0px", top: "0px" }}>
                <div style={{ boxSizing: "border-box", position: "absolute", width: "40px", height: "40px", left: "0px", top: "0px", background: "#FFFFFF", border: "2px solid #C5DFFF", borderRadius: "9999px" }}>
                  <div style={{ position: "absolute", width: "12px", height: "12px", left: "12px", top: "12px", background: "#2780C4", borderRadius: "9999px" }} />
                </div>
                <div style={{ position: "absolute", width: "2px", height: "144px", left: "19px", top: "40px" }}>
                  <div style={{ position: "absolute", width: "2px", height: "136px", left: "0px", top: "8px", background: "#E1E3E4" }} />
                </div>
              </div>
              <div style={{ position: "absolute", width: "654px", height: "122px", left: "64px", top: "0px" }}>
                <div style={{ display: "flex", alignItems: "center", position: "absolute", left: "0px", top: "4px", gap: "12px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>Validation in Progress</span>
                  <div style={{ background: "#CFE5FF", borderRadius: "9999px", padding: "4px 12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#004A78" }}>ACTIVE</span>
                  </div>
                </div>
                
                <div style={{ position: "absolute", left: "0px", top: "44px", background: "#E6F0FA", borderRadius: "16px", padding: "16px", display: "flex", gap: "12px", alignItems: "flex-start", width: "400px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#0F2F4C" }}>Legal team is currently reviewing your KYC and clearing the Title Deed.</span>
                </div>
              </div>
            </div>

            {/* Step 3: Sign Sale Agreement */}
            <div style={{ position: "absolute", width: "718px", height: "112px", left: "0px", top: "356px" }}>
              <div style={{ position: "absolute", width: "40px", height: "112px", left: "0px", top: "0px" }}>
                <div style={{ position: "absolute", width: "40px", height: "40px", left: "0px", top: "0px", background: "#EDEEEF", borderRadius: "9999px" }}>
                  <svg style={{ position: "absolute", width: "16px", height: "21px", left: "12px", top: "9.5px" }} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div style={{ position: "absolute", width: "2px", height: "72px", left: "19px", top: "40px" }}>
                  <div style={{ position: "absolute", width: "2px", height: "64px", left: "0px", top: "8px", background: "#E1E3E4" }} />
                </div>
              </div>
              <div style={{ position: "absolute", width: "400px", height: "64px", left: "64px", top: "0px" }}>
                <span style={{ position: "absolute", left: "0px", top: "4px", fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#8797A5" }}>Sign Sale Agreement</span>
                <span style={{ position: "absolute", left: "0px", top: "36px", fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#A2A3A5" }}>Available after validation</span>
              </div>
            </div>

            {/* Step 4: Final Disbursal & Handover */}
            <div style={{ position: "absolute", width: "718px", height: "60px", left: "0px", top: "496px" }}>
              <div style={{ position: "absolute", width: "40px", height: "40px", left: "0px", top: "0px", background: "#EDEEEF", borderRadius: "9999px" }}>
                <svg style={{ position: "absolute", width: "16px", height: "21px", left: "12px", top: "9.5px" }} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <div style={{ position: "absolute", width: "400px", height: "60px", left: "64px", top: "0px" }}>
                <span style={{ position: "absolute", left: "0px", top: "4px", fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#8797A5" }}>Final Disbursal & Handover</span>
                <span style={{ position: "absolute", left: "0px", top: "36px", fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#A2A3A5" }}>Final step of transaction</span>
              </div>
            </div>

          </div>
        </div>

        {/* Token Status Card (Below left column) */}
        <div style={{
          boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start",
          padding: "24px", position: "absolute", width: "800px", height: "135px",
          left: "72px", top: "1842px", background: "#FFFFFF", border: "1px solid rgba(199, 200, 175, 0.1)",
          boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.03)", borderRadius: "32px",
        }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "20px", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "48px", height: "48px", background: "rgba(39, 128, 196, 0.2)", borderRadius: "16px", flexShrink: 0 }}>
              <svg width="16" height="21" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>1 Token Blocked</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "23px", color: "#0F2F4C" }}>₹5,00,000 advance received. Property is secured and removed from the public market.</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{
          position: "absolute", width: "384px", height: "966.88px",
          left: "904px", top: "1160px",
        }}>
          {/* Asset Context Card */}
          <div style={{
            boxSizing: "border-box", position: "absolute", width: "384px", height: "393.88px",
            left: "0px", top: "0px", background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.15)",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", overflow: "hidden"
          }}>
            {/* Property Image */}
            <div style={{
              position: "absolute", left: "33px", right: "33px", top: "33px", height: "178px",
              background: "url('/images/farm-sunset.jpg') center/cover", borderRadius: "24px",
            }} />

            <div style={{ position: "absolute", width: "318px", height: "40px", left: "33px", top: "228px" }}>
              <span style={{ position: "absolute", left: "0px", top: "0px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.6px", color: "#131600" }}>GLC SOS 01</span>
              <div style={{ position: "absolute", right: "0px", top: "8px", background: "#CFE5FF", borderRadius: "9999px", padding: "4px 12px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#004A78" }}>Verified Asset</span>
              </div>
            </div>

            <div style={{ boxSizing: "border-box", position: "absolute", width: "318px", height: "77px", left: "33px", top: "284px", borderTop: "1px solid #F3F4F5" }}>
              <div style={{ position: "absolute", left: "0px", top: "19px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(69, 71, 76, 0.6)" }}>TOTAL VALUE</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "20px", color: "#0F2F4C" }}>₹5.2Cr</span>
              </div>
              <div style={{ position: "absolute", left: "158px", top: "17px", width: "1px", height: "44px", background: "#F3F4F5" }} />
              <div style={{ position: "absolute", left: "175px", top: "19px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(69, 71, 76, 0.6)" }}>ASSET ID</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "20px", color: "#131600" }}>RE-99210</span>
              </div>
            </div>
          </div>

          {/* Section - Support Card */}
          <div style={{
            position: "absolute", left: "0px", top: "446px", width: "384px", height: "208px",
            background: "linear-gradient(108deg, #121415 4.42%, #1C1F21 97.61%)", borderRadius: "40px",
            boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
            display: "flex", flexDirection: "column", alignItems: "center", padding: "32px", gap: "24px"
          }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#FFFFFF", textAlign: "center", maxWidth: "200px" }}>
              Need Help with Documentation?
            </span>
            <button style={{
              width: "286px", height: "64px", background: "#2780C4", borderRadius: "24px",
              boxShadow: "0px 20px 25px -5px rgba(18, 20, 21, 0.2), 0px 8px 10px -6px rgba(18, 20, 21, 0.2)",
              border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700, fontSize: "12px", lineHeight: "24px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#FFFFFF",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              Message Sales Executive
            </button>
          </div>
          {/* Request Investment Exit / Cancellation Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{
            position: "absolute", left: "0px", top: "678px", width: "384px", height: "64px",
            border: "1.5px solid #2780C4", borderRadius: "32px", background: "transparent",
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px",
            color: "#2780C4", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            Request Investment Exit / Cancellation
          </button>
        </div>

        {/* CTA Area reuse (Simple steps. Smart technology.) */}
        <div style={{ position: "absolute", top: "2289px", left: "0px", right: "0px" }}>
          <CTA />
        </div>

        {/* Footer Area reuse */}
        <div style={{ position: "absolute", top: "2897px", left: "0px", right: "0px" }}>
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
              background: "#FFF", padding: "40px", borderRadius: "24px", width: "450px",
              display: "flex", flexDirection: "column", gap: "20px"
            }}
          >
            <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: "24px", color: "#0F2F4C", textAlign: "center" }}>Request Cancellation</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans'", color: "#5F5E5E", textAlign: "center" }}>Are you sure you want to request an investment exit or cancellation? A sales executive will contact you to confirm.</p>
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
