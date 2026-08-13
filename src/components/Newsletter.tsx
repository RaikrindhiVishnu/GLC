"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="relative w-full bg-transparent py-8 md:py-12 lg:py-16 overflow-hidden z-50 pointer-events-auto">

      <div className="w-full px-4 md:px-[60px]">

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
          className="flex flex-col items-center justify-center rounded-[32px] md:rounded-[40px] lg:rounded-[48px] bg-[#091426] px-5 md:px-10 lg:px-24 py-6 md:py-8 lg:py-8 border border-[rgba(105,182,254,0.1)] text-center gap-4 shadow-2xl"
          style={{
            minHeight: "240px",
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
            className="mt-1 md:mt-2 text-[14px] md:text-[17px] lg:text-[16px] leading-[1.7] text-white/70 font-jakarta px-2 md:px-4 w-full whitespace-nowrap"
          >
            Join 5,000+ investors receiving curated farmland opportunities weekly.
          </motion.p>

          {/* Action Container */}
          <motion.div
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
            className="mt-6 flex flex-col md:flex-row justify-center items-center pt-6 gap-4 w-full"
          >
            {subscribed ? (
              <div className="flex items-center justify-center py-[16px] px-[40px] h-[56px] bg-[#00A15D] rounded-full text-white font-jakarta font-bold text-[16px]">
                Subscribed Successfully!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full md:w-[320px] h-[56px] px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-[#2780C4] transition-colors font-jakarta"
                />
                <button
                  onClick={handleSubscribe}
                  className="flex flex-col justify-center items-center py-[16px] px-[40px] h-[56px] bg-[#2780C4] rounded-full text-white font-jakarta font-bold text-[16px] leading-[24px] cursor-pointer hover:bg-[#1a66a3] transition-colors"
                >
                  Subscribe
                </button>
              </>
            )}
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}