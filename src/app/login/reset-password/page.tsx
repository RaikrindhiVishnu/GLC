"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { authService } from "../../../services/auth";
import Image from "next/image";

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
        <Image src="/assets/login/Group.svg" alt="Password" width={24} height={24} className="shrink-0" />
        <div className="w-px h-5 bg-[#EFEFEF] shrink-0" />
        <input
          type={showNew ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          className="flex-1 bg-transparent text-[15px] text-[#434343] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text"
        />
        <button onClick={() => setShowNew(s => !s)} className="shrink-0 [-webkit-tap-highlight-color:transparent] cursor-pointer hover:opacity-70">
          {showNew ? (
            <Image src="/assets/login/mynaui_eye.svg" alt="Hide" width={24} height={24} className="shrink-0 opacity-60" />
          ) : (
            <Image src="/assets/login/EyeSlash.svg" alt="Show" width={24} height={24} className="shrink-0 opacity-60" />
          )}
        </button>
      </motion.div>

      {/* Confirm password */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mb-6 lg:mb-8 bg-white border border-[#D3DEEA] rounded-[33px] h-14.5 lg:h-16.5 flex items-center px-6 gap-3 focus-within:border-brand-secondary focus-within:ring-1 focus-within:ring-brand-secondary/20 transition-all cursor-text"
      >
        <Image src="/assets/login/Group.svg" alt="Password" width={24} height={24} className="shrink-0" />
        <div className="w-px h-5 bg-[#EFEFEF] shrink-0" />
        <input
          type={showConfirm ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="flex-1 bg-transparent text-[15px] text-[#434343] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text"
        />
        <button onClick={() => setShowConfirm(s => !s)} className="shrink-0 [-webkit-tap-highlight-color:transparent] cursor-pointer hover:opacity-70">
          {showConfirm ? (
            <Image src="/assets/login/mynaui_eye.svg" alt="Hide" width={24} height={24} className="shrink-0 opacity-60" />
          ) : (
            <Image src="/assets/login/EyeSlash.svg" alt="Show" width={24} height={24} className="shrink-0 opacity-60" />
          )}
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
