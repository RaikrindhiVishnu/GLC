"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function TopSellingHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="flex flex-col items-center justify-start h-[100vh] min-h-[500px]"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
          zIndex: 1,
        }}
      />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/topselling/topselling-bg.jpg"
          alt="Top Selling Locations Background"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div
        style={{ position: "absolute", inset: 0, zIndex: 5, boxSizing: "border-box" }}
        className="flex flex-col items-center justify-center px-4 md:px-8 pointer-events-none"
      >
        <div className="w-full max-w-[1200px] flex flex-col items-center pointer-events-auto text-center mt-12 md:mt-0">
          <h1 className="text-shadow-premium font-jakarta font-extrabold tracking-[-1.8px] text-white text-[50px] md:text-[100px] leading-[1.1] mb-6">
            {"Top Selling Locations".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="inline-block mr-3 md:mr-5"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-jakarta font-medium text-[16px] md:text-[24px] leading-[1.35] text-white max-w-[954px]"
          >
            Find the perfect farmland investment in our top selling locations, chosen for their <br className="hidden md:block" />growth potential, accessibility, and long-term value.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
