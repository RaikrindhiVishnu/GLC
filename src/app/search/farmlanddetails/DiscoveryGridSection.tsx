"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Array of premium static regional recommendations mapping exact requested text strings
const regionalOpportunities = [
  {
    id: "match-1",
    title: "Lush Orchard",
    subtext: "Citrus Grove Estate",
    price: "₹5.2 Cr",
    area: "320 Acres",
    yield: "High Yield",
    img: "/assets/search/farmlanddetails/Lush Orchard.svg",
  },
  {
    id: "match-2",
    title: "Highland Plantation",
    subtext: "Sprawling Terrain",
    price: "₹1.15 Cr",
    area: "200 Acres",
    yield: "Medium Yield",
    img: "/assets/search/farmlanddetails/Sprawling Plantation.svg",
  },
  {
    id: "match-4",
    title: "Emerald Plains",
    subtext: "Fertile Field",
    price: "₹3.8 Cr",
    area: "150 Acres",
    yield: "Premium Grade",
    img: "/assets/search/farmlanddetails/Fertile Field.svg",
  },
  {
    id: "match-5",
    title: "Golden Grove Tract",
    subtext: "Premium Reserve",
    price: "₹6.2 Cr",
    area: "450 Acres",
    yield: "Maximum Yield",
    img: "/assets/search/image2.1.png",
  },
];

interface DiscoveryGridSectionProps {
  onOpenCompare?: (id: string) => void;
}

export default function DiscoveryGridSection({ onOpenCompare }: DiscoveryGridSectionProps = {}) {
  const router = useRouter();

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "64px auto 0",
        padding: "0 24px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* Scope CSS rule to hide the physical scrollbar visually while retaining smooth drag/swipe behavior */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none !important;
            }
            .no-scrollbar {
              -ms-overflow-style: none !important;
              scrollbar-width: none !important;
            }
          `,
        }}
      />

      {/* Section Header */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "24px",
            color: "#131600",
            letterSpacing: "-1.5px",
            margin: 0,
          }}
        >
          Explore Similar Opportunities.
        </h2>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#45474C",
          }}
        >
          Verified assets in the same region with high appreciation potential.
        </span>
      </div>

      {/* Discovery Multi-Card Grid / Horizontal Scroll track with scrollbar physically suppressed */}
      <div
        className="no-scrollbar"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          gap: "32px",
          overflowX: "auto",
          paddingBottom: "24px",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {regionalOpportunities.map((item, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: "357.33px",
              height: "540px",
              background: "#FFFFFF",
              boxShadow: "0px 40px 40px -15px rgba(9, 20, 38, 0.04)",
              borderRadius: "48px",
              padding: "16px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {/* Top Background Image wrapper */}
            <div
              style={{
                width: "100%",
                height: "256px",
                background: "#F3F4F5",
                borderRadius: "32px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => {
                router.push(`/search/farmlanddetails?id=${item.id}`);
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.currentTarget.src = "/assets/compareassets/farm1.jpg";
                }}
              />

              {/* Top-Left Tag Pill */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "#D7EE44",
                  borderRadius: "9999px",
                  padding: "6px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {/* Tiny Dark Indicator Dot */}
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#191E00",
                    borderRadius: "9999px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#191E00",
                  }}
                >
                  ACTIVE YIELD
                </span>
              </div>
            </div>

            {/* Title & Price Stack */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "0 8px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#75777D",
                  }}
                >
                  {item.subtext}
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#131600",
                    marginTop: "2px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "190px",
                  }}
                >
                  {item.title}
                </span>
              </div>

              {/* Price String */}
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "20px",
                  color: "#091426",
                  marginTop: "16px",
                }}
              >
                {item.price}
              </span>
            </div>

            {/* Middle Split Borders Matrix */}
            <div
              style={{
                width: "100%",
                borderWidth: "1px 0px",
                borderStyle: "solid",
                borderColor: "#F3F4F5",
                padding: "12px 16px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Left Column: Area */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#75777D",
                  }}
                >
                  AREA
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#191C1D",
                  }}
                >
                  {item.area}
                </span>
              </div>

              {/* Vertical line divider */}
              <div style={{ width: "1px", height: "32px", background: "#E7E8E9" }} />

              {/* Right Column: Yield */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-end" }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#75777D",
                  }}
                >
                  YIELD
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#191C1D",
                  }}
                >
                  {item.yield}
                </span>
              </div>
            </div>

            {/* Bottom Compare Action Pill */}
            <div style={{ width: "100%", paddingTop: "4px" }}>
              <button
                onClick={() => {
                  router.push("/home/compareassets");
                }}
                style={{
                  width: "100%",
                  height: "48px",
                  background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                  borderRadius: "30px",
                  border: "none",
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: "pointer",
                  letterSpacing: "0.35px",
                  boxShadow: "0px 4px 10px rgba(39, 128, 196, 0.2)",
                }}
              >
                Compare
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
