"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-[440px]">
      <h1 className="text-[34px] lg:text-[42px] font-bold text-[#353535] font-jakarta leading-tight mb-2">
        Forgot Your Password?
      </h1>
      <p className="text-[14px] text-[#B8B8B8] font-jakarta mb-8 leading-[1.6]">
        We&apos;ll send a secure verification link to your registered email address.
      </p>

      {/* Email / Investor ID */}
      <div className="mb-6 lg:mb-8 bg-white border border-[#D3DEEA] rounded-[33px] h-[58px] lg:h-[66px] flex items-center px-6 gap-3 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
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

      {/* Continue */}
      <Link href="/login/verify-mail" className="block w-full">
        <button
          className="w-full h-[52px] lg:h-[58px] rounded-full text-[16px] font-bold text-white font-jakarta [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
        >
          Continue
        </button>
      </Link>

      <p className="text-center mt-5 lg:mt-6 text-[14px] text-[#B8B8B8] font-jakarta">
        Remember your password?{" "}
        <Link href="/login" className="text-[#2780C4] font-semibold hover:underline transition-all cursor-pointer">
          Back to Login
        </Link>
      </p>
    </div>
  );
}
