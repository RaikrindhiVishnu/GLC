"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ActionRequiredModal from "./ActionRequiredModal";
import DeleteListingModal from "./DeleteListingModal";
import { useGetUserListedFarmlandImagesQuery, useUpdateFarmlandImagesMutation } from "@/services/home";
import { s3Service } from "@/services/s3";

interface PromoteListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  farmlandId: number;
}

export default function PromoteListingModal({ isOpen, onClose, farmlandId }: PromoteListingModalProps) {
  const [isActionOpen, setIsActionOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { data: imagesResponse, refetch } = useGetUserListedFarmlandImagesQuery({ farmland_id: farmlandId }, { skip: !isOpen });
  const [updateImages] = useUpdateFarmlandImagesMutation();

  const [deleteList, setDeleteList] = useState<number[]>([]);
  const [addList, setAddList] = useState<{ id: string, url: string, localUrl: string, file: File }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Toggle this to test the "booked" scenario for deleting a listing
  const isBooked = false;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      // Reset state on open
      setDeleteList([]);
      setAddList([]);
      refetch();
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen, refetch]);

  const existingImages = imagesResponse?.data || [];
  const activeExistingImages = existingImages.filter(img => !deleteList.includes(img.farmland_image_id));
  
  const totalActiveSlots = activeExistingImages.length + addList.length;
  const emptySlotsCount = Math.max(0, 5 - totalActiveSlots);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const localUrl = URL.createObjectURL(file);
      const simulatedUrl = `/images/farms/new_${Date.now()}.jpg`;
      
      setAddList(prev => [...prev, { id: Date.now().toString(), url: simulatedUrl, localUrl, file }]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveExisting = (id: number) => {
    setDeleteList(prev => [...prev, id]);
  };
  
  const handleRemoveNew = (id: string) => {
    setAddList(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmit = async () => {
    if (deleteList.length === 0 && addList.length === 0) {
      onClose();
      return;
    }
    const storedUserId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
    const numericUserId = storedUserId ? parseInt(storedUserId, 10) : 45;

    setIsSubmitting(true);
    try {
      const uploadedUrls = await Promise.all(
        addList.map(async (item) => {
          try {
            const response = await s3Service.uploadFile(item.file);
            return response.url || response.key || item.url;
          } catch (e) {
            console.error("Upload failed for file", item.file.name, e);
            throw e;
          }
        })
      );

      await updateImages({
        farmland_id: farmlandId,
        user_id: numericUserId,
        add_list: uploadedUrls,
        delete_list: deleteList
      }).unwrap();
      onClose();
    } catch (err) {
      console.error("Failed to update images", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div data-lenis-prevent key="promote-modal" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-[16px]">
            
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
              className={`relative flex flex-col justify-center items-center pt-[32px] pb-[50px] px-[22px] w-[932px] max-w-[95%] h-auto max-h-[95vh] bg-[#FFFFFF] rounded-[48px] shadow-2xl hide-scrollbar z-10 ${isActionOpen || isDeleteOpen ? 'overflow-hidden' : 'overflow-y-auto'}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              
              <div className="flex flex-col items-start p-[24px] w-full max-w-[887px]">
                
                {/* Property Photographs Section */}
                <div className="flex flex-col items-start gap-[16px] w-full mb-[43px]">
                  <div className="flex flex-col items-start gap-[4px] w-full">
                    <h3 
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: "30px",
                        lineHeight: "36px",
                        letterSpacing: "-0.75px",
                        color: "#0F2F4C",
                        margin: 0,
                      }}
                    >
                      Asset Media
                    </h3>
                  </div>

                  {/* 5 Slot Grid */}
                  <div className="flex flex-wrap gap-[16px] w-full mt-4">
                    
                    {/* Existing active images */}
                    {activeExistingImages.map((img) => {
                      let displayUrl = img.image_url || "/assets/search/image2.1.svg";
                      try {
                        if (displayUrl.includes("youtube.com") || displayUrl.includes("youtu.be")) {
                          let videoId = "";
                          if (displayUrl.includes("v=")) {
                            videoId = displayUrl.split("v=")[1].split("&")[0];
                          } else if (displayUrl.includes("youtu.be/")) {
                            videoId = displayUrl.split("youtu.be/")[1].split("?")[0];
                          }
                          if (videoId) {
                            displayUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                          }
                        }
                      } catch (e) {}

                      return (
                        <div key={img.farmland_image_id} className="relative w-[269px] h-[170px] rounded-[13px] overflow-hidden shadow-sm group">
                          <Image src={displayUrl} alt="Asset Media" fill className="object-cover" />
                        <div 
                          className="absolute inset-0 bg-black/50 hidden group-hover:flex justify-center items-center cursor-pointer transition-all"
                          onClick={() => handleRemoveExisting(img.farmland_image_id)}
                        >
                          <span className="text-white font-bold text-sm">Remove</span>
                        </div>
                      </div>
                      );
                    })}
                    
                    {/* Newly added images */}
                    {addList.map((item) => (
                      <div key={item.id} className="relative w-[269px] h-[170px] rounded-[13px] overflow-hidden shadow-sm group">
                        <Image src={item.localUrl} alt="New Asset Media" fill className="object-cover" />
                        <div 
                          className="absolute inset-0 bg-black/50 hidden group-hover:flex justify-center items-center cursor-pointer transition-all"
                          onClick={() => handleRemoveNew(item.id)}
                        >
                          <span className="text-white font-bold text-sm">Remove</span>
                        </div>
                      </div>
                    ))}

                    {/* Add Photo empty slots */}
                    {Array.from({ length: emptySlotsCount }).map((_, index) => (
                      <label 
                        key={`empty-${index}`}
                        className="flex flex-col justify-center items-center w-[269px] h-[166px] rounded-[13px] cursor-pointer hover:bg-[#E2E8F0] transition-colors"
                        style={{
                          background: "#F1F5F9",
                          border: "2px dashed #C3C6CE",
                        }}
                      >
                        <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} ref={index === 0 ? fileInputRef : null} />
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-[18px] h-[18px] flex justify-center items-center">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#73777E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                               <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                               <circle cx="8.5" cy="8.5" r="1.5" />
                               <polyline points="21 15 16 10 5 21" />
                               <line x1="12" y1="9" x2="12" y2="15" />
                               <line x1="9" y1="12" x2="15" y2="12" />
                             </svg>
                          </div>
                          <span 
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 500,
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "#43474D",
                            }}
                          >
                            Add Photo
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Action Deck */}
                <div className="flex flex-col items-center w-full gap-[32px]">
                  
                  <div className="flex flex-row justify-center items-center gap-[22px] w-full">
                    {/* CANCLE Button */}
                    <button 
                      onClick={onClose}
                      className="flex justify-center items-center w-[403px] h-[66px] rounded-full cursor-pointer hover:bg-gray-50 transition-colors"
                      style={{
                        border: "1.8px solid #2780C4",
                        background: "transparent",
                      }}
                    >
                      <span 
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "16.5px",
                          lineHeight: "26px",
                          color: "#2780C4",
                        }}
                      >
                        CANCLE
                      </span>
                    </button>

                    {/* SUBMIT REVIEW Button */}
                    <button 
                      onClick={handleSubmit}
                      className="flex justify-center items-center w-[400px] h-[66px] rounded-full cursor-pointer hover:opacity-90 transition-opacity"
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
                        SUBMIT REVIEW
                      </span>
                    </button>
                  </div>

                  {/* DELETE LISTING Button */}
                  <button 
                    onClick={() => {
                      if (isBooked) {
                        setIsActionOpen(true);
                      } else {
                        setIsDeleteOpen(true);
                      }
                    }}
                    className="flex flex-row items-center justify-center gap-[8px] h-[45px] rounded-full px-[32px] py-[9px] cursor-pointer hover:bg-red-50 transition-colors mt-2"
                    style={{
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    {/* Delete Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BA1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                    <span 
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.35px",
                        color: "#BA1A1A",
                      }}
                    >
                      DELETE LISTING
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
        )}
      </AnimatePresence>
      
      <ActionRequiredModal isOpen={isActionOpen} onClose={() => setIsActionOpen(false)} />
      <DeleteListingModal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} />
    </>
  );
}
