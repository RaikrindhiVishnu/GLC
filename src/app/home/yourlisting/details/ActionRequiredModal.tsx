"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface ActionRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ActionRequiredModal({ isOpen, onClose }: ActionRequiredModalProps) {
  const router = useRouter();

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
      <div data-lenis-prevent className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 backdrop-blur-sm">
        
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
          className="relative flex flex-col items-center p-[48px] gap-[16px] w-[560px] h-auto bg-[#FFFFFF] rounded-[32px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] z-10"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top Icon */}
          <div className="flex justify-center items-center w-full h-[64px]">
            <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-[#DEE8FF]">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#00162A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col items-center pt-[16px] w-full">
            <h2 
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#00162A",
                margin: 0,
              }}
            >
              Action Required
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center w-full mt-2">
            <p 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "29px",
                textAlign: "center",
                color: "#43474D",
                margin: 0,
              }}
            >
              This listing cannot be deleted at this time because the land is currently booked for an active site inspection. Please contact our institutional support team if you need to modify this listing status.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-start pt-[16px] gap-[16px] w-full mt-2">
            {/* Contact Support Button */}
            <button 
              onClick={() => router.push('/home/supportcenter')}
              className="flex justify-center items-center w-full h-[60px] rounded-full cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                background: "#2780C4",
                boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            >
              <span 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Contact Support
              </span>
            </button>

            {/* Cancel Button */}
            <button 
              onClick={onClose}
              className="flex justify-center items-center w-full h-[56px] bg-transparent border-none cursor-pointer hover:bg-gray-50 rounded-full transition-colors"
            >
              <span 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#43474D",
                }}
              >
                Cancel
              </span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
