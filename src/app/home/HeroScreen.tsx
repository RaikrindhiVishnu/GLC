"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroScreen() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <section
      id="hero-screen"
      style={{
        position: "relative",
        width: "100%",
        height: "960px",
        overflow: "hidden",
      }}
    >
      {/* Background Image + Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
          zIndex: 1,
        }}
      />
      <Image
        src="/assets/home/HeroScreen/hero.svg"
        alt="Farmland background"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* ─── TOP BAR ─── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 60px",
          height: "96px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital"
            width={150}
            height={64}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Center Nav Pill */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "10px",
            gap: "10px",
            width: "341px",
            height: "72px",
            background: "rgba(255,255,255,0.1)",
            boxShadow:
              "0px 8px 6px rgba(0,0,0,0.05), inset 3px 4px 2px -3px rgba(255,255,255,0.55), inset 0px -1px 1px rgba(255,255,255,0.25), inset 0px 1px 1px rgba(255,255,255,0.25)",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            borderRadius: "100px",
          }}
        >
          {/* HOME Active Button */}
          <button
            id="nav-home"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0",
              width: "147px",
              height: "52px",
              background:
                "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              boxShadow:
                "0px 20px 25px -5px rgba(78,95,126,0.2), 0px 8px 10px -6px rgba(78,95,126,0.2)",
              position: "relative",
              flexShrink: 0,
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
              HOME
            </span>
          </button>

          {/* Search Icon Tab */}
          <button
            id="nav-search"
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
            }}
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={22} height={22} />
          </button>

          {/* Crown/Wishlist Icon Tab */}
          <button
            id="nav-wishlist"
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
            }}
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Wishlist" width={22} height={20} />
          </button>

          {/* User Icon Tab — 48x48 pill, user 1.png at 21.62x21.62 */}
          <button
            id="nav-user"
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
              flexShrink: 0,
            }}
          >
            <Image
              src="/assets/home/HeroScreen/user 1.png"
              alt="User"
              width={21.62}
              height={21.62}
            />
          </button>
        </div>

        {/* Right side icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

          {/* Lock Button — glassmorphism pill 52×51.39px */}
          <button
            id="nav-lock"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "12.53px",
              gap: "12.53px",
              width: "52px",
              height: "51.39px",
              background: "rgba(255,255,255,0.1)",
              boxShadow:
                "0px 10.0267px 7.52px rgba(0,0,0,0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255,255,255,0.55), inset 0px -1.25333px 1.25333px rgba(255,255,255,0.25), inset 0px 1.25333px 1.25333px rgba(255,255,255,0.25)",
              backdropFilter: "blur(62.6667px)",
              WebkitBackdropFilter: "blur(62.6667px)",
              borderRadius: "125.333px",
              border: "none",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Lock" width={26.32} height={26.32} style={{ flexShrink: 0 }} />
          </button>

          {/* Bell Button — same glassmorphism pill + red dot */}
          <button
            id="nav-bell"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "12.53px",
              gap: "12.53px",
              width: "52px",
              height: "51.39px",
              background: "rgba(255,255,255,0.1)",
              boxShadow:
                "0px 10.0267px 7.52px rgba(0,0,0,0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255,255,255,0.55), inset 0px -1.25333px 1.25333px rgba(255,255,255,0.25), inset 0px 1.25333px 1.25333px rgba(255,255,255,0.25)",
              backdropFilter: "blur(62.6667px)",
              WebkitBackdropFilter: "blur(62.6667px)",
              borderRadius: "125.333px",
              border: "none",
              cursor: "pointer",
              position: "relative",
              isolation: "isolate",
              boxSizing: "border-box",
            }}
          >
            <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications" width={26.32} height={26.32} style={{ flexShrink: 0 }} />
            {/* Red dot */}
            <span
              style={{
                position: "absolute",
                top: "13.53px",
                right: "11.61px",
                width: "6.3px",
                height: "6.3px",
                background: "#E53935",
                border: "0.904652px solid rgba(255,255,255,0.9)",
                borderRadius: "899.968px",
                zIndex: 1,
              }}
            />
          </button>

          <div
            id="nav-avatar"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              border: "none", // Removed outer line
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
                transform: "scale(1.5)", // Increased zoom
                objectPosition: "center"
              }}
            />
          </div>

        </div>
      </div>

      {/* ─── HERO TEXT ─── */}
      <div
        style={{
          position: "absolute",
          left: "220px",
          top: "209px",
          width: "1018px",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          Discover Premium Farmlands
        </h1>
      </div>

      {/* ─── SEARCH BAR ─── */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "513px",
          width: "672px",
          height: "80px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 15px",
          gap: "10px",
          background: "rgba(255,255,255,0.1)",
          boxShadow:
            "0px 8px 6px rgba(0,0,0,0.05), inset 3px 4px 2px -3px rgba(255,255,255,0.55), inset 0px -1px 1px rgba(255,255,255,0.25), inset 0px 1px 1px rgba(255,255,255,0.25)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          borderRadius: "100px",
          zIndex: 5,
        }}
      >
        {/* Search Input */}
        <input
          id="search-investments"
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Search Investments..."
          style={{
            flex: 1,
            height: "60px",
            background: "transparent",
            border: "none",
            outline: "none",
            padding: "18px 32px 19px 18px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "23px",
            color: "#FFFFFF",
          }}
        />

        {/* Search Button */}
        <button
          id="btn-search"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
            width: "50px",
            height: "50px",
            background: "#FFFFFF",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <Image src="/assets/home/HeroScreen/inside search.svg" alt="Search" width={18} height={18} />
        </button>
      </div>

      {/* ─── FLOATING BOTTOM-RIGHT BUTTON (Left menu.svg) ─── */}
      <div
        id="floating-left-menu"
        style={{
          position: "absolute",
          right: "60.88px",
          bottom: "20px",
          width: "52px",
          height: "51.39px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "12.5333px",
          gap: "12.53px",
          background: "rgba(255,255,255,0.1)",
          boxShadow:
            "0px 10.0267px 7.52px rgba(0,0,0,0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255,255,255,0.55), inset 0px -1.25333px 1.25333px rgba(255,255,255,0.25), inset 0px 1.25333px 1.25333px rgba(255,255,255,0.25)",
          backdropFilter: "blur(62.6667px)",
          WebkitBackdropFilter: "blur(62.6667px)",
          borderRadius: "125.333px",
          boxSizing: "border-box",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        <Image src="/assets/home/HeroScreen/si_ai-fill.svg" alt="AI Assistant" width={26.32} height={26.32} />
      </div>

    </section>
  );
}
