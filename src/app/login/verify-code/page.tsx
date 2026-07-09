"use client";

import Link from "next/link";
import { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { authService } from "../../../services/auth";

function VerifyCodeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email") || "your email";
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6 digits for auth API
  const [seconds, setSeconds] = useState(55);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
    if (val && idx < 5) inputs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length < 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await authService.verifyOtp({ emailAddress: email, otp: code });
      router.push(`/login/reset-password?email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      setError(err.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    try {
      await authService.sendOtp({ emailAddress: email });
      setSeconds(55);
      alert("Code resent!");
    } catch (err: any) {
      setError(err.message || "Failed to resend.");
    }
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className="text-[34px] lg:text-[42px] font-bold text-[#353535] font-jakarta leading-tight mb-2"
      >
        Verify Code
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[14px] text-[#B8B8B8] font-jakarta mb-8 leading-[1.6]"
      >
        A 6-digit security code has been dispatched to{" "}
        <span className="text-[#434343]">{email}</span>. Enter it below to verify.
      </motion.p>

      {/* OTP boxes */}
      <div className="flex gap-3 mb-5">
        {otp.map((digit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
            style={{ flex: 1 }}
          >
            <input
              ref={el => { inputs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(e.target.value, i)}
              onKeyDown={e => handleKeyDown(e, i)}
              className={`w-full aspect-square rounded-full border-2 text-center text-[22px] font-bold font-jakarta focus:outline-none transition-all cursor-text ${
                digit
                  ? "border-brand-secondary text-brand-secondary bg-[#EEF6FF]"
                  : "border-[#E8E8E8] text-[#434343] bg-white focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary/20"
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Timer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="flex items-center justify-center gap-2 mb-2"
      >
        <svg className="w-4 h-4 text-[#BDBDBD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[14px] text-[#BDBDBD] font-jakarta font-medium">
          00:{pad(seconds)}s
        </span>
      </motion.div>

      {/* Resend */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center text-[13px] text-[#B8B8B8] font-jakarta mb-4"
      >
        Didn&apos;t receive the code?{" "}
        <button
          onClick={handleResend}
          disabled={seconds > 0}
          className={`font-semibold transition-all cursor-pointer ${seconds > 0 ? 'text-[#B8B8B8]' : 'text-brand-secondary hover:underline'}`}
        >
          Resend Dispatched Code
        </button>
      </motion.p>

      {error && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-red-500 text-[13px] font-jakarta mb-3 text-center"
        >
          {error}
        </motion.p>
      )}

      {/* Verify button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full h-13 lg:h-14.5 rounded-full text-[16px] font-bold text-white font-jakarta [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer disabled:opacity-70"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
        >
          {loading ? "Verifying..." : "Verify Code & Activate Profile"}
        </button>
      </motion.div>
    </>
  );
}

export default function VerifyCodePage() {
  return (
    <div className="w-full max-w-110">
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyCodeContent />
      </Suspense>
    </div>
  );
}
