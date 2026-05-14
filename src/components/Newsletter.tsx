"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative w-full bg-transparent py-16 md:py-24 lg:py-32 overflow-hidden">

      <div className="container mx-auto max-w-[1216px] px-4 md:px-6">

        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(15px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center rounded-[32px] md:rounded-[40px] lg:rounded-[48px] bg-[#091426] px-5 md:px-10 lg:px-16 py-12 md:py-16 lg:p-24 border border-[rgba(105,182,254,0.1)] text-center gap-4 shadow-2xl"
          style={{
            minHeight: "310px",
          }}
        >

          {/* Heading */}
          <h2 className="max-w-[320px] md:max-w-[700px] text-[34px] md:text-[48px] lg:text-[36px] leading-[1.08] lg:leading-tight tracking-[-0.04em] font-bold text-white font-jakarta flex flex-wrap justify-center gap-x-3">

            {"Stay Ahead of the Market"
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
                    delay: 0.2 + i * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}

          </h2>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            viewport={{ once: true }}
            className="mt-1 md:mt-2 text-[14px] md:text-[17px] lg:text-[16px] leading-[1.7] text-white/70 font-jakarta px-2 md:px-4 max-w-[520px]"
          >
            Join 5,000+ investors receiving curated
            farmland opportunities weekly.
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            viewport={{ once: true }}
            className="mt-7 md:mt-8 flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full max-w-[560px] mx-auto"
          >

            {/* Input */}
            <div className="glass-search flex items-center h-[56px] md:h-[64px] w-full rounded-full px-5 md:px-6 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-[14px] md:text-[16px] font-medium text-white placeholder:text-white/40 focus:outline-none font-jakarta"
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="h-[56px] md:h-[64px] w-full md:w-[159px] rounded-full bg-[#2780C4] text-[15px] md:text-[16px] font-bold text-white transition-all hover:bg-[#1a66a3] active:scale-95 font-jakarta whitespace-nowrap cursor-pointer shadow-lg"
            >
              Subscribe
            </button>

          </motion.form>

        </motion.div>

      </div>

    </section>
  );
}