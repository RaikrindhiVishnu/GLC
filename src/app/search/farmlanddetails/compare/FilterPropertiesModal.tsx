import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FilterPropertiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters?: (filters: any) => void;
}

export default function FilterPropertiesModal({
  isOpen,
  onClose,
  onApplyFilters,
}: FilterPropertiesModalProps) {
  const router = useRouter();

  // Local state for all advanced interactive filter controls
  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");

  // Simulated slider preset ranges for dynamic interactivity
  const pricePresets = [
    "₹50L – ₹2.5Cr",
    "₹75L – ₹4.0Cr",
    "₹1.0Cr – ₹6.5Cr",
    "₹3.0Cr – ₹12Cr",
  ];
  const [priceIndex, setPriceIndex] = useState(0);

  const sizePresets = [
    "10 – 45 Acres",
    "20 – 100 Acres",
    "50 – 250 Acres",
    "100 – 500 Acres",
  ];
  const [sizeIndex, setSizeIndex] = useState(0);

  // Multi-select state arrays
  const [selectedCollections, setSelectedCollections] = useState<string[]>([
    "GLC's Exclusive",
  ]);
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([
    "Silt Loam",
  ]);

  // Special feature toggles
  const [isOrganicReady, setIsOrganicReady] = useState(true);
  const [isWaterRights, setIsWaterRights] = useState(true);

  if (!isOpen) return null;

  const collectionsList = [
    "Most Searched",
    "GLC's Exclusive",
    "Premium Listing",
    "Trending Land",
  ];

  const attributesList = [
    { name: "Borewell", icon: "drop" },
    { name: "Silt Loam", icon: "sprout" },
    { name: "Canal Access", icon: "waves" },
    { name: "Red Laterite", icon: "mountain" },
  ];

  const toggleCollection = (item: string) => {
    setSelectedCollections((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const toggleAttribute = (item: string) => {
    setSelectedAttributes((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]
    );
  };

  const handleClearAll = () => {
    setStateSearch("");
    setCitySearch("");
    setPriceIndex(0);
    setSizeIndex(0);
    setSelectedCollections([]);
    setSelectedAttributes([]);
    setIsOrganicReady(false);
    setIsWaterRights(false);
  };

  const handleApply = () => {
    if (onApplyFilters) {
      onApplyFilters({
        stateSearch,
        citySearch,
        priceRange: pricePresets[priceIndex],
        sizeRange: sizePresets[sizeIndex],
        selectedCollections,
        selectedAttributes,
        isOrganicReady,
        isWaterRights,
      });
    }
    router.push("/search/farmlanddetails/compare_premium");
    onClose();
  };

  // Helper renderers for beautiful attribute vector icons
  const renderAttributeIcon = (iconType: string, isSelected: boolean) => {
    const color = isSelected ? "#FFFFFF" : "#45474C";
    const opacity = isSelected ? 1 : 0.7;

    switch (iconType) {
      case "drop":
        return (
          <svg
            width="14"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity }}
          >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        );
      case "sprout":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity }}
          >
            <path d="M12 20v-6M8 10a4 4 0 0 1 8 0M12 14a6 6 0 0 0-6-6" />
          </svg>
        );
      case "waves":
        return (
          <svg
            width="16"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity }}
          >
            <path d="M2 6c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.4 1.8 0 .6.4 1.2.6 1.8.6.6 0 1.2-.2 1.8-.6.6-.4 1.2-.4 1.8 0 .6.4 1.2.6 1.8.6.6 0 1.2-.2 1.8-.6.6-.4 1.2-.4 1.8 0" />
            <path d="M2 12c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.4 1.8 0 .6.4 1.2.6 1.8.6.6 0 1.2-.2 1.8-.6.6-.4 1.2-.4 1.8 0 .6.4 1.2.6 1.8.6.6 0 1.2-.2 1.8-.6.6-.4 1.2-.4 1.8 0" />
            <path d="M2 18c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.4 1.8 0 .6.4 1.2.6 1.8.6.6 0 1.2-.2 1.8-.6.6-.4 1.2-.4 1.8 0 .6.4 1.2.6 1.8.6.6 0 1.2-.2 1.8-.6.6-.4 1.2-.4 1.8 0" />
          </svg>
        );
      case "mountain":
        return (
          <svg
            width="16"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity }}
          >
            <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(9, 20, 38, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        animation: "fadeIn 0.25s ease-out",
        boxSizing: "border-box",
      }}
    >
      {/* Scope dynamic CSS animations and custom scrollbar hiding logic */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeIn {
              from { opacity: 0; backdrop-filter: blur(0px); }
              to { opacity: 1; backdrop-filter: blur(12px); }
            }
            @keyframes scaleUp {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .compare-modal-content::-webkit-scrollbar {
              display: none !important;
            }
            .compare-modal-content {
              -ms-overflow-style: none !important;
              scrollbar-width: none !important;
            }
            .preset-slider:hover .slider-thumb {
              transform: scale(1.15);
              box-shadow: 0px 4px 10px rgba(39, 128, 196, 0.4);
            }
          `,
        }}
      />

      {/* Main Modal Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "896px",
          height: "100%",
          maxHeight: "921px",
          backgroundColor: "#F3F4F5",
          borderRadius: "48px",
          boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.25)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          animation: "scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          boxSizing: "border-box",
        }}
      >
        {/* ─── HEADER SECTION (Sticky Top) ─── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 40px",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid rgba(197, 198, 205, 0.15)",
            flexShrink: 0,
            boxSizing: "border-box",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#F3F4F5",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#E7E8E9")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F3F4F5")}
            title="Close modal window"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Modal Title */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "24px",
              color: "#0F2F4C",
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            Filter Properties
          </h1>

          {/* Clear All Action */}
          <button
            onClick={handleClearAll}
            style={{
              background: "transparent",
              border: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "#45474C",
              letterSpacing: "1px",
              textTransform: "uppercase",
              cursor: "pointer",
              padding: "8px",
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            CLEAR ALL
          </button>
        </div>

        {/* ─── SCROLLABLE MATRIX CONTENT ─── */}
        <div
          className="compare-modal-content"
          style={{
            flexGrow: 1,
            overflowY: "auto",
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            boxSizing: "border-box",
          }}
        >
          {/* 1. Location Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "#0F2F4C",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
              }}
            >
              LOCATION
            </span>

            {/* Inputs Container */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {/* State Search Input */}
              <div style={{ flex: "1 1 320px", position: "relative", boxSizing: "border-box" }}>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#75777D"
                  strokeWidth="2.2"
                  style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", zIndex: 1 }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <input
                  type="text"
                  value={stateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                  placeholder="State Search"
                  style={{
                    width: "100%",
                    height: "56px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(197, 198, 205, 0.3)",
                    borderRadius: "9999px",
                    padding: "0 24px 0 48px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "15px",
                    color: "#0F2F4C",
                    outline: "none",
                    boxSizing: "border-box",
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.01)",
                  }}
                />
              </div>

              {/* City / District Search Input */}
              <div style={{ flex: "1 1 320px", position: "relative", boxSizing: "border-box" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#75777D"
                  strokeWidth="2.2"
                  style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", zIndex: 1 }}
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
                <input
                  type="text"
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  placeholder="City / District Search"
                  style={{
                    width: "100%",
                    height: "56px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(197, 198, 205, 0.3)",
                    borderRadius: "9999px",
                    padding: "0 24px 0 48px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "15px",
                    color: "#0F2F4C",
                    outline: "none",
                    boxSizing: "border-box",
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.01)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* 2. Investment & Scale Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "#0F2F4C",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
              }}
            >
              INVESTMENT & SCALE
            </span>

            {/* Bento Inner Container */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "32px",
                padding: "28px 32px",
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
                boxSizing: "border-box",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.02)",
              }}
            >
              {/* Price Range Slider Module */}
              <div
                className="preset-slider"
                onClick={() => setPriceIndex((prev) => (prev + 1) % pricePresets.length)}
                style={{
                  flex: "1 1 280px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                title="Click to toggle financial scale tiers"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "15px", color: "#45474C" }}>
                    Price Range (₹)
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>
                    {pricePresets[priceIndex]}
                  </span>
                </div>

                {/* Multi-tier Visual Track mapping literal Figma parameters */}
                <div style={{ position: "relative", height: "24px", display: "flex", alignItems: "center", width: "100%" }}>
                  {/* Background full grey track */}
                  <div style={{ position: "absolute", width: "100%", height: "6px", backgroundColor: "#E7E8E9", borderRadius: "9999px" }} />
                  {/* Highlight active interval bar */}
                  <div
                    style={{
                      position: "absolute",
                      left: `${15 + priceIndex * 10}%`,
                      right: `${45 - priceIndex * 8}%`,
                      height: "6px",
                      backgroundColor: "#2780C4",
                      borderRadius: "9999px",
                      transition: "left 0.3s ease, right 0.3s ease",
                    }}
                  />
                  {/* Left node anchor */}
                  <div
                    className="slider-thumb"
                    style={{
                      position: "absolute",
                      left: `${15 + priceIndex * 10}%`,
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#2780C4",
                      border: "4px solid #FFFFFF",
                      borderRadius: "9999px",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                      transform: "translateX(-50%)",
                      boxSizing: "border-box",
                      transition: "left 0.3s ease, transform 0.2s",
                    }}
                  />
                  {/* Right node anchor */}
                  <div
                    className="slider-thumb"
                    style={{
                      position: "absolute",
                      right: `${45 - priceIndex * 8}%`,
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#2780C4",
                      border: "4px solid #FFFFFF",
                      borderRadius: "9999px",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                      transform: "translateX(50%)",
                      boxSizing: "border-box",
                      transition: "right 0.3s ease, transform 0.2s",
                    }}
                  />
                </div>
              </div>

              {/* Property Size Slider Module */}
              <div
                className="preset-slider"
                onClick={() => setSizeIndex((prev) => (prev + 1) % sizePresets.length)}
                style={{
                  flex: "1 1 280px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                title="Click to toggle acreage matrix limits"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "15px", color: "#45474C" }}>
                    Property Size (Acres)
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>
                    {sizePresets[sizeIndex]}
                  </span>
                </div>

                {/* Multi-tier Visual Track */}
                <div style={{ position: "relative", height: "24px", display: "flex", alignItems: "center", width: "100%" }}>
                  {/* Background full grey track */}
                  <div style={{ position: "absolute", width: "100%", height: "6px", backgroundColor: "#E7E8E9", borderRadius: "9999px" }} />
                  {/* Highlight active interval bar */}
                  <div
                    style={{
                      position: "absolute",
                      left: `${10 + sizeIndex * 12}%`,
                      right: `${50 - sizeIndex * 10}%`,
                      height: "6px",
                      backgroundColor: "#2780C4",
                      borderRadius: "9999px",
                      transition: "left 0.3s ease, right 0.3s ease",
                    }}
                  />
                  {/* Left node anchor */}
                  <div
                    className="slider-thumb"
                    style={{
                      position: "absolute",
                      left: `${10 + sizeIndex * 12}%`,
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#2780C4",
                      border: "4px solid #FFFFFF",
                      borderRadius: "9999px",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                      transform: "translateX(-50%)",
                      boxSizing: "border-box",
                      transition: "left 0.3s ease, transform 0.2s",
                    }}
                  />
                  {/* Right node anchor */}
                  <div
                    className="slider-thumb"
                    style={{
                      position: "absolute",
                      right: `${50 - sizeIndex * 10}%`,
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#2780C4",
                      border: "4px solid #FFFFFF",
                      borderRadius: "9999px",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                      transform: "translateX(50%)",
                      boxSizing: "border-box",
                      transition: "right 0.3s ease, transform 0.2s",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Selection Grid (Curated Collections & Land-Attributes side-by-side) */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", width: "100%" }}>
            {/* Curated Collections Column */}
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#0F2F4C",
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                }}
              >
                CURATED COLLECTIONS
              </span>

              {/* Multi-select Interactive Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {collectionsList.map((item) => {
                  const isSelected = selectedCollections.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleCollection(item)}
                      style={{
                        padding: "10px 20px",
                        backgroundColor: isSelected ? "#0F2F4C" : "#E7E8E9",
                        color: isSelected ? "#FFFFFF" : "#45474C",
                        border: "none",
                        borderRadius: "9999px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "13.5px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: isSelected ? "0px 4px 8px rgba(15, 47, 76, 0.2)" : "none",
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Land-Attributes Column */}
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#0F2F4C",
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                }}
              >
                LAND-ATTRIBUTES
              </span>

              {/* Multi-select Attribute Pills with Inline Icons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {attributesList.map((attr) => {
                  const isSelected = selectedAttributes.includes(attr.name);
                  return (
                    <button
                      key={attr.name}
                      onClick={() => toggleAttribute(attr.name)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        backgroundColor: isSelected ? "#0F2F4C" : "#E7E8E9",
                        color: isSelected ? "#FFFFFF" : "#45474C",
                        border: "none",
                        borderRadius: "9999px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "13.5px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: isSelected ? "0px 4px 8px rgba(15, 47, 76, 0.2)" : "none",
                      }}
                    >
                      {renderAttributeIcon(attr.icon, isSelected)}
                      <span>{attr.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 4. Special Features (iOS Grouped List Block) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "#0F2F4C",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
              }}
            >
              SPECIAL FEATURES
            </span>

            {/* Grouped Container Frame */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "32px",
                border: "1px solid rgba(197, 198, 205, 0.2)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.01)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Feature Item 1 */}
              <div
                onClick={() => setIsOrganicReady(!isOrganicReady)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  borderBottom: "1px solid rgba(197, 198, 205, 0.15)",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15.5px", color: "#0F2F4C" }}>
                    Organic-Ready Certificate
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12.5px", color: "#75777D" }}>
                    Vetted for chemical-free soil history
                  </span>
                </div>

                {/* Custom Styled iOS Toggle Switch */}
                <div
                  style={{
                    width: "52px",
                    height: "30px",
                    borderRadius: "9999px",
                    padding: "2px",
                    boxSizing: "border-box",
                    background: isOrganicReady
                      ? "linear-gradient(135deg, #ADFF2F 0%, #8FD91F 100%)"
                      : "#E7E8E9",
                    boxShadow: isOrganicReady ? "0px 4px 12px rgba(173, 255, 47, 0.4)" : "none",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                      transform: isOrganicReady ? "translateX(22px)" : "translateX(0px)",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
              </div>

              {/* Feature Item 2 */}
              <div
                onClick={() => setIsWaterRights(!isWaterRights)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15.5px", color: "#0F2F4C" }}>
                    Senior Water Rights
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12.5px", color: "#75777D" }}>
                    Guaranteed pre-allocated canal flow quotas
                  </span>
                </div>

                {/* Custom Styled iOS Toggle Switch */}
                <div
                  style={{
                    width: "52px",
                    height: "30px",
                    borderRadius: "9999px",
                    padding: "2px",
                    boxSizing: "border-box",
                    background: isWaterRights
                      ? "linear-gradient(135deg, #ADFF2F 0%, #8FD91F 100%)"
                      : "#E7E8E9",
                    boxShadow: isWaterRights ? "0px 4px 12px rgba(173, 255, 47, 0.4)" : "none",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                      transform: isWaterRights ? "translateX(22px)" : "translateX(0px)",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── ACTION CONSOLE (Sticky Footer) ─── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 40px",
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid rgba(197, 198, 205, 0.1)",
            boxShadow: "0px -10px 30px rgba(0, 0, 0, 0.02)",
            flexShrink: 0,
            boxSizing: "border-box",
          }}
        >
          <button
            onClick={handleApply}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "56px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9999px",
              border: "none",
              color: "#FFFFFF",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.5px",
              cursor: "pointer",
              boxShadow: "0px 12px 24px -8px rgba(9, 20, 38, 0.4)",
              transition: "transform 0.2s ease, filter 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            SHOW PREMIUM FARMLANDS
          </button>
        </div>
      </div>
    </div>
  );
}
