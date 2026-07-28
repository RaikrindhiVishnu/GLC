"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function TransformingLegacyGallery() {
  const scalerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const targetWidth = 1260;
      const currentScale = vw < targetWidth ? vw / targetWidth : 1;
      if (scalerRef.current) {
        scalerRef.current.style.transform = `scale(${currentScale})`;
      }
      if (shellRef.current) {
        shellRef.current.style.height = `${318 * currentScale}px`;
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ width: "100%", overflow: "hidden", boxSizing: "border-box" }}
    >

      {/* ══════════════════════════════════════════════ */}
      {/* MOBILE LAYOUT (< lg)                          */}
      {/* ══════════════════════════════════════════════ */}
      <div className="hidden w-full py-10 flex-col gap-8">
        {/* Title */}
        <h2 className="m-0 font-jakarta font-extrabold text-[22px] text-[#001F3F] text-center flex flex-wrap justify-center gap-x-2 px-4">
          {"Transforming Land into Legacy".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Horizontal scroll gallery */}
        <div
          className="flex gap-4 w-full overflow-x-auto pb-4 pl-4 sm:pl-6 pr-4 sm:pr-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Action tile: Involve */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            style={{ width: "160px", height: "138px", flexShrink: 0 }}
          >
            <img src="/assets/premium/Frame 1000011653.svg" alt="Involve" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </motion.div>

          {/* Photo 2 */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{ position: "relative", width: "200px", height: "160px", flexShrink: 0 }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "81px", borderRadius: "20px", overflow: "hidden" }}>
              <img src="/assets/search/image2.4.svg" alt="Farmland high angle view" style={{ position: "absolute", top: 0, left: 0, width: "200px", height: "160px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "81px", borderRadius: "20px", overflow: "hidden" }}>
              <img src="/assets/search/image2.4.svg" alt="Farmland high angle view" style={{ position: "absolute", top: "-80px", left: 0, width: "200px", height: "160px", objectFit: "cover", display: "block" }} />
            </div>
          </motion.div>

          {/* Tall tower photo */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            style={{ position: "relative", width: "160px", height: "260px", flexShrink: 0 }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "131px", borderRadius: "40px", overflow: "hidden" }}>
              <img src="/assets/search/image3.3.svg" alt="Golden premium yielding view" style={{ position: "absolute", top: 0, left: 0, width: "160px", height: "260px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "131px", borderRadius: "40px", overflow: "hidden" }}>
              <img src="/assets/search/image3.3.svg" alt="Golden premium yielding view" style={{ position: "absolute", top: "-130px", left: 0, width: "160px", height: "260px", objectFit: "cover", display: "block" }} />
            </div>
          </motion.div>

          {/* Photo 4 */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            style={{ position: "relative", width: "200px", height: "160px", flexShrink: 0 }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "81px", borderRadius: "20px", overflow: "hidden" }}>
              <img src="/assets/search/image2.6.svg" alt="Agronomy ongoing working harvest" style={{ position: "absolute", top: 0, left: 0, width: "200px", height: "160px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "81px", borderRadius: "20px", overflow: "hidden" }}>
              <img src="/assets/search/image2.6.svg" alt="Agronomy ongoing working harvest" style={{ position: "absolute", top: "-80px", left: 0, width: "200px", height: "160px", objectFit: "cover", display: "block" }} />
            </div>
          </motion.div>

          {/* Action tile: Impact */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32 }}
            style={{ width: "160px", height: "138px", flexShrink: 0 }}
          >
            <img src="/assets/premium/Frame 1000011385.svg" alt="Impact" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════ */}
      {/* DESKTOP LAYOUT (>= lg)                        */}
      {/* ══════════════════════════════════════════════ */}
      <div className="hidden lg:flex flex-col items-center" style={{ margin: "80px 0", gap: "48px" }}>
      <h2
        className="m-0 font-jakarta font-extrabold text-[28px] md:text-[36px] text-[#001F3F] text-center flex flex-wrap justify-center gap-x-2"
      >
        {"Transforming Land into Legacy".split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Gallery Carousel Array */}
      <div 
        ref={shellRef} 
        style={{ 
          position: "relative", 
          width: "1164px", 
          maxWidth: "100%", 
          height: "318px",
          flexShrink: 0 
        }}
      >
        <div
          ref={scalerRef}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: "-545px", // width is ~1090px, so margin -545
            width: "1090px",
            height: "318px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px", // Accurate Figma gap
            boxSizing: "border-box",
          }}
        >
          {/* Card 1: Action Trigger "Involve" */}
          <div
            style={{
              width: "170px",
              height: "138px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img src="/assets/premium/Frame 1000011653.svg" alt="Involve" style={{ width: "100%", height: "100%", display: "block" }} />
          </div>

          {/* Photo Block 2: Left Image */}
          <div style={{ position: "relative", width: "256px", height: "193px", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "97px", borderRadius: "28px", overflow: "hidden" }}>
              <img src="/assets/search/image2.4.svg" alt="Farmland high angle view" style={{ position: "absolute", top: 0, left: 0, width: "256px", height: "193px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "97px", borderRadius: "28px", overflow: "hidden" }}>
              <img src="/assets/search/image2.4.svg" alt="Farmland high angle view" style={{ position: "absolute", top: "-96.5px", left: 0, width: "256px", height: "193px", objectFit: "cover", display: "block" }} />
            </div>
          </div>

          {/* Focal Vertical Tower Photo Block 3 */}
          <div style={{ position: "relative", width: "220px", height: "318px", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "160px", borderRadius: "52px", overflow: "hidden" }}>
              <img src="/assets/search/image3.3.svg" alt="Golden premium yielding view" style={{ position: "absolute", top: 0, left: 0, width: "220px", height: "318px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "160px", borderRadius: "52px", overflow: "hidden" }}>
              <img src="/assets/search/image3.3.svg" alt="Golden premium yielding view" style={{ position: "absolute", top: "-159px", left: 0, width: "220px", height: "318px", objectFit: "cover", display: "block" }} />
            </div>
          </div>

          {/* Photo Block 4: Right Image */}
          <div style={{ position: "relative", width: "252px", height: "193px", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "97px", borderRadius: "28px", overflow: "hidden" }}>
              <img src="/assets/search/image2.6.svg" alt="Agronomy ongoing working harvest" style={{ position: "absolute", top: 0, left: 0, width: "252px", height: "193px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "97px", borderRadius: "28px", overflow: "hidden" }}>
              <img src="/assets/search/image2.6.svg" alt="Agronomy ongoing working harvest" style={{ position: "absolute", top: "-96.5px", left: 0, width: "252px", height: "193px", objectFit: "cover", display: "block" }} />
            </div>
          </div>

          {/* Card 5: Action Trigger "Impact" */}
          <div
            style={{
              width: "170px",
              height: "138px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img src="/assets/premium/Frame 1000011385.svg" alt="Impact" style={{ width: "100%", height: "100%", display: "block" }} />
          </div>
        </div>
      </div>
      </div>{/* end desktop wrapper */}
    </motion.section>
  );
}
