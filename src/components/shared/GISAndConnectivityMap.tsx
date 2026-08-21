"use client";

import React from "react";
import { motion } from "framer-motion";
import MapWrapper from "@/components/MapWrapper";

interface GISAndConnectivityMapProps {
  lat?: string;
  long?: string;
  polygon?: any;
}

export default function GISAndConnectivityMap({ lat, long, polygon }: GISAndConnectivityMapProps) {
  // Build a google maps link if we have coordinates
  const googleMapsLink = lat && long ? `https://www.google.com/maps?q=${lat},${long}` : "#";

  let parsedPolygon: { lat: number; lng: number }[] | undefined = undefined;

  const extractFromGeoJSON = (obj: any): { lat: number; lng: number }[] | null => {
    if (obj?.type === "Polygon" && Array.isArray(obj.coordinates)) {
      const coords = obj.coordinates[0];
      if (Array.isArray(coords) && coords.length > 0) {
        return coords.map((c: any) => ({ lat: parseFloat(c[1]), lng: parseFloat(c[0]) }));
      }
    }
    return null;
  };

  if (polygon) {
    if (typeof polygon === "string") {
      try {
        const parsed = JSON.parse(polygon);
        if (Array.isArray(parsed)) {
          parsedPolygon = extractFromGeoJSON(parsed[0]) ?? undefined;
        } else {
          parsedPolygon = extractFromGeoJSON(parsed) ?? undefined;
        }
      } catch (e) {
        console.error("Failed to parse polygon string", e);
      }
    } else if (Array.isArray(polygon)) {
      if (polygon[0]?.type === "Polygon") {
        parsedPolygon = extractFromGeoJSON(polygon[0]) ?? undefined;
      } else if (polygon[0]?.lat !== undefined) {
        parsedPolygon = polygon;
      } else if (Array.isArray(polygon[0])) {
        parsedPolygon = polygon.map((c: any) => ({ lat: parseFloat(c[1]), lng: parseFloat(c[0]) }));
      }
    } else {
      parsedPolygon = extractFromGeoJSON(polygon) ?? undefined;
    }
  }

  const mapLocation = lat && long ? { lat: parseFloat(lat), lng: parseFloat(long) } : undefined;

  return (
    <div className="flex flex-row justify-between w-[795.2px] h-[256px]">
      {/* GIS Topology Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ position: "relative", width: "385.6px", height: "256px", background: "#191C1D", borderRadius: "32px", padding: "17px 24px 24px", boxSizing: "border-box", display: "flex", flexDirection: "column", overflow: "hidden", isolation: "isolate" }}
        className="lg:rounded-[32px]"
      >
        <div style={{ position: "relative", zIndex: 3, display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none", marginBottom: "16px" }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF" }}>GIS Topology</span>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>
        <div style={{ position: "absolute", top: "57px", left: 0, right: 0, bottom: 0, zIndex: 0, borderRadius: "0 0 32px 32px", overflow: "hidden" }}>
          {(mapLocation || (parsedPolygon && parsedPolygon.length > 0)) ? (
            <MapWrapper
              viewOnly
              initialLocation={mapLocation}
              initialPolygon={parsedPolygon}
              polygonColor="#2780C4"
              polygonFillColor="#2780C4"
              polygonDashArray=""
              polygonWeight={3}
            />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#191C1D", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "#8C94A1", fontSize: "12px" }}>
              Map Data Unavailable
            </div>
          )}
        </div>
      </motion.div>

      {/* Connectivity Map Card */}
      <motion.div
        onClick={() => {
          if (lat && long) {
            window.open(googleMapsLink, "_blank", "noopener,noreferrer");
          } else {
            alert("Real coordinates are not available from the API for this farmland yet.");
          }
        }}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ width: "385.6px", height: "256px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", cursor: lat && long ? "pointer" : "default" }}
        className="lg:rounded-[32px] hover:shadow-lg transition-shadow duration-300"
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>INFRASTRUCTURE</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#0F2F4C", lineHeight: "1.2" }}>Connectivity<br />Map</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["Road Approach: 50 Meters", "Electricity: 3-Phase Grid"].map((tag) => (
              <div key={tag} style={{ background: "#EDEEEF", borderRadius: "9999px", padding: "4px 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#45474C", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap" }}>{tag}</div>
            ))}
          </div>
        </div>
        <div style={{ width: "100%", height: "117px", border: "1px solid #EDEEEF", borderRadius: "32px", overflow: "hidden", position: "relative" }}>
          {mapLocation || parsedPolygon ? (
            <MapWrapper
              viewOnly
              initialLocation={mapLocation}
              onMapClick={() => {
                if (lat && long) {
                  window.open(googleMapsLink, "_blank", "noopener,noreferrer");
                }
              }}
            />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "#8C94A1", fontSize: "12px" }}>
              Map Data Unavailable
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
