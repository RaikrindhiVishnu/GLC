"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PricingHeroSection() {
  const router = useRouter();

  // Premium subscribers mockup list matching exact asset references
  const subscriberAvatars = [
    "/assets/stats/person1.1.svg",
    "/assets/stats/person1.2.svg",
    "/assets/stats/person1.3.svg",
  ];

  const [scale, setScale] = useState(1);
  const scalerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 900;
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
        position: "relative",
        width: "100%",
        height: "100vh", // Directly fits onto one screen depth entirely
        background: "#131600",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Background Cover Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.45))",
          zIndex: 1,
        }}
      />
      {/* Updated specifically to use the dedicated pricing hero background asset */}
      <img
        src="/assets/pricing/hero.svg"
        alt="Pricing Hero Backdrop"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* ─── TOP HEADER LAYER ─── */}
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
          padding: "0 40px",
          height: "110px",
          boxSizing: "border-box",
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

        {/* Central Left Menu Navigation Pill Capsule */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
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
            boxSizing: "border-box",
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

          {/* Slot 3: Active PRICING Tab Button */}
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
              boxShadow: "0px 20px 25px -5px rgba(78, 95, 126, 0.2), 0px 8px 10px -6px rgba(78, 95, 126, 0.2)",
              position: "relative",
              flexShrink: 0,
              cursor: "default",
              boxSizing: "border-box",
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
              PRICING
            </span>
          </button>

          {/* Slot 4: User Profile Tab Button linking perfectly to /profile */}
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

        {/* Rightmost User Controls */}
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
              boxSizing: "border-box",
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
              boxSizing: "border-box",
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

          {/* User Profile Avatar with route link */}
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
              boxSizing: "border-box",
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

      {/* ─── HERO TYPOGRAPHY & CONTEXT ─── */}
      <div
        ref={scalerRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          width: "819px",
          zIndex: 10,
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        {/* Top Tag Pill */}
        <div
          style={{
            background: "rgba(231, 232, 233, 0.2)",
            padding: "6px 16px",
            borderRadius: "9999px",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Exclusive Opportunity
          </span>
        </div>

        {/* Primary Headline mapping precise Figma lines exactly */}
        <h1
          style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "100px",
            lineHeight: "72px",
            letterSpacing: "-3.6px",
            textAlign: "center",
            color: "#FFFFFF",
            width: "819px",
            height: "144px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>
            Premium Investor
            <br />
            Access
          </span>
        </h1>

        {/* Subheading Text */}
        <p
          style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "32px",
            textAlign: "center",
            color: "#FFFFFF",
            width: "569px",
            height: "98px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>
            Unlock institutional-grade agricultural data,
            <br />
            verified land histories, and curated asset discovery
            <br />
            for the modern wealth manager.
          </span>
        </p>

        {/* Call To Action Buttons Row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            marginTop: "16px",
            justifyContent: "center",
          }}
        >
          {/* Primary Action Button */}
          <button
            onClick={() => {
              const el = document.getElementById("pricing-bento-grid");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 10px 15px -3px rgba(9, 20, 38, 0.1)",
              borderRadius: "9999px",
              padding: "16px 32px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              cursor: "pointer",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF" }}>
              Explore Pricing
            </span>
          </button>

          {/* Subscribed Investors Indicator Pill Array */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.25)",
              padding: "6px 16px 6px 6px",
              borderRadius: "9999px",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              {subscriberAvatars.map((src, i) => (
                <div
                  key={i}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "2px solid #131600",
                    marginLeft: i > 0 ? "-12px" : "0",
                    overflow: "hidden",
                    background: "#D9D9D9",
                  }}
                >
                  <Image src={src} alt="Investor" width={36} height={36} style={{ objectFit: "cover" }} />
                </div>
              ))}
              {/* +500 Cap */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "2px solid #131600",
                  marginLeft: "-12px",
                  background: "#E1E3E4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#0F2F4C" }}>
                  +500
                </span>
              </div>
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#FFFFFF", marginLeft: "12px" }}>
              Institutional managers joined
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
