"use client";

import Link from "next/link";
import { useState, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
// @ts-ignore
import { useCountries } from "use-react-countries";
import { motion } from "framer-motion";
import { authService } from "../../../services/auth";
import { useCreateUserMutation } from "../../../services/user";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const { countries } = useCountries();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [preferredState, setPreferredState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    countryCallingCode: "+91",
    flags: { png: "https://flagcdn.com/w320/in.png" }
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  
  const [createUser] = useCreateUserMutation();

  const filteredCountries = useMemo(() => {
    return countries
      .filter((c: any) => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.countryCallingCode.includes(searchQuery)
      )
      .sort((a: any, b: any) => a.name.localeCompare(b.name));
  }, [countries, searchQuery]);

  const handleCreateAccount = async () => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!phone.trim()) newErrors.phone = "Mobile number is required.";
    if (!preferredState) newErrors.state = "Preferred Investment State is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setError("Please fill all mandatory fields.");
      return;
    }
    
    setErrors({});
    setError("");
    setLoading(true);
    try {
      await createUser({
        firstName,
        lastName,
        email,
        phoneNumber: phone || "0000000000",
        countryCode: selectedCountry.countryCallingCode,
        role_id: 2,
        role_code: "AGENT",
        dob: "1990-01-01"
      }).unwrap();
      
      // Step 2: Redirect to registration-success screen (backend handles sending credentials)
      router.push(`/login/registration-success?email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[480px] lg:max-w-[500px]">
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-3 lg:mb-4"
      >
        <Link href="/" className="inline-block shrink-0 [-webkit-tap-highlight-color:transparent] hover:opacity-80 transition-opacity">
          <img
            src="/assets/login/green land capital (1) 1.svg"
            alt="Green Land Capital"
            className="w-[120px] lg:w-[130px] h-auto object-contain"
          />
        </Link>
      </motion.div>

      <h1 className="text-[28px] lg:text-[34px] font-bold text-[#353535] font-jakarta leading-tight mb-1 flex flex-wrap gap-x-2">
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
        className="text-[13px] lg:text-[14px] text-[#B8B8B8] font-jakarta mb-5 lg:mb-6"
      >
        Green Land Capital Asset Verification.
      </motion.p>

      {/* First + Last Name */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-2 mb-2 lg:mb-3"
      >
        <div className={`flex-1 bg-white border ${errors.firstName ? 'border-red-500' : 'border-[#F0F0F0]'} rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm`}>
          <Image src="/assets/login/hugeicons_profile.svg" alt="First Name" width={20} height={20} className="shrink-0" />
          <div className="w-px h-4 bg-[#F0F0F0]" />
          <input 
            type="text" 
            placeholder="Enter First Name" 
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (errors.firstName) setErrors(prev => ({ ...prev, firstName: "" }));
            }}
            className="flex-1 bg-transparent text-[13px] lg:text-[14px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta min-w-0 cursor-text" 
          />
        </div>
        <div className={`flex-1 bg-white border ${errors.lastName ? 'border-red-500' : 'border-[#F0F0F0]'} rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm`}>
          <Image src="/assets/login/hugeicons_profile.svg" alt="Last Name" width={20} height={20} className="shrink-0" />
          <div className="w-px h-4 bg-[#F0F0F0]" />
          <input 
            type="text" 
            placeholder="Enter Last Name" 
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (errors.lastName) setErrors(prev => ({ ...prev, lastName: "" }));
            }}
            className="flex-1 bg-transparent text-[13px] lg:text-[14px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta min-w-0 cursor-text" 
          />
        </div>
      </motion.div>
      <div className="flex gap-2 mb-2 lg:mb-3 px-4">
        <div className="flex-1 text-red-500 text-[11px] font-jakarta">{errors.firstName}</div>
        <div className="flex-1 text-red-500 text-[11px] font-jakarta">{errors.lastName}</div>
      </div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`mb-1 bg-white border ${errors.email ? 'border-red-500' : 'border-[#F0F0F0]'} rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm`}
      >
        <Image src="/assets/login/hugeicons_mail-02.svg" alt="Email" width={20} height={20} className="shrink-0" />
        <div className="w-px h-4 bg-[#F0F0F0]" />
        <input 
          type="email" 
          placeholder="Enter Mail ID" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
          }}
          className="flex-1 bg-transparent text-[13px] lg:text-[14px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text" 
        />
      </motion.div>
      {errors.email && <div className="text-red-500 text-[11px] font-jakarta mb-2 lg:mb-3 px-4">{errors.email}</div>}

      {/* Mobile Number Split Layout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative mb-5 lg:mb-6 flex gap-2 group"
      >
        {/* Left Pill: Flag + Chevron */}
        <button
          type="button"
          onClick={() => { setIsDropdownOpen(!isDropdownOpen); setSearchQuery(""); }}
          className="bg-white border border-[#F0F0F0] rounded-full h-[46px] lg:h-[50px] flex items-center justify-center px-4 gap-2 hover:bg-[#F8F8F8] transition-all shrink-0 shadow-sm [-webkit-tap-highlight-color:transparent]"
        >
          <img src={selectedCountry.flags.png} alt={selectedCountry.name} className="w-[20px] h-[14px] object-cover rounded-sm shadow-sm" />
          <svg className={`w-3 h-3 text-[#BDBDBD] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Right Pill: Input */}
        <div className={`flex-1 bg-white border ${errors.phone ? 'border-red-500' : 'border-[#F0F0F0]'} rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm`}>
          <input 
            type="tel" 
            placeholder="Enter Mobile Number" 
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value.replace(/\D/g, ''));
              if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
            }}
            className="flex-1 bg-transparent text-[13px] lg:text-[14px] placeholder:text-[#BDBDBD] focus:outline-none font-jakarta cursor-text" 
          />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
            <div className="absolute top-[55px] left-0 w-[260px] bg-white rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-[#EBEBEB] z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="max-h-[160px] overflow-y-auto custom-scrollbar py-1.5">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((c: any) => (
                    <button
                      key={c.name + c.countryCallingCode}
                      type="button"
                      onClick={() => { setSelectedCountry(c); setIsDropdownOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#EEF6FF] group/item transition-all"
                    >
                      <img src={c.flags.png} alt={c.name} className="w-[18px] h-[12px] object-cover rounded-sm shrink-0" />
                      <span className="flex-1 text-left text-[13px] font-semibold text-[#434343] group-hover/item:text-[#2780C4] font-jakarta truncate">{c.name}</span>
                      <span className="text-[12px] text-[#A0A0A0] font-jakarta shrink-0">{c.countryCallingCode}</span>
                    </button>
                  ))
                ) : (
                  <div className="py-4 text-center text-[#BDBDBD] text-[13px] font-jakarta">No countries found</div>
                )}
              </div>
            </div>
          </>
        )}
      </motion.div>
      {errors.phone && <div className="text-red-500 text-[11px] font-jakarta mb-5 lg:mb-6 pl-[80px]">{errors.phone}</div>}

      {/* Preferred Investment State */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mb-1 relative"
      >
        <div className={`w-full bg-[#FEFEFE] border-[2px] ${errors.state ? 'border-red-500' : isStateDropdownOpen ? 'border-[#2780C4] ring-1 ring-[#2780C4]/20' : 'border-[#F8F8F8]'} rounded-[30px] h-[64px] flex items-center px-6 gap-2 transition-all shadow-sm relative`}>
          <button
            type="button"
            onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
            className={`flex-1 bg-transparent focus:outline-none font-jakarta text-[13px] text-left appearance-none cursor-pointer ${preferredState ? "text-[#353535]" : "text-[#BDBDBD]"}`}
          >
            {preferredState || "Select Preferred Investment State"}
          </button>
          
          <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
            <svg className={`w-3.5 h-3.5 text-[#6C7A8A] transition-transform duration-300 ${isStateDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {isStateDropdownOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsStateDropdownOpen(false)} />
              <div className="absolute top-[72px] left-0 w-full bg-white rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-[#EBEBEB] z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="max-h-[220px] overflow-y-auto custom-scrollbar py-2">
                  {["Karnataka", "Maharashtra", "Tamil Nadu", "Telangana", "Andhra Pradesh", "Kerala"].map((state) => (
                    <button
                      key={state}
                      type="button"
                      onClick={() => { 
                        setPreferredState(state); 
                        setIsStateDropdownOpen(false); 
                        if (errors.state) setErrors(prev => ({ ...prev, state: "" }));
                      }}
                      className={`w-full flex items-center px-6 py-3 hover:bg-[#EEF6FF] transition-all text-left font-jakarta text-[14px] ${preferredState === state ? "text-[#2780C4] font-semibold bg-[#F5F9FF]" : "text-[#434343] font-medium"}`}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
      {errors.state && <div className="text-red-500 text-[11px] font-jakarta mb-5 lg:mb-6 px-4">{errors.state}</div>}

      {error && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-red-500 text-[13px] font-jakarta mb-4 text-center"
        >
          {error}
        </motion.p>
      )}

      {/* Submit */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        onClick={handleCreateAccount}
        disabled={loading}
        className="w-full h-[48px] lg:h-[52px] rounded-full text-[15px] lg:text-[16px] font-bold text-white font-jakarta [-webkit-tap-highlight-color:transparent] transition-all cursor-pointer disabled:opacity-70 mt-2 shadow-[0_8px_20px_rgba(39,128,196,0.2)]"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "1px solid #43B6CD" }}
      >
        {loading ? "Sending OTP..." : "Sign-Up"}
      </motion.button>
    </div>
  );
}
