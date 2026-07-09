"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface VerifiedDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VerifiedDocsModal({ isOpen, onClose }: VerifiedDocsModalProps) {
  // Prevent scrolling when modal is open without causing page jumps
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
          background: "rgba(9, 20, 38, 0.2)",
          backdropFilter: "blur(16.5px)",
          zIndex: 99999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px" // Maintain a light gap on smaller screens
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
            margin: "auto",
            width: "1280px",
            maxWidth: "100%",
            height: "937px",
            maxHeight: "96vh", // Increased max height for light gap
            background: "#F3F4F5",
            borderRadius: "48px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden"
          }}
          onClick={(e) => e.stopPropagation()}
          data-lenis-prevent
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "24px",
              right: "48px",
              background: "#FFFFFF",
              border: "none",
              borderRadius: "50%",
              width: "32px", // Reduced size
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              zIndex: 10
            }}
          >
            <X size={16} color="#0F2F4C" />
          </button>

          {/* Scrolling Content Container */}
          <div
            className="hide-scroll"
            data-lenis-prevent
            style={{
              width: "100%",
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              display: "flex",
              gap: "32px",
              justifyContent: "space-between",
              marginTop: "64px",
              marginBottom: "32px",
              paddingLeft: "48px",
              paddingRight: "48px",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}>
            {/* Aside - Left Pane */}
            <div style={{
              width: "272px",
              height: "662px",
              background: "#FFFFFF",
              boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.04)",
              borderRadius: "32px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}>
              {/* Image section */}
              <div style={{
                width: "100%",
                height: "256px",
                backgroundImage: "url(/assets/placeholder_land.jpg)", // Placeholder
                backgroundColor: "#2780C4", // Fallback color
                backgroundSize: "cover",
                backgroundPosition: "center"
              }} />

              {/* Text container */}
              <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "22px", height: "21px", background: "#BCD225", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", color: "#45474C", textTransform: "uppercase" }}>
                      Asset ID: SOS 01
                    </span>
                  </div>

                  <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "30px", lineHeight: "36px", letterSpacing: "-0.75px", color: "#0F2F4C", margin: 0 }}>
                    GLC SOS 01
                  </h1>

                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: "#45474C", margin: 0 }}>
                    320 Acres • <span style={{ color: "#2780C4" }}>₹5.2 Cr Total Valuation</span>
                  </p>
                </div>

                {/* Status Box */}
                <div style={{ background: "#EEF6FF", border: "1px solid rgba(39, 128, 196, 0.1)", borderRadius: "16px", padding: "24px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "16px", height: "21px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "23px", color: "#2780C4" }}>
                    Documents Unlocked. A Sales Executive has been assigned to your profile regarding this property.
                  </span>
                </div>
              </div>
            </div>

            {/* Section - Center Pane */}
            <div style={{
              width: "576px", // Adjusted to properly center, based on 1280 - 48*2 (padding) - 272*2 (sidebars) - 32*2 (gaps) = 576 roughly, layout in Figma is flexible or specific. The CSS says width 496px inside a 861px tall container with 40px padding, making total width 576px.
              height: "861px",
              background: "#FFFFFF",
              boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.04)",
              borderRadius: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "40px",
              boxSizing: "border-box",
              gap: "14px"
            }}>
              {/* Header */}
              <div style={{ width: "496px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "30px", lineHeight: "36px", letterSpacing: "-0.75px", color: "#0F2F4C", margin: 0, width: "221px" }}>
                    Verified Documentation
                  </h2>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#45474C", margin: 0 }}>
                    Official regulatory and institutional clearances
                  </p>
                </div>

                <div style={{ background: "#A5CCF2", borderRadius: "9999px", padding: "4px 16px", display: "flex", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "0.6px", color: "#0F2F4C", textTransform: "uppercase" }}>
                    Institutional Grade
                  </span>
                </div>
              </div>

              {/* List Background Container */}
              <div style={{ background: "#F3F4F5", borderRadius: "24px", width: "496px", padding: "8px", display: "flex", flexDirection: "column", gap: "8px", boxSizing: "border-box" }}>

                {[
                  { label: "Legal Documents", btnText: "View PDF" },
                  { label: "Agriculture Report", btnText: "View PDF" },
                  { label: "Land & Boundaries", btnText: "View PDF" },
                  { label: "Local Intelligence", btnText: "View PDF" }, // Typo matched from screenshot "Local Inlligence" fixed to Intelligence
                  { label: "Valuation", btnText: "View PDF" }
                ].map((doc, idx) => (
                  <div key={idx} style={{ width: "480px", height: "96px", background: "#FFFFFF", borderRadius: "16px", display: "flex", alignItems: "center", padding: "0 24px", boxSizing: "border-box", position: "relative" }}>
                    <div style={{ width: "38px", height: "38px", background: "#EEF6FF", borderRadius: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginLeft: "16px" }}>
                      {doc.label}
                    </span>

                    <button style={{ position: "absolute", right: "24px", width: "139px", height: "42px", background: "transparent", border: "1px solid rgba(39, 128, 196, 0.2)", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#2780C4" }}>
                        {doc.btnText}
                      </span>
                    </button>
                  </div>
                ))}

              </div>

              {/* CTA */}
              <Link href="/book-site-visit" style={{ textDecoration: 'none' }}>
                <button style={{ width: "400px", height: "57px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px", boxShadow: "0px 12px 24px -8px rgba(9, 20, 38, 0.4)", cursor: "pointer" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF", textTransform: "uppercase" }}>
                    Book Site Visit
                  </span>
                </button>
              </Link>

              {/* Footer */}
              <div style={{ width: "496px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", paddingTop: "12px", borderTop: "1px solid rgba(197, 198, 205, 0.2)" }}>
                <svg width="10" height="12" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "1.2px", color: "#45474C", textTransform: "uppercase" }}>
                  Bank-Grade Encryption & Verified Verification
                </span>
              </div>
            </div>

            {/* Aside - Right Pane */}
            <div style={{
              width: "272px",
              height: "184px",
              background: "#0F2F4C",
              borderRadius: "32px",
              padding: "32px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "32px"
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "28px", color: "#FFFFFF", margin: 0 }}>
                  Need legal help?
                </h4>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#A5CCF2", margin: 0 }}>
                  Our in-house advocates can help with local documentation.
                </p>
              </div>

              <button style={{ background: "transparent", border: "none", padding: 0, display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", marginTop: "auto" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", color: "#A5CCF2", textTransform: "uppercase" }}>
                  Chat with Support
                </span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A5CCF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
