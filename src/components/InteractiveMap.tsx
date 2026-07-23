"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

interface InteractiveMapProps {
  onLocationChange?: (location: { lat: number; lng: number }) => void;
  onPolygonChange?: (polygon: { lat: number; lng: number }[]) => void;
}

export default function InteractiveMap({ onLocationChange, onPolygonChange }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const drawnItemsRef = useRef<L.FeatureGroup | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const polygonLayerRef = useRef<L.Polygon | null>(null);

  const locationCbRef = useRef(onLocationChange);
  const polygonCbRef = useRef(onPolygonChange);

  useEffect(() => {
    locationCbRef.current = onLocationChange;
    polygonCbRef.current = onPolygonChange;
  }, [onLocationChange, onPolygonChange]);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current || mapInstanceRef.current) return;

    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    const map = L.map(mapRef.current, { attributionControl: false }).setView([17.3850, 78.4867], 12);
    mapInstanceRef.current = map;

    // Fix for DOM rendering timing issues with geolocation
    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
        mapInstanceRef.current.locate({ setView: true, maxZoom: 16 });
      }
    }, 250);

    // Use satellite map layer
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(map);

    // Add search control
    const provider = new OpenStreetMapProvider();
    const searchControl = new (GeoSearchControl as any)({
      provider: provider,
      style: "bar",
      showMarker: true,
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

  return <div ref={mapRef} style={{ width: "100%", height: "100%", zIndex: 0, borderRadius: "inherit" }} />;
}
