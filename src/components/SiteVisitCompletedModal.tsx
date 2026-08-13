"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLenis } from 'lenis/react';

interface SiteVisitCompletedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteVisitCompletedModal({
  isOpen,
  onClose,
}: SiteVisitCompletedModalProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;

    if (lenis) lenis.stop();
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');

    return () => {
      if (lenis) lenis.start();
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, lenis]);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Modal box — fixed height, no overflow on itself */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: "896px",
            height: "auto",
            maxHeight: "90vh",
            background: "#FFFFFF",
            boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
            borderRadius: "48px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", /* clips children, does NOT scroll itself */
          }}
          data-lenis-prevent
        >
          {/* ── STICKY HEADER (never scrolls) ── */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "32px 40px 24px",
              background: "#FFFFFF",
              borderBottom: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            <button
              onClick={onClose}
              style={{
                width: "24px",
                height: "24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "24px",
              letterSpacing: "-0.6px",
              color: "#0F2F4C",
            }}>
              Site Visit Completed
            </span>

            <div style={{ width: "24px" }} />
          </div>

          {/* ── SCROLLABLE BODY ── */}
          <div
            className="hide-scroll"
            style={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              overflowX: "hidden",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
            data-lenis-prevent
          >
            {/* Content */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "40px 64px",
              gap: "40px",
            }}>

              {/* Property heading */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "#006099",
                  letterSpacing: "0.8px",
                }}>
                  PROPERTY DESTINATION
                </span>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(48px, 7vw, 72px)",
                  lineHeight: "1",
                  letterSpacing: "-1.8px",
                  color: "#002045",
                }}>
                  GLC SOS 01
                </span>
              </div>

              {/* Dates row */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0", paddingTop: "4px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    textTransform: "uppercase",
                    color: "#99A6B5",
                  }}>SCHEDULED DATE</span>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "32px",
                    letterSpacing: "0.6px",
                    color: "#002045",
                  }}>Tue, Oct 17</span>
                </div>
                <div style={{ width: "1px", height: "40px", background: "#C4C6CF", margin: "0 40px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    textTransform: "uppercase",
                    color: "rgba(0,32,69,0.4)",
                  }}>ARRIVAL TIME</span>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "32px",
                    letterSpacing: "0.6px",
                    color: "#002045",
                  }}>10:30 AM</span>
                </div>
              </div>

              {/* Cards */}
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px", width: "100%" }}>
                {/* Geo Nav Card */}
                <div 
                  onClick={() => window.open("https://maps.google.com/?q=17.3850,78.4867", "_blank")}
                  className="hover:opacity-90 transition-opacity"
                  style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "28px",
                  flex: "1 1 260px",
                  minHeight: "180px",
                  background: "rgba(253,253,253,0.78)",
                  border: "1px solid #C4C6CF",
                  borderRadius: "24px",
                  cursor: "pointer",
                }}>
                  <div style={{
                    width: "48px", height: "48px",
                    background: "#2780C4",
                    borderRadius: "9999px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#002045" }}>Get Geo-Navigation</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "rgba(0,32,69,0.6)" }}>Coordinates activate 24h prior</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                width: "100%",
                paddingBottom: "8px",
              }}>
                <button
                  onClick={onClose}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "62px",
                    background: "#2880C4",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#FFFFFF",
                    boxShadow: "0px 8px 16px -4px rgba(40,128,196,0.35)",
                  }}
                >
                  Return to Home
                </button>

                <button
                  onClick={onClose}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "0.35px",
                    color: "#404750",
                    padding: "8px 32px",
                  }}
                >
                  Reschedule Visit
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
