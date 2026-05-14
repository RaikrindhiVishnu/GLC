"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      tier: "SILVER TIER",
      price: "₹9,999",
      features: [
        "Unlock 4 Farmlands",
        "70-Year Title Search",
        "PDF Export Access",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      tier: "GOLD TIER",
      price: "₹19,999",
      features: [
        "Unlocks 10 Farmlands",
        "Permanent GIS Access",
        "IO Risk Assesment",
        "Priority Document Request",
      ],
      highlight: true,
      popular: true,
    },
    {
      name: "Annual Pass",
      tier: "PLATINUM TIER",
      price: "₹29,999",
      features: [
        "Unlimited unlocks for 1 year",
        "Dedicated Intelligence Officer",
        "Early Access to Pre-Docs",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-16 md:py-24 lg:py-32 overflow-hidden">

      <div className="container mx-auto max-w-[1280px] px-4 md:px-8 flex flex-col items-center">

        {/* Header */}
        <div className="mb-14 md:mb-20 text-center flex flex-col items-center gap-4">

          <h2 className="text-[34px] md:text-[46px] lg:text-[36px] leading-[1.1] tracking-[-0.04em] font-bold text-[#131600] font-jakarta flex flex-wrap justify-center gap-x-3">

            {"Premium-Investor Access"
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
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}

          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="max-w-[672px] text-[15px] md:text-[18px] lg:text-[16px] leading-[1.7] text-[#45474C] font-jakarta px-2"
          >
            Select a subscription model that fits your
            portfolio scale. From single-asset insights
            to global agricultural surveillance.
          </motion.p>

        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="flex lg:hidden flex-col gap-6 w-full max-w-[460px]">

          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
              }}
              viewport={{ once: true }}
              className={`
                relative overflow-hidden rounded-[30px]
                border bg-white
                shadow-[0px_15px_40px_rgba(0,0,0,0.06)]
                ${tier.highlight
                  ? "border-[#164573]"
                  : "border-[#ECECEC]"
                }
              `}
            >

              {/* Popular Badge */}
              {tier.popular && (
                <div className="bg-[#164573] py-3 text-center">

                  <span className="text-[15px] font-semibold text-white font-jakarta">
                    Most popular
                  </span>

                </div>
              )}

              {/* Header */}
              <div className="px-6 pt-7 pb-6 flex flex-col items-center text-center bg-white">

                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#0F2F4C]/40 font-jakarta">
                  {tier.tier}
                </span>

                <h3 className="mt-2 text-[30px] font-bold text-[#0F2F4C] font-jakarta">
                  {tier.name}
                </h3>

                <div className="mt-4 text-[58px] md:text-[68px] font-extrabold leading-none text-[#0F2F4C] font-jakarta break-all">
                  {tier.price}
                </div>

              </div>

              {/* Features */}
              <div className="bg-[#F8F9FA] px-6 py-7 flex flex-col">

                <ul className="space-y-5">

                  {tier.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3"
                    >

                      <div className="flex shrink-0 items-center justify-center mt-1">

                        <svg
                          className="w-5 h-5 text-[#2780C4]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>

                      </div>

                      <span className="text-[15px] leading-[1.5] font-medium text-[#45474C] font-jakarta">
                        {feature}
                      </span>

                    </li>
                  ))}

                </ul>

                {/* Button */}
                <div className="mt-8">

                  {tier.highlight ? (
                    <button
                      className="w-full h-[54px] rounded-full text-[17px] font-semibold text-white flex items-center justify-center"
                      style={{
                        background:
                          "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                      }}
                    >
                      Select Plan
                    </button>
                  ) : (
                    <button className="w-full h-[54px] rounded-full border border-[#2780C4] bg-[#AED6EF1A] text-[17px] font-semibold text-[#2780C4] flex items-center justify-center">
                      Select Plan
                    </button>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* ================= DESKTOP ================= */}
        <div
          className="hidden lg:flex items-center justify-center gap-0 w-full"
          style={{
            maxWidth: "1153.84px",
            minHeight: "642px",
          }}
        >

          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              className={`relative flex flex-col w-full overflow-hidden transition-all duration-500 ${tier.highlight
                  ? "max-w-[483.7px] min-h-[642px] z-20 shadow-[0px_30px_60px_rgba(0,0,0,0.12)] rounded-[42px] border-[4px] border-[#164573]"
                  : i === 0
                    ? "max-w-[335px] min-h-[428px] z-10 shadow-[0px_15px_40px_rgba(0,0,0,0.08)] rounded-l-[42px] rounded-r-none border border-[#F2F2F2]"
                    : "max-w-[335px] min-h-[428px] z-10 shadow-[0px_15px_40px_rgba(0,0,0,0.08)] rounded-r-[42px] rounded-l-none border border-[#F2F2F2]"
                } bg-white`}
            >

              {/* Popular Badge */}
              {tier.popular && (
                <div className="bg-[#164573] py-5 text-center">

                  <span className="text-[20px] font-semibold text-white font-jakarta">
                    Most popular
                  </span>

                </div>
              )}

              {/* Header */}
              <div
                className={`flex flex-col items-center justify-center bg-white px-10 ${tier.highlight ? "py-10" : "py-8"
                  }`}
              >

                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#0F2F4C] opacity-40 font-jakarta">
                  {tier.tier}
                </span>

                <h3
                  className={`mt-2 font-bold text-[#0F2F4C] font-jakarta ${tier.highlight
                      ? "text-[32px]"
                      : "text-[26px]"
                    }`}
                >
                  {tier.name}
                </h3>

                <div
                  className={`mt-4 font-extrabold text-[#0F2F4C] font-jakarta leading-none ${tier.highlight
                      ? "text-[80px]"
                      : "text-[52px]"
                    }`}
                >
                  {tier.price}
                </div>

              </div>

              {/* Features */}
              <div
                className={`flex-1 bg-[#F8F9FA] px-8 lg:px-10 flex flex-col ${tier.highlight ? "py-12" : "py-10"
                  }`}
              >

                <ul
                  className={`flex-1 ${tier.highlight
                      ? "space-y-6"
                      : "space-y-5"
                    }`}
                >

                  {tier.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-4"
                    >

                      <div className="flex shrink-0 items-center justify-center">

                        <svg
                          className="w-5 h-5 text-[#2780C4]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>

                      </div>

                      <span className="text-[16px] font-medium text-[#45474C] font-jakarta">
                        {feature}
                      </span>

                    </li>
                  ))}

                </ul>

                {/* Button */}
                <div className="mt-8 flex justify-center">

                  {tier.highlight ? (
                    <button
                      className="w-[380px] h-[52px] rounded-[30px] text-[18px] font-semibold text-white transition-all shadow-lg flex items-center justify-center cursor-pointer"
                      style={{
                        background:
                          "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                      }}
                    >
                      Select Plan
                    </button>
                  ) : (
                    <button className="w-[240px] h-[52px] rounded-[30px] border border-[#2780C4] bg-[#AED6EF1A] text-[18px] font-semibold text-[#2780C4] transition-all hover:bg-[#2780C4] hover:text-white flex items-center justify-center cursor-pointer">
                      Select Plan
                    </button>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}