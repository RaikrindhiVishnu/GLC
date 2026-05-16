"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrganicFarmingSetupHero() {
  const router = useRouter();

  return (
    <section className="w-full relative min-h-[480px] md:min-h-[640px] lg:h-[960px] flex flex-col items-center justify-center box-border overflow-hidden shrink-0 bg-[#131600]">
      
      {/* Background Composite Gradient Overlay & Image Proxy */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10 pointer-events-none" />
      <img
        src="/assets/organicfrmingsetup/hero.svg"
        alt="Organic Farm Setup Hero Environment"
        className="w-full h-full object-cover absolute inset-0 z-0 scale-105"
      />

      {/* ─── MASTER TOP HEADER NAVIGATION BAR ─── */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-[60px] h-20 sm:h-24 md:h-[110px] box-border">
        
        {/* Brand Logo */}
        <div
          className="flex items-center cursor-pointer shrink-0"
          onClick={() => router.push("/home")}
        >
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Brand Logo"
            width={150}
            height={64}
            className="object-contain w-[120px] sm:w-[150px]"
          />
        </div>

        {/* Central Left Menu Navigation Pill Capsule using verified native assets */}
        <div className="hidden md:flex flex-row items-center p-2.5 gap-2.5 w-[242px] h-[68px] bg-white/10 shadow-[0_8px_6px_rgba(0,0,0,0.05),inset_3px_4px_2px_-3px_rgba(255,255,255,0.55),inset_0_-1px_1px_rgba(255,255,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-[50px] rounded-full shrink-0 box-border">
          
          {/* Slot 1: HOME Tab Button */}
          <button
            onClick={() => router.push("/home")}
            className="flex flex-col justify-center items-center w-12 h-12 rounded-full bg-transparent border-none cursor-pointer shrink-0 hover:scale-110 transition-transform"
          >
            <svg width="21.62" height="21.62" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>

          {/* Slot 2: Search Icon Tab Button */}
          <button
            onClick={() => router.push("/search")}
            className="flex flex-col justify-center items-center w-12 h-12 rounded-full bg-transparent border-none cursor-pointer shrink-0 hover:scale-110 transition-transform"
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search routing tab" width={22} height={22} />
          </button>

          {/* Slot 3: PRICING Link Trigger */}
          <button
            onClick={() => router.push("/pricing")}
            className="flex flex-col justify-center items-center w-12 h-12 rounded-full bg-transparent border-none cursor-pointer shrink-0 hover:scale-110 transition-transform"
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing Link" width={22} height={20} />
          </button>

          {/* Slot 4: User Profile Tab Button */}
          <button
            onClick={() => router.push("/profile")}
            className="flex flex-col justify-center items-center w-12 h-12 rounded-full bg-transparent border-none cursor-pointer shrink-0 hover:scale-110 transition-transform"
          >
            <Image src="/assets/home/HeroScreen/user 1.png" alt="User routing tab" width={21.62} height={21.62} />
          </button>

        </div>

        {/* Rightmost User Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Unlock icon pill */}
          <button
            onClick={() => router.push("/home/unlockeddocuments")}
            className="flex items-center justify-center w-10 h-10 sm:w-[52px] sm:h-[52px] bg-white/10 shadow-[0_10px_7.5px_rgba(0,0,0,0.05),inset_3.76px_5px_2.5px_-3.76px_rgba(255,255,255,0.55)] backdrop-blur-[62px] rounded-full border-none cursor-pointer hover:bg-white/20 transition-colors"
          >
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock Controls" width={24} height={24} className="w-5 h-5 sm:w-[26.32px] sm:h-[26.32px]" />
          </button>

          {/* Notifications ring with live alert dot */}
          <button
            className="flex items-center justify-center w-10 h-10 sm:w-[52px] sm:h-[52px] bg-white/10 shadow-[0_10px_7.5px_rgba(0,0,0,0.05),inset_3.76px_5px_2.5px_-3.76px_rgba(255,255,255,0.55)] backdrop-blur-[62px] rounded-full border-none cursor-pointer relative hover:bg-white/20 transition-colors"
          >
            <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications context" width={24} height={24} className="w-5 h-5 sm:w-[26.32px] sm:h-[26.32px]" />
            <span className="absolute top-2.5 right-2 sm:top-[13.5px] sm:right-[11.6px] w-1.5 h-1.5 sm:w-[6.3px] sm:h-[6.3px] bg-[#E53935] border border-white/90 rounded-full" />
          </button>

          {/* User Profile Avatar */}
          <div
            onClick={() => router.push("/profile")}
            className="w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-full shadow-[0_1.8px_10.8px_rgba(0,0,0,0.03)] overflow-hidden cursor-pointer relative shrink-0 border border-white/80 box-border"
          >
            <img
              src="/assets/stats/person1.1.svg"
              alt="User Profile"
              className="w-full h-full object-cover scale-125"
            />
          </div>
        </div>

      </div>

      {/* ─── FOREGROUND TYPOGRAPHY CONTENT LAYER (Centered horizontally on a single line) ─── */}
      <div className="absolute top-[348px] left-1/2 -translate-x-1/2 z-20 w-full max-w-[1200px] flex flex-col items-center gap-9 px-4 box-border">
        <h1 className="m-0 font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[100px] text-white tracking-tight sm:tracking-[-1.8px] leading-tight sm:leading-[72px] text-center w-full whitespace-nowrap">
          Organic Farm Setup
        </h1>
        <p className="m-0 font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-[996px] leading-relaxed sm:leading-[32px] text-center">
          Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline
        </p>
      </div>

    </section>
  );
}
