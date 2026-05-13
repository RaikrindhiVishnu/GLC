"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <motion.span style={{ opacity }} className="mr-[0.25em]">
      {children}
    </motion.span>
  );
};

const DynamicCounter = ({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return count.on("change", (latest) => {
      const formatted = latest.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

      setDisplayValue(formatted);
    });
  }, [count, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const text1 =
    "We unite sustainable ecology and generational";

  const text2_1 = "wealth, transforming";

  const text2_2 = "fully verified land";

  const text3 =
    "into premium assets with profitable";

  const text4 = "organic yields.";

  const words1 = text1.split(" ");
  const words2_1 = text2_1.split(" ");
  const words2_2 = text2_2.split(" ");
  const words3 = text3.split(" ");
  const words4 = text4.split(" ");

  const totalWords =
    words1.length +
    words2_1.length +
    words2_2.length +
    words3.length +
    words4.length +
    1;

  const imageRangeStart =
    (words1.length + words2_1.length) / totalWords;

  const imageRangeEnd =
    (words1.length + words2_1.length + 5) / totalWords;

  const rawWidth = useTransform(
    scrollYProgress,
    [imageRangeStart, imageRangeEnd],
    [0, 84]
  );

  const rawOpacity = useTransform(
    scrollYProgress,
    [imageRangeStart, imageRangeEnd],
    [0, 1]
  );

  const imageWidth = useSpring(rawWidth, {
    stiffness: 50,
    damping: 20,
  });

  const imageOpacity = useSpring(rawOpacity, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <section
      id="stats-section"
      ref={containerRef}
      className="relative w-full flex flex-col items-center bg-transparent py-16 md:py-24 overflow-hidden"
    >

      {/* ================= MOBILE ================= */}

      <div className="md:hidden w-full px-6 pt-12 pb-20 overflow-hidden">

        {/* Common Container */}
        <div className="w-full max-w-[390px] mx-auto">
          {/* Heading */}
          <div className="w-full overflow-hidden">

            <h2 className="w-full text-left text-[32px] leading-[1.15] font-semibold text-[#0F2F4C] font-jakarta tracking-[-0.04em] break-words">
              {/* Line 1 */}
              <span className="block break-words">
                {words1.map((w, i) => (
                  <Word
                    key={i}
                    progress={scrollYProgress}
                    range={[i / totalWords, (i + 1) / totalWords]}
                  >
                    {w}
                  </Word>
                ))}
              </span>

              {/* Line 2 */}
              <span className="block mt-2 break-words">
                {words2_1.map((w, i) => {
                  const idx = words1.length + i;

                  return (
                    <Word
                      key={idx}
                      progress={scrollYProgress}
                      range={[idx / totalWords, (idx + 1) / totalWords]}
                    >
                      {w}
                    </Word>
                  );
                })}
              </span>

              {/* Line 3 */}
              <span className="flex items-center flex-wrap gap-2 mt-1">

                <motion.span
                  style={{
                    width: imageWidth,
                    opacity: imageOpacity,
                  }}
                  className="relative h-[34px] min-w-[82px] overflow-hidden rounded-full shrink-0"                >
                  <Image
                    src="/assets/stats/wheat1.4.svg"
                    alt="Wheat"
                    fill
                    className="object-cover"
                  />
                </motion.span>

                <span className="flex flex-wrap">

                  {words2_2.map((w, i) => {
                    const idx =
                      words1.length +
                      words2_1.length +
                      1 +
                      i;

                    return (
                      <Word
                        key={idx}
                        progress={scrollYProgress}
                        range={[idx / totalWords, (idx + 1) / totalWords]}
                      >
                        {w}
                      </Word>
                    );
                  })}

                </span>

              </span>

              {/* Line 4 */}
              <span className="block mt-2 break-words">

                {words3.map((w, i) => {
                  const idx =
                    words1.length +
                    words2_1.length +
                    1 +
                    words2_2.length +
                    i;

                  return (
                    <Word
                      key={idx}
                      progress={scrollYProgress}
                      range={[idx / totalWords, (idx + 1) / totalWords]}
                    >
                      {w}
                    </Word>
                  );
                })}

                {words4.map((w, i) => {
                  const idx =
                    words1.length +
                    words2_1.length +
                    1 +
                    words2_2.length +
                    words3.length +
                    i;

                  return (
                    <Word
                      key={idx}
                      progress={scrollYProgress}
                      range={[idx / totalWords, (idx + 1) / totalWords]}
                    >
                      {w}
                    </Word>
                  );
                })}

              </span>

            </h2>

            {/* Trusted By */}
            <div className="mt-8 flex flex-col items-start">

              <div className="flex -space-x-3">

                {[1, 2, 3].map((i) => (
                  <motion.div
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
                      delay: i * 0.1,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className="relative w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white shadow-sm"                  >
                    <Image
                      src={`/assets/stats/person1.${i}.svg`}
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}

              </div>

              <div className="mt-3">

                <p className="text-[12px] text-[#B1B1B1] font-jakarta">
                  Trusted by over
                </p>

                <div className="flex items-end gap-2">

                  <h4 className="text-[42px] leading-none font-semibold text-[#323335] font-jakarta">
                    <DynamicCounter
                      value={1.2}
                      suffix="K+"
                      decimals={1}
                    />

                  </h4>

                  <span className="text-[12px] text-[#B1B1B1] mb-[5px] font-jakarta">
                    Investors Worldwide
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Images */}
          <div className="mt-10 grid grid-cols-2 gap-4 w-full">

            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square overflow-hidden rounded-[18px]"
            >
              <Image
                src="/assets/stats/Image1.6.svg"
                alt="Tomatoes"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
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
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="relative w-full aspect-square overflow-hidden rounded-[18px]"
            >
              <Image
                src="/assets/stats/Image1.5.svg"
                alt="Carrots"
                fill
                className="object-cover"
              />
            </motion.div>

          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-left text-[16px] leading-[1.75] text-[#8F8F8F] font-jakarta"          >
            We empower landowners with data-driven agronomy,
            transforming verified properties into sustainably
            managed, high-yield organic assets for passive wealth
            generation.
          </motion.p>

          {/* Large Stats Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 rounded-[30px] border-[8px] border-white bg-[#F5F5F5] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"          >

            <p className="text-[18px] leading-[1.45] text-[#17324D] font-medium font-jakarta">
              We empower landowners with data-driven agronomy,
              transforming verified properties into sustainably
              managed, high-yield organic assets for passive wealth
              generation.
            </p>

            {/* Managed Assets */}
            <div className="mt-9">

              <h3 className="text-[48px] leading-none font-bold text-[#323335] font-jakarta tracking-[-0.03em]">

                <DynamicCounter
                  value={45}
                  prefix="₹"
                  suffix="Cr+"
                />

              </h3>

              <p className="mt-2 text-[12px] uppercase tracking-[0.28em] text-[#6E6E6E] font-medium">
                Managed Assets
              </p>

            </div>

            <div className="my-7 h-[1px] w-full bg-[#DCDCDC]" />

            {/* Verified Titles */}
            <div>

              <h3 className="text-[44px] leading-none font-bold text-[#323335] font-jakarta tracking-[-0.03em]">

                <DynamicCounter
                  value={100}
                  suffix="%"
                />

              </h3>

              <p className="mt-2 text-[12px] uppercase tracking-[0.28em] text-[#6E6E6E] font-medium">
                Verified Cleared Titles
              </p>

            </div>

            <div className="my-7 h-[1px] w-full bg-[#DCDCDC]" />

            {/* Active Investors */}
            <div>

              <h3 className="text-[44px] leading-none font-bold text-[#323335] font-jakarta tracking-[-0.03em]">

                <DynamicCounter
                  value={1200}
                  suffix="+"
                />

              </h3>

              <p className="mt-2 text-[12px] uppercase tracking-[0.28em] text-[#6E6E6E] font-medium">
                Active Investors
              </p>

            </div>

          </motion.div>

        </div>

      </div>


      {/* ================= TABLET ================= */}

      <div className="hidden md:flex xl:hidden w-full px-8 py-14">

        <div className="w-full max-w-[950px] mx-auto flex flex-col gap-10">

          {/* Top */}
          <div className="flex justify-between gap-10 items-start">

            {/* Left */}
            <div className="flex flex-col gap-6">

              {/* Avatar */}
              <div>

                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="relative w-[54px] h-[54px] rounded-full overflow-hidden border-2 border-white"
                    >
                      <Image
                        src={`/assets/stats/person1.${i}.svg`}
                        alt="User"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[13px] text-[#A4A4A4] font-jakarta">
                  Trusted by over
                </p>

                <h4 className="text-[34px] font-bold text-[#0F2F4C] font-jakarta">
                  <DynamicCounter
                    value={1.2}
                    suffix="K+"
                    decimals={1}
                  />
                </h4>

              </div>

              {/* Images */}
              <div className="flex gap-4">

                <div className="relative w-[120px] h-[120px] rounded-[18px] overflow-hidden">
                  <Image
                    src="/assets/stats/Image1.5.svg"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative w-[120px] h-[120px] rounded-[18px] overflow-hidden">
                  <Image
                    src="/assets/stats/Image1.6.svg"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="flex-1 max-w-[620px] overflow-hidden">

              <h2 className="w-full max-w-[620px] ml-auto text-[40px] lg:text-[48px] leading-[1.18] font-semibold text-right text-[#0F2F4C] font-jakarta tracking-[-0.03em] break-words overflow-hidden">
                {/* Line 1 */}
                <span className="block">

                  {words1.map((w, i) => (
                    <Word
                      key={i}
                      progress={scrollYProgress}
                      range={[i / totalWords, (i + 1) / totalWords]}
                    >
                      {w}
                    </Word>
                  ))}

                </span>

                {/* Line 2 */}
                <span className="block mt-2 break-words">

                  {words2_1.map((w, i) => {
                    const idx = words1.length + i;

                    return (
                      <Word
                        key={idx}
                        progress={scrollYProgress}
                        range={[idx / totalWords, (idx + 1) / totalWords]}
                      >
                        {w}
                      </Word>
                    );
                  })}

                  <motion.span
                    style={{
                      width: imageWidth,
                      opacity: imageOpacity,
                    }}
                    className="inline-flex mx-2 relative h-[42px] rounded-full overflow-hidden align-middle"
                  >
                    <Image
                      src="/assets/stats/wheat1.4.svg"
                      alt="Wheat"
                      fill
                      className="object-cover"
                    />
                  </motion.span>

                  {words2_2.map((w, i) => {
                    const idx =
                      words1.length +
                      words2_1.length +
                      1 +
                      i;

                    return (
                      <Word
                        key={idx}
                        progress={scrollYProgress}
                        range={[idx / totalWords, (idx + 1) / totalWords]}
                      >
                        {w}
                      </Word>
                    );
                  })}

                </span>

                {/* Line 3 */}
                <span className="block mt-2 break-words">

                  {words3.map((w, i) => {
                    const idx =
                      words1.length +
                      words2_1.length +
                      1 +
                      words2_2.length +
                      i;

                    return (
                      <Word
                        key={idx}
                        progress={scrollYProgress}
                        range={[idx / totalWords, (idx + 1) / totalWords]}
                      >
                        {w}
                      </Word>
                    );
                  })}

                  {words4.map((w, i) => {
                    const idx =
                      words1.length +
                      words2_1.length +
                      1 +
                      words2_2.length +
                      words3.length +
                      i;

                    return (
                      <Word
                        key={idx}
                        progress={scrollYProgress}
                        range={[idx / totalWords, (idx + 1) / totalWords]}
                      >
                        {w}
                      </Word>
                    );
                  })}

                </span>

              </h2>

            </div>

          </div>

          {/* Description */}
          <div className="flex justify-end">

            <p className="max-w-[620px] text-right text-[15px] leading-[1.8] text-[#7B7B7B] font-jakarta">
              We empower landowners with data-driven agronomy,
              transforming verified properties into sustainably
              managed, high-yield organic assets for passive wealth generation.
            </p>

          </div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-5"
          >

            {/* Card */}
            <div className="h-[240px] rounded-[28px] border-[8px] border-white bg-[#F5F5F5] p-7 flex flex-col justify-between">

              <span className="text-[16px] font-semibold text-[#0F2F4C]/60">
                Managed Assets
              </span>

              <h3 className="text-[46px] font-bold text-[#323335]">
                <DynamicCounter
                  value={45}
                  prefix="₹"
                  suffix="Cr+"
                />
              </h3>

            </div>

            {/* Card */}
            <div className="h-[240px] rounded-[28px] border-[8px] border-white bg-[#F5F5F5] p-7 flex flex-col justify-between">

              <span className="text-[16px] font-semibold text-[#0F2F4C]/60">
                Verified Titles
              </span>

              <h3 className="text-[46px] font-bold text-[#323335]">
                <DynamicCounter
                  value={100}
                  suffix="%"
                />
              </h3>

            </div>

            {/* Card */}
            <div className="h-[240px] rounded-[28px] border-[8px] border-white bg-[#F5F5F5] p-7 flex flex-col justify-between">

              <span className="text-[16px] font-semibold text-[#0F2F4C]/60">
                Active Investors
              </span>

              <h3 className="text-[46px] font-bold text-[#323335]">
                <DynamicCounter
                  value={1200}
                  suffix="+"
                />
              </h3>

            </div>

          </motion.div>

        </div>

      </div>


      {/* ================= DESKTOP ================= */}


      {/* Desktop Layout - Figma Absolute Container (Fixed at 1300px) */}
      <div className="hidden xl:block relative w-[1300px] h-[726px] shrink-0">

        {/* Avatar Group (Trusted by over) */}
        <div className="absolute left-[1px] top-[0px] z-20">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative w-[45px] h-[45px] rounded-full border-2 border-white overflow-hidden bg-gray-100 shadow-sm"
              >
                <Image
                  src={`/assets/stats/person1.${i}.svg`}
                  alt="User" fill className="object-cover"
                />
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-[12px] font-medium text-[#A4A4A4] font-jakarta">
            Trusted by over
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <h4 className="text-[24px] font-bold text-[#0F2F4C] font-jakarta flex items-baseline gap-2">
              <span><DynamicCounter value={1.2} suffix="K+" decimals={1} /></span>
              <span className="text-[12px] font-normal text-[#A4A4A4] font-jakarta translate-y-[-2px]">investor worldwide</span>
            </h4>
          </div>
        </div>

        {/* Main Headline Block - Right Aligned as per Specs */}
        <div className="absolute right-0 top-0 w-full flex flex-col items-end text-right">

          <h2
            className="absolute text-[39.57px] font-semibold leading-none text-black font-jakarta whitespace-nowrap"
            style={{ right: '0px', top: '0px' }}
          >
            {words1.map((w, i) => (
              <Word key={i} progress={scrollYProgress} range={[i / totalWords, (i + 1) / totalWords]}>
                {w}
              </Word>
            ))}
          </h2>

          <div
            className="absolute flex items-center gap-4 whitespace-nowrap"
            style={{ right: '0.12px', top: '45px' }}
          >
            <h2 className="text-[39.57px] font-semibold leading-none text-black font-jakarta">
              {words2_1.map((w, i) => {
                const idx = words1.length + i;
                return (
                  <Word key={idx} progress={scrollYProgress} range={[idx / totalWords, (idx + 1) / totalWords]}>
                    {w}
                  </Word>
                );
              })}
            </h2>
            <motion.div
              style={{ width: imageWidth, opacity: imageOpacity }}
              className="relative h-[41px] rounded-full overflow-hidden border border-gray-100 shadow-sm"
            >
              <Image src="/assets/stats/wheat1.4.svg" alt="Wheat" fill className="object-cover" />
            </motion.div>
            <h2 className="text-[39.57px] font-semibold leading-none text-black font-jakarta">
              {words2_2.map((w, i) => {
                const idx = words1.length + words2_1.length + 1 + i;
                return (
                  <Word key={idx} progress={scrollYProgress} range={[idx / totalWords, (idx + 1) / totalWords]}>
                    {w}
                  </Word>
                );
              })}
            </h2>
          </div>

          <h2
            className="absolute text-[39.57px] font-semibold leading-none text-black font-jakarta whitespace-nowrap"
            style={{ right: '0.12px', top: '90px' }}
          >
            {words3.map((w, i) => {
              const idx = words1.length + words2_1.length + 1 + words2_2.length + i;
              return (
                <Word key={idx} progress={scrollYProgress} range={[idx / totalWords, (idx + 1) / totalWords]}>
                  {w}
                </Word>
              );
            })}
          </h2>

          <h2
            className="absolute text-[39.57px] font-semibold leading-none text-black font-jakarta whitespace-nowrap"
            style={{ right: '0.12px', top: '135px' }}
          >
            {words4.map((w, i) => {
              const idx = words1.length + words2_1.length + 1 + words2_2.length + words3.length + i;
              return (
                <Word key={idx} progress={scrollYProgress} range={[idx / totalWords, (idx + 1) / totalWords]}>
                  {w}
                </Word>
              );
            })}
          </h2>
        </div>

        {/* Subtitle Paragraph - Aligned with start of cards */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 0.8, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute text-left"
          style={{ width: '694px', left: '374px', bottom: '350px' }}
        >
          <p className="text-[13.3px] leading-[25px] text-[#0F2F4C] font-jakarta">
            We empower landowners with data-driven agronomy, transforming verified properties into sustainably <br />
            managed, high-yield organic assets for passive wealth generation.
          </p>
        </motion.div>

        {/* Three Stats Cards Container - Pushed Right (Total width = 926px) */}
        <div className="absolute bottom-0 right-0 flex gap-4">

          {/* Managed Assets */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-[298px] h-[298px] bg-[#F5F5F5] border-[8px] border-white rounded-[30px] p-8 flex flex-col justify-between shadow-sm relative group overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <span className="text-[18px] font-semibold text-[#0F2F4C] font-jakarta opacity-60">Managed Assets</span>
              <motion.div
                animate={{ rotate: [0, 90, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4 text-[#0F2F4C] opacity-20"
              >✦</motion.div>
            </div>
            <div className="flex flex-col">
              <span className="text-[49.3px] font-bold text-[#323335] font-jakarta tracking-tight">
                <DynamicCounter value={45} prefix="₹" suffix="Cr+" />
              </span>
            </div>
            <div className="absolute inset-0 bg-[#2780C4] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </motion.div>

          {/* Verified Titles */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-[298px] h-[298px] bg-[#F5F5F5] border-[8px] border-white rounded-[30px] p-8 flex flex-col justify-between shadow-sm relative group overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <span className="text-[18px] font-semibold text-[#0F2F4C] font-jakarta opacity-60">Verified Titles</span>
              <motion.div
                animate={{ rotate: [0, -90, -90, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-4 h-4 text-[#0F2F4C] opacity-20"
              >✦</motion.div>
            </div>
            <div className="flex flex-col">
              <span className="text-[54.6px] font-bold text-[#38393B] font-jakarta tracking-tight">
                <DynamicCounter value={100} suffix="%" />
              </span>
            </div>
            <div className="absolute inset-0 bg-[#2780C4] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </motion.div>

          {/* Active Investors */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-[298px] h-[298px] bg-[#F5F5F5] border-[8px] border-white rounded-[30px] p-8 flex flex-col justify-between shadow-sm relative group overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <span className="text-[18px] font-semibold text-[#0F2F4C] font-jakarta opacity-60">Active Investors</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-4 h-4 text-[#0F2F4C] opacity-20"
              >✦</motion.div>
            </div>
            <div className="flex flex-col">
              <span className="text-[50.6px] font-bold text-[#363739] font-jakarta tracking-tight">
                <DynamicCounter value={1200} suffix="+" />
              </span>
            </div>
            <div className="absolute inset-0 bg-[#2780C4] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </motion.div>

        </div>

        {/* Bottom Left Content Block - Two Images Side-by-Side */}
        <div className="absolute left-0 bottom-0 flex flex-col gap-4">
          <div className="flex gap-4 items-end">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative w-[124px] h-[124px] rounded-[15px] overflow-hidden shadow-md group border border-white/20"
            >
              <Image src="/assets/stats/Image1.5.svg" alt="Hands" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative w-[124px] h-[124px] rounded-[15px] overflow-hidden shadow-md group border border-white/20"
            >
              <Image src="/assets/stats/Image1.6.svg" alt="Tomatoes" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            style={{ width: '399px' }}
          >
            <p className="text-[14px] leading-[23px] text-[#909090] font-jakarta">
              Smart, data-driven agricultural management optimizing <br />
              organic yields and resource efficiency for your <br />
              premium assets.
            </p>
          </motion.div>
        </div>

      </div>

    </section >
  );
}
