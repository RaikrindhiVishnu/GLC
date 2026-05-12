import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-transparent py-16 lg:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* Left Column: Large Asset Management Card */}
          <div className="flex-1 flex flex-col w-full lg:max-w-[604px] overflow-hidden rounded-[30px] shadow-sm group">
            <div className="relative h-[300px] lg:h-[484px] w-full shrink-0 overflow-hidden">
              <Image
                src="/assets/how-it-works/big6.1.svg"
                alt="Palm Trees Field"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-[#2780C4] p-8 lg:p-10 flex-1 flex flex-col gap-6">
              <h3 className="text-[26px] lg:text-[30.15px] font-semibold text-white leading-tight">
                End-to-End Asset Management
              </h3>
              <p className="text-white/90 text-[14px] leading-[1.6]">
                Transform your land into a high-yield, sustainably managed organic estate without lifting a finger. Our expert agronomists handle everything from soil conversion to premium market liquidation.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto pt-4">
                {["Precision Agronomy", "Managed Yields", "Eco-Luxury"].map((tag, i) => (
                  <span key={i} className="px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-white/10 text-white text-[12px] lg:text-[12.56px] font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Title and 3 Vertical Cards */}
          <div className="flex-[1.2] flex flex-col w-full">
            {/* Header Text */}
            <div className="flex flex-col items-start gap-4 mb-10">
              <div className="px-6 py-2 rounded-full border border-[#0F2F4C] text-[#0F2F4C] text-[14px]">
                For Customers
              </div>
              <h2 className="text-[32px] lg:text-[41.45px] font-semibold text-[#0F2F4C] leading-tight mt-4">
                How it works?
              </h2>
              <p className="max-w-[440px] text-[14px] lg:text-[12.56px] leading-[24px] text-[#0F2F4C] opacity-80">
                We provide comprehensive innovative solutions tailored to address the unique challenges faced by modern farmers today.
              </p>
            </div>

            {/* Spacer to push cards to the bottom - hidden on mobile */}
            <div className="hidden lg:flex flex-1" />

            {/* 3 Small Vertical Cards Grid - Responsive Wrap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-end">

              {/* Card 1: Sign Up */}
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full py-3 rounded-full border border-[#0F2F4C] text-[#0F2F4C] text-center text-[16px] font-jakarta">
                  Sign Up/ Log In
                </div>
                <div className="relative h-[250px] w-full overflow-hidden rounded-[18.8px] shadow-sm group">
                  <Image src="/assets/how-it-works/signin6.2.svg" alt="Landscape" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>

              {/* Card 2: Invest */}
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full py-3 rounded-full border border-[#0F2F4C] text-[#0F2F4C] text-center text-[16px] font-jakarta">
                  Invest in Farmlands
                </div>
                <div className="relative h-[250px] w-full overflow-hidden rounded-[18.8px] shadow-sm group">
                  <Image src="/assets/how-it-works/farmlands6.3.svg" alt="Green Fields" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>

              {/* Card 3: Track */}
              <div className="flex flex-col gap-4 w-full">
                <div className="relative h-[250px] w-full overflow-hidden rounded-[18.8px] shadow-sm group">
                  <Image src="/assets/how-it-works/framland growth6.4.svg" alt="Arial View" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="w-full py-3 rounded-full border border-[#0F2F4C] text-[#0F2F4C] text-center text-[16px] font-jakarta">
                  Track Farmland's Growth
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

