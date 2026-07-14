"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const farmlands = [
  { id: "GLC-SOS-01", name: "GLC SOS 01", location: "Vizag, A.P.", price: "₹5.2Cr", image: "/assets/verification-of-farmland/pipeline.svg", status: "Active Verification", views: "TRENDING LISTING", desc: "High-yield mango grove with established irrigation systems and road access.", type: "image-top" },
  { id: "GLC-SOS-02", name: "GLC SOS 02", location: "Tenali, A.P.", price: "₹6.2Cr", image: "/assets/verification-of-farmland/pipeline.svg", status: "Active Verification", views: "MOST VIEWED LISTING", desc: "Elevated terrain suitable for premium grape varieties and boutique agro-tourism.", type: "text-top" },
  { id: "GLC-SOS-03", name: "GLC SOS 03", location: "Tenali, A.P.", price: "₹6.2Cr", image: "/assets/verification-of-farmland/pipeline.svg", status: "Active Verification", views: "MOST VIEWED LISTING", desc: "Unrivaled water rights and pure organic certification for premium exports.", type: "image-top" },
  { id: "GLC-SOS-04", name: "GLC SOS 04", location: "Vizag, A.P.", price: "₹4.8Cr", image: "/assets/verification-of-farmland/pipeline.svg", status: "Active Verification", views: "TRENDING LISTING", desc: "High-yield mango grove with established irrigation systems and road access.", type: "image-top" },
  { id: "GLC-SOS-05", name: "GLC SOS 05", location: "Tenali, A.P.", price: "₹6.2Cr", image: "/assets/verification-of-farmland/pipeline.svg", status: "Active Verification", views: "AFFORDABLE", desc: "Elevated terrain suitable for premium grape varieties and boutique agro-tourism.", type: "text-top" },
  { id: "GLC-SOS-06", name: "GLC SOS 06", location: "Tenali, A.P.", price: "₹7.4Cr", image: "/assets/verification-of-farmland/pipeline.svg", status: "Active Verification", views: "HOT DEALS", desc: "Unrivaled water rights and pure organic certification for premium exports.", type: "image-top" },
];

