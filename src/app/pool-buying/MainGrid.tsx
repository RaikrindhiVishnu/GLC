"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface MainGridProps {
  onSelectPool: (poolId: string) => void;
}

const pools = [
  {
    id: "pool-1",
    image: "/assets/poolinvestments/Project Genesis Zaheerabad.svg",
    badge: "CLOSING SOON",
    badgeBg: "#BA1A1A",
    badgeColor: "#FFFFFF",
    title: "GLC SOS 01",
    location: "Telangana, India • GIS Verified",
    seats: "3/4 Seats Funded",
    remaining: "Remaining: ₹1.25 Cr",
    progress: 75,
    assetValue: "₹5.00 Cr",
    sharePrice: "₹25.00 L",
    returnsModel: "Lease + Yield",
    returnsColor: "#2780C4",
  },
  {
    id: "pool-2",
    image: "/assets/poolinvestments/Container (10).svg",
    badge: "NEW ADDITION",
    badgeBg: "#D7EE44",
    badgeColor: "#0F2F4C",
    title: "GLC SOS 02",
    location: "Andhra Pradesh, India • Managed Agro-Forestry",
    seats: "1/4 Seats Funded",
    remaining: "Remaining: ₹10.8 Cr",
    progress: 25,
    assetValue: "₹12.0 Cr",
    sharePrice: "₹30.0 L",
    returnsModel: "Asset Appreciation",
    returnsColor: "#2780C4",
  },
];

function PoolCard({ pool, delay }: { pool: typeof pools[0]; delay: number }) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ background: "#FFFFFF", boxShadow: "0px 8px 40px rgba(9,20,38,0.04)", borderRadius: "32px", overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "default" }}
      className="lg:rounded-[48px]"
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0px 20px 50px rgba(9,20,38,0.12)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0px 8px 40px rgba(9,20,38,0.04)"; }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: "100%", height: "220px", flexShrink: 0 }} className="sm:h-64">
        <img src={pool.image} alt={pool.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: "16px", right: "16px", background: pool.badgeBg, borderRadius: "9999px", padding: "6px 16px", zIndex: 1 }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.6px", textTransform: "uppercase", color: pool.badgeColor, whiteSpace: "nowrap" }}>{pool.badge}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }} className="lg:p-8">
        <div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "22px", color: "#0F2F4C", display: "block", marginBottom: "6px" }}>{pool.title}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="10" height="12" viewBox="0 0 24 24" fill="#2780C4"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "13px", color: "#45474C" }}>{pool.location}</span>
          </div>
        </div>

        {/* Progress */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>{pool.seats}</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#45474C" }}>{pool.remaining}</span>
          </div>
          <div style={{ width: "100%", height: "8px", background: "#EDEEEF", borderRadius: "9999px", overflow: "hidden" }}>
            <div style={{ width: `${pool.progress}%`, height: "100%", background: "linear-gradient(90deg, #2780C4 0%, #93C5FD 100%)", borderRadius: "9999px" }} />
          </div>
        </div>

        {/* Financials */}
        <div style={{ background: "#F3F4F5", borderRadius: "24px", padding: "14px 16px", display: "flex", justifyContent: "space-between" }}>
          {[
            { label: "ASSET VALUE", value: pool.assetValue, color: "#0F2F4C" },
            { label: "SHARE PRICE", value: pool.sharePrice, color: "#0F2F4C" },
            { label: "RETURNS MODEL", value: pool.returnsModel, color: pool.returnsColor },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase", color: "#45474C" }}>{item.label}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: item.color }}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => router.push("/pool-buying/pooldetails")}
          style={{ width: "100%", height: "52px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "32px", border: "none", cursor: "pointer", boxShadow: "0px 8px 16px rgba(39,128,196,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "-0.4px", textTransform: "uppercase", color: "#FFFFFF", transition: "opacity 0.2s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View Pool Details
        </button>
      </div>
    </motion.div>
  );
}

export default function MainGrid({ onSelectPool }: MainGridProps) {
  return (
    <section style={{ width: "100%", maxWidth: "1280px", margin: "60px auto 80px", padding: "0 16px", boxSizing: "border-box" }} className="lg:px-8 lg:mt-24 lg:mb-24">
      <motion.h2
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "28px", color: "#0F2F4C", marginBottom: "32px" }}
        className="lg:text-[36px]"
      >
        Live Pool Investments
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {pools.map((pool, i) => (
          <PoolCard key={pool.id} pool={pool} delay={i * 0.12} />
        ))}
      </div>
    </section>
  );
}
