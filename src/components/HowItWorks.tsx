"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* Left Column: Large Asset Management Card */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col w-full lg:max-w-[604px] overflow-hidden rounded-[30px] shadow-sm group"
          >
            <div className="relative h-[300px] lg:h-[484px] w-full shrink-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <Image
                  src="/assets/how-it-works/big6.1.svg"
                  alt="Palm Trees Field"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="bg-[#2780C4] p-8 lg:p-10 flex-1 flex flex-col gap-6">
              <h3 className="text-[26px] lg:text-[30.15px] font-semibold text-white leading-tight flex flex-wrap gap-x-2">
                {"End-to-End Asset Management".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-white/90 text-[14px] leading-[1.6]"
              >
                Transform your land into a high-yield, sustainably managed organic estate without lifting a finger. Our expert agronomists handle everything from soil conversion to premium market liquidation.
              </motion.p>
              <div className="flex flex-wrap gap-3 mt-auto pt-4">
                {["Precision Agronomy", "Managed Yields", "Eco-Luxury"].map((tag, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center w-[155px] h-[42px] rounded-[61px] text-white text-[12px] font-bold text-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_6px_-1px_rgba(0,0,0,0.1)]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title and 3 Vertical Cards */}
          <div className="flex-[1.2] flex flex-col w-full">
            {/* Header Text */}
            <div className="flex flex-col items-start gap-4 mb-10">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="px-6 py-2 rounded-full border border-[#0F2F4C] text-[#0F2F4C] text-[14px]"
              >
                For Customers
              </motion.div>
              <h2 className="text-[32px] lg:text-[41.45px] font-semibold text-[#0F2F4C] leading-tight mt-4 flex flex-wrap gap-x-3">
                {"How it works?".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="max-w-[440px] text-[14px] lg:text-[12.56px] leading-[24px] text-[#0F2F4C] opacity-80"
              >
                We provide comprehensive innovative solutions tailored to address the unique challenges faced by modern farmers today.
              </motion.p>
            </div>

            {/* Spacer to push cards to the bottom - hidden on mobile */}
            <div className="hidden lg:flex flex-1" />

            {/* 3 Small Vertical Cards Grid - Responsive Wrap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-end">

              {/* Card 1: Sign Up */}
              <div className="flex flex-col gap-4 w-full">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="w-full py-3 rounded-full border border-[#0F2F4C] text-[#0F2F4C] text-center text-[16px] font-jakarta"
                >
                  Sign Up/ Log In
                </motion.div>
                <div className="relative h-[250px] w-full overflow-hidden rounded-[18.8px] shadow-sm group">
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full h-full"
                  >
                    <Image src="/assets/how-it-works/signin6.2.svg" alt="Landscape" fill className="object-cover" />
                  </motion.div>
                </div>
              </div>

              {/* Card 2: Invest */}
              <div className="flex flex-col gap-4 w-full">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full py-3 rounded-full border border-[#0F2F4C] text-[#0F2F4C] text-center text-[16px] font-jakarta"
                >
                  Invest in Farmlands
                </motion.div>
                <div className="relative h-[250px] w-full overflow-hidden rounded-[18.8px] shadow-sm group">
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="w-full h-full"
                  >
                    <Image src="/assets/how-it-works/farmlands6.3.svg" alt="Green Fields" fill className="object-cover" />
                  </motion.div>
                </div>
              </div>

              {/* Card 3: Track */}
              <div className="flex flex-col gap-4 w-full">
                <div className="relative h-[250px] w-full overflow-hidden rounded-[18.8px] shadow-sm group">
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="w-full h-full"
                  >
                    <Image src="/assets/how-it-works/framland growth6.4.svg" alt="Arial View" fill className="object-cover" />
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="w-full py-3 rounded-full border border-[#0F2F4C] text-[#0F2F4C] text-center text-[16px] font-jakarta"
                >
                  Track Farmland's Growth
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
