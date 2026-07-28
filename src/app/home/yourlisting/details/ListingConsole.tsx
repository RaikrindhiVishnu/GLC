"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PromoteListingModal from "./PromoteListingModal";
import { useSearchParams } from "next/navigation";
import { useGetUserListedFarmlandByIdQuery } from "@/services/home";

export default function ListingConsole() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const farmlandId = Number(searchParams.get("id")) || 101;

  const { data: farmlandResponse, isLoading } = useGetUserListedFarmlandByIdQuery({ farmland_id: farmlandId });
  
  const farmlandData = farmlandResponse?.data;
  const isUnlisted = farmlandData ? farmlandData.is_active === 0 : false;

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[80px] mb-[120px]">
        
        {/* Header section (Performance Analytics - Market Pulse) */}
        <div className="flex flex-col gap-4 mb-8">
          <span 
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "32px",
              color: "#45474C",
            }}
          >
            Performance Analytics
          </span>
          <h2 
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "48px",
              lineHeight: "48px",
              letterSpacing: "-1.2px",
              color: "#0F2F4C",
              margin: 0,
            }}
          >
            Market Pulse
          </h2>
        </div>

        {/* Main Content Split Layout */}
        <div className="flex flex-col lg:flex-row gap-[32px] w-full items-start">
          
          {/* Left Column: Metrics Cards */}
          <div className="flex flex-col sm:flex-row gap-[32px] w-full lg:w-[auto] flex-1">
            
            {/* Views Card */}
            <div 
              className="flex flex-col relative w-full sm:w-[368.8px] h-[310px] box-border p-[32px]"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 40px rgba(9, 20, 38, 0.04)",
                borderRadius: "32px",
              }}
            >
              <span 
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#0F2F4C",
                }}
              >
                Views
              </span>
              <div className="absolute left-[32px] bottom-[32px]">
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "88px",
                    lineHeight: "111px",
                    color: "#2780C4",
                  }}
                >
                  {isLoading ? "..." : farmlandData?.total_views || 0}
                </span>
              </div>
            </div>

            {/* Total Saves Card */}
            <div 
              className="flex flex-col relative w-full sm:w-[368.8px] h-[310px] box-border p-[32px]"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 40px rgba(9, 20, 38, 0.04)",
                borderRadius: "32px",
              }}
            >
              <span 
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#0F2F4C",
                }}
              >
                Total Saves
              </span>
              <div className="absolute left-[32px] bottom-[32px]">
                <span 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "88px",
                    lineHeight: "111px",
                    color: "#2780C4",
                  }}
                >
                  {isLoading ? "..." : farmlandData?.total_saves || 0}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Console */}
          <div 
            className="flex flex-col p-[39px] gap-[29px] w-full lg:w-[507px] shrink-0 box-border"
            style={{
              background: "#FFFFFF",
              border: "1px solid #EDEEEF",
              boxShadow: "0px 24px 73px rgba(9, 20, 38, 0.06)",
              borderRadius: "39px",
            }}
          >
            {/* Card Container for Edit/Unlist */}
            <div 
              className="flex flex-col w-full overflow-hidden"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 5px 29px rgba(0, 0, 0, 0.02)",
                borderRadius: "39px",
              }}
            >
              {/* Edit Photos Row */}
              <div 
                onClick={() => setIsModalOpen(true)}
                className="flex flex-row justify-between items-center p-[34px] w-full cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col gap-[2px]">
                  <span 
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "22px",
                      lineHeight: "34px",
                      color: "#0F2F4C",
                    }}
                  >
                    Edit Photos
                  </span>
                  <span 
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "14.7px",
                      lineHeight: "20px",
                      color: "rgba(15, 47, 76, 0.6)",
                    }}
                  >
                    Here you can only edit photos.
                  </span>
                </div>
                {/* Arrow Icon */}
                <div className="w-[9px] h-[14px]">
                   <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.5 1.5L7.5 7.5L1.5 13.5" stroke="#C7C8AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
              </div>

              {/* Divider */}
              <div className="w-[calc(100%-68px)] h-[1px] bg-[#EDEEEF] mx-[34px]" />

              {/* Temporarily Unlist Row */}
              <div className="flex flex-row justify-between items-center p-[34px] w-full">
                <div className="flex flex-col gap-[2px]">
                  <span 
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "22px",
                      lineHeight: "34px",
                      color: "#0F2F4C",
                    }}
                  >
                    Temporarily Unlist
                  </span>
                  <span 
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "14.7px",
                      lineHeight: "20px",
                      color: "rgba(15, 47, 76, 0.6)",
                    }}
                  >
                    Hide listing from search results.
                  </span>
                </div>
                <div 
                  className="relative w-[68.5px] h-[39px] rounded-full flex items-center cursor-pointer transition-colors"
                  style={{ background: isUnlisted ? "#2780C4" : "#E1E3E4" }}
                >
                  <div 
                    className="absolute w-[29px] h-[29px] rounded-full bg-white transition-transform"
                    style={{
                      left: isUnlisted ? "34px" : "5px",
                      boxShadow: "0px 4.9px 7.3px -1.2px rgba(0, 0, 0, 0.1), 0px 2.4px 4.9px -2.4px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Promote Listing Button */}
            <button 
              className="flex justify-center items-center w-full h-[68.5px] rounded-full border-none cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                background: "radial-gradient(50% 130.51% at 50% 50%, #2780C4 0%, #164573 100%)",
                boxShadow: "0px 12.2px 18.3px -3.6px rgba(0, 0, 0, 0.1), 0px 4.9px 7.3px -4.9px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span 
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "14.7px",
                  lineHeight: "24px",
                  letterSpacing: "-0.4px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                Promote Listing
              </span>
            </button>

            {/* Info Background */}
            <div 
              className="flex flex-row items-center p-[20px] gap-[15px] w-full rounded-full"
              style={{ background: "#F3F4F5" }}
            >
              <div className="w-[14px] h-[14px] rounded-full border-[1.5px] border-[#75777D] flex justify-center items-center opacity-70">
                <span className="text-[10px] text-[#75777D] font-bold">i</span>
              </div>
              <span 
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "12.2px",
                  lineHeight: "18px",
                  letterSpacing: "-0.3px",
                  color: "rgba(70, 72, 53, 0.4)",
                }}
              >
                Boost visibility to attract matched buyers faster on the GLC platform.
              </span>
            </div>

          </div>

        </div>
      </div>
      
      {/* Modal */}
      <PromoteListingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} farmlandId={farmlandId} />
    </>
  );
}
