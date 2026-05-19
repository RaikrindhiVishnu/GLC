"use client";

import Link from "next/link";
import { useState, useRef, useMemo } from "react";
// @ts-ignore
import { useCountries } from "use-react-countries";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const { countries } = useCountries();
  const [phone, setPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    countryCallingCode: "+91",
    flags: { png: "https://flagcdn.com/w320/in.png" }
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [files, setFiles] = useState({ aadhaarFront: null, aadhaarBack: null, pan: null });
  
  const aadhaarFrontRef = useRef<HTMLInputElement>(null);
  const aadhaarBackRef = useRef<HTMLInputElement>(null);
  const panRef = useRef<HTMLInputElement>(null);

  const filteredCountries = useMemo(() => {
    return countries
      .filter((c: any) => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.countryCallingCode.includes(searchQuery)
      )
      .sort((a: any, b: any) => a.name.localeCompare(b.name));
  }, [countries, searchQuery]);

  const handleFileChange = (e: any, key: string) => {
    if (e.target.files?.[0]) {
      setFiles((prev: any) => ({ ...prev, [key]: e.target.files[0].name }));
    }
  };

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="text-[32px] lg:text-[38px] font-bold text-[#353535] font-jakarta leading-tight mb-1 flex flex-wrap gap-x-2">
        {"Register Now".split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[14px] lg:text-[15px] text-[#B8B8B8] font-jakarta mb-6"
      >
        Green Land Capital Asset Verification.
      </motion.p>

      {/* Hidden File Inputs */}
      <input type="file" ref={aadhaarFrontRef} onChange={e => handleFileChange(e, 'aadhaarFront')} className="hidden" accept="image/*" />
      <input type="file" ref={aadhaarBackRef} onChange={e => handleFileChange(e, 'aadhaarBack')} className="hidden" accept="image/*" />
      <input type="file" ref={panRef} onChange={e => handleFileChange(e, 'pan')} className="hidden" accept="image/*" />

      {/* First + Last Name */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-3 mb-3 lg:mb-4"
      >
        <div className="flex-1 bg-white border border-[#F0F0F0] rounded-[30px] h-[52px] lg:h-[56px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
          <svg className="w-4 h-4 text-[#A1999B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div className="w-px h-4 bg-[#F0F0F0]" />
          <input type="text" placeholder="First Name" className="flex-1 bg-transparent text-[14px] lg:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta min-w-0 cursor-text" />
        </div>
        <div className="flex-1 bg-white border border-[#F0F0F0] rounded-[30px] h-[52px] lg:h-[56px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
          <svg className="w-4 h-4 text-[#A1999B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div className="w-px h-4 bg-[#F0F0F0]" />
          <input type="text" placeholder="Last Name" className="flex-1 bg-transparent text-[14px] lg:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta min-w-0 cursor-text" />
        </div>
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-3 lg:mb-4 bg-white border border-[#F0F0F0] rounded-[30px] h-[52px] lg:h-[56px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text"
      >
        <svg className="w-4 h-4 text-[#2780C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <div className="w-px h-4 bg-[#F0F0F0]" />
        <input type="email" placeholder="Enter Mail ID" className="flex-1 bg-transparent text-[14px] lg:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text" />
      </motion.div>

      {/* Custom Polished Phone Input */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative mb-3 lg:mb-4 group"
      >
        <div className="bg-white border border-[#F0F0F0] rounded-[30px] h-[52px] lg:h-[56px] flex items-center px-4 gap-3 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text">
          <button
            type="button"
            onClick={() => { setIsDropdownOpen(!isDropdownOpen); setSearchQuery(""); }}
            className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-[#F8F8F8] transition-all shrink-0 [-webkit-tap-highlight-color:transparent]"
          >
            <img src={selectedCountry.flags.png} alt={selectedCountry.name} className="w-6 h-4 object-cover rounded-sm" />
            <svg className={`w-3.5 h-3.5 text-[#BDBDBD] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="w-px h-5 bg-[#F0F0F0]" />
          <span className="text-[14px] lg:text-[15px] font-bold text-[#434343] font-jakarta shrink-0">{selectedCountry.countryCallingCode}</span>
          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            className="flex-1 bg-transparent text-[14px] lg:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text" 
          />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
            <div className="absolute top-[60px] left-0 w-full bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#F0F0F0] z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
              {/* Search Bar */}
              <div className="p-3 border-b border-[#F0F0F0] bg-gray-50/50">
                <div className="flex items-center gap-2 px-3 py-2 bg-white border border-[#EBEBEB] rounded-xl focus-within:border-[#2780C4] transition-all">
                  <svg className="w-4 h-4 text-[#BDBDBD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search country..." 
                    className="flex-1 bg-transparent text-[13px] focus:outline-none font-jakarta"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>

              {/* List */}
              <div className="max-h-[240px] overflow-y-auto custom-scrollbar p-2">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((c: any) => (
                    <button
                      key={c.name + c.countryCallingCode}
                      type="button"
                      onClick={() => { setSelectedCountry(c); setIsDropdownOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-[16px] hover:bg-[#EEF6FF] group/item transition-all"
                    >
                      <img src={c.flags.png} alt={c.name} className="w-6 h-4 object-cover rounded-sm shrink-0" />
                      <span className="flex-1 text-left text-[14px] lg:text-[15px] font-medium text-[#434343] group-hover/item:text-[#2780C4] font-jakarta truncate">{c.name}</span>
                      <span className="text-[12px] text-[#BDBDBD] font-jakarta shrink-0">{c.countryCallingCode}</span>
                    </button>
                  ))
                ) : (
                  <div className="py-8 text-center text-[#BDBDBD] text-[13px] font-jakarta">No countries found</div>
                )}
              </div>
            </div>
          </>
        )}
      </motion.div>

      {/* Aadhaar Input + Uploads */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-3 lg:mb-4 bg-white border border-[#F0F0F0] rounded-[30px] h-[52px] lg:h-[56px] flex items-center px-4 gap-3 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text"
      >
        <svg className="w-4 h-4 text-[#A1999B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <div className="w-px h-4 bg-[#F0F0F0]" />
        <input type="text" placeholder="Aadhaar Number" className="flex-1 bg-transparent text-[13px] lg:text-[14px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta min-w-0 cursor-text" />
        
        <div className="flex gap-1.5 shrink-0">
          <div className="relative group/btn">
            <button 
              type="button"
              onClick={() => aadhaarFrontRef.current?.click()}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold font-jakarta transition-all border ${
                files.aadhaarFront ? "bg-[#2780C4] text-white border-[#2780C4]" : "bg-[#F8F8F8] text-[#2780C4] border-[#F0F0F0] hover:bg-[#EEF6FF]"
              }`}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 8l-4-4m0 0l-4 4m4-4v12" />
              </svg>
              {files.aadhaarFront ? "Uploaded" : "Front Copy"}
            </button>
            {files.aadhaarFront && (
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); setFiles(prev => ({ ...prev, aadhaarFront: null })); if (aadhaarFrontRef.current) aadhaarFrontRef.current.value = ""; }}
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all z-10"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <div className="relative group/btn">
            <button 
              type="button"
              onClick={() => aadhaarBackRef.current?.click()}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold font-jakarta transition-all border ${
                files.aadhaarBack ? "bg-[#2780C4] text-white border-[#2780C4]" : "bg-[#F8F8F8] text-[#2780C4] border-[#F0F0F0] hover:bg-[#EEF6FF]"
              }`}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 8l-4-4m0 0l-4 4m4-4v12" />
              </svg>
              {files.aadhaarBack ? "Uploaded" : "Back Copy"}
            </button>
            {files.aadhaarBack && (
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); setFiles(prev => ({ ...prev, aadhaarBack: null })); if (aadhaarBackRef.current) aadhaarBackRef.current.value = ""; }}
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all z-10"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* PAN Input + Upload */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-4 lg:mb-5 bg-white border border-[#F0F0F0] rounded-[30px] h-[52px] lg:h-[56px] flex items-center px-4 gap-3 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text"
      >
        <svg className="w-4 h-4 text-[#A1999B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        <div className="w-px h-4 bg-[#F0F0F0]" />
        <input type="text" placeholder="PAN Number" className="flex-1 bg-transparent text-[13px] lg:text-[14px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta min-w-0 cursor-text" />
        
        <div className="relative group/btn shrink-0">
          <button 
            type="button"
            onClick={() => panRef.current?.click()}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold font-jakarta transition-all border ${
              files.pan ? "bg-[#2780C4] text-white border-[#2780C4]" : "bg-[#F8F8F8] text-[#2780C4] border-[#F0F0F0] hover:bg-[#EEF6FF]"
            }`}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 8l-4-4m0 0l-4 4m4-4v12" />
            </svg>
            {files.pan ? "Uploaded" : "PAN Copy"}
          </button>
          {files.pan && (
            <button 
              type="button"
              onClick={(e) => { e.stopPropagation(); setFiles(prev => ({ ...prev, pan: null })); if (panRef.current) panRef.current.value = ""; }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all z-10"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </motion.div>

      {/* Submit */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="w-full h-[52px] lg:h-[58px] rounded-full text-[16px] font-bold text-white font-jakarta [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
      >
        Create Account
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="text-center mt-5 lg:mt-6 text-[14px] text-[#B8B8B8] font-jakarta"
      >
        Already have an account?{" "}
        <Link href="/login" className="text-[#2780C4] font-semibold hover:underline transition-all cursor-pointer">
          Sign in
        </Link>
      </motion.p>
    </div>
  );
}
