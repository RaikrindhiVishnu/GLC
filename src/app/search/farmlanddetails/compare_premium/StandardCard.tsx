"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface StandardCardProps {
  title: string;
  description: string;
  acreage: string;
  imageUrl: string;
  overlayText: string;
}

export default function StandardCard({ title, description, acreage, imageUrl, overlayText }: StandardCardProps) {
  const router = useRouter();
  return (
    <div className="relative flex-1 min-w-[320px] max-w-[399.33px] h-[433px] bg-white rounded-[48px] flex flex-col shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
      
      {/* Top Image Section */}
      <div 
        className="relative w-full h-[192px] flex-shrink-0"
        style={{
          background: "url('" + imageUrl + "') center/cover",
        }}
      >
        {/* Top Right Overlay Chip */}
        <div 
          className="absolute right-[16.44px] top-[16px] px-[12px] py-[4px] rounded-full"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(6px)",
            zIndex: 10,
          }}
        >
          <span 
            className="text-[#091426] font-black text-[10px] leading-[15px] uppercase"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {overlayText}
          </span>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="flex flex-col p-[24px] gap-[8px] h-[241px]">
        
        <div className="flex flex-col">
          <h3 
            className="font-bold text-[20px] leading-[28px] text-[#0F2F4C]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {title}
          </h3>
        </div>

        <div className="flex flex-col h-[76px] pb-[16px]">
          <p 
            className="text-[14px] leading-[20px] text-[#45474C]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* Horizontal Border Info Section */}
        <div className="flex flex-row justify-between items-center pt-[16px] border-t border-[#EDEEEF]">
          <div className="flex flex-col">
            <span 
              className="font-bold text-[10px] leading-[15px] uppercase text-[#75777D]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              ACREAGE
            </span>
            <span 
              className="font-bold text-[18px] leading-[28px] text-[#0F2F4C]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {acreage}
            </span>
          </div>

          <button 
            onClick={() => router.push("/home/compareassets")}
            className="w-[146px] h-[56px] rounded-[32px] flex items-center justify-center text-white font-bold text-[16px] leading-[24px] transition-transform hover:scale-105"
            style={{ 
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}
          >
            COMPARE
          </button>
        </div>

      </div>
    </div>
  );
}
