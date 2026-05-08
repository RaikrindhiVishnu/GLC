import Image from "next/image";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Browse & Unlock",
      description: "Gain exclusive access to private agrarian estates curated for long-term soil vitality and capital growth.",
      image: "/assets/process/browse5.1.svg",
      reverse: false,
    },
    {
      number: "02",
      title: "Secure in Escrow",
      description: "Funds are held in institutional escrow until legal verification and land registry transfer are complete.",
      image: "/assets/process/secure5.2.svg",
      reverse: true,
    },
    {
      number: "03",
      title: "Track & Earn",
      description: "Monitor harvest data, soil health, and dividend payouts in real-time through your Arable Dashboard.",
      image: "/assets/process/track5.3.svg",
      reverse: false,
    },
  ];

  return (
    <section className="relative w-full bg-white py-32 flex flex-col items-center overflow-hidden">
      
      {/* Section Title */}
      <div className="mb-[128px] text-center z-10">
        <h2 className="text-[36px] font-bold text-[#0F2F4C] tracking-[-1.2px] font-jakarta">
          Simple steps. Smart technology. Real yields.
        </h2>
      </div>

      <div className="relative w-full max-w-[1280px] flex flex-col items-center gap-[188px] px-6 isolate">
        
        {/* The Vertical Timeline Path - Starts from the first circle's position */}
        <div className="absolute top-[32px] bottom-0 w-[4px] bg-[#EDEEEF] rounded-full left-1/2 -translate-x-1/2 z-0">
          <div 
            className="absolute inset-0 rounded-full"
            style={{ 
              background: "linear-gradient(180deg, rgba(9, 20, 38, 0) 0%, #091426 50%, rgba(9, 20, 38, 0) 100%)" 
            }}
          />
        </div>

        {steps.map((step, index) => (
          <div 
            key={index}
            className={`relative w-full grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] items-center z-10 gap-8 lg:gap-[55px]`}
          >
            {/* Content Side (Text) */}
            <div className={`flex flex-col gap-4 ${step.reverse ? "lg:order-3 text-left" : "lg:order-1 text-right"}`}>
              <h3 className="text-[24px] font-bold text-[#0F2F4C] leading-[32px] font-jakarta">
                {step.title}
              </h3>
              <p className={`text-[16px] text-[#45474C] leading-[24px] font-jakarta max-w-[400px] ${step.reverse ? "ml-0 mr-auto" : "ml-auto mr-0"}`}>
                {step.description}
              </p>
            </div>

            {/* Middle Circle Side */}
            <div className="relative w-[64px] h-[64px] shrink-0 lg:order-2 flex justify-center mx-auto">
               <div className="w-[64px] h-[64px] bg-white border-[4px] border-[#0F2F4C] rounded-full flex items-center justify-center z-10 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
                 <span className="text-[20px] font-bold text-[#0F2F4C] font-jakarta">{step.number}</span>
               </div>
            </div>

            {/* Image Card Side */}
            <div className={`flex ${step.reverse ? "lg:order-1 justify-end" : "lg:order-3 justify-start"}`}>
              <div className="group relative w-[350.53px] h-[224px] rounded-[48px] bg-white p-8 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[12px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-gray-50">
                <div className="relative w-full h-[160px] rounded-[32px] overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
