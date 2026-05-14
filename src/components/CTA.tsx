"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta-section"
      className="relative w-full h-[420px] md:h-[520px] lg:h-[608px] overflow-hidden bg-[#f8f9f8]"
    >

      {/* ================= CLOUDS ================= */}
      <div className="absolute inset-0 z-0 h-full">

        <Image
          src="/assets/cta/clouds.svg"
          alt="Clouds background"
          fill
          priority
          className="object-cover object-top"
        />

      </div>

      {/* ================= GARDEN ================= */}
      <div className="absolute inset-0 z-20 flex items-end">

        <div className="relative w-full h-[160px] md:h-[220px] lg:h-[280px]">

          <Image
            src="/assets/cta/garden.svg"
            alt="Garden background"
            fill
            className="object-cover object-bottom"
          />

        </div>

      </div>

      {/* ================= TOP GRADIENT ================= */}
      <div
        className="absolute top-0 left-0 w-full h-[140px] md:h-[190px] lg:h-[250px] z-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #f8f9f8 0%, rgba(248, 249, 248, 0.8) 20%, rgba(248, 249, 248, 0) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-40 flex h-full flex-col items-center justify-start pt-[90px] md:pt-[120px] lg:pt-[160px] px-5 md:px-6">

        <h2 className="max-w-[320px] md:max-w-[680px] lg:max-w-[738px] text-[34px] md:text-[52px] lg:text-[48px] leading-[1.08] lg:leading-[55px] tracking-[-0.04em] lg:tracking-[-1.2px] font-bold text-[#0F2F4C] text-center font-jakarta flex flex-wrap justify-center gap-x-3">

          {"Simple steps. Smart technology. Real yields."
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}

        </h2>

      </div>

    </section>
  );
}