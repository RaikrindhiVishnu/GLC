"use client";

import Image from "next/image";

export default function SustainableYieldsBanner() {
  return (
    <section
      id="sustainable-yields"
      style={{
        width: "1280px",
        height: "500px",
        margin: "70px auto",
        position: "relative",
        borderRadius: "48px",
        overflow: "hidden",
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
    >
      <img
        src="/assets/home/SustainableYieldsBanner/yieldsbanner.svg"
        alt="Sustainable Practices"
        style={{ 
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover" 
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, #131600 0%, rgba(19, 22, 0, 0.4) 50%, rgba(19, 22, 0, 0) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "64px",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            maxWidth: "585px",
            margin: "0 0 24px 0",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "48px",
            lineHeight: "48px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Sustainable Practices for Generational Wealth
        </h2>

        <button
          style={{
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 40px",
            width: "265px",
            height: "54px",
            background: "none",
            border: "3px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "9999px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#FFFFFF",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 1)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            e.currentTarget.style.background = "none";
          }}
        >
          Organic Farming Setup
        </button>
      </div>
    </section>
  );
}
