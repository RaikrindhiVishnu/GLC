"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FilterOverlay from "@/app/search/filter/FilterOverlay";

export default function HeroScreen() {
  const [searchVal, setSearchVal] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();

  return (
    <section
      id="hero-screen"
      style={{
        position: "relative" as const,
        width: "100%",
        height: "100vh", // Exactly fits to one screen view depth without native scroll tracking
        maxHeight: "100vh",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="flex flex-col items-center justify-start"
    >
      {/* Background Image + Dark Overlay */}
      <div
        style={{
          position: "absolute" as const,
          inset: 0,
          background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
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

      {/* ─── TOP BAR (Fully Responsive without breaking high-fidelity aesthetics) ─── */}
      <div
        style={{
          position: "absolute" as const,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          boxSizing: "border-box",
        }}
        className="px-4 md:px-8 xl:px-[60px] py-4 md:py-0 min-h-[96px] md:h-[96px] flex flex-wrap md:flex-nowrap justify-between items-center gap-4 w-full"
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer", flexShrink: 0 }} onClick={() => router.push("/home")}>
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
            background: "rgba(255,255,255,0.1)",
            boxShadow:
              "0px 8px 6px rgba(0,0,0,0.05), inset 3px 4px 2px -3px rgba(255,255,255,0.55), inset 0px -1px 1px rgba(255,255,255,0.25), inset 0px 1px 1px rgba(255,255,255,0.25)",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            borderRadius: "100px",
            boxSizing: "border-box",
          }}
          className="w-auto max-w-full h-auto md:h-[72px] flex-shrink-0 order-3 md:order-none mx-auto md:mx-0"
        >
          {/* HOME Active Button */}
          <button
            id="nav-home"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 20px 25px -5px rgba(78,95,126,0.2), 0px 8px 10px -6px rgba(78,95,126,0.2)",
              position: "relative" as const,
              flexShrink: 0,
              boxSizing: "border-box",
            }}
            className="w-[100px] md:w-[147px] h-[40px] md:h-[52px]"
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "0.02em",
              }}
              className="text-xs md:text-base leading-tight md:leading-[28px] uppercase"
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
              borderRadius: "100px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
            className="w-10 h-10 md:w-12 md:h-12"
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={20} height={20} />
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
              borderRadius: "100px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
            className="w-10 h-10 md:w-12 md:h-12"
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Wishlist" width={20} height={18} />
          </button>

          {/* User Icon Tab */}
          <button
            id="nav-user"
            onClick={() => router.push("/profile")}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
              borderRadius: "100px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
            className="w-10 h-10 md:w-12 md:h-12"
          >
            <Image
              src="/assets/home/HeroScreen/user 1.png"
              alt="User"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Right side icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {/* Lock Button */}
          <button
            id="nav-lock"
            onClick={() => router.push("/home/unlockeddocuments")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.1)",
              boxShadow:
                "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55), inset 0px -1.25px 1.25px rgba(255,255,255,0.25), inset 0px 1.25px 1.25px rgba(255,255,255,0.25)",
              backdropFilter: "blur(62px)",
              WebkitBackdropFilter: "blur(62px)",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
            className="w-10 h-10 md:w-[52px] md:h-[52px]"
          >
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Lock" width={22} height={22} style={{ flexShrink: 0 }} />
          </button>

          {/* Bell Button */}
          <button
            id="nav-bell"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.1)",
              boxShadow:
                "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55), inset 0px -1.25px 1.25px rgba(255,255,255,0.25), inset 0px 1.25px 1.25px rgba(255,255,255,0.25)",
              backdropFilter: "blur(62px)",
              WebkitBackdropFilter: "blur(62px)",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              position: "relative" as const,
              boxSizing: "border-box",
            }}
            className="w-10 h-10 md:w-[52px] md:h-[52px]"
          >
            <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications" width={22} height={22} style={{ flexShrink: 0 }} />
            {/* Red dot */}
            <span
              style={{
                position: "absolute" as const,
                top: "25%",
                right: "22%",
                width: "6.3px",
                height: "6.3px",
                background: "#E53935",
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            />
          </button>

          <div
            id="nav-avatar"
            onClick={() => router.push("/login")}
            style={{
              borderRadius: "50%",
              boxShadow: "0px 1.8px 10.8px rgba(0, 0, 0, 0.03)",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative" as const,
              zIndex: 10,
              boxSizing: "border-box",
            }}
            className="w-10 h-10 md:w-[52px] md:h-[52px]"
          >
            <img
              src="/assets/home/HeroScreen/person.svg"
              alt="User"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scale(1.5)",
                objectPosition: "center"
              }}
            />
          </div>
        </div>
      </div>

      {/* ─── MASTER FOREGROUND CONTENT LAYER (Groups Heading and Search Bar perfectly into a single stack array preventing vertical collision) ─── */}
      <div 
        style={{
          position: "absolute" as const,
          inset: 0,
          zIndex: 5,
          boxSizing: "border-box",
        }}
        className="flex flex-col items-center justify-center px-4 pointer-events-none"
      >
        <div className="w-full max-w-[1018px] flex flex-col items-center gap-6 md:gap-10 pointer-events-auto mt-12 md:mt-16">
          
          {/* Foreground Title Typography */}
          <h1
            className="text-center font-extrabold text-[38px] leading-[44px] md:text-[70px] md:leading-[76px] xl:text-[100px] xl:leading-[106px] tracking-tight xl:tracking-[-5px] text-white m-0 drop-shadow-xs"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Discover Premium Farmlands
          </h1>

          {/* Interactive Search Query Bar locked natively into standard gap spacing */}
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              boxShadow:
                "0px 8px 6px rgba(0,0,0,0.05), inset 3px 4px 2px -3px rgba(255,255,255,0.55), inset 0px -1px 1px rgba(255,255,255,0.25), inset 0px 1px 1px rgba(255,255,255,0.25)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              borderRadius: "100px",
              boxSizing: "border-box",
            }}
            className="w-full max-w-[672px] min-h-[64px] md:h-[80px] flex items-center justify-between px-3 md:px-4"
          >
            {/* Search Input */}
            <input
              id="search-investments"
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search Investments..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
              className="flex-1 text-sm md:text-lg pl-3 md:pl-5 pr-2 py-3 w-full"
            />

            {/* Search Button triggering local interactive filter modal overlay */}
            <button
              id="btn-search"
              onClick={() => setIsFilterOpen(true)}
              style={{
                background: "#FFFFFF",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
              className="w-10 h-10 md:w-[50px] md:h-[50px]"
            >
              <Image src="/assets/home/HeroScreen/inside search.svg" alt="Search" width={18} height={18} />
            </button>
          </div>

        </div>
      </div>

      {/* Embedded absolute mobility overlay moving seamlessly with document scroll */}
      <FilterOverlay isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

    </section>
  );
}
