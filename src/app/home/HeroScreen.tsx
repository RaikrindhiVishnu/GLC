"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroScreen() {
  const [searchVal, setSearchVal] = useState("");
  const router = useRouter();

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
            }}
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={22} height={22} />
          </button>

          {/* Crown/Wishlist Icon Tab */}
          <button
            id="nav-wishlist"
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
            }}
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Wishlist" width={22} height={20} />
          </button>

          {/* User Icon Tab — 48x48 pill, user 1.png at 21.62x21.62 */}
          <button
            id="nav-user"
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
            onClick={() => router.push("/home/unlockeddocuments")}
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
            onClick={() => router.push("/profile")}
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
          onClick={() => router.push("/search")}
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

      {/* ─── FLOATING BOTTOM-RIGHT BUTTON (Solid dark graphite capsule loaded with requested inline Sparkle SVG) ─── */}
      <div
        id="floating-left-menu"
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
  );
}
