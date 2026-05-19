"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

interface FarmlandDetailsHeroProps {
  title: string;
  locationSubtitle: string;
  tags: string[];
  heroBg: string;
}

export default function FarmlandDetailsHero({ title, locationSubtitle, tags, heroBg }: FarmlandDetailsHeroProps) {
  const primaryTag = tags && tags.length > 0 ? tags[0] : "ACTIVE YIELD";

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
      <img
        src={heroBg}
        alt={title}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        onError={(e) => { e.currentTarget.src = "/assets/compareassets/hero.svg"; }}
      />

      {/* Dual Gradient Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25))", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)", zIndex: 2 }} />

      <Navbar variant="app" active="search" />

      {/* Bottom-anchored content */}
      <div
        style={{ position: "relative", zIndex: 3, width: "100%", padding: "0 60px 48px", boxSizing: "border-box", display: "flex", justifyContent: "space-between", alignItems: "flex-end", pointerEvents: "none" }}
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
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "60px", lineHeight: "60px", letterSpacing: "-1.5px", color: "#FFFFFF", margin: "0 0 16px 0" }}
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
