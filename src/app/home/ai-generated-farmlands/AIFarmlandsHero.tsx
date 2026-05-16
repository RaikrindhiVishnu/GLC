"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AIFarmlandsHero() {
  const router = useRouter();

  return (
    <section className="w-full relative h-screen min-h-screen flex flex-col items-center justify-start box-border select-none overflow-hidden bg-[#0F2F4C] shrink-0">
      
      {/* Background Cover loading explicit custom SVG asset exactly */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/ai-suggested/heroai.svg"
          alt="A.I. Suggested Farmlands Visual Core"
          fill
          priority
          className="object-cover object-center brightness-95"
        />
        {/* Soft atmospheric gradient overlay mask exactly mapping rgba(0,0,0,0.2) */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>


      {/* ─── STANDARDIZED CAPSULE HEADER NAVIGATION BAR (Reusing original platform SVGs exactly) ─── */}
      <div className="w-full px-4 sm:px-12 py-6 relative z-20 flex items-center justify-between max-w-[1600px] mx-auto box-border">
        
        {/* Leftmost Custom Brand Identity Logo */}
        <div 
          onClick={() => router.push("/home")} 
          className="cursor-pointer shrink-0 relative transition-transform hover:scale-105 active:scale-95"
        >
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Brand"
            width={150}
            height={64}
            className="object-contain"
          />
        </div>


        {/* Central Encapsulated Glassmorphic Tab Selector Pill */}
        <div className="hidden md:flex items-center bg-white/10 shadow-[0_8px_6px_rgba(0,0,0,0.05)] backdrop-blur-md border border-white/20 rounded-full p-2 gap-2 box-border">
          
          {/* INACTIVE Home Base Route Capsule matching tabs layout precisely */}
          <button
            onClick={() => router.push("/home")}
            className="px-6 py-3 bg-transparent rounded-full text-white font-extrabold text-sm tracking-wider uppercase border-none cursor-pointer hover:bg-white/10 transition-colors block"
          >
            HOME
          </button>

          {/* Search Proxy View Tab */}
          <button
            onClick={() => router.push("/search")}
            className="w-11 h-11 rounded-full bg-transparent border-none flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={20} height={20} />
          </button>

          {/* Wishlist Favorites Anchor */}
          <button
            onClick={() => router.push("/pricing")}
            className="w-11 h-11 rounded-full bg-transparent border-none flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Wishlist" width={20} height={18} />
          </button>

          {/* Console Profile View Anchor */}
          <button
            onClick={() => router.push("/profile")}
            className="w-11 h-11 rounded-full bg-transparent border-none flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
          >
            <Image src="/assets/home/HeroScreen/user 1.png" alt="User" width={20} height={20} />
          </button>

        </div>


        {/* Rightmost Action Capsule Array */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Secure Workspace Access Capsule */}
          <button
            onClick={() => router.push("/home/unlockeddocuments")}
            className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all shrink-0"
            title="Unlocked Documents"
          >
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Lock" width={22} height={22} />
          </button>

          {/* Notification Stream Counter */}
          <button
            className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs flex items-center justify-center cursor-pointer relative hover:bg-white/20 transition-all shrink-0"
            title="Notifications"
          >
            <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications" width={22} height={22} />
            <span className="absolute top-[25%] right-[22%] w-[6.3px] h-[6.3px] rounded-full bg-[#E53935] border border-white block shadow-xs" />
          </button>

          {/* User Account Avatar Disk exactly reusing HeroScreen.tsx layout container properties */}
          <div
            id="nav-avatar"
            onClick={() => router.push("/profile")}
            style={{
              borderRadius: "50%",
              boxShadow: "0px 1.8px 10.8px rgba(0, 0, 0, 0.03)",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative" as const,
              zIndex: 10,
              boxSizing: "border-box",
            }}
            className="w-11 h-11 sm:w-[52px] sm:h-[52px] shrink-0"
          >
            <img
              src="/assets/home/HeroScreen/person.svg"
              alt="User"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scale(1.5)",
                objectPosition: "center",
              }}
            />
          </div>

        </div>

      </div>


      {/* ─── TYPOGRAPHY STACK CENTERED PRECISELY TO FIT TO ONE SCREEN VIEWPORT DEPTH RESPONSIVELY ─── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 box-border text-center pointer-events-none">
        <div className="w-full max-w-[1225px] flex flex-col items-center pointer-events-auto">
          
          {/* Primary h1 Line matching font-size: 100px exactly without wrapping on large desktop frames */}
          <h1 className="m-0 font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-[100px] text-white tracking-tight md:tracking-[-1.8px] leading-tight drop-shadow-sm max-w-none whitespace-normal xl:whitespace-nowrap px-2">
            A.I. Suggested Farmlands
          </h1>

          {/* Subtitle bounding box aligned exactly to design tokens */}
          <p className="mt-4 sm:mt-8 font-medium text-sm sm:text-xl md:text-[24px] text-white max-w-[996px] leading-relaxed md:leading-[32px] drop-shadow-xs px-2">
            Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline
          </p>

        </div>
      </div>

    </section>
  );
}
