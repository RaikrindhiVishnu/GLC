"use client";

import { useRouter } from "next/navigation";

export default function FeaturedCard() {
  const router = useRouter();

  return (
    <div className="relative flex-1 w-full mx-auto min-h-[525.75px] bg-white rounded-[48px] flex flex-col md:flex-row shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
      
      {/* Left side: Image Container */}
      <div 
        className="w-full md:w-[631px] min-h-[300px] md:h-[525.75px] flex-shrink-0"
        style={{
          background: "url('/assets/search/image2.1.svg') center/cover",
        }}
      />

      {/* Right side: Content Container */}
      <div className="flex-1 p-[40px] flex flex-col justify-center">
        
        {/* Margin for Label */}
        <div className="flex flex-col items-start pb-[16px]">
          <div className="flex items-center gap-[7.99px]">
            {/* Verified Icon (placeholder for the 22x21 icon) */}
            <div className="w-[22px] h-[21px] flex items-center justify-center">
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
                <path d="M11 0L13.5 7H21L15 11.5L17.5 18.5L11 14L4.5 18.5L7 11.5L1 7H8.5L11 0Z" fill="#2780C4"/>
              </svg>
            </div>
            <span 
              className="font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[#0F2F4C]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Verified Opportunity
            </span>
          </div>
        </div>

        {/* Heading 2 */}
        <div className="flex flex-col items-start pb-[16px]">
          <h2 
            className="font-bold text-[36px] leading-[45px] tracking-[-0.9px] text-[#0F2F4C]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            GLC SOS 01
          </h2>
        </div>

        {/* Description */}
        <div className="flex flex-col items-start pb-[32px]">
          <p 
            className="text-[18px] leading-[29px] text-[#45474C]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Prime horticultural land with automated drip irrigation and 100% soil organic certification. Situated 40km from the industrial logistics hub.
          </p>
        </div>

        {/* Valuation & Button Area */}
        <div className="flex flex-row items-center gap-[40px] pb-[40px]">
          <div className="flex flex-col">
            <span 
              className="font-bold text-[12px] leading-[16px] uppercase text-[#75777D]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              VALUATION
            </span>
            <span 
              className="font-extrabold text-[24px] leading-[32px] text-[#0F2F4C]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              ₹4.3Cr
            </span>
          </div>

          <button 
            onClick={() => router.push("/home/compareassets")}
            className="w-[146px] h-[56px] rounded-[32px] flex items-center justify-center text-white font-bold text-[16px] leading-[24px] transition-transform hover:scale-105"
            style={{ 
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}
          >
            COMPARE
          </button>
        </div>

      </div>
    </div>
  );
}
