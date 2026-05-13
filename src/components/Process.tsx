"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const DynamicCounter = ({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const display = value.toString().padStart(2, "0");
  return <span>{prefix}{display}{suffix}</span>;
};

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const pathHeight = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const steps = [
    {
      number: 1,
      title: "Browse & Unlock",
      description:
        "Gain exclusive access to private agrarian estates curated for long-term soil vitality and capital growth.",
      image: "/assets/process/browse5.1.svg",
      reverse: false,
    },
    {
      number: 2,
      title: "Secure in Escrow",
      description:
        "Funds are held in institutional escrow until legal verification and land registry transfer are complete.",
      image: "/assets/process/secure5.2.svg",
      reverse: true,
    },
    {
      number: 3,
      title: "Track & Earn",
      description:
        "Monitor harvest data, soil health, and dividend payouts in real-time through your Arable Dashboard.",
      image: "/assets/process/track5.3.svg",
      reverse: false,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-transparent py-16 md:py-32 flex flex-col items-center overflow-hidden"
    >
      {/* Section Title */}
      <div className="mb-16 md:mb-[128px] text-center z-10 px-6">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F2F4C] tracking-[-1px] md:tracking-[-1.2px] font-jakarta flex justify-center gap-x-2 md:gap-x-3 flex-wrap">
          {"Simple steps. Smart technology. Real yields."
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
        </h2>
      </div>

      <div className="relative w-full max-w-[1280px] px-4 sm:px-6 isolate">

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:flex flex-col items-center gap-[188px]">

          {/* Desktop vertical timeline */}
          <div className="absolute top-[32px] bottom-0 w-[4px] bg-[#EDEEEF] rounded-full left-1/2 -translate-x-1/2 z-0 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              className="absolute top-0 left-0 right-0 rounded-full origin-top bg-[#0F2F4C]"
              style={{
                scaleY: pathHeight,
                height: "100%",
              }}
            />
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative w-full grid grid-cols-[1fr_64px_1fr] items-center z-10 gap-[55px]"
            >
              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: step.reverse ? 50 : -50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-4 ${step.reverse ? "order-3 text-left" : "order-1 text-right"
                  }`}
              >
                <h3 className="text-[24px] font-bold text-[#0F2F4C] leading-[32px] font-jakarta">
                  {step.title}
                </h3>
                <p
                  className={`text-[16px] text-[#45474C] leading-[24px] font-jakarta max-w-[400px] ${step.reverse ? "ml-0 mr-auto" : "ml-auto mr-0"
                    }`}
                >
                  {step.description}
                </p>
              </motion.div>

              {/* Circle */}
              <div className="relative w-[64px] h-[64px] shrink-0 order-2 flex justify-center mx-auto">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="w-[64px] h-[64px] bg-white border-[4px] border-[#0F2F4C] rounded-full flex items-center justify-center z-10 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
                >
                  <span className="text-[20px] font-bold text-[#0F2F4C] font-jakarta">
                    <DynamicCounter value={step.number} />
                  </span>
                </motion.div>
              </div>

              {/* Image card */}
              <motion.div
                initial={{ opacity: 0, x: step.reverse ? -50 : 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className={`flex ${step.reverse ? "order-1 justify-end" : "order-3 justify-start"}`}
              >
                <div className="group relative w-[350.53px] h-[224px] rounded-[48px] bg-white p-8 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[12px] transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  <div className="relative w-full h-[160px] rounded-[32px] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="lg:hidden relative flex flex-col gap-0">

          {/* Mobile left-rail timeline */}
          <div
            className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px] bg-[#EDEEEF] rounded-full z-0"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 rounded-full origin-top bg-[#0F2F4C]"
              style={{
                scaleY: pathHeight,
                height: "100%",
              }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className={`relative flex gap-5 z-10 ${index < steps.length - 1 ? "pb-12" : ""
                }`}
            >
              {/* Left: circle on the rail */}
              <div className="flex flex-col items-center shrink-0">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="w-[48px] h-[48px] bg-white border-[3px] border-[#0F2F4C] rounded-full flex items-center justify-center z-10 shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.12)]"
                >
                  <span className="text-[16px] font-bold text-[#0F2F4C] font-jakarta">
                    <DynamicCounter value={step.number} />
                  </span>
                </motion.div>
              </div>

              {/* Right: text + image stacked */}
              <div className="flex flex-col gap-4 flex-1 pt-1 min-w-0">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-bold text-[#0F2F4C] leading-[28px] font-jakarta">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#45474C] leading-[22px] font-jakarta">
                    {step.description}
                  </p>
                </div>

                {/* Image card — full width on mobile */}
                <div className="group relative w-full rounded-[24px] bg-white p-4 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-xl overflow-hidden">
                  <div className="relative w-full h-[160px] sm:h-[200px] rounded-[16px] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}