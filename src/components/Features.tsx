"use client";

import Image from "next/image";
import { Droplets, MapPin } from "lucide-react";
import { motion, useInView, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const DynamicCounter = ({ value, suffix = "", prefix = "", decimals = 0 }: { value: number, suffix?: string, prefix?: string, decimals?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useSpring(0, { stiffness: 100, damping: 30 });
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

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

export default function Features() {
  return (
    <section className="relative w-full flex flex-col items-center bg-transparent py-16 lg:py-32 overflow-hidden">

      {/* Mobile Layout - Vertical Stack (Visible < 1024px) */}
      <div className="lg:hidden flex flex-col w-full px-6 gap-12">
        {/* Why Green Capital Title */}
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0F2F4C] font-jakarta flex justify-center gap-x-2">
            {"Why Green Capital".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[16px] leading-[1.5] text-[#5C5C5C] font-jakarta"
          >
            Monitor your managed agricultural assets in real-time. Our digital ecosystem provides transparent, data-driven insights into your farm's agronomy, infrastructure, and financial yields.
          </motion.p>
        </div>

        {/* Feature Cards Stack */}
        <div className="flex flex-col gap-8">

          {/* Card 1: Organic Soil Intelligence */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] shadow-sm p-6 flex flex-col gap-6 group"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-bold text-[#0F2F4C] font-jakarta">Organic Soil Intelligence</h3>
              <p className="text-[16px] leading-[1.5] text-[#5C5C5C] font-jakarta">
                Track the chemical-to-organic conversion phase with routine soil pH and nutrient density audits.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden">
              <Image src="/assets/features/organic3.1.jpg" alt="Soil" fill className="object-cover" />
              <div className="absolute inset-x-4 top-4 bottom-4 backdrop-blur-xl rounded-[20px] border border-white/40 p-6 flex flex-col justify-between bg-white/80">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[48px] font-medium text-[#0F2F4C] font-jakarta">
                      <DynamicCounter value={6.8} decimals={1} />
                    </span>
                    <div className="bg-[#C5E5FF] rounded-full flex items-center px-3 py-1">
                      <span className="text-[14px] font-medium text-[#0F2F4C]">Live</span>
                      <span className="ml-2 w-2 h-2 bg-[#2780C4] rounded-full shrink-0" />
                    </div>
                  </div>
                  <span className="text-[16px] text-[#5C5C5C] font-jakarta">Current pH Level</span>
                </div>
                <div className="w-full h-16">
                  <svg viewBox="0 0 500 100" className="w-full h-full">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M0 60 C 50 40, 100 80, 150 60 C 200 40, 250 80, 300 60 C 350 40, 400 80, 450 60 L 500 60"
                      fill="none"
                      stroke="#2780C4"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Hydro-Geological Tracking */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] shadow-sm p-6 flex flex-col gap-6 group"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-bold text-[#0F2F4C] font-jakarta">Hydro-Geological Tracking</h3>
              <p className="text-[16px] leading-[1.5] text-[#5C5C5C] font-jakarta">
                Monitor deep borewell water yields and the efficiency of your custom drip-irrigation networks.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="/assets/features/hydrovid.mp4"
                  type="video/mp4"
                />
              </video>              <div className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-md rounded-full flex items-center p-2">
                <div className="w-10 h-10 bg-[#2780C4] rounded-full flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <span className="ml-3 text-[14px] font-medium text-white">
                  Active Borewells: <DynamicCounter value={2} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: GIS Boundary Management */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] shadow-sm p-6 flex flex-col gap-6 group"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-bold text-[#0F2F4C] font-jakarta">GIS Boundary Management</h3>
              <p className="text-[16px] leading-[1.5] text-[#5C5C5C] font-jakarta">
                Access permanent, geo-fenced satellite maps that define your secure legal boundaries.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="/assets/features/gis.mp4"
                  type="video/mp4"
                />
              </video>              <div className="absolute top-4 left-4 bg-white rounded-full flex items-center p-2 shadow-md pr-4">
                <div className="w-8 h-8 bg-[#2780C4] rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="ml-2 text-[14px] font-medium text-[#0F2F4C]">
                  <DynamicCounter value={5.0} decimals={1} suffix=" Acres" />
                </span>
              </div>
              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-[12px] font-medium text-[#0F2F4C] shadow-sm">Geo-Fencing: Secured</div>
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-[12px] font-medium text-[#0F2F4C] shadow-sm">Dispute Risk: Zero</div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Yield & Revenue Ledger */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] shadow-sm p-6 flex flex-col gap-6 group"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-bold text-[#0F2F4C] font-jakarta">Yield & Revenue Ledger</h3>
              <p className="text-[16px] leading-[1.5] text-[#5C5C5C] font-jakarta">
                Transform live harvest data into predictable financial insights and bi-annual payouts.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden">
              <Image src="/assets/features/yield3.4.jpg" alt="Yield" fill className="object-cover" />
              <div className="absolute inset-4 flex flex-col gap-4">
                <div className="absolute inset-4 flex flex-col gap-4">

                  {/* Harvest Card */}
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex-1 bg-white/90 backdrop-blur-md rounded-[18px] p-4 flex items-center justify-between overflow-hidden"
                  >

                    {/* Left */}
                    <div className="flex flex-col justify-center">
                      <span className="text-[12px] text-[#5C5C5C]">
                        Next Harvest:
                      </span>

                      <span className="text-[24px] font-bold text-[#0F2F4C] leading-none mt-1">
                        Nov 2026
                      </span>

                      <span className="text-[11px] text-[#5C5C5C] mt-1">
                        Red Sandalwood
                      </span>
                    </div>

                    {/* Animated Bars */}
                    <div className="flex items-end gap-[5px] h-[60px]">

                      {[40, 58, 75, 52, 90, 68, 96].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{
                            delay: 0.3 + i * 0.05,
                            duration: 0.5,
                          }}
                          viewport={{ once: true }}
                          className="w-[7px] bg-[#C5E5FF] rounded-full relative"
                        >
                          <div className="absolute top-0 w-full h-[4px] bg-[#2780C4] rounded-full" />
                        </motion.div>
                      ))}

                    </div>

                  </motion.div>

                  {/* Revenue Card */}
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex-1 bg-white/90 backdrop-blur-md rounded-[18px] p-4 flex items-center justify-between overflow-hidden"
                  >

                    {/* Left Bars */}
                    <div className="flex items-end gap-[4px] h-[60px]">

                      {[65, 40, 88, 52, 95, 70, 82, 60].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{
                            delay: 0.5 + i * 0.04,
                            duration: 0.45,
                          }}
                          viewport={{ once: true }}
                          className={`w-[6px] rounded-full ${i % 2 === 0
                            ? "bg-[#2780C4]"
                            : "bg-[#C5E5FF]"
                            }`}
                        />
                      ))}

                    </div>

                    {/* Right Text */}
                    <div className="flex flex-col items-end">

                      <span className="text-[12px] text-[#5C5C5C]">
                        Last Payout:
                      </span>

                      <span className="text-[28px] font-bold text-[#0F2F4C] leading-none mt-1">
                        <DynamicCounter
                          value={380000}
                          prefix="₹"
                        />
                      </span>

                      <span className="text-[11px] text-[#2780C4] mt-1">
                        Gross Revenue INR
                      </span>

                    </div>

                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Desktop Layout - Main Container 1440px (Visible lg+) */}
      <div className="hidden lg:block relative w-[1440px] h-[1550px] shrink-0">

        {/* Why Green Capital Title */}
        <div
          className="absolute text-center"
          style={{ width: '800px', left: 'calc(50% - 400px)', top: '0px' }}
        >
          <h2 className="text-[56px] font-bold leading-[120%] tracking-[-0.02em] text-[#0F2F4C] font-jakarta flex justify-center gap-x-4">
            {"Why Green Capital".split(" ").map((word, i) => (
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
        </div>

        {/* Description Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute text-center"
          style={{ width: '790px', left: 'calc(50% - 790px/2)', top: '95px' }}
        >
          <p className="text-[18px] leading-[140%] tracking-[-0.01em] text-[#5C5C5C] font-jakarta">
            Monitor your managed agricultural assets in real-time. Our digital ecosystem provides transparent, data-driven insights into your farm's agronomy, infrastructure, and financial yields.
          </p>
        </motion.div>

        {/* --- Card 1: Organic Soil Intelligence --- */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute bg-white rounded-[30px] shadow-sm group overflow-hidden"
          style={{ width: '720px', height: '608px', left: '96px', top: '225px' }}
        >
          <h3
            className="absolute text-[24px] font-bold text-[#0F2F4C] tracking-[-0.01em] font-jakarta"
            style={{ width: '278px', left: '28px', top: '36px' }}
          >
            Organic Soil Intelligence
          </h3>
          <p
            className="absolute text-[18px] leading-[152%] tracking-[-0.03em] text-[#5C5C5C] font-jakarta"
            style={{ width: '664px', left: '28px', top: '84px' }}
          >
            Track the chemical-to-organic conversion phase with routine soil pH and nutrient density audits for premium crop matching.
          </p>

          <div
            className="absolute overflow-hidden rounded-[30px]"
            style={{ height: '410px', left: '28px', right: '28px', top: '162px' }}
          >
            <Image
              src="/assets/features/organic3.1.jpg"
              alt="Soil" fill
              className="object-cover"
            />
            {/* Glass Graph Overlay (Frame 2147240533) */}
            <div
              className="absolute backdrop-blur-xl rounded-[30px] shadow-lg border border-white/40 overflow-hidden"
              style={{
                width: '552px', height: '346px', left: '56px', top: '32px',
                background: 'linear-gradient(98.11deg, #E9F2F8 3.71%, #FFFFFF 96.3%)'
              }}
            >
              <span className="absolute text-[64px] font-medium text-[#0F2F4C] font-jakarta" style={{ left: '27px', top: '30px' }}>
                <DynamicCounter value={6.8} decimals={1} />
              </span>
              <span className="absolute text-[20px] font-medium text-[#5C5C5C] font-jakarta" style={{ left: '29px', top: '110px' }}>
                Current pH Level:
              </span>

              {/* Live Badge (Frame 2147240539) */}
              <div className="absolute bg-[#C5E5FF] rounded-full flex items-center px-5" style={{ width: '93px', height: '42px', left: '431px', top: '30px' }}>
                <span className="text-[18px] font-medium text-[#0F2F4C] font-jakarta">Live</span>
                <span className="ml-2 w-[16px] h-[16px] bg-[#2780C4] rounded-full shrink-0" />
              </div>

              {/* Dynamic Waveform Graph (Frame 2147240536) */}
              <div className="absolute" style={{ height: '118px', left: '28px', right: '28px', top: '154px' }}>
                <svg viewBox="0 0 500 100" className="w-full h-full preserve-3d">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M0 60 C 20 40, 40 40, 60 60 C 80 80, 100 80, 120 60 C 140 40, 160 40, 180 60 C 200 80, 220 80, 240 60 C 260 40, 280 40, 300 60 C 320 80, 340 80, 360 60 C 380 40, 400 40, 420 60 C 440 80, 460 80, 480 60 L 500 60"
                    fill="none"
                    stroke="#2780C4"
                    strokeWidth="2"
                  />
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    d="M0 60 C 20 40, 40 40, 60 60 C 80 80, 100 80, 120 60 C 140 40, 160 40, 180 60 C 200 80, 220 80, 240 60 C 260 40, 280 40, 300 60 C 320 80, 340 80, 360 60 C 380 40, 400 40, 420 60 C 440 80, 460 80, 480 60 L 500 60 V 100 H 0 Z"
                    fill="url(#soilGradientRefined)"
                  />
                  <defs>
                    <linearGradient id="soilGradientRefined" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C5E5FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#C5E5FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute flex gap-2 font-medium" style={{ left: '47px', top: '296px' }}>
                <span className="text-[20px] text-[#5C5C5C] font-jakarta">Latest Audit:</span>
                <span className="text-[20px] text-[#0F2F4C] font-jakarta">Cleared (Oct 2025)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Card 2: Hydro-Geological Tracking --- */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute bg-white rounded-[30px] shadow-sm group overflow-hidden"
          style={{ width: '500px', height: '608px', left: '844px', top: '225px' }}
        >
          <h3
            className="absolute text-[24px] font-bold text-[#0F2F4C] tracking-[-0.01em] font-jakarta"
            style={{ width: '312px', left: '28px', top: '36px' }}
          >
            Hydro-Geological Tracking
          </h3>
          <p
            className="absolute text-[18px] leading-[152%] tracking-[-0.03em] text-[#5C5C5C] font-jakarta"
            style={{ width: '444px', left: '28px', top: '84px' }}
          >
            Monitor deep borewell water yields and the efficiency of your custom drip-irrigation networks.
          </p>
          <div
            className="absolute overflow-hidden rounded-[30px]"
            style={{ height: '410px', left: '28px', right: '28px', top: '162px' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="/assets/features/hydrovid.mp4"
                type="video/mp4"
              />
            </video>
            {/* Active Borewells Badge (Frame 2147240510) */}
            <div
              className="absolute bg-black/16 backdrop-blur-md rounded-full flex items-center px-2"
              style={{ width: '229px', height: '52px', left: '96px', top: '310px' }}
            >
              <div className="w-[36px] h-[36px] bg-[#2780C4] rounded-full flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="ml-3 text-[16px] font-medium text-white font-jakarta">
                Active Borewells: <DynamicCounter value={2} />
              </span>
            </div>
          </div>
        </motion.div>

        {/* --- Card 3: GIS Boundary Management --- */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bg-white rounded-[30px] shadow-sm group overflow-hidden"
          style={{ width: '540px', height: '610px', left: '96px', top: '861px' }}
        >
          <h3
            className="absolute text-[24px] font-bold text-[#0F2F4C] tracking-[-0.01em] font-jakarta"
            style={{ width: '314px', left: '28px', top: '36px' }}
          >
            GIS Boundary Management
          </h3>
          <p
            className="absolute text-[18px] leading-[152%] tracking-[-0.03em] text-[#5C5C5C] font-jakarta"
            style={{ width: '484px', left: '28px', top: '84px' }}
          >
            Access permanent, geo-fenced satellite maps that define your secure legal boundaries and plantation zones.
          </p>
          <div
            className="absolute overflow-hidden rounded-[30px]"
            style={{ height: '412px', left: '28px', right: '28px', top: '162px' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="/assets/features/gis.mp4"
                type="video/mp4"
              />
            </video>
            {/* Total Area Badge */}
            <div
              className="absolute bg-white rounded-full flex items-center px-2 shadow-md"
              style={{ width: '233px', height: '52px', left: '126px', top: '64px' }}
            >
              <div className="w-[36px] h-[36px] bg-[#2780C4] rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="ml-3 text-[16px] font-medium text-[#0F2F4C] font-jakarta">
                Total Area: <DynamicCounter value={5.0} decimals={1} suffix=" Acres" />
              </span>
            </div>
            {/* Dispute Risk Badge */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bg-white rounded-full px-4 py-2 shadow-sm text-[12.7px] font-medium text-[#0F2F4C] font-jakarta whitespace-nowrap"
              style={{ left: '280px', top: '206px' }}
            >
              Dispute Risk: Zero / Cleared
            </motion.div>
            {/* Geo-Fencing Badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bg-white rounded-full px-4 py-2 shadow-sm text-[12.7px] font-medium text-[#0F2F4C] font-jakarta whitespace-nowrap"
              style={{ left: '28px', top: '270.91px' }}
            >
              Geo-Fencing: 100% Secured
            </motion.div>
          </div>
        </motion.div>

        {/* --- Card 4: Yield & Revenue Ledger --- */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bg-white rounded-[30px] shadow-sm group overflow-hidden"
          style={{ width: '680px', height: '610px', left: '664px', top: '861px' }}
        >
          <h3
            className="absolute text-[24px] font-bold text-[#0F2F4C] tracking-[-0.01em] font-jakarta"
            style={{ width: '270px', left: '28px', top: '36px' }}
          >
            Yield & Revenue Ledger
          </h3>
          <p
            className="absolute text-[18px] leading-[152%] tracking-[-0.03em] text-[#5C5C5C] font-jakarta"
            style={{ width: '624px', left: '28px', top: '84px' }}
          >
            Transform live harvest data into predictable financial insights, tracking your bi-annual payouts and 50/50 organic profit splits.
          </p>
          <div
            className="absolute overflow-hidden rounded-[30px]"
            style={{ height: '412px', left: '28px', right: '28px', top: '162px' }}
          >
            <Image
              src="/assets/features/yield3.4.jpg"
              alt="Yield" fill
              className="object-cover"
            />

            {/* Est. Harvest Overlay (Frame 2147240533) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bg-gradient-to-br from-[#F6F6F6] to-white rounded-[30px] shadow-lg border border-white/20 p-8 flex items-center justify-between"
              style={{ width: '512px', height: '166px', left: '56px', top: '32px' }}
            >
              <div className="flex flex-col">
                <span className="text-[20px] font-medium text-[#0F2F4C] font-jakarta">Est. Harvest:</span>
                <span className="text-[44px] font-bold text-[#0F2F4C] font-jakarta leading-tight">Nov 2026</span>
                <span className="text-[16px] font-medium text-[#5C5C5C] font-jakarta">Current Crop: Red Sandalwood</span>
              </div>
              <div className="flex items-end gap-[10px]">
                {[40, 66, 86, 100, 74, 82, 96, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}px` }}
                    transition={{ delay: 0.6 + (i * 0.05), duration: 0.5 }}
                    className="w-[10px] bg-[#C5E5FF] rounded-full relative"
                  >
                    <div className="absolute top-0 w-full h-[5px] bg-[#2780C4] rounded-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Last Payout Overlay (Match Attached Image) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bg-white rounded-[30px] shadow-lg overflow-hidden flex items-center"
              style={{ width: '512px', height: '166px', left: '56px', top: '214px' }}
            >
              {/* Bars on the Left */}
              <div className="flex items-end gap-[8px] pl-8 h-[100px]">
                {[60, 40, 75, 55, 85, 45, 95, 65, 80, 50, 90, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + (i * 0.04), duration: 0.5 }}
                    className={`w-[12px] rounded-full ${i % 2 === 0 ? 'bg-[#2780C4]' : 'bg-[#C5E5FF]'}`}
                  />
                ))}
              </div>

              {/* Text on the Right */}
              <div className="flex-1 flex flex-col items-center justify-center pr-4">
                <span className="text-[20px] text-[#0F2F4C] font-jakarta font-normal">Last Payout:</span>
                <span className="text-[44px] font-bold text-[#0F2F4C] font-jakarta tracking-tight leading-none my-1">
                  <DynamicCounter value={380000} prefix="₹" />
                </span>
                <span className="text-[18px] text-[#5C5C5C] font-jakarta">Gross Revenue INR</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
