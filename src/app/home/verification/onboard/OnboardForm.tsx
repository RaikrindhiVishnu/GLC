"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSubmitFarmlandToVerificationMutation } from "../../../../services/verification";
import { useGetAllGeoMasterDataQuery } from "../../../../services/master";
import MapWrapper from "../../../../components/MapWrapper";

export default function OnboardForm() {
  const router = useRouter();
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const [isMapActive, setIsMapActive] = useState(false);
  const [submitFarmland, { isLoading }] = useSubmitFarmlandToVerificationMutation();
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();
  const states = geoDataRes?.states?.slice(1) || [];
  const allDistricts = geoDataRes?.districts?.slice(1) || [];
  const allMandals = geoDataRes?.mandals?.slice(1) || [];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: new Date().toISOString().split('T')[0],
    countryCode: "+91",
    phoneNumber: "",
    price: "",
    lat: "",
    long: "",
    acers: "1",
    polygon: [] as any[],
    country: "1",
    state: "",
    district: "",
    mandal: "",
  });

  const filteredDistricts = formData.state 
    ? allDistricts.filter((d: any[]) => d[1] === Number(formData.state))
    : [];

  const filteredMandals = formData.district
    ? allMandals.filter((m: any[]) => m[1] === Number(formData.district) || m[2] === Number(formData.district))
    : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    const newErrors: Record<string, string> = {};
    const frist_name = formData.firstName.trim();
    const last_name = formData.lastName.trim();

    if (!frist_name) newErrors.firstName = "Required";
    if (!last_name) newErrors.lastName = "Required";
    if (!formData.dob) newErrors.dob = "Required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Required";
    if (!formData.lat || !formData.long) {
      newErrors.map = "Required";
      alert("Please drop a GPS pin on the map to locate your land.");
    }
    if (!formData.acers) newErrors.acers = "Required";
    if (!formData.state) newErrors.state = "Required";
    if (!formData.district) newErrors.district = "Required";
    if (!formData.mandal) newErrors.mandal = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      drop_pin: {
        lat: formData.lat || "17.3850",
        long: formData.long || "78.4867",
      },
      seller_information: {
        frist_name,
        last_name,
        dob: formData.dob,
        price: Number(formData.price) || 0,
        country_code: formData.countryCode,
        phone_number: formData.phoneNumber,
      },
      farmland_image: "",
      country_id: Number(formData.country) || 1,
      state_id: Number(formData.state) || 1,
      district_id: Number(formData.district) || 1,
      mandal_id: Number(formData.mandal) || 1,
      milstone_stage_id: 1,
      milestone_status_id: 1,
      acers: Number(formData.acers) || 1,
      price: Number(formData.price) || 0,
      per_acer_value: 100000,
      per_acre_value: 100000,
      polygon: formData.polygon && Array.isArray(formData.polygon) && formData.polygon.length > 0 
        ? ["polygon", ...formData.polygon.flatMap((p: any) => [p.lat.toString(), p.lng.toString()])] 
        : undefined,
    };

    try {
      await submitFarmland(payload).unwrap();
      router.push("/home/verification/request-success");
    } catch (error) {
      console.error("Failed to submit farmland:", error);
      alert("Failed to submit farmland. Please try again.");
    }
  };

  return (
    <section className="w-full max-w-[1248px] mx-auto px-4 lg:px-8 pt-16 pb-32 box-border flex flex-col items-start bg-[#F8F9FA]">
      <div className="w-full mb-12 flex flex-col gap-[15px]">
        <h1 className="m-0 font-jakarta font-extrabold text-[48px] leading-[48px] tracking-[-1.2px] text-[#0F2F4C]">
          Onboard your Asset
        </h1>
        <p className="m-0 font-jakarta font-normal text-[20px] leading-[32px] text-[#45474C]">
          Initialize your land discovery and management journey.
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-8 mb-12">
        {/* Left Column: Map and Upload */}
        <div className="flex-[1.1] flex flex-col gap-6">
          {/* Map Section */}
          <div className={`w-full h-[513px] bg-[#F1F5F9] rounded-[48px] relative overflow-hidden flex flex-col items-center justify-center p-6 shadow-[40px_0px_40px_rgba(9,20,38,0.04)] ${errors.map ? 'border-[4px] border-[#FF3B30]' : 'border border-[#E2E8F0]'}`}>
            <div className="absolute inset-0 z-0 pointer-events-auto">
              <MapWrapper 
                onLocationChange={(loc) => {
                  setFormData(prev => ({ ...prev, lat: loc.lat.toString(), long: loc.lng.toString() }));
                  if (errors.map) setErrors(prev => ({ ...prev, map: "" }));
                }}
                onPolygonChange={(poly) => setFormData(prev => ({ ...prev, polygon: poly }))}
              />
            </div>
            {!isMapFullscreen && !isMapActive && (
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)", zIndex: 1, pointerEvents: "none" }} />
            )}
            {!isMapFullscreen && !isMapActive && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", zIndex: 5, position: "relative", pointerEvents: "none" }}>
                <button
                  type="button"
                  onClick={() => setIsMapActive(true)}
                  style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "16px 32px", gap: "12px", background: "#0F2F4C", borderRadius: "9999px", border: "none", boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)", cursor: "pointer", justifyContent: "center", pointerEvents: "auto" }}
                >
                  <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", letterSpacing: "0.4px" }}>DROP GPS PIN TO LOCATE</span>
                </button>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 16px", background: "rgba(255,255,255,0.8)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", borderRadius: "9999px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "rgba(9,20,38,0.6)" }}>GEOSPATIAL PRECISION REQUIRED</span>
                </div>
              </div>
            )}
          </div>

          {/* Upload Section */}
          <div className="w-full bg-white rounded-[48px] p-8 shadow-[0px_4px_20px_rgba(26,54,93,0.05)] flex flex-col lg:flex-row gap-8 items-center h-[205px]">
            <div className="w-[72px] h-[78px] bg-[#D6E3FF] rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg width="24" height="30" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
            </div>
            <div className="flex flex-col flex-1 h-full justify-center">
              <h3 className="m-0 font-jakarta font-semibold text-[24px] leading-[31px] text-[#002045] mb-2">Upload Title Deed & Passbook</h3>
              <span className="font-jakarta font-normal text-[14px] leading-[20px] text-[#43474E] mb-6">PDF, JPG, PNG Max 10MB per file</span>
              <button className="bg-white border-[2px] border-[#0061A5] text-[#0061A5] w-fit px-8 py-3.5 rounded-full font-jakarta font-bold text-[14px] leading-[20px] tracking-[0.7px] uppercase hover:bg-[#F3F7FA] transition-colors">
                BROWSE FILES OR SCAN
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Forms */}
        <div className="flex-[1.1] flex flex-col gap-6">
          {/* Seller Information */}
          <div className="w-full h-auto bg-white rounded-[48px] p-10 shadow-[40px_0px_40px_rgba(9,20,38,0.04)] flex flex-col gap-8 relative">
            <div className="flex flex-col gap-2 relative">
              <h3 className="m-0 font-jakarta font-extrabold text-[24px] leading-[30px] text-[#0F2F4C] uppercase pb-2">SELLER INFORMATION</h3>
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#2780C4]" />
            </div>
            
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">FIRST NAME</label>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} className={`bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-normal text-[16px] leading-[20px] text-[#191C1D] outline-none h-[55px] placeholder:font-normal placeholder:text-[#6B7280] ${errors.firstName ? 'border-[2px] border-[#FF3B30]' : ''}`} />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">LAST NAME</label>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} className={`bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-normal text-[16px] leading-[20px] text-[#191C1D] outline-none h-[55px] placeholder:font-normal placeholder:text-[#6B7280] ${errors.lastName ? 'border-[2px] border-[#FF3B30]' : ''}`} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">DATE OF BIRTH</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className={`bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-normal text-[16px] leading-[20px] text-[#191C1D] outline-none h-[55px] ${errors.dob ? 'border-[2px] border-[#FF3B30]' : ''}`} />
            </div>
            
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-[160px]">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">CODE</label>
                <input type="text" name="countryCode" value={formData.countryCode} onChange={handleInputChange} className="bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-bold text-[16px] leading-[24px] text-[#191C1D] outline-none h-[56px]" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">CONTACT NUMBER</label>
                <input type="text" name="phoneNumber" placeholder="000 000 0000" value={formData.phoneNumber} onChange={handleInputChange} className={`bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-normal text-[16px] leading-[20px] text-[#191C1D] outline-none h-[55px] placeholder:text-[#6B7280] ${errors.phoneNumber ? 'border-[2px] border-[#FF3B30]' : ''}`} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">QUOTED PRICE (OPTIONAL)</label>
              <input type="number" name="price" placeholder="Enter Amount" value={formData.price} onChange={handleInputChange} className="bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-normal text-[16px] leading-[20px] text-[#191C1D] outline-none h-[55px] placeholder:text-[#6B7280]" />
            </div>
          </div>

          {/* Property Details */}
          <div className="w-full h-auto bg-white rounded-[48px] p-8 shadow-[0px_4px_20px_rgba(26,54,93,0.05)] flex flex-col gap-6">
            <h3 className="m-0 font-jakarta font-bold text-[12px] leading-[12px] tracking-[1.2px] text-[#0F2F4C] uppercase">PROPERTY DETAILS</h3>
            
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">COUNTRY</label>
                <div className="relative">
                  <select name="country" value={formData.country} onChange={handleInputChange} className="w-full bg-[#F3F4F5] rounded-[16px] px-6 py-3 font-jakarta font-normal text-[16px] leading-[20px] text-[#191C1D] outline-none h-[48px] appearance-none cursor-pointer">
                    <option value="1">India</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">STATE</label>
                <div className="relative">
                  <select name="state" value={formData.state} onChange={handleInputChange} className={`w-full bg-[#F3F4F5] rounded-[16px] px-6 py-3 font-jakarta font-normal text-[14px] leading-[18px] text-[#191C1D] outline-none h-[48px] appearance-none cursor-pointer ${errors.state ? 'border-[2px] border-[#FF3B30]' : ''}`}>
                    <option value="" disabled>Select State</option>
                    {states.map((s: any[]) => (
                      <option key={s[0]} value={s[0]}>{s[3]}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">DISTRICT</label>
                <div className="relative">
                  <select name="district" value={formData.district} onChange={handleInputChange} className={`w-full bg-[#F3F4F5] rounded-[16px] px-6 py-3 font-jakarta font-normal text-[14px] leading-[18px] text-[#191C1D] outline-none h-[48px] appearance-none cursor-pointer ${errors.district ? 'border-[2px] border-[#FF3B30]' : ''}`} disabled={!formData.state}>
                    <option value="" disabled>Select District</option>
                    {filteredDistricts.map((d: any[]) => (
                      <option key={d[0]} value={d[0]}>{d[3]}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">MANDAL</label>
                <div className="relative">
                  <select name="mandal" value={formData.mandal} onChange={handleInputChange} className={`w-full bg-[#F3F4F5] rounded-[16px] px-6 py-3 font-jakarta font-normal text-[14px] leading-[18px] text-[#191C1D] outline-none h-[48px] appearance-none cursor-pointer ${errors.mandal ? 'border-[2px] border-[#FF3B30]' : ''}`} disabled={!formData.district}>
                    <option value="" disabled>Select Mandal</option>
                    {filteredMandals.map((m: any[]) => (
                      <option key={m[0]} value={m[0]}>{m[3]}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">ACRES</label>
                <input type="number" name="acers" value={formData.acers} onChange={handleInputChange} className={`bg-[#F3F4F5] rounded-[16px] px-6 py-3 font-jakarta font-normal text-[14px] leading-[18px] text-[#191C1D] outline-none h-[48px] ${errors.acers ? 'border-[2px] border-[#FF3B30]' : ''}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center px-4">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-[#0F2F4C] text-white font-jakarta font-bold text-[16px] px-12 py-4 rounded-full shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
        >
          {isLoading ? "Processing..." : "Proceed to Payment"}
        </button>
      </div>

    </section>
  );
}
