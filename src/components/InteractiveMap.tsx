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
}

export default function InteractiveMap({ onLocationChange, onPolygonChange, onFullscreenChange }: InteractiveMapProps) {
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
    const map = L.map(mapRef.current, { attributionControl: false, maxZoom: 22 }).setView([17.3850, 78.4867], 12);
    mapInstanceRef.current = map;

    // Fix for DOM rendering timing issues with geolocation
    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
        mapInstanceRef.current.locate({ setView: true, maxZoom: 16 });
      }
    }, 250);

    // Use satellite map layer with maxNativeZoom to allow overscaling
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 22,
      maxNativeZoom: 19
    }).addTo(map);

    // Add search control
    const provider = new OpenStreetMapProvider();
    const searchControl = new (GeoSearchControl as any)({
      provider: provider,
      style: "bar",
      showMarker: false, // User requested no old pin points (search pins)
      retainZoomLevel: false,
      animateZoom: true,
      autoClose: true,
      searchLabel: "Search for a location...",
      keepResult: true,
    });
    map.addControl(searchControl);

    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    drawnItemsRef.current = drawnItems;

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
      draw: {
        polygon: true,
        marker: true,
        polyline: false,
        circle: false,
        rectangle: false,
        circlemarker: false,
      },
    });
    map.addControl(drawControl);

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
