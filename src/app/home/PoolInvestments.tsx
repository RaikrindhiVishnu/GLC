"use client";

import React from "react";
import { motion } from "framer-motion";
import DynamicCounter from "@/components/shared/DynamicCounter";

export default function PoolInvestments() {
  const dashArray = 628.318;
  const targetDashOffset = dashArray * 0.25;

  return (
    <section id="pool-investments" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[32px] w-full">
          
          {/* Left Panel: Pool Investments */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 lg:flex-[0_0_733px] min-h-[500px] lg:h-[600px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[32px] lg:rounded-[48px] p-6 sm:p-8 lg:p-[48px] flex flex-col justify-between border border-[#EDEEEF] box-border"
          >
            <div className="flex flex-col gap-2">
              <h2 className="m-0 font-jakarta font-extrabold text-[28px] md:text-[36px] leading-[40px] text-[#131600] flex flex-wrap gap-x-[6px]">
                {"Pool Investments".split(" ").map((word, i) => (
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
              <p className="m-0 font-jakarta font-normal text-[14px] md:text-[16px] leading-[24px] text-[#45474C]">
                Collective ownership of high-yield assets.
              </p>
            </div>

            {/* Donut Chart & Legend Area */}
            <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16 lg:gap-[128px] mt-10 lg:mt-0">
              {/* Donut Chart */}
              <div className="relative w-[200px] h-[200px] sm:w-[256px] sm:h-[256px] shrink-0">
                <svg width="100%" height="100%" viewBox="0 0 256 256" className="-rotate-90">
                  {/* Background Circle */}
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    fill="transparent"
                    stroke="#E7E8E9"
                    strokeWidth="25"
                  />
                  {/* Progress Circle (3/4 = 75%) */}
                  <motion.circle
                    cx="128"
                    cy="128"
                    r="100"
                    fill="transparent"
                    stroke="#2780C4"
                    strokeWidth="25"
                    strokeDasharray={dashArray}
                    initial={{ strokeDashoffset: dashArray }}
                    whileInView={{ strokeDashoffset: targetDashOffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="font-jakarta font-bold text-[28px] sm:text-[36px] text-[#091426]">3/4</span>
                  <span className="font-jakarta font-medium text-[12px] sm:text-[14px] text-[#45474C]">Seats Funded</span>
                </div>
              </div>

              {/* Legend & CTA */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#2780C4] rounded-full shrink-0" />
                  <span className="font-jakarta font-medium text-[14px] sm:text-[16px] text-[#191C1D] whitespace-nowrap">Secured Funding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#E7E8E9] rounded-full shrink-0" />
                  <span className="font-jakarta font-medium text-[14px] sm:text-[16px] text-[#191C1D] whitespace-nowrap">Available Slot</span>
                </div>
                <button className="mt-4 px-8 py-3 bg-[#091426] rounded-full border-none font-jakarta font-bold text-[14px] sm:text-[16px] text-white cursor-pointer transition-opacity duration-300 hover:opacity-90 w-fit">
                  Join Pool
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Panels Stack */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-[32px] lg:h-[600px] box-border">
            
            {/* Active Deals Card */}
            <motion.div
              initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex-1 min-h-[220px] bg-gradient-to-br from-[#121415] to-[#1C1F21] rounded-[32px] lg:rounded-[48px] p-6 lg:p-[32px] relative overflow-hidden flex flex-col justify-between box-border"
            >
              {/* Blue Corner Accent */}
              <div className="absolute top-0 right-0 w-[96px] h-[96px] lg:w-[128px] lg:h-[128px] bg-[#2780C4] rounded-bl-full" />
              
              <div className="relative z-10">
                <h3 className="m-0 font-jakarta font-bold text-[18px] lg:text-[20px] text-white">Active Deals</h3>
                <p className="m-0 mt-1 font-jakarta font-normal text-[13px] lg:text-[14px] text-[#8590A6]">Real-time status of your bids.</p>
              </div>

              <div className="flex justify-between items-end relative z-10">
                <div className="font-jakarta font-extrabold text-[40px] lg:text-[48px] text-white leading-none">
                  <DynamicCounter value={1} />
                </div>
                <div className="text-right">
                  <div className="font-jakarta font-bold text-[10px] lg:text-[12px] text-[#8590A6] tracking-[1.2px] uppercase">Token Blocked</div>
                  <div className="font-jakarta font-medium text-[14px] lg:text-[16px] text-white mt-1">ID: GLC-482</div>
                </div>
              </div>
            </motion.div>

            {/* My Assets Card */}
            <motion.div
              initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 min-h-[220px] bg-white border border-[#C5C6CD]/10 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[32px] lg:rounded-[48px] p-6 lg:p-[32px] flex flex-col justify-between box-border"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="m-0 font-jakarta font-bold text-[18px] lg:text-[20px] text-[#131600]">My Assets</h3>
                  <p className="m-0 mt-1 font-jakarta font-normal text-[13px] lg:text-[14px] text-[#45474C]">Portfolio Valuation</p>
                </div>
                {/* Shield Icon Placeholder */}
                <div className="w-[24px] h-[24px] bg-[#2780C4] rounded-full flex justify-center items-center text-white text-[12px] shrink-0">✓</div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex items-baseline gap-2">
                  <span className="font-jakarta font-extrabold text-[32px] lg:text-[36px] text-[#091426]">
                    <DynamicCounter value={1.42} prefix="₹" decimals={2} />
                  </span>
                  <span className="font-jakarta font-bold text-[16px] lg:text-[20px] text-[#091426]">Cr</span>
                </div>
                <div className="px-3 py-1 bg-[#131600] rounded-full font-jakarta font-bold text-[10px] lg:text-[12px] text-[#BCD225]">
                  +12.4%
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
