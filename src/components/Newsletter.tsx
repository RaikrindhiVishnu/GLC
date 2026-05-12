export default function Newsletter() {
  return (
    <section className="relative w-full bg-transparent py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1216px] px-6">
        <div 
          className="flex flex-col items-center justify-center rounded-[48px] bg-[#091426] p-16 lg:p-24 border border-[rgba(105,182,254,0.2)] text-center gap-4"
          style={{ minHeight: '310px' }}
        >
          {/* Heading */}
          <h2 className="text-[36px] font-extrabold leading-[40px] text-white font-jakarta">
            Stay Ahead of the Market
          </h2>
          
          {/* Subtitle */}
          <p className="mt-4 text-[16px] lg:text-[18px] text-white/80 font-jakarta px-4">
            Join 5,000+ investors receiving curated farmland opportunities weekly.
          </p>

          {/* Form */}
          <form className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-[512px]">
            <div className="relative w-full md:w-[336px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-[56px] rounded-full bg-white/10 px-8 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2780C4] transition-all font-jakarta"
              />
            </div>
            <button 
              type="submit"
              className="h-[56px] w-full md:w-[159px] rounded-full bg-[#2780C4] px-10 text-[16px] font-bold text-white transition-all hover:bg-[#1a66a3] hover:scale-105 active:scale-95 font-jakarta whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
