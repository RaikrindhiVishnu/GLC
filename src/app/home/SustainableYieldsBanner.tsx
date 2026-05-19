"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SustainableYieldsBanner() {
  const router = useRouter();

  return (
    <section id="sustainable-yields" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col justify-end items-center p-8 lg:p-[64px]"
        >
          {/* Background Image */}
          <Image
            src="/assets/home/SustainableYieldsBanner/yieldsbanner.svg"
            alt="Sustainable Practices"
            fill
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131600] via-[#131600]/40 to-transparent z-10" />

          {/* Content Container */}
          <div className="relative z-20 flex flex-col items-center w-full">
            <h2 className="max-w-[585px] m-0 mb-6 font-jakarta font-extrabold text-[28px] md:text-[36px] lg:text-[48px] leading-[1.2] text-center text-white flex flex-wrap justify-center gap-x-[8px]">
              {"Sustainable Practices for Generational Wealth".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <button
              onClick={() => router.push("/home/organicfarmingsetup")}
              className="px-8 lg:px-[40px] py-3 lg:py-[12px] h-[48px] lg:h-[54px] bg-transparent border-[3px] border-white/30 rounded-full font-jakarta font-bold text-[14px] lg:text-[16px] text-white cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white"
            >
              Organic Farming Setup
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
