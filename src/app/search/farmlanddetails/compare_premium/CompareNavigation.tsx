"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CompareNavigation() {
  const router = useRouter();

  return (
    <nav className="absolute top-[24px] left-0 w-full z-50 flex justify-center pointer-events-none">
      {/* Left Logo */}
      <div className="absolute left-[60px] pointer-events-auto cursor-pointer" onClick={() => router.push("/home")}>
        <Image
          src="/assets/common/Logo green land 1.svg"
          alt="Green Land Capital Logo"
          width={150}
          height={64}
          priority
        />
      </div>

      {/* Center Navigation Pill */}
      <div 
        className="pointer-events-auto flex flex-row items-center px-[20px] h-[64px]"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          borderRadius: "100px",
        }}
      >
        {/* Tab 1: Home */}
        <button className="flex justify-center items-center w-[54px] h-[54px] rounded-full hover:bg-white/10 transition-colors" onClick={() => router.push("/home")}>
           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.16">
             <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
             <polyline points="9 22 9 12 15 12 15 22" />
           </svg>
        </button>

        {/* Tab 2: Search */}
        <button className="flex justify-center items-center w-[54px] h-[54px] rounded-full hover:bg-white/10 transition-colors" onClick={() => router.push("/search")}>
          <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={22} height={22} className="brightness-0 invert" />
        </button>

        {/* Tab 3: Pricing (Crown) */}
        <button className="flex justify-center items-center w-[54px] h-[54px] rounded-full hover:bg-white/10 transition-colors" onClick={() => router.push("/pricing")}>
          <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing" width={22} height={20} className="brightness-0 invert" />
        </button>

        {/* Tab 4: Profile */}
        <button className="flex justify-center items-center w-[54px] h-[54px] rounded-full hover:bg-white/10 transition-colors" onClick={() => router.push("/profile")}>
           <Image src="/assets/home/HeroScreen/user 1.png" alt="Profile" width={22} height={22} className="brightness-0 invert" />
        </button>
      </div>

      {/* Right Icons */}
      {/* Right Icons */}
      <div className="absolute right-[60px] flex gap-[16px] pointer-events-auto items-center">
        {/* Lock/Unlock Icon */}
        <button 
          className="relative flex flex-row items-center justify-center w-[52px] h-[51.4px]"
          onClick={() => router.push("/home/unlockeddocuments")}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0px 10px 7.5px rgba(0, 0, 0, 0.05), inset 3.76px 5px 2.5px -3.76px rgba(255, 255, 255, 0.55), inset 0px -1.25px 1.25px rgba(255, 255, 255, 0.25), inset 0px 1.25px 1.25px rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(62.6px)",
            borderRadius: "125px",
          }}
        >
          <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlocked Documents" width={22} height={22} />
        </button>

        {/* Notification Icon */}
        <button 
          className="flex flex-row items-center justify-center w-[52px] h-[51.4px]"
          onClick={() => {}} // Notification click
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0px 10px 7.5px rgba(0, 0, 0, 0.05), inset 3.76px 5px 2.5px -3.76px rgba(255, 255, 255, 0.55), inset 0px -1.25px 1.25px rgba(255, 255, 255, 0.25), inset 0px 1.25px 1.25px rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(62.6px)",
            borderRadius: "125px",
          }}
        >
           <Image src="/assets/home/HeroScreen/notification.svg" alt="Notifications" width={22} height={22} />
        </button>
        
        {/* User Avatar */}
        <div 
          className="w-[52px] h-[52px] ml-[8px] cursor-pointer"
          onClick={() => router.push("/profile")}
          style={{
            background: "url('/assets/home/HeroScreen/person.svg') center/cover",
            border: "1.8px solid #FFFFFF",
            boxShadow: "0px 1.8px 10.8px rgba(0, 0, 0, 0.03)",
            borderRadius: "50%",
          }}
        />
      </div>
    </nav>
  );
}
