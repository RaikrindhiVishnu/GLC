import Image from "next/image";

export default function Footer() {
  const dots = [
    { left: 241, top: 194, img: "/assets/stats/person1.1.svg" }, // 91
    { left: 581, top: 181, img: "/assets/stats/person1.2.svg" }, // 93
    { left: 487, top: 76, img: "/assets/stats/person1.3.svg" },  // 97
    { left: 968, top: 75, img: "/assets/stats/wheat1.4.svg" },  // 94
    { left: 1202, top: 194, img: "/assets/stats/person1.1.svg" }, // 96
    { left: 1002, top: 374, img: "/assets/stats/person1.2.svg" }, // 98
    { left: 592, top: 374, img: "/assets/stats/person1.3.svg" },  // 99
    { left: 290, top: 362, img: "/assets/stats/wheat1.4.svg" },  // 100
    { left: 931, top: 199, img: "/assets/stats/person1.1.svg" },  // 95
    { left: 187, top: 63, img: "/assets/stats/person1.2.svg" },   // 92
  ];

  return (
    <footer className="relative w-full bg-[#164573] pt-[64px] pb-[64px] overflow-hidden" 
      style={{ 
        background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
        minHeight: '899px'
      }}>
      
      <div className="container mx-auto max-w-[1312px] flex flex-col items-end gap-[30px] relative">
        
        {/* Frame 1000002206 - Branding Area */}
        <div className="relative w-[1312px] h-[672px] flex flex-col items-start gap-[84px]">
          
          {/* Green Land Capital Text Block */}
          <div className="relative w-[1312px] h-[437px] flex items-center justify-center z-0">
             {/* Floating Dots - Exact Pixel Positions from Figma */}
             {dots.map((dot, i) => (
                <div 
                  key={i} 
                  className="absolute w-[48px] h-[48px] rounded-full border-2 border-white shadow-2xl overflow-hidden z-20"
                  style={{ left: `${dot.left}px`, top: `${dot.top}px` }}
                >
                  <Image src={dot.img} alt="Dot" fill className="object-cover" />
                </div>
              ))}

              <h1 className="w-[1312px] h-[437px] text-[220px] font-semibold text-white leading-[80%] tracking-[-0.02em] text-center font-jakarta flex items-center justify-center select-none z-10">
                Green Land<br/>Capital
              </h1>
          </div>

          {/* Navigation Links Frame 1000002205 */}
          <div className="w-[1312px] h-[151px] flex flex-row justify-between items-center z-10">
             {/* Left Column */}
             <div className="flex flex-col gap-[40px] w-[129px] h-[151px]">
                <div className="flex flex-col gap-4">
                  <div className="relative w-[127px] h-[55px]">
                    <Image src="/assets/common/Logo green land 1.svg" alt="Logo" fill className="object-contain" />
                  </div>
                  <ul className="flex flex-col gap-4">
                    {["Search Farmland", "Pool Buying", "Subscriptions"].map((link) => (
                      <li key={link} className="text-white text-[16px] font-semibold font-jakarta whitespace-nowrap leading-[100%] cursor-pointer hover:opacity-70 transition-opacity">
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
             </div>

             {/* Middle Column */}
             <div className="flex flex-col gap-[40px] w-[195px] h-[80px] mb-auto pt-[71px]">
                <ul className="flex flex-col gap-4">
                  {["Verification of Farmland", "Maintanence of Farmland", "Sell Your Land"].map((link) => (
                    <li key={link} className="text-white text-[16px] font-semibold font-jakarta whitespace-nowrap leading-[100%] cursor-pointer hover:opacity-70 transition-opacity">
                      {link}
                    </li>
                  ))}
                </ul>
             </div>

             {/* Right Column (Newsletter) */}
             <div className="flex flex-col gap-[32px] w-[284px] h-[118px]">
                <p className="text-white text-[18px] leading-[140%] font-jakarta tracking-[-0.02em]">
                  Get farmland insights and opportunities straight to your inbox
                </p>
                <div className="relative w-[262px] border-b border-[#DADADA] pb-2 flex items-center justify-between">
                  <input 
                    type="text" 
                    placeholder="Email address" 
                    className="bg-transparent text-white placeholder:text-white/60 focus:outline-none font-jakarta text-[16px] leading-[100%] w-full"
                  />
                  <div className="relative w-6 h-6">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar: Rights & Legal */}
        <div className="w-[1312px] h-[80px] px-[48px] py-[32px] border-t border-white/10 flex flex-row justify-between items-center z-10">
          <p className="text-white text-[12px] uppercase tracking-[1.2px] font-jakarta opacity-80 font-normal leading-[16px]">
            © 2024 GREEN LAND CAPITAL. ALL RIGHTS RESERVED.
          </p>
          <ul className="flex flex-row gap-[32px]">
            {["Privacy Policy", "Terms of Service", "Investor Relations", "Contact"].map((link) => (
              <li key={link} className="text-white text-[12px] uppercase tracking-[1.2px] font-jakarta cursor-pointer hover:opacity-100 opacity-80 transition-opacity font-normal leading-[16px]">
                {link}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
