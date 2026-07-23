"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WalletHistoryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"all" | "purchased" | "used">("all");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />

          {/* Main Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: "relative",
              width: "1005px",
              height: "780px",
              background: "#F3F4F5",
              boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
              borderRadius: "48px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              maxWidth: "95vw",
              maxHeight: "95vh",
            }}
          >
            {/* Header Section */}
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "32px 40px",
              height: "66px",
              background: "#FFFFFF",
              flexShrink: 0,
              zIndex: 10,
            }}>
              <button
                onClick={onClose}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "9999px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div style={{ width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </div>
              </button>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "158px", height: "32px" }}>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "-0.6px",
                  color: "#0F2F4C",
                  whiteSpace: "nowrap"
                }}>
                  Wallet History
                </span>
              </div>

              <div style={{ width: "85.52px", height: "20px" }}></div>
            </div>

            {/* Main - Modal Content Grid */}
            <div style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              width: "100%",
              height: "calc(100% - 66px)",
            }}>
              {/* Section - Left Column: Account Details */}
              <div style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "38.65px",
                width: "367.21px",
                height: "100%",
                background: "rgba(249, 250, 251, 0.5)",
                borderRight: "0.966px solid #F3F4F6",
                flexShrink: 0,
              }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingBottom: "38.65px", width: "100%", zIndex: 1 }}>
                  {/* Section - Header Summary Card */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "32px",
                    gap: "32px",
                    width: "287px",
                    height: "260px",
                    background: "linear-gradient(147.04deg, #121415 0.69%, #1C1F21 98.33%)",
                    boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "22px",
                    boxSizing: "border-box",
                  }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#5F5E5E" }}>Active Plan</span>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#FFFFFF" }}>Silver Tier</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", textAlign: "right", color: "#5F5E5E" }}>Expiry</span>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", textAlign: "right", color: "#FFFFFF" }}>Renews on Nov 1, 2026</span>
                      </div>
                    </div>
                    
                    <div style={{ width: "100%", height: "1px", background: "rgba(255, 255, 255, 0.1)" }} />
                    
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px", width: "100%" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF" }}>Current Balance</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", lineHeight: "48px", letterSpacing: "-1.2px", color: "#FFFFFF" }}>4 Unlocks</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "38.65px", width: "100%", zIndex: 0 }}>
                  <button style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "19.33px",
                    width: "100%",
                    height: "64.59px",
                    background: "#FFFFFF",
                    border: "0.966px solid #F3F4F6",
                    boxShadow: "0px 0.966px 1.93px rgba(0, 0, 0, 0.05)",
                    borderRadius: "15.46px",
                    cursor: "pointer",
                  }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "15.46px", lineHeight: "23px", color: "#015699" }}>Upgrade to Pro</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015699" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "23.19px", width: "100%" }}>
                    <span style={{ opacity: 0.7, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "15.46px", lineHeight: "25px", color: "#414750" }}>
                      Manage your asset unlock credits. Credits are deducted per premium dossier view.
                    </span>
                    <button style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "11.6px",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30.92px", height: "30.92px", background: "#F3F4F6", borderRadius: "9662.5px" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </div>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "13.53px", lineHeight: "16px", letterSpacing: "0.67px", color: "#1A1A1A", textAlign: "center" }}>Learn about unlocking</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Section - Right Column: Activity List */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "38.65px",
                width: "637.79px",
                height: "100%",
                background: "#FFFFFF",
                flexGrow: 1,
                boxSizing: "border-box",
              }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingBottom: "38.65px", width: "100%" }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "3.87px",
                    gap: "3.87px",
                    width: "389px",
                    height: "44.06px",
                    background: "rgba(0, 0, 0, 0.04)",
                    borderRadius: "965.38px",
                  }}>
                    <button
                      onClick={() => setActiveTab("all")}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "9.66px 30.92px",
                        width: "137.85px",
                        height: "36.33px",
                        background: activeTab === "all" ? "#2780C4" : "transparent",
                        boxShadow: activeTab === "all" ? "0px 2.89904px 7.73077px rgba(0, 0, 0, 0.12), 0px 2.89904px 0.966346px rgba(0, 0, 0, 0.04)" : "none",
                        borderRadius: "9662.5px",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "13.53px",
                        lineHeight: "16px",
                        letterSpacing: "0.67px",
                        color: activeTab === "all" ? "#FFFFFF" : "rgba(65, 71, 80, 0.6)",
                      }}
                    >
                      All Activity
                    </button>
                    <button
                      onClick={() => setActiveTab("purchased")}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "9.66px 30.92px",
                        width: "137.85px",
                        height: "36.33px",
                        background: activeTab === "purchased" ? "#2780C4" : "transparent",
                        boxShadow: activeTab === "purchased" ? "0px 2.89904px 7.73077px rgba(0, 0, 0, 0.12), 0px 2.89904px 0.966346px rgba(0, 0, 0, 0.04)" : "none",
                        borderRadius: "9662.5px",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "13.53px",
                        lineHeight: "16px",
                        letterSpacing: "0.67px",
                        color: activeTab === "purchased" ? "#FFFFFF" : "rgba(65, 71, 80, 0.6)",
                      }}
                    >
                      Purchased
                    </button>
                    <button
                      onClick={() => setActiveTab("used")}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "9.66px 30.92px",
                        width: "97.85px",
                        height: "36.33px",
                        background: activeTab === "used" ? "#2780C4" : "transparent",
                        boxShadow: activeTab === "used" ? "0px 2.89904px 7.73077px rgba(0, 0, 0, 0.12), 0px 2.89904px 0.966346px rgba(0, 0, 0, 0.04)" : "none",
                        borderRadius: "9662.5px",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "13.53px",
                        lineHeight: "16px",
                        letterSpacing: "0.67px",
                        color: activeTab === "used" ? "#FFFFFF" : "rgba(65, 71, 80, 0.6)",
                      }}
                    >
                      Used
                    </button>
                  </div>
                </div>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "7.73px",
                  width: "100%",
                  height: "561.99px",
                  overflowY: "auto",
                  paddingRight: "15.46px",
                }}>
                  {/* Transaction Item 1 */}
                  <div style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "23.19px",
                    gap: "23.19px",
                    width: "100%",
                    height: "102.43px",
                    borderRadius: "15.46px",
                    flexShrink: 0,
                  }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "54.12px", height: "54.12px", background: "#F3F4F6", borderRadius: "15.46px" }}>
                      <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <div style={{ flexGrow: 1, position: "relative", height: "51.2px" }}>
                      <span style={{ position: "absolute", top: "-1px", left: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17.39px", lineHeight: "30px", letterSpacing: "-0.43px", color: "#1A1A1A" }}>
                        Legal Dossier Unlock
                      </span>
                      <span style={{ position: "absolute", top: "29.57px", left: 0, opacity: 0.6, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "13.53px", lineHeight: "22px", color: "#414750" }}>
                        Heritage Valley Farmlands • Today, 10:30 AM
                      </span>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17.39px", lineHeight: "27px", textAlign: "right", color: "#D62828" }}>
                      -1
                    </span>
                  </div>

                  {/* Transaction Item 2 */}
                  <div style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "23.19px",
                    gap: "23.19px",
                    width: "100%",
                    height: "102.43px",
                    borderRadius: "15.46px",
                    flexShrink: 0,
                  }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "54.12px", height: "54.12px", background: "rgba(163, 197, 0, 0.1)", borderRadius: "43px" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A3C500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <div style={{ flexGrow: 1, position: "relative", height: "51.2px" }}>
                      <span style={{ position: "absolute", top: "-1px", left: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17.39px", lineHeight: "30px", letterSpacing: "-0.43px", color: "#1A1A1A" }}>
                        Silver Tier Renewal
                      </span>
                      <span style={{ position: "absolute", top: "29.57px", left: 0, opacity: 0.6, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "13.53px", lineHeight: "22px", color: "#414750" }}>
                        Monthly Plan Allocation • Oct 1, 2026
                      </span>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17.39px", lineHeight: "27px", textAlign: "right", color: "#A3C500" }}>
                      +4
                    </span>
                  </div>

                  {/* Transaction Item 3 */}
                  <div style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "23.19px",
                    gap: "23.19px",
                    width: "100%",
                    height: "102.43px",
                    borderRadius: "15.46px",
                    flexShrink: 0,
                  }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "54.12px", height: "54.12px", background: "#F3F4F6", borderRadius: "43px" }}>
                      <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <div style={{ flexGrow: 1, position: "relative", height: "51.2px" }}>
                      <span style={{ position: "absolute", top: "-1px", left: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17.39px", lineHeight: "30px", letterSpacing: "-0.43px", color: "#1A1A1A" }}>
                        Legal Dossier Unlock
                      </span>
                      <span style={{ position: "absolute", top: "29.57px", left: 0, opacity: 0.6, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "13.53px", lineHeight: "22px", color: "#414750" }}>
                        Project Genesis - Zaheerabad • Sep 28
                      </span>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17.39px", lineHeight: "27px", textAlign: "right", color: "#D62828" }}>
                      -1
                    </span>
                  </div>

                  {/* Transaction Item 4 */}
                  <div style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "23.19px",
                    gap: "23.19px",
                    width: "100%",
                    height: "102.43px",
                    borderRadius: "15.46px",
                    flexShrink: 0,
                  }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "54.12px", height: "54.12px", background: "rgba(1, 86, 153, 0.1)", borderRadius: "43px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#015699" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div style={{ flexGrow: 1, position: "relative", height: "51.2px" }}>
                      <span style={{ position: "absolute", top: "-1px", left: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17.39px", lineHeight: "30px", letterSpacing: "-0.43px", color: "#1A1A1A" }}>
                        Referral Bonus Earned
                      </span>
                      <span style={{ position: "absolute", top: "29.57px", left: 0, opacity: 0.6, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "13.53px", lineHeight: "22px", color: "#414750" }}>
                        Invited Vinay Sharma • Sep 15
                      </span>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17.39px", lineHeight: "27px", textAlign: "right", color: "#A3C500" }}>
                      +1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
