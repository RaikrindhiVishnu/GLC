"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Message {
  id: string;
  sender: "support" | "user";
  text: string;
  timestamp: string;
  avatar?: string;
}

export default function SupportChatScreen() {
  const router = useRouter();

  // Local state for dynamic premium chat interactions matching Figma
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      sender: "support",
      text: "Hi Arjun, please let us know how we can help you today.",
      timestamp: "12:00 PM",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested priority queries updated exactly to Figma/screenshot specifications
  const suggestedQueries = [
    "How do I schedule a physical site visit?",
    "What happens if a Pool Buy doesn't reach 100% funding?",
    "Are the unlocked legal documents fully verified?",
    "I paid a Token Advance. What happens next?",
    "How do I purchase more credits for document unlocks?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      avatar: "/assets/stats/person1.1.svg",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate realistic live support concierge response
    setTimeout(() => {
      let replyText = "I have escalated your query to our Core Intelligence Legal Desk. A specialized associate is reviewing your unlocked registry parameters right now.";
      
      if (textToSend.includes("physical site visit")) {
        replyText = "You can instantly reserve a private vehicle or helicopter charter transit directly through the Concierge Actions panel on the right.";
      } else if (textToSend.includes("100% funding")) {
        replyText = "If complete funding isn't fulfilled within the designated allocation window, your complete escrow lock-in deposit is instantly discharged back to your linked primary bank account with zero deductions.";
      } else if (textToSend.includes("fully verified")) {
        replyText = "Yes, absolute ownership chains, multi-sig title clearance certificates, and official state agronomy logs are fully backed by multi-tier legal audit frameworks.";
      } else if (textToSend.includes("Token Advance")) {
        replyText = "Your Token Advance locks baseline entry metrics. Our assigned compliance lead will coordinate custom physical or secure virtual execution time slots shortly.";
      } else if (textToSend.includes("purchase more credits")) {
        replyText = "Document unlock credits can be supplemented instantly inside your Profile configuration terminal or configured for automatic replenishment on subscription tiers.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `support-${Date.now()}`,
          sender: "support",
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col relative box-border select-none bg-[#F8F9FA]">
      
      {/* Injecting Scoped No-Scrollbar Global Override to hide scrollbar but keep scroll functioning perfectly */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {/* Main Core View Area mapping requested Figma matrix constraints */}
      <div className="max-w-[1536px] w-full mx-auto px-4 sm:px-8 py-6 md:py-8 flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 justify-center">
        
        {/* ─── PANE 1: ASSET DOSSIER (Left 25%) ─── */}
        <div className="w-full lg:w-[288px] shrink-0 flex flex-col">
          <div className="w-full bg-white/70 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-slate-200/60 rounded-[48px] p-6 flex flex-col gap-6 box-border flex-grow">
            
            {/* Top Project Preview Cover */}
            <div className="w-full h-[180px] rounded-[32px] overflow-hidden relative bg-slate-100 box-border shadow-inner flex items-center justify-center">
              {/* High-fidelity lush agricultural background preview */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-teal-900" />
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,#BCD225_0%,transparent_80%)]" />
              
              {/* Decorative crop stripes simulating vineyard tracks */}
              <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)]" />

              {/* Documents Unlocked Badge matching screenshot perfectly */}
              <div className="absolute top-4 left-4 bg-[#D7EE44] rounded-full px-3 py-1 shadow-sm flex items-center z-10">
                <span className="font-bold text-[10px] tracking-[1px] text-[#131600] uppercase">
                  DOCUMENTS UNLOCKED
                </span>
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="flex flex-col gap-1">
              <h2 className="m-0 font-bold text-2xl tracking-[-0.6px] text-[#131600]">
                GLC SOS 01
              </h2>
              <p className="m-0 font-normal text-sm text-[#45474C] leading-relaxed">
                Premium Vineyard Collective • Karnataka
              </p>
            </div>

            {/* Bento Grid Metrics (2x2 Matrix) */}
            <div className="grid grid-cols-2 gap-3 w-full mt-2">
              {/* Metric Cell 1 */}
              <div className="bg-[#F8F9FA] rounded-[32px] p-4 flex flex-col justify-between box-border min-h-[79px]">
                <span className="font-bold text-[10px] tracking-[1px] text-[#45474C] uppercase">
                  IO RISK
                </span>
                <span className="font-bold text-lg text-[#091426] leading-none mt-1">
                  SAFE
                </span>
              </div>

              {/* Metric Cell 2 */}
              <div className="bg-[#F8F9FA] rounded-[32px] p-4 flex flex-col justify-between box-border min-h-[79px]">
                <span className="font-bold text-[10px] tracking-[1px] text-[#45474C] uppercase">
                  YIELD
                </span>
                <span className="font-bold text-lg text-[#00629E] leading-none mt-1">
                  12%
                </span>
              </div>

              {/* Metric Cell 3 */}
              <div className="bg-[#F8F9FA] rounded-[32px] p-4 flex flex-col justify-between box-border min-h-[79px]">
                <span className="font-bold text-[10px] tracking-[1px] text-[#45474C] uppercase">
                  APPRECIATION
                </span>
                <span className="font-bold text-lg text-[#091426] leading-none mt-1">
                  8.2%
                </span>
              </div>

              {/* Metric Cell 4 */}
              <div className="bg-[#F8F9FA] rounded-[32px] p-4 flex flex-col justify-between box-border min-h-[79px]">
                <span className="font-bold text-[10px] tracking-[1px] text-[#45474C] uppercase">
                  AREA
                </span>
                <span className="font-bold text-lg text-[#091426] leading-none mt-1">
                  420 Ac
                </span>
              </div>
            </div>

            {/* Bottom Status Ribbon Indicator */}
            <div className="mt-auto bg-[#091426] rounded-[32px] p-4 flex items-center gap-3 box-border w-full">
              {/* Gradient Blob matching screenshot perfectly */}
              <div className="w-[31px] h-8 rounded-full bg-gradient-to-br from-[#BCD225] to-[#00629E] shrink-0 blur-[4px]" />

              {/* Status Labels */}
              <div className="flex flex-col">
                <span className="font-normal text-[11px] text-[#8590A6] leading-none block">
                  Vault Status
                </span>
                <span className="font-bold text-xs sm:text-sm text-white block mt-1 leading-tight">
                  Encrypted Active<br />Session
                </span>
              </div>
            </div>

          </div>
        </div>


        {/* ─── PANE 2: CORE CONVERSATION FEED (Center 50%) ─── */}
        <div className="flex-grow w-full lg:w-[576px] lg:max-w-[720px] flex flex-col bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#EDEEEF] rounded-[48px] overflow-hidden box-border">
          
          {/* Active Concierge Top Header */}
          <div className="p-6 sm:px-8 border-b border-[#EDEEEF] flex items-center justify-between bg-white shrink-0 box-border">
            {/* Lead Agent Info Stack */}
            <div className="flex items-center gap-4">
              {/* Circular initial avatar mapping exact figma params */}
              <div className="w-12 h-12 rounded-full bg-[#F8F9FA] shadow-inner flex items-center justify-center relative shrink-0 border border-slate-100">
                <span className="font-bold text-xl sm:text-2xl text-[#0F2F4C]">S</span>
                {/* Online status indicator ring */}
                <span className="absolute right-0 bottom-0 w-3 h-3 bg-[#2780C4] border-2 border-white rounded-full box-content" />
              </div>

              {/* Text labels */}
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-[#131600] leading-tight">
                  Support
                </span>
                <span className="font-medium text-xs sm:text-sm text-[#00629E]">
                  Online
                </span>
              </div>
            </div>

            {/* Live Analyst Tag matching screenshot text perfectly */}
            <div className="flex items-center gap-2 bg-transparent">
              <span className="w-2 h-2 rounded-full bg-[#BCD225] relative inline-flex shrink-0" />
              <span className="font-bold text-xs tracking-[0.6px] text-[#45474C] uppercase">
                LIVE ANALYSIS
              </span>
            </div>
          </div>

          {/* Dynamic Interactive Feed Panel with Scrollbar explicitly hidden via no-scrollbar class */}
          <div className="p-6 sm:p-8 flex-grow flex flex-col gap-5 overflow-y-auto max-h-[500px] md:max-h-[580px] box-border no-scrollbar bg-white">
            
            {/* Timestamp block separator */}
            <div className="w-full flex justify-center my-1">
              <div className="bg-[#F3F4F5] rounded-full px-4 py-1.5">
                <span className="font-bold text-[10px] tracking-[1px] text-[#45474C]/40 uppercase">
                  TODAY
                </span>
              </div>
            </div>

            {/* Render dynamically accumulated conversation chunks */}
            {messages.map((msg) => {
              const isSupport = msg.sender === "support";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col gap-1.5 max-w-[85%] ${
                    isSupport ? "self-start items-start" : "self-end items-end"
                  }`}
                >
                  <div
                    className={`p-4 sm:p-5 rounded-[28px] box-border leading-relaxed text-sm sm:text-base font-normal ${
                      isSupport
                        ? "bg-[#F3F4F5] text-[#45474C] rounded-bl-none"
                        : "bg-[#091426] text-white rounded-br-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="font-normal text-[10px] text-[#45474C]/50 px-2">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Suggested quick response buttons stack matching exact strings requested */}
            <div className="w-full flex flex-col gap-2.5 mt-2">
              {suggestedQueries.map((queryText, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(queryText)}
                  className="w-full bg-white border border-[#C5C6CD]/30 shadow-2xs rounded-full px-5 py-3.5 text-left font-medium text-xs sm:text-sm text-[#091426] hover:bg-[#F8F9FA] transition-all flex items-center justify-between group cursor-pointer box-border"
                >
                  <span className="truncate pr-2">{queryText}</span>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[#091426] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 font-bold text-xs">
                    ↗
                  </span>
                </button>
              ))}
            </div>

            {/* User tracking representation below suggested actions array mimicking screenshot layout perfectly */}
            <div className="flex items-center gap-2 mt-1 px-1">
              {/* Circular user avatar preview */}
              <div className="w-6 h-6 rounded-full bg-slate-200 border border-slate-300 overflow-hidden shrink-0 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#0F2F4C] flex items-center justify-center text-[9px] text-white font-bold">
                  A
                </div>
                {/* Elegant indicator suit outline overlay */}
                <div className="absolute bottom-0 w-3 h-1.5 bg-amber-500 rounded-t-xs" />
              </div>
              <span className="font-normal text-[10px] text-[#45474C]/60">
                12:00 PM
              </span>
            </div>

            {/* Typing activity indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 self-start bg-[#F3F4F5] px-4 py-3 rounded-full rounded-bl-none opacity-80 animate-pulse mt-2">
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Interactive Text Input Prompt */}
          <div className="p-4 sm:p-6 sm:px-8 bg-white shrink-0 box-border w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="flex items-center gap-2.5 p-2 bg-[#F3F4F5] border border-[#EDEEEF] rounded-full shadow-2xs box-border w-full"
            >
              {/* Plus add button mapping figma specs */}
              <button
                type="button"
                onClick={() => alert("Secure file/registry selector payload trigger activated.")}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#45474C] hover:bg-slate-200/80 transition-colors shrink-0 cursor-pointer border-none bg-transparent font-light text-xl"
                title="Attach Files"
              >
                +
              </button>

              {/* Main Input Text Area */}
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Message your concierge..."
                className="flex-grow bg-transparent border-none outline-none px-1 font-medium text-sm sm:text-base text-[#091426] placeholder-[#45474C]/60"
              />

              {/* Smiley avatar prompt helper icon */}
              <button
                type="button"
                onClick={() => handleSendMessage("Support Desk status alignment check.")}
                className="w-10 h-10 rounded-full bg-white shadow-2xs flex items-center justify-center text-[#091426] hover:bg-slate-50 transition-colors shrink-0 cursor-pointer border-none"
                title="Quick Assist Mood"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </button>

              {/* Primary Submit Button Trigger */}
              <button
                type="submit"
                className="bg-[#091426] hover:bg-black text-white font-bold text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full transition-transform active:scale-95 shrink-0 cursor-pointer border-none shadow-sm"
              >
                Send
              </button>
            </form>
          </div>

        </div>


        {/* ─── PANE 3: CONCIERGE ACTIONS (Right 25%) ─── */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col">
          <div className="w-full bg-[#091426]/95 backdrop-blur-md border border-slate-800 rounded-[48px] p-6 sm:p-8 flex flex-col gap-6 shadow-xl box-border flex-grow text-white">
            
            {/* Section Heading */}
            <div className="flex flex-col gap-1">
              <h3 className="m-0 font-bold text-xl text-white tracking-tight">
                Concierge Actions
              </h3>
              <span className="font-medium text-xs tracking-widest text-[#94A3B8] uppercase">
                PRIORITY WORKFLOWS
              </span>
            </div>

            {/* Action Card List mapping updated labels seamlessly */}
            <div className="flex flex-col gap-4 w-full">
              
              {/* Action Card 1 */}
              <div
                onClick={() => alert("Initiating calendar scheduling protocol for local custom priority private site charter evaluation...")}
                className="w-full bg-white/5 border border-white/5 rounded-[32px] p-4 flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer box-border group"
              >
                {/* Gradient platform */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#BCD225] to-[#00629E] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                {/* Stack */}
                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold text-sm text-white truncate block leading-tight">
                    Schedule Site Visit
                  </span>
                  <span className="font-normal text-xs text-slate-400 truncate block mt-1">
                    Priority Private Charter
                  </span>
                </div>
              </div>

              {/* Action Card 2 */}
              <div
                onClick={() => alert("Checking token registry integrity for immediate absolute baseline allocation lock-in parameters...")}
                className="w-full bg-white/5 border border-white/5 rounded-[32px] p-4 flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer box-border group"
              >
                {/* Gradient platform */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#BCD225] to-[#00629E] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                {/* Stack */}
                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold text-sm text-white truncate block leading-tight">
                    Confirm ₹5L Token
                  </span>
                  <span className="font-normal text-xs text-slate-400 truncate block mt-1">
                    Instant Lock-in
                  </span>
                </div>
              </div>

              {/* Action Card 3 */}
              <div
                onClick={() => alert("Retrieving multi-sig authorized ledger proof files directly from secure intelligence title verification chain...")}
                className="w-full bg-white/5 border border-white/5 rounded-[32px] p-4 flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer box-border group"
              >
                {/* Gradient platform */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#BCD225] to-[#00629E] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                {/* Stack */}
                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold text-sm text-white truncate block leading-tight">
                    Download Title Chain
                  </span>
                  <span className="font-normal text-xs text-slate-400 truncate block mt-1">
                    Legal Verification
                  </span>
                </div>
              </div>

              {/* Action Card 4 */}
              <div
                onClick={() => alert("Calculating real-time automated intelligence yield and custom distribution projections...")}
                className="w-full bg-white/5 border border-white/5 rounded-[32px] p-4 flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer box-border group"
              >
                {/* Gradient platform */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#BCD225] to-[#00629E] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 8 12 12 14 14"></polyline>
                  </svg>
                </div>
                {/* Stack */}
                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold text-sm text-white truncate block leading-tight">
                    Request Payout Estimate
                  </span>
                  <span className="font-normal text-xs text-slate-400 truncate block mt-1">
                    Financial Projection
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Section: Portfolio Insights layout frame */}
            <div className="mt-auto bg-[#2780C4]/10 border border-[#2780C4]/20 rounded-[32px] p-5 flex flex-col gap-2 box-border w-full">
              <span className="font-bold text-xs tracking-wider text-white uppercase block">
                PORTFOLIO INSIGHTS
              </span>
              <p className="m-0 font-normal text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                Your current allocation in Vineyards is 12% below your optimal risk profile.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
