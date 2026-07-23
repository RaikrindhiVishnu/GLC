"use client";

import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#F1F5F9", borderRadius: "inherit" }}>
      <span style={{ color: "#0F2F4C", fontFamily: "sans-serif" }}>Loading map...</span>
    </div>
  )
});

export default InteractiveMap;
