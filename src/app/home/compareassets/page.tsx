"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function CompareAssetsWorkspacePage() {
  const router = useRouter();

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* ─── 1. FULL WIDTH HERO SCREEN BANNER LAYER ─── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "960px",
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Background Cover Asset */}
        <img
          src="/assets/compareassets/hero.svg"
          alt="Compare Assets Hero Backdrop"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          onError={(e) => {
            e.currentTarget.src = "/assets/pricing/hero.svg";
          }}
        />

        {/* Top Header Controls Shell */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 60px",
            height: "110px",
          }}
        >
          {/* Brand Logo */}
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer", flexShrink: 0 }}
            onClick={() => router.push("/home")}
          >
            <Image
              src="/assets/common/Logo green land 1.svg"
              alt="Green Land Capital Brand Logo"
              width={150}
              height={64}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Master Central Navigation Pill Capsule */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px 14px",
              gap: "8px",
              height: "68px",
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow:
                "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              borderRadius: "100px",
              flexShrink: 0,
            }}
          >
            {/* Home Link */}
            <button
              onClick={() => router.push("/home")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "48px",
                height: "48px",
                borderRadius: "100px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <svg width="21.62" height="21.62" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </button>

            {/* Search Link */}
            <button
              onClick={() => router.push("/search")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "48px",
                height: "48px",
                borderRadius: "100px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image src="/assets/home/HeroScreen/search.svg" alt="Search routing tab" width={22} height={22} />
            </button>

            {/* Pricing / Wishlist Link */}
            <button
              onClick={() => router.push("/pricing")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "48px",
                height: "48px",
                borderRadius: "100px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing route tab" width={22} height={20} />
            </button>

            {/* User Account Link */}
            <button
              onClick={() => router.push("/profile")}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "48px",
                height: "48px",
                borderRadius: "100px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image src="/assets/home/HeroScreen/user 1.png" alt="User routing tab" width={21.62} height={21.62} />
            </button>
          </div>

          {/* Right Controls Group */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            {/* Unlock icon pill */}
            <button
              onClick={() => router.push("/home/unlockeddocuments")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "52px",
                height: "52px",
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)",
                backdropFilter: "blur(62px)",
                WebkitBackdropFilter: "blur(62px)",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock Controls" width={26.32} height={26.32} />
            </button>

            {/* Notifications ring with live alert dot */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "52px",
                height: "52px",
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)",
                backdropFilter: "blur(62px)",
                WebkitBackdropFilter: "blur(62px)",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications context" width={26.32} height={26.32} />
              <span
                style={{
                  position: "absolute",
                  top: "13.5px",
                  right: "11.6px",
                  width: "6.3px",
                  height: "6.3px",
                  background: "#E53935",
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                  borderRadius: "50%",
                }}
              />
            </button>

            {/* User Profile Avatar loaded token-for-token */}
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

        {/* Center Typography Frame */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px 32px",
            gap: "37px",
            position: "absolute",
            width: "100%",
            maxWidth: "1200px",
            left: "50%",
            transform: "translateX(-50%)",
            top: "348px",
            zIndex: 10,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "100px",
              lineHeight: "72px",
              textAlign: "center",
              letterSpacing: "-1.8px",
              color: "#FFFFFF",
            }}
          >
            Compare Assets
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "1200px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
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

        {/* Signature Persistent Dark Graphite Triple Sparkle Button at bottom right */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "52px",
            height: "51.39px",
            right: "60px",
            bottom: "60px",
            background: "#191C1D",
            boxShadow: "0px 10.0267px 7.52px rgba(0, 0, 0, 0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255, 255, 255, 0.25)",
            borderRadius: "125.333px",
            cursor: "pointer",
            pointerEvents: "auto",
            zIndex: 10,
          }}
          onClick={() => alert("Sparkle/Glitter active state telemetry stream dispatched successfully.")}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.79 9.85333L11.7498 6.49608C12.1095 5.23941 13.8905 5.23941 14.2501 6.49608L15.2089 9.85333C15.2696 10.0657 15.3834 10.2591 15.5396 10.4153C15.6958 10.5715 15.8892 10.6853 16.1016 10.746L19.4588 11.7047C20.7155 12.0644 20.7155 13.8454 19.4588 14.2051L16.1016 15.1638C15.8892 15.2245 15.6958 15.3383 15.5396 15.4945C15.3834 15.6507 15.2696 15.8441 15.2089 16.0565L14.2501 19.4137C13.8905 20.6704 12.1095 20.6704 11.7498 19.4137L10.7911 16.0565C10.7304 15.8441 10.6165 15.6507 10.4604 15.4945C10.3042 15.3383 10.1108 15.2245 9.8984 15.1638L6.54115 14.2051C5.28448 13.8454 5.28448 12.0644 6.54115 11.7047L9.8984 10.746C10.1108 10.6853 10.3042 10.5715 10.4604 10.4153C10.6165 10.2591 10.7304 10.0657 10.7911 9.85333M19.6126 17.8375C19.9257 16.9242 21.242 16.9232 21.554 17.8375L21.5821 17.9317L21.9028 19.2187L23.1898 19.5405C24.2298 19.8005 24.2298 21.276 23.1898 21.536L21.9028 21.8577L21.5821 23.1447C21.3222 24.1837 19.8456 24.1837 19.5856 23.1447L19.2638 21.8577L17.9768 21.536C16.9368 21.276 16.9368 19.7994 17.9768 19.5405L19.2638 19.2187L19.5856 17.9317L19.6126 17.8375ZM20.5833 20.3183C20.521 20.4018 20.4469 20.4759 20.3634 20.5382C20.4469 20.6006 20.521 20.6747 20.5833 20.7582C20.6457 20.6747 20.7197 20.6006 20.8032 20.5382C20.7197 20.4756 20.6456 20.4011 20.5833 20.3172M4.44598 2.66975C4.76882 1.72616 6.16307 1.75758 6.41548 2.764L6.73615 4.051L8.02315 4.37275C9.06315 4.63275 9.06315 6.10825 8.02315 6.36825L6.73615 6.69L6.41548 7.977C6.15548 9.01591 4.6789 9.01591 4.4189 7.977L4.09715 6.69L2.81015 6.36825C1.77015 6.10825 1.77015 4.63166 2.81015 4.37275L4.09715 4.051L4.4189 2.764L4.44598 2.66975ZM5.41665 5.15166C5.35422 5.23478 5.28016 5.30848 5.19673 5.3705C5.28031 5.43318 5.35438 5.50761 5.41665 5.5915C5.47892 5.50761 5.55299 5.43318 5.63657 5.3705C5.55307 5.30815 5.479 5.23517 5.41665 5.15166Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ─── 2. MAIN COMPARISON STACK MATRIX precisely centered in normal document flow ─── */}
      <section
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "64px 32px",
          gap: "38px",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* 1. Top Header Block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            gap: "8px",
            width: "100%",
            maxWidth: "1216px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "48px",
              lineHeight: "48px",
              letterSpacing: "-1.2px",
              color: "#0F2F4C",
              display: "flex",
              alignItems: "center",
            }}
          >
            Compare Assets
          </h1>
          <p
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#45474C",
              display: "flex",
              alignItems: "center",
            }}
          >
            Side-by-side performance and risk analysis for high-yield land investments.
          </p>
        </div>

        {/* 2. Sticky Comparison Header (Anchored) Card Shell with exact nested absolute Backgrounds */}
        <div
          style={{
            boxSizing: "border-box",
            width: "1216px",
            height: "128px",
            background: "#FFFFFF",
            boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.04)",
            borderRadius: "32px",
            position: "relative",
            marginBottom: "16px",
          }}
        >
          {/* Inner Left Card Background precisely mimicking absolute geometry constraints */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px",
              gap: "24px",
              position: "absolute",
              height: "96px",
              left: "16px",
              right: "616px",
              top: "16px",
              background: "#FFFFFF",
              borderRadius: "32px",
            }}
          >
            {/* Text Stack */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "138px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "24px", color: "#0F2F4C", textAlign: "center" }}>
                GLC SOS 01
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#45474C", marginTop: "4px", textAlign: "center" }}>
                ₹1.20 Cr | 5.0 Acres
              </span>
            </div>
            {/* Asset Avatar Cover */}
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "6px",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image src="/assets/compareassets/image2.1.svg" alt="GLC SOS 01 Preview" fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* Inner Right Card Background precisely mimicking absolute geometry constraints */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px",
              gap: "24px",
              position: "absolute",
              height: "96px",
              left: "616px",
              right: "16px",
              top: "16px",
              background: "#FFFFFF",
              borderRadius: "32px",
            }}
          >
            {/* Asset Avatar Cover */}
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "6px",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image src="/assets/compareassets/image2.2.svg" alt="GLC SOS 02 Preview" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Text Stack */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "143px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "24px", color: "#0F2F4C", textAlign: "center" }}>
                GLC SOS 02
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#45474C", marginTop: "4px", textAlign: "center" }}>
                ₹85.00 L | 2.5 Acres
              </span>
            </div>
          </div>
        </div>

        {/* ─── SECTION 1: INFRASTRUCTURE SPINE (KEY FEATURES) ─── */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            gap: "32px",
            isolation: "isolate",
            width: "1216px",
            position: "relative",
          }}
        >
          {/* Vertical Divider precisely mapped as per Figma absolute CSS specs */}
          <div
            style={{
              position: "absolute",
              width: "1px",
              left: "calc(50% - 1px / 2)",
              top: "32px",
              bottom: "-32px",
              background: "#C5C6CD",
              zIndex: 0,
            }}
          />

          {/* Heading 2 */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 8px",
              gap: "12px",
              width: "1216px",
              height: "32px",
              zIndex: 1,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", flexShrink: 0 }}>
              <Image src="/assets/compareassets/keyfeatures.svg" alt="Key Features Icon" width={22} height={22} />
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C", textTransform: "uppercase" }}>
              Key Features
            </span>
          </div>

          {/* Container rows shell maintaining Figma icon gap standards internally */}
          <div style={{ display: "flex", flexDirection: "column", gap: "38px", width: "100%", zIndex: 1 }}>
            {/* Row 1: Power */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative", height: "108px" }}>
              {/* Left Side Value Card */}
              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>ENERGY ACCESS</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>3-Phase Industrial Grid</span>
              </div>

              {/* Central Spine SVG icon wrapped node */}
              <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9, 20, 38, 0.2), 0px 4px 6px -4px rgba(9, 20, 38, 0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                <Image src="/assets/compareassets/energyaccess.svg" alt="Energy Access Center Vector" width={20} height={20} />
              </div>

              {/* Right Side Value Card */}
              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>ENERGY ACCESS</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>Solar-Ready Infrastructure</span>
              </div>
            </div>

            {/* Row 2: Water */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative", height: "108px" }}>
              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>HYDRAULIC DEPTH</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>Borewell 100m</span>
              </div>

              <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9, 20, 38, 0.2), 0px 4px 6px -4px rgba(9, 20, 38, 0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                <Image src="/assets/compareassets/hydraulicdepth.svg" alt="Hydraulic Depth Center Vector" width={20} height={20} />
              </div>

              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>HYDRAULIC DEPTH</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>Canal Access</span>
              </div>
            </div>

            {/* Row 3: Road Last Mile */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative", height: "108px" }}>
              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>LAST MILE</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>40ft Black Top</span>
              </div>

              <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9, 20, 38, 0.2), 0px 4px 6px -4px rgba(9, 20, 38, 0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                <Image src="/assets/compareassets/lastmile.svg" alt="Last Mile Center Vector" width={20} height={20} />
              </div>

              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>LAST MILE</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>Gravel Approach</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── SECTION 2: INFRASTRUCTURE SPINE (CONNECTIVITY) ─── */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            gap: "32px",
            isolation: "isolate",
            width: "1216px",
            position: "relative",
            marginTop: "32px",
          }}
        >
          {/* Vertical Divider precisely mapped as per Figma absolute CSS specs */}
          <div
            style={{
              position: "absolute",
              width: "1px",
              left: "calc(50% - 1px / 2)",
              top: "32px",
              bottom: "-32px",
              background: "#C5C6CD",
              zIndex: 0,
            }}
          />

          {/* Heading 2 */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 8px",
              gap: "12px",
              width: "1216px",
              height: "32px",
              zIndex: 1,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "23px", flexShrink: 0 }}>
              <Image src="/assets/compareassets/connectivity.svg" alt="Connectivity Icon" width={24} height={23} />
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C", textTransform: "uppercase", letterSpacing: "1.2px" }}>
              Connectivity
            </span>
          </div>

          {/* Container rows shell maintaining Figma icon gap standards internally */}
          <div style={{ display: "flex", flexDirection: "column", gap: "38px", width: "100%", zIndex: 1 }}>
            {/* Row 1: Nearest City */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative", height: "108px" }}>
              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>NEAREST</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>Zaheerabad (15km)</span>
              </div>

              <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9, 20, 38, 0.2), 0px 4px 6px -4px rgba(9, 20, 38, 0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                <Image src="/assets/compareassets/nearest.svg" alt="Nearest City Vector" width={20} height={20} />
              </div>

              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>NEAREST</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>Vijayawada (120m)</span>
              </div>
            </div>

            {/* Row 2: RGIA Transit */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative", height: "108px" }}>
              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>NEAREST</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>RGIA (90m)</span>
              </div>

              <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9, 20, 38, 0.2), 0px 4px 6px -4px rgba(9, 20, 38, 0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                <Image src="/assets/compareassets/rgia.svg" alt="RGIA Center Vector" width={20} height={20} />
              </div>

              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>NEAREST</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>Canal Access</span>
              </div>
            </div>

            {/* Row 3: Medical Access */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative", height: "108px" }}>
              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>NEAREST</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>Apollo (10km)</span>
              </div>

              <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9, 20, 38, 0.2), 0px 4px 6px -4px rgba(9, 20, 38, 0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                <Image src="/assets/compareassets/apollo.svg" alt="Apollo Medical Base Vector" width={20} height={20} />
              </div>

              <div style={{ width: "486.4px", height: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "32px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>LAST MILE</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px" }}>Emergency (8km)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── SECTION 3: CULTIVATION (AGRONOMY & SOIL) ─── */}
        <div style={{ display: "flex", flexDirection: "column", width: "1216px", gap: "32px", marginTop: "26px" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", padding: "0 8px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "18px", height: "20px", flexShrink: 0 }}>
              <Image src="/assets/compareassets/cultivation.svg" alt="Cultivation Icon" width={18} height={20} />
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C", textTransform: "uppercase" }}>
              Cultivation
            </span>
          </div>

          {/* Side-by-side Bento Core Boxes matrix */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "24px", width: "100%" }}>
            {/* Box 1: Genesis Matrix precisely replicating user token structure */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                padding: "40px",
                gap: "24px",
                width: "596px",
                background: "#FFFFFF",
                borderRadius: "32px",
                boxShadow: "0px 12px 40px rgba(0, 31, 63, 0.04)",
              }}
            >
              {/* Internal Shell */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "512px" }}>
                {/* Header block */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "512px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#45474C", textTransform: "uppercase" }}>
                    SOIL COMPOSITION
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C" }}>
                    Black Cotton Soil
                  </span>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#45474C" }}>
                    High water retention, ideal for moisture-intensive crops and long- term sustainability.
                  </p>
                </div>

                {/* Line Divider */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px 0px 0px", gap: "8px", width: "512px", borderTop: "1px solid rgba(197, 198, 205, 0.15)" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#45474C", textTransform: "uppercase" }}>
                    CURRENT VEGETATION
                  </span>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", width: "512px", height: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "17px", height: "17px", flexShrink: 0 }}>
                      <Image src="/assets/compareassets/leaf.svg" alt="Leaf Indicator" width={17} height={17} />
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                      Seasonal Rice / Cotton Cultivation
                    </span>
                  </div>
                </div>

                {/* Line Divider */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px 0px 0px", gap: "8px", width: "512px", borderTop: "1px solid rgba(197, 198, 205, 0.15)" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#45474C", textTransform: "uppercase" }}>
                    POTENTIAL VEGETATION
                  </span>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", width: "512px", height: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "17px", height: "17px", flexShrink: 0 }}>
                      <Image src="/assets/compareassets/leaf.svg" alt="Leaf Indicator" width={17} height={17} />
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C" }}>
                      Sandalwood
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Heritage Matrix precisely replicating user token structure */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                padding: "40px",
                gap: "24px",
                width: "596px",
                background: "#FFFFFF",
                borderRadius: "32px",
                boxShadow: "0px 12px 40px rgba(0, 31, 63, 0.04)",
              }}
            >
              {/* Internal Shell */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "512px" }}>
                {/* Header block */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "512px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#45474C", textTransform: "uppercase" }}>
                    SOIL COMPOSITION
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C" }}>
                    Red Laterite Soil
                  </span>
                  <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#45474C" }}>
                    Excellent drainage properties, perfect for plantation crops like Cashew or Mango.
                  </p>
                </div>

                {/* Line Divider */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px 0px 0px", gap: "8px", width: "512px", borderTop: "1px solid rgba(197, 198, 205, 0.15)" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#45474C", textTransform: "uppercase" }}>
                    CURRENT VEGETATION
                  </span>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", width: "512px", height: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", flexShrink: 0 }}>
                      <Image src="/assets/compareassets/block.svg" alt="Block Indicator" width={20} height={20} />
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>
                      Bare Land (Fallow)
                    </span>
                  </div>
                </div>

                {/* Line Divider */}
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px 0px 0px", gap: "8px", width: "512px", borderTop: "1px solid rgba(197, 198, 205, 0.15)" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", color: "#45474C", textTransform: "uppercase" }}>
                    POTENTIAL VEGETATION
                  </span>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", width: "512px", height: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", flexShrink: 0 }}>
                      <Image src="/assets/compareassets/block.svg" alt="Block Indicator" width={20} height={20} />
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#45474C" }}>
                      Rice/Wheat
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── STICKY BOTTOM SELECTION CONTROLS BANNER ─── */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "1216px",
            padding: "24px 32px",
            background: "rgba(255, 255, 255, 0.95)",
            borderTop: "1px solid rgba(197, 198, 205, 0.2)",
            borderRadius: "24px",
            boxShadow: "0px -10px 40px rgba(0, 0, 0, 0.03)",
            gap: "48px",
            marginTop: "40px",
          }}
        >
          {/* Select Left Button */}
          <button
            onClick={() => alert("Initiating institutional escrow deposit layer for GLC SOS 01...")}
            style={{
              flex: 1,
              height: "52px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9999px",
              border: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.35px",
              color: "#FFFFFF",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            SELECT GLC SOS 01
          </button>

          {/* Select Right Button */}
          <button
            onClick={() => alert("Initiating institutional escrow deposit layer for GLC SOS 02...")}
            style={{
              flex: 1,
              height: "52px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9999px",
              border: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.35px",
              color: "#FFFFFF",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            SELECT GLC SOS 02
          </button>
        </div>
      </section>

      {/* ─── 3. GLOBAL CTA LAYER & FOOTER ─── */}
      <CTA />
      <Footer />
    </main>
  );
}
