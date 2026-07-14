"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface ExitRequestSubmittedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitRequestSubmittedModal({
  isOpen,
  onClose,
}: ExitRequestSubmittedModalProps) {
  const scrollYRef = useRef(0);
  const router = useRouter();

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

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(220, 222, 226, 0.85)",
        backdropFilter: "blur(6px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "1005px",
          height: "min(921px, 92vh)",
          background: "#F3F4F5",
          boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
          borderRadius: "48px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
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
            padding: "17px 40px",
            height: "66px",
            background: "#FFFFFF",
            zIndex: 10,
          }}
        >
          {/* Back button */}
          <button
            onClick={onClose}
            style={{
              width: "40px", height: "40px",
              borderRadius: "9999px",
              background: "transparent", border: "none",
              cursor: "pointer", padding: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800, fontSize: "24px",
            lineHeight: "32px", letterSpacing: "-0.6px",
            color: "#0F2F4C",
          }}>
            Investment Details
          </span>

          {/* Spacer placeholder (right side empty per design) */}
          <div style={{ width: "85px" }} />
        </div>

        {/* ── SCROLLABLE BODY ── */}
        <div
          className="custom-modal-scrollbar"
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            overflowX: "hidden",
            paddingBottom: "133px", /* leave space for sticky footer */
          }}
        >
          {/* Hero Status Section */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "48px 64px",
          }}>
            {/* Icon + heading + description */}
            <div style={{
              display: "flex", flexDirection: "row",
              alignItems: "center", gap: "40px",
              width: "100%",
            }}>
              {/* Hourglass icon bubble */}
              <div style={{ position: "relative", width: "96px", height: "96px", flexShrink: 0 }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "#F3F4F5", filter: "blur(20px)",
                  borderRadius: "9999px",
                }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.5)",
                  borderRadius: "9999px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 1,
                }}>
                  {/* Hourglass SVG */}
                  <svg width="32" height="40" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0H20V6L14 12L20 18V24H4V18L10 12L4 6V0Z" fill="none" stroke="#D97706" strokeWidth="1.5"/>
                    <path d="M6 2H18V5.5L12 11L6 5.5V2Z" fill="#D97706" opacity="0.3"/>
                    <path d="M6 22H18V18.5L12 13L6 18.5V22Z" fill="#D97706" opacity="0.15"/>
                    <rect x="3" y="0" width="18" height="2" rx="1" fill="#D97706"/>
                    <rect x="3" y="22" width="18" height="2" rx="1" fill="#D97706"/>
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800, fontSize: "30px",
                  lineHeight: "48px", letterSpacing: "-1.2px",
                  color: "#001B3C",
                }}>
                  Exit Request Submitted
                </span>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400, fontSize: "18px",
                  lineHeight: "29px", color: "#43474E",
                  maxWidth: "657px",
                }}>
                  Your request to liquidate your fractional unit has been securely logged. In accordance with Green Land Capital's early exit protocols, this action requires formal authorization.
                </span>
              </div>
            </div>
          </div>

          {/* Two-column content */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "40px",
            padding: "0 64px 48px",
            alignItems: "flex-start",
          }}>
            {/* LEFT — Request Summary Card */}
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "flex-start", gap: "24px",
              padding: "48px 32px 32px",
              flex: "0 0 359px",
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0px 20px 60px -15px rgba(24,28,32,0.05)",
              backdropFilter: "blur(20px)",
              borderRadius: "48px",
            }}>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400, fontSize: "14px",
                lineHeight: "20px", letterSpacing: "0.7px",
                textTransform: "uppercase", color: "#47617C",
              }}>REQUEST SUMMARY</span>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
                {/* Target Asset */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#404750" }}>Target Asset</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#181C20" }}>GLC SOS 01 – Medchal</span>
                </div>

                {/* Request Type */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#404750" }}>Request Type</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#855000" }}>Early Liquidation (Subject to Penalty)</span>
                </div>

                {/* Current Status */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#404750" }}>Current Status</span>
                  <div style={{
                    display: "flex", flexDirection: "row",
                    alignItems: "center", gap: "8px",
                    padding: "4px 12px",
                    background: "rgba(255,220,187,0.3)",
                    borderRadius: "9999px",
                    width: "fit-content",
                  }}>
                    <div style={{ width: "8px", height: "8px", background: "#855000", borderRadius: "9999px" }} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#855000" }}>Exit Pending Review</span>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "#E0E2E8", width: "100%", margin: "0" }} />

                {/* Tracking ID */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#404750" }}>Tracking ID</span>
                  <div style={{
                    padding: "8px 12px",
                    background: "#ECEEF4",
                    borderRadius: "32px",
                  }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", color: "#181C20" }}>#EXT-88942-GLC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — What happens next? */}
            <div style={{
              display: "flex", flexDirection: "column", gap: "32px",
              flex: "1 1 320px",
              paddingTop: "4px",
            }}>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700, fontSize: "24px",
                lineHeight: "32px", color: "#181C20",
              }}>What happens next?</span>

              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "40px", paddingLeft: "24px" }}>
                {/* Connecting line */}
                <div style={{
                  position: "absolute",
                  left: "11px", top: "24px", bottom: "24px",
                  width: "2px",
                  background: "#E0E2E8",
                  borderRadius: "9999px",
                }} />

                {/* Step 1 — Support Consultation (active) */}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "16px" }}>
                  {/* Step dot */}
                  <div style={{
                    position: "absolute", left: "-24px", top: "4px",
                    width: "24px", height: "24px",
                    background: "#F7F9FF",
                    border: "2px solid #00609A",
                    borderRadius: "9999px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{ width: "8px", height: "8px", background: "#00609A", borderRadius: "9999px" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                    {/* Phone icon */}
                    <svg width="17" height="15" viewBox="0 0 24 20" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 8.84 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="#00609A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "28px", color: "#181C20" }}>Support Consultation</span>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#404750" }}>
                    Our dedicated Support, will contact you within 24 hours to formally review the exit terms and penalty implications.
                  </span>
                </div>

                {/* Step 2 — Secondary Market Listing */}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "16px" }}>
                  <div style={{
                    position: "absolute", left: "-24px", top: "4px",
                    width: "24px", height: "24px",
                    background: "#F7F9FF",
                    border: "2px solid #C0C7D2",
                    borderRadius: "9999px",
                  }} />
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                    <svg width="17" height="15" viewBox="0 0 24 20" fill="none">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#404750" strokeWidth="1.5" fill="none"/>
                      <path d="M2 7h20" stroke="#404750" strokeWidth="1.5"/>
                      <path d="M6 11h4M6 14h2" stroke="#404750" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "28px", color: "#181C20" }}>Secondary Market Listing</span>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#404750" }}>
                    Upon your final verbal confirmation, your unit will be officially listed on the GLC Secondary Marketplace.
                  </span>
                </div>

                {/* Step 3 — Payment Settlement */}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "16px" }}>
                  <div style={{
                    position: "absolute", left: "-24px", top: "4px",
                    width: "24px", height: "24px",
                    background: "#F7F9FF",
                    border: "2px solid #C0C7D2",
                    borderRadius: "9999px",
                  }} />
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <line x1="12" y1="1" x2="12" y2="23" stroke="#404750" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#404750" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "28px", color: "#181C20" }}>Payment Settlement</span>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#404750" }}>
                    Once a verified buyer is secured (typically 30–45 days), funds will be released to your registered bank account minus the standard processing fee.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STICKY FOOTER ── */}
        <div style={{
          position: "absolute",
          left: 0, right: 0, bottom: 0,
          height: "133px",
          background: "#FFFFFF",
          borderTop: "1px solid rgba(197,198,205,0.1)",
          boxShadow: "0px -10px 30px rgba(0,0,0,0.03)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}>
          <button
            onClick={() => { onClose(); router.push("/home"); }}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "62.84px",
              background: "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9209px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16.58px",
              color: "#FFFFFF",
              boxShadow: "0px 9.21px 13.82px -2.76px rgba(0,0,0,0.1), 0px 3.68px 5.53px -3.68px rgba(0,0,0,0.1)",
            }}
          >
            Return To Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
