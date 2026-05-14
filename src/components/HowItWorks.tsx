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
              <div className="flex flex-wrap gap-2 md:gap-3 mt-auto pt-3 md:pt-4">                {["Precision Agronomy", "Managed Yields", "Eco-Luxury"].map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 md:px-5 min-w-fit h-[38px] md:h-[42px] rounded-full text-white text-[11px] md:text-[12px] font-semibold text-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center whitespace-nowrap transition-all duration-300 hover:bg-white/15"                  >
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
            {/* ================= DESKTOP ================= */}
            <div className="hidden lg:grid grid-cols-3 gap-6 items-end">

              {/* Card 1 */}
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

                    <Image
                      src="/assets/how-it-works/signin6.2.svg"
                      alt="Landscape"
                      fill
                      className="object-cover"
                    />

                  </motion.div>

                </div>

              </div>

              {/* Card 2 */}
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

                    <Image
                      src="/assets/how-it-works/farmlands6.3.svg"
                      alt="Green Fields"
                      fill
                      className="object-cover"
                    />

                  </motion.div>

                </div>

              </div>

              {/* Card 3 */}
              <div className="flex flex-col gap-4 w-full">

                <div className="relative h-[250px] w-full overflow-hidden rounded-[18.8px] shadow-sm group">

                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="w-full h-full"
                  >

                    <Image
                      src="/assets/how-it-works/framland growth6.4.svg"
                      alt="Arial View"
                      fill
                      className="object-cover"
                    />

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

            {/* ================= MOBILE / TABLET ================= */}
            <div className="flex lg:hidden flex-col gap-12 md:gap-14 mt-2">

              {[
                {
                  number: "01",
                  title: "Sign Up/Log In",
                  description:
                    "Create your premium investor profile to access exclusive land deals.",
                  image: "/assets/how-it-works/signin6.2.svg",
                },
                {
                  number: "02",
                  title: "Invest in Farmlands",
                  description:
                    "Select from our curated portfolio of high-growth organic estates.",
                  image: "/assets/how-it-works/farmlands6.3.svg",
                },
                {
                  number: "03",
                  title: "Track Farmland's Growth",
                  description:
                    "Monitor real-time yield data and asset appreciation through your dashboard.",
                  image: "/assets/how-it-works/framland growth6.4.svg",
                },
              ].map((step, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4"
                >

                  {/* Number + Text */}
                  <div className="flex items-start gap-4">

                    {/* Number */}
                    <div className="w-[28px] h-[28px] rounded-full border border-[#D8D8D8] bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm">

                      <span className="text-[10px] font-bold text-[#0F2F4C] font-jakarta">
                        {step.number}
                      </span>

                    </div>

                    {/* Text */}
                    <div className="flex-1">

                      <h3 className="text-[28px] md:text-[32px] font-semibold text-[#0F2F4C] leading-[1.1] tracking-[-0.03em] font-jakarta">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-[15px] md:text-[17px] leading-[1.55] text-[#5C5C5C] font-jakarta max-w-[520px]">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  {/* Image */}
                  <div className="pl-[42px]">

                    <div className="relative w-full h-[180px] md:h-[260px] overflow-hidden rounded-[22px] md:rounded-[28px] shadow-sm">

                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
