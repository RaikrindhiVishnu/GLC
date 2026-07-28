"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function VerifyMailContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  return (
    <div className="w-full max-w-110">
      <motion.h1
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className="text-[34px] lg:text-[42px] font-bold text-[#353535] font-jakarta leading-tight mb-2"
      >
        Verify Mail
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[14px] text-[#B8B8B8] font-jakarta mb-10 leading-[1.6]"
      >
        We&apos;ve sent a secure verification link to your email address:{" "}
        <span className="text-[#434343]">{email}</span>
      </motion.p>

      {/* Mail icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
        className="flex justify-center mb-10"
      >
        <div
          className="w-22.5 h-22.5 rounded-full flex items-center justify-center"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", boxShadow: "0 0 0 12px #C5E5FF" }}
        >
          <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </motion.div>

      {/* Open Mail App */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        <Link href="/login/verify-code" className="block w-full">
          <button
            className="w-full h-13.5 rounded-full text-[15px] font-bold text-white font-jakarta mb-5 [-webkit-tap-highlight-color:transparent] transition-all"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
          >
            Open Mail App
          </button>
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="text-center text-[13px] text-[#B8B8B8] font-jakarta"
      >
        Didn&apos;t receive the email?{" "}
        <button className="text-brand-secondary font-semibold hover:underline [-webkit-tap-highlight-color:transparent] transition-all">
          Resend Dispatched Link.
        </button>
      </motion.p>
    </div>
  );
}

export default function VerifyMailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyMailContent />
    </Suspense>
  );
}
