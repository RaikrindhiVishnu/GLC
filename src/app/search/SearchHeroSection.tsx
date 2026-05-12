"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchHeroSection() {
  const router = useRouter();
  // Straightforward editable query string devoid of highlights or squashed text spacing gaps
  const [searchVal, setSearchVal] = useState("I am looking for a farm in Andhra Pradesh with a budget of ₹5Cr");

  return (
    <section
      id="search-hero-screen"
      style={{
        position: "relative",
        width: "100%",
        height: "960px", // Master depth bounds spec
        overflow: "hidden",
      }}
    >
      {/* Background Cover Image with Gradient Darkening Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
          zIndex: 1,
        }}
      />
      {/* Set primary hero background directly to dedicated search screen backdrop asset */}
      <Image
        src="/assets/search/search.svg"
        alt="Farmland Search screen cover background"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* ─── TOP HEADER LAYER CONTAINING LOGO, CENTRAL MENU CAPSULE, AND RIGHTMOST CONTROLS ─── */}
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
        {/* Leftmost Brand Logo */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer", flexShrink: 0 }} onClick={() => router.push("/home")}>
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Brand"
            width={150}
            height={64}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Central Left Menu Navigation Pill Capsule */}
        {/* Rendered beautifully as a high-fidelity glossy frosted glass card */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "10px",
            gap: "10px",
            width: "341px",
            height: "72px",
            background: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow:
              "0px 12px 32px rgba(0, 0, 0, 0.12), inset 0px 1px 2px rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            borderRadius: "100px",
            flexShrink: 0,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
          }}
        >
          {/* HOME Tab Button */}
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

          {/* SEARCH Expanded Active Pill Button */}
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0",
              width: "147px",
              height: "52px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9999px",
              border: "none",
              boxShadow: "0px 20px 25px -5px rgba(78,95,126,0.2), 0px 8px 10px -6px rgba(78,95,126,0.2)",
              position: "relative",
              flexShrink: 0,
              cursor: "default",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "16px",
                lineHeight: "28px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                letterSpacing: "0.02em",
              }}
            >
              SEARCH
            </span>
          </button>

          {/* Wishlist Icon Tab Button */}
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
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Wishlist navigation" width={22} height={20} />
          </button>

          {/* User Profile Tab Button */}
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
            <Image src="/assets/home/HeroScreen/user 1.png" alt="User routing tab" width={21.62} height={21.62} />
          </button>
        </div>

        {/* Rightmost User Context Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {/* Unlock action icon */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "52px",
              height: "52px",
              background: "rgba(255,255,255,0.1)",
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
              background: "rgba(255,255,255,0.1)",
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
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: "50%",
              }}
            />
          </button>

          {/* User Profile Avatar wrapper */}
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

      {/* ─── FOREGROUND HERO TYPOGRAPHY ─── */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "220px",
          width: "100%",
          maxWidth: "1018px",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "100px",
            lineHeight: "106px",
            letterSpacing: "-5px",
            textAlign: "center",
            color: "#FFFFFF",
            filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.05))",
          }}
        >
          Find your next<br />high-yield asset
        </h1>
      </div>

      {/* ─── INTERACTIVE SEARCH QUERY BAR (PREMIUM GLASS CARD) ─── */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "513px",
          width: "862px",
          height: "88px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 18px 10px 40px",
          background: "rgba(255, 255, 255, 0.12)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow:
            "0px 12px 32px rgba(0, 0, 0, 0.12), inset 0px 1px 2px rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          borderRadius: "100px",
          zIndex: 5,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
        }}
      >
        {/* Straightforward editable input bar eliminating parsed highlight overlays completely to guarantee natural flawless character kerning spacing */}
        <input
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "39px",
            color: "#FFFFFF",
            paddingRight: "20px",
          }}
        />

        {/* Rightmost section: perfectly wrapped inside a pure white round circular disc button */}
        <button
          style={{
            width: "52px",
            height: "52px",
            background: "#FFFFFF",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow = "0px 6px 16px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.1)";
          }}
        >
          <Image
            src="/assets/home/HeroScreen/inside search.svg"
            alt="Filter Sliders Controls button"
            width={24}
            height={24}
            style={{ objectFit: "contain" }}
          />
        </button>
      </div>

      {/* ─── RIGHT BOTTOM FLOATING TRIGGER (Left menu.svg mounted natively exactly as commanded) ─── */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "60px", // Anchored securely in the right bottom corner of hero page
          zIndex: 20,
          cursor: "pointer",
          transition: "transform 0.2s ease, filter 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.filter = "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.4))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.filter = "none";
        }}
      >
        <div style={{ position: "relative", width: "72px", height: "72px" }}>
          <Image
            src="/assets/home/Left menu.svg"
            alt="Left menu asset client context trigger"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

    </section>
  );
}
