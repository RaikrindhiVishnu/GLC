"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DetailsFooter() {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    alert(`Subscription channel successfully established for ${emailInput}.`);
    setEmailInput("");
  };

  return (
    <section
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        width: "1440px",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* ─── BANNER 1: SCENIC SIMPLE STEPS SLOGAN ─── */}
      <div
        style={{
          boxSizing: "border-box",
          width: "1440px",
          height: "500px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        {/* Fill layer graphic mapping */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/assets/my-assets/hero.svg"
            alt="Lush Rolling Agricultural Green Hills Backdrop"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </div>

        {/* Soft semi-transparent white-to-transparent atmospheric mist filter */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
            zIndex: 1,
          }}
        />

        {/* Typography container over focal point */}
        <div style={{ position: "relative", zIndex: 2, padding: "0 32px", textAlign: "center" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "55px",
              letterSpacing: "-1.2px",
              color: "#0F2F4C",
              maxWidth: "800px",
            }}
          >
            Simple steps. Smart technology. Real yields.
          </h2>
        </div>
      </div>

      {/* ─── BANNER 2: FOOTER LIBRARY RADIAL SUITE ─── */}
      <footer
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "64px 64px 32px 64px",
          width: "1440px",
          background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Core Layout Sub-Wrapper Space */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "1312px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Monumental Focal Text Watermark Signature */}
          <div
            style={{
              width: "100%",
              marginBottom: "84px",
              userSelect: "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "180px", // Safely optimized below max layout ceiling while preserving visual weight
                lineHeight: "80%",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                display: "block",
              }}
            >
              Green Land<br />Capital
            </span>
          </div>

          {/* Links Directory Framework Array Grid */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              marginBottom: "64px",
            }}
          >
            {/* Nav Stack Column 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                onClick={() => router.push("/home")}
                style={{ cursor: "pointer", marginBottom: "12px" }}
              >
                <Image
                  src="/assets/common/Logo green land 1.svg"
                  alt="Footer Signature Mark"
                  width={130}
                  height={55}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span
                onClick={() => router.push("/search")}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", cursor: "pointer", transition: "opacity 0.2s", opacity: 0.9 }}
              >
                Search Farmland
              </span>
              <span
                onClick={() => router.push("/pool-buying")}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", cursor: "pointer", transition: "opacity 0.2s", opacity: 0.9 }}
              >
                Pool Buying
              </span>
              <span
                onClick={() => router.push("/pricing")}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", cursor: "pointer", transition: "opacity 0.2s", opacity: 0.9 }}
              >
                Subscriptions
              </span>
            </div>

            {/* Nav Stack Column 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "12px" }}>
              <span
                onClick={() => router.push("/search")}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", cursor: "pointer", transition: "opacity 0.2s", opacity: 0.9 }}
              >
                Verification of Farmland
              </span>
              <span
                onClick={() => router.push("/home/myassets")}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", cursor: "pointer", transition: "opacity 0.2s", opacity: 0.9 }}
              >
                Maintenance of Farmland
              </span>
              <span
                onClick={() => router.push("/pricing")}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", cursor: "pointer", transition: "opacity 0.2s", opacity: 0.9 }}
              >
                Sell Your Land
              </span>
            </div>

            {/* Newsletter Dispatch Component Block Column 3 */}
            <div style={{ display: "flex", flexDirection: "column", width: "320px", marginTop: "12px" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "140%",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  marginBottom: "24px",
                }}
              >
                Get farmland insights and opportunities straight to your inbox
              </span>

              {/* Form trigger block */}
              <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: "8px",
                    borderBottom: "1px solid #DADADA",
                    marginBottom: "12px",
                  }}
                >
                  <input
                    type="email"
                    placeholder="Email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    style={{
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "16px",
                      color: "#FFFFFF",
                      width: "80%",
                    }}
                    required
                  />
                  <button type="submit" style={{ background: "transparent", border: "none", cursor: "pointer", color: "#FFFFFF", fontWeight: "bold", fontSize: "18px" }}>
                    ➔
                  </button>
                </div>

                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13.5px", color: "#BCC7DE", opacity: 0.8 }}>
                  By subscribing you have accepted our Policy
                </span>
              </form>
            </div>
          </div>

          {/* Lower Copyright Strip Header Line */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                opacity: 0.8,
              }}
            >
              © 2026 GREEN LAND CAPITAL. ALL RIGHTS RESERVED.
            </span>

            {/* Sub Link Group Row */}
            <div style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
              {["TERMS", "PRIVACY", "SECURITY", "API"].map((lnk, idx) => (
                <span
                  key={idx}
                  onClick={() => router.push("/home")}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    opacity: 0.8,
                    cursor: "pointer",
                  }}
                >
                  {lnk}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
