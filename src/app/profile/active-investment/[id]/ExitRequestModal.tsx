"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SelectReasonModal from "./SelectReasonModal";
import ExitRequestSubmittedModal from "./ExitRequestSubmittedModal";

interface ExitRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitRequestModal({ isOpen, onClose }: ExitRequestModalProps) {
  const [isReasonModalOpen, setIsReasonModalOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [comments, setComments] = useState("");
  const [isSubmittedModalOpen, setIsSubmittedModalOpen] = useState(false);

  const scrollYRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            key="exit-request-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-sm p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#F3F4F5] w-[1005px] max-w-full h-[921px] max-h-[95vh] rounded-[48px] shadow-[0px_40px_80px_-20px_rgba(9,20,38,0.15)] overflow-hidden flex flex-col"
            >
              <style>{`
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .hide-scrollbar::-webkit-scrollbar { display: none; }
              `}</style>
          {/* Header */}
          <div className="w-full h-[66px] bg-white flex items-center justify-between px-10 flex-shrink-0 relative z-20">
            <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer border-none bg-transparent">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", letterSpacing: "-0.6px", color: "#0F2F4C", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
              Investment Details
            </h1>
            <div className="w-10"></div> {/* spacer */}
          </div>

          {/* Scrollable Content */}
          <div data-lenis-prevent className="flex-1 overflow-y-auto min-h-0 px-6 py-8 relative hide-scrollbar">
             <div className="w-full max-w-[952px] mx-auto flex flex-col lg:flex-row gap-10">
                
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-8 relative z-10">
                   {/* Early Exit Warning */}
                   <div className="w-full bg-[rgba(255,218,214,0.3)] rounded-[24px] p-6 relative overflow-hidden">
                      <div className="absolute top-[-40px] right-[-10px] w-[128px] h-[128px] bg-[#FFDAD6] opacity-50 blur-[32px] rounded-full z-0 pointer-events-none"></div>
                      <div className="relative z-10 flex flex-col gap-4">
                         <div className="w-12 h-12 rounded-full bg-[#FFDAD6] flex items-center justify-center">
                            <svg width="22" height="19" viewBox="0 0 24 24" fill="none" stroke="#BA1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                         </div>
                         <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#93000A", letterSpacing: "-0.5px" }}>
                            Early Exit Penalty Applies
                         </h2>
                         <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", color: "rgba(147,0,10,0.8)" }}>
                            This asset was purchased on March 12, 2026 and is currently within its mandatory 24 month lock-in period. Liquidating this asset before March 12, 2028, will result in early exit penalties and the forfeiture of pending yields.
                         </p>
                      </div>
                   </div>

                   {/* Asset Overview Card */}
                   <div className="w-full bg-white border border-[rgba(196,198,207,0.2)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-8 flex flex-col relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                         <div className="w-[10px] h-[10px] bg-[#0061A5] rounded-full"></div>
                         <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#43474E", letterSpacing: "1.2px" }}>YIELDING</span>
                      </div>
                      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: "#002045", marginBottom: "4px" }}>
                         GLC SOS 01 – Medchal
                      </h3>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#43474E", marginBottom: "24px" }}>
                         Fractional Agricultural Land Unit
                      </span>
                      <div className="w-full h-[1px] bg-[rgba(196,198,207,0.3)] my-6"></div>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#43474E", letterSpacing: "0.6px", marginBottom: "4px" }}>
                         CURRENT VALUATION
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", color: "#0061A5", letterSpacing: "-0.96px" }}>
                         ₹12,75,000
                      </span>
                   </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col gap-10">
                   {/* Exit Terms & Timeline */}
                   <div>
                      <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#181C20", marginBottom: "16px" }}>
                         Exit Terms & Timeline
                      </h4>
                      <div className="w-full bg-white shadow-[0px_10px_30px_rgba(24,28,32,0.02)] rounded-[24px] p-6 flex flex-col gap-6">
                         <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-[#F1F3FA] flex flex-shrink-0 items-center justify-center mt-1">
                               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#47617C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
                            </div>
                            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", color: "#404750" }}>
                               Standard early liquidation incurs a processing fee (typically 2% - 5% of the asset value).
                            </p>
                         </div>
                         <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-[#F1F3FA] flex flex-shrink-0 items-center justify-center mt-1">
                               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#47617C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", color: "#404750" }}>
                               Your fractional unit will be placed on the GLC Secondary Marketplace.
                            </p>
                         </div>
                         <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-[#F1F3FA] flex flex-shrink-0 items-center justify-center mt-1">
                               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#47617C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", color: "#404750" }}>
                               Funds will be released to your linked bank account only after a verified buyer acquires your unit (typically 30–45 business days).
                            </p>
                         </div>
                      </div>
                   </div>

                   {/* Form Section */}
                   <div>
                      <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#181C20", marginBottom: "16px" }}>
                         Reason for Request
                      </h4>
                      <div className="flex flex-col gap-6">
                         {/* Dropdown Box */}
                         <div 
                           onClick={() => setIsReasonModalOpen(true)}
                           className="w-full bg-white shadow-[0px_4px_20px_rgba(24,28,32,0.02)] rounded-full h-[52px] px-6 flex items-center justify-between cursor-pointer"
                         >
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: selectedReason ? "#181C20" : "rgba(64,71,80,0.5)" }}>
                               {selectedReason || "Select a reason..."}
                            </span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                         </div>

                         {/* Textarea */}
                         <div className="w-full bg-white shadow-[0px_4px_20px_rgba(24,28,32,0.02)] rounded-[24px] p-6 h-[112px]">
                            <textarea 
                              value={comments}
                              onChange={(e) => setComments(e.target.value)}
                              placeholder="Add comments for your Wealth Manager..."
                              className="w-full h-full bg-transparent border-none outline-none resize-none"
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#181C20" }}
                            />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Sticky Footer */}
          <div className="w-full h-[133px] bg-white border-t border-[rgba(197,198,205,0.1)] shadow-[0px_-10px_30px_rgba(0,0,0,0.03)] flex items-center justify-center z-20 flex-shrink-0">
             <div className="flex items-center gap-[22px]">
                <button 
                  onClick={() => setIsSubmittedModalOpen(true)}
                  className="w-[403px] h-[63px] bg-[#FDF3F3] rounded-full flex justify-center items-center cursor-pointer border-none transition-transform hover:scale-[1.02]"
                >
                   <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16.5px", color: "#BA1A1A" }}>
                      Submit Exit Request
                   </span>
                </button>
                <button 
                  onClick={onClose}
                  className="w-[400px] h-[63px] rounded-full flex justify-center items-center cursor-pointer border-none transition-transform hover:scale-[1.02]"
                  style={{
                     background: "radial-gradient(100% 100% at 50% 50%, #2780C4 0%, #164573 100%)",
                     boxShadow: "0px 9px 14px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)"
                  }}
                >
                   <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16.5px", color: "#FFFFFF" }}>
                      Cancel & Keep Investment
                   </span>
                </button>
             </div>
          </div>
        </motion.div>
      </motion.div>
    )}
      </AnimatePresence>

      <SelectReasonModal 
        isOpen={isReasonModalOpen} 
        onClose={() => setIsReasonModalOpen(false)} 
        selectedReason={selectedReason}
        onSelectReason={setSelectedReason}
      />

      <ExitRequestSubmittedModal
        isOpen={isSubmittedModalOpen}
        onClose={() => { setIsSubmittedModalOpen(false); onClose(); }}
      />
    </>
  );
}
