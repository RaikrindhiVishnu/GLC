"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ListingRemovedModalProps {
  isOpen: boolean;
  onClose: () => void;
  farmlandCode: string;
}

export default function ListingRemovedModal({ isOpen, onClose, farmlandCode }: ListingRemovedModalProps) {
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
    <AnimatePresence>
      <div data-lenis-prevent className="fixed inset-0 z-[130] flex items-center justify-center bg-black/40 backdrop-blur-md">
        
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
          className="relative flex flex-col items-center w-[932px] max-w-[95%] h-auto max-h-[95vh] pt-[50px] pb-[70px] px-[22px] rounded-[48px] overflow-y-auto hide-scrollbar z-10"
          style={{
            background: "#F3F4F5",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          }}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center w-full max-w-[781px] gap-[40px]">
            
            {/* Hero Section */}
            <div className="flex flex-col items-center w-full max-w-[618px]">
              
              {/* Top Trash Icon */}
              <div className="flex justify-center items-center w-[96px] h-[96px] rounded-full bg-[#FFFFFF] mb-[20px] shadow-sm">
                <svg width="40" height="29" viewBox="0 0 24 24" fill="none" stroke="#BA1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
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
                Listing Permanently<br/>Removed
              </h1>

              {/* Subheading */}
              <p 
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  textAlign: "center",
                  color: "#181C20",
                  margin: 0,
                }}
              >
                {farmlandCode || "The property"} has been successfully purged from the marketplace<br/>and all associated data has been erased.
              </p>
            </div>

            {/* 2 Column Layout */}
            <div className="flex flex-row justify-center items-start w-full gap-[35px]">
              
              {/* Left Column - Deletion Receipt */}
              <div 
                className="flex flex-col p-[32px] w-[343px] rounded-[48px] box-border"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Asset ID */}
                <div className="flex flex-col gap-[4px] mb-[32px]">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 500, fontSize: "16px", lineHeight: "24px", letterSpacing: "1.6px", textTransform: "uppercase", color: "#404750" }}>
                    ASSET ID
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#00609A" }}>
                    {farmlandCode || "..."}
                  </span>
                </div>

                {/* Deletion Date */}
                <div className="flex flex-col gap-[4px] mb-[32px]">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 500, fontSize: "16px", lineHeight: "24px", letterSpacing: "1.6px", textTransform: "uppercase", color: "#404750" }}>
                    DELETION DATE
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#181C20" }}>
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                {/* Process Status */}
                <div className="flex flex-col gap-[4px] mb-[32px]">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 500, fontSize: "16px", lineHeight: "24px", letterSpacing: "1.6px", textTransform: "uppercase", color: "#404750" }}>
                    PROCESS STATUS
                  </span>
                  <div className="flex flex-row items-center gap-[8px]">
                    <div className="w-[8px] h-[8px] bg-[#BA1A1A] rounded-full" />
                    <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#181C20" }}>
                      Erased & Voided
                    </span>
                  </div>
                </div>

                {/* Confirmation ID */}
                <div className="flex flex-col gap-[4px]">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 500, fontSize: "16px", lineHeight: "24px", letterSpacing: "1.6px", textTransform: "uppercase", color: "#404750" }}>
                    CONFIRMATION ID
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#47617C" }}>
                    #DEL-8821-XP
                  </span>
                </div>
              </div>

              {/* Right Column - Final Guidance Note */}
              <div 
                className="flex flex-row p-[32px] w-[343px] rounded-[48px] bg-[#FFFFFF] gap-[16px] box-border"
              >
                {/* Info Icon */}
                <div className="flex justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00609A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-[12px]">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#181C20" }}>
                    What this means
                  </span>
                  <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#404750", margin: 0 }}>
                    The property is no longer visible to buyers. To relist this property in the future, you will need to initiate a new CCS screening process and pay the applicable verification fees.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <button
              onClick={onClose}
              className="mt-4 flex justify-center items-center w-[340px] h-[56px] rounded-full cursor-pointer hover:opacity-90 transition-opacity border-none"
              style={{
                background: "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)",
                boxShadow: "0px 9px 14px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span className="font-jakarta font-bold text-[16px] text-white">
                Return to Your Listings
              </span>
            </button>
          </div>
        </motion.div>

        <style dangerouslySetInnerHTML={{
          __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
      </div>
    </AnimatePresence>
  );
}
