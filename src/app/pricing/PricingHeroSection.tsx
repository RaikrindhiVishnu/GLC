"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function PricingHeroSection() {
  const subscriberAvatars = [
    "/assets/stats/person1.1.svg",
    "/assets/stats/person1.2.svg",
    "/assets/stats/person1.3.svg",
  ];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        maxHeight: "100vh",
        background: "#131600",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="flex flex-col items-center justify-start"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.45))",
          zIndex: 1,
        }}
      />
      <img
        src="/assets/pricing/hero.svg"
        alt="Pricing Hero Backdrop"
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0, zIndex: 0 }}
      />

      <Navbar variant="app" active="pricing" />

      <div
        style={{ position: "absolute", inset: 0, zIndex: 10, boxSizing: "border-box" }}
        className="flex flex-col items-center justify-center px-4 pointer-events-none"
      >
        <div className="w-full max-w-254.5 flex flex-col items-center pointer-events-auto">

          {/* Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: "rgba(231,232,233,0.2)",
              padding: "6px 16px",
              borderRadius: "9999px",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#FFFFFF" }}>
              Exclusive Opportunity
            </span>
          </motion.div>

          <h1 className="text-shadow-premium flex flex-col items-center justify-center font-jakarta font-extrabold tracking-[-4px] text-white">
            <span className="flex text-[48px] leading-none md:text-[76px] flex-wrap gap-x-2 md:gap-x-4 justify-center">
              {"Premium Investor".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="flex text-[48px] leading-none md:text-[76px] flex-wrap gap-x-2 md:gap-x-4 justify-center mt-1">
              {"Access".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-9 font-jakarta font-medium text-[14px] md:text-[16px] leading-relaxed text-white text-center max-w-175"
          >
            Unlock institutional-grade agricultural data, verified land histories, and curated asset discovery for the modern wealth manager.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-row items-center gap-5 mt-9 flex-wrap justify-center"
          >
            <button
              onClick={() => { document.getElementById("pricing-bento-grid")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                background: "rgba(255,255,255,0.2)",
                boxShadow: "0px 10px 15px -3px rgba(9,20,38,0.1)",
                borderRadius: "9999px",
                padding: "16px 32px",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                cursor: "pointer",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF" }}>
                Explore Pricing
              </span>
            </button>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", background: "rgba(0,0,0,0.25)", padding: "6px 16px 6px 6px", borderRadius: "9999px", backdropFilter: "blur(8px)" }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                {subscriberAvatars.map((src, i) => (
                  <div key={i} style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #131600", marginLeft: i > 0 ? "-12px" : "0", overflow: "hidden", background: "#D9D9D9" }}>
                    <Image src={src} alt="Investor" width={36} height={36} style={{ objectFit: "cover" }} />
                  </div>
                ))}
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #131600", marginLeft: "-12px", background: "#E1E3E4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#0F2F4C" }}>+500</span>
                </div>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#FFFFFF", marginLeft: "12px" }}>
                Institutional managers joined
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
