"use client";

import Image from "next/image";

const filterButtons = [
  {
    id: "search-farmland",
    label: "Search for Farmland",
    icon: "/assets/home/FiltersScreen/Icons.svg",
    width: 50,
    height: 46.65,
  },
  {
    id: "pool-buying",
    label: "Pool Buying",
    icon: "/assets/home/FiltersScreen/Icons (1).svg",
    width: 47,
    height: 47,
  },
  {
    id: "my-assets",
    label: "My Assets",
    icon: "/assets/home/FiltersScreen/Icons (2).svg",
    width: 61,
    height: 47,
  },
  {
    id: "verification-farmland",
    label: "Verification of farmland",
    icon: "/assets/home/FiltersScreen/Icons (3).svg",
    width: 43,
    height: 47,
  },
  {
    id: "maintenance-farmland",
    label: "Maintainence of farmland",
    icon: "/assets/home/FiltersScreen/Icons (4).svg",
    width: 45,
    height: 46.6,
  },
  {
    id: "sell-land",
    label: "Sell your land",
    icon: "/assets/home/FiltersScreen/Icons (5).svg",
    width: 47,
    height: 47,
  },
];

export default function FiltersScreen() {
  return (
    <section
      id="filters-section"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "center",
        padding: "70px 0", // Accounting for the gap from hero
        gap: "16px",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          width: "1280px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "24px",
              gap: "25px",
              width: "200px",
              height: "180px",
              background: "#FFFFFF",
              borderRadius: "32px",
              border: "1px solid #E5E7EB",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.02)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.02)";
            }}
          >
            <div
              style={{
                width: `${btn.width}px`,
                height: `${btn.height}px`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Image src={btn.icon} alt={btn.label} width={btn.width} height={btn.height} priority />
            </div>
            <div
              style={{
                width: "100%",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "center",
                letterSpacing: "1.4px",
                textTransform: "capitalize",
                color: "#45474C",
              }}
            >
              {btn.label}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
