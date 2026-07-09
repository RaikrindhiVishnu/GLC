"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useGetUserBoughtFarmlandsQuery } from "../../../services/user";

export default function MainWealthFeed() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"sole" | "fractional">("sole");
  const [hoveredBtn1, setHoveredBtn1] = useState(false);
  const [hoveredCertBtn, setHoveredCertBtn] = useState(false);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const userId = 2; // Hardcoded to 2 as per backend request
  
  const { data: res, isLoading: isQueryLoading } = useGetUserBoughtFarmlandsQuery(
    { user_id: userId },
    { skip: !mounted || !userId }
  );
  
  const isLoading = !mounted || isQueryLoading;
  const boughtFarmlands = res?.data || [];

  return (
    <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "48px", width: "100%" }}>
      {/* ─── WEALTH HEADER ─── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "40px", letterSpacing: "-1.2px", color: "#0F2F4C" }}
          className="lg:text-[48px] lg:leading-12"
        >
          Total Asset Value: ₹1.85 Cr
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", flexWrap: "wrap" }}
        >
          {[
            { icon: <div style={{ width: "10.5px", height: "11.67px", background: "#45474C", borderRadius: "2px" }} />, label: "Total Holdings: 12.5 Acres" },
            { icon: <div style={{ width: "12.83px", height: "10.5px", background: "#45474C", borderRadius: "2px" }} />, label: "Active Vault: 3 Properties" },
          ].map((badge) => (
            <div key={badge.label} style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "8px 20px", gap: "8px", background: "#E7E8E9", borderRadius: "9999px" }}>
              {badge.icon}
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#45474C" }}>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── BENTO FEED + SIDEBAR ─── */}
      <div className="flex flex-col lg:flex-row items-start gap-8" style={{ width: "100%" }}>
        {/* LEFT COLUMN: PROPERTY CARDS */}
        <div className="flex-1 min-w-0 flex flex-col gap-8">
          {/* Tab Switcher */}
          <div style={{ display: "inline-flex", flexDirection: "row", alignItems: "center", padding: "6px", gap: "4px", background: "#F3F4F5", borderRadius: "9999px" }}>
            {(["sole", "fractional"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px 32px", height: "40px", background: activeTab === tab ? "#0F2F4C" : "transparent", borderRadius: "9999px", border: "none", cursor: "pointer", transition: "all 0.2s ease", boxShadow: activeTab === tab ? "0px 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none" }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: activeTab === tab ? 700 : 500, fontSize: "14px", color: activeTab === tab ? "#FFFFFF" : "#45474C" }}>
                  {tab === "sole" ? "Sole Ownership" : "Fractional Assets"}
                </span>
              </button>
            ))}
          </div>

          {/* Property Cards */}
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-[200px] bg-white rounded-[32px] shadow-[0px_8px_40px_rgba(9,20,38,0.04)]">
              <span className="font-jakarta text-[#0F2F4C]">Loading your assets...</span>
            </div>
          ) : boughtFarmlands.length === 0 ? (
            <div className="flex justify-center items-center w-full h-[200px] bg-white rounded-[32px] shadow-[0px_8px_40px_rgba(9,20,38,0.04)]">
              <span className="font-jakarta text-[#0F2F4C]">No active holdings found.</span>
            </div>
          ) : (
            boughtFarmlands.map((card, i) => (
              <motion.div
                key={card.farmland_id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col sm:flex-row items-start sm:items-center"
                style={{ boxSizing: "border-box", padding: "24px", gap: "24px", width: "100%", background: "#FFFFFF", borderRadius: "32px", boxShadow: "0px 8px 40px rgba(9, 20, 38, 0.04)" }}
              >
                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden w-full h-48 sm:w-48 sm:h-48 sm:shrink-0" style={{ background: "#F3F4F5", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,0.05)" }}>
                  <Image src={card.farmland_img || `/assets/home/YourListings/glcsos1.svg`} alt={card.farmland_code} fill style={{ objectFit: "cover", opacity: i === 0 ? 1 : 0.8 }} />
                </div>

                {/* Info */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1, width: "100%", minHeight: "140px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "wrap", gap: "8px" }}>
                      <h3
                        onClick={() => i === 0 && router.push("/home/myassets/details")}
                        style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C", cursor: i === 0 ? "pointer" : "default" }}
                      >
                        {card.farmland_code}
                      </h3>
                      <div style={{ background: card.is_active ? "#93C5FD" : "#E7E8E9", borderRadius: "9999px", padding: "4px 12px", display: "flex", alignItems: "center" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: card.is_active ? "#0F2F4C" : "#45474C" }}>
                          {card.is_active ? "ACTIVE HOLDING" : "INACTIVE"}
                        </span>
                      </div>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>
                      Registered on {new Date(card.created_on).toLocaleDateString()}
                    </span>
                    <span style={{ marginTop: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>
                      Value: ₹{(card.price / 100000).toFixed(2)} Lakhs
                    </span>
                  </div>

                  {i === 0 ? (
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "16px" }}>
                      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                        <div style={{ width: "40px", height: "40px", background: "#F3F4F5", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: "14px", height: "16px", border: "1.5px solid #0F2F4C", borderRadius: "2px" }} />
                        </div>
                        <div style={{ width: "40px", height: "40px", background: "#F3F4F5", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: "16px", height: "16px", border: "1.5px solid #0F2F4C", borderRadius: "8px" }} />
                        </div>
                      </div>
                      <button
                        onClick={() => router.push("/home/myassets/details")}
                        onMouseEnter={() => setHoveredBtn1(true)}
                        onMouseLeave={() => setHoveredBtn1(false)}
                        style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "10px 24px", height: "40px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "20px", border: "none", cursor: "pointer", transition: "opacity 0.2s ease", opacity: hoveredBtn1 ? 0.9 : 1 }}
                      >
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", color: "#FFFFFF" }}>Track Yield Payouts</span>
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", cursor: "pointer", marginTop: "16px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#00629E" }}>Request Add-On Services</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#00629E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* ─── ASIDE SIDEBAR WIDGETS ─── */}
        <div className="w-full lg:w-106.25 lg:shrink-0 flex flex-col gap-8">
          {/* Widget 1: Active Pool Investments */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px", gap: "24px", width: "100%", background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.1)", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px" }}
          >
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#0F2F4C" }}>ACTIVE POOL INVESTMENTS</span>
              <div style={{ width: "20px", height: "20px", borderRadius: "10px", background: "#00629E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "6px", height: "6px", background: "#FFFFFF", borderRadius: "3px" }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F2F4C" }}>Premium Timber Estate</h3>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", width: "100%" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#45474C" }}>2.1 Acres / ₹50,00,000</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>100% Funded</span>
              </div>
            </div>
            <div style={{ width: "100%", height: "8px", background: "#EDEEEF", borderRadius: "9999px", overflow: "hidden" }}>
              <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #2780C4 0%, #93C5FD 100%)", borderRadius: "9999px" }} />
            </div>
            <button
              onClick={() => router.push("/pool-buying/pooldetails")}
              onMouseEnter={() => setHoveredCertBtn(true)}
              onMouseLeave={() => setHoveredCertBtn(false)}
              style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", height: "46px", background: hoveredCertBtn ? "#F8F9FA" : "transparent", border: "1px solid #75777D", borderRadius: "6px", cursor: "pointer", transition: "background 0.2s ease" }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C", letterSpacing: "0.5px" }}>VIEW POOL DETAILS</span>
            </button>
          </motion.div>

          {/* Widget 2: Digital Vault */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px", width: "100%", background: "#CFE5FF", borderRadius: "32px", position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", width: "192px", height: "192px", right: "-48px", bottom: "-47px", background: "rgba(105, 182, 254, 0.2)", filter: "blur(32px)", borderRadius: "9999px", zIndex: 0 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: 1, width: "100%" }}>
              <div style={{ width: "48px", height: "48px", background: "#0F2F4C", borderRadius: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h4 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#001D34" }}>Secured in Digital Vault</h4>
              <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", color: "#004A78" }}>
                All your property documents and certificates are encrypted and stored in our ISO-certified digital vault.
              </p>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", marginTop: "4px", cursor: "pointer" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "14px", color: "#0F2F4C" }}>Contact Wealth Manager</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#0F2F4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Widget 3: Return Micro-Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "center", padding: "24px", gap: "16px", width: "100%", background: "#F2F2F2", borderRadius: "32px" }}
          >
            <div style={{ width: "48px", height: "48px", background: "#FFFFFF", borderRadius: "9999px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "16px", color: "#0F2F4C" }}>%</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.6px", color: "#45474C" }}>TOTAL RETURN REALIZED</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C" }}>+12.4% avg</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
