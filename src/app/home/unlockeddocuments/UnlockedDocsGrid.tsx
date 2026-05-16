"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UnlockedDocsGrid() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Unlocks");
  const [selectedDossier, setSelectedDossier] = useState<any | null>(null);

  const [scale, setScale] = useState(1);
  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1360;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      setScale(currentScale);
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${currentScale})`;
      }
      if (shellRef.current) {
        shellRef.current.style.height = `${1329 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filterTabs = ["All Unlocks", "Legal Dossiers", "Risk Reports"];

  const cardsData = [
    {
      id: "GLC SOS 04",
      location: "West Godavari",
      tag: "PREMIUM",
      acres: "200",
      val: "₹4.2Cr",
      dateStr: "Unlocked Oct 12",
      safeStatus: "SAFE",
      item3: "Clear Title",
      item4: "Organic-Ready",
      leftPos: "0px",
      rightPos: "832px",
    },
    {
      id: "GLC KRU 12",
      location: "Kurnool District",
      tag: "PREMIUM",
      acres: "145",
      val: "₹3.1Cr",
      dateStr: "Unlocked Oct 08",
      safeStatus: "SAFE",
      item3: "Title Confirmed",
      item4: "Artesian Well",
      leftPos: "416px",
      rightPos: "416px",
    },
    {
      id: "GLC NLR 29",
      location: "Nellore Plains",
      tag: "PREMIUM",
      acres: "82",
      val: "₹1.8Cr",
      dateStr: "Unlocked Sep 30",
      safeStatus: "SAFE",
      item3: "Digital Ledger",
      item4: "Solar Grid Zone",
      leftPos: "832px",
      rightPos: "0px",
    },
  ];

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", overflow: "hidden" }}>
      <div
        ref={shellRef}
        style={{
          position: "relative",
          width: "1280px",
          maxWidth: "100%",
          height: "1329px",
          flexShrink: 0,
        }}
      >
        <div
          ref={scalerRef}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: "-640px",
            width: "1280px",
            height: "1329px",
            transformOrigin: "top center",
            willChange: "transform",
          }}
        >
          <section
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "128px 32px 96px",
              gap: "48px",
              width: "1280px",
            }}
          >
      {/* Header & Credit Hub */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "0px",
          width: "1216px",
          height: "84.5px",
          flex: "none",
          order: 0,
          alignSelf: "stretch",
          flexGrow: 0,
        }}
      >
        {/* Paragraph stack */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "8.5px", width: "357px", height: "84.5px", flex: "none", order: 0, flexGrow: 0 }}>
          <span
            style={{
              width: "196.53px",
              height: "16px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#004A78",
              flex: "none",
              order: 0,
              flexGrow: 0,
            }}
          >
            PREMIUM ASSET DISCOVERY
          </span>
          <h2
            style={{
              margin: 0,
              width: "357px",
              height: "60px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "48px",
              lineHeight: "60px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "-3px",
              color: "#0F2F4C",
              flex: "none",
              order: 1,
              flexGrow: 0,
            }}
          >
            Intelligence Vault
          </h2>
        </div>

        {/* Background Capsule Layer */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "12px 24px",
            gap: "16px",
            isolation: "isolate",
            width: "418.66px",
            height: "44px",
            background: "#0F2F4C",
            borderRadius: "9999px",
            position: "relative",
            flex: "none",
            order: 1,
            flexGrow: 0,
          }}
        >
          {/* Overlay+Shadow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255, 255, 255, 0.002)",
              boxShadow: "0px 10px 15px -3px rgba(9, 20, 38, 0.1), 0px 4px 6px -4px rgba(9, 20, 38, 0.1)",
              borderRadius: "9999px",
              zIndex: 0,
            }}
          />

          {/* Container slot */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px",
              gap: "8px",
              height: "20px",
              zIndex: 1,
            }}
          >
            {/* Lock outline symbol container */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", width: "12px", height: "15.75px" }}>
              <svg width="12" height="15.75" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>

            {/* Text slot */}
            <span
              style={{
                height: "20px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                color: "#FFFFFF",
                whiteSpace: "nowrap",
              }}
            >
              3 Premium Unlocks Remaining
            </span>
          </div>

          {/* Vertical Divider */}
          <div
            style={{
              width: "1px",
              height: "16px",
              background: "rgba(255, 255, 255, 0.2)",
              zIndex: 2,
            }}
          />

          {/* Link Element */}
          <div
            onClick={() => alert("Launching premium allocation gate module...")}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
              width: "116.64px",
              height: "20px",
              cursor: "pointer",
              zIndex: 3,
            }}
          >
            <span
              style={{
                width: "116.64px",
                height: "20px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                color: "#CFE5FF",
              }}
            >
              Get More Credits
            </span>
          </div>
        </div>
      </div>

      {/* Section - Search & Filters */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "16px",
          gap: "24px",
          width: "1216px",
          height: "84px",
          background: "#FFFFFF",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "32px",
          flex: "none",
          order: 1,
          alignSelf: "stretch",
          flexGrow: 0,
        }}
      >
        {/* Input Block Wrapper */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            isolation: "isolate",
            width: "683.25px",
            height: "52px",
            flex: "none",
            order: 0,
            flexGrow: 1,
            position: "relative",
          }}
        >
          {/* Input Layer */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "17px 24px 17px 48px",
              width: "683.25px",
              height: "52px",
              background: "#F3F4F5",
              borderRadius: "26px",
              zIndex: 0,
            }}
          >
            <input
              type="text"
              placeholder="Search by asset ID, location, or land size..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              style={{
                width: "611.25px",
                height: "18px",
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "18px",
                color: "#0F2F4C",
              }}
            />
          </div>

          {/* Left Icon Placement */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
              position: "absolute",
              width: "18px",
              left: "16px",
              top: "26.92%",
              bottom: "26.92%",
              zIndex: 1,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75777D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* Buttons Controls Array */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px",
            gap: "12px",
            height: "44px",
            flex: "none",
            order: 1,
            flexGrow: 0,
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 24px",
                  height: "44px",
                  background: isActive ? "#0F2F4C" : "#E7E8E9",
                  borderRadius: "32px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: isActive ? "#FFFFFF" : "#45474C",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab}
                </span>
              </button>
            );
          })}

          {/* Quick Round Filter Action Ring */}
          <button
            onClick={() => alert("Launching granular telemetry filter matrices dialog...")}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
              width: "42px",
              height: "42px",
              background: "#F3F4F5",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <div style={{ width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Section - Unlocked Dossier Grid Row Container */}
      <div
        style={{
          width: "1216px",
          height: "472px",
          position: "relative",
          flex: "none",
          order: 2,
          alignSelf: "stretch",
          flexGrow: 0,
        }}
      >
        {cardsData.map((card, idx) => (
          <div
            key={card.id}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              gap: "24px",
              position: "absolute",
              width: "384px",
              height: "465px",
              left: card.leftPos,
              top: "0px",
              background: "#FFFFFF",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "32px",
            }}
          >
            {/* Header Split stack */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "0px",
                width: "320px",
                height: "49px",
                flex: "none",
                order: 0,
                alignSelf: "stretch",
                flexGrow: 0,
              }}
            >
              {/* ID & Subtitle stack */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "4px", height: "49px", flex: "none", order: 0, flexGrow: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", height: "25px", flex: "none", order: 0, alignSelf: "stretch", flexGrow: 0 }}>
                  <span
                    style={{
                      height: "25px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "25px",
                      display: "flex",
                      alignItems: "center",
                      color: "#0F2F4C",
                    }}
                  >
                    {card.id}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "4px", height: "20px", flex: "none", order: 1, alignSelf: "stretch", flexGrow: 0 }}>
                  <span style={{ fontSize: "14px" }}>📍</span>
                  <span
                    style={{
                      height: "20px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "20px",
                      display: "flex",
                      alignItems: "center",
                      color: "#45474C",
                    }}
                  >
                    {card.location}
                  </span>
                </div>
              </div>

              {/* Tag Capsule */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "4px 12px",
                  height: "23px",
                  background: "#2780C4",
                  borderRadius: "9999px",
                  flex: "none",
                  order: 1,
                  flexGrow: 0,
                }}
              >
                <span
                  style={{
                    height: "15px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "15px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                  }}
                >
                  {card.tag}
                </span>
              </div>
            </div>

            {/* Metrics Dual Bar Block */}
            <div style={{ width: "320px", height: "79px", position: "relative", flex: "none", order: 1, alignSelf: "stretch", flexGrow: 0 }}>
              {/* Left Bar: Acres */}
              <div
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "16px",
                  gap: "4px",
                  position: "absolute",
                  width: "152px",
                  height: "79px",
                  left: "0px",
                  top: "0px",
                  background: "#F3F4F5",
                  borderRadius: "32px",
                }}
              >
                <span
                  style={{
                    width: "120px",
                    height: "15px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "15px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    color: "#75777D",
                  }}
                >
                  ACRES
                </span>
                <span
                  style={{
                    width: "120px",
                    height: "28px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "18px",
                    lineHeight: "28px",
                    display: "flex",
                    alignItems: "center",
                    color: "#0F2F4C",
                  }}
                >
                  {card.acres}
                </span>
              </div>

              {/* Right Bar: Value */}
              <div
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "16px",
                  gap: "4px",
                  position: "absolute",
                  width: "152px",
                  height: "79px",
                  right: "0px",
                  top: "0px",
                  background: "#F3F4F5",
                  borderRadius: "32px",
                }}
              >
                <span
                  style={{
                    width: "120px",
                    height: "15px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "15px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    color: "#75777D",
                  }}
                >
                  VALUE
                </span>
                <span
                  style={{
                    width: "120px",
                    height: "28px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "18px",
                    lineHeight: "28px",
                    display: "flex",
                    alignItems: "center",
                    color: "#0F2F4C",
                  }}
                >
                  {card.val}
                </span>
              </div>
            </div>

            {/* Status Indicators Frame */}
            <div style={{ width: "320px", height: "68px", position: "relative", flex: "none", order: 2, alignSelf: "stretch", flexGrow: 0 }}>
              {/* Top Left */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "0px", top: "8px" }}>
                <div style={{ width: "12px", height: "13.33px", display: "flex", alignItems: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontStyle: "normal", fontWeight: 600, fontSize: "12px", lineHeight: "16px", display: "flex", alignItems: "center", color: "#45474C" }}>
                  {card.dateStr}
                </span>
              </div>

              {/* Top Right */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "166px", top: "8px" }}>
                <div style={{ width: "13.33px", height: "13.33px", display: "flex", alignItems: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontStyle: "normal", fontWeight: 600, fontSize: "12px", lineHeight: "16px", display: "flex", alignItems: "center", color: "#047857" }}>
                  {card.safeStatus}
                </span>
              </div>

              {/* Bottom Left */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "0px", top: "44px" }}>
                <div style={{ width: "14.67px", height: "14px", display: "flex", alignItems: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontStyle: "normal", fontWeight: 600, fontSize: "12px", lineHeight: "16px", display: "flex", alignItems: "center", color: "#45474C" }}>
                  {card.item3}
                </span>
              </div>

              {/* Bottom Right */}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "166px", top: "44px" }}>
                <div style={{ width: "11.33px", height: "11.33px", display: "flex", alignItems: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontStyle: "normal", fontWeight: 600, fontSize: "12px", lineHeight: "16px", display: "flex", alignItems: "center", color: "#45474C" }}>
                  {card.item4}
                </span>
              </div>
            </div>

            {/* Actions Buttons Block */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "8px 0px 0px", gap: "12px", width: "320px", height: "133px", flex: "none", order: 3, alignSelf: "stretch", flexGrow: 0 }}>
              {/* Primary View Documents Button */}
              <button
                onClick={() => setSelectedDossier(card)}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px 0px",
                  isolation: "isolate",
                  width: "320px",
                  height: "57px",
                  background: "radial-gradient(50% 155.86% at 50% 50%, #2780C4 0%, #164573 100%)",
                  borderRadius: "32px",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  flex: "none",
                  order: 0,
                  alignSelf: "stretch",
                  flexGrow: 0,
                }}
              >
                {/* Button shadow layer */}
                <div style={{ position: "absolute", inset: 0, background: "rgba(255, 255, 255, 0.002)", boxShadow: "0px 4px 6px -1px rgba(9, 20, 38, 0.2), 0px 2px 4px -2px rgba(9, 20, 38, 0.2)", borderRadius: "32px", zIndex: 0 }} />
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#FFFFFF",
                    zIndex: 1,
                  }}
                >
                  View Documents
                </span>
              </button>

              {/* Secondary Open GIS Boundary Button */}
              <button
                onClick={() => alert(`Rendering exact satellite survey boundaries for ${card.id}...`)}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px 0px",
                  gap: "8px",
                  width: "320px",
                  height: "56px",
                  border: "2px solid rgba(197, 198, 205, 0.3)",
                  borderRadius: "32px",
                  background: "transparent",
                  cursor: "pointer",
                  flex: "none",
                  order: 1,
                  alignSelf: "stretch",
                  flexGrow: 0,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0px", width: "13.5px", height: "13.5px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="1 6 1 22 12 18 23 22 23 6 12 2 1 6"></polygon>
                    <line x1="12" y1="2" x2="12" y2="18"></line>
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#0F2F4C",
                  }}
                >
                  Open GIS Boundary
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Section - Conversion Banner */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0px",
          isolation: "isolate",
          width: "1216px",
          height: "320px",
          background: "rgba(255, 255, 255, 0.002)",
          boxShadow: "0px 25px 50px -12px rgba(0, 98, 158, 0.1)",
          borderRadius: "48px",
          position: "relative",
          overflow: "hidden",
          flex: "none",
          order: 3,
          alignSelf: "stretch",
          flexGrow: 0,
        }}
      >
        {/* Background Overlay image loading exactly asset.svg */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/assets/unlockdocuments/asset.svg"
            alt="Secure Asset Conversion Backdrop"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Gradient Blending Mask matching precise layout parameters string */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(9, 20, 38, 0.9) 0%, rgba(9, 20, 38, 0.4) 50%, rgba(9, 20, 38, 0) 100%)",
            zIndex: 1,
          }}
        />

        {/* Core Contents Framework Container */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0px 64px",
            gap: "24px",
            width: "672px",
            maxWidth: "672px",
            height: "320px",
            position: "relative",
            zIndex: 2,
            flex: "none",
            order: 2,
            flexGrow: 1,
          }}
        >
          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", width: "544px", height: "45px", flex: "none", order: 0, alignSelf: "stretch", flexGrow: 0 }}>
            <h2
              style={{
                margin: 0,
                width: "544px",
                height: "45px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "36px",
                lineHeight: "45px",
                display: "flex",
                alignItems: "center",
                color: "#FFFFFF",
              }}
            >
              Ready to secure an asset?
            </h2>
          </div>

          {/* Description Block */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", width: "544px", height: "56px", flex: "none", order: 1, alignSelf: "stretch", flexGrow: 0 }}>
            <p
              style={{
                margin: 0,
                width: "544px",
                height: "56px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "28px",
                display: "flex",
                alignItems: "center",
                color: "#8590A6",
              }}
            >
              Join exclusive investment pools and co-own verified Grade-A agricultural land with fractionalized smart contracts.
            </p>
          </div>

          {/* Trigger Framework Block */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", width: "544px", height: "60px", flex: "none", order: 2, alignSelf: "stretch", flexGrow: 0 }}>
            {/* Primary Option Trigger */}
            <button
              onClick={() => router.push("/pool-buying")}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px 40px",
                isolation: "isolate",
                width: "235.36px",
                height: "60px",
                background: "#00629E",
                borderRadius: "32px",
                border: "none",
                cursor: "pointer",
                position: "relative",
                flex: "none",
                order: 0,
                flexGrow: 0,
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "rgba(255, 255, 255, 0.002)", boxShadow: "0px 10px 15px -3px rgba(0, 98, 158, 0.2), 0px 4px 6px -4px rgba(0, 98, 158, 0.2)", borderRadius: "32px", zIndex: 0 }} />
              <span
                style={{
                  width: "155.36px",
                  height: "28px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#FFFFFF",
                  zIndex: 1,
                }}
              >
                View Active Pools
              </span>
            </button>
          </div>
        </div>
      </div>
          </section>
        </div>
      </div>

      {/* ─── STUNNING ABSOLUTE POPUP DOSSIER OVERLAY ─── */}
      {selectedDossier && (
        <div
          onClick={() => setSelectedDossier(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(9, 20, 38, 0.65)",
            backdropFilter: "blur(16.5px)",
            WebkitBackdropFilter: "blur(16.5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(16px, 2.5vh, 48px)",
            boxSizing: "border-box",
            zIndex: 1000,
          }}
        >
          {/* Inner Master Body Container precisely mimicking the Figma token spec */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
              padding: "clamp(24px, 4vh, 48px)",
              width: "1280px",
              maxWidth: "100%",
              height: "clamp(550px, 90vh, 937px)",
              background: "#F3F4F5",
              borderRadius: "48px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0px 24px 60px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Absolute close capsule button */}
            <button
              onClick={() => setSelectedDossier(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                width: "40px",
                height: "40px",
                borderRadius: "9999px",
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                zIndex: 50,
                color: "#0F2F4C",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              title="Close Dossier Overlay"
            >
              ✕
            </button>

            {/* ─── LEFT PANE (25% Base Anchor) ─── */}
            <div
              style={{
                boxSizing: "border-box",
                width: "clamp(220px, 20vw, 272px)",
                height: "100%",
                background: "#FFFFFF",
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.04)",
                borderRadius: "32px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {/* Satellite Cover slice */}
              <div
                style={{
                  width: "100%",
                  height: "clamp(140px, 25vh, 256px)",
                  position: "relative",
                  background: "#161B22",
                }}
              >
                <img
                  src="/assets/search/image2.1.png"
                  alt={`${selectedDossier.id} Plot Satellite`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src = "/assets/compareassets/farm1.jpg";
                  }}
                />
              </div>

              {/* Internal Metadata Stack */}
              <div
                style={{
                  boxSizing: "border-box",
                  padding: "clamp(16px, 2.5vh, 32px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(16px, 2.5vh, 24px)",
                  flexGrow: 1,
                  justifyContent: "flex-start",
                }}
              >
                {/* Titles stack */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {/* Badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "9999px",
                        background: "#BCD225",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "10px", color: "#0F2F4C", fontWeight: "bold" }}>✓</span>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "10px",
                        letterSpacing: "1px",
                        color: "#45474C",
                        textTransform: "uppercase",
                      }}
                    >
                      ASSET ID: {selectedDossier.id.replace("GLC ", "")}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(22px, 3vh, 30px)",
                      color: "#0F2F4C",
                      letterSpacing: "-0.75px",
                      lineHeight: "1.1",
                    }}
                  >
                    {selectedDossier.id}
                  </h3>

                  {/* Valuations info */}
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(13px, 1.8vh, 16px)",
                      color: "#45474C",
                      lineHeight: "1.4",
                    }}
                  >
                    {selectedDossier.acres} Acres • <span style={{ color: "#2780C4", fontWeight: 700 }}>{selectedDossier.val} Total Valuation</span>
                  </span>
                </div>

                {/* Soft Notification Banner */}
                <div
                  style={{
                    boxSizing: "border-box",
                    padding: "clamp(12px, 2vh, 20px)",
                    background: "#EEF6FF",
                    border: "1px solid rgba(39, 128, 196, 0.15)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div style={{ marginTop: "2px", flexShrink: 0 }}>
                    <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(11px, 1.5vh, 13px)",
                      lineHeight: "1.5",
                      color: "#2780C4",
                    }}
                  >
                    Documents Unlocked. A Sales Executive has been assigned to your profile regarding this property.
                  </span>
                </div>
              </div>
            </div>

            {/* ─── CENTER PANE (50% Core Dossier Grid) ─── */}
            <div
              style={{
                boxSizing: "border-box",
                flex: 1,
                margin: "0 clamp(12px, 1.5vw, 24px)",
                background: "#FFFFFF",
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.04)",
                borderRadius: "48px",
                padding: "clamp(16px, 2.2vh, 32px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflowY: "hidden",
              }}
            >
              {/* Header Info split row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexShrink: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <h2
                    style={{
                      margin: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(20px, 2.8vh, 28px)",
                      color: "#0F2F4C",
                      letterSpacing: "-0.5px",
                      lineHeight: "1.1",
                    }}
                  >
                    Verified Documentation
                  </h2>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(12px, 1.5vh, 14px)",
                      color: "#45474C",
                    }}
                  >
                    Official regulatory and institutional clearances
                  </span>
                </div>

                {/* Capsule grade label */}
                <div
                  style={{
                    background: "#A5CCF2",
                    borderRadius: "9999px",
                    padding: "4px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(9px, 1.2vh, 11px)",
                      color: "#0F2F4C",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    INSTITUTIONAL GRADE
                  </span>
                </div>
              </div>

              {/* Rows List Frame - Enclosed in master background card per Figma */}
              <div
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  padding: "clamp(4px, 0.8vh, 8px)",
                  gap: "clamp(4px, 0.8vh, 8px)",
                  background: "#F3F4F5",
                  borderRadius: "24px",
                  margin: "clamp(8px, 1.5vh, 16px) 0",
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                {/* Documentation Row 1 */}
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "clamp(10px, 1.4vh, 14px) clamp(16px, 2vw, 20px)",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 1.5vw, 16px)" }}>
                    <div style={{ width: "clamp(36px, 4.5vh, 42px)", height: "clamp(36px, 4.5vh, 42px)", borderRadius: "48px", background: "#EEF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 1.6vh, 15px)", color: "#0F2F4C" }}>
                        Title Deed & Passbook
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "clamp(9px, 1.1vh, 11px)", color: "#45474C", letterSpacing: "1px", textTransform: "uppercase" }}>
                        VERIFIED GOVERNMENT RECORD
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert("Decrypting official title deed passbook package. Rendering signed PDF signature vectors...")}
                    style={{
                      boxSizing: "border-box",
                      padding: "clamp(6px, 1vh, 8px) clamp(12px, 1.5vw, 16px)",
                      background: "transparent",
                      border: "1px solid rgba(39, 128, 196, 0.2)",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#EEF6FF"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(11px, 1.3vh, 13px)", color: "#2780C4", textAlign: "center" }}>
                      View Full PDF
                    </span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#2780C4", fontWeight: "bold", fontSize: "12px" }}>
                      ↗
                    </div>
                  </button>
                </div>

                {/* Documentation Row 2 */}
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "clamp(10px, 1.4vh, 14px) clamp(16px, 2vw, 20px)",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 1.5vw, 16px)" }}>
                    <div style={{ width: "clamp(36px, 4.5vh, 42px)", height: "clamp(36px, 4.5vh, 42px)", borderRadius: "48px", background: "#EEF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
                        <polygon points="1 6 1 22 12 18 23 22 23 6 12 2 1 6" />
                        <line x1="12" y1="2" x2="12" y2="18" />
                      </svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 1.6vh, 15px)", color: "#0F2F4C" }}>
                        Permanent GIS Boundary Map
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "clamp(9px, 1.1vh, 11px)", color: "#45474C", letterSpacing: "1px", textTransform: "uppercase" }}>
                        SATELLITE VERIFIED COORDINATES
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert("Launching multi-spectral interactive WebGIS container view overlay...")}
                    style={{
                      boxSizing: "border-box",
                      padding: "clamp(6px, 1vh, 8px) clamp(12px, 1.5vw, 16px)",
                      background: "transparent",
                      border: "1px solid rgba(39, 128, 196, 0.2)",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#EEF6FF"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(11px, 1.3vh, 13px)", color: "#2780C4", textAlign: "center" }}>
                      Open Interactive Map
                    </span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#2780C4", fontSize: "11px" }}>
                      ❖
                    </div>
                  </button>
                </div>

                {/* Documentation Row 3 */}
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "clamp(10px, 1.4vh, 14px) clamp(16px, 2vw, 20px)",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 1.5vw, 16px)" }}>
                    <div style={{ width: "clamp(36px, 4.5vh, 42px)", height: "clamp(36px, 4.5vh, 42px)", borderRadius: "48px", background: "#EEF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 1.6vh, 15px)", color: "#0F2F4C" }}>
                        Intelligence Officer (IO) Risk Assessment
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "clamp(9px, 1.1vh, 11px)", color: "#45474C", letterSpacing: "1px", textTransform: "uppercase" }}>
                        SECURITY CLEARANCE: TIER 1
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert("Compiling automated background audit cross-reference checks. Clean baseline verified.")}
                    style={{
                      boxSizing: "border-box",
                      padding: "clamp(6px, 1vh, 8px) clamp(12px, 1.5vw, 16px)",
                      background: "transparent",
                      border: "1px solid rgba(39, 128, 196, 0.2)",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#EEF6FF"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(11px, 1.3vh, 13px)", color: "#2780C4", textAlign: "center" }}>
                      View Risk Report
                    </span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#2780C4", fontSize: "11px" }}>
                      📊
                    </div>
                  </button>
                </div>

                {/* Documentation Row 4 */}
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "clamp(10px, 1.4vh, 14px) clamp(16px, 2vw, 20px)",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 1.5vw, 16px)" }}>
                    <div style={{ width: "clamp(36px, 4.5vh, 42px)", height: "clamp(36px, 4.5vh, 42px)", borderRadius: "48px", background: "#EEF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 1.6vh, 15px)", color: "#0F2F4C" }}>
                        Historical Yield & Soil Insights
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "clamp(9px, 1.1vh, 11px)", color: "#45474C", letterSpacing: "1px", textTransform: "uppercase" }}>
                        PRODUCTIVITY MATRIX 2019–2024
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert("Downloading raw JSON array metrics mapping seasonal multi-crop outputs...")}
                    style={{
                      boxSizing: "border-box",
                      padding: "clamp(6px, 1vh, 8px) clamp(12px, 1.5vw, 16px)",
                      background: "transparent",
                      border: "1px solid rgba(39, 128, 196, 0.2)",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#EEF6FF"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(11px, 1.3vh, 13px)", color: "#2780C4", textAlign: "center" }}>
                      View Data Table
                    </span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#2780C4", fontSize: "11px" }}>
                      ▦
                    </div>
                  </button>
                </div>
              </div>


              {/* Bottom Call to Action Elements */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(8px, 1.2vh, 12px)", flexShrink: 0 }}>
                {/* Master Site Visit Button precisely tracking gradient specs */}
                <button
                  onClick={() => alert(`Allocating secure inspection telemetry calendar slots for ${selectedDossier.id}.`)}
                  style={{
                    width: "100%",
                    height: "clamp(42px, 5.5vh, 52px)",
                    background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                    borderRadius: "9999px",
                    border: "none",
                    color: "#FFFFFF",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(14px, 1.8vh, 16px)",
                    cursor: "pointer",
                    boxShadow: "0px 12px 24px -8px rgba(9, 20, 38, 0.4)",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.95"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  BOOK SITE VISIT
                </button>

                {/* Verified encryption metadata line */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "11px" }}>🛡️</span>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(9px, 1.1vh, 11px)",
                      color: "#45474C",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    BANK-GRADE ENCRYPTION & VERIFIED VERIFICATION
                  </span>
                </div>
              </div>
            </div>

            {/* ─── RIGHT PANE (25% Base Anchor) ─── */}
            <div
              style={{
                boxSizing: "border-box",
                width: "clamp(220px, 20vw, 272px)",
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
              }}
            >
              {/* Secondary Support Widget Card */}
              <div
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  height: "clamp(180px, 28vh, 220px)",
                  background: "#0F2F4C",
                  borderRadius: "32px",
                  padding: "clamp(20px, 3vh, 32px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h4
                    style={{
                      margin: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(16px, 2vh, 18px)",
                      color: "#FFFFFF",
                    }}
                  >
                    Need legal help?
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(12px, 1.5vh, 14px)",
                      color: "#CFE5FF",
                      lineHeight: "1.4",
                    }}
                  >
                    Our in-house advocates can help with local documentation.
                  </p>
                </div>

                <button
                  onClick={() => alert("Launching encrypted websocket connection array with premium regional legal counsel...")}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(12px, 1.5vh, 14px)",
                      color: "#A5CCF2",
                      letterSpacing: "1.4px",
                      textTransform: "uppercase",
                    }}
                  >
                    CHAT WITH SUPPORT
                  </span>
                  <span style={{ color: "#A5CCF2", fontWeight: "bold", fontSize: "14px" }}>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
