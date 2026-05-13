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
        height: "960px",
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
            justifyContent: "space-evenly",
            padding: "10px",
            gap: "10px",
            width: "341px",
            height: "72px",
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)",
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
            title="Dashboard Home"
          >
            <svg width="21.62" height="21.62" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>

          {/* Slot 2: Search Icon Tab Button */}
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
            title="Search Assets"
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search routing tab" width={22} height={22} />
          </button>

          {/* Slot 3: Compare Route Tab Button */}
          <button
            onClick={() => router.push("/home/compareassets")}
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
            title="Compare Assets"
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Compare route tab" width={22} height={20} />
          </button>

          {/* Slot 4: User Profile Tab Button */}
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
            title="User Identity"
          >
            <Image src="/assets/home/HeroScreen/user 1.png" alt="User routing tab" width={21.62} height={21.62} />
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

      {/* 4. Bottom Hero Content Stack Aligned Left */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          padding: "0px 60px 48px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          pointerEvents: "none",
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
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(6px)",
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

          {/* Master 60px Estate Headline */}
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

        {/* Floating Bottom Menu / Ambient Control loaded with requested inline Sparkle SVG */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "52px",
            height: "51.39px",
            background: "#191C1D",
            boxShadow: "0px 10.0267px 7.52px rgba(0, 0, 0, 0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255, 255, 255, 0.25)",
            borderRadius: "125.333px",
            cursor: "pointer",
            pointerEvents: "auto",
            marginBottom: "8px",
          }}
          onClick={() => alert("Sparkle/Glitter active state telemetry stream dispatched successfully.")}
          title="Ambient Highlights"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.79 9.85333L11.7498 6.49608C12.1095 5.23941 13.8905 5.23941 14.2501 6.49608L15.2089 9.85333C15.2696 10.0657 15.3834 10.2591 15.5396 10.4153C15.6958 10.5715 15.8892 10.6853 16.1016 10.746L19.4588 11.7047C20.7155 12.0644 20.7155 13.8454 19.4588 14.2051L16.1016 15.1638C15.8892 15.2245 15.6958 15.3383 15.5396 15.4945C15.3834 15.6507 15.2696 15.8441 15.2089 16.0565L14.2501 19.4137C13.8905 20.6704 12.1095 20.6704 11.7498 19.4137L10.7911 16.0565C10.7304 15.8441 10.6165 15.6507 10.4604 15.4945C10.3042 15.3383 10.1108 15.2245 9.8984 15.1638L6.54115 14.2051C5.28448 13.8454 5.28448 12.0644 6.54115 11.7047L9.8984 10.746C10.1108 10.6853 10.3042 10.5715 10.4604 10.4153C10.6165 10.2591 10.7304 10.0657 10.7911 9.85333M19.6126 17.8375C19.9257 16.9242 21.242 16.9232 21.554 17.8375L21.5821 17.9317L21.9028 19.2187L23.1898 19.5405C24.2298 19.8005 24.2298 21.276 23.1898 21.536L21.9028 21.8577L21.5821 23.1447C21.3222 24.1837 19.8456 24.1837 19.5856 23.1447L19.2638 21.8577L17.9768 21.536C16.9368 21.276 16.9368 19.7994 17.9768 19.5405L19.2638 19.2187L19.5856 17.9317L19.6126 17.8375ZM20.5833 20.3183C20.521 20.4018 20.4469 20.4759 20.3634 20.5382C20.4469 20.6006 20.521 20.6747 20.5833 20.7582C20.6457 20.6747 20.7197 20.6006 20.8032 20.5382C20.7197 20.4756 20.6456 20.4011 20.5833 20.3172M4.44598 2.66975C4.76882 1.72616 6.16307 1.75758 6.41548 2.764L6.73615 4.051L8.02315 4.37275C9.06315 4.63275 9.06315 6.10825 8.02315 6.36825L6.73615 6.69L6.41548 7.977C6.15548 9.01591 4.6789 9.01591 4.4189 7.977L4.09715 6.69L2.81015 6.36825C1.77015 6.10825 1.77015 4.63166 2.81015 4.37275L4.09715 4.051L4.4189 2.764L4.44598 2.66975ZM5.41665 5.15166C5.35422 5.23478 5.28016 5.30848 5.19673 5.3705C5.28031 5.43318 5.35438 5.50761 5.41665 5.5915C5.47892 5.50761 5.55299 5.43318 5.63657 5.3705C5.55307 5.30815 5.479 5.23517 5.41665 5.15166Z" fill="white"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
