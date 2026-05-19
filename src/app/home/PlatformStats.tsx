"use client";

import React from "react";
import { motion } from "framer-motion";
import DynamicCounter from "@/components/shared/DynamicCounter";

export default function PlatformStats() {
  const stats = [
    { value: 45, prefix: "₹", suffix: "Cr+", label: "MANAGED ASSETS" },
    { value: 100, prefix: "", suffix: "%", label: "VERIFIED CLEAR TITLES" },
    { value: 1200, prefix: "", suffix: "+", label: "ACTIVE INVESTORS" },
  ];

  return (
    <section id="platform-stats" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:gap-[80px]">
          
          {/* Heading */}
          <h2 className="max-w-[700px] m-0 font-jakarta font-bold text-[28px] md:text-[36px] leading-[1.3] text-center text-[#0F2F4C] tracking-[-1px] flex flex-wrap justify-center gap-x-[8px]">
            {"Empowering investors through data-driven agricultural assets.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Stats Row */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 flex-1"
              >
                <div className="font-jakarta font-extrabold text-[40px] lg:text-[48px] leading-[1.2] text-[#0F2F4C] text-center">
                  <DynamicCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="font-jakarta font-medium text-[12px] lg:text-[14px] leading-[20px] tracking-[1.4px] text-[#45474C] text-center uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
