"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const DynamicCounter = ({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useSpring(0, { stiffness: 100, damping: 30 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return count.on("change", (latest) => {
      const formatted = Math.floor(latest).toString().padStart(2, '0');
      setDisplayValue(formatted);
    });
  }, [count]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const pathHeight = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const steps = [
    {
      number: 1,
      title: "Browse & Unlock",
      description: "Gain exclusive access to private agrarian estates curated for long-term soil vitality and capital growth.",
      image: "/assets/process/browse5.1.svg",
      reverse: false,
    },
    {
      number: 2,
      title: "Secure in Escrow",
      description: "Funds are held in institutional escrow until legal verification and land registry transfer are complete.",
      image: "/assets/process/secure5.2.svg",
      reverse: true,
    },
    {
      number: 3,
      title: "Track & Earn",
      description: "Monitor harvest data, soil health, and dividend payouts in real-time through your Arable Dashboard.",
      image: "/assets/process/track5.3.svg",
      reverse: false,
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-transparent py-32 flex flex-col items-center overflow-hidden">
      
      {/* Section Title */}
      <div className="mb-[128px] text-center z-10">
        <h2 className="text-[36px] font-bold text-[#0F2F4C] tracking-[-1.2px] font-jakarta flex justify-center gap-x-3 flex-wrap">
          {"Simple steps. Smart technology. Real yields.".split(" ").map((word, i) => (
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

      <div className="relative w-full max-w-[1280px] flex flex-col items-center gap-[188px] px-6 isolate">
        
        {/* The Vertical Timeline Path with Faded Ends */}
        <div className="absolute top-[32px] bottom-0 w-[4px] bg-[#EDEEEF] rounded-full left-1/2 -translate-x-1/2 z-0 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <motion.div 
            className="absolute top-0 left-0 right-0 rounded-full origin-top bg-[#0F2F4C]"
            style={{ 
              scaleY: pathHeight,
              height: '100%'
            }}
          />
        </div>

        {steps.map((step, index) => (
          <div 
            key={index}
            className={`relative w-full grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] items-center z-10 gap-8 lg:gap-[55px]`}
          >
            {/* Content Side (Text) */}
            <motion.div 
              initial={{ opacity: 0, x: step.reverse ? 50 : -50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-4 ${step.reverse ? "lg:order-3 text-left" : "lg:order-1 text-right"}`}
            >
              <h3 className="text-[24px] font-bold text-[#0F2F4C] leading-[32px] font-jakarta">
                {step.title}
              </h3>
              <p className={`text-[16px] text-[#45474C] leading-[24px] font-jakarta max-w-[400px] ${step.reverse ? "ml-0 mr-auto" : "ml-auto mr-0"}`}>
                {step.description}
              </p>
            </motion.div>

            {/* Middle Circle Side */}
            <div className="relative w-[64px] h-[64px] shrink-0 lg:order-2 flex justify-center mx-auto">
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

            {/* Image Card Side */}
            <motion.div 
              initial={{ opacity: 0, x: step.reverse ? -50 : 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={`flex ${step.reverse ? "lg:order-1 justify-end" : "lg:order-3 justify-start"}`}
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
    </section>
  );
}
