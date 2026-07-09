"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../../../services/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleContinue = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await authService.forgotPassword({ login_id: email });
      router.push(`/login/verify-mail?email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-110">
      <motion.h1
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className="text-[34px] lg:text-[42px] font-bold text-[#353535] font-jakarta leading-tight mb-2"
      >
        Forgot Your Password?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[14px] text-[#B8B8B8] font-jakarta mb-8 leading-[1.6]"
      >
        We&apos;ll send a secure verification link to your registered email address.
      </motion.p>

      {/* Email / Investor ID */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mb-6 lg:mb-8 bg-white border border-[#D3DEEA] rounded-[33px] h-14.5 lg:h-16.5 flex items-center px-6 gap-3 focus-within:border-brand-secondary focus-within:ring-1 focus-within:ring-brand-secondary/20 transition-all cursor-text"
      >
        <svg className="w-5 h-5 text-brand-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <div className="w-px h-5 bg-[#EFEFEF] shrink-0" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address or Investor ID"
          className="flex-1 bg-transparent text-[15px] text-[#434343] placeholder:text-[#8C8C8C] focus:outline-none font-jakarta cursor-text"
        />
      </motion.div>

      {error && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-red-500 text-[13px] font-jakarta mb-3 text-center"
        >
          {error}
        </motion.p>
      )}

      {/* Continue */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button
          onClick={handleContinue}
          disabled={loading}
          className="w-full h-13 lg:h-14.5 rounded-full text-[16px] font-bold text-white font-jakarta [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer disabled:opacity-70"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
        >
          {loading ? "Sending..." : "Continue"}
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-5 lg:mt-6 text-[14px] text-[#B8B8B8] font-jakarta"
      >
        Remember your password?{" "}
        <Link href="/login" className="text-brand-secondary font-semibold hover:underline transition-all cursor-pointer">
          Back to Login
        </Link>
      </motion.p>
    </div>
  );
}
