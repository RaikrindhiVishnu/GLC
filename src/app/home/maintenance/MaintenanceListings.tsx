"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TrendingFeaturedSection from "@/app/search/TrendingFeaturedSection";

const farmlands = [
  { id: "GLC-SOS-01", name: "GLC SOS 01", location: "Vizag, A.P.", price: "₹5.2Cr", image: "/assets/home/TrendingFarmlands/glcsos01.svg", status: "Under Maintenance", views: "TRENDING LISTING", desc: "High-yield mango grove with established irrigation systems and road access.", type: "image-top" },
  { id: "GLC-SOS-02", name: "GLC SOS 02", location: "Tenali, A.P.", price: "₹6.2Cr", image: "/assets/home/TrendingFarmlands/glcsos02.svg", status: "Under Maintenance", views: "MOST VIEWED LISTING", desc: "Elevated terrain suitable for premium grape varieties and boutique agro-tourism.", type: "text-top" },
  { id: "GLC-SOS-03", name: "GLC SOS 03", location: "Tenali, A.P.", price: "₹6.2Cr", image: "/assets/home/TrendingFarmlands/glcsos03.svg", status: "Under Maintenance", views: "MOST VIEWED LISTING", desc: "Unrivaled water rights and pure organic certification for premium exports.", type: "image-top" },
  { id: "GLC-SOS-04", name: "GLC SOS 04", location: "Vizag, A.P.", price: "₹4.8Cr", image: "/assets/verification-of-farmland/pipeline.svg", status: "Under Maintenance", views: "TRENDING LISTING", desc: "High-yield mango grove with established irrigation systems and road access.", type: "image-top" },
  { id: "GLC-SOS-05", name: "GLC SOS 05", location: "Tenali, A.P.", price: "₹6.2Cr", image: "/assets/home/YourListings/glcsos1.svg", status: "Under Maintenance", views: "AFFORDABLE", desc: "Elevated terrain suitable for premium grape varieties and boutique agro-tourism.", type: "text-top" },
  { id: "GLC-SOS-06", name: "GLC SOS 06", location: "Tenali, A.P.", price: "₹7.4Cr", image: "/assets/home/YourListings/glcsos2.svg", status: "Under Maintenance", views: "HOT DEALS", desc: "Unrivaled water rights and pure organic certification for premium exports.", type: "image-top" },
];

export default function MaintenanceListings() {
  const router = useRouter();

  const renderCard = (land: any, index: number) => {
    const isImageTop = land.type === "image-top";
    const colIndex = index % 3;
    
    let cardHeight = "587px";
    let imageHeight = "320px";
    if (colIndex === 1) {
      cardHeight = "648px";
      imageHeight = "373px";
    } else if (colIndex === 2) {
      cardHeight = "635px";
      imageHeight = "384px";
    }

    return (
      <motion.div
        key={land.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col bg-white border border-[#F3F4F5] rounded-[30px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.05)] cursor-pointer w-full"
        style={{ minHeight: cardHeight, height: "max-content" }}
        onClick={() => router.push(`/home/maintenance/asset-development?farmland=${land.id}`)}
      >
        {isImageTop && (
          <div className="relative w-full bg-gray-100 flex-shrink-0" style={{ height: imageHeight }}>
            <Image src={land.image} alt={land.name} fill style={{ objectFit: "cover" }} />
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
                router.push(`/home/maintenance/asset-development?farmland=${land.id}`);
              }}
              className="text-[#00629E] font-jakarta font-bold text-[14px]"
            >
              View Details
            </button>
          </div>
        </div>

        {!isImageTop && (
          <div className="relative w-full bg-gray-100 flex-shrink-0 mt-auto" style={{ height: imageHeight }}>
            <Image src={land.image} alt={land.name} fill style={{ objectFit: "cover" }} />
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="w-full max-w-[1248px] mx-auto px-4 lg:px-8 py-16 lg:py-24 box-border flex flex-col items-center bg-[#F8F9FA]">
      <div className="flex flex-row justify-between items-center w-full mb-12">
        <h2 className="m-0 font-jakarta font-bold text-[24px] lg:text-[24px] text-[#131600]">
          Maintenance Farmlands
        </h2>
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => router.push("/home/maintenance/onboard")}
            className="bg-gradient-to-r from-[#2780C4] to-[#164573] text-white font-jakarta font-bold text-[14px] px-6 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform uppercase"
          >
            Upload Farmland details
          </button>
          <div className="flex gap-1.5 items-center ml-2">
            <div className="w-2 h-2 rounded-full bg-[#0F2F4C]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E1E3E4]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E1E3E4]"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
        {farmlands.map((land, index) => renderCard(land, index))}
      </div>

      {/* Farmland Trending Section */}
      <div className="mt-24 w-full flex flex-col items-center justify-center mb-16 relative">
        <TrendingFeaturedSection />
      </div>
    </section>
  );
}
