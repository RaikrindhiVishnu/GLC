"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ActionRequiredModal from "./ActionRequiredModal";
import DeleteListingModal from "./DeleteListingModal";

interface PromoteListingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PromoteListingModal({ isOpen, onClose }: PromoteListingModalProps) {
  const [isActionOpen, setIsActionOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
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

  // Remove early return so AnimatePresence can handle exit animations

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
                    
                    {/* Slot 1: Image */}
                    <div className="relative w-[269px] h-[170px] rounded-[13px] overflow-hidden shadow-sm">
                      <Image src="/assets/search/image2.1.svg" alt="Asset Media 1" fill className="object-cover" />
                    </div>
                    
                    {/* Slot 2: Image */}
                    <div className="relative w-[269px] h-[170px] rounded-[13px] overflow-hidden shadow-sm">
                      <Image src="/assets/search/image2.2.svg" alt="Asset Media 2" fill className="object-cover" />
                    </div>
                    
                    {/* Slot 3: Image */}
                    <div className="relative w-[269px] h-[170px] rounded-[13px] overflow-hidden shadow-sm">
                      <Image src="/assets/search/image2.3.svg" alt="Asset Media 3" fill className="object-cover" />
                    </div>

                    {/* Slot 4: Add Photo */}
                    <label 
                      className="flex flex-col justify-center items-center w-[269px] h-[166px] rounded-[13px] cursor-pointer hover:bg-[#E2E8F0] transition-colors"
                      style={{
                        background: "#F1F5F9",
                        border: "2px dashed #C3C6CE",
                      }}
                    >
                      <input type="file" className="hidden" accept="image/*" />
                      <div className="flex flex-col items-center gap-2">
                        {/* Add Photo Icon */}
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

                    {/* Slot 5: Add Photo */}
                    <label 
                      className="flex flex-col justify-center items-center w-[269px] h-[166px] rounded-[13px] cursor-pointer hover:bg-[#E2E8F0] transition-colors"
                      style={{
                        background: "#F1F5F9",
                        border: "2px dashed #C3C6CE",
                      }}
                    >
                       <input type="file" className="hidden" accept="image/*" />
                       <div className="flex flex-col items-center gap-2">
                        {/* Add Photo Icon */}
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
                      onClick={() => setIsActionOpen(true)}
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
                    onClick={() => setIsDeleteOpen(true)}
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
