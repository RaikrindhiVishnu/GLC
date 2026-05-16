"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FilterOverlay from "./filter/FilterOverlay";

export default function SearchHeroSection() {
  const router = useRouter();
  // Straightforward editable query string devoid of highlights or squashed text spacing gaps
  const [searchVal, setSearchVal] = useState("I am looking for a farm in Andhra Pradesh with a budget of ₹5Cr");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <section
      id="search-hero-screen"
      style={{
        position: "relative" as const,
        width: "100%",
        height: "100vh", // Exactly fits onto one screen depth without native vertical scrollbars
        maxHeight: "100vh",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="flex flex-col items-center justify-start"
    >
      {/* Background Cover Image with Gradient Darkening Overlay */}
      <div
        style={{
          position: "absolute" as const,
          inset: 0,
          background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
          zIndex: 1,
        }}
      />
      {/* Set primary hero background directly to dedicated search screen backdrop asset */}
      <Image
        src="/assets/search/search.svg"
        alt="Farmland Search screen cover background"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* ─── TOP HEADER LAYER (Fully responsive container avoiding horizontal bleeds) ─── */}
      <div
        style={{
          position: "absolute" as const,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          boxSizing: "border-box",
        }}
        className="px-4 md:px-8 xl:px-[60px] py-4 md:py-0 min-h-[96px] md:h-[110px] flex flex-wrap md:flex-nowrap justify-between items-center gap-4 w-full"
      >
        {/* Leftmost Brand Logo */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer", flexShrink: 0 }} onClick={() => router.push("/home")}>
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Brand"
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
            background: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.12), inset 0px 1px 2px rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            borderRadius: "100px",
            transition: "all 0.3s ease",
            boxSizing: "border-box",
          }}
          className="w-auto max-w-full h-auto md:h-[72px] flex-shrink-0 order-3 md:order-none mx-auto md:mx-0"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
          }}
        >
          {/* HOME Tab Button */}
          <button
            onClick={() => router.push("/home")}
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
              transition: "transform 0.2s ease",
            }}
            className="w-10 h-10 md:w-12 md:h-12"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>

          {/* SEARCH Expanded Active Pill Button */}
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9999px",
              border: "none",
              boxShadow: "0px 20px 25px -5px rgba(78,95,126,0.2), 0px 8px 10px -6px rgba(78,95,126,0.2)",
              position: "relative" as const,
              flexShrink: 0,
              cursor: "default",
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
              SEARCH
            </span>
          </button>

          {/* Wishlist Icon Tab Button */}
          <button
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
              transition: "transform 0.2s ease",
            }}
            className="w-10 h-10 md:w-12 md:h-12"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="Wishlist navigation" width={20} height={18} />
          </button>

          {/* User Profile Tab Button */}
          <button
            onClick={() => router.push("/profile")}
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
              transition: "transform 0.2s ease",
            }}
            className="w-10 h-10 md:w-12 md:h-12"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image src="/assets/home/HeroScreen/user 1.png" alt="User routing tab" width={20} height={20} />
          </button>
        </div>

        {/* Rightmost User Context Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {/* Unlock action icon */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.1)",
              boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)",
              backdropFilter: "blur(62px)",
              WebkitBackdropFilter: "blur(62px)",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
            className="w-10 h-10 md:w-[52px] md:h-[52px]"
          >
            <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock Controls" width={22} height={22} />
          </button>

          {/* Notifications ring with live alert dot */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.1)",
              boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)",
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
            <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications context" width={22} height={22} />
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
              }}
            />
          </button>

          {/* User Profile Avatar wrapper */}
          <div
            onClick={() => router.push("/profile")}
            style={{
              borderRadius: "50%",
              boxShadow: "0px 1.8px 10.8px rgba(0, 0, 0, 0.03)",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative" as const,
              boxSizing: "border-box",
            }}
            className="w-10 h-10 md:w-[52px] md:h-[52px]"
          >
            <img
              src="/assets/home/HeroScreen/person.svg"
              alt="User Context Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }}
            />
          </div>
        </div>
      </div>

      {/* ─── MASTER FOREGROUND CONTENT LAYER (Groups Heading and Search Bar into an unbreakable vertical flex layout natively eliminating collision) ─── */}
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
            Find your next<br />high-yield asset
          </h1>

          {/* Interactive Search Query Bar preserving exact visual structure */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.12), inset 0px 1px 2px rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              borderRadius: "100px",
              transition: "all 0.3s ease",
              boxSizing: "border-box",
            }}
            className="w-full max-w-[862px] min-h-[64px] md:h-[88px] flex items-center justify-between px-3 md:pl-10 md:pr-[18px]"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
          >
            {/* Natural character kerning text input bar */}
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
              className="flex-1 text-sm md:text-[24px] md:leading-[39px] pl-2 pr-4 py-2 w-full"
            />

            {/* Filter Sliders trigger disc */}
            <button
              onClick={() => setIsFilterOpen(true)}
              style={{
                background: "#FFFFFF",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "all 0.2s ease",
              }}
              className="w-10 h-10 md:w-[52px] md:h-[52px]"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = "0px 6px 16px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Image
                src="/assets/home/HeroScreen/inside search.svg"
                alt="Filter Sliders Controls button"
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
              />
            </button>
          </div>

        </div>
      </div>

      {/* Mounted high-fidelity Filter Matrix Dialog Overlay */}
      <FilterOverlay isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

    </section>
  );
}
