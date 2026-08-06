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
  onMapClick?: () => void;
  hideFullscreenButton?: boolean;
}

export default function InteractiveMap({ onLocationChange, onPolygonChange, onFullscreenChange, initialLocation, initialPolygon, viewOnly, onMapClick, hideFullscreenButton }: InteractiveMapProps) {
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
  const mapClickCbRef = useRef(onMapClick);

  useEffect(() => {
    locationCbRef.current = onLocationChange;
    polygonCbRef.current = onPolygonChange;
    fullscreenCbRef.current = onFullscreenChange;
    mapClickCbRef.current = onMapClick;
  }, [onLocationChange, onPolygonChange, onFullscreenChange, onMapClick]);

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
    if (typeof document !== 'undefined') {
      if (isFullscreen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    return () => {
      if (isFullscreen) {
        window.dispatchEvent(new CustomEvent("mapFullscreenChange", { detail: false }));
        if (typeof document !== 'undefined') {
          document.body.style.overflow = "";
        }
      }
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
      drawnItemsRef.current = null;
      markerRef.current = null;
      polygonLayerRef.current = null;
    }

    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    // Increased maxZoom for drawing fine details
    const initialCenter = initialLocation ? [initialLocation.lat, initialLocation.lng] as L.LatLngTuple : [17.3850, 78.4867] as L.LatLngTuple;
    const map = L.map(mapRef.current, { attributionControl: false, zoomControl: !viewOnly, maxZoom: 22 }).setView(initialCenter, initialLocation ? 16 : 12);
    mapInstanceRef.current = map;

    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
        if (!initialLocation && !viewOnly) {
          mapInstanceRef.current.locate({ setView: true, maxZoom: 16 });
        }
      }
    }, 250);

    map.on("click", () => {
      if (mapClickCbRef.current) {
        mapClickCbRef.current();
      }
    });

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
      const customPin = L.divIcon({
        className: 'custom-pin',
        html: `<svg width="32" height="32" viewBox="0 0 24 24" fill="#EA4335" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 3px 4px rgba(0,0,0,0.4))">
                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="#FFFFFF" stroke-width="0.5"/>
               </svg>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });
      markerRef.current = L.marker([initialLocation.lat, initialLocation.lng], { icon: customPin }).addTo(drawnItems);
    }

    if (initialPolygon && initialPolygon.length > 0) {
      let latlngs: L.LatLngTuple[] = [];

      if (typeof initialPolygon[0] === 'string' && initialPolygon[0] === 'polygon') {
        for (let i = 1; i < initialPolygon.length; i += 2) {
          if (initialPolygon[i] && initialPolygon[i + 1]) {
            latlngs.push([parseFloat(initialPolygon[i] as any), parseFloat(initialPolygon[i + 1] as any)]);
          }
        }
      } else {
        latlngs = initialPolygon.map((p: any) => {
          if (p && typeof p === 'object' && 'lat' in p && 'lng' in p) {
            return [p.lat, p.lng] as L.LatLngTuple;
          } else if (Array.isArray(p) && p.length >= 2) {
            return [p[0], p[1]] as L.LatLngTuple;
          }
          return null;
        }).filter(Boolean) as L.LatLngTuple[];
      }

      if (latlngs.length > 0) {
        polygonLayerRef.current = L.polygon(latlngs, { color: '#2780C4', weight: 3.84, fillColor: '#2780C4', fillOpacity: 0.1 }).addTo(drawnItems);
        const bounds = polygonLayerRef.current.getBounds();
        // Delay fitBounds so it fires after the map finishes its initial render
        setTimeout(() => {
          if (mapInstanceRef.current && bounds.isValid()) {
            mapInstanceRef.current.fitBounds(bounds, { padding: [30, 30], maxZoom: 18 });
          }
        }, 300);
      }
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
  }, [initialLocation, initialPolygon, viewOnly, isFullscreen]);

  const backdropStyles: React.CSSProperties = isFullscreen ? {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 2147483647,
    background: "rgba(9, 20, 38, 0.4)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    boxSizing: "border-box"
  } : {
    width: "100%",
    height: "100%",
    position: "absolute",
    inset: 0
  };

  const mapContainerStyles: React.CSSProperties = isFullscreen ? {
    width: "calc(100% - 64px)",
    height: "calc(100% - 64px)",
    maxWidth: "1600px",
    position: "relative",
    borderRadius: "32px",
    overflow: "hidden",
    boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
    background: "#FFFFFF"
  } : {
    width: "100%",
    height: "100%",
    position: "absolute",
    inset: 0,
    borderRadius: "inherit"
  };

  const content = (
    <div ref={containerRef} style={backdropStyles} data-lenis-prevent="true">
      <style>{`
        .leaflet-control-geosearch.bar {
          width: 340px !important;
          max-width: calc(100% - 100px) !important;
          margin: 16px !important;
          border-radius: 9999px !important;
          border: none !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
          overflow: hidden !important;
        }
        .leaflet-control-geosearch.bar form {
          background: white !important;
          border-radius: 9999px !important;
        }
        .leaflet-control-geosearch.bar form input {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 14px !important;
          color: #0F2F4C !important;
          border: none !important;
          outline: none !important;
          padding: 0 16px !important;
          height: 44px !important;
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
        {!hideFullscreenButton && (
          <button
            onClick={toggleFullscreen}
            style={{
              position: "absolute",
              bottom: "16px",
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>
            )}
          </button>
        )}
      </div>
    </div>
  );

  if (isFullscreen && typeof document !== 'undefined') {
    const { createPortal } = require('react-dom');
    return (
      <>
        <div style={{ width: "100%", height: "100%", position: "relative" }} />
        {createPortal(content, document.body)}
      </>
    );
  }

  return content;
}
