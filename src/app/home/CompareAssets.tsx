"use client";

import Image from "next/image";

const comparisonData = [
  {
    id: "comp-1",
    plots: [
      {
        title: "GLC SOS 01",
        location: "Vizag, Andhra Pradesh",
        img: "/assets/home/CompareAssets/compare1.svg",
        soil: "Red Sandy Loam",
        ph: "pH Level: 6.8 (Optimal)",
        yield: "5.2",
      },
      {
        title: "GLC SOS 02",
        location: "Guntur, Andhra Pradesh",
        img: "/assets/home/CompareAssets/compare2.svg",
        soil: "Black Cotton Soil",
        ph: "pH Level: 7.4 (Alkaline)",
        yield: "7.8",
      }
    ]
  },
  {
    id: "comp-2",
    plots: [
      {
        title: "WHEAT RIDGE X",
        location: "Srikakulam, A.P",
        img: "/assets/home/CompareAssets/compare3.svg",
        soil: "Alluvial Soil",
        ph: "pH Level: 7.0 (Neutral)",
        yield: "6.5",
      },
      {
        title: "PALM GROVE",
        location: "Nellore, A.P",
        img: "/assets/home/CompareAssets/compare4.svg",
        soil: "Laterite Soil",
        ph: "pH Level: 6.2 (Acidic)",
        yield: "4.9",
      }
    ]
  }
];

export default function CompareAssets() {
  return (
    <section
      id="compare-assets"
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "70px auto",
        padding: "0 80px",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "2.4px",
            textTransform: "uppercase",
            color: "#0F2F4C",
          }}
        >
          Portfolio Intelligence
        </span>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "24px",
            lineHeight: "48px",
            letterSpacing: "-1.2px",
            color: "#0F2F4C",
          }}
        >
          Compare Premium Assets
        </h2>
      </div>

      {/* Comparison Cards Carousel */}
      <div
        style={{
          display: "flex",
          gap: "48px",
          width: "1280px",
          overflowX: "auto",
          paddingBottom: "20px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          #compare-assets ::-webkit-scrollbar { display: none; }
        `}} />
        {comparisonData.map((comp) => (
          <div
            key={comp.id}
            style={{
              flex: "0 0 730px",
              height: "695px",
              background: "#FFFFFF",
              borderRadius: "48px",
              border: "1px solid #EDEEEF",
              padding: "48px",
              boxSizing: "border-box",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              boxShadow: "0px 12px 40px rgba(0, 31, 63, 0.04)",
            }}
          >
            {/* Top Previews Row */}
            <div style={{ display: "flex", gap: "24px" }}>
              {comp.plots.map((plot, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: "295px",
                    background: "#FFFFFF",
                    border: "1px solid #EDEEEF",
                    borderRadius: "32px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div style={{ position: "relative", height: "176px", borderRadius: "16px", overflow: "hidden" }}>
                    <Image src={plot.img} alt={plot.title} fill style={{ objectFit: "cover" }} />
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        padding: "4px 12px",
                        background: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(6px)",
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <div style={{ width: "8px", height: "8px", background: "#006D37", borderRadius: "50%" }} />
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#006D37", textTransform: "uppercase" }}>Verified</span>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#001F3F" }}>{plot.title}</h3>
                    <p style={{ margin: "4px 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#43474E" }}>{plot.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Metrics Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", padding: "0 8px" }}>
              {/* Soil Row */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", color: "#43474E" }}>{comp.plots[0].soil}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(67, 71, 78, 0.6)" }}>{comp.plots[0].ph}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", color: "#43474E" }}>{comp.plots[1].soil}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(67, 71, 78, 0.6)" }}>{comp.plots[1].ph}</span>
              </div>

              {/* Yield Row */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", color: "#001F3F" }}>{comp.plots[0].yield}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#43474E" }}>Crores</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", color: "#001F3F" }}>{comp.plots[1].yield}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#43474E" }}>Crores</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              style={{
                position: "absolute",
                bottom: "48px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "345px",
                height: "52px",
                background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                border: "2px solid #2780C4",
                borderRadius: "9999px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(-50%) scale(1)")}
            >
              View Comparison
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
