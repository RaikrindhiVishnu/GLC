"use client";

export default function PlatformStats() {
  const stats = [
    { value: "₹45Cr+", label: "MANAGED ASSETS" },
    { value: "100%", label: "VERIFIED CLEAR TITLES" },
    { value: "1,200+", label: "ACTIVE INVESTORS" },
  ];

  return (
    <section
      id="platform-stats"
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "70px 80px",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          maxWidth: "700px",
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "48px",
          textAlign: "center",
          color: "#0F2F4C",
          letterSpacing: "-1.2px",
        }}
      >
        Empowering investors through data-driven agricultural assets.
      </h2>

      {/* Stats Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "1216px",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "48px",
                lineHeight: "60px",
                color: "#0F2F4C",
                textAlign: "center",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "1.4px",
                color: "#45474C",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
