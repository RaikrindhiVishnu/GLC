"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useGetUserListedFarmlandByIdQuery } from "@/services/home";
import { s3Service } from "@/services/s3";
import DeleteListingModal from "./DeleteListingModal";

export default function ListingDetailsHero() {
  const searchParams = useSearchParams();
  const rawId = searchParams.get("id");
  const numericId = rawId ? parseInt(rawId.replace(/\D/g, "")) : 0;

  const { data: responseData } = useGetUserListedFarmlandByIdQuery(
    { farmland_id: numericId },
    { skip: numericId === 0, refetchOnMountOrArgChange: true }
  );

  const farmlandData = responseData?.data;

  const formatPrice = (price?: string | number) => {
    if (!price) return "Price on Request";
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    if (isNaN(numPrice)) return price;
    if (numPrice >= 10000000) return `₹${(numPrice / 10000000).toFixed(1)} Cr`;
    if (numPrice >= 100000) return `₹${(numPrice / 100000).toFixed(1)} L`;
    return `₹${numPrice}`;
  };

  const [resolvedImageUrl, setResolvedImageUrl] = React.useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      const rawImage = farmlandData?.farmland_image;
      if (!rawImage || rawImage === "null" || rawImage === "") {
        if (isMounted) setResolvedImageUrl(null);
        return;
      }
      if (rawImage.startsWith("http") || rawImage.startsWith("data:") || rawImage.startsWith("/")) {
        if (isMounted) setResolvedImageUrl(rawImage);
        return;
      }
      try {
        const res = await s3Service.generateUrl({ key: rawImage, filename: rawImage, folderPath: '' });
        if (isMounted && res.url) {
          setResolvedImageUrl(res.url);
        }
      } catch (e) {
        console.warn("Could not generate presigned URL for Hero:", rawImage);
      }
    };
    if (farmlandData) {
      fetchImage();
    }
    return () => { isMounted = false; };
  }, [farmlandData?.farmland_image]);

  const displayUrl = resolvedImageUrl || '/assets/your-listing/Container (12).svg';
  return (
    <div className="relative w-full h-screen flex justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={displayUrl}
        alt={farmlandData?.farmland_code || "Listing Details"}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        onError={(e) => { e.currentTarget.src = "/assets/your-listing/Container (12).svg"; }}
      />
      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pointer-events-none">

        {/* Top Right: Delete Button */}
        <div className="absolute top-[40px] right-8 lg:right-4 pointer-events-auto">
          <button 
            onClick={() => setIsDeleteModalOpen(true)}
            className="p-0 border-none bg-transparent cursor-pointer hover:scale-105 transition-transform"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/your-listing/Button%20(1).svg" alt="Delete Listing" width={36} height={36} />
          </button>
        </div>

        {/* Left Side: Title & Badge */}
        <div className="absolute left-8 lg:left-4 bottom-[120px] flex flex-col gap-4 pointer-events-auto">

          {/* Badge: Live on marketplace / SOLD */}
          <div
            className="flex items-center gap-3 px-[24px] py-[6px] w-fit"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(6px)",
              borderRadius: "9999px",
            }}
          >
            <div className={`w-[8px] h-[8px] rounded-full ${farmlandData?.is_bought === 1 ? 'bg-[#FF5A5F]' : 'bg-[#BCD225]'}`} />
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
              {farmlandData?.is_bought === 1 ? 'Sold' : 'Live on marketplace'}
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
            {farmlandData?.farmland_code || "Listing Details"}
          </h1>
        </div>

        {/* Right Side: Wealth Snapshot Card */}
        <div
          className="absolute right-8 lg:right-0 bottom-[70px] w-full max-w-[500px] pointer-events-auto"
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
                  {farmlandData?.acers ? `${Number(farmlandData.acers).toFixed(1)} Acres` : "N/A"}
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
                  {formatPrice(farmlandData?.price)}
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
      
      <DeleteListingModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} farmlandId={numericId} />
    </div>
  );
}
