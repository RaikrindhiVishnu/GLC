"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface SiteVisitQueueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteVisitQueueModal({
  isOpen,
  onClose,
}: SiteVisitQueueModalProps) {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .svq-modal-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .svq-modal-scroll::-webkit-scrollbar-track {
          background: #f0f1f2;
          border-radius: 10px;
        }
        .svq-modal-scroll::-webkit-scrollbar-thumb {
          background-color: #99A6B5;
          border-radius: 10px;
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
        {/* Modal box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: "896px",
            height: "min(921px, 90vh)",
            background: "#FFFFFF",
            boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
            borderRadius: "48px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* ── STICKY HEADER ── */}
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
              Site Visit Queue
            </span>

            <div style={{ width: "24px" }} />
          </div>

          {/* ── SCROLLABLE BODY ── */}
          <div
            className="custom-modal-scrollbar"
            style={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
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
                    fontWeight: 700, fontSize: "10px",
                    textTransform: "uppercase", color: "#99A6B5",
                  }}>SCHEDULED DATE</span>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600, fontSize: "24px",
                    lineHeight: "32px", letterSpacing: "0.6px", color: "#002045",
                  }}>Tue, Oct 17</span>
                </div>
                <div style={{ width: "1px", height: "40px", background: "#C4C6CF", margin: "0 40px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700, fontSize: "10px",
                    textTransform: "uppercase", color: "rgba(0,32,69,0.4)",
                  }}>ARRIVAL TIME</span>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600, fontSize: "24px",
                    lineHeight: "32px", letterSpacing: "0.6px", color: "#002045",
                  }}>10:30 AM</span>
                </div>
              </div>

              {/* Cards */}
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px", width: "100%" }}>
                {/* Geo Nav Card */}
                <div style={{
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  padding: "28px", flex: "1 1 260px", minHeight: "180px",
                  background: "rgba(253,253,253,0.78)", border: "1px solid #C4C6CF",
                  borderRadius: "24px", cursor: "pointer",
                }}>
                  <div style={{
                    width: "48px", height: "48px", background: "#2780C4",
                    borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center",
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

                {/* Support Card */}
                <div style={{
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  padding: "28px", flex: "1 1 260px", minHeight: "180px",
                  background: "rgba(253,253,253,0.78)", border: "1px solid #C4C6CF",
                  borderRadius: "24px", cursor: "pointer",
                }}>
                  <div style={{
                    width: "48px", height: "48px", background: "#2780C4",
                    borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#002045" }}>Contact Support</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "rgba(0,32,69,0.6)" }}>24/7 Agent Availability</span>
                    </div>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(0,32,69,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "16px", width: "100%", paddingBottom: "8px",
              }}>
                <button
                  onClick={onClose}
                  style={{
                    width: "100%", maxWidth: "400px", height: "62px",
                    background: "#2880C4", borderRadius: "9999px", border: "none",
                    cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700, fontSize: "16px", color: "#FFFFFF",
                    boxShadow: "0px 8px 16px -4px rgba(40,128,196,0.35)",
                  }}
                >
                  Return to Home
                </button>

                <button
                  onClick={onClose}
                  style={{
                    background: "transparent", border: "none", cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700, fontSize: "14px", letterSpacing: "0.35px",
                    color: "#404750", padding: "8px 32px",
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
