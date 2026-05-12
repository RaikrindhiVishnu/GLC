import Image from "next/image";

export default function CTA() {
  return (
    <section id="cta-section" className="relative w-full h-[608px] overflow-hidden bg-white">
      
      {/* Background Layer 1: Clouds (Sky) */}
      <div className="absolute inset-0 z-0 h-full">
        <Image 
          src="/assets/cta/clouds.svg" 
          alt="Clouds background" 
          fill 
          className="object-cover object-top"
        />
      </div>

      {/* Background Layer 2: Garden (Hills/Landscape) */}
      <div className="absolute inset-0 z-20 flex items-end">
        <div className="relative w-full h-[280px]"> {/* Reduced height to match Figma */}
           <Image 
             src="/assets/cta/garden.svg" 
             alt="Garden background" 
             fill 
             className="object-cover object-bottom"
           />
        </div>
      </div>

      {/* Top Gradient Effect: Seamless blend */}
      <div 
        className="absolute top-0 left-0 w-full h-[180px] z-30 pointer-events-none"
        style={{ 
          background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)" 
        }} 
      />

      {/* Content */}
      <div className="relative z-40 flex h-full flex-col items-center pt-[120px] lg:pt-[160px] px-6"> {/* Moved text up with padding-top */}
        <h2 className="max-w-[738px] text-[32px] lg:text-[48px] font-bold leading-tight lg:leading-[55px] tracking-[-1.2px] text-[#0F2F4C] text-center font-jakarta">
          Simple steps. Smart technology.<br className="hidden lg:block"/> Real yields.
        </h2>
      </div>
    </section>
  );
}
