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
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="h-[80vh] md:h-screen min-h-125 md:min-h-160 flex flex-col items-center justify-start"
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))", zIndex: 1 }} />
      <img
        src="/assets/account/managesubscriptions/hero.svg"
        alt="Manage Subscriptions"
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0, zIndex: 0 }}
      />

      <Navbar variant="app" active="none" />

      <div
        style={{ position: "absolute", inset: 0, zIndex: 5, boxSizing: "border-box" }}
        className="flex flex-col items-center justify-center px-4 pointer-events-none mt-16"
      >
        <div className="w-full flex flex-col items-center pointer-events-auto">

          <h1
            className="text-shadow-premium font-jakarta font-extrabold text-white text-center m-0"
            style={{
              fontSize: "clamp(48px, 8vw, 100px)",
              lineHeight: "1",
              letterSpacing: "-1.8px"
            }}
          >
            Manage Subscription
          </h1>

          <p
            className="font-jakarta font-medium text-white text-center mt-[37px] max-w-[996px]"
            style={{
              fontSize: "clamp(16px, 4vw, 24px)",
              lineHeight: "1.35",
            }}
          >
            Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline
          </p>

        </div>
      </div>
    </section>
  );
}
