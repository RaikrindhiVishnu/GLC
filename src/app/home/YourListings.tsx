"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const listings = [
  { id: "listing-1", title: "GLC SOS 01", price: "₹85 Lakhs", img: "/assets/home/YourListings/glcsos1.svg" },
  { id: "listing-2", title: "GLC SOS 02", price: "₹1.2 Cr", img: "/assets/home/YourListings/glcsos2.svg" },
  { id: "listing-3", title: "GLC SOS 03", price: "₹95 Lakhs", img: "/assets/home/YourListings/glcsos3.svg" },
  { id: "listing-4", title: "GLC SOS 04", price: "₹2.4 Cr", img: "/assets/home/YourListings/glcsos4.svg" },
];

export default function YourListings() {
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
        shellRef.current.style.height = `${459 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="your-listings"
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "70px 0",
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div 
        ref={shellRef} 
        style={{ 
          position: "relative", 
          width: "1280px", 
          maxWidth: "100%", 
          height: "459px",
          flexShrink: 0 
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
            height: "459px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Exactly the original Hardcoded figma layout container elements with no strings modified */}
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
              Your Listings
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
              flexDirection: "row",
              gap: "32px",
              width: "1280px",
              overflowX: "auto",
              paddingBottom: "20px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              #your-listings ::-webkit-scrollbar { display: none; }
            `}} />
            {listings.map((item) => (
              <div
                key={item.id}
                style={{
                  position: "relative",
                  width: "296px",
                  height: "367px",
                  minWidth: "296px",
                  background: "#FFFFFF",
                  boxShadow: "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55)",
                  borderRadius: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "28px", 
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* Image */}
                <div
                  style={{
                    width: "240.25px",
                    height: "192px",
                    borderRadius: "15px",
                    overflow: "hidden",
                    position: "relative",
                    marginBottom: "16px",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    width: "240px",
                    margin: "0 0 4px 0",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#0F2F4C",
                  }}
                >
                  {item.title}
                </h3>

                {/* Price */}
                <p
                  style={{
                    width: "240px",
                    margin: "0 0 16px 0",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#0F2F4C",
                  }}
                >
                  {item.price}
                </p>

                {/* Button */}
                <button
                  style={{
                    width: "240px",
                    height: "52px",
                    background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                    borderRadius: "30px",
                    border: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
