"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SupportCenterHero() {
  const router = useRouter();

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden shrink-0 select-none">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/supportcenter/hero.svg"
          alt="Support Centre Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40 z-1" />
      </div>

      {/* Responsive Navigation Suite */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-12 lg:px-[60px] pt-[30px] md:pt-[24px]">
        {/* Brand Logo */}
        <div
          onClick={() => router.push("/home")}
          className="cursor-pointer flex items-center shrink-0 transition-transform hover:scale-105 active:scale-95"
        >
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Brand Logo"
            width={150}
            height={64}
            className="w-[110px] md:w-[150px] h-auto object-contain"
          />
        </div>

        {/* Central Capsule Nav Bar - Hidden on smaller screens to keep top layout airy */}
        <div className="hidden md:flex flex-row items-center p-2 gap-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_8px_6px_rgba(0,0,0,0.05)]">
          <button
            onClick={() => router.push("/home")}
            className="flex flex-col justify-center items-center w-10 h-10 lg:w-12 lg:h-12 rounded-full transition-transform hover:scale-110 active:scale-95"
            title="Home Module Link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>

          <button
            onClick={() => router.push("/search")}
            className="flex flex-col justify-center items-center w-10 h-10 lg:w-12 lg:h-12 rounded-full transition-transform hover:scale-110 active:scale-95"
            title="Search Real Assets"
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={20} height={20} className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />
          </button>

          <button
            onClick={() => router.push("/pricing")}
            className="flex flex-col justify-center items-center w-10 h-10 lg:w-12 lg:h-12 rounded-full transition-transform hover:scale-110 active:scale-95"
            title="Pricing/Subscriptions"
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing Vector" width={20} height={18} className="w-5 h-[18px] lg:w-[21.66px] lg:h-[19.49px]" />
          </button>

          <button
            onClick={() => router.push("/profile")}
            className="flex flex-col justify-center items-center w-10 h-10 lg:w-12 lg:h-12 rounded-full transition-transform hover:scale-110 active:scale-95"
            title="Account Management"
          >
            <Image src="/assets/home/HeroScreen/user 1.png" alt="Profile shortcut" width={20} height={20} className="w-5 h-5 lg:w-[21.62px] lg:h-[21.62px]" />
          </button>
        </div>

        {/* Right Auxiliary Controls */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button
            onClick={() => router.push("/home/unlockeddocuments")}
            className="flex items-center justify-center w-9 h-9 md:w-[52px] md:h-[52px] bg-white/10 backdrop-blur-xl rounded-full border border-white/10 transition-transform hover:scale-105 active:scale-95 shadow-sm"
            title="Unlocked Documents"
          >
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock badge" width={24} height={24} className="w-4 h-4 md:w-[26px] md:h-[26px]" />
          </button>

          <button
            className="relative flex items-center justify-center w-9 h-9 md:w-[52px] md:h-[52px] bg-white/10 backdrop-blur-xl rounded-full border border-white/10 transition-transform hover:scale-105 active:scale-95 shadow-sm"
            title="Notifications Platform"
          >
            <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications bell" width={24} height={24} className="w-4 h-4 md:w-[26px] md:h-[26px]" />
            <span className="absolute top-2 right-2 md:top-[13px] md:right-[12px] w-1.5 h-1.5 md:w-[6.3px] md:h-[6.3px] bg-[#E53935] border border-white rounded-full" />
          </button>

          <div
            onClick={() => router.push("/profile")}
            className="w-9 h-9 md:w-[52px] md:h-[52px] rounded-full border-2 border-white/80 overflow-hidden cursor-pointer shadow-sm shrink-0 transition-transform hover:scale-105"
            title="Active Session Account"
          >
            <img
              src="/assets/stats/person1.1.svg"
              alt="Account Hub Avatar"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Responsive Typography Frame */}
      <div className="relative z-10 flex flex-col items-center px-4 md:px-6 w-full max-w-[1200px] mx-auto gap-8 text-center pointer-events-auto">
        <h1 className="text-[38px] sm:text-[56px] md:text-[80px] lg:text-[100px] font-extrabold text-white leading-[100px] tracking-tight md:tracking-[-1.8px] drop-shadow-md whitespace-nowrap">
          Support Centre
        </h1>
        <p className="text-xs sm:text-base md:text-xl lg:text-[24px] font-medium text-white/95 leading-[32px] w-[1100px] max-w-[95vw] mx-auto drop-shadow-sm px-2">
          Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy,<br />
          and intelligence audit pipeline
        </p>
      </div>
    </section>
  );
}
