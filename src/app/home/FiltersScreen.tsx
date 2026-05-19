"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const filterButtons = [
  {
    id: "search-farmland",
    label: "Search for Farmland",
    icon: "/assets/home/FiltersScreen/Icons.svg",
    width: 50,
    height: 46.65,
  },
  {
    id: "pool-buying",
    label: "Pool Buying",
    icon: "/assets/home/FiltersScreen/Icons (1).svg",
    width: 47,
    height: 47,
  },
  {
    id: "my-assets",
    label: "My Assets",
    icon: "/assets/home/FiltersScreen/Icons (2).svg",
    width: 61,
    height: 47,
  },
  {
    id: "verification-farmland",
    label: "Verification of farmland",
    icon: "/assets/home/FiltersScreen/Icons (3).svg",
    width: 43,
    height: 47,
  },
  {
    id: "maintenance-farmland",
    label: "Maintainence of farmland",
    icon: "/assets/home/FiltersScreen/Icons (4).svg",
    width: 45,
    height: 46.6,
  },
  {
    id: "sell-land",
    label: "Sell your land",
    icon: "/assets/home/FiltersScreen/Icons (5).svg",
    width: 47,
    height: 47,
  },
];

export default function FiltersScreen() {
  const router = useRouter();

  return (
    <section id="filters-section" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-6">
          {filterButtons.map((btn, i) => (
            <motion.button
              key={btn.id}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => {
                if (btn.id === "pool-buying") {
                  router.push("/pool-buying");
                } else if (btn.id === "search-farmland") {
                  router.push("/search");
                } else if (btn.id === "my-assets") {
                  router.push("/home/myassets");
                } else if (btn.id === "verification-farmland") {
                  router.push("/home/verification");
                } else if (btn.id === "maintenance-farmland") {
                  router.push("/home/maintenance");
                } else if (btn.id === "sell-land") {
                  router.push("/home/sellyourland");
                }
              }}
              className="flex flex-col justify-center items-center p-4 xl:p-6 gap-4 xl:gap-6 w-full aspect-square lg:aspect-auto lg:h-[180px] bg-white rounded-[24px] lg:rounded-[32px] border border-[#E5E7EB] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_15px_rgba(0,0,0,0.05)] cursor-pointer [-webkit-tap-highlight-color:transparent]"
            >
              <div
                style={{ width: `${btn.width}px`, height: `${btn.height}px` }}
                className="relative flex justify-center items-center shrink-0 animate-pulse-slow"
              >
                <Image src={btn.icon} alt={btn.label} fill className="object-contain" priority />
              </div>
              <div className="w-full font-jakarta font-bold text-[13px] xl:text-[14px] leading-[18px] lg:leading-[20px] text-center tracking-[0.5px] xl:tracking-[1px] capitalize text-[#45474C]">
                {btn.label}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
