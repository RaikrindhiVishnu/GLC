"use client";

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

interface InteractiveMapProps {
  onLocationChange?: (location: { lat: number; lng: number }) => void;
  onPolygonChange?: (polygon: { lat: number; lng: number }[]) => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
  initialLocation?: { lat: number; lng: number };
  initialPolygon?: { lat: number; lng: number }[];
  viewOnly?: boolean;
}

export default function InteractiveMap({ onLocationChange, onPolygonChange, onFullscreenChange, initialLocation, initialPolygon, viewOnly }: InteractiveMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const drawnItemsRef = useRef<L.FeatureGroup | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const polygonLayerRef = useRef<L.Polygon | null>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const locationCbRef = useRef(onLocationChange);
  const polygonCbRef = useRef(onPolygonChange);
  const fullscreenCbRef = useRef(onFullscreenChange);

  useEffect(() => {
    locationCbRef.current = onLocationChange;
    polygonCbRef.current = onPolygonChange;
    fullscreenCbRef.current = onFullscreenChange;
  }, [onLocationChange, onPolygonChange, onFullscreenChange]);

  const toggleFullscreen = () => {
    const next = !isFullscreen;
    setIsFullscreen(next);
    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 100);
    if (fullscreenCbRef.current) {
      fullscreenCbRef.current(next);
    }
  };

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("mapFullscreenChange", { detail: isFullscreen }));
    return () => {
      if (isFullscreen) {
        window.dispatchEvent(new CustomEvent("mapFullscreenChange", { detail: false }));
      }
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current || mapInstanceRef.current) return;

    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    // Increased maxZoom for drawing fine details
    const initialCenter = initialLocation ? [initialLocation.lat, initialLocation.lng] as L.LatLngTuple : [17.3850, 78.4867] as L.LatLngTuple;
    const map = L.map(mapRef.current, { attributionControl: false, maxZoom: 22 }).setView(initialCenter, initialLocation ? 16 : 12);
    mapInstanceRef.current = map;

    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
        if (!initialLocation && !viewOnly) {
          mapInstanceRef.current.locate({ setView: true, maxZoom: 16 });
        }
      }
    }, 250);

    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 22,
      maxNativeZoom: 19
    }).addTo(map);

    if (!viewOnly) {
      const provider = new OpenStreetMapProvider();
      const searchControl = new (GeoSearchControl as any)({
        provider: provider,
        style: "bar",
        showMarker: false, 
        retainZoomLevel: false,
        animateZoom: true,
        autoClose: true,
        searchLabel: "Search for a location...",
        keepResult: true,
      });
      map.addControl(searchControl);
    }

    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    drawnItemsRef.current = drawnItems;

    if (initialLocation) {
      markerRef.current = L.marker([initialLocation.lat, initialLocation.lng]).addTo(drawnItems);
    }

    if (initialPolygon && initialPolygon.length > 0) {
      const latlngs = initialPolygon.map(p => [p.lat, p.lng] as L.LatLngTuple);
      polygonLayerRef.current = L.polygon(latlngs, { color: '#004A78', weight: 3, fillColor: '#004A78', fillOpacity: 0.2 }).addTo(drawnItems);
      map.fitBounds(polygonLayerRef.current.getBounds(), { padding: [20, 20] });
    }

    if (!viewOnly) {
      const drawControl = new L.Control.Draw({
        edit: { featureGroup: drawnItems },
        draw: {
          polygon: { allowIntersection: false, showArea: true, shapeOptions: { color: '#004A78', weight: 3 } },
          polyline: false,
          rectangle: false,
          circle: false,
          circlemarker: false,
          marker: true
        }
      });
      map.addControl(drawControl);
    }

    map.on(L.Draw.Event.CREATED, (event: any) => {
      const layer = event.layer;
      const type = event.layerType;

      if (type === "marker") {
        if (markerRef.current) {
          drawnItems.removeLayer(markerRef.current);
        }
        markerRef.current = layer;
        drawnItems.addLayer(layer);
        
        const latlng = layer.getLatLng();
        if (locationCbRef.current) {
          locationCbRef.current({ lat: latlng.lat, lng: latlng.lng });
        }
      }

      if (type === "polygon") {
        if (polygonLayerRef.current) {
          drawnItems.removeLayer(polygonLayerRef.current);
        }
        polygonLayerRef.current = layer;
        drawnItems.addLayer(layer);
        
        const latlngs = layer.getLatLngs()[0];
        if (polygonCbRef.current) {
          polygonCbRef.current(latlngs.map((ll: any) => ({ lat: ll.lat, lng: ll.lng })));
        }
      }
    });

    map.on(L.Draw.Event.EDITED, (event: any) => {
      const layers = event.layers;
      layers.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          const latlng = layer.getLatLng();
          if (locationCbRef.current) locationCbRef.current({ lat: latlng.lat, lng: latlng.lng });
        }
        if (layer instanceof L.Polygon) {
          const latlngs = layer.getLatLngs()[0];
          if (polygonCbRef.current) polygonCbRef.current(latlngs.map((ll: any) => ({ lat: ll.lat, lng: ll.lng })));
        }
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const backdropStyles: React.CSSProperties = isFullscreen ? {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 99999,
    background: "rgba(9, 20, 38, 0.4)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "clamp(16px, 3vw, 48px)",
    boxSizing: "border-box"
  } : {
    width: "100%",
    height: "100%",
    position: "absolute",
    inset: 0
  };

  const mapContainerStyles: React.CSSProperties = isFullscreen ? {
    width: "100%",
    maxWidth: "1400px",
    height: "100%",
    maxHeight: "90vh",
    position: "relative",
    borderRadius: "32px",
    overflow: "hidden",
    boxShadow: "0px 25px 50px rgba(0,0,0,0.25)"
  } : {
    width: "100%",
    height: "100%",
    position: "absolute",
    inset: 0,
    borderRadius: "inherit"
  };

  return (
    <div ref={containerRef} style={backdropStyles}>
      <style>{`
        .leaflet-control-geosearch.bar {
          width: 340px !important;
          max-width: calc(100% - 100px) !important;
          margin-top: 16px !important;
          border-radius: 9999px !important;
          box-shadow: 0 10px 30px rgba(9,20,38,0.1) !important;
          border: none !important;
        }
        .leaflet-control-geosearch.bar form {
          border-radius: 9999px !important;
          border: none !important;
          overflow: hidden !important;
          background: #FFFFFF !important;
          display: flex !important;
          align-items: center !important;
        }
        .leaflet-control-geosearch.bar form input {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          height: 52px !important;
          padding: 0 20px !important;
          color: #0F2F4C !important;
          border: none !important;
          outline: none !important;
          background: transparent !important;
        }
        .leaflet-control-geosearch.bar form input::placeholder {
          color: #8C94A1 !important;
        }
        .leaflet-control-geosearch.bar a.reset {
          background: #F1F5F9 !important;
          border-radius: 50% !important;
          margin: 0 12px !important;
          height: 28px !important;
          line-height: 28px !important;
          width: 28px !important;
          color: #0F2F4C !important;
          text-align: center !important;
          text-decoration: none !important;
        }
        .leaflet-control-geosearch.bar a.reset:hover {
          background: #E2E8F0 !important;
        }
      `}</style>
      <div style={mapContainerStyles}>
        <div ref={mapRef} style={{ width: "100%", height: "100%", zIndex: 0, borderRadius: "inherit" }} />
        <button 
          onClick={toggleFullscreen}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 1000,
            background: "white",
            border: "none",
            borderRadius: "8px",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}
          title={isFullscreen ? "Exit Fullscreen" : "View Fullscreen"}
        >
          {isFullscreen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
          )}
        </button>
      </div>
    </div>
  );
}
