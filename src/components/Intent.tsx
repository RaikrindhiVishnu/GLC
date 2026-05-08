"use client";

import Image from "next/image";

export default function Intent() {
  return (
    <section className="relative w-full h-[920px] bg-[#CBCBCB] overflow-hidden flex flex-col items-center">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 h-[920px]">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/assets/intent/video-user.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Main UI Container - Fixed at 1440px to match absolute Figma coordinates */}
      <div className="relative w-[1440px] h-[920px] shrink-0 z-10">
        
        {/* Middle Blur Container (Subtract/Rectangle 161125646) */}
        <div 
          className="absolute bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] overflow-hidden shadow-2xl"
          style={{ width: '664px', height: '386px', left: '386px', top: '267px' }}
        >
          {/* Glass Gradient/Subtle UI Layer */}
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        </div>

        {/* Play Button - Exactly positioned */}
        <div 
          className="absolute rounded-full bg-white flex items-center justify-center cursor-default z-20"
          style={{ width: '72px', height: '72px', left: '682px', top: '424px' }}
        >
          <div className="relative w-[36px] h-[36px]">
            <Image 
              src="/assets/intent/Play.svg" 
              alt="Play" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>

        {/* Intent of Green Land Capital Title */}
        <div 
          className="absolute text-center"
          style={{ width: '368px', left: 'calc(50% - 368px/2)', top: '717px' }}
        >
          <h3 className="text-[28px] font-bold tracking-[-0.02em] text-white font-jakarta leading-none">
            Intent of Green Land Capital
          </h3>
        </div>

        {/* Paragraph Text */}
        <div 
          className="absolute text-center"
          style={{ width: '740px', left: 'calc(50% - 740px/2)', top: '761px' }}
        >
          <p className="text-[18px] leading-[140%] tracking-[-0.01em] text-[#F6F6F6] font-jakarta">
            Partner with us to transform your land into a sustainable organic estate, yielding <br/>
            chemical-free harvests for your family.
          </p>
        </div>

      </div>

    </section>
  );
}