export default function VerificationFarmlandsGrid() {
  const router = useRouter();

  const renderCard = (land: any, index: number) => {
    const isImageTop = land.type === "image-top";
    
    return (
      <motion.div
        key={land.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col bg-white border border-[#F3F4F5] rounded-[30px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.05)] cursor-pointer w-full mb-8 h-[587px]"
        onClick={() => router.push(`/home/verification/tracker?farmland=${land.id}`)}
      >
        {isImageTop && (
          <div className="relative w-full h-[320px] bg-gray-100 flex-shrink-0">
            <Image src={land.image} alt={land.name} fill style={{ objectFit: "cover" }} />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30 shadow-sm">
              <span className="font-jakarta font-bold text-[10px] tracking-[0.2px] text-[#0F2F4C]">{land.status}</span>
            </div>
          </div>
        )}
        
        <div className="p-8 flex flex-col flex-1">
          <div className="flex flex-col gap-3">
            <span className="font-jakarta font-bold text-[10px] bg-[#E7E8E9] text-[#45474C] w-fit px-3 py-1 rounded-full uppercase">
              {land.views}
            </span>
            <h3 className="m-0 font-jakarta font-bold text-[24px] text-[#131600]">{land.name}</h3>
          </div>
          
          <p className="m-0 mt-4 font-jakarta font-normal text-[16px] leading-[24px] text-[#45474C]">
            {land.desc}
          </p>
          
          <div className="flex flex-row justify-between items-end mt-auto pt-6">
            <div className="flex flex-col">
              <span className="font-jakarta font-bold text-[18px] text-[#111827]">{land.price}</span>
              <span className="font-jakarta font-normal text-[12px] text-[#6B7280] flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                {land.location}
              </span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/home/verification/tracker?farmland=${land.id}`);
              }}
              className="text-[#00629E] font-jakarta font-bold text-[14px]"
            >
              View Details
            </button>
          </div>
        </div>

        {!isImageTop && (
          <div className="relative w-full h-[373px] bg-gray-100 flex-shrink-0 mt-auto">
            <Image src={land.image} alt={land.name} fill style={{ objectFit: "cover" }} />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30 shadow-sm">
              <span className="font-jakarta font-bold text-[10px] tracking-[0.2px] text-[#0F2F4C]">{land.status}</span>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="w-full max-w-[1248px] mx-auto px-4 lg:px-8 py-16 lg:py-24 box-border flex flex-col items-center bg-[#F8F9FA]">
      {/* Header */}
      <div className="flex flex-row justify-between items-center w-full mb-12">
        <h2 className="m-0 font-jakarta font-bold text-[24px] lg:text-[24px] text-[#131600]">
          Verification of Farmlands
        </h2>
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => router.push("/home/verification/onboard")}
            className="bg-gradient-to-r from-[#2780C4] to-[#164573] text-white font-jakarta font-bold text-[14px] px-6 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform"
          >
            UPLOAD
          </button>
          <div className="flex gap-1.5 items-center ml-2">
            <div className="w-2 h-2 rounded-full bg-[#0F2F4C]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E1E3E4]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E1E3E4]"></div>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Column 1 */}
        <div className="flex flex-col flex-1 gap-8">
          {renderCard(farmlands[0], 0)}
          {renderCard(farmlands[3], 3)}
        </div>
        {/* Column 2 */}
        <div className="flex flex-col flex-1 gap-8">
          {renderCard(farmlands[1], 1)}
          {renderCard(farmlands[4], 4)}
        </div>
        {/* Column 3 */}
        <div className="flex flex-col flex-1 gap-8">
          {renderCard(farmlands[2], 2)}
          {renderCard(farmlands[5], 5)}
        </div>
      </div>

      {/* Farmland Trending Section */}
      <div className="mt-24 w-full flex flex-col items-center justify-center mb-16 relative">
        <h3 className="font-jakarta font-bold text-[16px] text-[#131600] flex items-center gap-2 mb-12">
          Farmland trending in <span className="text-[#2780C4] flex items-center gap-1 cursor-pointer">All Categories <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
        </h3>
        
        {/* Carousel Graphic */}
        <div className="relative w-full max-w-[900px] h-[360px] flex justify-center items-center">
          {/* Back Left 2 */}
          <div className="absolute left-[0%] w-[180px] h-[240px] rounded-[16px] overflow-hidden opacity-80 scale-75 z-10 shadow-lg transform -translate-x-12 origin-right">
            <Image src="/assets/home/TrendingFarmlands/glcsos03.svg" alt="thumb" fill style={{ objectFit: "cover" }} />
          </div>
          {/* Back Left 1 */}
          <div className="absolute left-[12%] w-[200px] h-[280px] rounded-[16px] overflow-hidden opacity-90 scale-90 z-20 shadow-xl transform -translate-x-6 origin-right">
            <Image src="/assets/home/TrendingFarmlands/glcsos02.svg" alt="thumb" fill style={{ objectFit: "cover" }} />
          </div>
          {/* Back Right 2 */}
          <div className="absolute right-[0%] w-[180px] h-[240px] rounded-[16px] overflow-hidden opacity-80 scale-75 z-10 shadow-lg transform translate-x-12 origin-left">
            <Image src="/assets/verification-of-farmland/hero.svg" alt="thumb" fill style={{ objectFit: "cover" }} />
          </div>
          {/* Back Right 1 */}
          <div className="absolute right-[12%] w-[200px] h-[280px] rounded-[16px] overflow-hidden opacity-90 scale-90 z-20 shadow-xl transform translate-x-6 origin-left">
            <Image src="/assets/verification-of-farmland/pipeline.svg" alt="thumb" fill style={{ objectFit: "cover" }} />
          </div>
          {/* Center */}
          <div className="relative w-[340px] h-[360px] rounded-[24px] overflow-hidden z-30 shadow-2xl bg-white border border-gray-100 group">
            <Image src="/assets/home/TrendingFarmlands/glcsos01.svg" alt="Main" fill style={{ objectFit: "cover" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <h4 className="m-0 font-jakarta font-bold text-[20px] text-white">GLC SOS 01</h4>
                  <span className="font-jakarta text-[12px] text-white/80 flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Vizag, A.P.
                  </span>
                </div>
                <span className="font-jakarta font-bold text-[18px] text-white">₹5.2 Cr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex gap-4 mt-12">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

    </section>
  );
}
