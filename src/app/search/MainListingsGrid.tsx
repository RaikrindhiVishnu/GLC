"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Absolute data parity mapping precisely to the 6 newly uploaded search assets
const gridMatches = [
  {
    id: "match-1",
    title: "GLC SOS 01",
    price: "₹4.8Cr",
    tags: ["RED LATERITE", "ACTIVE YIELD"],
    description: "High-yield mango grove with established irrigation systems and road access.",
    img: "/assets/search/image2.1.png", // Direct mapping to uploaded asset
    layout: "image-top",
    cardHeight: "583px",
    imageHeight: "320px",
  },
  {
    id: "match-2",
    title: "GLC SOS 02",
    price: "₹6.2Cr",
    tags: ["EXPANSION READY"],
    description: "Elevated terrain suitable for premium grape varieties and boutique agro- tourism.",
    img: "/assets/search/image2.2.svg", // Direct mapping to uploaded asset
    layout: "text-top",
    cardHeight: "636px",
    imageHeight: "373px",
  },
  {
    id: "match-3",
    title: "GLC SOS 03",
    price: "₹3.9Cr",
    tags: ["PRISTINE WATER", "ORGANIC CERT"],
    description: "Unrivaled water rights and pure organic certification for premium exports.",
    img: "/assets/search/image2.3.svg", // Direct mapping to uploaded asset
    layout: "image-top",
    cardHeight: "623px",
    imageHeight: "384px",
  },
  {
    id: "match-4",
    title: "GLC SOS 04",
    price: "₹4.8Cr",
    tags: ["RED LATERITE", "ACTIVE YIELD"],
    description: "High-yield mango grove with established irrigation systems and road access.",
    img: "/assets/search/image2.4.svg", // Direct mapping to uploaded asset
    layout: "image-top",
    cardHeight: "583px",
    imageHeight: "320px",
  },
  {
    id: "match-5",
    title: "GLC SOS 05",
    price: "₹6.2Cr",
    tags: ["EXPANSION READY"],
    description: "Elevated terrain suitable for premium grape varieties and boutique agro- tourism.",
    img: "/assets/search/image2.5.svg", // Direct mapping to uploaded asset
    layout: "text-top",
    cardHeight: "636px",
    imageHeight: "373px",
  },
  {
    id: "match-6",
    title: "GLC SOS 06",
    price: "₹3.9Cr",
    tags: ["PRISTINE WATER", "ORGANIC CERT"],
    description: "Unrivaled water rights and pure organic certification for premium exports.",
    img: "/assets/search/image2.6.svg", // Direct mapping to uploaded asset
    layout: "image-top",
    cardHeight: "623px",
    imageHeight: "384px",
  },
];

export default function MainListingsGrid() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({
    "match-1": true, // pre-fill bookmark to demonstrate interactive toggle states
  });

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1184px", // Parity with Frame width
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* ─── SECTION HEADER ─── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 16px" }}>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "32px",
            color: "#131600",
          }}
        >
          Andhra Pradesh (18 Matches)
        </h2>

        {/* 3 Indicator Dots on the right */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "8px", height: "8px", background: "#0F2F4C", borderRadius: "9999px" }} />
          <div style={{ width: "8px", height: "8px", background: "#E1E3E4", borderRadius: "9999px" }} />
          <div style={{ width: "8px", height: "8px", background: "#E1E3E4", borderRadius: "9999px" }} />
        </div>
      </div>

      {/* ─── 3-COLUMN GRID ─── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
        }}
      >
        {gridMatches.map((item) => {
          const isBookmarked = !!bookmarks[item.id];

          if (item.layout === "image-top") {
            return (
              <div
                key={item.id}
                onClick={() => router.push(`/search/farmlanddetails?id=${item.id}`)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "30px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: item.cardHeight,
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #F1F5F9",
                  transition: "transform 0.2s ease, boxShadow 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.05)";
                }}
              >
                {/* Top Image Box */}
                <div style={{ position: "relative", width: "100%", height: item.imageHeight, flexShrink: 0 }}>
                  <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

                  {/* Circular 48x48 Heart Button */}
                  <button
                    onClick={(e) => toggleBookmark(item.id, e)}
                    style={{
                      position: "absolute",
                      top: "24px",
                      right: "24px",
                      width: "48px",
                      height: "48px",
                      background: "#FFFFFF",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      borderRadius: "9999px",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                      zIndex: 5,
                    }}
                  >
                    <svg width="20" height="18" viewBox="0 0 24 24" fill={isBookmarked ? "#2780C4" : "none"} stroke="#2780C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>

                {/* Bottom Content Box with exactly 32px padding */}
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {/* Tags */}
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "4px 12px",
                            background: "#E7E8E9",
                            borderRadius: "9999px",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "10px",
                            lineHeight: "15px",
                            color: "#45474C",
                            textTransform: "uppercase",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        margin: "12px 0 0 0",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "32px",
                        color: "#131600",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#45474C",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action Button Row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px" }}>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "28px",
                        color: "#091426",
                      }}
                    >
                      {item.price}
                    </span>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/search/farmlanddetails?id=${item.id}`);
                      }}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#00629E",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            );
          } else {
            // Text-Top Layout View
            return (
              <div
                key={item.id}
                onClick={() => router.push(`/search/farmlanddetails?id=${item.id}`)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "30px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: item.cardHeight,
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #F1F5F9",
                  transition: "transform 0.2s ease, boxShadow 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.05)";
                }}
              >
                {/* Top Content Box */}
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "4px 12px",
                            background: "#E7E8E9",
                            borderRadius: "9999px",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "10px",
                            lineHeight: "15px",
                            color: "#45474C",
                            textTransform: "uppercase",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3
                      style={{
                        margin: "12px 0 0 0",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "32px",
                        color: "#131600",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        margin: "4px 0 0 0",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#45474C",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px" }}>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "28px",
                        color: "#091426",
                      }}
                    >
                      {item.price}
                    </span>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/search/farmlanddetails?id=${item.id}`);
                      }}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#00629E",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      View Details
                    </span>
                  </div>
                </div>

                {/* Bottom Image Box */}
                <div style={{ position: "relative", width: "100%", height: item.imageHeight, flexShrink: 0 }}>
                  <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

                  {/* Floating Heart Button at Bottom Right */}
                  <button
                    onClick={(e) => toggleBookmark(item.id, e)}
                    style={{
                      position: "absolute",
                      bottom: "24px",
                      right: "24px",
                      width: "48px",
                      height: "48px",
                      background: "#FFFFFF",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      borderRadius: "9999px",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                      zIndex: 5,
                    }}
                  >
                    <svg width="20" height="18" viewBox="0 0 24 24" fill={isBookmarked ? "#2780C4" : "none"} stroke="#2780C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
