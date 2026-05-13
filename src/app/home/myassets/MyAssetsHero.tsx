"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MyAssetsHero() {
  const router = useRouter();

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "960px",
        background: "#091426",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {/* Background Layer with Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))",
          zIndex: 1,
        }}
      />
      <Image
        src="/assets/my-assets/hero.svg"
        alt="My Assets Background Banner"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
      />

      {/* ─── EXACT 1440px FIGMA ALIGNED LAYOUT SPACE ─── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1440px",
          height: "960px",
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        {/* Brand Logo */}
        <div
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

        {/* Central Left Menu Navigation Pill Capsule */}
        {/* Central Left Menu Navigation Pill Capsule (Figma Layout Parity: Inactive state line-art icons) */}
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
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search routing tab" width={22} height={22} />
          </button>

          {/* Slot 3: Pricing Icon Tab Button */}
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
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing Wishlist tab" width={21.66} height={19.49} />
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
          >
            <Image src="/assets/home/HeroScreen/user 1.png" alt="User routing tab" width={21.62} height={21.62} />
          </button>
        </div>

        {/* Right side controls */}
        {/* Unlock Button Pill */}
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
          <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock Console" width={26.32} height={26.32} />
        </button>

        {/* Notification Bell Pill */}
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
          <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications Context" width={26.32} height={26.32} />
          {/* Active Red Status Beacon */}
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

        {/* Avatar Capsule Circle */}
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
            alt="User Avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }}
          />
        </div>

        {/* ─── HERO TYPOGRAPHY FRAME ─── */}
        <div
          onClick={() => router.push("/home/myassets/details")}
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px 32px",
            gap: "32px",
            position: "absolute",
            width: "896px",
            left: "calc(50% - 896px/2)",
            top: "320px",
            pointerEvents: "auto",
            cursor: "pointer",
          }}
        >
          {/* Main Title Heading Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "832px",
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
              }}
            >
              My Assets
            </h1>
          </div>

          {/* Subheading Text Block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "832px",
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: "954px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "32px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                color: "#FFFFFF",
              }}
            >
              Manage your premium agricultural assets, track performance, and access your secure legal vault.
            </p>
          </div>

          {/* Single Line Tier Indicator Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push("/home/myassets/details");
            }}
            style={{
              boxSizing: "border-box",
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 32px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "100px",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              cursor: "pointer",
              whiteSpace: "nowrap",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "2px",
                color: "#FFFFFF",
                whiteSpace: "nowrap",
              }}
            >
              TIER: DIGITAL CURATOR
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
