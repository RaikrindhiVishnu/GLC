"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const comparisonData = [
  {
    id: "comp-1",
    plots: [
      {
        title: "GLC SOS 01",
        location: "Vizag, Andhra Pradesh",
        img: "/assets/home/CompareAssets/compare1.svg",
        soil: "Red Sandy Loam",
        ph: "pH Level: 6.8 (Optimal)",
        yield: "5.2",
      },
      {
        title: "GLC SOS 02",
        location: "Guntur, Andhra Pradesh",
        img: "/assets/home/CompareAssets/compare2.svg",
        soil: "Black Cotton Soil",
        ph: "pH Level: 7.4 (Alkaline)",
        yield: "7.8",
      }
    ]
  },
  {
    id: "comp-2",
    plots: [
      {
        title: "WHEAT RIDGE X",
        location: "Srikakulam, A.P",
        img: "/assets/home/CompareAssets/compare3.svg",
        soil: "Alluvial Soil",
        ph: "pH Level: 7.0 (Neutral)",
        yield: "6.5",
      },
      {
        title: "PALM GROVE",
        location: "Nellore, A.P",
        img: "/assets/home/CompareAssets/compare4.svg",
        soil: "Laterite Soil",
        ph: "pH Level: 6.2 (Acidic)",
        yield: "4.9",
      }
    ]
  }
];

export default function CompareAssets() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragged, setDragged] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2.0;
    if (Math.abs(walk) > 5) setDragged(true);
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section id="compare-assets" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">

      {/* Header — constrained to page margin */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-8">
        <div className="flex flex-col gap-2">
          <span className="font-jakarta font-bold text-[10px] md:text-[12px] leading-[16px] tracking-[2.4px] uppercase text-[#0F2F4C]">
            Portfolio Intelligence
          </span>
          <h2 className="m-0 font-jakarta font-extrabold text-[24px] md:text-[32px] leading-[1.2] tracking-[-1px] text-[#0F2F4C] flex flex-wrap gap-x-[6px]">
            {"Compare Premium Assets".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>

      {/* Cards — full-width with asymmetric padding so they bleed to viewport edge */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex gap-6 lg:gap-12 w-full overflow-x-auto pb-4 hide-scrollbar pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc((100vw-1280px)/2+32px)] pr-4 sm:pr-6 lg:pr-8 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          #compare-assets .hide-scrollbar::-webkit-scrollbar { display: none; }
          #compare-assets .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
            
            {comparisonData.map((comp, i) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={handleCardClick}
                className="flex-shrink-0 w-[300px] sm:w-[480px] lg:w-[730px] min-h-[500px] lg:min-h-[695px] bg-white rounded-[32px] lg:rounded-[48px] border border-[#EDEEEF] p-4 sm:p-6 lg:p-[48px] box-border relative flex flex-col gap-6 lg:gap-[32px] pb-25 lg:pb-35"
              >
                {/* Top Previews Row */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-[24px]">
                  {comp.plots.map((plot, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-white border border-[#EDEEEF] rounded-[24px] lg:rounded-[32px] p-4 lg:p-[20px] flex flex-col gap-3 lg:gap-[12px] box-border"
                    >
                      <div className="relative w-full h-[120px] lg:h-[176px] rounded-[16px] overflow-hidden shrink-0">
                        <Image src={plot.img} alt={plot.title} fill className="object-cover" />
                        <div className="absolute top-3 left-3 px-3 py-1 bg-white/85 backdrop-blur-md rounded-full flex items-center gap-1">
                          <div className="w-2 h-2 bg-[#006D37] rounded-full shrink-0" />
                          <span className="font-jakarta font-bold text-[8px] lg:text-[10px] text-[#006D37] uppercase">Verified</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="m-0 font-jakarta font-bold text-[16px] lg:text-[18px] text-[#001F3F]">{plot.title}</h3>
                        <p className="m-0 mt-1 font-jakarta font-normal text-[12px] lg:text-[14px] text-[#43474E]">{plot.location}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comparison Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[40px] px-2 lg:px-[8px]">
                  {/* Soil Row */}
                  <div className="flex flex-col gap-1">
                    <span className="font-jakarta font-normal text-[16px] lg:text-[18px] text-[#43474E]">{comp.plots[0].soil}</span>
                    <span className="font-jakarta font-normal text-[10px] lg:text-[12px] text-[#43474E]/60">{comp.plots[0].ph}</span>
                  </div>
                  <div className="hidden sm:flex flex-col gap-1">
                    <span className="font-jakarta font-normal text-[16px] lg:text-[18px] text-[#43474E]">{comp.plots[1].soil}</span>
                    <span className="font-jakarta font-normal text-[10px] lg:text-[12px] text-[#43474E]/60">{comp.plots[1].ph}</span>
                  </div>

                  {/* Yield Row */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-jakarta font-bold text-[20px] lg:text-[24px] text-[#001F3F]">{comp.plots[0].yield}</span>
                    <span className="font-jakarta font-medium text-[12px] lg:text-[14px] text-[#43474E]">Crores</span>
                  </div>
                  <div className="hidden sm:flex items-baseline gap-1">
                    <span className="font-jakarta font-bold text-[20px] lg:text-[24px] text-[#001F3F]">{comp.plots[1].yield}</span>
                    <span className="font-jakarta font-medium text-[12px] lg:text-[14px] text-[#43474E]">Crores</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="absolute bottom-6 lg:bottom-[48px] left-1/2 -translate-x-1/2 w-[90%] sm:w-[345px]">
                  <button
                    onClick={() => router.push("/home/compareassets")}
                    className="w-full h-[48px] lg:h-[52px] bg-[radial-gradient(50%_50%_at_50%_50%,#2780C4_0%,#164573_100%)] border-2 border-[#2780C4] rounded-full font-jakarta font-bold text-[12px] text-white uppercase tracking-[1px] cursor-pointer "
                  >
                    View Comparison
                  </button>
                </div>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
