import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShareSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export default function ShareSelectionModal({ isOpen, onClose, onConfirm }: ShareSelectionModalProps) {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        .hide-modal-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-modal-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <AnimatePresence>
        {isOpen && (
          <div key="share-selection-overlay" className="fixed inset-0 z-[99999] flex items-center justify-center p-4 lg:p-12" style={{
            background: "rgba(9, 20, 38, 0.2)",
            backdropFilter: "blur(16.5px)",
            WebkitBackdropFilter: "blur(16.5px)",
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="flex flex-col bg-[#F3F4F5] hide-modal-scroll relative overflow-hidden"
              data-lenis-prevent
              style={{
                width: "896px",
                maxWidth: "100%",
                height: "921px",
                maxHeight: "95vh",
                borderRadius: "48px",
                boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
                overflow: "hidden",
              }}
            >
              {/* Header Section */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "32px 40px", height: "66px", width: "100%", background: "#FFFFFF", flexShrink: 0, zIndex: 10 }}>
                {/* Close Button */}
                <button onClick={onClose} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", borderRadius: "9999px", border: "none", background: "transparent", cursor: "pointer" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                {/* Title */}
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.6px", color: "#0F2F4C" }}>
                  Share Selection
                </span>

                {/* Clear All */}
                <button style={{ background: "transparent", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "#45474C", cursor: "pointer" }}>
                  CLEAR ALL
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div style={{ flexGrow: 1, minHeight: 0, overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px", paddingBottom: "160px" }} className="hide-modal-scroll" data-lenis-prevent>
                
                {/* Image Placeholder */}
                <div style={{ width: "100%", maxWidth: "817px", aspectRatio: "817 / 444", borderRadius: "34px", overflow: "hidden", marginBottom: "40px", background: "#FFFFFF" }}>
                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600&auto=format&fit=crop" alt="Fields" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                {/* Summary Row */}
                <div style={{ width: "100%", maxWidth: "770px", borderTop: "1px solid #EDEEEF", paddingTop: "33px", display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
                  
                  {/* Selected Area */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#45474C" }}>SELECTED AREA</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "31px", color: "#002045" }}>0.5 Acres</span>
                  </div>

                  {/* Share Equivalent */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#45474C" }}>SHARE EQUIVALENT</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "31px", color: "#002045" }}>1 Share</span>
                  </div>

                  {/* Estimated Investment */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#45474C" }}>ESTIMATED INVESTMENT</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "40px", color: "#002045" }}>₹25,00,000</span>
                  </div>

                </div>

              </div>

              {/* Action Console (Sticky Footer) */}
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", padding: "32px", position: "absolute", bottom: "0px", left: "0px", right: "0px", background: "#FFFFFF", borderTop: "1px solid rgba(197, 198, 205, 0.1)", boxShadow: "0px -10px 30px rgba(0, 0, 0, 0.03)", zIndex: 10 }}>
                <button
                  style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "20px 0px", width: "100%", maxWidth: "400px", height: "57px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", cursor: "pointer", boxShadow: "0px 12px 24px -8px rgba(9, 20, 38, 0.4)", transition: "opacity 0.2s ease" }}
                  className="hover:opacity-90"
                  onClick={() => {
                    if (onConfirm) onConfirm();
                  }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "28px", color: "#FFFFFF" }}>CONFIRM PLOT & SUBMIT</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
