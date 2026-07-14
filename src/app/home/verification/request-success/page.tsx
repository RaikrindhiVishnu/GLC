"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function RequestSuccessPage() {
  const router = useRouter();

  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[#091426]/20 backdrop-blur-[16.5px]"></div>

      {/* Success Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[932px] max-h-full bg-white rounded-[48px] shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="w-full flex-1 overflow-y-auto p-8 lg:p-12 flex flex-col items-center">
          {/* Success Icon */}
          <div className="relative mb-6">
            <div
              className="w-[96px] h-[96px] rounded-full border-[5px] border-[#AED6EF] flex items-center justify-center relative z-10"
              style={{ background: "radial-gradient(59.38% 41.98% at 50% 50%, #2780C4 0%, #164573 100%)" }}
            >
              <svg width="36" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0px_10px_15px_-3px_rgba(39,128,196,0.2),0px_4px_6px_-4px_rgba(39,128,196,0.2)] z-0" />
          </div>

          {/* Headings */}
          <div className="flex flex-col items-center mb-8 gap-4 max-w-[620px]">
            <h1 className="m-0 font-jakarta font-extrabold text-[40px] lg:text-[55px] leading-[1] text-[#131600] text-center tracking-[-1.38px]">
              Request Successfully<br />Logged
            </h1>
            <p className="m-0 font-jakarta font-medium text-[16px] lg:text-[16.5px] text-[#45474C] text-center max-w-[420px] leading-[27px]">
              Your Independent land verification request has been securely routed to GLC Team
            </p>
          </div>

          {/* Info Box - Notification Banner */}
          <div className="w-full max-w-[770px] bg-[#F4F3F7] rounded-[16px] border border-[#C4C6CF]/30 p-6 flex flex-col sm:flex-row gap-4 items-start mb-10">
            <div className="w-10 h-10 bg-[#0061A5]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0061A5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="m-0 font-jakarta font-bold text-[16px] text-[#002045]">Secure Payment Link Generated</h3>
              <p className="m-0 font-jakarta font-normal text-[14px] leading-[23px] text-[#43474E]">
                A payment link for the verification processing fee has been dispatched to your registered email and WhatsApp. Your official verification pipeline will commence immediately upon payment confirmation via the secure Razorpay link.
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="w-full max-w-[770px] flex flex-col items-start mb-12">
            <h2 className="m-0 font-jakarta font-bold text-[18px] text-[#002045] mb-8">Next Steps in Your Pipeline</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 w-full">
              {/* Step 1 */}
              <div className="flex flex-row gap-6 items-start">
                <div className="w-[38px] h-[38px] bg-[#1B79BD] text-white rounded-full flex items-center justify-center font-jakarta font-bold text-[13px] flex-shrink-0">1</div>
                <div className="flex flex-col gap-1">
                  <span className="font-jakarta font-bold text-[16px] text-[#002045]">Payment Confirmation</span>
                  <span className="font-jakarta font-normal text-[14px] leading-[21px] text-[#43474E]">Complete the fee via the secure Razorpay link sent to you.</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-row gap-6 items-start">
                <div className="w-[38px] h-[38px] bg-[#E4E4E4] text-black rounded-full flex items-center justify-center font-jakarta font-bold text-[13px] flex-shrink-0">2</div>
                <div className="flex flex-col gap-1">
                  <span className="font-jakarta font-bold text-[16px] text-[#74777F]">Officer Assignment</span>
                  <span className="font-jakarta font-normal text-[14px] leading-[21px] text-[#C4C6CF]">Our AI and Central Command will screen the coordinates and assign a local Field Officer (FO).</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-row gap-6 items-start">
                <div className="w-[38px] h-[38px] bg-[#E4E4E4] text-black rounded-full flex items-center justify-center font-jakarta font-bold text-[13px] flex-shrink-0">3</div>
                <div className="flex flex-col gap-1">
                  <span className="font-jakarta font-bold text-[16px] text-[#74777F]">Field Audit</span>
                  <span className="font-jakarta font-normal text-[14px] leading-[21px] text-[#C4C6CF]">Physical boundary checks, document collection, and intelligence gathering commence.</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-row gap-6 items-start">
                <div className="w-[38px] h-[38px] bg-[#E4E4E4] text-black rounded-full flex items-center justify-center font-jakarta font-bold text-[13px] flex-shrink-0">4</div>
                <div className="flex flex-col gap-1">
                  <span className="font-jakarta font-bold text-[16px] text-[#74777F]">Final Certificate</span>
                  <span className="font-jakarta font-normal text-[14px] leading-[21px] text-[#C4C6CF]">A digitally signed, watermarked Verification Certificate is issued to your dashboard.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Track Button */}
          <button
            onClick={() => router.push("/home/verification/tracker")}
            className="w-full max-w-[817px] text-white font-jakarta font-bold text-[16.5px] uppercase tracking-wide py-5 rounded-full shadow-[0px_9px_14px_-3px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform"
            style={{ background: "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)" }}
          >
            TRACK VERIFICATION
          </button>
        </div>
      </motion.div>
    </main>
  );
}
