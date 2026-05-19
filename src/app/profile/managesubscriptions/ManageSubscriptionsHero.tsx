"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ManageSubscriptionsHero() {
  return (
    <section
      id="manage-subscriptions-hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        maxHeight: "100vh",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="flex flex-col items-center justify-start"
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))", zIndex: 1 }} />
      <img
        src="/assets/account/managesubscriptions/hero.svg"
        alt="Manage Subscriptions"
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0, zIndex: 0 }}
      />

      <Navbar variant="app" active="profile" />

      <div
        style={{ position: "absolute", inset: 0, zIndex: 5, boxSizing: "border-box" }}
        className="flex flex-col items-center justify-center px-4 pointer-events-none"
      >
        <div className="w-full max-w-254.5 flex flex-col items-center pointer-events-auto">

          <h1
            className="text-shadow-premium flex flex-col items-center justify-center font-jakarta font-extrabold tracking-[-4px] text-white"
          >
            <span className="flex text-[48px] leading-none md:text-[76px] flex-wrap gap-x-2 md:gap-x-4 justify-center">
              {"Manage".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="flex text-[48px] leading-none md:text-[76px] flex-wrap gap-x-2 md:gap-x-4 justify-center mt-1">
              {"Subscription".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 font-jakarta font-medium text-[14px] md:text-[16px] leading-relaxed text-white text-center max-w-175"
          >
            Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline
          </motion.p>

        </div>
      </div>
    </section>
  );
}
