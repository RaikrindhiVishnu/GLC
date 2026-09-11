"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const slideData = [
  {
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=85&auto=format&fit=crop",
    title: "Invest with Zero Doubts.",
    desc: "Every property on our platform goes through strict physical inspections and digital background checks before you even see it. We do the groundwork so you can invest safely."
  },
  {
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=85&auto=format&fit=crop",
    title: "Farmland Ownership,\nMade Simple.",
    desc: "Choose the investment path that works for you. Buy a complete farm directly, or team up with other investors through our secure pool buying options."
  },
  {
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=85&auto=format&fit=crop",
    title: "More Than Just\nPremium Farmland.",
    desc: "Secure your land and let us handle the rest. Track your property, unlock verified documents, and manage organic farming services right from your application."
  }
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slideData.length), 6000);
    return () => clearInterval(t);
  }, []);

  let trustData = {
    title: "100% Deeply Verified Assets",
    subtitle: "Every listing passes rigorous ground checks and AI satellite screening.",
    icons: [
      <svg key="1" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 12H8v-2h3V8h2v3h3v2h-3v3h-2v-3z"/></svg>,
      <svg key="2" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
      <svg key="3" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
    ]
  };

  const isRegister = pathname?.includes('/register') && !pathname?.includes('/registration-success');
  const isForgot = pathname?.includes('/forgot-password');
  const isReset = pathname?.includes('/reset-password');
  const isCheckEmail = pathname?.includes('/check-email') || pathname?.includes('/verify-mail');

  if (isRegister || isForgot) {
    trustData = {
      title: "Bank-Grade Capital Protection",
      subtitle: "Secured by strict KYC protocols and transparent trust account routing.",
      icons: [
        <svg key="1" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M2 20h20v2H2v-2zm10-18l10 5v2H2V7l10-5zm-7 9h2v7H5v-7zm6 0h2v7h-2v-7zm6 0h2v7h-2v-7z"/></svg>,
        <svg key="2" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>,
        <svg key="3" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
      ]
    };
  } else if (isReset || isCheckEmail) {
    trustData = {
      title: "Premium Curated Farmlands",
      subtitle: "Only zero-risk, legally cleared properties make it to our marketplace.",
      icons: [
        <svg key="1" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2h-2V7H6v10h4v2H6c-1.1 0-2-.9-2-2V7zm14 6v6h2v-6h-2zM4 14h4v-2H4v2z"/></svg>,
        <svg key="2" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c3.47.5 6.94.39 10.41-1.45 2.12-1.12 3.6-2.92 4.47-5.06l1.32-3.19C24 6 17 8 17 8z"/></svg>,
        <svg key="3" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      ]
    };
  }

  return (
    <div className="h-screen w-full bg-white flex flex-col lg:flex-row gap-3 p-3 lg:p-4 overflow-hidden">

      {/* ── LEFT PANEL ── */}
      <div className="flex-1 flex flex-col gap-2 min-h-0">

        {/* Form card */}
        <div className="relative z-10 flex-1 bg-[#F5F5F5] border-[3px] border-white rounded-[30px] flex flex-col p-4 lg:px-8 lg:py-2">
          <div className="flex-1 flex flex-col justify-center items-center min-h-0">
            {children}
          </div>
        </div>

        {/* Trust bar */}
        <div className="bg-[#F5F5F5] border-[3px] border-white rounded-[28px] px-5 py-3 lg:py-4 flex items-center gap-4 shrink-0">
          <div className="flex -space-x-3 shrink-0">
            {trustData.icons.map((icon, i) => (
              <div key={i} className="w-[38px] h-[38px] lg:w-[48px] lg:h-[48px] rounded-full bg-white flex items-center justify-center border border-[#D8D8D8] shadow-sm relative z-[1]">
                {icon}
              </div>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] lg:text-[15px] font-semibold text-[#616161] font-jakarta leading-tight">{trustData.title}</p>
            <p className="text-[11px] lg:text-[13px] text-[#C0C0C0] font-jakarta truncate">{trustData.subtitle}</p>
          </div>
        </div>

      </div>

      {/* ── RIGHT PANEL (desktop only) ── */}
      <div className="hidden lg:block lg:w-[49%] relative rounded-[30px] overflow-hidden h-full">

        {/* Slideshow images */}
        {slideData.map((slide, i) => (
          <img
            key={i}
            src={slide.img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}

        {/* Overlay - Dark faded from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50" />

        {/* Titles at the top */}
        <div className="absolute top-10 lg:top-14 left-8 lg:left-12 right-12 z-10">
          <div className="relative overflow-hidden">
            {slideData.map((slide, i) => (
              <h2 
                key={i}
                className={`absolute top-0 left-0 text-[40px] xl:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-jakarta transition-all duration-700 ${
                  i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
                style={{ whiteSpace: 'pre-line' }}
              >
                {slide.title}
              </h2>
            ))}
            {/* Spacer to maintain layout height */}
            <h2 className="opacity-0 text-[40px] xl:text-[48px] font-bold leading-[1.1] font-jakarta" style={{ whiteSpace: 'pre-line' }}>
              {"Spacer\nPlaceholder"}
            </h2>
          </div>
        </div>

        {/* Bottom glass card container */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <div className="bg-[#C4C4C4]/20 backdrop-blur-xl rounded-[34px] p-6 lg:p-7 border border-white/15">
            {/* Description Text */}
            <div className="relative h-[60px]">
              {slideData.map((slide, i) => (
                <p 
                  key={i}
                  className={`absolute inset-0 text-white/95 text-[14px] leading-[1.6] font-jakarta pr-4 lg:pr-24 transition-all duration-700 ${
                    i === current ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
                  }`}
                >
                  {slide.desc}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
