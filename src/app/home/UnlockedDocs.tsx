"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useGetUserUnlockedFarmlandsQuery } from "../../services/unlocked";
import { BadgeCheck } from "lucide-react";

export default function UnlockedDocs() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [userId, setUserId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);

  const { data: res, isLoading: isQueryLoading } = useGetUserUnlockedFarmlandsQuery(
    { userId: userId || 0 },
    { skip: !mounted || !userId }
  );

  const isLoading = !mounted || isQueryLoading;
  const documents = res?.data || [];

  // Drag scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragged, setDragged] = useState(false);

  // Click-and-drag scrolling handlers
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
    const walk = (x - startX) * 2.0; // Responsive drag velocity multiplier

    if (Math.abs(walk) > 5) {
      setDragged(true);
    }
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    router.push("/home/unlockeddocuments");
  };

  return (
    <section
      className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden box-border"
    >
      <div className="w-full flex flex-col gap-6 md:gap-8 box-border">
        {/* Header */}
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-4 md:px-[60px]">
          <h2 className="m-0 font-jakarta font-bold text-[20px] md:text-[24px] leading-[32px] text-[#0F2F4C] flex gap-x-[6px] items-center">
            {"Unlocked Docs".split(" ").map((word, i) => (
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
          <button
            onClick={() => router.push("/home/unlockeddocuments")}
            className="bg-none border-none font-jakarta font-bold text-[14px] md:text-[18px] leading-[32px] text-[#0F2F4C] cursor-pointer p-0 flex items-center hover:opacity-75 transition-opacity [-webkit-tap-highlight-color:transparent]"
          >
            View All
          </button>
        </div>

        {/* Scrollable Container (Drag-to-Scroll) */}
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[60px]">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex flex-nowrap gap-[24px] w-full overflow-x-auto pb-2 hide-scrollbar select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
          >
          <style dangerouslySetInnerHTML={{
            __html: `
            #unlocked-docs .hide-scrollbar::-webkit-scrollbar { display: none; }
            #unlocked-docs .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />

          {isLoading ? (
            <div className="flex justify-center items-center w-full h-[240px]">
              <span className="font-jakarta text-[#0F2F4C]">Loading documents...</span>
            </div>
          ) : documents.length === 0 ? (
            <div className="flex justify-center items-center w-full h-[240px]">
              <span className="font-jakarta text-[#0F2F4C]">No unlocked documents found.</span>
            </div>
          ) : (
            documents.map((doc, i) => (
              <motion.div
                key={doc.farmland_id}
                initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={handleCardClick}
                className="box-border flex flex-col justify-center items-center p-6 w-[210px] h-[240px] min-w-[210px] bg-white border border-[#EDEEEF] rounded-[40px] cursor-pointer shrink-0 pointer-events-auto"
              >
                {/* PDF Icon Container */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(255, 218, 216, 0.4)",
                    backdropFilter: "blur(2px)",
                    borderRadius: "9999px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "24px",
                  }}
                  className="pointer-events-none"
                >
                  <Image
                    src="/assets/home/UnlockedDocs/pdf.svg"
                    alt="PDF"
                    width={26}
                    height={26}
                  />
                </div>

                {/* Text Content */}
                <div
                  style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px" }}
                  className="pointer-events-none"
                >

                  {/* Heading 3 */}
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#001F3F",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    {doc.farm_code}
                  </h3>

                  {/* Status Badge Container */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "2px 0px 0px",
                      gap: "8px",
                      width: "100%",
                      height: "auto"
                    }}
                  >
                    <BadgeCheck size={14} color="#006D37" style={{ flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "11px",
                        lineHeight: "16px",
                        letterSpacing: "1.2px",
                        color: "#006D37",
                        display: "flex",
                        alignItems: "center",
                        width: "auto",
                        height: "auto",
                      }}
                    >
                      VERIFIED
                    </span>
                  </div>

                  {/* Date Container */}
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "11px",
                      lineHeight: "16px",
                      letterSpacing: "0.3px",
                      color: "#43474E",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </motion.div>
            ))
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
