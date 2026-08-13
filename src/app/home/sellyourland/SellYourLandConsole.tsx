"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useGetAllGeoMasterDataQuery } from "../../../services/master";
import { useSellFarmlandMutation, useUpdateCoverImageMutation } from "@/services/farmland";
import { useUpdateFarmlandImagesMutation } from "@/services/home";
import { s3Service } from "@/services/s3";
import MapWrapper from "../../../components/MapWrapper";

export default function SellYourLandConsole() {
  const router = useRouter();
  const [sellFarmland, { isLoading: isSubmitting }] = useSellFarmlandMutation();
  const [updateCoverImage] = useUpdateCoverImageMutation();
  const [updateFarmlandImages] = useUpdateFarmlandImagesMutation();
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    code: "+91",
    contactNumber: "",
    email: "",
    region: "",
    district: "",
    mandal: "",
    acreage: "",
    baseValuation: "",
    description: "",
    lat: "",
    lng: "",
    polygon: [] as {lat: number, lng: number}[],
  });
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [propertyPhotos, setPropertyPhotos] = useState<File[]>([]);
  const [isMapActive, setIsMapActive] = useState(false);
  const [createdFarmlandId, setCreatedFarmlandId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { data: geoDataRes } = useGetAllGeoMasterDataQuery();
  const states = geoDataRes?.states?.slice(1) || [];
  const allDistricts = geoDataRes?.districts?.slice(1) || [];
  const allMandals = geoDataRes?.mandals?.slice(1) || [];

  const filteredDistricts = formData.region 
    ? allDistricts.filter((d: any[]) => d[1] === Number(formData.region))
    : [];

  // Mandals usually link to district via index 1 or 2. We'll check both for safety if we don't know the exact schema.
  const filteredMandals = formData.district
    ? allMandals.filter((m: any[]) => m[1] === Number(formData.district) || m[2] === Number(formData.district))
    : [];

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === "contactNumber" && value !== "" && !/^\d+$/.test(value)) return;
    if ((name === "acreage" || name === "baseValuation") && value !== "" && !/^\d*\.?\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleIntermediateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Land Asset owner parameter payload securely archived.\nProceeding to verify Land Specifics and Institutional Audit workflows.`);
  };

  const handleFinalAuditTrigger = async () => {
    // Form Validations
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter the Full Name.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Invalid name format. Only alphabets are allowed.";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Please enter the Contact Number.";
    } else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, ''))) {
      newErrors.contactNumber = "Please enter a valid 10-digit contact number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter the Email Address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.region) newErrors.region = "Please select a Region (State).";
    if (!formData.district) newErrors.district = "Please select a District.";
    if (!formData.mandal) newErrors.mandal = "Please select a Mandal.";
    
    if (!formData.acreage) {
      newErrors.acreage = "Please enter the Total Acreage.";
    } else if (isNaN(Number(formData.acreage)) || Number(formData.acreage) <= 0) {
      newErrors.acreage = "Please enter a valid positive number for acreage.";
    }

    if (!formData.baseValuation) {
      newErrors.baseValuation = "Please enter the Quoted Price (Base Valuation).";
    } else if (isNaN(Number(formData.baseValuation)) || Number(formData.baseValuation) <= 0) {
      newErrors.baseValuation = "Please enter a valid positive amount.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please enter the Land Description.";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Land Description must be at least 10 characters long.";
    }
    
    // Map Validations
    if (!formData.lat || !formData.lng) newErrors.map = "Please drop a pin on the map.";
    if (!formData.polygon || formData.polygon.length === 0) newErrors.polygon = "Please draw a polygon boundary.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Optional: Scroll to top smoothly so they see errors
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      let coverImageUrl = "";
      if (coverImage) {
        try {
          const res = await s3Service.uploadFile(coverImage);
          const extractedKey = res.key || (res.url ? new URL(res.url).pathname.substring(1) : "");
          if (extractedKey) coverImageUrl = extractedKey;
        } catch (e) {
          console.error("Failed to upload cover image", e);
        }
      }

      const galleryImageUrls: string[] = [];
      for (const photo of propertyPhotos) {
        try {
          const res = await s3Service.uploadFile(photo);
          const extractedKey = res.key || (res.url ? new URL(res.url).pathname.substring(1) : "");
          if (extractedKey) galleryImageUrls.push(extractedKey);
        } catch (e) {
          console.error("Failed to upload gallery image", e);
        }
      }

      const payload = {
        location_details: {
          country_id: 1,
          state_id: Number(formData.region) || 1,
          district_id: Number(formData.district) || 1,
          mandal_id: Number(formData.mandal) || 1,
          lat: formData.lat || "1.3455544",
          long: formData.lng || "1.387733",
          pin_label: "Farm Entry Gate"
        },
        owner_details: {
          first_name: formData.fullName.split(' ')[0] || "Unknown",
          last_name: formData.fullName.split(' ').slice(1).join(' ') || "Unknown",
          country_code: formData.code || "+91",
          phone_number: formData.contactNumber,
          email_address: formData.email
        },
        cover_image: coverImageUrl,
        total_acers: Number(formData.acreage) || 10,
        price: formData.baseValuation || "300000",
        land_description: formData.description || "N/A",
        polygon: formData.polygon && Array.isArray(formData.polygon) && formData.polygon.length > 0 
          ? ["polygon", ...formData.polygon.flatMap((p: any) => [p.lat.toString(), p.lng.toString()])] 
          : undefined,
        gallery_images: galleryImageUrls.length > 0 ? galleryImageUrls : undefined,
        master_milestone_stage_id: 1,
        master_milestone_stage_status_id: 1,
        per_acer_value: (Number(formData.baseValuation) / (Number(formData.acreage) || 1)).toString()
      };
      
      const res = await sellFarmland(payload).unwrap();
      if (res.success) {
        const newFarmlandId = res.data?.farmland_id;
        if (newFarmlandId) {
          setCreatedFarmlandId(newFarmlandId);
          
          // Step 2: Now that we have the ID, update the paths
          if (coverImageUrl) {
            const finalCoverImage = `farmlands/${newFarmlandId}/land_images/cover_images/${coverImageUrl}`;
            await updateCoverImage({
              farmland_id: newFarmlandId,
              cover_image_url: finalCoverImage
            }).unwrap().catch(e => console.error("Cover image update failed", e));
          }

          if (galleryImageUrls.length > 0) {
            const finalGalleryImages = galleryImageUrls.map(url => `farmlands/${newFarmlandId}/land_images/gallery_images/${url}`);
            const storedUserId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
            const numericUserId = storedUserId ? parseInt(storedUserId, 10) : 45;
            await updateFarmlandImages({
              farmland_id: newFarmlandId,
              user_id: numericUserId,
              add_list: finalGalleryImages,
              delete_list: []
            }).unwrap().catch(e => console.error("Gallery images update failed on backend", e));
          }
        }
        setShowModal(true);
      } else {
        alert("Failed to submit: " + (res.message || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please check your network and try again.");
    }
  };

  const getInputStyle = (fieldName: string): React.CSSProperties => ({
    boxSizing: "border-box",
    width: "100%",
    height: "55px",
    background: "#F3F4F5",
    borderRadius: "16px",
    border: errors[fieldName] ? "2px solid #FF3B30" : "none",
    padding: "17px 24px 18px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#191C1D",
    outline: "none",
  });

  const getSelectStyle = (fieldName: string): React.CSSProperties => ({
    width: "100%", 
    height: "100%", 
    boxSizing: "border-box", 
    background: "#FFFFFF", 
    border: errors[fieldName] ? "2px solid #FF3B30" : "1px solid rgba(197, 198, 205, 0.3)", 
    borderRadius: "9999px", 
    padding: "0 48px", 
    fontFamily: "'Plus Jakarta Sans', sans-serif", 
    fontSize: "16px", 
    color: "#131600", 
    outline: "none", 
    appearance: "none", 
    cursor: "pointer" 
  });

  const labelStyle = (fieldName: string): React.CSSProperties => ({
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "10px",
    lineHeight: "15px",
    letterSpacing: "1px",
    color: errors[fieldName] ? "#FF3B30" : "#45474C",
    textTransform: "uppercase",
    paddingLeft: "4px",
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 box-border flex flex-col gap-12">

      {/* ─── 1. CONSOLE HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.1", letterSpacing: "-0.9px", color: "#0F2F4C" }}>
          Institutional Listing Console
        </h2>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#45474C" }}>
          Secure your assets within the institutional capital grid.
        </span>
      </motion.div>

      {/* ─── 2. PHASE 01: MAP + OWNER DETAILS ─── */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">

        {/* LEFT: Map preview */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 0 48px",
            background: "#FFFFFF",
            boxShadow: "40px 0px 40px rgba(9,20,38,0.04)",
            borderRadius: "48px",
            minHeight: "320px",
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "#F1F5F9", zIndex: 0, overflow: "hidden", borderRadius: "48px", border: (errors.map || errors.polygon) ? "2px solid #FF3B30" : "none" }}>
            <MapWrapper 
              onLocationChange={(loc) => { setFormData(prev => ({ ...prev, lat: loc.lat.toString(), lng: loc.lng.toString() })); setErrors(prev => ({...prev, map: ""})) }}
              onPolygonChange={(poly) => { setFormData(prev => ({ ...prev, polygon: poly })); setErrors(prev => ({...prev, polygon: ""})) }}
              onFullscreenChange={setIsMapFullscreen}
            />
          </div>
          {!isMapFullscreen && !isMapActive && (
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)", zIndex: 1, pointerEvents: "none" }} />
          )}
          {!isMapFullscreen && !isMapActive && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", zIndex: 5, position: "relative", pointerEvents: "none" }}>
              <button
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
        </motion.div>

        {/* RIGHT: Owner details form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full lg:flex-1"
          style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "40px", background: "#FFFFFF", boxShadow: "40px 0px 40px rgba(9,20,38,0.04)", borderRadius: "48px" }}
        >
          <form onSubmit={handleIntermediateSubmit} style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "32px", letterSpacing: "-1.2px", color: "#0F2F4C", textTransform: "uppercase" }}>OWNER DETAILS</h3>
              <div style={{ width: "48px", height: "4px", background: "#2780C4" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
              {/* FULL LEGAL NAME */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={labelStyle("fullName")}>FULL LEGAL NAME</label>
                <input type="text" name="fullName" placeholder="Executive Name" value={formData.fullName} onChange={handleInputChange} style={getInputStyle("fullName")} />
                {errors.fullName && <span style={{ color: "#FF3B30", fontSize: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif", paddingLeft: "4px" }}>{errors.fullName}</span>}
              </div>

              {/* CODE + CONTACT NUMBER */}
              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "120px", flexShrink: 0 }}>
                  <label style={labelStyle("code")}>CODE</label>
                  <input type="text" name="code" value={formData.code} onChange={handleInputChange} style={{ ...getInputStyle("code"), height: "56px", textAlign: "center", fontWeight: 700 }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label style={labelStyle("contactNumber")}>CONTACT NUMBER</label>
                  <input type="text" name="contactNumber" placeholder="000 000 0000" value={formData.contactNumber} onChange={handleInputChange} style={getInputStyle("contactNumber")} />
                  {errors.contactNumber && <span style={{ color: "#FF3B30", fontSize: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif", paddingLeft: "4px" }}>{errors.contactNumber}</span>}
                </div>
              </div>

              {/* CORPORATE EMAIL */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={labelStyle("email")}>CORPORATE EMAIL</label>
                <input type="email" name="email" placeholder="name@corporation.com" value={formData.email} onChange={handleInputChange} style={getInputStyle("email")} />
                {errors.email && <span style={{ color: "#FF3B30", fontSize: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif", paddingLeft: "4px" }}>{errors.email}</span>}
              </div>
            </div>
            <button type="submit" style={{ display: "none" }} />
          </form>
        </motion.div>
      </div>


      {/* ─── 3. PHASE 02: LAND SPECIFICS ─── */}
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ display: isMapFullscreen ? "none" : "block" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%", gap: "32px", opacity: 0.4, transition: "opacity 0.3s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
        >



          {/* ─── NEW MEDIA UPLOAD SECTIONS ─── */}
          <div className="w-full max-w-[1184px] mx-auto flex flex-col gap-12 lg:gap-[48px]">

            {/* Location Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <div style={{ padding: "0 4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "#0F2F4C" }}>
                  LOCATION
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                {/* State Search */}
                <div style={{ flex: 1, position: "relative", height: "57px" }}>
                  <select name="region" value={formData.region} onChange={handleInputChange} style={getSelectStyle("region")}>
                    <option value="" disabled style={{ color: "#C5C6CD" }}>State Search</option>
                    {states.map((s: any[]) => (
                      <option key={s[0]} value={s[0]}>{s[3]}</option>
                    ))}
                  </select>
                  <div style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                    <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke={errors.region ? "#FF3B30" : "#75777D"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={errors.region ? "#FF3B30" : "#75777D"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>

                {/* City / District Search */}
                <div style={{ flex: 1, position: "relative", height: "57px" }}>
                  <select name="district" value={formData.district} onChange={handleInputChange} style={getSelectStyle("district")}>
                    <option value="" disabled style={{ color: "#C5C6CD" }}>City / District Search</option>
                    {filteredDistricts.map((d: any[]) => (
                      <option key={d[0]} value={d[0]}>{d[3]}</option>
                    ))}
                  </select>
                  <div style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={errors.district ? "#FF3B30" : "#75777D"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /></svg>
                  </div>
                  <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={errors.district ? "#FF3B30" : "#75777D"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>

                {/* Mandal Search */}
                <div style={{ flex: 1, position: "relative", height: "57px" }}>
                  <select name="mandal" value={formData.mandal} onChange={handleInputChange} style={getSelectStyle("mandal")}>
                    <option value="" disabled style={{ color: "#C5C6CD" }}>Mandal Search</option>
                    {filteredMandals.map((m: any[]) => (
                      <option key={m[0]} value={m[0]}>{m[3]}</option>
                    ))}
                  </select>
                  <div style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={errors.mandal ? "#FF3B30" : "#75777D"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /></svg>
                  </div>
                  <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={errors.mandal ? "#FF3B30" : "#75777D"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Land Details and Description Section */}
            <div className="flex flex-col md:flex-row gap-12 w-full">
              {/* Land Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                <div style={{ padding: "0 8px" }}>
                  <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#131600" }}>
                    Land Details
                  </h3>
                </div>
                <div style={{ background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", borderRadius: "24px", padding: "4px", display: "flex", flexDirection: "column", minHeight: "182px" }}>
                  {/* Acreage Row */}
                  <div style={{ display: "flex", flexDirection: "column", padding: "20px", gap: "4px", borderBottom: "1px solid rgba(199, 200, 175, 0.1)", background: errors.acreage ? "rgba(255, 59, 48, 0.05)" : "transparent" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: errors.acreage ? "#FF3B30" : "rgba(70, 72, 53, 0.6)" }}>
                      Total Acreage
                    </span>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                      <input 
                        type="text" 
                        name="acreage" 
                        value={formData.acreage} 
                        onChange={handleInputChange} 
                        placeholder="0.00" 
                        style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "20px", color: errors.acreage ? "#FF3B30" : "#131600" }} 
                      />
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#0F2F4C" }}>Acres</span>
                    </div>
                    {errors.acreage && <span style={{ color: "#FF3B30", fontSize: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: "4px" }}>{errors.acreage}</span>}
                  </div>
                  {/* Price Row */}
                  <div style={{ display: "flex", flexDirection: "column", padding: "20px", gap: "4px", background: errors.baseValuation ? "rgba(255, 59, 48, 0.05)" : "transparent" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: errors.baseValuation ? "#FF3B30" : "rgba(70, 72, 53, 0.6)" }}>
                      Quoted Price
                    </span>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "20px", color: errors.baseValuation ? "#FF3B30" : "#0F2F4C" }}>₹</span>
                      <input 
                        type="text" 
                        name="baseValuation" 
                        value={formData.baseValuation} 
                        onChange={handleInputChange} 
                        placeholder="Enter amount" 
                        style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "20px", color: errors.baseValuation ? "#FF3B30" : "#131600" }} 
                      />
                    </div>
                    {errors.baseValuation && <span style={{ color: "#FF3B30", fontSize: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: "4px" }}>{errors.baseValuation}</span>}
                  </div>
                </div>
              </div>

              {/* Land Description Section */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                <div style={{ padding: "0 8px" }}>
                  <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#131600" }}>
                    Land Description
                  </h3>
                </div>
                <div style={{ 
                  background: errors.description ? "rgba(255, 59, 48, 0.02)" : "#FFFFFF", 
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.04)", 
                  borderRadius: "24px", 
                  border: errors.description ? "2px solid #FF3B30" : "none",
                  padding: "30px 42px",
                  width: "100%",
                  boxSizing: "border-box",
                  minHeight: "182px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "stretch"
                }}>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={(e: any) => handleInputChange(e)}
                    placeholder="Enter Description..." 
                    style={{ width: "100%", flex: 1, minHeight: "122px", background: "transparent", border: "none", outline: "none", resize: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", lineHeight: "24px", color: "#131600" }} 
                  />
                  {errors.description && <span style={{ color: "#FF3B30", fontSize: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: "8px" }}>{errors.description}</span>}
                </div>
              </div>
            </div>
            
            {/* 1. Cover Image Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(20px, 3vw, 24px)", lineHeight: "1.33", color: "#131600" }}>
                Cover Image (Optional)
              </h3>
              <div style={{ 
                background: "#FFFFFF", 
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.04)", 
                borderRadius: "clamp(24px, 4vw, 48px)", 
                padding: "clamp(16px, 3vw, 24px) clamp(16px, 3vw, 31px) clamp(24px, 4vw, 50px)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(16px, 3vw, 24px)",
                width: "100%",
                boxSizing: "border-box"
              }}>

                <label 
                  onClick={() => document.getElementById('coverImageUpload')?.click()}
                  style={{
                    background: coverImage ? `url(${URL.createObjectURL(coverImage)}) center/cover no-repeat` : "#F1F3FA",
                    border: errors.coverImage ? "2px dashed #FF3B30" : (coverImage ? "none" : "2px dashed rgba(192, 199, 210, 0.4)"),
                    borderRadius: "clamp(16px, 3vw, 32px)",
                    width: "100%",
                    aspectRatio: "1116/350",
                    minHeight: "180px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                  <input 
                    type="file" 
                    id="coverImageUpload"
                    accept="image/*" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setCoverImage(e.target.files[0]);
                        setErrors(prev => ({...prev, coverImage: ""}));
                      }
                    }} 
                    style={{ display: "none" }} 
                  />
                  {!coverImage && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                      <svg width="17.5" height="17.5" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "10px", lineHeight: "16px", color: "#0F2F4C" }}>
                        Upload Cover image (16:9)
                      </span>
                    </div>
                  )}
                </label>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "clamp(16px, 2.5vw, 20px)", lineHeight: "1.25", color: "rgba(64, 71, 80, 0.8)", paddingLeft: "clamp(2px, 1vw, 6px)" }}>
                  Upload high quality image of the farmland
                </span>
              </div>
            </div>



          </div>
        </div>
      </motion.div>

      {/* ─── 4. PHASE 03 & SUBMISSION ─── */}
      <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">


        {/* Right: Institutional audit trigger */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full lg:flex-1"
          style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "48px", gap: "40px", background: "#0F2F4C", boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)", borderRadius: "48px", flexWrap: "wrap" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", flex: 1, minWidth: "200px" }}>
            <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "30px", lineHeight: "36px", letterSpacing: "-1.5px", color: "#FFFFFF" }}>
              Trigger<br />Institutional Audit
            </h3>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#BCC7DE" }}>
              Once triggered, our AI-driven risk models and human auditors will verify your land title within 48 hours for immediate institutional listing.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", minWidth: "260px" }}>
            <button
              onClick={handleFinalAuditTrigger}
              disabled={isSubmitting}
              style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "24px 32px", gap: "16px", width: "100%", background: "#2780C4", borderRadius: "16px", border: "none", cursor: isSubmitting ? "not-allowed" : "pointer", boxShadow: "0px 10px 20px rgba(0,0,0,0.15)", opacity: isSubmitting ? 0.7 : 1 }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>SECURED VIA FACEID</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.5px", color: "#FFFFFF" }}>{isSubmitting ? "SUBMITTING..." : "SUBMIT FOR CCS SCREENING"}</span>
              </div>
            </button>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#2780C4" }}>DIGITAL SIGNATURE REQUIRED</span>
          </div>
        </motion.div>
      </div>

      {/* ─── MODAL OVERLAY ─── */}
      {showModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(9, 20, 38, 0.2)", backdropFilter: "blur(16.5px)", zIndex: 100, display: "flex", justifyContent: "center", alignItems: "center", padding: "24px", boxSizing: "border-box" }}>
          
          <div style={{ width: "100%", maxWidth: "1178.88px", height: "100%", maxHeight: "950px", background: "#FFFFFF", borderRadius: "48px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 8px 24px 24px", boxSizing: "border-box" }}>
            <div data-lenis-prevent style={{ width: "100%", height: "100%", overflowY: "auto", paddingRight: "16px", display: "flex", flexDirection: "column", alignItems: "center", boxSizing: "border-box", scrollbarWidth: "none", msOverflowStyle: "none" }}>

            
            {/* Hero Section */}
            <div style={{ width: "100%", maxWidth: "619px", marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", padding: "0 24px", boxSizing: "border-box" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/assets/sellyourland/Margin (4).svg" alt="Success Icon" width={120} height={123} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center", width: "100%" }}>
                <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 55px)", letterSpacing: "-1.38px", color: "#131600", whiteSpace: "nowrap" }}>
                  CCS Screening Initiated
                </h1>
                <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#404750", maxWidth: "526px" }}>
                  Your property details and legal documents have been securely encrypted and transmitted to Central Command for verification.
                </p>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div style={{ width: "100%", flex: 1, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "40px", padding: "40px 24px", boxSizing: "border-box" }}>
              
              {/* Left: Glassmorphic Receipt Card */}
              <div style={{ width: "100%", maxWidth: "343px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ width: "100%", background: "rgba(255, 255, 255, 0.7)", border: "1px solid rgba(255, 255, 255, 0.5)", boxShadow: "0px 20px 60px -15px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(12px)", borderRadius: "32px", padding: "32px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "24px" }}>
                  
                  {/* Rows */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#47617C" }}>ASSET ID</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#181C20" }}>
                      {createdFarmlandId ? `GLC FL-${createdFarmlandId}` : "GLC SOS 01"}
                    </span>
                  </div>
                  <div style={{ width: "100%", height: "1px", background: "rgba(224, 226, 232, 0.5)" }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#47617C" }}>ACREAGE</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#181C20" }}>
                      {Number(formData.acreage) || 10.00} Acres
                    </span>
                  </div>
                  <div style={{ width: "100%", height: "1px", background: "rgba(224, 226, 232, 0.5)" }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase", color: "#47617C" }}>QUOTED PRICE</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#00609A" }}>
                      ₹{new Intl.NumberFormat('en-IN').format(Number(formData.baseValuation) || 0)}
                    </span>
                  </div>

                  {/* Document Status */}
                  <div style={{ background: "#F1F3FA", borderRadius: "16px", padding: "16px", display: "flex", gap: "16px", alignItems: "flex-start", marginTop: "16px" }}>
                    <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#00609A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#181C20" }}>Document Status</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "#404750" }}>Passbook/Title Deed Uploaded Successfully</span>
                    </div>
                  </div>
                </div>

                {/* Email Confirmation Block */}
                <div style={{ background: "#FFFFFF", boxShadow: "0px 20px 60px 27px rgba(0, 0, 0, 0.05)", borderRadius: "24px", padding: "20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", background: "#FFFFFF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0px 20px 40px -10px rgba(26, 28, 28, 0.05)" }}>
                    <svg width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="#00609A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "#404750" }}>
                    An official confirmation email has been sent to your registered email address. This contains your tracking ID and a summary of your submitted details for your records.
                  </span>
                </div>
              </div>

              {/* Right: Timeline */}
              <div style={{ width: "100%", maxWidth: "343px", display: "flex", flexDirection: "column", gap: "32px" }}>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#181C20" }}>The CCS Screening Process</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative" }}>
                  {/* Vertical line connecting steps */}
                  <div style={{ position: "absolute", left: "19px", top: "20px", bottom: "20px", width: "2px", background: "#E0E2E8", zIndex: 0 }} />

                  {/* Step 1 */}
                  <div style={{ display: "flex", gap: "24px", position: "relative", zIndex: 1 }}>
                    <div style={{ width: "40px", height: "40px", background: "#FFFFFF", border: "2px solid #E0E2E8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#47617C" }}>1</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#181C20" }}>Document Verification</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "#404750" }}>Our legal team cross-references your uploaded passbook with municipal records.</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div style={{ display: "flex", gap: "24px", position: "relative", zIndex: 1 }}>
                    <div style={{ width: "40px", height: "40px", background: "#FFFFFF", border: "2px solid #E0E2E8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#47617C" }}>2</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#181C20" }}>Valuation & Risk Audit</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "#404750" }}>Assessing the quoted price against current market data and yield history.</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div style={{ display: "flex", gap: "24px", position: "relative", zIndex: 1 }}>
                    <div style={{ width: "40px", height: "40px", background: "#FFFFFF", border: "2px solid #E0E2E8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#47617C" }}>3</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#181C20" }}>Marketplace Approval</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "#404750" }}>Once cleared, your asset will officially go live on the GLC Marketplace for fractional buyers.</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: "#FFFFFF", borderRadius: "48px", display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px" }}>
                  <div style={{ width: "20px", height: "20px", background: "#47617C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: "bold" }}>i</span>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "18px", color: "#404750" }}>The standard CCS review takes 24–48 hours. You will receive an app notification and email once your listing is approved.</span>
                </div>
              </div>
            </div>

            {/* Action Deck */}
            <div style={{ width: "100%", maxWidth: "825px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "0 24px 40px", boxSizing: "border-box", marginTop: "auto" }}>
              <button onClick={() => router.push(`/home/sellyourland/tracking${createdFarmlandId ? `?farmland=${createdFarmlandId}` : ''}`)} style={{ flex: "1 1 300px", maxWidth: "400px", height: "62px", background: "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9999px", border: "none", cursor: "pointer", boxShadow: "0px 9px 13px -2px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF" }}>Tracking Listing Status</span>
              </button>
              <button onClick={() => { setShowModal(false); router.push("/home"); }} style={{ flex: "1 1 300px", maxWidth: "400px", height: "62px", background: "transparent", border: "2px solid #2780C4", borderRadius: "9999px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#2780C4" }}>Return to Home</span>
              </button>
            </div>
            
          </div>
          </div>
        </div>
      )}

    </section>
  );
}
