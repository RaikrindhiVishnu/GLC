"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface AccessGrantedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewDocuments: () => void;
}

export default function AccessGrantedModal({ isOpen, onClose, onViewDocuments }: AccessGrantedModalProps) {
  // Prevent scrolling when modal is open without causing page jumps
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(9, 20, 38, 0.4)",
          backdropFilter: "blur(16.5px)",
          zIndex: 99999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px"
        }}
        onClick={onClose}
        data-lenis-prevent
      >
        <style>{`
          .hide-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            width: "100%",
            maxWidth: "932px",
            background: "#FFFFFF",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.08)",
            borderRadius: "40px",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            maxHeight: "90vh",
            overflow: "hidden"
          }}
          onClick={(e) => e.stopPropagation()}
          data-lenis-prevent
        >
          {/* Left Section */}
          <div style={{ flex: "0 0 406px", padding: "56px", display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
            
            {/* Blue Unlock Icon */}
            <div style={{ marginBottom: "40px", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
              <Image src="/assets/unlock/Refined Icon_margin.svg" alt="Access Granted" width={98} height={96} />
            </div>

            {/* Headings */}
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "40px", lineHeight: "50px", letterSpacing: "-0.8px", color: "#1D1D1F", margin: 0 }}>
              Access<br/>Granted
            </h1>
            
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "18px", letterSpacing: "1.8px", textTransform: "uppercase", color: "#2780C4", marginTop: "16px", marginBottom: "32px", display: "block" }}>
              VERIFICATION SECURE
            </span>

            {/* Credits Pill */}
            <div style={{ display: "inline-flex", alignItems: "center", padding: "6px 12px", gap: "8px", background: "#1A5A8A", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "9999px", marginBottom: "48px", alignSelf: "flex-start" }}>
              <div style={{ width: "8px", height: "8px", background: "#34C759", borderRadius: "50%" }}></div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", lineHeight: "16px", letterSpacing: "0.55px", textTransform: "uppercase", color: "#FFFFFF" }}>
                3 CREDITS REMAINING
              </span>
            </div>

            {/* Description Text */}
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "26px", color: "#86868B", margin: "0 0 auto 0" }}>
              1 Credit has been securely deducted. You now have full, unrestricted access to the professional-grade verification data.
            </p>

            {/* Footer Shield */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", opacity: 0.3, marginTop: "40px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path>
              </svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#1D1D1F" }}>
                ENTERPRISE GRADE ENCRYPTION
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div style={{ flex: 1, borderLeft: "1px solid rgba(0, 0, 0, 0.05)", padding: "56px", background: "#FFFFFF", display: "flex", flexDirection: "column", boxSizing: "border-box", position: "relative" }}>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{ position: "absolute", top: "56px", right: "56px", width: "38px", height: "38px", background: "rgba(0, 0, 0, 0.05)", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D1D1F" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "18px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#86868B", marginBottom: "32px", display: "block" }}>
              YOUR VERIFIED DOCUMENTS
            </span>

            {/* Scrollable Gallery */}
            <div 
              className="hide-scroll"
              style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "24px", paddingRight: "8px", msOverflowStyle: "none", scrollbarWidth: "none" }} 
              data-lenis-prevent
            >
              
              {/* Featured Large Card */}
              <div style={{ background: "#F9F9F9", borderRadius: "24px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <Image src="/assets/unlock/Overlay (3).svg" alt="Legal Documents" width={55} height={55} />
                  <div>
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "17px", lineHeight: "26px", letterSpacing: "-0.17px", color: "#1D1D1F", margin: "0 0 4px 0" }}>Legal Documents</h4>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "20px", color: "#86868B" }}>PDF • 4.2 MB</span>
                  </div>
                </div>
                <button style={{ width: "38px", height: "38px", background: "rgba(0, 0, 0, 0.05)", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D1D1F" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </button>
              </div>

              {/* Grid Items */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                
                {/* Item 1 */}
                <div style={{ background: "#F9F9F9", borderRadius: "24px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ width: "40px", height: "40px", background: "#E8F1F8", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src="/assets/unlock/public.svg" alt="Agriculture report" width={20} height={19} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "21px", color: "#1D1D1F", margin: "0 0 4px 0" }}>Agriculture report</h4>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "18px", color: "#86868B" }}>PDF • 4.2 MB</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div style={{ background: "#F9F9F9", borderRadius: "24px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <Image src="/assets/unlock/Overlay (4).svg" alt="Land & Boundaries" width={40} height={40} />
                  <div>
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "21px", color: "#1D1D1F", margin: "0 0 4px 0" }}>Land & Boundaries</h4>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "18px", color: "#86868B" }}>PDF • 4.2 MB</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div style={{ background: "#F9F9F9", borderRadius: "24px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <Image src="/assets/unlock/Overlay (5).svg" alt="Valuation" width={40} height={40} />
                  <div>
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "21px", color: "#1D1D1F", margin: "0 0 4px 0" }}>Valuation</h4>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "18px", color: "#86868B" }}>PDF • 4.2 MB</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div style={{ background: "#F9F9F9", borderRadius: "24px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <Image src="/assets/unlock/Overlay (6).svg" alt="Local intelligence" width={40} height={40} />
                  <div>
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "21px", color: "#1D1D1F", margin: "0 0 4px 0" }}>Local intelligence</h4>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "18px", color: "#86868B" }}>PDF • 4.2 MB</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Button */}
            <button
              onClick={onViewDocuments}
              style={{
                width: "100%",
                height: "57px",
                background: "#2780C4",
                borderRadius: "33px",
                border: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#FFFFFF",
                cursor: "pointer",
                marginTop: "32px",
                boxShadow: "0px 10px 15px -3px rgba(39, 128, 196, 0.2), 0px 4px 6px -4px rgba(39, 128, 196, 0.2)"
              }}
            >
              VIEW DOCUMENTS NOW
            </button>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
