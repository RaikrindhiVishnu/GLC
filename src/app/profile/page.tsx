"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* ─── FULL WIDTH EDGE-TO-EDGE LANDSCAPE HEADER COVER OVERLAY ─── */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "479.05px",
          left: "0px",
          top: "0px",
          zIndex: 0,
          overflow: "hidden",
          background: "#D9D9D9",
        }}
      >
        {/* Linear gradient shadow overlays mapping precisely to the requested design token */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
            zIndex: 1,
          }}
        />
        <img
          src="/assets/account/account-hero.svg"
          alt="Profile Background Cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />
      </div>

      {/* Centered Scalable Master Frame matching exactly the 1440px grid container */}
      <div
        style={{
          position: "relative",
          width: "1440px",
          minHeight: "1230px",
          background: "transparent",
          flexShrink: 0,
        }}
      >

        {/* Search floating trigger overlay frame mapped natively inside background banner */}
        <div
          style={{
            position: "absolute",
            width: "356.7px",
            height: "35.07px",
            left: "calc(50% - 356.7px/2)",
            top: "414.43px", // centered inside the visible lower section of the background cover layer
            background: "#FFFFFF",
            borderRadius: "37.07px",
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            zIndex: 5,
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              color: "#A1A1AA",
              flexGrow: 1,
            }}
          >
            Search documents, assets...
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        {/* ─── TOP MASTER BAR WITH CAPSULE NAVIGATION ─── */}
        <div
          style={{
            position: "absolute",
            top: "59px",
            left: "0px",
            right: "0px",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 60px",
            zIndex: 30,
          }}
        >
          {/* Logo Container */}
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

          {/* Master 4-Slot Capsule Container */}
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
              boxShadow: "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              borderRadius: "100px",
              flexShrink: 0,
            }}
          >
            {/* Slot 1: HOME Navigation Trigger */}
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

            {/* Slot 2: SEARCH Trigger */}
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
              <Image src="/assets/home/HeroScreen/search.svg" alt="Search routing link" width={22} height={22} />
            </button>

            {/* Slot 3: WISHLIST / PRICING Trigger */}
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
              <Image src="/assets/home/HeroScreen/Vector.svg" alt="Wishlist/Pricing link" width={22} height={20} />
            </button>

            {/* Slot 4: Active Expanded PROFILE Button */}
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
                PROFILE
              </span>
            </button>
          </div>

          {/* Rightmost Auxiliary Bar Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            {/* Unlock icon pill */}
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
              }}
            >
              <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock actions" width={26.32} height={26.32} />
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
              <Image src="/assets/home/HeroScreen/notification.svg" alt="Live Alerts" width={26.32} height={26.32} />
              <span
                style={{
                  position: "absolute",
                  top: "13.53px",
                  right: "11.61px",
                  width: "6.3px",
                  height: "6.3px",
                  background: "#E53935",
                  border: "0.9px solid rgba(255, 255, 255, 0.9)",
                  borderRadius: "50%",
                  zIndex: 2,
                }}
              />
            </button>

            {/* User avatar round bubble */}
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                boxShadow: "0px 1.8px 10.8px rgba(0, 0, 0, 0.03)",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                border: "2px solid rgba(255, 255, 255, 0.8)",
              }}
            >
              <img
                src="/assets/stats/person1.1.svg"
                alt="Active session account"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>

        {/* ─── CENTRAL HERO GLASSMORPHIC PROFILE CONTAINER (Frame 12) ─── */}
        <div
          style={{
            position: "absolute",
            width: "569px",
            height: "950px",
            left: "calc(50% - 569px/2)",
            top: "226.64px",
            zIndex: 10,
          }}
        >
          {/* Master Inset Zoomed Avatar Portrait structured as a square with curved edges */}
          <div
            style={{
              position: "absolute",
              width: "241.24px",
              height: "241.24px",
              left: "calc(50% - 241.24px/2)",
              top: "39px",
              borderRadius: "72.37px",
              boxShadow: "0px 0px 0px 6px #FFFFFF, 0px 37px 75px -18px rgba(0, 0, 0, 0.35)",
              overflow: "hidden",
              zIndex: 20,
              background: "#F8F9FA",
            }}
          >
            <img
              src="/assets/account/account-profile.svg"
              alt="Arjun Profile Frame Portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Main Dark Body Backing matching Frame 11 / Rectangle 3 specifications */}
          <div
            style={{
              position: "absolute",
              width: "569px",
              height: "732px",
              left: "0px",
              top: "157px",
              background: "#091426",
              borderRadius: "45px",
              boxShadow: "0px 24px 50px rgba(9, 20, 38, 0.25)",
              overflow: "hidden",
            }}
          >
            {/* Breathtaking Bottom Right Ambient Neon Circle Glowing Decor elements */}
            <div
              style={{
                position: "absolute",
                width: "320px",
                height: "320px",
                right: "-75px",
                bottom: "-135px",
                border: "24px solid rgba(0, 98, 158, 0.3)",
                filter: "blur(20px)",
                borderRadius: "9999px",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
            <div
              style={{
                boxSizing: "border-box",
                position: "absolute",
                width: "256px",
                height: "256px",
                right: "-35px",
                bottom: "-95px",
                border: "1px solid rgba(0, 98, 158, 0.5)",
                borderRadius: "9999px",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "128px",
                height: "128px",
                right: "45px",
                bottom: "-15px",
                background: "rgba(0, 98, 158, 0.2)",
                filter: "blur(32px)",
                borderRadius: "9999px",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* User Title Heading accompanied by absolute verified crown seal */}
            <div
              style={{
                position: "absolute",
                top: "186px",
                left: "0px",
                right: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                zIndex: 10,
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "45px",
                  lineHeight: "57px",
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                }}
              >
                Arjun Vardhan
              </span>

              {/* Verify Badge Seal */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#2780C4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 2px 8px rgba(39, 128, 196, 0.4)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M2 19h20v2H2v-2zm1.5-3l1.5-10 5.5 4 3-5 3 5 5.5-4 1.5 10H3.5z" />
                </svg>
              </div>
            </div>

            {/* Sub-Actions Row (Tier Badge + Edit Profile + Share trigger) */}
            <div
              style={{
                position: "absolute",
                top: "284px",
                left: "35px",
                right: "35px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 10,
              }}
            >
              {/* Silver Tier Label Pill */}
              <div
                style={{
                  height: "50px",
                  background: "#2780C4",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "17.6px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Silver Tier • 4 Unlocks Available
                </span>
              </div>

              {/* Edit Profile Action Pill */}
              <button
                style={{
                  height: "50px",
                  background: "#F8F9FA",
                  borderRadius: "20px",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0 18px",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0F2F4C">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "17.6px",
                    color: "#0F2F4C",
                    letterSpacing: "-0.04em",
                  }}
                >
                  Edit Profile
                </span>
              </button>

              {/* Share Circular Hub */}
              <button
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#F8F9FA",
                  borderRadius: "50%",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>

            {/* Total Estimated Assets Label Block */}
            <div
              style={{
                position: "absolute",
                top: "386px",
                left: "48px",
                zIndex: 10,
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "22.88px",
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                  opacity: 0.9,
                }}
              >
                Total Estimated Assets
              </span>
            </div>

            {/* Horizontal Line Grid Divider placed exactly between title and numbers */}
            <div
              style={{
                position: "absolute",
                top: "433px",
                left: "48px",
                width: "430px",
                height: "1px",
                background: "#CCCCCC",
                zIndex: 10,
              }}
            />

            {/* Portfolio Net Worth Amount Header */}
            <div
              style={{
                position: "absolute",
                top: "448px",
                left: "48px",
                zIndex: 10,
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "60px",
                  lineHeight: "60px",
                  letterSpacing: "-3px",
                  color: "#FFFFFF",
                }}
              >
                ₹1,248,500.00
              </span>
            </div>

            {/* Bottom Glassy Control Triggers Row */}
            <div
              style={{
                position: "absolute",
                top: "574px",
                left: "48px",
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                zIndex: 10,
              }}
            >
              {/* Wallet History Button */}
              <button
                style={{
                  height: "46px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "32px",
                  padding: "0 24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)")}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  Wallet History
                </span>
              </button>

              {/* Manage Subscription Button */}
              <button
                onClick={() => router.push("/profile/managesubscriptions")}
                style={{
                  height: "46px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "32px",
                  padding: "0 24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)")}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  Manage Subscription
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ─── LEFT SIDEBAR ARRAYS: IDENTITY & COMPLIANCE ─── */}
        <div
          style={{
            position: "absolute",
            width: "391px",
            height: "536px",
            left: "23px",
            top: "502px", // aligns flush below header cover landscape level
            background: "#FFFFFF",
            borderRadius: "32px",
            boxShadow: "0px 10px 25px -5px rgba(0, 0, 0, 0.03)",
            boxSizing: "border-box",
            padding: "32px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            zIndex: 10,
          }}
        >
          {/* Sub-section 1: Identity & Contact Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
            {/* Header label */}
            <div style={{ padding: "0 16px" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#0F2F4C",
                  textTransform: "uppercase",
                }}
              >
                Identity & Contact
              </span>
            </div>

            {/* Inner rows list container */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid #FAFAFA",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.02)",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Row 1: Full Name */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A", whiteSpace: "nowrap" }}>
                  Full Name
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>
                  Arjun Vardhan
                </span>
              </div>

              {/* Row 2: Mobile Number */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                  borderTop: "1px solid #FAFAFA",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A", whiteSpace: "nowrap" }}>
                  Mobile Number
                </span>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", whiteSpace: "nowrap" }}>
                    +91 98765 43210
                  </span>
                  <span
                    style={{
                      background: "#EFF6FF",
                      color: "#2563EB",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "10px",
                      padding: "2px 8px",
                      borderRadius: "9999px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    OTP VERIFIED
                  </span>
                </div>
              </div>

              {/* Row 3: Email Address */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                  borderTop: "1px solid #FAFAFA",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A", whiteSpace: "nowrap" }}>
                  Email Address
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>
                  arjun.w@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Sub-section 2: Regulatory Compliance Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", marginTop: "8px" }}>
            {/* Header label */}
            <div style={{ padding: "0 16px" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "1.2px",
                  color: "#71717A",
                  textTransform: "uppercase",
                }}
              >
                Regulatory Compliance
              </span>
            </div>

            {/* Inner rows list container */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid #FAFAFA",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.02)",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Row 1: Aadhaar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A" }}>
                  Primary ID / Aadhaar
                </span>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#059669">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#059669" }}>
                    Verified
                  </span>
                </div>
              </div>

              {/* Row 2: PAN Card */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                  borderTop: "1px solid #FAFAFA",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A" }}>
                  PAN Card Number
                </span>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#059669">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#059669" }}>
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom guideline label */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", padding: "4px 16px", opacity: 0.6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#0F2F4C" style={{ flexShrink: 0 }}>
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", color: "#71717A", lineHeight: "16px", width: "235.45px" }}>
                Your data is encrypted and stored as per SEBI<br />guidelines.
              </span>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDEBAR ARRAYS: ACTIVE OPERATIONS & PREFERENCES ─── */}
        {/* Block 1: Active Tracking */}
        <div
          style={{
            position: "absolute",
            width: "377px",
            height: "392px",
            left: "1034px",
            top: "502px",
            background: "#FFFFFF",
            borderRadius: "32px",
            boxShadow: "0px 10px 25px -5px rgba(0, 0, 0, 0.03)",
            boxSizing: "border-box",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            zIndex: 10,
          }}
        >
          {/* Header Label */}
          <div style={{ paddingBottom: "24px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#0F2F4C",
                textTransform: "uppercase",
              }}
            >
              Active Operations
            </span>
          </div>

          {/* Timeline Process Operations Container */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", flexGrow: 1 }}>
            {/* Operation 1 */}
            <div style={{ display: "flex", flexDirection: "row", gap: "16px", height: "70px" }}>
              {/* Timeline Track Marker Left */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2780C4", flexShrink: 0 }} />
                <div style={{ width: "2px", height: "54px", background: "#E7E8E9", marginTop: "4px" }} />
              </div>
              {/* Content Description Right */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", lineHeight: "20px" }}>
                  Farmhouse Construction
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", lineHeight: "16px" }}>
                  Plot 24A - Concrete Foundation Phase
                </span>
                {/* Visual indicator slider bar */}
                <div style={{ width: "100%", height: "6px", background: "#F3F4F5", borderRadius: "9999px", overflow: "hidden", marginTop: "4px" }}>
                  <div style={{ width: "65%", height: "100%", background: "#2780C4" }} />
                </div>
              </div>
            </div>

            {/* Operation 2 */}
            <div style={{ display: "flex", flexDirection: "row", gap: "16px", height: "56px" }}>
              {/* Timeline Track Marker Left */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00629E", flexShrink: 0 }} />
                <div style={{ width: "2px", height: "40px", background: "#E7E8E9", marginTop: "4px" }} />
              </div>
              {/* Content Description Right */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", lineHeight: "20px" }}>
                  Maintenance Cycle
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", lineHeight: "16px" }}>
                  Orchard 09 - Seasonal Pruning
                </span>
              </div>
            </div>

            {/* Operation 3 */}
            <div style={{ display: "flex", flexDirection: "row", gap: "16px", height: "40px" }}>
              {/* Timeline Track Marker Left */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#75777D", flexShrink: 0 }} />
              </div>
              {/* Content Description Right */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", lineHeight: "20px" }}>
                  Verifications
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", lineHeight: "16px" }}>
                  Annual Soil Report pending
                </span>
              </div>
            </div>
          </div>

          {/* Attached bottom view live feeds button trigger */}
          <div style={{ paddingTop: "16px", borderTop: "1px solid #FAFAFA", display: "flex", alignItems: "center" }}>
            <button
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                padding: 0,
              }}
              onClick={() => {
                alert("Navigating to live feed networks...");
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#00629E" }}>
                View Live Feeds
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Block 2: Support & Preferences Section */}
        <div
          style={{
            position: "absolute",
            width: "377px",
            height: "157px",
            left: "1034px",
            top: "929px", // spaced exactly beneath timeline items matching screenshot vertical index
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 10,
          }}
        >
          {/* Header Label */}
          <div style={{ padding: "0 16px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "1.2px",
                color: "#0F2F4C",
                textTransform: "uppercase",
              }}
            >
              Support & Preferences
            </span>
          </div>

          {/* Support rows items box */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "24px",
              boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.02)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Row 1: Support Centre */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 24px",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
              onClick={() => router.push("/home/supportcenter")}
            >
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>
                  Support Centre
                </span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4D4D8" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>

            {/* Row 2: Saved Farmlands */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 24px",
                borderTop: "1px solid #FAFAFA",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
              onClick={() => router.push("/profile/savedfarmlands")}
            >
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>
                  Saved Farmlands
                </span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4D4D8" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ─── TRAILING SIBLING CALL TO ACTION & FOOTER BANNER (100% Edge-to-Edge) ─── */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
        <CTA />
        <Footer />
      </section>
    </main>
  );
}
