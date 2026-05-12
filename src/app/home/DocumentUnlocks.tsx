"use client";

import Image from "next/image";

export default function DocumentUnlocks() {
  return (
    <section
      id="document-unlocks-section"
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "70px auto",
        padding: "0 80px",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* Top Part: Document Unlocks Hero */}
      <div
        style={{
          width: "1280px",
          height: "400px",
          background: "#FFFFFF",
          boxShadow: "0px 12px 40px rgba(0, 31, 63, 0.04)",
          borderRadius: "48px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Left: Dark Hero Area */}
        <div
          style={{
            width: "464px",
            height: "100%",
            background: "#000000",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Glowing Overlays */}
          <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "300px", height: "300px", background: "rgba(255, 255, 255, 0.1)", filter: "blur(32px)", borderRadius: "50%" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.7)" }}>Premium Access</span>
            <h2 style={{ margin: "16px 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "45px", color: "#FFFFFF" }}>Unlock Hidden Insights</h2>
          </div>

          {/* Member Status Card */}
          <div
            style={{
              padding: "24px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(6px)",
              borderRadius: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "46px", height: "46px", background: "rgba(25, 79, 129, 0.2)", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "22px", height: "22px", background: "#1C5A90", borderRadius: "50%" }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#1B588D", textTransform: "uppercase" }}>Member Status</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#FFFFFF" }}>Tier 1 Contributor</div>
              </div>
            </div>
            <div style={{ width: "100%", height: "4px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "99px", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "66.6%", background: "#1A5082", borderRadius: "99px" }} />
            </div>
            <div style={{ textAlign: "right", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "10px", color: "rgba(255, 255, 255, 0.5)" }}>4/6 CREDITS USED</div>
          </div>
        </div>

        {/* Right: Content Area */}
        <div
          style={{
            flex: 1,
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C5.79086 0 4 1.79086 4 4V7H3C1.34315 7 0 8.34315 0 10V18C0 19.6569 1.34315 21 3 21H13C14.6569 21 16 19.6569 16 18V10C16 8.34315 14.6569 7 13 7H12V4C12 1.79086 10.2091 0 8 0ZM8 2C9.10457 2 10 2.89543 10 4V7H6V4C6 2.89543 6.89543 2 8 2Z" fill="#2780C4"/>
            </svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#2780C4", textTransform: "uppercase" }}>Document Unlocks</span>
          </div>
          <h3 style={{ margin: "0 0 24px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "30px", lineHeight: "36px", color: "#001F3F" }}>
            4 Premium report credits remaining.
          </h3>
          <p style={{ margin: "0 0 40px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#64748B", maxWidth: "520px" }}>
            Use them to access deep-dive architectural surveys, soil analysis reports, and exclusive heritage archive data points curated by our editorial team.
          </p>
          <button
            style={{
              width: "214px",
              height: "60px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              border: "2px solid #2780C4",
              borderRadius: "9999px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "2.4px",
              color: "#FFFFFF",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            GET PREMIUM
          </button>
        </div>
      </div>

      {/* Bottom Part: Primary Listing Status */}
      <div
        style={{
          width: "1280px",
          height: "256px",
          display: "flex",
          gap: "32px",
        }}
      >
        {/* Left: Listing Photo */}
        <div
          style={{
            flex: "0 0 842.67px",
            height: "100%",
            borderRadius: "48px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="/assets/home/DocumentUnlocks/doucmentsunlock.svg"
            alt="Primary Listing"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              display: "block" 
            }}
          />
          {/* No overlay needed as text is built into the SVG */}
        </div>

        {/* Right: Status Card */}
        <div
          style={{
            flex: 1,
            height: "100%",
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
            border: "1px solid #EDEEEF",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", color: "#45474C", textTransform: "uppercase" }}>Listing Status</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#191C1D" }}>Visibility</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#2780C4" }}>Premium</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#191C1D" }}>Inquiries</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#091426" }}>24 Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
