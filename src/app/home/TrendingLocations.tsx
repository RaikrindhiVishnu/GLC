"use client";

import Image from "next/image";

const locations = [
  { id: "loc-tanuku", name: "Tanuku", img: "/assets/home/TrendingLocations/tanuku.svg" },
  { id: "loc-bhimavaram", name: "Bhimavaram", img: "/assets/home/TrendingLocations/bhimavaram.svg" },
  { id: "loc-rajahmundry", name: "Rajahmundary", img: "/assets/home/TrendingLocations/rajamudry.svg" },
  { id: "loc-vizag", name: "Vizag", img: "/assets/home/TrendingLocations/vizag.svg" },
];

export default function TrendingLocations() {
  return (
    <section
      id="trending-locations"
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "70px 80px",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "1280px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "24px",
            lineHeight: "40px",
            color: "#0F2F4C",
          }}
        >
          Top Selling Locations
        </h2>
        <button
          style={{
            background: "none",
            border: "none",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "18px",
            lineHeight: "40px",
            color: "#0F2F4C",
            cursor: "pointer",
          }}
        >
          View All
        </button>
      </div>

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          width: "1280px",
          overflowX: "auto",
          paddingBottom: "10px",
          scrollbarWidth: "none", // Hide scrollbar for cleaner look
          msOverflowStyle: "none",
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          #trending-locations ::-webkit-scrollbar { display: none; }
        `}} />
        {locations.map((loc) => (
          <div
            key={loc.id}
            style={{
              position: "relative",
              width: "320px",
              height: "320px",
              minWidth: "320px",
              borderRadius: "48px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Image + Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))",
                zIndex: 1,
              }}
            />
            <Image
              src={loc.img}
              alt={loc.name}
              fill
              style={{ objectFit: "cover" }}
            />

            {/* Location Name */}
            <div
              style={{
                position: "absolute",
                left: "24px",
                top: "268px",
                zIndex: 2,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#FFFFFF",
              }}
            >
              {loc.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
