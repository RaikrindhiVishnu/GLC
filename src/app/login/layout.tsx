"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slideData = [
  {
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=85&auto=format&fit=crop",
    title: "Democratizing\nPremium Real Estate.",
    desc: "Every fractional unit is backed by rigid KYC protocols and bank-grade Escrow routing. Your capital is always protected."
  },
  {
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=85&auto=format&fit=crop",
    title: "Invest in\nSustainable Growth.",
    desc: "Join thousands of co-owners in premium farmland that generates consistent yields while healing the earth."
  },
  {
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=85&auto=format&fit=crop",
    title: "Asset-Backed\nWealth Security.",
    desc: "Experience the security of physical assets combined with the liquidity of modern fractional investment platforms."
  },
  {
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=85&auto=format&fit=crop",
    title: "Digital-First\nLand Ownership.",
    desc: "Verify your titles and monitor your investment growth directly through our institutional-grade digital dashboard."
  }
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slideData.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slideData.length) % slideData.length);
  const next = () => setCurrent(c => (c + 1) % slideData.length);

  return (
    <div className="h-screen w-full bg-white flex flex-col lg:flex-row gap-3 p-3 lg:p-4 overflow-hidden">

      {/* ── LEFT PANEL ── */}
      <div className="flex-1 flex flex-col gap-2 min-h-0">

        {/* Form card */}
        <div className="flex-1 bg-[#F5F5F5] border-[3px] border-white rounded-[28px] flex flex-col p-6 lg:px-10 lg:py-6 overflow-hidden">
          {/* Mobile-only logo */}
          <Link href="/" className="lg:hidden block mb-6 shrink-0 [-webkit-tap-highlight-color:transparent] hover:opacity-80 transition-opacity">
            <Image
              src="/assets/common/Logo green land 1.svg"
              alt="Green Land Capital"
              width={120}
              height={52}
              className="w-[100px] h-auto"
            />
          </Link>
          <div className="flex-1 flex flex-col justify-center min-h-0">
            {children}
          </div>
        </div>

        {/* Trust bar */}
        <div className="bg-[#F5F5F5] border-[3px] border-white rounded-[28px] px-5 py-3 lg:py-4 flex items-center gap-4 shrink-0">
          <div className="flex -space-x-3 shrink-0">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-[38px] h-[38px] lg:w-[48px] lg:h-[48px] rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image src={`/assets/stats/person1.${i}.svg`} alt="" width={48} height={48} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] lg:text-[15px] font-semibold text-[#616161] font-jakarta leading-tight">Trusted by 1,500+ Co-Owners</p>
            <p className="text-[11px] lg:text-[13px] text-[#C0C0C0] font-jakarta truncate">Over ₹25 Cr+ in secure escrow volume.</p>
          </div>
          <button className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full border border-[#E0E0E0] bg-white flex items-center justify-center shrink-0 hover:bg-gray-50 transition-all">
            <svg className="w-5 h-5 text-[#616161]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
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

        {/* Logo at the top */}
        <div className="absolute top-12 left-12 right-12 z-10">
          <Link href="/" className="inline-block shrink-0 [-webkit-tap-highlight-color:transparent] hover:opacity-80 transition-opacity">
            <Image
              src="/assets/common/Logo green land 1.svg"
              alt="Green Land Capital"
              width={160}
              height={68}
              className="w-[150px] h-auto" // Restored original color
            />
          </Link>
        </div>

        {/* Heading and Bottom glass card container */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          
          {/* Titles moved here - on top of the glass box */}
          <div className="relative overflow-hidden mb-6 px-6">
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

          <div className="bg-white/10 backdrop-blur-xl rounded-[26px] p-6 border border-white/15">
            <div className="flex items-center justify-between mb-4">

              {/* Fully Transparent badge */}
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 border border-white/20">
                <div className="flex -space-x-2.5">
                  <div className="w-6 h-6 rounded-full border-[2.5px] border-white/80" />
                  <div className="w-6 h-6 rounded-full border-[2.5px] border-white/80" />
                </div>
                <span className="text-white text-[13px] font-medium font-jakarta ml-1">Fully Transparent</span>
              </div>

              {/* Nav arrows */}
              <div className="flex gap-3">
                <button onClick={prev} className="w-[48px] h-[48px] rounded-full border-[2.5px] border-white flex items-center justify-center hover:bg-white/10 transition-all [-webkit-tap-highlight-color:transparent]">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
                <button onClick={next} className="w-[48px] h-[48px] rounded-full border-[2.5px] border-white flex items-center justify-center hover:bg-white/10 transition-all [-webkit-tap-highlight-color:transparent]">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </div>
            <div className="relative h-[60px]">
              {slideData.map((slide, i) => (
                <p 
                  key={i}
                  className={`absolute inset-0 text-white/85 text-[14px] leading-[1.6] font-jakarta transition-all duration-700 ${
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
