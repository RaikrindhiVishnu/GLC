"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Green Land Capital?",
      answer:
        "Green Land Capital aspires to create a new dimension in the natural farming and alternate real estate segments in India. Through their Vedic farming practices and the creation of green eco-habitats.",
    },
    {
      question: "How to use Green Land Capital?",
      answer:
        "Green Land Capital allows investors and landowners to explore sustainable farmland opportunities, track agricultural growth, and participate in eco-driven investment ecosystems.",
    },
    {
      question: "How much does Green Land Capital cost?",
      answer:
        "Green Land Capital offers multiple investment and access plans tailored for different portfolio sizes, from starter investors to premium agricultural asset holders.",
    },
    {
      question: "Is Green Land Capital a safe investment?",
      answer:
        "Green Land Capital focuses on verified land documentation, sustainable farming systems, and transparent operational management to help reduce investment risks.",
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-16 md:py-24 lg:py-32 overflow-hidden">

      <div className="container mx-auto max-w-[1140px] px-4 md:px-6">

        {/* ================= HEADER ================= */}
        <div className="mb-12 md:mb-16 lg:mb-20 flex flex-col items-center text-center">

          <h2 className="text-[34px] md:text-[48px] lg:text-[42px] leading-[1.08] tracking-[-0.04em] font-semibold text-[#414244] font-jakarta mb-5 flex flex-wrap justify-center gap-x-3">

            {"Frequently Asked Questions"
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
                    delay: i * 0.08,
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
            className="max-w-[725px] text-[15px] md:text-[17px] lg:text-[15px] leading-[1.7] text-[#0F2F4C] font-jakarta opacity-80 px-2"
          >
            Find clear answers to common questions and learn how
            our agriculture solutions support your farming journey.
          </motion.p>

        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="flex flex-col gap-4 md:gap-5">

          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                viewport={{ once: true }}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className={`
                  group cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out
                  rounded-[24px] md:rounded-[30px]
                  ${isOpen
                    ? "bg-[#C5E5FF] border-[5px] md:border-[9px] border-[#FEFEFE] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]"
                    : "bg-[#FEFEFE] border border-[#F2F2F2] hover:border-[#0F2F4C]/20"
                  }
                `}
              >

                <div className="py-5 md:py-7 px-4 md:px-10 flex flex-col h-full">

                  {/* Top Row */}
                  <div className="flex items-start md:items-center justify-between gap-4">

                    <h4
                      className={`
                       text-[16px] md:text-[22px] lg:text-[18px]
                        leading-[1.35]
                        font-jakarta
                        transition-colors duration-300
                        pr-2
                        ${isOpen
                          ? "font-semibold text-[#0F2F4C]"
                          : "font-medium text-[#0F2F4C]"
                        }
                      `}
                    >
                      {faq.question}
                    </h4>

                    {/* Toggle */}
                    <div
                      className={`
                        flex items-center justify-center shrink-0 transition-all duration-300
                        w-[46px] h-[32px]
                        md:w-[52px] md:h-[36px]
                        ${isOpen
                          ? "bg-white rounded-full"
                          : "border border-[#0F2F4C] rounded-full"
                        }
                      `}
                    >

                      <Image
                        src={`/assets/faq/${isOpen
                          ? "arrow-up"
                          : "arrow-down"
                          }.svg`}
                        alt={
                          isOpen
                            ? "Collapse"
                            : "Expand"
                        }
                        width={16}
                        height={16}
                      />

                    </div>

                  </div>

                  {/* Answer */}
                  <AnimatePresence>

                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >

                        <p className="max-w-[760px] pt-5 text-[15px] md:text-[17px] lg:text-[15px] leading-[1.8] text-[#0F2F4C] font-jakarta">
                          {faq.answer}
                        </p>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}