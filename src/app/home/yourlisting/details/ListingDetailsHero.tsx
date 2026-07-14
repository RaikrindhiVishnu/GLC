"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ListingDetailsHero() {
  return (
    <div className="relative w-full h-screen flex justify-center overflow-hidden">
      {/* Background Image with Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%), url('/assets/your-listing/Container (12).svg') center/cover no-repeat",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        
        {/* Left Side: Title & Badge */}
        <div className="absolute left-8 lg:left-0 bottom-[120px] flex flex-col gap-4">
          
          {/* Badge: Live on marketplace */}
          <div 
            className="flex items-center gap-3 px-[24px] py-[6px] w-fit"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(6px)",
              borderRadius: "9999px",
            }}
          >
            <div className="w-[8px] h-[8px] rounded-full bg-[#BCD225]" />
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#091426",
              }}
            >
              Live on marketplace
            </span>
          </div>

          {/* Heading */}
          <h1 
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "60px",
              lineHeight: "60px",
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            GLC SOS 01
          </h1>
        </div>

        {/* Right Side: Wealth Snapshot Card */}
        <div 
          className="absolute right-8 lg:right-0 bottom-[70px] w-full max-w-[500px]"
        >
          <div 
            className="relative p-[41px] flex flex-col gap-[32px] box-border"
            style={{
              background: "rgba(255, 255, 255, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(12px)",
              borderRadius: "48px",
              boxShadow: "0px 20px 25px -5px rgba(9, 20, 38, 0.05), 0px 8px 10px -6px rgba(9, 20, 38, 0.05)",
            }}
          >
            {/* Row 1 */}
            <div className="flex justify-between items-start">
              {/* Holding */}
              <div className="flex flex-col gap-[4px]">
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "15px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#45474C",
                  }}
                >
                  YOUR HOLDING
                </span>
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "32px",
                    color: "#131600",
                  }}
                >
                  10.0 Acres
                </span>
              </div>
              
              {/* Estimated Value */}
              <div className="flex flex-col gap-[4px] w-[193px]">
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "15px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#45474C",
                  }}
                >
                  CURRENT ESTIMATED VALUE
                </span>
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "24px",
                    lineHeight: "32px",
                    color: "#091426",
                  }}
                >
                  ₹5.2 Cr
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex justify-between items-start">
              {/* Total Acres */}
              <div className="flex flex-col gap-[4px]">
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "15px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#45474C",
                  }}
                >
                  TOTAL ACRES
                </span>
              </div>
              
              {/* Total Valuation */}
              <div className="flex flex-col gap-[4px] w-[193px]">
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "15px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#45474C",
                  }}
                >
                  TOTAL VALUATION
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
