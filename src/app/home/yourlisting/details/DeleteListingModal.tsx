"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ListingRemovedModal from "./ListingRemovedModal";
import { useDeleteFarmlandListingMutation, useChangeFarmlandListingStatusMutation } from "@/services/farmland";
import { useGetUserListedFarmlandByIdQuery } from "@/services/home";

interface DeleteListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  farmlandId: number;
}

export default function DeleteListingModal({ isOpen, onClose, farmlandId }: DeleteListingModalProps) {
  const [isRemovedOpen, setIsRemovedOpen] = useState(false);
  const [deleteFarmlandListing, { isLoading: isDeleting }] = useDeleteFarmlandListingMutation();
  const [changeFarmlandListingStatus, { isLoading: isUnlisting }] = useChangeFarmlandListingStatusMutation();

  const { data: farmlandDetails } = useGetUserListedFarmlandByIdQuery({ farmland_id: farmlandId }, { skip: !isOpen });
  const farmlandData = farmlandDetails?.data;

  // Formatting logic for price
  let priceVal = "0.00";
  let priceSuffix = "";
  if (farmlandData?.price) {
    if (farmlandData.price >= 10000000) {
      priceVal = `₹${(farmlandData.price / 10000000).toFixed(2)}`;
      priceSuffix = "Cr";
    } else if (farmlandData.price >= 100000) {
      priceVal = `₹${(farmlandData.price / 100000).toFixed(2)}`;
      priceSuffix = "L";
    } else {
      priceVal = `₹${farmlandData.price.toLocaleString("en-IN")}`;
    }
  }

  const handleDelete = async () => {
    try {
      await deleteFarmlandListing({ farmland_id: farmlandId, reason_id: 1, remarks: "Deleted by user" }).unwrap();
      setIsRemovedOpen(true);
    } catch (err) {
      console.error("Failed to delete listing", err);
    }
  };

  const handleUnlist = async () => {
    try {
      await changeFarmlandListingStatus({ farmland_id: farmlandId, for_sale: 0 }).unwrap();
      onClose(); // Just close the modal on successful unlist
    } catch (err) {
      console.error("Failed to unlist", err);
    }
  };

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
              <div className="flex justify-center items-center w-[96px] h-[96px] mb-[20px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/your-listing/Background%20(27).svg" alt="Warning" width={96} height={96} />
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
                        {farmlandData?.farmland_code || "..."}
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
                          {priceVal}
                        </span>
                        {priceSuffix && (
                          <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "18px", color: "#00609A" }}>
                            {priceSuffix}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Building Icon */}
                    <div className="flex justify-center items-center w-[30px] h-[27px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/assets/your-listing/Icon%20(28).svg" alt="Building" width={30} height={27} />
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
                  <button 
                    onClick={handleUnlist}
                    disabled={isUnlisting || isDeleting}
                    className="flex flex-row items-center gap-[8px] bg-transparent border-none cursor-pointer group disabled:opacity-50"
                  >
                    <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "14px", color: "#00609A" }} className="group-hover:underline">
                      {isUnlisting ? "Unlisting..." : "Temporarily Unlist Instead"}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/your-listing/Container%20(34).svg" alt="Unlist" width={13} height={12} />
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
                    <div className="flex justify-center items-center w-[30px] h-[30px] shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/assets/your-listing/Background%20(28).svg" alt="Data Erasure" width={30} height={30} />
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
                    <div className="flex justify-center items-center w-[30px] h-[30px] shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/assets/your-listing/Background%20(29).svg" alt="Verification Voided" width={31} height={30} />
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
                onClick={handleDelete}
                disabled={isDeleting || isUnlisting}
                className="flex justify-center items-center w-[403px] h-[66px] rounded-full cursor-pointer hover:bg-red-50 transition-colors box-border disabled:opacity-50"
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
                  {isDeleting ? "Deleting..." : "Yes, Delete Permannently"}
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
    
    <ListingRemovedModal
      isOpen={isRemovedOpen}
      onClose={() => {
        setIsRemovedOpen(false);
        onClose();
        if (typeof window !== "undefined") {
          window.location.href = "/home/yourlisting";
        }
      }}
      farmlandCode={farmlandData?.farmland_code || ""}
    />
    </>
  );
}
