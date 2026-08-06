"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { s3Service } from "@/services/s3";
import MapWrapper from "@/components/MapWrapper";

interface MediaHubProps {
  primaryImage: string;
  title: string;
  lat?: string;
  long?: string;
  polygon?: any;
}

export default function MediaHub({ primaryImage, title, lat, long, polygon }: MediaHubProps) {
  const [resolvedImageUrl, setResolvedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      if (!primaryImage || primaryImage === "null" || primaryImage === "") {
        if (isMounted) setResolvedImageUrl(null);
        return;
      }
      if (primaryImage.startsWith("http") || primaryImage.startsWith("data:") || primaryImage.startsWith("/")) {
        if (isMounted) setResolvedImageUrl(primaryImage);
        return;
      }
      try {
        const res = await s3Service.generateUrl({ key: primaryImage, filename: primaryImage, folderPath: '' });
        if (isMounted && res.url) {
          setResolvedImageUrl(res.url);
        }
      } catch (e) {
        if (isMounted) setResolvedImageUrl(null);
      }
    };
    fetchImage();
    return () => { isMounted = false; };
  }, [primaryImage]);

  const displayUrl = resolvedImageUrl;

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
          // API returns [{type:"Polygon", coordinates:[...]}, ...]
          parsedPolygon = extractFromGeoJSON(parsed[0]) ?? undefined;
        } else {
          parsedPolygon = extractFromGeoJSON(parsed) ?? undefined;
        }
      } catch (e) {
        console.error("Failed to parse polygon string", e);
      }
    } else if (Array.isArray(polygon)) {
      // Could be [{type:"Polygon", coordinates:[...]}, ...] or [{lat, lng}, ...]
      if (polygon[0]?.type === "Polygon") {
        // GeoJSON wrapped in array
        parsedPolygon = extractFromGeoJSON(polygon[0]) ?? undefined;
      } else if (polygon[0]?.lat !== undefined) {
        // Already {lat, lng} format
        parsedPolygon = polygon;
      } else if (Array.isArray(polygon[0])) {
        // Raw coordinate pairs [[lng, lat], ...]
        parsedPolygon = polygon.map((c: any) => ({ lat: parseFloat(c[1]), lng: parseFloat(c[0]) }));
      }
    } else {
      // Direct GeoJSON object
      parsedPolygon = extractFromGeoJSON(polygon) ?? undefined;
    }
  }

  const mapLocation = lat && long ? { lat: parseFloat(lat), lng: parseFloat(long) } : undefined;

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Primary Asset View */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", width: "100%", height: "280px", borderRadius: "32px", overflow: "hidden", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", backgroundColor: "#F4F4F5" }}
        className="sm:h-95 lg:h-120 lg:rounded-[48px] flex flex-col items-center justify-center"
      >
        {displayUrl ? (
          <img
            src={displayUrl}
            alt={`${title} Primary View`}
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2 z-10 relative">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="font-jakarta text-[#A1A1AA] text-[12px] font-medium z-10 relative">No Image</span>
          </>
        )}
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
          {parsedPolygon && parsedPolygon.length > 0 && (() => {
            const lats = parsedPolygon.map((p: any) => p.lat);
            const lngs = parsedPolygon.map((p: any) => p.lng);
            const minLat = Math.min(...lats), maxLat = Math.max(...lats);
            const minLng = Math.min(...lngs), maxLng = Math.max(...lngs);
            const W = 360, H = 260, PAD = 52;
            const latRange = maxLat - minLat || 0.001;
            const lngRange = maxLng - minLng || 0.001;
            const scale = Math.min((W - PAD*2) / lngRange, (H - PAD*2) / latRange) * 0.80;
            const cx = W / 2, cy = H / 2;
            const avgLat = (minLat + maxLat) / 2, avgLng = (minLng + maxLng) / 2;
            const pts = parsedPolygon.map((p: any) => {
              const x = cx + (p.lng - avgLng) * scale;
              const y = cy - (p.lat - avgLat) * scale;
              return `${x},${y}`;
            }).join(' ');
            return (
              <div style={{ position: "absolute", inset: 0, zIndex: 0, borderRadius: "inherit", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "rgba(15, 18, 20, 0.95)", borderRadius: "inherit" }} />
                <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.18 }}>
                  <defs>
                    <pattern id="tg" width="36" height="36" patternUnits="userSpaceOnUse">
                      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#FFFFFF" strokeWidth="0.4"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#tg)" />
                  <ellipse cx="50%" cy="62%" rx="38%" ry="22%" fill="none" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.5"/>
                  <ellipse cx="50%" cy="62%" rx="48%" ry="30%" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3"/>
                  <ellipse cx="48%" cy="56%" rx="26%" ry="14%" fill="none" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.4"/>
                  <line x1="0" y1="44%" x2="100%" y2="41%" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.2"/>
                  <line x1="0" y1="60%" x2="100%" y2="64%" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.2"/>
                </svg>
                <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
                  <defs>
                    <filter id="pglow">
                      <feGaussianBlur stdDeviation="5" result="blur"/>
                      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  <polygon points={pts} fill="rgba(39,128,196,0.1)" stroke="#2780C4" strokeWidth="3.84" strokeLinejoin="round" filter="url(#pglow)" />
                </svg>
              </div>
            );
          })()}
          <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#CFE5FF" }}>GIS TOPOLOGY</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF" }}>Parcel Outline</span>
            </div>
            <div style={{ width: "20px", height: "20px", background: "#2780C4", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </div>
        </motion.div>

        {/* Connectivity Map Card */}
        <motion.div
          onClick={(e) => {
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
          <div style={{ width: "100%", height: "100px", border: "1px solid #EDEEEF", borderRadius: "24px", overflow: "hidden", position: "relative" }}>
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
    </div>
  );
}
