"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VerificationHero() {
  const router = useRouter();

  return (
    <section
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        isolation: "isolate",
        width: "100%",
        height: "960px",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Container holding absolute graphic fill spanning edge-to-edge full width */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0px",
          isolation: "isolate",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        {/* Background Image Layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/assets/verification-of-farmland/hero.svg"
            alt="Verification Dashboard Cover Preview"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Cinematic Gradient Overlay matching requested intervals */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))",
            zIndex: 1,
          }}
        />
      </div>

      {/* TOP FLOATING NAVIGATION SUITE ANCHORED INSIDE VIRTUAL 1440px BOUNDS */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "178px",
          zIndex: 20,
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: "1440px", maxWidth: "100%", height: "100%" }}>
          {/* Logo Brand left */}
          <div
            onClick={() => router.push("/home")}
            style={{
              position: "absolute",
              width: "150px",
              height: "64px",
              left: "60px",
              top: "58px",
              cursor: "pointer",
              pointerEvents: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/assets/common/Logo green land 1.svg"
              alt="Green Land Capital Brand Logo"
              width={150}
              height={64}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Central Left Menu Navigation Pill Capsule (Inactive line-art icons pattern) */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px",
              gap: "10px",
              position: "absolute",
              width: "242px",
              height: "68px",
              left: "calc(50% - 242px/2 + 0.5px)",
              top: "59px",
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow:
                "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              borderRadius: "100px",
              pointerEvents: "auto",
              justifyContent: "space-between",
            }}
          >
            {/* Slot 1: HOME Line-art Icon Button */}
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
                flexShrink: 0,
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

            {/* Slot 2: Search Icon Shortcut */}
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
                flexShrink: 0,
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image src="/assets/home/HeroScreen/search.svg" alt="Search routing tab" width={22} height={22} />
            </button>

            {/* Slot 3: Pricing Vector Tool */}
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
                flexShrink: 0,
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing tab context" width={21.66} height={19.49} />
            </button>

            {/* Slot 4: User Profile Portal */}
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
                flexShrink: 0,
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image src="/assets/home/HeroScreen/user 1.png" alt="User routing profile" width={21.62} height={21.62} />
            </button>
          </div>

          {/* Right Contextual Utility Button Pills */}
          <button
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              width: "52px",
              height: "51.39px",
              left: "1194px",
              top: "70px",
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0px 10.0267px 7.52px rgba(0, 0, 0, 0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255, 255, 255, 0.55)",
              backdropFilter: "blur(62.6667px)",
              WebkitBackdropFilter: "blur(62.6667px)",
              borderRadius: "125.333px",
              border: "none",
              cursor: "pointer",
              pointerEvents: "auto",
            }}
          >
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock dashboard options" width={26.32} height={26.32} />
          </button>

          {/* Active Notifications Flag Capsule */}
          <button
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              width: "52px",
              height: "51.39px",
              left: "1261px",
              top: "70px",
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0px 10.0267px 7.52px rgba(0, 0, 0, 0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255, 255, 255, 0.55)",
              backdropFilter: "blur(62.6667px)",
              WebkitBackdropFilter: "blur(62.6667px)",
              borderRadius: "125.333px",
              border: "none",
              cursor: "pointer",
              pointerEvents: "auto",
            }}
          >
            <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications context status" width={26.32} height={26.32} />
            {/* Beacon Ring Slot */}
            <span
              style={{
                boxSizing: "border-box",
                position: "absolute",
                width: "6.3px",
                height: "6.3px",
                left: "27.39px",
                top: "13.53px",
                background: "#E53935",
                border: "0.904652px solid rgba(255, 255, 255, 0.9)",
                borderRadius: "899.968px",
              }}
            />
          </button>

          {/* Profile Avatar Routing Shell */}
          <div
            onClick={() => router.push("/profile")}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              width: "52px",
              height: "52px",
              left: "1328px",
              top: "69px",
              borderRadius: "899.968px",
              boxShadow: "0px 1.80174px 10.8104px rgba(0, 0, 0, 0.03)",
              overflow: "hidden",
              cursor: "pointer",
              pointerEvents: "auto",
            }}
          >
            <img
              src="/assets/home/HeroScreen/person.svg"
              alt="User Account Direct Link"
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }}
            />
          </div>
        </div>
      </div>

      {/* ─── HERO TYPOGRAPHY FRAME ─── */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px 32px",
          gap: "32px",
          position: "absolute",
          width: "100%",
          maxWidth: "1200px",
          left: 0,
          right: 0,
          margin: "0 auto",
          top: "348px",
          pointerEvents: "auto",
          zIndex: 10,
        }}
      >
        {/* Main Title Heading Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "100px",
              lineHeight: "1",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              letterSpacing: "-1.8px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            Verification of Farmland
          </h1>
        </div>

        {/* Subheading Text Block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              margin: 0,
              width: "100%",
              maxWidth: "996px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "32px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy,
            <br />
            and intelligence audit pipeline
          </p>
        </div>
      </div>
    </section>
  );
}
