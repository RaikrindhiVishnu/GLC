"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { authService } from "../../services/auth";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      // 1. Check if the user exists and is approved
      const statusRes = await authService.checkLoginStatus({ emailAddress: email });
      
      if (statusRes.user_exists !== 1) {
        throw new Error("Account does not exist. Please sign up.");
      }
      
      if (statusRes.user_registration_status_code !== "APPRVD") {
        throw new Error(`Account is not approved yet (${statusRes.user_registration_status_description})`);
      }

      // 2. Proceed to actual login
      const res = await authService.login({ login_id: email, password });
      
      // Save tokens and user info to localStorage
      const extractedToken = res.token || (res as any).data?.token;
      if (extractedToken) {
        localStorage.setItem("token", extractedToken);
      }
      const extractedRefreshToken = res.refreshToken || (res as any).data?.refreshToken;
      if (extractedRefreshToken) {
        localStorage.setItem("refreshToken", extractedRefreshToken);
      }
      
      const extractedUserId = res.id || (res as any).userId || (res as any).data?.id || (res as any).data?.userId;
      if (extractedUserId) {
        localStorage.setItem("userId", extractedUserId.toString());
      }

      // Redirect to home page
      router.push("/home");
    } catch (err: any) {
      setError(err.message || "Failed to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[490px] mx-auto py-1 flex flex-col justify-center">

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="inline-block mb-1 lg:mb-2 shrink-0 [-webkit-tap-highlight-color:transparent] hover:opacity-80 transition-opacity">
          <img
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital"
            className="w-[140px] lg:w-[160px] h-auto object-contain"
          />
        </Link>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[28px] lg:text-[38px] font-normal text-[#353535] font-jakarta leading-[1.15] mb-1 lg:mb-2"
      >
        Welcome to<br />
        Green Land Capital
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-[13px] lg:text-[14px] text-[#B8B8B8] font-jakarta mb-3 lg:mb-4 leading-snug"
      >
        Log in securely to manage your fractional assets, track escrow yields, and explore premium land opportunities in Medchal and Vikarabad.
      </motion.p>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-3 lg:mb-3 bg-[#FEFEFE] border border-[#D3DEEA] rounded-[33px] h-[48px] lg:h-[50px] flex items-center px-6 gap-3 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text"
      >
        <svg className="w-5 h-5 text-[#2780C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <div className="w-px h-5 bg-[#EFEFEF] shrink-0" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address or Investor ID"
          className="flex-1 bg-transparent text-[14px] text-[#434343] placeholder:text-[#8C8C8C] focus:outline-none font-jakarta cursor-text"
        />
      </motion.div>

      {/* Password */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-3 lg:mb-3 bg-[#FEFEFE] border border-[#D3DEEA] rounded-[33px] h-[48px] lg:h-[50px] flex items-center px-6 gap-3 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text"
      >
        <svg className="w-5 h-5 text-[#2780C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <div className="w-px h-5 bg-[#EFEFEF] shrink-0" />
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="flex-1 bg-transparent text-[14px] text-[#434343] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text"
        />
        <button onClick={() => setShowPassword(s => !s)} className="shrink-0 [-webkit-tap-highlight-color:transparent] cursor-pointer hover:opacity-70">
          <svg className="w-5 h-5 text-[#A1999B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {showPassword
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              : <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
            }
          </svg>
        </button>
      </motion.div>

      {/* Remember me & Forgot Password */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex items-center justify-between mb-4 lg:mb-4 px-1"
      >
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <div className="relative w-5 h-5 rounded flex items-center justify-center transition-all bg-[#F7F8F8] border border-[#D3DEEA] group-hover:border-[#2780C4]">
             <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" defaultChecked />
             <div className="absolute inset-0 rounded bg-[radial-gradient(50%_50%_at_50%_50%,#2780C4_0%,#164573_100%)] opacity-0 peer-checked:opacity-100 transition-opacity" />
             <svg className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 z-10 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
             </svg>
          </div>
          <span className="text-[14px] text-[#353535] font-jakarta font-medium cursor-pointer">Remember me</span>
        </label>
        
        <Link prefetch={false} href="/login/forgot-password" className="text-[14px] text-[#353535] underline underline-offset-2 hover:text-[#2780C4] transition-colors font-jakarta">
          Forgot Password?
        </Link>
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

      {/* Login Securely button */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        onClick={handleLogin}
        disabled={loading}
        className="w-full h-[48px] lg:h-[50px] rounded-[30px] text-[15px] lg:text-[16px] font-bold text-white font-jakarta mb-3 lg:mb-4 [-webkit-tap-highlight-color:transparent] hover:opacity-90 transition-all cursor-pointer disabled:opacity-70"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
      >
        {loading ? "Logging in..." : "Log In Securely"}
      </motion.button>

      {/* OR divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex items-center gap-4 mb-3 lg:mb-4"
      >
        <div className="flex-1 h-px bg-[#E3E3E3]" />
        <span className="text-[13px] text-[#BDBDBD] font-jakarta">or</span>
        <div className="flex-1 h-px bg-[#E3E3E3]" />
      </motion.div>

      {/* Sign up button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <Link prefetch={false} href="/login/register" className="block w-full">
          <button
            className="w-full h-[48px] lg:h-[50px] rounded-[30px] text-[15px] lg:text-[16px] font-bold text-[#2780C4] font-jakarta bg-[#F7F8F8] border-[1.5px] border-[#2780C4] [-webkit-tap-highlight-color:transparent] hover:bg-white transition-all cursor-pointer"
          >
            Sign Up
          </button>
        </Link>
      </motion.div>

    </div>
  );
}
