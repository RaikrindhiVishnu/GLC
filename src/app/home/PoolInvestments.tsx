"use client";

export default function PoolInvestments() {
  return (
    <section
      id="pool-investments"
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "70px auto",
        padding: "0 80px",
        background: "#FFFFFF",
        display: "flex",
        gap: "32px",
        height: "600px",
      }}
    >
      {/* Left Panel: Pool Investments */}
      <div
        style={{
          flex: "0 0 733px",
          height: "600px",
          background: "#FFFFFF",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "48px",
          padding: "48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          border: "1px solid #EDEEEF",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "40px",
              color: "#131600",
            }}
          >
            Pool Investments
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#45474C",
            }}
          >
            Collective ownership of high-yield assets.
          </p>
        </div>

        {/* Donut Chart & Legend Area */}
        <div style={{ display: "flex", alignItems: "center", gap: "128px" }}>
          {/* Donut Chart */}
          <div style={{ position: "relative", width: "256px", height: "256px" }}>
            <svg width="256" height="256" viewBox="0 0 256 256" style={{ transform: "rotate(-90deg)" }}>
              {/* Background Circle */}
              <circle
                cx="128"
                cy="128"
                r="100"
                fill="transparent"
                stroke="#E7E8E9"
                strokeWidth="25"
              />
              {/* Progress Circle (3/4 = 75%) */}
              <circle
                cx="128"
                cy="128"
                r="100"
                fill="transparent"
                stroke="#2780C4"
                strokeWidth="25"
                strokeDasharray="628.318"
                strokeDashoffset={628.318 * 0.25}
                strokeLinecap="round"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "36px", color: "#091426" }}>3/4</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#45474C" }}>Seats Funded</span>
            </div>
          </div>

          {/* Legend & CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "12px", height: "12px", background: "#2780C4", borderRadius: "50%" }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#191C1D" }}>Secured Funding</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "12px", height: "12px", background: "#E7E8E9", borderRadius: "50%" }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#191C1D" }}>Available Slot</span>
            </div>
            <button
              style={{
                marginTop: "16px",
                padding: "12px 32px",
                background: "#091426",
                borderRadius: "9999px",
                border: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#FFFFFF",
                cursor: "pointer",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Join Pool
            </button>
          </div>
        </div>
      </div>

      {/* Right Panels Stack */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "32px", height: "600px" }}>
        {/* Active Deals Card */}
        <div
          style={{
            flex: 1,
            background: "linear-gradient(108.47deg, #121415 3.17%, #1C1F21 96.85%)",
            borderRadius: "48px",
            padding: "32px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Blue Corner Accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "128px",
              height: "128px",
              background: "#2780C4",
              borderRadius: "0px 0px 0px 9999px",
            }}
          />
          
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#FFFFFF" }}>Active Deals</h3>
            <p style={{ margin: "4px 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#8590A6" }}>Real-time status of your bids.</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", position: "relative", zIndex: 1 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", color: "#FFFFFF", lineHeight: 1 }}>1</div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#8590A6", letterSpacing: "1.2px", textTransform: "uppercase" }}>Token Blocked</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "16px", color: "#FFFFFF" }}>ID: GLC-482</div>
            </div>
          </div>
        </div>

        {/* My Assets Card */}
        <div
          style={{
            flex: 1,
            background: "#FFFFFF",
            border: "1px solid rgba(197, 198, 205, 0.1)",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "48px",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#131600" }}>My Assets</h3>
              <p style={{ margin: "4px 0 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C" }}>Portfolio Valuation</p>
            </div>
            {/* Shield Icon Placeholder */}
            <div style={{ width: "24px", height: "24px", background: "#2780C4", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "#FFFFFF", fontSize: "12px" }}>✓</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", color: "#091426" }}>₹1.42</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#091426" }}>Cr</span>
            </div>
            <div
              style={{
                padding: "4px 12px",
                background: "#131600",
                borderRadius: "9999px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                color: "#BCD225",
              }}
            >
              +12.4%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
