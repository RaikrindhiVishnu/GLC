import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface PlotConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlotConfirmationModal({ isOpen, onClose }: PlotConfirmationModalProps) {
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const router = useRouter();

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
          <div key="plot-confirmation-overlay" className="fixed inset-0 z-[99999] flex items-center justify-center p-4 lg:p-12" style={{
            background: "rgba(9, 20, 38, 0.2)",
            backdropFilter: "blur(16.5px)",
            WebkitBackdropFilter: "blur(16.5px)",
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="flex flex-col bg-[#FFFFFF] hide-modal-scroll items-center relative"
              data-lenis-prevent
              style={{
                width: "932px",
                maxWidth: "100%",
                height: "914px",
                maxHeight: "95vh",
                borderRadius: "48px",
                padding: "50px 22px",
                gap: "44px",
                overflowY: "auto",
                boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
              }}
            >
              
              {/* Header Icon */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "14px" }}>
                <div style={{ position: "relative", width: "96px", height: "96px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "5px solid #AED6EF", borderRadius: "9999px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 10px 15px -3px rgba(39, 128, 196, 0.2), 0px 4px 6px -4px rgba(39, 128, 196, 0.2)" }}>
                  <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                    <path d="M4 14L14 24L32 4" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "502px" }}>
                <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "55px", lineHeight: "55px", letterSpacing: "-1.38px", color: "#131600", textAlign: "center", paddingBottom: "22px" }}>
                  Confirmation
                </h1>
                <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#43474E", textAlign: "center", maxWidth: "374px" }}>
                  Your plot reservation has been received. Our team will contact you soon to finalize the details.
                </p>
              </div>

              {/* Summary Table */}
              <div style={{ width: "100%", maxWidth: "544px", display: "flex", flexDirection: "column", gap: "50px", position: "relative" }}>
                
                {/* Horizontal Top Border */}
                <div style={{ width: "100%", borderTop: "1px solid rgba(196, 198, 207, 0.3)" }}></div>

                {/* Data Row */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", padding: "0 10px" }}>
                  {/* Target Asset */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", textTransform: "uppercase", color: "rgba(67, 71, 78, 0.7)" }}>TARGET ASSET</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#002045" }}>GLC SOS 01</span>
                  </div>
                  
                  {/* Selected Area */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", textTransform: "uppercase", color: "rgba(67, 71, 78, 0.7)" }}>SELECTED AREA</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#002045" }}>0.5 Acres</span>
                  </div>

                  {/* Share Equivalent */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", textTransform: "uppercase", color: "rgba(67, 71, 78, 0.7)" }}>SHARE EQUIVALENT</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", color: "#002045" }}>1 Share</span>
                  </div>
                </div>

                {/* Horizontal Bottom Border */}
                <div style={{ width: "100%", borderTop: "1px solid rgba(196, 198, 207, 0.3)" }}></div>

                {/* Estimated Investment Block */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "23px 24px", background: "rgba(230, 230, 230, 0.29)", borderRadius: "12px", width: "100%", boxSizing: "border-box" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(0, 32, 69, 0.8)" }}>Estimated Investment</span>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "32px", color: "#002045" }}>₹</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "32px", color: "#002045", letterSpacing: "-1.6px" }}>25,00,000</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "44px", width: "100%" }}>
                <button
                  onClick={() => {
                    router.push("/home");
                  }}
                  onMouseEnter={() => setHoveredBtn(true)}
                  onMouseLeave={() => setHoveredBtn(false)}
                  style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "20px 0px", width: "100%", maxWidth: "400px", height: "57px", background: hoveredBtn ? "radial-gradient(50% 50% at 50% 50%, #308ED6 0%, #1A548B 100%)" : "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", cursor: "pointer", boxShadow: "0px 12px 24px -8px rgba(9, 20, 38, 0.4)", transition: "all 0.2s ease" }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF" }}>Return to Home</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
