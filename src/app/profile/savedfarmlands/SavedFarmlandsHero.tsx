"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SavedFarmlandsHero() {
  const router = useRouter();

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden shrink-0 select-none">
      {/* Background Layer with Darkened Cinematic Overlays matching requested tokens */}
      <div className="absolute inset-0 z-0 bg-[#F8F9FA]">
        <Image
          src="/assets/profile/savedfarmland/hero..svg"
          alt="Saved Farmlands Atmospheric Cover"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dual Linear Gradient Overlays for optimal text clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50 z-1" />
      </div>

      {/* Edge-to-Edge Responsive Top Suite Mapped precisely to Figma Spacing */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 md:px-12 lg:px-[60px] pt-[30px] md:pt-[24px]">
        {/* Brand Logo routing to Home */}
        <div
          onClick={() => router.push("/home")}
          className="cursor-pointer flex items-center shrink-0 transition-transform hover:scale-105 active:scale-95"
          title="Green Land Capital Brand Index"
        >
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Brand Logo"
            width={150}
            height={64}
            className="w-[110px] md:w-[150px] h-auto object-contain"
          />
        </div>

        {/* Central Nav Capsule Frame mapped precisely to requested coordinates */}
        <div 
          className="hidden md:flex flex-row items-center p-[10px] gap-[10px] bg-white/10 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_8px_6px_rgba(0,0,0,0.05)] transition-all hover:bg-white/15"
          style={{
            boxShadow: "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)"
          }}
        >
          {/* Slot 1: HOME */}
          <button
            onClick={() => router.push("/home")}
            className="flex flex-col justify-center items-center w-12 h-12 rounded-full transition-transform hover:scale-110 active:scale-95 bg-transparent"
            title="Navigate to Home Dashboard"
          >
            <svg width="21.62" height="21.62" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>

          {/* Slot 2: SEARCH */}
          <button
            onClick={() => router.push("/search")}
            className="flex flex-col justify-center items-center w-12 h-12 rounded-full transition-transform hover:scale-110 active:scale-95 bg-transparent"
            title="Search Platform Real Assets"
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search trigger" width={21.62} height={21.62} className="w-[21.62px] h-[21.62px]" />
          </button>

          {/* Slot 3: PRICING */}
          <button
            onClick={() => router.push("/pricing")}
            className="flex flex-col justify-center items-center w-12 h-12 rounded-full transition-transform hover:scale-110 active:scale-95 bg-transparent"
            title="Subscriptions & Pricing Plans"
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing shortcut" width={21.66} height={19.49} className="w-[21.66px] h-[19.49px]" />
          </button>

          {/* Slot 4: PROFILE Active Hub state */}
          <button
            onClick={() => router.push("/profile")}
            className="flex flex-col justify-center items-center w-12 h-12 rounded-full transition-transform hover:scale-110 active:scale-95 bg-transparent relative"
            title="User Profile Framework Hub"
          >
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
            <Image src="/assets/home/HeroScreen/user 1.png" alt="User Profile context" width={21.62} height={21.62} className="w-[21.62px] h-[21.62px] relative z-10" />
          </button>
        </div>

        {/* Rightmost Auxiliary Bar Buttons */}
        <div className="flex items-center gap-2 md:gap-[12.53px] shrink-0">
          {/* Unlock Hub Tool Trigger */}
          <button
            onClick={() => router.push("/home/unlockeddocuments")}
            className="flex items-center justify-center w-10 h-10 md:w-[52px] md:h-[52px] bg-white/10 backdrop-blur-2xl rounded-full border border-white/10 transition-transform hover:scale-105 active:scale-95 shadow-sm"
            style={{
              boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)"
            }}
            title="View Unlocked Smart Documents"
          >
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock documentation" width={26.32} height={26.32} className="w-5 h-5 md:w-[26.32px] md:h-[26.32px]" />
          </button>

          {/* Notifications Ring Trigger */}
          <button
            className="relative flex items-center justify-center w-10 h-10 md:w-[52px] md:h-[52px] bg-white/10 backdrop-blur-2xl rounded-full border border-white/10 transition-transform hover:scale-105 active:scale-95 shadow-sm"
            style={{
              boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)"
            }}
            title="Real-time Platform Notifications"
          >
            <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications context" width={26.32} height={26.32} className="w-5 h-5 md:w-[26.32px] md:h-[26.32px]" />
            <span className="absolute top-2 right-2 md:top-[13.53px] md:right-[13px] w-2 h-2 md:w-[6.3px] md:h-[6.3px] bg-[#E53935] border border-white/90 rounded-full" />
          </button>

          {/* Custom session account circular container */}
          <div
            onClick={() => router.push("/profile")}
            className="w-10 h-10 md:w-[52px] md:h-[52px] rounded-full border-[1.8px] border-white overflow-hidden cursor-pointer shadow-[0px_1.8px_10.8px_rgba(0,0,0,0.03)] shrink-0 transition-transform hover:scale-105 relative"
            title="Session Account Settings"
          >
            <img
              src="/assets/home/HeroScreen/person.svg"
              alt="Active Session Holder"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Central Immersive Heading & Narrative Subtitle matching EXACT typography tokens */}
      <div className="relative z-20 flex flex-col items-center px-4 md:px-8 w-full max-w-[1200px] mx-auto gap-4 md:gap-[37px] text-center pointer-events-auto">
        <h1 
          className="text-[42px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-extrabold text-white font-jakarta drop-shadow-xl whitespace-nowrap"
          style={{
            lineHeight: "100px",
            letterSpacing: "-1.8px"
          }}
        >
          Saved Farmlands
        </h1>
        <p className="text-xs sm:text-base md:text-xl lg:text-[24px] font-medium text-white/95 font-jakarta leading-[32px] w-[1100px] max-w-[95vw] drop-shadow-md">
          Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy,<br />
          and intelligence audit pipeline
        </p>
      </div>
    </section>
  );
}
