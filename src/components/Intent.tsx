"use client";

import Image from "next/image";

export default function Intent() {
  return (
    <section
      id="intent-section"
      className="relative w-full min-h-[620px] md:min-h-[820px] lg:h-[920px] overflow-hidden flex flex-col items-center bg-[#CBCBCB]"    >

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/assets/intent/intentbg.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ================= MOBILE ================= */}
      <div className="relative z-10 flex md:hidden w-full min-h-[620px] flex-col items-center justify-center px-6 py-14">
        {/* Glass Card */}
        <div className="relative w-full max-w-[340px] h-[220px] rounded-[28px] border-[5px] border-white bg-white/10 backdrop-blur-sm shadow-2xl overflow-hidden">

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-40" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="relative w-[68px] h-[68px] rounded-full bg-white shadow-lg flex items-center justify-center">

              <div className="relative w-[30px] h-[30px]">
                <Image
                  src="/assets/intent/Play.svg"
                  alt="Play"
                  fill
                  className="object-contain"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="mt-7 flex flex-col items-center text-center">

          <h3 className="text-[26px] leading-[1.15] font-bold tracking-[-0.03em] text-white font-jakarta">
            Intent of Green Land Capital
          </h3>

          <p className="mt-4 max-w-[340px] text-[16px] leading-[1.65] tracking-[-0.01em] text-[#F6F6F6] font-jakarta">
            Partner with us to transform your land into a
            sustainable organic estate, yielding chemical-free
            harvests for your family.
          </p>

        </div>

      </div>

      {/* ================= TABLET ================= */}
      <div className="hidden md:flex lg:hidden relative z-10 w-full min-h-[820px] flex-col items-center justify-center px-10 py-20">

        {/* Glass Card */}
        <div className="relative w-full max-w-[620px] h-[340px] rounded-[32px] border-[6px] border-white bg-white/10 backdrop-blur-sm shadow-2xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-40" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="relative w-[78px] h-[78px] rounded-full bg-white shadow-lg flex items-center justify-center">

              <div className="relative w-[34px] h-[34px]">
                <Image
                  src="/assets/intent/Play.svg"
                  alt="Play"
                  fill
                  className="object-contain"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="mt-12 text-center">

          <h3 className="text-[34px] font-bold tracking-[-0.03em] text-white font-jakarta">
            Intent of Green Land Capital
          </h3>

          <p className="mt-5 max-w-[620px] text-[18px] leading-[1.7] tracking-[-0.01em] text-[#F6F6F6] font-jakarta">
            Partner with us to transform your land into a
            sustainable organic estate, yielding chemical-free
            harvests for your family.
          </p>

        </div>

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block relative w-[1440px] h-[920px] shrink-0 z-10">

        {/* Glass Container */}
        <div
          className="absolute bg-white/10 backdrop-blur-sm border-[6px] border-white rounded-[32px] overflow-hidden shadow-2xl"
          style={{
            width: "664px",
            height: "386px",
            left: "386px",
            top: "267px",
          }}
        >
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        </div>

        {/* Play Button */}
        <div
          className="absolute rounded-full bg-white flex items-center justify-center z-20 shadow-lg"
          style={{
            width: "72px",
            height: "72px",
            left: "682px",
            top: "424px",
          }}
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

        {/* Title */}
        <div
          className="absolute text-center"
          style={{
            width: "368px",
            left: "calc(50% - 368px/2)",
            top: "717px",
          }}
        >
          <h3 className="text-[28px] font-bold tracking-[-0.02em] text-white font-jakarta leading-none">
            Intent of Green Land Capital
          </h3>
        </div>

        {/* Paragraph */}
        <div
          className="absolute text-center"
          style={{
            width: "740px",
            left: "calc(50% - 740px/2)",
            top: "761px",
          }}
        >
          <p className="text-[18px] leading-[140%] tracking-[-0.01em] text-[#F6F6F6] font-jakarta">
            Partner with us to transform your land into a
            sustainable organic estate, yielding
            chemical-free harvests for your family.
          </p>
        </div>

      </div>

    </section>
  );
}