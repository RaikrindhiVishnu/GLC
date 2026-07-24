"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface UnlockPremiumReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export default function UnlockPremiumReportsModal({ isOpen, onClose, onConfirm }: UnlockPremiumReportsModalProps) {
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
            borderRadius: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px 24px",
            boxSizing: "border-box",
            position: "relative",
            maxHeight: "90vh",
            overflowY: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none"
          }}
          className="hide-scroll"
          onClick={(e) => e.stopPropagation()}
          data-lenis-prevent
        >
          {/* Close button (optional, but good for UX) */}
          <button
            onClick={onClose}
            style={{ position: "absolute", top: "32px", right: "32px", background: "transparent", border: "none", cursor: "pointer", padding: "8px" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#191C1E" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>

          {/* Hero Section */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", marginBottom: "44px" }}>
            
            {/* Background Circle with Icon */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "32px" }}>
              <Image src="/assets/unlock/Margin (3).svg" alt="Unlock Icon" width={120} height={123} />
            </div>

            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "55px", lineHeight: "55px", letterSpacing: "-1.38px", color: "#131600", textAlign: "center", margin: 0, paddingBottom: "22px" }}>
              Unlock Premium Reports
            </h1>
          </div>

          {/* Two Columns Container */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", gap: "24px", width: "100%", flexWrap: "wrap", marginBottom: "59px" }}>
            
            {/* Left Column: Credits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "387px" }}>
              
              {/* Credit Ledger Card */}
              <div style={{ background: "#191C1E", borderRadius: "15px", padding: "24px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: "108px", boxSizing: "border-box" }}>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#E0E3E5" }}>
                    Cost to Unlock
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "40px", letterSpacing: "-0.32px", color: "#FFFFFF" }}>
                    1 Credit
                  </span>
                </div>

                <div style={{ width: "1px", height: "48px", background: "rgba(114, 119, 133, 0.3)" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#E0E3E5" }}>
                    Your Balance
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "40px", letterSpacing: "-0.32px", color: "#E0E3E5" }}>
                    4 Credits
                  </span>
                </div>

              </div>

              {/* Subtext */}
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#424754", padding: "0 8px", margin: 0 }}>
                Unlock professional-grade data curated for large-scale agricultural and estate development. Our premium reports offer high-fidelity GIS mapping and expert soil analysis for informed investment decisions.
              </p>

            </div>

            {/* Right Column: Features */}
            <div style={{ background: "#FFFFFF", boxShadow: "0px 2px 13.1px rgba(0, 0, 0, 0.25)", borderRadius: "11px", padding: "24px", display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "435px", boxSizing: "border-box" }}>
              
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "#424754" }}>
                What You Get
              </span>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                
                {/* Feature 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                    {/* Compass Icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#191C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l4 18M12 2L8 20M7 15h10M12 2v10" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.14px", color: "#191C1E" }}>
                    Deep-Dive Architectural Surveys
                  </span>
                </div>

                {/* Feature 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                    {/* Globe Icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#191C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.14px", color: "#191C1E" }}>
                    Comprehensive Soil Analysis
                  </span>
                </div>

                {/* Feature 3 */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                    {/* Map Icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#191C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line>
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.14px", color: "#191C1E" }}>
                    Verified GIS Boundary Maps
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Action Deck */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", width: "100%" }}>
            
            <button
              onClick={onConfirm}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "65px",
                background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                boxShadow: "0px 9.2px 13.8px -2.76px rgba(0, 0, 0, 0.1), 0px 3.68px 5.5px -3.68px rgba(0, 0, 0, 0.1)",
                borderRadius: "9999px",
                border: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "16px",
                lineHeight: "28px",
                letterSpacing: "-0.45px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              Confirm & Unlock (1 Credit)
            </button>

            <button
              style={{
                background: "transparent",
                border: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.35px",
                textTransform: "uppercase",
                color: "#0F2F4C",
                cursor: "pointer",
                padding: "9px 32px"
              }}
            >
              Upgrade to Unlimited Subscription
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
