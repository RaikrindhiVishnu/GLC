"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SellYourLandHero() {
  const router = useRouter();

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
        width: "100%",
        height: "960px",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Container holding primary background cover fill */}
      <div
        style={{
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
            src="/assets/sellyourland/hero.svg"
            alt="Sell Your Land Premium Estate Snapshot"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Cinematic Gradient Overlays matching absolute design intervals */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))",
            zIndex: 1,
          }}
        />

        {/* TOP SHELL CAPSULE CONTROLS FRAME */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            inset: 0,
            pointerEvents: "none",
            zIndex: 5,
          }}
        >
          {/* Central Logo Container */}
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

          {/* Central Absolute Line-Art Capsule Nav Bar */}
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
              left: "calc(50% - 242px/2)",
              top: "59px",
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              borderRadius: "100px",
              pointerEvents: "auto",
            }}
          >
            {/* Tab 1: Home Link */}
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

            {/* Tab 2: Core Search Option */}
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
              <Image src="/assets/home/HeroScreen/search.svg" alt="Discover Lands" width={21.62} height={21.62} />
            </button>

            {/* Tab 3: Crown Pool Link */}
            <button
              onClick={() => router.push("/pool-buying")}
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
              <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pool Engine Options" width={21.66} height={19.49} />
            </button>

            {/* Tab 4: Direct Dashboard Core */}
            <button
              onClick={() => router.push("/home/myassets")}
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
              <Image src="/assets/home/HeroScreen/user 1.png" alt="User Portal Core" width={21.62} height={21.62} />
            </button>
          </div>

          {/* Right Action Shell Item 1: Unlock Dashboard Base */}
          <button
            onClick={() => router.push("/home/unlockeddocuments")}
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
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock actions module" width={26.32} height={26.32} />
          </button>

          {/* Right Action Shell Item 2: Active Flag Context Notifications */}
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
            {/* Red Alert Point slot */}
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

          {/* Right Action Shell Item 3: Avatar Shell Link */}
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
              alt="User Account Link"
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }}
            />
          </div>
        </div>
      </div>

      {/* ─── HERO TYPOGRAPHY FRAME OVERLAYS ─── */}
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
        {/* Single-line centered main title layer matching Figma absolute dump specs */}
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
            Sell Your Land
          </h1>
        </div>

        {/* Multi-line exact subtitle split string dump overlay block */}
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

      {/* Floating Bottom Right Menu Icon (Solid dark graphite capsule loaded with requested inline Sparkle SVG) */}
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
  );
}
