import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[960px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/userhome.svg"
          alt="Premium Farmland"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="z-10 flex w-full max-w-[1440px] flex-col items-center px-4 text-center">
        <h1 className="text-shadow-premium flex flex-col items-center justify-center font-extrabold tracking-[-5px] text-white">
          <span className="block text-[64px] leading-[70px] md:text-[100px] md:leading-[106px]">
            Discover
          </span>
          <span className="block text-[64px] leading-[70px] md:text-[100px] md:leading-[106px]">
            Premium Farmlands
          </span>
        </h1>

        {/* Search Bar */}
        <div className="glass-search mt-[48px] flex h-[80px] w-full max-w-[672px] items-center gap-3 rounded-[100px] px-[15px] py-[10px]">
          <div className="flex flex-1 items-center px-[18px]">
            <input
              type="text"
              placeholder="Search Investments..."
              className="w-full bg-transparent text-[18px] font-medium leading-[23px] text-white placeholder:text-white focus:outline-none"
            />
          </div>
          <button className="flex h-[50px] min-w-[50px] items-center justify-center rounded-full bg-white transition-transform hover:scale-105 active:scale-95">
            <Image 
              src="/assets/hero/search.svg" 
              alt="Filter" 
              width={18} 
              height={18}
            />
          </button>
        </div>
      </div>
    </section>
  );
}



