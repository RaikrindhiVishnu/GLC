"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Footer() {
  const router = useRouter();
  const dots = [
    { left: 241, top: 194, img: "/assets/stats/person1.1.svg" }, // 91
    { left: 581, top: 181, img: "/assets/stats/person1.2.svg" }, // 93
    { left: 487, top: 76, img: "/assets/stats/person1.3.svg" },  // 97
    { left: 968, top: 75, img: "/assets/stats/wheat1.4.svg" },  // 94
    { left: 1202, top: 194, img: "/assets/stats/person1.1.svg" }, // 96
    { left: 1002, top: 374, img: "/assets/stats/person1.2.svg" }, // 98
    { left: 592, top: 374, img: "/assets/stats/person1.3.svg" },  // 99
    { left: 290, top: 362, img: "/assets/stats/wheat1.4.svg" },  // 100
    { left: 931, top: 199, img: "/assets/stats/person1.1.svg" },  // 95
    { left: 187, top: 63, img: "/assets/stats/person1.2.svg" },   // 92
  ];

  return (
    <footer
      id="footer-section"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
      }}
    >

      {/* ================= MOBILE / TABLET ================= */}
      <div className="relative flex lg:hidden flex-col px-8 pt-10 pb-8 overflow-hidden min-h-[720px]">

        {/* ================= MOBILE LOGO AREA ================= */}
        <div className="relative w-full max-w-[360px] mx-auto h-[190px]">

          {/* Floating Dots — scattered freely, overlapping text like desktop */}
          {[
            { left: "6%",  top: "8%",  img: "/assets/stats/person1.1.svg" },
            { left: "38%", top: "2%",  img: "/assets/stats/person1.2.svg" },
            { left: "72%", top: "6%",  img: "/assets/stats/person1.3.svg" },
            { left: "88%", top: "28%", img: "/assets/stats/wheat1.4.svg" },
            { left: "55%", top: "35%", img: "/assets/stats/person1.1.svg" },
            { left: "18%", top: "42%", img: "/assets/stats/wheat1.4.svg" },
            { left: "78%", top: "60%", img: "/assets/stats/person1.2.svg" },
            { left: "30%", top: "72%", img: "/assets/stats/person1.3.svg" },
            { left: "62%", top: "78%", img: "/assets/stats/wheat1.4.svg" },
          ].map((dot, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              className="absolute w-[22px] h-[22px] rounded-full border-[2px] border-white overflow-hidden shadow-xl z-20"
              style={{
                left: dot.left,
                top: dot.top,
              }}
            >

              <Image
                src={dot.img}
                alt="Dot"
                fill
                className="object-cover"
              />

            </motion.div>
          ))}

          {/* Logo Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">

            <h1 className="text-[clamp(44px,11.5vw,76px)] leading-[0.85] tracking-[-0.05em] font-semibold text-white text-center font-jakarta">

              <span className="block whitespace-nowrap">
                Green Land
              </span>

              <span className="block whitespace-nowrap">
                Capital
              </span>

            </h1>

          </div>

        </div>

        {/* ================= LINKS ================= */}
        <div className="mt-10 flex flex-col gap-12">

          {/* Invest */}
          <div>

            <h4 className="text-[12px] tracking-[1.4px] uppercase text-white/40 font-bold font-jakarta mb-5">
              Invest and Explore
            </h4>

            <ul className="flex flex-col gap-5">

              {[
                "Search Farmland",
                "Pool Buying",
                "Subscriptions",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white text-[18px] font-medium font-jakarta cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => {
                    if (item === "Search Farmland") router.push("/search");
                    else if (item === "Subscriptions") router.push("/pricing");
                  }}
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Support */}
          <div>

            <h4 className="text-[12px] tracking-[1.4px] uppercase text-white/40 font-bold font-jakarta mb-5">
              Support and Security
            </h4>

            <ul className="flex flex-col gap-5">

              {[
                "Maintenance",
                "Verification",
                "Privacy Policy",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white text-[18px] font-medium font-jakarta cursor-pointer hover:opacity-70 transition-opacity"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Bottom Logo */}
        <div className="mt-14 flex justify-end">

          <div className="relative w-[112px] h-[46px]">

            <Image
              src="/assets/common/Logo green land 1.svg"
              alt="Logo"
              fill
              className="object-contain"
            />

          </div>

        </div>

        {/* Copyright */}
        <div className="mt-14">

          <p className="text-[11px] text-white/50 font-jakarta uppercase tracking-[1px] leading-[1.5]">
            © 2025 GREEN LAND CAPITAL.
            ALL RIGHTS RESERVED.
          </p>

        </div>

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block">

        <div
          className="container mx-auto max-w-[1312px] flex flex-col items-end gap-[30px] relative pt-[64px] pb-[64px]"
          style={{
            minHeight: "899px",
          }}
        >

          {/* Branding */}
          <div className="relative w-[1312px] h-[672px] flex flex-col items-start gap-[84px]">

            {/* Green Land Capital Text Block */}
            <div className="relative w-[1312px] h-[437px] flex items-center justify-center z-0">

              {dots.map((dot, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="absolute w-[48px] h-[48px] rounded-full border-2 border-white shadow-2xl overflow-hidden z-20"
                  style={{
                    left: `${dot.left}px`,
                    top: `${dot.top}px`,
                  }}
                >

                  <Image
                    src={dot.img}
                    alt="Dot"
                    fill
                    className="object-cover"
                  />

                </motion.div>
              ))}

              <h1 className="w-[1312px] h-[437px] text-[220px] font-semibold text-white leading-[80%] tracking-[-0.02em] text-center font-jakarta flex flex-col items-center justify-center select-none z-10">

                <span className="flex">

                  {["Green", "Land"].map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{
                        opacity: 0,
                        filter: "blur(15px)",
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                        y: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.2,
                      }}
                      viewport={{ once: true }}
                      className="mr-10 last:mr-0"
                    >
                      {word}
                    </motion.span>
                  ))}

                </span>

                <motion.span
                  initial={{
                    opacity: 0,
                    filter: "blur(15px)",
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                >
                  Capital
                </motion.span>

              </h1>

            </div>

            {/* Navigation */}
            <div className="w-[1312px] h-[151px] flex flex-row justify-between items-center z-10">

              {/* Left */}
              <div className="flex flex-col gap-[40px] w-[129px] h-[151px]">

                <div className="flex flex-col gap-4">

                  <div className="relative w-[127px] h-[55px]">

                    <Image
                      src="/assets/common/Logo green land 1.svg"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />

                  </div>

                  <ul className="flex flex-col gap-4">

                    {[
                      "Search Farmland",
                      "Pool Buying",
                      "Subscriptions",
                    ].map((link) => (
                      <li
                        key={link}
                        onClick={() => {
                          if (link === "Search Farmland") router.push("/search");
                          else if (link === "Subscriptions") router.push("/pricing");
                        }}
                        className="text-white text-[16px] font-semibold font-jakarta whitespace-nowrap leading-[100%] cursor-pointer hover:opacity-70 transition-opacity"
                      >
                        {link}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

              {/* Middle */}
              <div className="flex flex-col gap-[40px] w-[195px] h-[80px] mb-auto pt-[71px]">

                <ul className="flex flex-col gap-4">

                  {[
                    "Verification of Farmland",
                    "Maintanence of Farmland",
                    "Sell Your Land",
                  ].map((link) => (
                    <li
                      key={link}
                      className="text-white text-[16px] font-semibold font-jakarta whitespace-nowrap leading-[100%] cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      {link}
                    </li>
                  ))}

                </ul>

              </div>

              {/* Newsletter */}
              <div className="flex flex-col gap-[32px] w-[284px] h-[118px]">

                <p className="text-white text-[18px] leading-[140%] font-jakarta tracking-[-0.02em]">
                  Get farmland insights and opportunities straight to your inbox
                </p>

                <div className="relative w-[262px] border-b border-[#DADADA] pb-2 flex items-center justify-between">

                  <input
                    type="text"
                    placeholder="Email address"
                    className="bg-transparent text-white placeholder:text-white/60 focus:outline-none font-jakarta text-[16px] leading-[100%] w-full"
                  />

                  <div className="relative w-6 h-6 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Bar */}
          <div className="w-[1312px] h-[80px] px-[48px] py-[32px] border-t border-white/10 flex flex-row justify-between items-center z-10">
            <p className="text-white text-[12px] uppercase tracking-[1.2px] font-jakarta opacity-80 font-normal leading-[16px]">
              © 2024 GREEN LAND CAPITAL. ALL RIGHTS RESERVED.
            </p>
            <ul className="flex flex-row gap-[32px]">
              {["Privacy Policy", "Terms of Service", "Investor Relations", "Contact"].map((link) => (
                <li key={link} className="text-white text-[12px] uppercase tracking-[1.2px] font-jakarta cursor-pointer hover:opacity-100 opacity-80 transition-opacity font-normal leading-[16px]">
                  {link}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

    </footer>
  );
}
