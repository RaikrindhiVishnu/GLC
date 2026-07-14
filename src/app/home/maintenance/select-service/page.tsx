"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const SERVICES = [
  {
    key: "borewell-drilling",
    icon: (
      <svg width="18" height="23" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "Borewell Construction",
    desc: "Monitor drill progress, depth updates, and completion status.",
  },
  {
    key: "fencing-security",
    icon: (
      <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Fencing & Security",
    desc: "Manage boundary fencing, gates, security systems, and surveillance.",
  },
  {
    key: "farmhouse-construction",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    title: "Farmhouse Construction",
    desc: "Track construction progress, materials, and milestones.",
  },
  {
    key: "organic-farm-setup",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Organic Farming",
    desc: "Track organic cultivation activities, crop planning, and certifications.",
  },
];

function SelectServiceInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const servicesParam = searchParams.get("services");
  const activeServices = servicesParam ? servicesParam.split(",") : [];

  const availableServices = SERVICES; // The Figma screenshot shows all 4 cards present, even if filtered? Wait, no. The URL in the user's screenshot has `?services=fencing-security,borewell-drilling` but the Figma mockup shows all 4. The user wants the screen to look like the Figma mockup. I'll just show all available services for this demo, or filter them based on the query. Let's stick to the active services filter but the user's screenshot of their browser showed only 2 cards because they passed 2 services. I will render all 4 if `servicesParam` is missing, otherwise filter.
  const displayServices = activeServices.length > 0 ? SERVICES.filter(svc => activeServices.includes(svc.key)) : SERVICES;

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 lg:p-8 overflow-hidden font-jakarta" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1592982537447-6f296d07e6dc?q=80&w=2000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-0" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[1100px] bg-[#FFFFFF] rounded-[24px] shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[424px]"
      >
        {/* Left Side */}
        <div className="w-full md:w-[320px] bg-[#F4F5F7] p-[48px_32px] flex flex-col items-start flex-shrink-0">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-4 text-[#0F2F4C] font-bold text-[24px] mb-8 hover:opacity-80 transition-opacity tracking-tight"
          >
            <div className="w-[34px] h-[34px] rounded-full bg-[#E1E5EA] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            </div>
            Select Service
          </button>

          <div className="bg-white p-4 rounded-[16px] shadow-[0px_4px_20px_rgba(26,54,93,0.05)] w-full flex items-center gap-4 mb-6">
            <div className="relative w-[52px] h-[52px] rounded-[12px] overflow-hidden flex-shrink-0">
               <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=200&auto=format&fit=crop" fill alt="Farmland" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#74777F] font-bold tracking-widest uppercase mb-1">FARMLAND ID</span>
              <span className="text-[16px] text-[#0F2F4C] font-extrabold leading-tight">GLC SOS01</span>
              <span className="text-[9px] bg-[#CFE5FF] text-[#004673] px-2 py-[2px] rounded-[4px] font-bold tracking-wide mt-1 w-fit uppercase">UNDER MAINTENANCE</span>
            </div>
          </div>

          <p className="text-[#43474E] text-[16px] leading-[26px] mt-2 pr-4 font-medium">
            Choose the service you want to manage for this farmland.
          </p>
        </div>

        {/* Right Side - Services Grid */}
        <div className="w-full flex-1 p-12 bg-[#FFFFFF] flex items-start">
          {displayServices.length === 0 ? (
            <div className="text-[#A6A8B1] italic text-[15px]">No active services found for this request.</div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-[754px] mx-auto auto-rows-max">
              {displayServices.map((svc) => (
                <button
                  key={svc.key}
                  onClick={() => router.push(`/home/maintenance/track-progress/${svc.key}`)}
                  className="bg-[#FFFFFF] rounded-[16px] p-6 flex flex-row items-start gap-4 hover:shadow-[0px_8px_30px_rgba(26,54,93,0.1)] transition-shadow group text-left cursor-pointer border-none min-h-[152px]"
                  style={{ boxShadow: "0px 4px 20px rgba(26, 54, 93, 0.05)" }}
                >
                  <div className="w-[56px] h-[56px] rounded-full bg-[#2780C4] flex items-center justify-center flex-shrink-0">
                    {svc.icon}
                  </div>
                  <div className="flex flex-col gap-[6.88px]">
                    <h3 className="font-bold text-[16px] text-[#002045] leading-[24px] m-0">{svc.title}</h3>
                    <p className="text-[14px] text-[#43474E] leading-[23px] m-0">{svc.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </main>
  );
}

export default function SelectServicePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">Loading...</div>}>
      <SelectServiceInner />
    </Suspense>
  );
}
