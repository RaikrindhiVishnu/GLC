"use client";

import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useGetFacilitiesByFarmlandIdQuery } from "@/services/farmland";
import { Suspense } from "react";

export default function CompareAssetsPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <span className="font-jakarta text-[#0F2F4C]">Loading Compare Assets...</span>
      </div>
    }>
      <CompareAssetsContent />
    </Suspense>
  );
}

function CompareAssetsContent() {
  const router = useRouter();
    const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchParams = useSearchParams();
  const id1 = searchParams.get('id1') || "101"; // Default for testing/preview
  const id2 = searchParams.get('id2') || "102";

  const { data: res1, isLoading: loading1 } = useGetFacilitiesByFarmlandIdQuery({ farmland_id: parseInt(id1, 10) });
  const { data: res2, isLoading: loading2 } = useGetFacilitiesByFarmlandIdQuery({ farmland_id: parseInt(id2, 10) });

  const data1 = res1 || {} as any;
  const data2 = res2 || {} as any;

  const farmCode1 = data1.farm_code || "GLC SOS 01";
  const farmCode2 = data2.farm_code || "GLC SOS 02";
  
  const price1 = data1.price ? `₹${(data1.price/100000).toFixed(2)} L` : "₹1.20 Cr";
  const price2 = data2.price ? `₹${(data2.price/100000).toFixed(2)} L` : "₹85.00 L";
  const acres1 = data1.acers ? `${data1.acers} Acres` : "5.0 Acres";
  const acres2 = data2.acers ? `${data2.acers} Acres` : "2.5 Acres";

  const KEY_FEATURES = [
    { 
      label: "ENERGY ACCESS", icon: "energyaccess.svg", 
      a: data1.electricity?.is_3phase ? "3-Phase Industrial Grid" : (data1.electricity?.is_2phase ? "2-Phase Grid" : "Solar-Ready Infrastructure"), 
      b: data2.electricity?.is_3phase ? "3-Phase Industrial Grid" : (data2.electricity?.is_2phase ? "2-Phase Grid" : "Solar-Ready Infrastructure") 
    },
    { 
      label: "HYDRAULIC DEPTH", icon: "hydraulicdepth.svg", 
      a: data1.water?.is_bore ? "Borewell 100m" : "Canal Access", 
      b: data2.water?.is_bore ? "Borewell 100m" : "Canal Access" 
    },
    { 
      label: "LAST MILE", icon: "lastmile.svg", 
      a: data1.road_appoarch?.road_width ? `${data1.road_appoarch.road_width}ft Road` : "40ft Black Top", 
      b: data2.road_appoarch?.road_width ? `${data2.road_appoarch.road_width}ft Road` : "Gravel Approach" 
    },
  ];

  const CONNECTIVITY = [
      { 
        label: "NEAREST RAILWAY", labelA: "NEAREST", labelB: "NEAREST", icon: "nearest.svg", 
        a: data1.railway?.distance_id ? `Station (${data1.railway.distance_id}km)` : "Zaheerabad (15km)", 
        b: data2.railway?.distance_id ? `Station (${data2.railway.distance_id}km)` : "Vijayawada (120m))" 
      },
      { 
        label: "NEAREST AIRPORT", labelA: "NEAREST", labelB: "NEAREST", icon: "rgia.svg", 
        a: data1.airport?.distance_id ? `Airport (${data1.airport.distance_id}km)` : "RGIA (90m)", 
        b: data2.airport?.distance_id ? `Airport (${data2.airport.distance_id}km)` : "Canal Access" 
      },
      { 
        label: "NEAREST HOSPITAL", labelA: "NEAREST", labelB: "LAST MILE", icon: "emergency_icon.svg", 
        a: data1.hospital?.distance_id ? `Hospital (${data1.hospital.distance_id}km)` : "Apollo (10km)", 
        b: data2.hospital?.distance_id ? `Hospital (${data2.hospital.distance_id}km)` : "Emergency (8km)" 
      },
    ];
  const CULTIVATION = [
    { 
      id: farmCode1, 
      soil: data1.soil?.type_id ? `Soil Type ${data1.soil.type_id}` : "Black Cotton Soil", 
      soilDesc: "High water retention, ideal for moisture-intensive crops and long-term sustainability.", 
      current: data1.current_cultivation || "Seasonal Rice / Cotton Cultivation", 
      potential: data1.crops_that_can_be_grown?.length ? `Crop Type ${data1.crops_that_can_be_grown[0]}` : "Sandalwood", 
      currentIcon: "leaf.svg", potentialIcon: "leaf.svg" 
    },
    { 
      id: farmCode2, 
      soil: data2.soil?.type_id ? `Soil Type ${data2.soil.type_id}` : "Red Laterite Soil", 
      soilDesc: "Excellent drainage properties, perfect for plantation crops like Cashew or Mango.", 
      current: data2.current_cultivation || "Bare Land (Fallow)", 
      potential: data2.crops_that_can_be_grown?.length ? `Crop Type ${data2.crops_that_can_be_grown[0]}` : "Rice/Wheat", 
      currentIcon: "block.svg", potentialIcon: "block.svg" 
    },
  ];

  return (
    <main style={{ width: "100%", minHeight: "100vh", backgroundColor: "#F8F9FA", display: "flex", flexDirection: "column", overflowX: "hidden" }}>

      {/* ═══════════════════════════════════════
          MOBILE TREE
      ═══════════════════════════════════════ */}
      <div className="block lg:hidden">

        {/* Mobile Hero */}
        <section style={{ position: "relative", width: "100%", minHeight: "60svh", overflow: "hidden" }}>
          <img src="/assets/compareassets/hero.svg" alt="Compare Assets Hero Backdrop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} onError={(e) => { e.currentTarget.src = "/assets/pricing/hero.svg"; }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1 }} />
          <div style={{ position: "relative", zIndex: 5 }}>
            <Navbar variant="app" active="compareassets" />
          </div>
          <div style={{ position: "relative", zIndex: 5, padding: "0 24px 56px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginTop: "clamp(40px, 10svh, 80px)" }}>
            <motion.h1
              initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 10vw, 72px)", lineHeight: 1.05, letterSpacing: "-1.5px", color: "#FFFFFF" }}
            >
              Compare Assets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.6", color: "rgba(255,255,255,0.85)", maxWidth: "360px" }}
            >
              Side-by-side performance and risk analysis for high-yield land investments.
            </motion.p>
          </div>
                  

        </section>

        {/* Mobile Comparison Content */}
        <section className="w-full px-4 py-10 flex flex-col gap-8 box-border" style={{ paddingBottom: "100px" }}>

          {/* Asset header cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex gap-3">
            <div style={{ flex: 1, background: "#FFFFFF", borderRadius: "20px", padding: "16px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
                <Image src="/assets/compareassets/image2.1.svg" alt="GLC SOS 01" fill style={{ objectFit: "cover" }} />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0F2F4C", textTransform: "capitalize", textAlign: "center" }}>{farmCode1}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", color: "#45474C", textAlign: "center" }}>{price1} | {acres1}</span>
            </div>
            <div style={{ flex: 1, background: "#FFFFFF", borderRadius: "20px", padding: "16px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
                <Image src="/assets/compareassets/image2.2.svg" alt="GLC SOS 02" fill style={{ objectFit: "cover" }} />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0F2F4C", textTransform: "capitalize", textAlign: "center" }}>{farmCode2}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", color: "#45474C", textAlign: "center" }}>{price2} | {acres2}</span>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col gap-3">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/assets/compareassets/keyfeatures.svg" alt="Key Features" width={20} height={20} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", textTransform: "uppercase" }}>Key Features</span>
            </div>
            {KEY_FEATURES.map((row, i) => (
              <motion.div key={row.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "16px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Image src={`/assets/compareassets/${row.icon}`} alt={row.label} width={16} height={16} />
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#2780C4", textTransform: "uppercase", letterSpacing: "0.5px" }}>{row.label}</span>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "12px", padding: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#45474C", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "4px" }}>SOS 01</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{row.a}</span>
                  </div>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "12px", padding: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#45474C", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "4px" }}>SOS 02</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{row.b}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Connectivity */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col gap-3">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/assets/compareassets/connectivity.svg" alt="Connectivity" width={22} height={21} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", textTransform: "uppercase" }}>Connectivity</span>
            </div>
            {CONNECTIVITY.map((row, i) => (
              <motion.div key={row.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "16px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Image src={`/assets/compareassets/${row.icon}`} alt={row.label} width={16} height={16} />
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#2780C4", textTransform: "uppercase", letterSpacing: "0.5px" }}>{row.label}</span>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "12px", padding: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#45474C", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>SOS 01</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{row.a}</span>
                  </div>
                  <div style={{ flex: 1, background: "#F3F4F5", borderRadius: "12px", padding: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#45474C", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>SOS 02</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{row.b}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cultivation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col gap-3">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/assets/compareassets/cultivation.svg" alt="Cultivation" width={18} height={20} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", textTransform: "uppercase" }}>Cultivation</span>
            </div>
            {CULTIVATION.map((asset, i) => (
              <motion.div key={asset.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "20px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#2780C4", textTransform: "uppercase", letterSpacing: "0.5px" }}>{asset.id}</span>
                <div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#45474C", textTransform: "uppercase", letterSpacing: "0.8px" }}>SOIL COMPOSITION</span>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F2F4C", marginTop: "4px" }}>{asset.soil}</div>
                  <p style={{ margin: "4px 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: "#45474C", lineHeight: 1.5 }}>{asset.soilDesc}</p>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,198,205,0.2)", paddingTop: "12px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#45474C", textTransform: "uppercase" }}>CURRENT</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                    <Image src={`/assets/compareassets/${asset.currentIcon}`} alt="indicator" width={14} height={14} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{asset.current}</span>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,198,205,0.2)", paddingTop: "12px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#45474C", textTransform: "uppercase" }}>POTENTIAL</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                    <Image src={`/assets/compareassets/${asset.potentialIcon}`} alt="indicator" width={14} height={14} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C" }}>{asset.potential}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </section>

        {/* Fixed bottom select banner */}
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, display: "flex", gap: "10px", padding: "12px 16px", background: "rgba(255,255,255,0.97)", borderTop: "1px solid #EDEEEF", backdropFilter: "blur(8px)", boxSizing: "border-box" }}>
          <button onClick={() => router.push("/home/myassets/details")} style={{ flex: 1, height: "48px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#FFFFFF", cursor: "pointer", textTransform: "uppercase" }}>
            SELECT {farmCode1}
          </button>
          <button onClick={() => router.push("/home/myassets/details")} style={{ flex: 1, height: "48px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#FFFFFF", cursor: "pointer", textTransform: "uppercase" }}>
            SELECT {farmCode2}
          </button>
        </div>

        {/* CTA + Footer for mobile */}
        <CTA />
        <Footer />
      </div>

      {/* ═══════════════════════════════════════
          DESKTOP TREE
      ═══════════════════════════════════════ */}
      <div className="hidden lg:block">

        {/* ─── 1. FULL WIDTH HERO SCREEN BANNER LAYER ─── */}
        <section id="hero-section" style={{ position: "relative", width: "100%", height: "100vh", background: "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35))", overflow: "hidden", flexShrink: 0 }}>
          <img src="/assets/compareassets/hero.svg" alt="Compare Assets Hero Backdrop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} onError={(e) => { e.currentTarget.src = "/assets/pricing/hero.svg"; }} />

          {/* Top Header Controls Shell */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 60px", height: "110px" }}>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer", flexShrink: 0 }} onClick={() => router.push("/home")}>
              <Image src="/assets/common/Logo green land 1.svg" alt="Green Land Capital Brand Logo" width={150} height={64} style={{ objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 14px", gap: "8px", height: "68px", background: "rgba(255,255,255,0.1)", boxShadow: "0px 8px 6px rgba(0,0,0,0.05), inset 3px 4px 2px -3px rgba(255,255,255,0.55), inset 0px -1px 1px rgba(255,255,255,0.25), inset 0px 1px 1px rgba(255,255,255,0.25)", backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)", borderRadius: "100px", flexShrink: 0 }}>
              <button onClick={() => router.push("/home")} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48px", height: "48px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", transition: "transform 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </button>
              <button onClick={() => router.push("/search")} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48px", height: "48px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", transition: "transform 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                <Image src="/assets/home/HeroScreen/search.svg" alt="Search" width={22} height={22} />
              </button>
              <button onClick={() => router.push("/pricing")} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48px", height: "48px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", transition: "transform 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                <Image src="/assets/home/HeroScreen/Vector.svg" alt="Pricing" width={22} height={20} />
              </button>
              <button onClick={() => router.push("/profile")} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "48px", height: "48px", borderRadius: "100px", background: "transparent", border: "none", cursor: "pointer", transition: "transform 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                <Image src="/assets/home/HeroScreen/user 1.png" alt="User" width={21.62} height={21.62} />
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
              <button onClick={() => router.push("/home/unlockeddocuments")} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", background: "rgba(255,255,255,0.1)", boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)", backdropFilter: "blur(62px)", WebkitBackdropFilter: "blur(62px)", borderRadius: "50%", border: "none", cursor: "pointer" }}>
                <Image src="/assets/home/HeroScreen/unlock 1.svg" alt="Unlock" width={26.32} height={26.32} />
              </button>
              <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", background: "rgba(255,255,255,0.1)", boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)", backdropFilter: "blur(62px)", WebkitBackdropFilter: "blur(62px)", borderRadius: "50%", border: "none", cursor: "pointer", position: "relative" }}>
                <Image src="/assets/home/HeroScreen/notification-v2.svg" alt="Notifications" width={26.32} height={26.32} />
                
              </button>
            </div>
          </div>

          {/* Center Typography */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", padding: "0px 32px", gap: "37px", position: "absolute", width: "100%", maxWidth: "1200px", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
            <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "100px", lineHeight: "100px", textAlign: "center", letterSpacing: "-1.8px", color: "#FFFFFF" }}>Compare Assets</h1>
            <p style={{ margin: 0, maxWidth: "996px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "24px", lineHeight: "32px", textAlign: "center", color: "#FFFFFF" }}>
              Compare your assets side by side across legal status, agronomy, infrastructure, performance, and investment value to make informed decisions with confidence.
            </p>
          </div>

          </section>

        {/* ─── 2. MAIN COMPARISON STACK MATRIX ─── */}
        <section style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "64px 32px", gap: "38px", width: "100%", maxWidth: "1280px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%", maxWidth: "1216px" }}>
            <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", lineHeight: "48px", letterSpacing: "-1.2px", color: "#0F2F4C" }}>Compare Assets</h1>
            <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#45474C" }}>Side-by-side performance and risk analysis for high-yield land investments.</p>
          </div>

          {/* Sticky Comparison Header */}
          <div style={{ boxSizing: "border-box", width: "1216px", height: "128px", background: "#FFFFFF", boxShadow: "0px 20px 50px rgba(0,0,0,0.04)", borderRadius: "32px", position: "relative", marginBottom: "16px" }}>
            <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px", gap: "24px", position: "absolute", height: "96px", left: "16px", right: "616px", top: "16px", background: "#FFFFFF", borderRadius: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "138px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", color: "#0F2F4C", textTransform: "capitalize", textAlign: "center" }}>{farmCode1}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", marginTop: "4px", textAlign: "center" }}>{price1} | {acres1}</span>
              </div>
              <div style={{ width: "64px", height: "64px", borderRadius: "6px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <Image src="/assets/compareassets/image2.1.svg" alt="GLC SOS 01 Preview" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px", gap: "24px", position: "absolute", height: "96px", left: "616px", right: "16px", top: "16px", background: "#FFFFFF", borderRadius: "32px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "6px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <Image src="/assets/compareassets/image2.2.svg" alt="GLC SOS 02 Preview" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "143px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", color: "#0F2F4C", textTransform: "capitalize", textAlign: "center" }}>{farmCode2}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#45474C", marginTop: "4px", textAlign: "center" }}>{price2} | {acres2}</span>
              </div>
            </div>
          </div>

          {/* ─── SECTION 1: KEY FEATURES ─── */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "32px", isolation: "isolate", width: "1216px", position: "relative" }}>
            <div style={{ position: "absolute", width: "1px", left: "calc(50% - 1px / 2)", top: "32px", bottom: "-32px", background: "#C5C6CD", zIndex: 0 }} />
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px 8px", gap: "12px", width: "1216px", height: "32px", zIndex: 1 }}>
              <Image src="/assets/compareassets/keyfeatures.svg" alt="Key Features Icon" width={22} height={22} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C", textTransform: "uppercase" }}>Key Features</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "38px", width: "100%", zIndex: 1 }}>
              {KEY_FEATURES.map((row) => (
                <div key={row.label} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", position: "relative", minHeight: "132px", gap: "244px" }}>
                  <div style={{ width: "256px", minHeight: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.a}</span>
                  </div>
                  <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9,20,38,0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                    <Image src={`/assets/compareassets/${row.icon}`} alt={row.label} width={20} height={20} />
                  </div>
                  <div style={{ width: "256px", minHeight: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── SECTION 2: CONNECTIVITY ─── */}
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "32px", isolation: "isolate", width: "1216px", position: "relative", marginTop: "32px" }}>
            <div style={{ position: "absolute", width: "1px", left: "calc(50% - 1px / 2)", top: "32px", bottom: "-32px", background: "#C5C6CD", zIndex: 0 }} />
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px 8px", gap: "12px", width: "1216px", height: "32px", zIndex: 1 }}>
              <Image src="/assets/compareassets/connectivity.svg" alt="Connectivity Icon" width={24} height={23} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#0F2F4C", textTransform: "uppercase", letterSpacing: "1.2px" }}>Connectivity</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "38px", width: "100%", zIndex: 1 }}>
              {CONNECTIVITY.map((row) => (
                <div key={row.label} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", position: "relative", minHeight: "132px", gap: "244px" }}>
                  <div style={{ width: "256px", minHeight: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.labelA || row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.a}</span>
                  </div>
                  <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9,20,38,0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                    <Image src={`/assets/compareassets/${row.icon}`} alt={row.label} width={20} height={20} />
                  </div>
                  <div style={{ width: "256px", minHeight: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.labelB || row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── SECTION 3: CULTIVATION ─── */}
          <div style={{ display: "flex", flexDirection: "column", width: "1216px", gap: "32px", marginTop: "40px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", padding: "0 16px" }}>
              <div style={{ width: "24px", height: "23px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/assets/compareassets/connectivity.svg" alt="Cultivation Icon" width={24} height={23} />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "16px", color: "#0F2F4C", textTransform: "uppercase", letterSpacing: "1.2px" }}>Cultivation</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", width: "1216px", gap: "64px", position: "relative" }}>
              {/* Vertical Divider */}
              <div style={{ position: "absolute", width: "1px", left: "calc(50% - 0.5px)", top: "-32px", bottom: "-32px", background: "#C5C6CD", zIndex: 0 }}></div>

              {[
                { labelA: "CURRENT", labelB: "CURRENT", a: data1.current_cultivation || "Mango", b: data2.current_cultivation || "Barren", icon: "Background (43).svg" },
                { labelA: "POTENTIAL", labelB: "POTENTIAL", a: data1.crops_that_can_be_grown?.length ? `Crop Type ${data1.crops_that_can_be_grown[0]}` : "Sandalwood", b: data2.crops_that_can_be_grown?.length ? `Crop Type ${data2.crops_that_can_be_grown[0]}` : "Rice/Wheat", icon: "Background (42).svg" },
                { labelA: "SOIL", labelB: "SOIL", a: data1.soil?.type_id ? `Soil Type ${data1.soil.type_id}` : "Red Laterite", b: data2.soil?.type_id ? `Soil Type ${data2.soil.type_id}` : "Black Cotton", icon: "Background (41).svg" }
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", position: "relative", minHeight: "108px", gap: "244px" }}>
                  {/* Left Box */}
                  <div style={{ width: "256px", minHeight: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box", zIndex: 1 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>{row.labelA}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px", textAlign: "right" }}>{row.a}</span>
                  </div>

                  {/* Center Icon */}
                  <div style={{ width: "80px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
                    <Image src={`/assets/compareassets/${row.icon}`} alt={row.labelA} width={80} height={80} />
                  </div>

                  {/* Right Box */}
                  <div style={{ width: "256px", minHeight: "108px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box", zIndex: 1 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", lineHeight: "16px", color: "#2780C4", textTransform: "uppercase" }}>{row.labelB}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#0F2F4C", marginTop: "4px", textAlign: "left" }}>{row.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── BOTTOM SELECTION CONTROLS ─── */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "1216px", padding: "0 24px", gap: "48px", marginTop: "40px" }}>
            <button onClick={() => router.push(`/search/farmlanddetails?id=${id1}`)} style={{ flex: 1, height: "57px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.35px", color: "#FFFFFF", cursor: "pointer", textTransform: "uppercase" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>SELECT {farmCode1}</button>
            <button onClick={() => router.push(`/search/farmlanddetails?id=${id2}`)} style={{ flex: 1, height: "57px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.35px", color: "#FFFFFF", cursor: "pointer", textTransform: "uppercase" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>SELECT {farmCode2}</button>
          </div>

        </section>
        {/* ─── 3. CTA + FOOTER ─── */}
        <CTA />
        <Footer />
      </div>

    </main>
  );
}
