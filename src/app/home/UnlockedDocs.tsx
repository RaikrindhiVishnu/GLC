"use client";

import Image from "next/image";

const documents = [
  { id: "doc-1", title: "GLC SOS 01", status: "VERIFIED", date: "Oct 24, 2025" },
  { id: "doc-2", title: "GLC SOS 02", status: "VERIFIED", date: "Oct 24, 2025" },
  { id: "doc-3", title: "GLC SOS 03", status: "VERIFIED", date: "Oct 24, 2025" },
  { id: "doc-4", title: "GLC SOS 04", status: "VERIFIED", date: "Oct 24, 2025" },
  { id: "doc-5", title: "GLC SOS 05", status: "VERIFIED", date: "Oct 24, 2025" },
];

export default function UnlockedDocs() {
  return (
    <section
      id="unlocked-docs"
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
            lineHeight: "32px",
            color: "#0F2F4C",
          }}
        >
          Unlocked Docs
        </h2>
        <button
          style={{
            background: "none",
            border: "none",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "32px",
            color: "#0F2F4C",
            cursor: "pointer",
          }}
        >
          View All
        </button>
      </div>

      {/* Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          width: "1280px",
          overflowX: "auto",
          paddingBottom: "20px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          #unlocked-docs ::-webkit-scrollbar { display: none; }
        `}} />
        {documents.map((doc) => (
          <div
            key={doc.id}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "32px",
              width: "240px",
              height: "278.5px",
              minWidth: "240px",
              background: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              boxShadow: "0px 8px 32px rgba(0, 31, 63, 0.03)",
              backdropFilter: "blur(6px)",
              borderRadius: "48px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {/* PDF Icon Container */}
            <div
              style={{
                width: "96px",
                height: "96px",
                background: "rgba(255, 218, 216, 0.4)",
                backdropFilter: "blur(2px)",
                borderRadius: "9999px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              <Image
                src="/assets/home/pdf.svg"
                alt="PDF"
                width={30}
                height={30}
              />
            </div>

            {/* Text Content */}
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "#001F3F",
                  textAlign: "center",
                }}
              >
                {doc.title}
              </h3>

              {/* Status Badge */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                <svg width="14.67" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4L6 12L2 8L3.4 6.6L6 9.2L12.6 2.6L14 4Z" fill="#006D37"/>
                </svg>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "18px",
                    letterSpacing: "1.2px",
                    color: "#006D37",
                  }}
                >
                  {doc.status}
                </span>
              </div>

              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "18px",
                  letterSpacing: "0.3px",
                  color: "#43474E",
                  textAlign: "center",
                }}
              >
                {doc.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
