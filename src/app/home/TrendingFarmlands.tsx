"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const trendingItems = [
  {
    id: "trending-1",
    title: "GLC SOS 01",
    location: "VIZAG, A.P",
    description: "High-yield sustainable corn production facility with automated irrigation...",
    tag: "HIGH YIELD 2025",
    tagColor: "rgba(0, 31, 63, 0.1)",
    tagTextColor: "#001F3F",
    img: "/assets/home/TrendingFarmlands/glcsos01.svg",
  },
  {
    id: "trending-2",
    title: "GLC SOS 02",
    location: "TAMILNADU",
    description: "Historic vineyard estate featuring boutique grape varieties and a climat...",
    tag: "MOST BOOKMARKED",
    tagColor: "rgba(207, 102, 103, 0.1)",
    tagTextColor: "#CF6667",
    img: "/assets/home/TrendingFarmlands/glcsos02.svg",
  },
  {
    id: "trending-3",
    title: "WHEAT RIDGE X",
    location: "SRIKAKULAM, A.P",
    description: "Expansive grain territory optimized for precision agriculture with drone...",
    tag: "HIGH YIELD 2024",
    tagColor: "rgba(0, 31, 63, 0.1)",
    tagTextColor: "#001F3F",
    img: "/assets/home/TrendingFarmlands/glcsos03.svg",
  },
];

export default function TrendingFarmlands() {
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
        shellRef.current.style.height = `${348.86 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="trending-farmlands"
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
          height: "348.86px",
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
            height: "348.86px",
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
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  lineHeight: "36px",
                  color: "#001F3F",
                  letterSpacing: "-0.6px",
                }}
              >
                Trending Farmlands
              </h2>
              <button
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "18px",
                  lineHeight: "20px",
                  color: "#001F3F",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                View all
              </button>
            </div>
          </div>

          {/* Cards Container */}
          <div
            style={{
              display: "flex",
              gap: "30.3px",
              width: "1280px",
              overflowX: "auto",
              paddingBottom: "20px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              #trending-farmlands ::-webkit-scrollbar { display: none; }
            `}} />
            {trendingItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "511.31px",
                  height: "260.86px",
                  minWidth: "511.31px",
                  background: "#FFFFFF",
                  boxShadow: "0px 11.36px 37.87px rgba(0, 31, 63, 0.04)",
                  borderRadius: "45.45px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {/* Left Side: Image */}
                <div
                  style={{
                    width: "204.52px",
                    height: "100%",
                    position: "relative",
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

                {/* Right Side: Content */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "30.3px",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "7.58px" }}>
                    {/* Tag */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "3.78px 11.36px",
                        background: item.tagColor,
                        borderRadius: "9467px",
                        width: "fit-content",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "9.46px",
                          lineHeight: "14px",
                          letterSpacing: "0.94px",
                          textTransform: "uppercase",
                          color: item.tagTextColor,
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        margin: "7.5px 0 0 0",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: "24px",
                        lineHeight: "28px",
                        color: "#001F3F",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "13.25px",
                        lineHeight: "22px",
                        color: "#43474E",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "22.7px",
                      borderTop: "0.94px solid #EDEEEF",
                      gap: "7.58px",
                    }}
                  >
                     <svg width="10" height="12" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                        <path d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 16 6 16C6 16 12 10.5 12 6C12 2.68629 9.31371 0 6 0ZM6 8.5C4.61929 8.5 3.5 7.38071 3.5 6C3.5 4.61929 4.61929 3.5 6 3.5C7.38071 3.5 8.5 4.61929 8.5 6C8.5 7.38071 7.38071 8.5 6 8.5Z" fill="#64748B"/>
                     </svg>
                     <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "11.36px",
                        lineHeight: "15px",
                        letterSpacing: "0.28px",
                        textTransform: "uppercase",
                        color: "#64748B",
                      }}
                     >
                       {item.location}
                     </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
