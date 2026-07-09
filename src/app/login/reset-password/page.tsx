"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { authService } from "../../../services/auth";

function ResetPasswordContent() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email") || "";

  const handleContinue = async () => {
    if (!newPassword || !confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!email) {
      setError("Email not found. Please try the flow again.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await authService.resetPassword({ login_id: email, new_password: newPassword });
      alert("Password reset successfully! You can now log in.");
      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className="text-[34px] lg:text-[42px] font-bold text-[#353535] font-jakarta leading-tight mb-2"
      >
        Reset Your Password?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[14px] text-[#B8B8B8] font-jakarta mb-8 leading-[1.6]"
      >
        Create a new password to access your account.
      </motion.p>

      {/* New password */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mb-4 lg:mb-5 bg-white border border-[#D3DEEA] rounded-[33px] h-14.5 lg:h-16.5 flex items-center px-6 gap-3 focus-within:border-brand-secondary focus-within:ring-1 focus-within:ring-brand-secondary/20 transition-all cursor-text"
      >
        <svg className="w-5 h-5 text-brand-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <div className="w-px h-5 bg-[#EFEFEF] shrink-0" />
        <input
          type={showNew ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          className="flex-1 bg-transparent text-[15px] text-[#434343] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text"
        />
        <button onClick={() => setShowNew(s => !s)} className="shrink-0 [-webkit-tap-highlight-color:transparent] cursor-pointer hover:opacity-70">
          <svg className="w-5 h-5 text-[#A1999B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {showNew
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.971 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              : <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
            }
          </svg>
        </button>
      </motion.div>

      {/* Confirm password */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mb-6 lg:mb-8 bg-white border border-[#D3DEEA] rounded-[33px] h-14.5 lg:h-16.5 flex items-center px-6 gap-3 focus-within:border-brand-secondary focus-within:ring-1 focus-within:ring-brand-secondary/20 transition-all cursor-text"
      >
        <svg className="w-5 h-5 text-brand-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <div className="w-px h-5 bg-[#EFEFEF] shrink-0" />
        <input
          type={showConfirm ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="flex-1 bg-transparent text-[15px] text-[#434343] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text"
        />
        <button onClick={() => setShowConfirm(s => !s)} className="shrink-0 [-webkit-tap-highlight-color:transparent] cursor-pointer hover:opacity-70">
          <svg className="w-5 h-5 text-[#A1999B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {showConfirm
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.971 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              : <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
            }
          </svg>
        </button>
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
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button
          onClick={handleContinue}
          disabled={loading}
          className="w-full h-13 lg:h-14.5 rounded-full text-[16px] font-bold text-white font-jakarta [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer disabled:opacity-70"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
        >
          {loading ? "Resetting..." : "Continue"}
        </button>
      </motion.div>
    </>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="w-full max-w-110">
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordContent />
      </Suspense>
    </div>
  );
}
