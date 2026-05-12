"use client";

export default function TransformingLegacyGallery() {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "60px auto 120px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        padding: "0 24px",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: "32px",
          color: "#001F3F",
          textAlign: "center",
        }}
      >
        Transforming Land into Legacy
      </h2>

      {/* Gallery Carousel Array */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Card 1: Action Trigger "Involve" */}
        <div
          style={{
            width: "170px",
            height: "138px",
            borderRadius: "20px",
            background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "2px solid #FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", letterSpacing: "0.5px" }}>
            Involve
          </span>
        </div>

        {/* Photo Block 2 */}
        <div
          style={{
            width: "256px",
            height: "193px",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
            background: "#FFFFFF",
          }}
        >
          <img
            src="/assets/search/image2.4.svg"
            alt="Farmland high angle view"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Focal Vertical Tower Photo Block 3 */}
        <div
          style={{
            width: "220px",
            height: "318px",
            borderRadius: "52px",
            overflow: "hidden",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.18)",
            border: "4px solid #FFFFFF",
            background: "#FFFFFF",
          }}
        >
          <img
            src="/assets/search/image3.3.svg"
            alt="Golden premium yielding view"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Photo Block 4 */}
        <div
          style={{
            width: "252px",
            height: "193px",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
            background: "#FFFFFF",
          }}
        >
          <img
            src="/assets/search/image2.6.svg"
            alt="Agronomy ongoing working harvest"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Card 5: Action Trigger "Impact" */}
        <div
          style={{
            width: "170px",
            height: "138px",
            borderRadius: "20px",
            background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "2px solid #FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", letterSpacing: "0.5px" }}>
            Impact
          </span>
        </div>
      </div>
    </section>
  );
}
