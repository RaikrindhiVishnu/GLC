"use client";

import Image from "next/image";

export default function Stats() {
  return (
    <section className="relative w-full flex flex-col items-center bg-white py-24 overflow-hidden">
      
      {/* Figma Frame Container (1300px width) */}
      <div className="relative w-[1300px] h-[726px] shrink-0">
        
        {/* Avatar Group (Trusted by over) */}
        <div className="absolute left-[1px] top-[0px] z-20">
           <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-[45px] h-[45px] rounded-full border-2 border-white overflow-hidden bg-gray-100 shadow-sm">
                  <Image 
                    src={`/assets/stats/person1.${i}.svg`} 
                    alt="User" fill className="object-cover" 
                  />
                </div>
              ))}
           </div>
           <p className="mt-4 text-[14.9px] font-medium text-[#A4A4A4] font-jakarta">
             Trusted by over
           </p>
           <h4 className="mt-1 text-[24px] font-bold text-[#0F2F4C] font-jakarta">1.2K+</h4>
           <p className="text-[14px] text-[#A4A4A4] font-jakarta">investor worldwide</p>
        </div>

        {/* Main Headline Block - Right Aligned as per Specs */}
        <div className="absolute right-0 top-0 w-full flex flex-col items-end text-right">
          
          <h2 
            className="absolute text-[39.57px] font-semibold leading-[50px] text-[#0F2F4C] font-jakarta whitespace-nowrap"
            style={{ right: '0px', top: '0px' }}
          >
            We unite sustainable ecology and generational
          </h2>

          <div 
            className="absolute flex items-center gap-4 whitespace-nowrap"
            style={{ right: '0.12px', top: '55px' }}
          >
             <h2 className="text-[39.57px] font-semibold leading-[50px] text-[#0F2F4C] font-jakarta">
               wealth, transforming
             </h2>
             <div className="relative w-[84px] h-[41px] rounded-full overflow-hidden border border-gray-100 shadow-sm">
                <Image src="/assets/stats/wheat1.4.svg" alt="Wheat" fill className="object-cover" />
             </div>
             <h2 className="text-[39.57px] font-semibold leading-[50px] text-[#0F2F4C]/50 font-jakarta">
               fully verified land
             </h2>
          </div>

          <h2 
            className="absolute text-[39.57px] font-semibold leading-[50px] text-[#0F2F4C]/50 font-jakarta whitespace-nowrap"
            style={{ right: '0.12px', top: '110px' }}
          >
            into premium assets with profitable
          </h2>

          <h2 
            className="absolute text-[39.57px] font-semibold leading-[50px] text-[#0F2F4C]/50 font-jakarta whitespace-nowrap"
            style={{ right: '0.12px', top: '165px' }}
          >
            organic yields.
          </h2>
        </div>

        {/* Subtitle Paragraph - Aligned with start of cards */}
        <div 
          className="absolute text-left"
          style={{ width: '694px', left: '374px', bottom: '350px' }}
        >
          <p className="text-[13.3px] leading-[25px] text-[#0F2F4C] font-jakarta opacity-80">
            We empower landowners with data-driven agronomy, transforming verified properties into sustainably <br/>
            managed, high-yield organic assets for passive wealth generation.
          </p>
        </div>

        {/* Three Stats Cards Container - Pushed Right (Total width = 926px) */}
        <div className="absolute bottom-0 right-0 flex gap-4">
           
           {/* Managed Assets */}
           <div className="w-[298px] h-[298px] bg-[#F5F5F5] border-[8px] border-white rounded-[30px] p-8 flex flex-col justify-between shadow-sm relative group overflow-hidden">
             <div className="flex justify-between items-start">
               <span className="text-[18px] font-semibold text-[#0F2F4C] font-jakarta opacity-60">Managed Assets</span>
               <div className="w-4 h-4 text-[#0F2F4C] opacity-20">✦</div>
             </div>
             <div className="flex flex-col">
                <span className="text-[49.3px] font-bold text-[#323335] font-jakarta tracking-tight">₹45Cr+</span>
             </div>
             <div className="absolute inset-0 bg-[#2780C4] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
           </div>

           {/* Verified Titles */}
           <div className="w-[298px] h-[298px] bg-[#F5F5F5] border-[8px] border-white rounded-[30px] p-8 flex flex-col justify-between shadow-sm relative group overflow-hidden">
             <div className="flex justify-between items-start">
               <span className="text-[18px] font-semibold text-[#0F2F4C] font-jakarta opacity-60">Verified Titles</span>
               <div className="w-4 h-4 text-[#0F2F4C] opacity-20">✦</div>
             </div>
             <div className="flex flex-col">
                <span className="text-[54.6px] font-bold text-[#38393B] font-jakarta tracking-tight">100%</span>
             </div>
             <div className="absolute inset-0 bg-[#2780C4] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
           </div>

           {/* Active Investors */}
           <div className="w-[298px] h-[298px] bg-[#F5F5F5] border-[8px] border-white rounded-[30px] p-8 flex flex-col justify-between shadow-sm relative group overflow-hidden">
             <div className="flex justify-between items-start">
               <span className="text-[18px] font-semibold text-[#0F2F4C] font-jakarta opacity-60">Active Investors</span>
               <div className="w-4 h-4 text-[#0F2F4C] opacity-20">✦</div>
             </div>
             <div className="flex flex-col">
                <span className="text-[50.6px] font-bold text-[#363739] font-jakarta tracking-tight">1,200+</span>
             </div>
             <div className="absolute inset-0 bg-[#2780C4] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
           </div>

        </div>

        {/* Bottom Left Content Block - Two Images Side-by-Side */}
        <div className="absolute left-0 bottom-0 flex flex-col gap-4">
           <div className="flex gap-4 items-end">
              <div className="relative w-[124px] h-[124px] rounded-[15px] overflow-hidden shadow-md group border border-white/20">
                 <Image src="/assets/stats/Image1.5.svg" alt="Hands" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="relative w-[124px] h-[124px] rounded-[15px] overflow-hidden shadow-md group border border-white/20">
                 <Image src="/assets/stats/Image1.6.svg" alt="Tomatoes" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
           </div>
           <div style={{ width: '399px' }}>
              <p className="text-[14px] leading-[23px] text-[#909090] font-jakarta">
                Smart, data-driven agricultural management optimizing <br/>
                organic yields and resource efficiency for your <br/>
                premium assets.
              </p>
           </div>
        </div>

      </div>

    </section>
  );
}
