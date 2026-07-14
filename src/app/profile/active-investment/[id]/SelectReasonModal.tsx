"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SelectReasonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedReason: string | null;
  onSelectReason: (reason: string) => void;
}

const REASONS = [
  "Require immediate liquidity (Personal/Financial)",
  "Reallocating portfolio to other investments",
  "Dissatisfied with asset performance",
  "Upgrading to a larger GLC fractional unit",
  "Other (Please specify in comments)"
];

export default function SelectReasonModal({ isOpen, onClose, selectedReason, onSelectReason }: SelectReasonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          key="select-reason-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white flex flex-col items-center p-8 md:p-12 w-[560px] max-w-full rounded-[24px] shadow-[0px_4px_20px_rgba(26,54,93,0.05)]"
            style={{ maxHeight: "90vh", overflowY: "auto" }}
          >
          {/* Header */}
          <div className="flex flex-col items-center mb-10 w-full">
            <div className="w-16 h-16 rounded-full bg-[#D2E4FF] flex items-center justify-center mb-6">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#0061A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "38px", color: "#002045", textAlign: "center", marginBottom: "8px" }}>
              Select Reason
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#43474E", textAlign: "center", maxWidth: "328px" }}>
              Please provide a reason for your investment liquidation request.
            </p>
          </div>

          {/* List of Options */}
          <div className="flex flex-col gap-4 w-full">
            {REASONS.map((reason, idx) => {
              const isSelected = selectedReason === reason;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onSelectReason(reason);
                    onClose();
                  }}
                  className="w-full text-left transition-all duration-200 cursor-pointer flex justify-between items-center px-8 py-[23px] rounded-full"
                  style={
                    isSelected
                      ? {
                          background: "#FFFFFF",
                          border: "2px solid #0061A5",
                          boxShadow: "0px 0px 0px 4px #D2E4FF"
                        }
                      : {
                          background: "rgba(244, 243, 247, 0.83)",
                          border: "2px solid transparent"
                        }
                  }
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: isSelected ? 500 : 400,
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: isSelected ? "#002045" : "#1A1C1E"
                    }}
                  >
                    {reason}
                  </span>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-[#0061A5] flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
