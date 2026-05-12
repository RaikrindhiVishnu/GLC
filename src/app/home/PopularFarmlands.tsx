"use client";

import Image from "next/image";

const farmlands = [
  {
    id: "glc-sos-01",
    title: "GLC SOS 01",
    location: "Vizag, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/homesection2/glc1.svg",
    tag: "Most Viewed",
  },
  {
    id: "glc-sos-02",
    title: "GLC SOS-02",
    location: "Tanuku, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/homesection2/glc2.svg",
    tag: "Trending Listing",
  },
  {
    id: "glc-sos-03",
    title: "GLC SOS 03",
    location: "Bhimavaram, A.P.",
    description: "Prime editorial land parcel featuring rich soil biodiversity and vintage irrigation architecture.",
    img: "/assets/home/glcsos3.svg",
    tag: "Trending Listing",
  },
];

export default function PopularFarmlands() {
  return (
    <section
      id="popular-farmlands"
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
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "36px",
            color: "#0F2F4C",
          }}
        >
          Most Popular Farmlands
        </h2>
        <button
          style={{
            background: "none",
            border: "none",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "36px",
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
          gap: "26.62px",
          width: "1280px",
          overflowX: "auto",
          paddingBottom: "20px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
          #popular-farmlands ::-webkit-scrollbar { display: none; }
        `}} />
        {farmlands.map((land) => (
          <div
            key={land.id}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "600.23px",
              height: "260.43px",
              minWidth: "600.23px",
              background: "#FFFFFF",
              boxShadow: "0px 9.98px 33.28px rgba(0, 31, 63, 0.04)",
              borderRadius: "39.94px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Left Side: Image */}
            <div
              style={{
                width: "266.58px",
                height: "100%",
                position: "relative",
              }}
            >
              <Image
                src={land.img}
                alt={land.title}
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Tag Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  padding: "5px 13px",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(5px)",
                  borderRadius: "8000px",
                  boxShadow: "0px 10px 33px rgba(0, 31, 63, 0.04)",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "10px",
                    color: "#001F3F",
                    whiteSpace: "nowrap",
                  }}
                >
                  {land.tag}
                </span>
              </div>
            </div>

            {/* Right Side: Content */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "33px",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "24px",
                    color: "#001F3F",
                    letterSpacing: "-1.25px",
                  }}
                >
                  {land.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  {/* Location Pin Icon Placeholder */}
                  <div style={{ width: "8px", height: "10px", background: "#43474E", clipPath: "polygon(50% 0%, 100% 35%, 100% 70%, 50% 100%, 0% 70%, 0% 35%)" }} />
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "11.6px", color: "#43474E" }}>
                    {land.location}
                  </span>
                </div>
                <div style={{ width: "40px", height: "1px", background: "rgba(0, 31, 63, 0.2)", marginTop: "8px" }} />
              </div>

              <p
                style={{
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "11.6px",
                  lineHeight: "19px",
                  color: "#43474E",
                  maxWidth: "216px",
                }}
              >
                {land.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
