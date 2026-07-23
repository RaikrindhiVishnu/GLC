"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import MapWrapper from "../../../components/MapWrapper";

export default function MaintenanceOnboardSection() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    code: "+91",
    contactNumber: "",
    quotedPrice: "",
    country: "India",
    state: "Telangana",
    district: "Rangareddy",
    mandal: "Chevella",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("submitted=true")) {
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home/maintenance/asset-development?farmland=NEW-ASSET");
  };

  const inputStyle: React.CSSProperties = {
    boxSizing: "border-box",
    width: "100%",
    height: "48px",
    background: "#F3F4F5",
    borderRadius: "16px",
    border: "none",
    padding: "13px 16px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6B7280",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "10px",
    lineHeight: "15px",
    letterSpacing: "1px",
    color: "#45474C",
    textTransform: "uppercase",
    paddingLeft: "4px",
  };

  return (
    <section className="w-full max-w-[1216px] mx-auto px-4 lg:px-0 py-16 lg:py-24 box-border flex flex-col gap-12 relative pb-[160px]">

      {/* ─── SECTION HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", lineHeight: "48px", letterSpacing: "-1.2px", color: "#0F2F4C" }}>
          Onboard your Asset
        </h2>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "32px", color: "#45474C" }}>
          Initialize your land discovery and management journey.
        </span>
      </motion.div>

      {/* ─── PHASE 01: MAP & FORMS ─── */}
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 w-full justify-between items-start relative">
        
        {/* LEFT COLUMN: Map & Documents */}
        <div className="flex flex-col gap-6 w-full lg:w-[592px] shrink-0">
          
          {/* Map Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              height: "513px",
              background: "#F1F5F9",
              boxShadow: "40px 0px 40px rgba(9,20,38,0.04)",
              borderRadius: "48px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", borderRadius: "48px" }}>
              <MapWrapper 
                onLocationChange={(loc) => setFormData(prev => ({ ...prev, lat: loc.lat.toString(), lng: loc.lng.toString() }))}
              />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)", zIndex: 1, pointerEvents: "none" }} />
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", bottom: "48px", left: "50%", transform: "translateX(-50%)", zIndex: 5, width: "100%", pointerEvents: "none" }}>
              <div
                style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "16px 32px", gap: "12px", background: "#0F2F4C", borderRadius: "9999px", boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)", cursor: "pointer", justifyContent: "center", width: "fit-content", height: "56px", pointerEvents: "auto" }}
              >
                <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", letterSpacing: "0.4px", whiteSpace: "nowrap" }}>DROP GPS PIN TO LOCATE</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 16px", background: "rgba(255,255,255,0.8)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", borderRadius: "9999px", marginTop: "16px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "rgba(9,20,38,0.6)" }}>GEOSPATIAL PRECISION REQUIRED</span>
              </div>
            </div>
          </motion.div>

          {/* Legal Documents Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              height: "205px",
              background: "#FFFFFF",
              boxShadow: "0px 4px 20px rgba(26,54,93,0.05)",
              borderRadius: "48px",
              padding: "32px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "32px",
              boxSizing: "border-box"
            }}
          >
            <div style={{ width: "72px", height: "78px", background: "#D6E3FF", borderRadius: "16px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
              <svg width="24" height="30" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", lineHeight: "31px", color: "#002045" }}>
                Upload Title Deed & Passbook
              </h3>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#43474E", marginTop: "4px" }}>
                PDF, JPG, PNG Max 10MB per file
              </span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 32px", background: "#FFFFFF", border: "2px solid #0061A5", borderRadius: "9999px", marginTop: "21px", width: "fit-content", cursor: "pointer" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#0061A5", letterSpacing: "0.7px", textTransform: "uppercase" }}>BROWSE FILES OR SCAN</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Forms */}
        <div className="flex flex-col gap-6 w-full lg:w-[592px] shrink-0">
          
          {/* Seller Information Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              height: "458px",
              background: "#FFFFFF",
              boxShadow: "40px 0px 40px rgba(9,20,38,0.04)",
              borderRadius: "48px",
              padding: "40px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "40px", position: "relative" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "30px", color: "#0F2F4C", textTransform: "uppercase" }}>SELLER INFROMATION</h3>
              <div style={{ width: "48px", height: "4px", background: "#2780C4", marginTop: "10px" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
              {/* FULL LEGAL NAME */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={labelStyle}>FULL LEGAL NAME</label>
                <input type="text" placeholder="Executive Name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} style={{...inputStyle, height: "55px"}} />
              </div>

              {/* CODE + CONTACT NUMBER */}
              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "160px", flexShrink: 0 }}>
                  <label style={labelStyle}>CODE</label>
                  <input type="text" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} style={{ ...inputStyle, height: "55px", color: "#191C1D", fontWeight: 700, fontSize: "16px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label style={labelStyle}>CONTACT NUMBER</label>
                  <input type="text" placeholder="000 000 0000" value={formData.contactNumber} onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })} style={{...inputStyle, height: "55px"}} />
                </div>
              </div>

              {/* QUOTED PRICE */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={labelStyle}>QUOTED PRICE (OPTIONAL)</label>
                <input type="text" placeholder="Enter Amount" value={formData.quotedPrice} onChange={(e) => setFormData({ ...formData, quotedPrice: e.target.value })} style={{...inputStyle, height: "55px"}} />
              </div>
            </div>
          </motion.div>

          {/* Property Details Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              height: "255px",
              background: "#FFFFFF",
              boxShadow: "0px 4px 20px rgba(26,54,93,0.05)",
              borderRadius: "48px",
              padding: "32px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "12px", letterSpacing: "1.2px", color: "#0F2F4C", textTransform: "uppercase" }}>PROPERTY DETAILS</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
              {/* Row 1 */}
              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
                  <label style={labelStyle}>COUNTRY</label>
                  <input type="text" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} style={inputStyle} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
                  <label style={labelStyle}>STATE</label>
                  <input type="text" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} style={inputStyle} />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
                  <label style={labelStyle}>DISTRICT</label>
                  <input type="text" value={formData.district} onChange={(e) => setFormData({ ...formData, district: e.target.value })} style={inputStyle} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
                  <label style={labelStyle}>MANDAL</label>
                  <input type="text" value={formData.mandal} onChange={(e) => setFormData({ ...formData, mandal: e.target.value })} style={inputStyle} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </form>

      {/* ─── BOTTOM SUBMIT BUTTON ─── */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "32px" }}>
        <button
          onClick={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 32px",
            height: "48px",
            background: "#1E5894", // Using the blue from screenshot
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            width: "fit-content",
            minWidth: "250px"
          }}
        >
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", letterSpacing: "0.5px" }}>Farmland Details</span>
        </button>
      </div>

    </section>
  );
}
