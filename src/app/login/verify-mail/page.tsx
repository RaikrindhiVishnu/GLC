"use client";

import Link from "next/link";

export default function VerifyMailPage() {
  return (
    <div className="w-full max-w-[440px]">
      <h1 className="text-[34px] lg:text-[42px] font-bold text-[#353535] font-jakarta leading-tight mb-2">
        Verify Mail
      </h1>
      <p className="text-[14px] text-[#B8B8B8] font-jakarta mb-10 leading-[1.6]">
        We&apos;ve sent a secure verification link to your email address:{" "}
        <span className="text-[#434343]">arjun.v@gmail.com</span>
      </p>

      {/* Mail icon */}
      <div className="flex justify-center mb-10">
        <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", boxShadow: "0 0 0 12px #C5E5FF" }}>
          <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Open Mail App */}
      <Link href="/login/verify-code" className="block w-full">
        <button
          className="w-full h-[54px] rounded-full text-[15px] font-bold text-white font-jakarta mb-5 [-webkit-tap-highlight-color:transparent] transition-all"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
        >
          Open Mail App
        </button>
      </Link>

      <p className="text-center text-[13px] text-[#B8B8B8] font-jakarta">
        Didn&apos;t receive the email?{" "}
        <button className="text-[#2780C4] font-semibold hover:underline [-webkit-tap-highlight-color:transparent] transition-all">
          Resend Dispatched Link.
        </button>
      </p>
    </div>
  );
}
