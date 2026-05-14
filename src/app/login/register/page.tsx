"use client";

import Link from "next/link";
import { useState } from "react";

const countries = [
  { flag: "🇮🇳", name: "India (भारत)", code: "+91" },
  { flag: "🇺🇸", name: "United States", code: "+1" },
  { flag: "🇨🇴", name: "Colombia", code: "+57" },
  { flag: "🇩🇪", name: "Germany", code: "+49" },
  { flag: "🇦🇫", name: "Afghanistan (افغانستان)", code: "+93" },
];

export default function RegisterPage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="text-[32px] lg:text-[40px] font-bold text-[#353535] font-jakarta leading-tight mb-1">Register Now</h1>
      <p className="text-[14px] lg:text-[15px] text-[#B8B8B8] font-jakarta mb-6">Green Land Capital Asset Verification.</p>

      {/* First + Last Name */}
      <div className="flex gap-3 mb-4 lg:mb-5">
        <div className="flex-1 bg-white border border-[#F0F0F0] rounded-[30px] h-[56px] lg:h-[60px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
          <svg className="w-4 h-4 text-[#A1999B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div className="w-px h-4 bg-[#F0F0F0]" />
          <input type="text" placeholder="First Name" className="flex-1 bg-transparent text-[14px] lg:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta min-w-0 cursor-text" />
        </div>
        <div className="flex-1 bg-white border border-[#F0F0F0] rounded-[30px] h-[56px] lg:h-[60px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
          <svg className="w-4 h-4 text-[#A1999B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div className="w-px h-4 bg-[#F0F0F0]" />
          <input type="text" placeholder="Last Name" className="flex-1 bg-transparent text-[14px] lg:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta min-w-0 cursor-text" />
        </div>
      </div>

      {/* Email */}
      <div className="mb-4 lg:mb-5 bg-white border border-[#F0F0F0] rounded-[30px] h-[56px] lg:h-[60px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
        <svg className="w-4 h-4 text-[#2780C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <div className="w-px h-4 bg-[#F0F0F0]" />
        <input type="email" placeholder="Enter Mail ID" className="flex-1 bg-transparent text-[14px] lg:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text" />
      </div>

      {/* Phone + Country */}
      <div className="relative mb-6 lg:mb-8">
        <div className="bg-white border border-[#F0F0F0] rounded-[30px] h-[56px] lg:h-[60px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
          <button
            onClick={() => setDropdownOpen(o => !o)}
            className="flex items-center gap-1.5 shrink-0 [-webkit-tap-highlight-color:transparent] cursor-pointer hover:opacity-70"
          >
            <span className="text-[18px]">{selectedCountry.flag}</span>
            <svg className="w-3.5 h-3.5 text-[#BDBDBD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="w-px h-4 bg-[#F0F0F0]" />
          <span className="text-[14px] text-[#616161] font-jakarta shrink-0">{selectedCountry.code}</span>
          <input type="tel" placeholder="Phone Number" className="flex-1 bg-transparent text-[14px] lg:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text" />
        </div>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute top-[60px] lg:top-[64px] left-0 right-0 bg-white rounded-[20px] shadow-xl border border-[#F0F0F0] z-50 overflow-hidden">
            {countries.map(c => (
              <button
                key={c.code}
                onClick={() => { setSelectedCountry(c); setDropdownOpen(false); }}
                className="w-full flex items-center gap-3 px-5 py-3 lg:py-4 hover:bg-[#F8F8F8] transition-colors [-webkit-tap-highlight-color:transparent] cursor-pointer"
              >
                <span className="text-[20px]">{c.flag}</span>
                <span className="flex-1 text-left text-[15px] text-[#434343] font-jakarta">{c.name}</span>
                <span className="text-[14px] text-[#9E9E9E] font-jakarta">{c.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        className="w-full h-[52px] lg:h-[58px] rounded-full text-[16px] font-bold text-white font-jakarta [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
      >
        Create Account
      </button>

      <p className="text-center mt-5 lg:mt-6 text-[14px] text-[#B8B8B8] font-jakarta">
        Already have an account?{" "}
        <Link href="/login" className="text-[#2780C4] font-semibold hover:underline transition-all cursor-pointer">
          Sign in
        </Link>
      </p>
    </div>
  );
}
