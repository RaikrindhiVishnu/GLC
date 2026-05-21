"use client";

import React from "react";
import { motion } from "framer-motion";

interface MediaHubProps {
  primaryImage: string;
  title: string;
}

export default function MediaHub({ primaryImage, title }: MediaHubProps) {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Primary Asset View */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", width: "100%", height: "280px", borderRadius: "32px", overflow: "hidden", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)" }}
        className="sm:h-95 lg:h-120 lg:rounded-[48px]"
      >
        <img
          src={primaryImage}
          alt={`${title} Primary View`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { e.currentTarget.src = "/assets/compareassets/farm1.jpg"; }}
        />
        <div style={{ position: "absolute", top: "24px", left: "24px", background: "rgba(15,47,76,0.85)", backdropFilter: "blur(8px)", padding: "8px 16px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BCD225" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#FFFFFF", letterSpacing: "0.5px" }}>VERIFIED ASSET MEDIA</span>
        </div>
      </motion.div>

      {/* Secondary Mapping Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* GIS Topology Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ position: "relative", flex: 1, height: "220px", background: "#0F2F4C", borderRadius: "32px", padding: "24px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", isolation: "isolate" }}
          className="lg:h-64 lg:rounded-[48px]"
        >
          <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.8 }}>
            <img src="/assets/search/farmlanddetails/GIS Topology Card.svg" alt="GIS Topology Map" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#CFE5FF" }}>GIS TOPOLOGY</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF" }}>Parcel Outline</span>
            </div>
            <div style={{ width: "20px", height: "20px", background: "#2780C4", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </div>
          <div style={{ position: "absolute", left: "50%", top: "55%", transform: "translate(-50%, -50%)", width: "120px", height: "100px", zIndex: 1, filter: "drop-shadow(0px 0px 12px rgba(187,211,39,0.8))", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "90px", height: "75px", background: "rgba(39,128,196,0.1)", border: "3.84px solid #2780C4", clipPath: "polygon(25% 0%, 100% 10%, 90% 90%, 10% 100%, 0% 30%)" }} />
          </div>
        </motion.div>

        {/* Connectivity Map Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ flex: 1, height: "220px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          className="lg:h-64 lg:rounded-[48px]"
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>INFRASTRUCTURE</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C" }}>Connectivity Map</span>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {["HWY DIRECT", "PAVED"].map((tag) => (
                <div key={tag} style={{ background: "#EDEEEF", borderRadius: "9999px", padding: "6px 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#45474C", height: "28px", display: "flex", alignItems: "center" }}>{tag}</div>
              ))}
            </div>
          </div>
          <div style={{ width: "100%", height: "100px", border: "1px solid #EDEEEF", borderRadius: "24px", overflow: "hidden" }}>
            <img src="/assets/search/farmlanddetails/Map Snippet.svg" alt="Map Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.src = "/assets/compareassets/farm1.jpg"; }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
