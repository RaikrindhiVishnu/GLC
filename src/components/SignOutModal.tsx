"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SignOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function SignOutModal({ isOpen, onClose, onConfirm }: SignOutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center isolate">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative flex flex-col items-center bg-white rounded-[28px] p-8 gap-6 w-[384px] max-w-[90vw] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
          >
            {/* Inner Overlay for soft glow (based on user CSS) */}
            <div className="absolute inset-0 rounded-[28px] bg-white/0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] pointer-events-none" />

            {/* Text Container */}
            <div className="flex flex-col items-center gap-[7px] w-full">
              <h3 className="m-0 font-jakarta font-extrabold text-[20px] leading-[30px] text-center text-[#1A1A1A]">
                Sign Out
              </h3>
              <p className="m-0 font-jakarta font-medium text-[15px] leading-[22px] text-center text-black/50">
                Are you sure you want to exit?
              </p>
            </div>

            {/* Button Container */}
            <div className="flex flex-col items-start gap-3 w-full max-w-[320px] relative z-10">
              {/* Sign Out Button */}
              <button
                onClick={onConfirm}
                className="w-full h-[50px] bg-[radial-gradient(50%_122.19%_at_50%_50%,#2780C4_0%,#164573_100%)] rounded-[32px] border-none shadow-[0px_20px_25px_-5px_rgba(0,98,158,0.2),0px_8px_10px_-6px_rgba(0,98,158,0.2)] flex justify-center items-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="font-jakarta font-semibold text-[18px] leading-[28px] text-white">
                  Sign out
                </span>
              </button>

              {/* Cancel Button */}
              <button
                onClick={onClose}
                className="w-full h-[50px] bg-black/5 rounded-[28px] border-none flex justify-center items-center cursor-pointer hover:bg-black/10 transition-colors"
              >
                <span className="font-jakarta font-bold text-[15px] leading-[22px] text-black/60">
                  Cancel
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
