"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DetailsHero() {
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
            src="/assets/poolinvestments/pooldetailshero.svg"
            alt="GLC SOS 01 Estate Overview Background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Gradient Overlay Layer matching specific opacity intervals */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
            zIndex: 1,
          }}
        />
      </div>

      {/* TOP FLOATING NAVIGATION SUITE WITH CENTERED VIRTUAL 1440px GRID WRAPPER */}
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
          {/* Logo left */}
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

          {/* Right side contextual toggles */}
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

          {/* Notifications Icon Pill */}
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
            <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications context" width={26.32} height={26.32} />
            {/* Active Status Ring Beacon */}
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

          {/* Profile Avatar Trigger Button */}
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
              alt="User Account Context"
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }}
            />
          </div>
        </div>
      </div>

      {/* ─── INNER CONTENT WRAPPER ANCHORED AT 1440px VIRTUAL GRID BOUNDARY ─── */}
      <div
        style={{
          position: "relative",
          width: "1440px",
          maxWidth: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          pointerEvents: "none",
        }}
      >
        {/* LOWER TITLE TYPOGRAPHY LAYER */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            padding: "0px 48px 96px",
            width: "100%",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Active Status Badge Container */}
          <div
            style={{
              boxSizing: "border-box",
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "6px 16px",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              borderRadius: "9999px",
              marginBottom: "24px", // Clean spacing below ACTIVE & MANAGED tag
            }}
          >
            {/* Green glowing status ring */}
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#BCD225",
                borderRadius: "9999px",
                flexShrink: 0,
                marginRight: "8px",
              }}
            />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "16px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#091426",
              }}
            >
              ACTIVE & MANAGED
            </span>
          </div>

          {/* Main Title Heading */}
          <h1
            style={{
              margin: "0 0 16px 0", // Exquisite explicit spacing after GLC SOS 01
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "64px",
              lineHeight: "1",
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
            }}
          >
            GLC SOS 01
          </h1>

          {/* Subheading Text Slot */}
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "22px",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Sandalwood & Organic Estate - Zaheerabad
          </span>
        </div>

        {/* OVERLAPPING WEALTH SNAPSHOT CARD ANCHORED INSIDE 1440px COLUMN BOUNDS */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "40px",
            position: "absolute",
            width: "500px",
            height: "204px",
            right: "48px",
            bottom: "132px",
            background: "rgba(255, 255, 255, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "48px",
            zIndex: 15,
            pointerEvents: "auto",
            boxShadow: "0px 20px 25px -5px rgba(9, 20, 38, 0.05), 0px 8px 10px -6px rgba(9, 20, 38, 0.05)",
          }}
        >
          {/* Core Layout Data Grid Wrapper */}
          <div
            style={{
              boxSizing: "border-box",
              width: "418px",
              height: "122px",
              position: "relative",
            }}
          >
            {/* Top Row: Holding & Value Split */}
            {/* Left Block */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "4px",
                position: "absolute",
                height: "51px",
                left: "0px",
                right: "225px",
                top: "0px",
              }}
            >
              <span
                style={{
                  width: "193px",
                  height: "15px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                YOUR HOLDING
              </span>
              <span
                style={{
                  width: "193px",
                  height: "32px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "32px",
                  display: "flex",
                  alignItems: "center",
                  color: "#131600",
                }}
              >
                5.0 Acres
              </span>
            </div>

            {/* Right Block */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "4px",
                position: "absolute",
                height: "51px",
                left: "225px",
                right: "0px",
                top: "0px",
              }}
            >
              <span
                style={{
                  width: "193px",
                  height: "15px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                CURRENT ESTIMATED VALUE
              </span>
              <span
                style={{
                  width: "193px",
                  height: "32px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  lineHeight: "32px",
                  display: "flex",
                  alignItems: "center",
                  color: "#091426",
                }}
              >
                ₹1.50 Cr
              </span>
            </div>

            {/* Bottom Row: Management Plan & Target Payout Slots */}
            {/* Bottom Left Block */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px 0px 24px",
                position: "absolute",
                height: "39px",
                left: "0px",
                right: "225px",
                top: "83px",
              }}
            >
              <span
                style={{
                  width: "193px",
                  height: "15px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                MANAGEMENT PLAN
              </span>
              <span
                style={{
                  marginTop: "2px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#091426",
                }}
              >
                50/50 Intercropping System
              </span>
            </div>

            {/* Bottom Right Block */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px 0px 24px",
                position: "absolute",
                height: "39px",
                left: "225px",
                right: "0px",
                top: "83px",
              }}
            >
              <span
                style={{
                  width: "193px",
                  height: "15px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#45474C",
                }}
              >
                NEXT TARGET PAYOUT
              </span>
              <span
                style={{
                  marginTop: "2px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#00629E",
                }}
              >
                May 2026 (Estimated)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
