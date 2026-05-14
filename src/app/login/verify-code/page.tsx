"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function VerifyCodePage() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [seconds, setSeconds] = useState(55);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  const handleChange = (val: string, idx: number) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 4) inputs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="w-full max-w-[440px]">
      <h1 className="text-[34px] lg:text-[42px] font-bold text-[#353535] font-jakarta leading-tight mb-2">
        Verify Code
      </h1>
      <p className="text-[14px] text-[#B8B8B8] font-jakarta mb-8 leading-[1.6]">
        A 5-digit security code has been dispatched to{" "}
        <span className="text-[#434343]">arjun.v@gmail.com</span>. Enter it below to unlock your institutional dossier.
      </p>

      {/* OTP boxes */}
      <div className="flex gap-3 mb-5">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={el => { inputs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={e => handleChange(e.target.value, i)}
            onKeyDown={e => handleKeyDown(e, i)}
            className={`w-full aspect-square rounded-full border-2 text-center text-[22px] font-bold font-jakarta focus:outline-none transition-all cursor-text ${
              digit
                ? "border-[#2780C4] text-[#2780C4] bg-[#EEF6FF]"
                : "border-[#E8E8E8] text-[#434343] bg-white focus:border-[#2780C4] focus:ring-1 focus:ring-[#2780C4]/20"
            }`}
          />
        ))}
      </div>

      {/* Timer */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <svg className="w-4 h-4 text-[#BDBDBD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[14px] text-[#BDBDBD] font-jakarta font-medium">
          00:{pad(seconds)}s
        </span>
      </div>

      {/* Resend */}
      <p className="text-center text-[13px] text-[#B8B8B8] font-jakarta mb-8">
        Didn&apos;t receive the code?{" "}
        <button
          onClick={() => setSeconds(55)}
          className="text-[#2780C4] font-semibold hover:underline [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer"
        >
          Resend Dispatched Code
        </button>
      </p>

      {/* Verify button */}
      <Link href="/login/reset-password" className="block w-full">
        <button
          className="w-full h-[52px] lg:h-[58px] rounded-full text-[16px] font-bold text-white font-jakarta [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
        >
          Verify Code &amp; Activate Profile
        </button>
      </Link>
    </div>
  );
}
