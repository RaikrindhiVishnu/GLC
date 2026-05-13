"use client";

import React from "react";

interface ModalOverlayProps {
  selectedPool: string | null;
  onClose: () => void;
}

export default function ModalOverlay({ selectedPool, onClose }: ModalOverlayProps) {
  if (!selectedPool) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(9, 20, 38, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.2s ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF",
          borderRadius: "48px",
          padding: "48px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0px 24px 60px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          position: "relative",
          border: "1px solid rgba(255, 255, 255, 0.8)",
        }}
      >
        {/* Close Cross Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#F3F4F5",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#0F2F4C",
          }}
        >
          ✕
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              padding: "6px 16px",
              background: selectedPool === "genesis" ? "#BA1A1A" : "#D7EE44",
              color: selectedPool === "genesis" ? "#FFFFFF" : "#0F2F4C",
              borderRadius: "9999px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            {selectedPool === "genesis" ? "Project Genesis" : "Heritage Timber"}
          </span>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#8590A6" }}>
            Verified Tier 1 Asset
          </span>
        </div>

        <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: "#0F2F4C", lineHeight: "40px" }}>
          Institutional Co-Ownership Prospectus
        </h3>

        <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#45474C" }}>
          {selectedPool === "genesis"
            ? "Secure your position in this premium, high-vitality agrarian asset. Full regulatory approvals, immediate water rights access, and pre-negotiated long-term agricultural lease agreements guarantee predictable yields from Day 1."
            : "A rare opportunity to participate in legacy timber conservation with outstanding asset appreciation modeling. Escrow clearing takes place within 14 business days backed by complete GLC title warranties."}
        </p>

        {/* Smart Matrix Specs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", background: "#F8F9FA", padding: "20px", borderRadius: "24px" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#8590A6", textTransform: "uppercase" }}>Target Internal Yield</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#2780C4" }}>14.2% p.a.</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#8590A6", textTransform: "uppercase" }}>Lock-In Window</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#0F2F4C" }}>36 Months</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#8590A6", textTransform: "uppercase" }}>Title Clearing</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#0F2F4C" }}>Instant Escrow</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#8590A6", textTransform: "uppercase" }}>Distribution Frequency</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#2780C4" }}>Quarterly Direct</div>
          </div>
        </div>

        <button
          onClick={() => {
            alert("Subscription intent registered successfully. A GLC Relationship Manager will contact you directly via your authenticated session dashboard.");
            onClose();
          }}
          style={{
            width: "100%",
            padding: "18px",
            background: "#0F2F4C",
            color: "#FFFFFF",
            borderRadius: "9999px",
            border: "none",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0px 8px 20px rgba(15, 47, 76, 0.25)",
          }}
        >
          Initiate Secure Escrow Deposit
        </button>
      </div>
    </div>
  );
}
