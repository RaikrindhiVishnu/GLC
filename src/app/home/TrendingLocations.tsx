"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const locations = [
  { id: "loc-tanuku", name: "Tanuku", img: "/assets/home/TrendingLocations/tanuku.svg" },
  { id: "loc-bhimavaram", name: "Bhimavaram", img: "/assets/home/TrendingLocations/bhimavaram.svg" },
  { id: "loc-rajahmundry", name: "Rajahmundary", img: "/assets/home/TrendingLocations/rajamudry.svg" },
  { id: "loc-vizag", name: "Vizag", img: "/assets/home/TrendingLocations/vizag.svg" },
];

export default function TrendingLocations() {
  return (
    <section id="trending-locations" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">

      {/* Header — constrained to page margin */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-jakarta font-extrabold text-[20px] md:text-[24px] leading-[1.2] text-brand-primary m-0 flex gap-x-1.5">
            {"Top Selling Locations".split(" ").map((word, i) => (
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
          <button className="bg-transparent border-none font-jakarta font-extrabold text-[14px] md:text-[18px] leading-10 text-brand-primary cursor-pointer [-webkit-tap-highlight-color:transparent] hover:opacity-70 transition-opacity">
            View All
          </button>
        </div>
      </div>

      {/* Cards — full-width scroll container matching PopularFarmlands layout */}
      <div className="flex lg:grid lg:grid-cols-4 gap-6.5 lg:gap-6 w-full overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc((100vw-1280px)/2+32px)] pr-4 sm:pr-6 lg:pr-8">
        <style dangerouslySetInnerHTML={{ __html: `
          #trending-locations .hide-scrollbar::-webkit-scrollbar { display: none; }
          #trending-locations .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        {locations.map((loc, i) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative w-57.5 h-57.5 sm:w-67.5 sm:h-67.5 lg:w-full lg:h-auto lg:aspect-square min-w-57.5 sm:min-w-67.5 lg:min-w-0 rounded-3xl lg:rounded-4xl overflow-hidden cursor-pointer shrink-0 box-border group"
          >
            {/* Image + Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent z-10" />
            <Image
              src={loc.img}
              alt={loc.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Location Name */}
            <div className="absolute left-5 bottom-6 z-20 font-jakarta font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-7 text-white">
              {loc.name}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
