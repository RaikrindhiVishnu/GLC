"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who can use this platform?",
      answer: "Our platform is designed for everyone from individual farmers to institutional investors looking for sustainable agrarian growth. We provide the tools and resources needed to manage and scale your agricultural investments effectively.",
    },
    {
      question: "What crops or farming methods are used?",
      answer: "We focus on Vedic farming practices and sustainable agriculture. Our methods prioritize soil health, biodiversity, and long-term ecological balance while ensuring high-quality yields.",
    },
    {
      question: "How does this help the environment?",
      answer: "By implementing organic and natural farming techniques, we reduce chemical usage, improve water retention in soil, and promote carbon sequestration, contributing to a healthier planet.",
    },
    {
      question: "Can this work in my region?",
      answer: "Yes, our solutions are adaptable to various climatic zones across India. We provide localized expertise to ensure that farming practices are optimized for your specific geographical conditions.",
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1140px] px-6">
        {/* Header */}
        <div className="mb-12 lg:mb-20 flex flex-col items-center text-center">
          <h2 className="text-[32px] lg:text-[42.67px] font-semibold leading-tight lg:leading-[56px] text-[#414244] font-jakarta mb-4 flex flex-wrap justify-center gap-x-3">
            {"Clear reliable information".split(" ").map((word, i) => (
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
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-[725px] text-[14px] lg:text-[13.33px] leading-relaxed lg:leading-[17px] text-[#0F2F4C] font-jakarta opacity-80"
          >
            Find clear answers to common questions and learn how our agriculture solutions support your farming journey.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-[20px]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className={`group cursor-pointer rounded-[30px] transition-all duration-500 ease-in-out relative overflow-hidden ${
                  isOpen
                    ? "bg-[#C5E5FF] border-[9.33px] border-[#FEFEFE] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]"
                    : "bg-[#FEFEFE] border-[1.33px] border-[#F2F2F2] hover:border-[#0F2F4C]/20"
                }`}
                style={{
                  minHeight: isOpen ? "176px" : "97.33px",
                }}
              >
                <div className="py-[28px] px-[32px] md:px-[40px] flex flex-col h-full">
                  <div className="flex items-center justify-between gap-4">
                    <h4 
                      className={`text-[18px] leading-[23px] font-jakarta transition-colors duration-300 ${
                        isOpen ? "font-semibold text-[#0F2F4C]" : "font-normal text-[#0F2F4C]"
                      }`}
                    >
                      {faq.question}
                    </h4>
                    
                    <div 
                      className={`flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isOpen 
                          ? "w-[50.67px] h-[34.67px] bg-white rounded-[16.67px]" 
                          : "w-[50.67px] h-[34.67px] border border-[#0F2F4C] rounded-[17.33px]"
                      }`}
                    >
                      <Image 
                        src={`/assets/faq/${isOpen ? 'arrow-up' : 'arrow-down'}.svg`}
                        alt={isOpen ? "Collapse" : "Expand"}
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-[20px]"
                      >
                        <p className="max-w-[705px] text-[14px] leading-[27px] text-[#0F2F4C] font-jakarta">
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
