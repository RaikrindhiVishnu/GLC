"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UnlockedDocsHero() {
  const router = useRouter();

  const [scale, setScale] = useState(1);
  const scalerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1200;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      setScale(currentScale);
      if (scalerRef.current) {
        scalerRef.current.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0px",
        isolation: "isolate",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Primary Responsive Background Layer filling entire edge-to-edge screen */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
        }}
      >
        {/* Requested Custom Backdrop SVG image fully covering viewport */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/assets/unlockdocuments/unlockhero.svg"
            alt="Unlocked Dossier Vault Backdrop"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Shading Layer Overlay matching absolute string parameter dump */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))",
            zIndex: 1,
          }}
        />

        {/* ─── FULL-WIDTH RESPONSIVE TOP NAVIGATION FRAME ─── */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "120px",
            pointerEvents: "none",
            zIndex: 5,
          }}
        >
          {/* Logo Container mapped precisely to left anchor */}
          <div
            onClick={() => router.push("/home")}
            style={{
              position: "absolute",
              width: "150px",
              height: "64px",
              left: "60px",
              top: "26px",
              cursor: "pointer",
              pointerEvents: "auto",
              backgroundImage: "url('/assets/common/Logo green land 1.svg')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
            }}
          />

          {/* Central Absolute Line-Art Capsule Nav Bar exactly fixed to horizontal center */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "10px",
              gap: "10px",
              position: "absolute",
              width: "242px",
              height: "68px",
              left: "50%",
              transform: "translateX(-50%)",
              top: "24px",
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              borderRadius: "100px",
              pointerEvents: "auto",
            }}
          >
            {/* Tab 1: Home Link (Inactive state outline) */}
            <button
              onClick={() => router.push("/home")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                width: "48px",
                height: "48px",
                borderRadius: "100px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                flex: "none",
                order: 0,
                flexGrow: 0,
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "0px", gap: "10px", width: "21.62px", height: "21.62px" }}>
                <svg width="21.62" height="21.62" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </button>

            {/* Tab 2: Core Search Option */}
            <button
              onClick={() => router.push("/search")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                width: "48px",
                height: "48px",
                borderRadius: "100px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                flex: "none",
                order: 1,
                flexGrow: 0,
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "10px", width: "21.62px", height: "21.62px" }}>
                <Image src="/assets/home/HeroScreen/search.svg" alt="Discover Lands" width={21.62} height={21.62} />
              </div>
            </button>

            {/* Tab 3: Crown Pricing Link */}
            <button
              onClick={() => router.push("/pricing")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                width: "48px",
                height: "48px",
                borderRadius: "100px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                flex: "none",
                order: 2,
                flexGrow: 0,
              }}
            >
              <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing Engine Options" width={21.66} height={19.49} style={{ border: "none" }} />
            </button>

            {/* Tab 4: Direct User Profile Core */}
            <button
              onClick={() => router.push("/profile")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                width: "48px",
                height: "48px",
                borderRadius: "100px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                flex: "none",
                order: 3,
                flexGrow: 0,
              }}
            >
              <div style={{ width: "21.62px", height: "21.62px", position: "relative" }}>
                <Image src="/assets/home/HeroScreen/user 1.png" alt="User Portal Core" fill style={{ objectFit: "contain" }} />
              </div>
            </button>
          </div>

          {/* Right Action Group container mapped to right border anchor */}
          <div
            style={{
              position: "absolute",
              right: "60px",
              top: "32px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "15px",
              pointerEvents: "auto",
            }}
          >
            {/* Right Action Shell Item 1: Unlock Dashboard Base */}
            <button
              onClick={() => router.push("/home/unlockeddocuments")}
              style={{
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "52px",
                height: "51.39px",
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0px 10.0267px 7.52px rgba(0, 0, 0, 0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255, 255, 255, 0.55), inset 0px -1.25333px 1.25333px rgba(255, 255, 255, 0.25), inset 0px 1.25333px 1.25333px rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(62.6667px)",
                WebkitBackdropFilter: "blur(62.6667px)",
                borderRadius: "125.333px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div style={{ width: "26.32px", height: "26.32px", position: "relative" }}>
                <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock actions module" fill style={{ objectFit: "contain" }} />
              </div>
            </button>

            {/* Right Action Shell Item 2: Active Flag Context Notifications */}
            <button
              style={{
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "52px",
                height: "51.39px",
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0px 10.0267px 7.52px rgba(0, 0, 0, 0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(62.6667px)",
                WebkitBackdropFilter: "blur(62.6667px)",
                borderRadius: "125.333px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div style={{ width: "26.32px", height: "26.32px", position: "relative" }}>
                <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications context status" fill style={{ objectFit: "contain" }} />
              </div>
              {/* Red Alert Point slot */}
              <div
                style={{
                  boxSizing: "border-box",
                  position: "absolute",
                  width: "6.3px",
                  height: "6.3px",
                  right: "12px",
                  top: "13.53px",
                  background: "#E53935",
                  border: "0.904652px solid rgba(255, 255, 255, 0.9)",
                  borderRadius: "899.968px",
                }}
              />
            </button>

            {/* Right Action Shell Item 3: Avatar Link directly reused from home page */}
            <div
              id="nav-avatar"
              onClick={() => router.push("/profile")}
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                border: "none",
                boxShadow: "0px 1.8px 10.8px rgba(0, 0, 0, 0.03)",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                zIndex: 10,
              }}
            >
              <img
                src="/assets/home/HeroScreen/person.svg"
                alt="User"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.5)",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── HERO TYPOGRAPHY FRAME OVERLAYS precisely centered inside full viewport width ─── */}
      <div
        ref={scalerRef}
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px 32px 80px",
          gap: "37px",
          position: "absolute",
          width: "100%",
          maxWidth: "1200px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
          willChange: "transform",
          pointerEvents: "auto",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0px", width: "100%" }}>
          <h1
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "100px",
              lineHeight: "72px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              letterSpacing: "-1.8px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            Unlocked Documents
          </h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0px", width: "100%" }}>
          <p
            style={{
              margin: 0,
              maxWidth: "1200px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "32px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy,</span>
            <br />
            and intelligence audit pipeline
          </p>
        </div>
      </div>

    </section>
  );
}
