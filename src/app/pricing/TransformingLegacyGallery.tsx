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
            style={{ width: "140px", height: "160px", flexShrink: 0, borderRadius: "20px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}
          >
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: "2px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "15px", color: "#FFFFFF" }}>Involve</span>
          </motion.div>

          {/* Photo 2 */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{ width: "200px", height: "160px", flexShrink: 0, borderRadius: "20px", overflow: "hidden" }}
          >
            <img src="/assets/search/image2.4.svg" alt="Farmland high angle view" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </motion.div>

          {/* Tall tower photo */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            style={{ width: "160px", height: "260px", flexShrink: 0, borderRadius: "32px", overflow: "hidden", border: "3px solid #FFFFFF" }}
          >
            <img src="/assets/search/image3.3.svg" alt="Golden premium yielding view" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </motion.div>

          {/* Photo 4 */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            style={{ width: "200px", height: "160px", flexShrink: 0, borderRadius: "20px", overflow: "hidden" }}
          >
            <img src="/assets/search/image2.6.svg" alt="Agronomy ongoing working harvest" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </motion.div>

          {/* Action tile: Impact */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32 }}
            style={{ width: "140px", height: "160px", flexShrink: 0, borderRadius: "20px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}
          >
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: "2px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "15px", color: "#FFFFFF" }}>Impact</span>
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
            marginLeft: "-582px",
            width: "1164px",
            height: "318px",
            transformOrigin: "top center",
            willChange: "transform",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            boxSizing: "border-box",
          }}
        >
          {/* Card 1: Action Trigger "Involve" */}
          <div
            style={{
              width: "170px",
              height: "138px",
              borderRadius: "20px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "2px solid #FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", letterSpacing: "0.5px" }}>
              Involve
            </span>
          </div>

          {/* Photo Block 2 */}
          <div
            style={{
              width: "256px",
              height: "193px",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
              background: "#FFFFFF",
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/search/image2.4.svg"
              alt="Farmland high angle view"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Focal Vertical Tower Photo Block 3 */}
          <div
            style={{
              width: "220px",
              height: "318px",
              borderRadius: "52px",
              overflow: "hidden",
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.18)",
              border: "4px solid #FFFFFF",
              background: "#FFFFFF",
              boxSizing: "border-box",
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/search/image3.3.svg"
              alt="Golden premium yielding view"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Photo Block 4 */}
          <div
            style={{
              width: "252px",
              height: "193px",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
              background: "#FFFFFF",
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/search/image2.6.svg"
              alt="Agronomy ongoing working harvest"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Card 5: Action Trigger "Impact" */}
          <div
            style={{
              width: "170px",
              height: "138px",
              borderRadius: "20px",
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #001F3F 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "2px solid #FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", letterSpacing: "0.5px" }}>
              Impact
            </span>
          </div>
        </div>
      </div>
      </div>{/* end desktop wrapper */}
    </motion.section>
  );
}
