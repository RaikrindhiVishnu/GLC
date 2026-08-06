"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { s3Service } from "@/services/s3";

interface FarmlandDetailsHeroProps {
  title: string;
  locationSubtitle: string;
  tags: string[];
  heroBg: string;
  isLoading?: boolean;
}

export default function FarmlandDetailsHero({ title, locationSubtitle, tags, heroBg, isLoading }: FarmlandDetailsHeroProps) {
  const primaryTag = tags && tags.length > 0 ? tags[0] : "ACTIVE YIELD";
  const [resolvedImageUrl, setResolvedImageUrl] = useState<string | null>(null);
  const [isResolving, setIsResolving] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      setIsResolving(true);
      if (!heroBg || heroBg === "null" || heroBg === "") {
        if (isMounted) {
          setResolvedImageUrl(null);
          setIsResolving(false);
        }
        return;
      }
      if (heroBg.startsWith("http") || heroBg.startsWith("data:") || heroBg.startsWith("/")) {
        if (isMounted) {
          setResolvedImageUrl(heroBg);
          setIsResolving(false);
        }
        return;
      }
      try {
        const res = await s3Service.generateUrl({ key: heroBg, filename: heroBg, folderPath: '' });
        if (isMounted && res.url) {
          setResolvedImageUrl(res.url);
        }
      } catch (e) {
        console.warn("Could not generate presigned URL for Hero:", heroBg);
        if (isMounted) setResolvedImageUrl(null);
      } finally {
        if (isMounted) setIsResolving(false);
      }
    };
    fetchImage();
    return () => { isMounted = false; };
  }, [heroBg]);

  const displayUrl = resolvedImageUrl;
  const showLoader = isLoading || isResolving;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#0F2F4C",
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Base Cover */}
      {showLoader ? (
        <div className="animate-pulse bg-[#1E293B]" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
      ) : displayUrl ? (
        <img
          src={displayUrl}
          alt={title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      ) : null}

      {/* Dual Gradient Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25))", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)", zIndex: 2 }} />

      <Navbar variant="app" active="none" />

      {/* Bottom-anchored content */}
      <div
        className="px-4 pb-8 sm:px-10 sm:pb-10 lg:px-15 lg:pb-12"
        style={{ position: "relative", zIndex: 3, width: "100%", boxSizing: "border-box", display: "flex", justifyContent: "space-between", alignItems: "flex-end", pointerEvents: "none" }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", pointerEvents: "auto" }}>

          {/* Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "6px 16px", background: "#FFFFFF", borderRadius: "9999px", marginBottom: "20px" }}
          >
            <div style={{ width: "8px", height: "8px", background: "#BCD225", borderRadius: "9999px", marginRight: "8px" }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#091426" }}>
              {primaryTag}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-[36px] leading-10 sm:text-[48px] sm:leading-13 lg:text-[60px] lg:leading-15"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-1.5px", color: "#FFFFFF", margin: "0 0 16px 0" }}
          >
            {title}
          </motion.h1>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <svg width="21" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: "24px", lineHeight: "32px", color: "rgba(255,255,255,0.9)" }}>
              {locationSubtitle}
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
