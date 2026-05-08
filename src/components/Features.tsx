"use client";

import Image from "next/image";
import { Droplets, MapPin } from "lucide-react";

export default function Features() {
  return (
    <section className="relative w-full flex flex-col items-center bg-white py-32 overflow-hidden">
      
      {/* Main Container 1440px */}
      <div className="relative w-[1440px] h-[1550px] shrink-0">
        
        {/* Why Green Capital Title */}
        <div 
          className="absolute text-center"
          style={{ width: '490px', left: '474.5px', top: '0px' }}
        >
          <h2 className="text-[56px] font-bold leading-[120%] tracking-[-0.02em] text-[#0F2F4C] font-jakarta">
            Why Green Capital
          </h2>
        </div>

        {/* Description Header */}
        <div 
          className="absolute text-center"
          style={{ width: '790px', left: 'calc(50% - 790px/2)', top: '95px' }}
        >
          <p className="text-[18px] leading-[140%] tracking-[-0.01em] text-[#5C5C5C] font-jakarta">
            Monitor your managed agricultural assets in real-time. Our digital ecosystem provides transparent, data-driven insights into your farm's agronomy, infrastructure, and financial yields.
          </p>
        </div>

        {/* --- Card 1: Organic Soil Intelligence --- */}
        <div 
          className="absolute bg-white rounded-[30px] shadow-sm border border-gray-100 group overflow-hidden"
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
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
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
                6.8
              </span>
              <span className="absolute text-[20px] font-medium text-[#5C5C5C] font-jakarta" style={{ left: '29px', top: '110px' }}>
                Current pH Level:
              </span>
              
              {/* Live Badge (Frame 2147240539) */}
              <div className="absolute bg-[#C5E5FF] rounded-full flex items-center px-5" style={{ width: '93px', height: '42px', left: '431px', top: '30px' }}>
                <span className="text-[18px] font-medium text-[#0F2F4C] font-inter">Live</span>
                <span className="ml-2 w-[16px] h-[16px] bg-[#2780C4] rounded-full" />
              </div>

              {/* Dynamic Waveform Graph (Frame 2147240536) */}
              <div className="absolute" style={{ height: '118px', left: '28px', right: '28px', top: '154px' }}>
                <svg viewBox="0 0 500 100" className="w-full h-full preserve-3d">
                  <path 
                    d="M0 60 C 20 40, 40 40, 60 60 C 80 80, 100 80, 120 60 C 140 40, 160 40, 180 60 C 200 80, 220 80, 240 60 C 260 40, 280 40, 300 60 C 320 80, 340 80, 360 60 C 380 40, 400 40, 420 60 C 440 80, 460 80, 480 60 L 500 60" 
                    fill="none" 
                    stroke="#2780C4" 
                    strokeWidth="2"
                  />
                  <path 
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
        </div>

        {/* --- Card 2: Hydro-Geological Tracking --- */}
        <div 
          className="absolute bg-white rounded-[30px] shadow-sm border border-gray-100 group overflow-hidden"
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
            <Image 
              src="/assets/features/hydro3.2.jpg" 
              alt="Water" fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            {/* Active Borewells Badge (Frame 2147240510) */}
            <div 
              className="absolute bg-black/16 backdrop-blur-md rounded-full flex items-center px-2"
              style={{ width: '229px', height: '52px', left: '96px', top: '310px' }}
            >
              <div className="w-[36px] h-[36px] bg-[#2780C4] rounded-full flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="ml-3 text-[16px] font-medium text-white font-jakarta">Active Borewells: 2</span>
            </div>
          </div>
        </div>

        {/* --- Card 3: GIS Boundary Management --- */}
        <div 
          className="absolute bg-white rounded-[30px] shadow-sm border border-gray-100 group overflow-hidden"
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
            <Image 
              src="/assets/features/gis3.3.jpg" 
              alt="GIS" fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            {/* Total Area Badge */}
            <div 
              className="absolute bg-white rounded-full flex items-center px-2 shadow-md"
              style={{ width: '233px', height: '52px', left: '126px', top: '64px' }}
            >
              <div className="w-[36px] h-[36px] bg-[#2780C4] rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="ml-3 text-[16px] font-medium text-[#0F2F4C] font-jakarta">Total Area: 5.0 Acres</span>
            </div>
            {/* Dispute Risk Badge */}
            <div 
              className="absolute bg-white rounded-full px-4 py-2 shadow-sm text-[12.7px] font-medium text-[#0F2F4C] font-jakarta whitespace-nowrap"
              style={{ left: '280px', top: '206px' }}
            >
              Dispute Risk: Zero / Cleared
            </div>
            {/* Geo-Fencing Badge */}
            <div 
              className="absolute bg-white rounded-full px-4 py-2 shadow-sm text-[12.7px] font-medium text-[#0F2F4C] font-jakarta whitespace-nowrap"
              style={{ left: '28px', top: '270.91px' }}
            >
              Geo-Fencing: 100% Secured
            </div>
          </div>
        </div>

        {/* --- Card 4: Yield & Revenue Ledger --- */}
        <div 
          className="absolute bg-white rounded-[30px] shadow-sm border border-gray-100 group overflow-hidden"
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
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Est. Harvest Overlay (Frame 2147240533) */}
            <div 
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
                  <div key={i} className="w-[10px] bg-[#C5E5FF] rounded-full relative" style={{ height: `${h}px` }}>
                    <div className="absolute top-0 w-full h-[5px] bg-[#2780C4] rounded-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Last Payout Overlay (Frame 2147240534) */}
            <div 
              className="absolute bg-gradient-to-br from-[#F6F6F6] to-white rounded-[30px] shadow-lg border border-white/20 overflow-hidden"
              style={{ width: '512px', height: '166px', left: '56px', top: '214px' }}
            >
              {/* Bars (Narrowed to avoid overlap) */}
              <div className="absolute flex items-end gap-[6px]" style={{ left: '20px', bottom: '32px' }}>
                {[40, 58, 46, 51, 40, 66, 46, 77, 40, 70, 46].map((h, i) => (
                   <div key={i} className={`w-[10px] rounded-full ${i % 2 === 0 ? 'bg-[#2780C4]' : 'bg-[#C5E5FF]'}`} style={{ height: `${h}px` }} />
                ))}
              </div>

              {/* Text Elements (Shifted left to avoid overlap and match layout) */}
              <div 
                className="absolute text-[20px] font-medium text-[#0F2F4C] font-jakarta whitespace-nowrap" 
                style={{ width: '200px', left: '249px', top: '28px' }}
              >
                Last Payout:
              </div>
              <div 
                className="absolute text-[48px] font-bold text-[#0F2F4C] font-jakarta leading-none whitespace-nowrap" 
                style={{ width: '300px', left: '229px', top: '60px' }}
              >
                ₹3,80,000
              </div>
              <div 
                className="absolute text-[18px] font-medium text-[#5C5C5C] font-jakarta whitespace-nowrap" 
                style={{ width: '200px', left: '258px', top: '120px' }}
              >
                Gross Revenue INR
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
