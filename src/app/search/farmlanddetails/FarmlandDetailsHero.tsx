"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FarmlandDetailsHeroProps {
  title: string;
  locationSubtitle: string;
  tags: string[];
  heroBg: string;
}

export default function FarmlandDetailsHero({
  title,
  locationSubtitle,
  tags,
  heroBg,
}: FarmlandDetailsHeroProps) {
  const router = useRouter();

  // Pick the first premium tag or default to ACTIVE YIELD
  const primaryTag = tags && tags.length > 0 ? tags[0] : "ACTIVE YIELD";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#0F2F4C",
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* 1. Base Cover Imagery Layer */}
      <img
        src={heroBg}
        alt={title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
        onError={(e) => {
          e.currentTarget.src = "/assets/compareassets/hero.svg";
        }}
      />

      {/* 2. Dual Gradient Overlays matching Figma specs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
          zIndex: 2,
        }}
      />

      {/* ─── TOP HEADER LAYER REUSING STANDARD SCREEN ICONS exactly ─── */}
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

        {/* Central Navigation Pill Capsule reusing home screen asset references */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0 20px",
            height: "64px",
            background: "rgba(255, 255, 255, 0.1)", // Restore glassmorphic background
            boxShadow: "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55)",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            borderRadius: "100px",
            flexShrink: 0,
          }}
        >
          {/* Slot 1: HOME Tab Button */}
          <button
            onClick={() => router.push("/home")}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "54px",
              height: "54px",
              borderRadius: "100px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.16">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>

          {/* Slot 2: Search Icon Tab Button */}
          <button
            onClick={() => router.push("/search")}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "54px",
              height: "54px",
              borderRadius: "100px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={22} height={22} className="brightness-0 invert" />
          </button>

          {/* Slot 3: Compare Route Tab Button */}
          <button
            onClick={() => router.push("/home/compareassets")}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "54px",
              height: "54px",
              borderRadius: "100px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Compare" width={22} height={20} className="brightness-0 invert" />
          </button>

          {/* Slot 4: User Profile Tab Button */}
          <button
            onClick={() => router.push("/profile")}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "54px",
              height: "54px",
              borderRadius: "100px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Image src="/assets/home/HeroScreen/user 1.png" alt="Profile" width={22} height={22} className="brightness-0 invert" />
          </button>
        </div>

        {/* Rightmost User Controls Group loaded token-for-token */}
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

          {/* User Profile Avatar loaded precisely */}
          <div
            onClick={() => router.push("/profile")}
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              boxShadow: "0px 1.8px 10.8px rgba(0, 0, 0, 0.03)",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <img
              src="/assets/home/HeroScreen/person.svg"
              alt="User Context Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }}
            />
          </div>
        </div>
      </div>

      {/* 4. Center Hero Content Stack */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          padding: "0px 60px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          pointerEvents: "none",
          paddingBottom: "48px",
        }}
      >
        {/* Left Heading Layout */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", pointerEvents: "auto" }}>
          {/* Tag Pill with Translucent Glass effect */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "6px 16px",
              background: "#FFFFFF",
              borderRadius: "9999px",
              marginBottom: "20px",
            }}
          >
            {/* Soft Green Sparkle indicator */}
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#BCD225",
                borderRadius: "9999px",
                marginRight: "8px",
              }}
            />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#091426",
              }}
            >
              {primaryTag}
            </span>
          </div>

          {/* Master Headline */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "60px",
              lineHeight: "60px",
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
              margin: "0 0 16px 0",
            }}
          >
            {title}
          </h1>

          {/* Subtitle Row with map pin icon */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg width="21" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: "24px",
                lineHeight: "32px",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {locationSubtitle}
            </span>
          </div>
            </div>
      </div>
    </section>
  );
}
