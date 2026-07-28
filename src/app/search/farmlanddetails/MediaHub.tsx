"use client";

import React from "react";
import { motion } from "framer-motion";

interface MediaHubProps {
  primaryImage: string;
  title: string;
  lat?: string;
  long?: string;
  polygon?: string;
}

export default function MediaHub({ primaryImage, title, lat, long, polygon }: MediaHubProps) {
  // Build a google maps link if we have coordinates
  const googleMapsLink = lat && long ? `https://www.google.com/maps/search/?api=1&query=${lat},${long}` : "#";

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
          src={primaryImage || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
          alt={`${title} Primary View`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"; }}
        />
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
          {polygon && (
            <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 1 }}>
              <img src={polygon} alt="GIS Topology Map" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
          <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#CFE5FF" }}>GIS TOPOLOGY</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF" }}>Parcel Outline</span>
              {lat && long && (
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
                  {lat}, {long}
                </span>
              )}
            </div>
            <div style={{ width: "20px", height: "20px", background: "#2780C4", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </div>
        </motion.div>

        {/* Connectivity Map Card */}
        <motion.a
          href={googleMapsLink}
          onClick={(e) => {
            e.preventDefault(); // Unconditionally prevent default to stop local '#' navigation
            if (lat && long) {
              window.open(googleMapsLink, "_blank", "noopener,noreferrer");
            } else {
              alert("Real coordinates are not available from the API for this farmland yet.");
            }
          }}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ flex: 1, height: "220px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", cursor: lat && long ? "pointer" : "default" }}
          className="lg:h-64 lg:rounded-[48px] hover:shadow-lg transition-shadow duration-300"
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
            <img src="/assets/search/farmlanddetails/Map Snippet.svg" alt="Map Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"; }} />
          </div>
        </motion.a>
      </div>
    </div>
  );
}
