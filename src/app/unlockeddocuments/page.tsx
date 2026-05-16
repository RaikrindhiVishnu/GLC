"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Importing modular panel children matching specifications
import LeftPane from "./LeftPane";
import CenterPane from "./CenterPane";
import RightPane from "./RightPane";

// Importing shared trailing blocks layout
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function UnlockedDocumentsPage() {
  const router = useRouter();

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      {/* ─── TOP MASTER BRAND HEADER BAR ─── */}
      <div
        style={{
          width: "100%",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 4vw, 60px)",
          background: "#FFFFFF",
          borderBottom: "1px solid #EDEEEF",
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        {/* Left Side Brand Logo Trigger */}
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => router.push("/home")}>
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Official Logo"
            width={140}
            height={50}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Center Title Meta Strip */}
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(12px, 1.4vh, 16px)",
            color: "#0F2F4C",
            letterSpacing: "0.5px",
          }}
        >
          SECURE LEGAL DOSSIER DETAIL
        </span>

        {/* Right Back Actions link */}
        <button
          onClick={() => router.push("/home")}
          style={{
            background: "#EEF6FF",
            border: "1px solid rgba(39, 128, 196, 0.2)",
            borderRadius: "9999px",
            padding: "8px 20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "14px", color: "#2780C4", fontWeight: "bold" }}>←</span>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#2780C4" }}>
            BACK TO HOME
          </span>
        </button>
      </div>

      {/* ─── MASTER CENTRAL CONTENT STAGE WRAPPER (Frame matching absolute 1280px container layout) ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          padding: "clamp(24px, 3vh, 48px)",
          gap: "clamp(16px, 2vw, 32px)",
          width: "100%",
          maxWidth: "1280px",
          height: "clamp(550px, 80vh, 937px)", // Enforces fluid viewport adaptation without scrolling
          background: "#F3F4F5",
          borderRadius: "48px",
          margin: "clamp(20px, 3vh, 40px) 0",
          overflow: "hidden", // Completely blocks unexpected overflow artifacts
        }}
      >
        {/* Render fully integrated responsive child panels */}
        <LeftPane />
        <CenterPane />
        <RightPane />
      </div>

      {/* ─── TRAILING EDGE-TO-EDGE SIBLINGS SECTION ─── */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <CTA />
        <Footer />
      </section>
    </main>
  );
}
