"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-[480px]">

      {/* Title */}
      <p className="text-[30px] lg:text-[38px] text-[#353535] font-normal font-jakarta leading-tight">Welcome to</p>
      <h1 className="text-[30px] lg:text-[38px] font-bold text-[#2780C4] font-jakarta leading-tight mb-2">
        Green Land Capital
      </h1>
      <p className="text-[14px] lg:text-[16px] text-[#B8B8B8] font-jakarta mb-6 lg:mb-8 leading-relaxed">
        Access India&apos;s finest organic farmland investments. Verified titles, managed yields.
      </p>

      {/* Email */}
      <div className="mb-4 lg:mb-5 bg-white border border-[#D3DEEA] rounded-[33px] h-[58px] lg:h-[66px] flex items-center px-6 gap-3 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
        <svg className="w-5 h-5 text-[#2780C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <div className="w-px h-5 bg-[#EFEFEF] shrink-0" />
        <input
          type="email"
          placeholder="Email Address or Investor ID"
          className="flex-1 bg-transparent text-[15px] text-[#434343] placeholder:text-[#8C8C8C] focus:outline-none font-jakarta cursor-text"
        />
      </div>

      {/* Password */}
      <div className="mb-5 lg:mb-6 bg-white border border-[#D3DEEA] rounded-[33px] h-[58px] lg:h-[66px] flex items-center px-6 gap-3 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
        <svg className="w-5 h-5 text-[#2780C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <div className="w-px h-5 bg-[#EFEFEF] shrink-0" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="flex-1 bg-transparent text-[15px] text-[#434343] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text"
        />
        <button onClick={() => setShowPassword(s => !s)} className="shrink-0 [-webkit-tap-highlight-color:transparent] cursor-pointer hover:opacity-70">
          <svg className="w-5 h-5 text-[#A1999B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {showPassword
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              : <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
            }
          </svg>
        </button>
      </div>

      {/* OR divider */}
      <div className="flex items-center gap-4 mb-5 lg:mb-6">
        <div className="flex-1 h-px bg-[#E3E3E3]" />
        <span className="text-[14px] text-[#BDBDBD] font-jakarta">or</span>
        <div className="flex-1 h-px bg-[#E3E3E3]" />
      </div>

      {/* Sign up button */}
      <Link href="/login/register" className="block w-full">
        <button
          className="w-full h-[52px] lg:h-[58px] rounded-full text-[16px] font-bold text-white font-jakarta mb-3 lg:mb-4 [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
        >
          Sign up
        </button>
      </Link>

      {/* Login button */}
      <button className="w-full h-[52px] lg:h-[58px] rounded-full text-[16px] font-bold text-[#2780C4] font-jakarta bg-[#F7F8F8] border-2 border-[#2780C4] [-webkit-tap-highlight-color:transparent] hover:bg-white transition-all cursor-pointer">
        Login
      </button>

      {/* Forgot */}
      <p className="text-center mt-5 lg:mt-6 text-[14px] text-[#B8B8B8] font-jakarta">
        Forgot your password?{" "}
        <Link href="/login/forgot-password" className="text-[#2780C4] font-semibold hover:underline transition-all cursor-pointer">
          Reset it
        </Link>
      </p>

    </div>
  );
}
