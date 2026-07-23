"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSubmitFarmlandToVerificationMutation } from "../../../../services/verification";
import MapWrapper from "../../../../components/MapWrapper";

export default function OnboardForm() {
  const router = useRouter();
  const [submitFarmland, { isLoading }] = useSubmitFarmlandToVerificationMutation();

  const [formData, setFormData] = useState({
    fullName: "Executive Name",
    dob: "1990-01-01",
    countryCode: "+91",
    phoneNumber: "",
    price: "",
    lat: "",
    long: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropPin = () => {
    setFormData({ ...formData, lat: "17.3850", long: "78.4867" });
    alert("GPS Pin dropped successfully!");
  };

  const handleSubmit = async () => {
    const nameParts = formData.fullName.split(" ");
    const frist_name = nameParts[0] || "";
    const last_name = nameParts.slice(1).join(" ") || "";

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
      country_id: 1,
      state_id: 1,
      district_id: 1,
      mandal_id: 1,
      milstone_stage_id: 1,
      milestone_status_id: 1,
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
          <div className="w-full h-[513px] bg-[#F1F5F9] rounded-[48px] relative overflow-hidden flex flex-col items-center justify-center p-6 shadow-[40px_0px_40px_rgba(9,20,38,0.04)] border border-[#E2E8F0]">
            <div className="absolute inset-0 z-0 pointer-events-auto">
              <MapWrapper 
                onLocationChange={(loc) => setFormData(prev => ({ ...prev, lat: loc.lat.toString(), long: loc.lng.toString() }))}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white/60 z-10 pointer-events-none" />
            <div className="relative z-20 flex flex-col items-center gap-4 mt-auto mb-20 pointer-events-none">
              <button 
                onClick={handleDropPin}
                className="bg-[#0F2F4C] text-white px-8 py-4 rounded-full font-jakarta font-bold text-[16px] leading-[24px] tracking-[0.4px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center gap-3 hover:scale-105 transition-transform pointer-events-auto"
              >
                <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                DROP GPS PIN TO LOCATE
              </button>
              <span className="bg-white/80 backdrop-blur-[6px] px-4 py-2 rounded-full font-jakarta font-bold text-[12px] leading-[16px] text-[#091426]/60 uppercase">
                GEOSPATIAL PRECISION REQUIRED
              </span>
            </div>
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
              <h3 className="m-0 font-jakarta font-extrabold text-[24px] leading-[30px] text-[#0F2F4C] uppercase pb-2">SELLER INFROMATION</h3>
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#2780C4]" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">FULL LEGAL NAME</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-normal text-[16px] leading-[20px] text-[#6B7280] outline-none h-[55px]" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">DATE OF BIRTH</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-normal text-[16px] leading-[20px] text-[#6B7280] outline-none h-[55px]" />
            </div>
            
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-[160px]">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">CODE</label>
                <input type="text" name="countryCode" value={formData.countryCode} onChange={handleInputChange} className="bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-bold text-[16px] leading-[24px] text-[#191C1D] outline-none h-[56px]" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">CONTACT NUMBER</label>
                <input type="text" name="phoneNumber" placeholder="000 000 0000" value={formData.phoneNumber} onChange={handleInputChange} className="bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-normal text-[16px] leading-[20px] text-[#6B7280] outline-none h-[55px]" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">QUOTED PRICE (OPTIONAL)</label>
              <input type="number" name="price" placeholder="Enter Amount" value={formData.price} onChange={handleInputChange} className="bg-[#F3F4F5] rounded-[16px] px-6 py-[18px] font-jakarta font-normal text-[16px] leading-[20px] text-[#6B7280] outline-none h-[55px]" />
            </div>
          </div>

          {/* Property Details */}
          <div className="w-full h-[255px] bg-white rounded-[48px] p-8 shadow-[0px_4px_20px_rgba(26,54,93,0.05)] flex flex-col gap-6">
            <h3 className="m-0 font-jakarta font-bold text-[12px] leading-[12px] tracking-[1.2px] text-[#0F2F4C] uppercase">PROPERTY DETAILS</h3>
            
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">COUNTRY</label>
                <input type="text" value="India" readOnly className="bg-[#F3F4F5] rounded-[16px] px-6 py-3 font-jakarta font-normal text-[16px] leading-[20px] text-[#6B7280] outline-none h-[48px]" />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">STATE</label>
                <input type="text" value="Telangana" readOnly className="bg-[#F3F4F5] rounded-[16px] px-6 py-3 font-jakarta font-normal text-[14px] leading-[18px] text-[#6B7280] outline-none h-[48px]" />
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">DISTRICT</label>
                <input type="text" value="Rangareddy" readOnly className="bg-[#F3F4F5] rounded-[16px] px-6 py-3 font-jakarta font-normal text-[14px] leading-[18px] text-[#6B7280] outline-none h-[48px]" />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-jakarta font-bold text-[10px] leading-[15px] tracking-[1px] text-[#45474C] uppercase ml-1">MANDAL</label>
                <input type="text" value="Chevella" readOnly className="bg-[#F3F4F5] rounded-[16px] px-6 py-3 font-jakarta font-normal text-[14px] leading-[18px] text-[#6B7280] outline-none h-[48px]" />
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
