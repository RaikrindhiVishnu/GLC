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

interface MapWrapperProps {
  onLocationChange?: (location: { lat: number; lng: number }) => void;
  onPolygonChange?: (polygon: { lat: number; lng: number }[]) => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
  initialLocation?: { lat: number; lng: number };
  initialPolygon?: { lat: number; lng: number }[];
  viewOnly?: boolean;
  onMapClick?: () => void;
  polygonColor?: string;
  polygonFillColor?: string;
  polygonDashArray?: string;
  polygonWeight?: number;
}

export default function MapWrapper(props: MapWrapperProps) {
  return <InteractiveMap {...props} />;
}
