import Image from "next/image";

export default function CompareHero() {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/assets/search/farmlanddetails/compare-premium/hero.svg') center/cover",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[896px] mx-auto px-8 flex flex-col items-center gap-[37px]">
        <h1 
          className="text-center text-white whitespace-nowrap"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "100px",
            lineHeight: "100px",
            letterSpacing: "-1.8px",
          }}
        >
          Compare Farmlands
        </h1>
        <p 
          className="text-center text-white w-[1100px] max-w-[95vw]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "32px",
          }}
        >
          Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, <br />
          and intelligence audit pipeline
        </p>
      </div>

    </div>
  );
}
