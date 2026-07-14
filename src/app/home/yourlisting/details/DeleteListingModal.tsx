"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ListingRemovedModal from "./ListingRemovedModal";

interface DeleteListingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteListingModal({ isOpen, onClose }: DeleteListingModalProps) {
  const [isRemovedOpen, setIsRemovedOpen] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
    <AnimatePresence>
      <div data-lenis-prevent className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-md">
        
        {/* Background Overlay */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Body */}
        <motion.div 
          className="relative flex flex-col items-center w-[932px] max-w-[95%] h-auto max-h-[95vh] pt-[50px] pb-[50px] px-[22px] rounded-[48px] overflow-y-auto hide-scrollbar z-10"
          style={{
            background: "rgba(255, 255, 255, 0.94)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          }}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center w-full max-w-[781px] gap-[35px]">
            
            {/* Hero Section */}
            <div className="flex flex-col items-center w-full max-w-[618px]">
              
              {/* Top Warning Icon */}
              <div className="flex justify-center items-center w-[96px] h-[96px] rounded-full bg-[#EFDBE1] mb-[20px]">
                <svg width="38" height="32" viewBox="0 0 24 24" fill="none" stroke="#BA1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>

              {/* Heading */}
              <h1 
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "55px",
                  lineHeight: "55px",
                  letterSpacing: "-1.38px",
                  textAlign: "center",
                  color: "#131600",
                  margin: "0 0 16px 0",
                }}
              >
                Permanently Delete Listing ?
              </h1>

              {/* Subheading */}
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#43474E",
                  margin: 0,
                }}
              >
                You are about to permanently remove this asset from the Green Land Capital market place. This action is irreversible
              </p>
            </div>

            {/* 2 Column Layout */}
            <div className="flex flex-row justify-between w-full gap-[35px] mb-[40px]">
              
              {/* Left Column */}
              <div className="flex flex-col w-[367px] gap-[18px]">
                
                {/* Asset Summary Card */}
                <div 
                  className="flex flex-col p-[25px] w-full rounded-[32px] box-border"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.04)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex flex-row justify-between items-start mb-[30px]">
                    <div className="flex flex-col gap-1">
                      <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#47617C" }}>
                        ASSET IDENTIFIER
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 900, fontSize: "20px", letterSpacing: "-1px", color: "#181C20" }}>
                        GLC SOS 3
                      </span>
                    </div>
                    {/* Pending Deletion Badge */}
                    <div className="flex flex-row items-center gap-[4px] px-[12px] py-[4px] rounded-full" style={{ background: "rgba(186, 26, 26, 0.05)" }}>
                      <div className="w-[8px] h-[8px] bg-[#BA1A1A] rounded-full" />
                      <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#BA1A1A" }}>
                        PENDING DELETION
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-[#E0E2E8] mb-[25px]" />

                  <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col gap-1">
                      <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#47617C" }}>
                        CURRENT VALUATION
                      </span>
                      <div className="flex flex-row items-baseline gap-1">
                        <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "30px", color: "#00609A" }}>
                          ₹5.20
                        </span>
                        <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "18px", color: "#00609A" }}>
                          Cr
                        </span>
                      </div>
                    </div>
                    {/* Building Icon */}
                    <div className="flex justify-center items-center w-[30px] h-[27px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C0C7D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                        <path d="M9 22v-4h6v4" />
                        <path d="M8 6h.01" />
                        <path d="M16 6h.01" />
                        <path d="M12 6h.01" />
                        <path d="M12 10h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 10h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 10h.01" />
                        <path d="M8 14h.01" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Highlight Box */}
                <div 
                  className="flex flex-col items-center p-[24px] gap-[16px] w-full rounded-[32px] box-border"
                  style={{
                    background: "rgba(0, 96, 154, 0.05)",
                    border: "1px solid rgba(0, 96, 154, 0.1)",
                  }}
                >
                  <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 500, fontSize: "14px", lineHeight: "20px", textAlign: "center", color: "#404750", margin: 0 }}>
                    Not ready to sell right now? You can temporarily hide this listing from buyers without losing your verification status.
                  </p>
                  <button className="flex flex-row items-center gap-[8px] bg-transparent border-none cursor-pointer group">
                    <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "14px", color: "#00609A" }} className="group-hover:underline">
                      Temporarily Unlist Instead
                    </span>
                    <svg width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="#00609A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="2" y1="2" x2="22" y2="22" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Column (Consequences) */}
              <div className="flex flex-col w-[379px]">
                <div className="flex flex-row items-center pl-[20px] mb-[24px]" style={{ borderLeft: "4px solid #00609A" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", letterSpacing: "1.6px", textTransform: "uppercase", color: "#47617C" }}>
                    WHAT HAPPENS NEXT?
                  </span>
                </div>

                <div className="flex flex-col gap-[16px]">
                  {/* Consequence 1 */}
                  <div className="flex flex-row items-start p-[20px] bg-[#FFFFFF] rounded-[32px] gap-[16px]">
                    <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#E0E2E8] shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#404750" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", color: "#181C20" }}>Data Erasure</span>
                      <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#404750", margin: 0 }}>
                        All performance analytics, accumulated buyer views, and saves will be permanently erased from our records.
                      </p>
                    </div>
                  </div>

                  {/* Consequence 2 */}
                  <div className="flex flex-row items-start p-[20px] bg-[#FFFFFF] rounded-[32px] gap-[16px]">
                    <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#E0E2E8] shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#404750" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        <line x1="2" y1="2" x2="22" y2="22" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", color: "#181C20" }}>Verification Voided</span>
                      <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#404750", margin: 0 }}>
                        The current FO, RO, and IO verification certificates will be voided. Relisting will require the full CCS process again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Deck */}
            <div className="flex flex-row justify-center items-center gap-[22px] w-full">
              {/* Delete Button */}
              <button 
                onClick={() => setIsRemovedOpen(true)}
                className="flex justify-center items-center w-[403px] h-[66px] rounded-full cursor-pointer hover:bg-red-50 transition-colors box-border"
                style={{
                  background: "transparent",
                  border: "1.8px solid #EACACF",
                }}
              >
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "16.5px",
                    lineHeight: "26px",
                    color: "#BA1A1A",
                  }}
                >
                  Yes, Delete Permannently
                </span>
              </button>

              {/* Keep Listing Button */}
              <button 
                onClick={onClose}
                className="flex justify-center items-center w-[400px] h-[66px] rounded-full cursor-pointer hover:opacity-90 transition-opacity box-border"
                style={{
                  background: "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)",
                  boxShadow: "0px 9.2px 13.8px -2.7px rgba(0, 0, 0, 0.1), 0px 3.6px 5.5px -3.6px rgba(0, 0, 0, 0.1)",
                  border: "none",
                }}
              >
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "16.5px",
                    lineHeight: "26px",
                    color: "#FFFFFF",
                  }}
                >
                  Keep Listing
                </span>
              </button>
            </div>

          </div>
        </motion.div>

        <style dangerouslySetInnerHTML={{
          __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
      </div>
    </AnimatePresence>
    
    <ListingRemovedModal isOpen={isRemovedOpen} onClose={() => setIsRemovedOpen(false)} />
    </>
  );
}
