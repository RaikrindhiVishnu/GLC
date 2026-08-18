"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useGetUserDetailsByIdQuery, useUpdateUserDetailsMutation, useGetUserProfileDetailsByIdQuery } from "../../services/user";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SiteVisitCompletedModal from "@/components/SiteVisitCompletedModal";
import SiteVisitQueueModal from "@/components/SiteVisitQueueModal";
import LandPurchaseTrackingModal from "@/components/LandPurchaseTrackingModal";
import EditProfileModal from "@/components/EditProfileModal";
import WalletHistoryModal from "@/components/WalletHistoryModal";
import SignOutModal from "@/components/SignOutModal";
import { s3Service } from "../../services/s3";
import { authService } from "../../services/auth";
 
export default function ProfileScreen() {
  const router = useRouter();
 
  const [userId, setUserId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    setMounted(true);
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);
 
  const userQueryArg = useMemo(() => ({ user_id: userId || 0 }), [userId]);

  const { data: userDetailsResponse, isLoading, refetch } = useGetUserDetailsByIdQuery(
    userQueryArg,
    { skip: !mounted || !userId }
  );
 
  const { data: profileDetailsResponse } = useGetUserProfileDetailsByIdQuery(
    userQueryArg,
    { skip: !mounted || !userId }
  );
  const profileDetails = profileDetailsResponse;

  const [updateUserDetails] = useUpdateUserDetailsMutation();

  const userDetails = userDetailsResponse?.data;
  const fullName = userDetails ? `${userDetails.frist_name} ${userDetails.last_name}` : "";
  const email = userDetails?.email || "";
  const phone = userDetails ? `${userDetails.contry_code} ${userDetails.ph_number}` : "";
  const boughtFarmlands = userDetails?.user_bought_farmlnad_details || [];
  const totalEstimatedAssets = boughtFarmlands.reduce((acc: number, curr: any) => acc + (Number(curr.price) || 0), 0);
  const formattedAssets = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 }).format(totalEstimatedAssets);

  const handleSignOut = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await authService.logout({ device_id: "web", platform: "web" }, token);
      } catch (err) {
        console.error("Logout API failed:", err);
      }
    }
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.replace("/landing");
  };

  const handleShareProfile = async () => {
    const profileUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Green Land Capital Profile",
          text: "Check out my profile on Green Land Capital!",
          url: profileUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(profileUrl);
        alert("Profile link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
        alert("Failed to copy profile link.");
      }
    }
  };

  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isAadhaarVerified, setIsAadhaarVerified] = useState(false);
  const [isPanVerified, setIsPanVerified] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadTarget, setUploadTarget] = useState<"aadhaar-front" | "aadhaar-back" | "pan" | null>(null);
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);
  const [isSiteVisitQueueModalOpen, setIsSiteVisitQueueModalOpen] = useState(false);
  const [trackingModalFarmId, setTrackingModalFarmId] = useState<number | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isWalletHistoryModalOpen, setIsWalletHistoryModalOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const profileImageSrc = "/assets/account/account-hero.svg"; // Mock avatar
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [lastUploadedUrl, setLastUploadedUrl] = useState<string | null>(null);
  const profileInputRef = useRef<HTMLInputElement>(null);

  const rightSidebarRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(1500);
  const [trackingImageUrls, setTrackingImageUrls] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!profileDetails?.user_purchased_lands_tracking) return;
    const fetchUrls = async () => {
      const newUrls: Record<string, string> = { ...trackingImageUrls };
      let changed = false;
      for (const item of profileDetails.user_purchased_lands_tracking) {
        const url = item.cover_image_url;
        if (!url || newUrls[item.farm_id]) continue;
        if (url.startsWith("http") || url.startsWith("data:") || url.startsWith("/")) {
          newUrls[item.farm_id] = url;
          changed = true;
          continue;
        }
        try {
          const res = await s3Service.generateUrl({ key: url, filename: url, folderPath: '' });
          if (res.url) {
            newUrls[item.farm_id] = res.url;
            changed = true;
          }
        } catch (error) {
          console.warn("Failed to presign tracking URL for", url);
        }
      }
      if (changed) setTrackingImageUrls(newUrls);
    };
    fetchUrls();
  }, [profileDetails?.user_purchased_lands_tracking]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (rightSidebarRef.current) {
        const height = rightSidebarRef.current.offsetHeight;
        setContainerHeight(Math.max(1500, height + 511 + 80)); // 511 is top offset
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [profileDetails]);

  const handleProfileImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Optimistic update
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);

      try {
        const response = await s3Service.uploadFile(file);
        if (response.url) {
          setProfileImage(response.url);
          let urlOrKeyToSave = response.key || response.url || "";
          if (urlOrKeyToSave.startsWith("http")) {
            try { urlOrKeyToSave = new URL(urlOrKeyToSave).pathname.substring(1); } catch (e) {}
          }
          setLastUploadedUrl(urlOrKeyToSave);
          if (userId && userDetails) {
            await updateUserDetails({
              id: userId,
              frist_name: userDetails.frist_name || "",
              last_name: userDetails.last_name || "",
              profile_url: urlOrKeyToSave,
              state_id: (userDetails as any).state_id || 1
            }).unwrap();
            // Cache invalidation via tags will trigger an automatic refetch
          }
        }
      } catch (error: any) {
        console.error("Profile image upload failed", error);
        alert(`Profile update failed: ${JSON.stringify(error?.data || error)}`);
      }
    }
  };

  useEffect(() => {
    const fetchFreshUrl = async () => {
      if (!userDetails) return;

      if (userDetails.profile_url) {
        if (lastUploadedUrl && userDetails.profile_url !== lastUploadedUrl) {
          // Backend hasn't caught up yet (stale data), keep our optimistic uploaded image
          return;
        }

        let key = userDetails.profile_url;
        if (key.startsWith("http")) {
          if (key.includes("amazonaws.com") || key.includes("cloudfront.net")) {
            try {
              key = new URL(key).pathname.substring(1);
            } catch (e) { }
          } else {
            setProfileImage(key);
            return;
          }
        }

        if (key && !key.includes('/assets/')) {
          try {
            const res = await s3Service.generateUrl({ key, filename: key, folderPath: '' });
            if (res.url) {
              setProfileImage(res.url);
              return;
            }
          } catch (e: any) {
            console.warn("Failed to generate fresh profile URL:", e?.message || "Unknown error");
          }
        }

        setProfileImage(userDetails.profile_url);
      } else {
        setProfileImage("/assets/account/account-profile.svg");
      }
    };

    fetchFreshUrl();
  }, [userDetails, lastUploadedUrl]);

  const triggerUpload = (target: "aadhaar-front" | "aadhaar-back" | "pan") => {
    setUploadTarget(target);
    fileInputRef.current?.click();
  };

  const [aadhaarFrontUrl, setAadhaarFrontUrl] = useState<string | null>(null);
  const [aadhaarBackUrl, setAadhaarBackUrl] = useState<string | null>(null);
  const [panUrl, setPanUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFront = localStorage.getItem("aadhaarFrontUrl");
      const savedBack = localStorage.getItem("aadhaarBackUrl");
      const savedPan = localStorage.getItem("panUrl");
      
      if (savedFront) setAadhaarFrontUrl(savedFront);
      if (savedBack) setAadhaarBackUrl(savedBack);
      if (savedFront && savedBack) setIsAadhaarVerified(true);
      
      if (savedPan) {
        setPanUrl(savedPan);
        setIsPanVerified(true);
      }
    }
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      try {
        const urlObj = URL.createObjectURL(file);
        const response = await s3Service.uploadFile(file);
        const finalUrl = response.url || urlObj;

        if (uploadTarget === "aadhaar-front") {
          setAadhaarFrontUrl(finalUrl);
          localStorage.setItem("aadhaarFrontUrl", finalUrl);
          if (aadhaarBackUrl || localStorage.getItem("aadhaarBackUrl")) setIsAadhaarVerified(true);
        }
        if (uploadTarget === "aadhaar-back") {
          setAadhaarBackUrl(finalUrl);
          localStorage.setItem("aadhaarBackUrl", finalUrl);
          if (aadhaarFrontUrl || localStorage.getItem("aadhaarFrontUrl")) setIsAadhaarVerified(true);
        }
        if (uploadTarget === "pan") {
          setPanUrl(finalUrl);
          localStorage.setItem("panUrl", finalUrl);
          setIsPanVerified(true);
        }
      } catch (error) {
        console.error("Document upload failed", error);
      }
    }
    // reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/*,.pdf"
      />
      <input type="file" accept="image/*" ref={profileInputRef} style={{ display: 'none' }} onChange={handleProfileImageChange} />

      {/* ─── HERO BACKGROUND (desktop only) ─── */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          width: "100%",
          height: "479.05px",
          left: "0px",
          top: "0px",
          zIndex: 0,
          overflow: "hidden",
          background: "#D9D9D9",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))", zIndex: 1 }} />
        <Image
          src="/assets/account/account-hero.svg"
          alt="Profile Background Cover"
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
        />
      </div>

      {/* ══════════════════════════════════════════════ */}
      {/* MOBILE LAYOUT (< lg)                          */}
      {/* ══════════════════════════════════════════════ */}
      <div className="block lg:hidden w-full" style={{ background: "#F0F1F2", zIndex: 10, position: "relative", paddingTop: "80px" }}>
        <Navbar variant="app" active="profile" forceScrolled={true} />

        <div style={{ padding: "16px 16px 40px" }}>

          {/* Dark profile card with avatar overlapping top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: "relative", marginTop: "55px" }}
          >
            {/* Avatar floating above card */}
            <div onClick={() => profileInputRef.current?.click()} style={{ position: "absolute", top: "-55px", left: "50%", transform: "translateX(-50%)", width: "108px", height: "108px", borderRadius: "32px", overflow: "visible", zIndex: 2, cursor: "pointer" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "32px", overflow: "hidden", boxShadow: "0px 0px 0px 4px #F0F1F2, 0px 16px 32px -8px rgba(0,0,0,0.4)", background: "#D9D9D9", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {profileImage && <img src={profileImage} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.2s ease" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0"}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                </div>
              </div>
              {/* Permanent edit icon badge */}
              <div onClick={() => profileInputRef.current?.click()} style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "32px", height: "32px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3, cursor: "pointer" }}>
                <img src="/assets/profile/savedfarmland/Requested Feature_ Camera Upload Button.svg" alt="Upload Camera" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            </div>

            {/* Dark card */}
            <div style={{ background: "#091426", borderRadius: "24px", padding: "64px 20px 24px", position: "relative", overflow: "hidden" }}>
              {/* Ambient glow */}
              <div style={{ position: "absolute", width: "220px", height: "220px", right: "-60px", bottom: "-90px", border: "20px solid rgba(0,98,158,0.25)", filter: "blur(24px)", borderRadius: "9999px", pointerEvents: "none" }} />

              {/* Name + verify badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "18px", maxWidth: "100%" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "-0.04em", color: "#FFFFFF", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{fullName}</span>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 5px 8px -1.5px rgba(0, 0, 0, 0.1), 0px 2px 3px -2px rgba(0, 0, 0, 0.1)", flexShrink: 0 }}>
                  <svg width="10" height="8" viewBox="22 13 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5586 24.4258L22.5586 14.1133L28.0586 18.8008L31.5586 13.1758L35.0586 18.8008L40.5586 14.1133L38.5586 24.4258H24.5586ZM38.5586 27.2383C38.5586 27.8008 38.1586 28.1758 37.5586 28.1758H25.5586C24.9586 28.1758 24.5586 27.8008 24.5586 27.2383V26.3008H38.5586V27.2383Z" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Edit Profile + Share row */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button onClick={() => setIsEditModalOpen(true)} style={{ flex: 1, height: "46px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "none", borderRadius: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", letterSpacing: "0.5px", textTransform: "uppercase" }}>Edit Profile</span>
                </button>
                <button onClick={handleShareProfile} style={{ width: "46px", height: "46px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "16px" }} />

              {/* Active Plan row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "1px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Active Plan</span>
                <div style={{ width: "26px", height: "26px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "20px", color: "#FFFFFF" }}>Silver Tier</span>

              {/* Divider */}
              <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", margin: "16px 0" }} />

              {/* Unlocks */}
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "42px", lineHeight: "1.1", letterSpacing: "-2px", color: "#FFFFFF" }}>4 Available<br />Unlocks</span>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: "0 0 20px" }}>Direct access to premium agricultural yields</p>

              {/* View Wallet History */}
              {/*
              <button onClick={() => setIsWalletHistoryModalOpen(true)} style={{ width: "100%", height: "50px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFFF" }}>View Wallet History</span>
              </button>
              */}
            </div>
          </motion.div>
        </div>{/* end padding wrapper */}

        {/* Identity & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ margin: "12px 16px 0", background: "#FFFFFF", borderRadius: "24px", padding: "20px 16px", boxShadow: "0px 4px 12px rgba(0,0,0,0.04)" }}
        >
          <div style={{ paddingBottom: "12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "13px", color: "#0F2F4C", textTransform: "uppercase" }}>Identity & Contact</span>
          </div>
          {[
            { label: "Full Name", value: fullName, type: "name" },
            { label: "Mobile Number", value: phone, type: "phone" },
            { label: "Email Address", value: email, type: "email" },
          ].map((row, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 4px", borderTop: i > 0 ? "1px solid #F5F5F5" : "none" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "13px", color: "#71717A" }}>{row.label}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F2F4C" }}>{row.value}</span>
                {row.type === "phone" && isPhoneVerified && (
                    <span style={{ background: "#EFF6FF", color: "#2563EB", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "9px", padding: "2px 6px", borderRadius: "9999px" }}>OTP VERIFIED</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Regulatory Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ margin: "12px 16px 0", background: "#FFFFFF", borderRadius: "24px", padding: "20px 16px", boxShadow: "0px 4px 12px rgba(0,0,0,0.04)" }}
        >
          <div style={{ paddingBottom: "12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "13px", color: "#71717A", textTransform: "uppercase", letterSpacing: "1.2px" }}>Regulatory Compliance</span>
          </div>

          {/* Aadhaar Row */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "13px 4px" }}>
            {isAadhaarVerified ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "13px", color: "#71717A" }}>Primary ID / Aadhaar</span>
                  {aadhaarFrontUrl && (
                    <div style={{ width: "36px", height: "24px", borderRadius: "4px", overflow: "hidden", background: "#f1f5f9" }}>
                      <img src={aadhaarFrontUrl} alt="Front" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  )}
                  {aadhaarBackUrl && (
                    <div style={{ width: "36px", height: "24px", borderRadius: "4px", overflow: "hidden", background: "#f1f5f9" }}>
                      <img src={aadhaarBackUrl} alt="Back" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#059669" }}>Uploaded</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <button onClick={() => setIsAadhaarVerified(false)} style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "2px", padding: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "10px", color: "#3B82F6" }}>Edit</span>
                  </button>
                </div>
              </>
            ) : (
              <div style={{ display: "flex", width: "100%", gap: "8px", alignItems: "center" }}>
                <div style={{ flex: 1, minWidth: 0, height: "46px", background: "#FEFEFE", border: "1.4px solid #F8F8F8", borderRadius: "21px", display: "flex", alignItems: "center", padding: "0 14px", gap: "8px" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#A1999B" strokeWidth="1"><rect x="3" y="4" width="18" height="16" rx="2" ry="2" /><line x1="7" y1="8" x2="11" y2="8" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="7" y1="16" x2="17" y2="16" /></svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "#BDBDBD", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {aadhaarFrontUrl ? "Front Uploaded - Now upload Back" : "Enter & Upload Aadhar Card"}
                  </span>
                </div>
                
                {aadhaarFrontUrl ? (
                   <div style={{ width: "46px", height: "46px", borderRadius: "23px", overflow: "hidden", flexShrink: 0, border: "1px solid #E2E8F0", cursor: "pointer" }} onClick={() => triggerUpload("aadhaar-front")}>
                     <img src={aadhaarFrontUrl} alt="Front" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                   </div>
                ) : (
                  <button onClick={() => triggerUpload("aadhaar-front")} style={{ width: "78px", height: "46px", background: "#F3F3F5", border: "1.4px dashed rgba(0,0,0,0.3)", borderRadius: "23px", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", cursor: "pointer", flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                  </button>
                )}

                {aadhaarBackUrl ? (
                   <div style={{ width: "46px", height: "46px", borderRadius: "23px", overflow: "hidden", flexShrink: 0, border: "1px solid #E2E8F0", cursor: "pointer" }} onClick={() => triggerUpload("aadhaar-back")}>
                     <img src={aadhaarBackUrl} alt="Back" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                   </div>
                ) : (
                  <button onClick={() => triggerUpload("aadhaar-back")} style={{ width: "78px", height: "46px", background: "#F3F3F5", border: aadhaarFrontUrl ? "1.4px dashed rgba(0,0,0,0.5)" : "1.4px dashed rgba(188,201,201,0.3)", borderRadius: "23px", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", cursor: "pointer", flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={aadhaarFrontUrl ? "#000000" : "#A49999"} strokeWidth="1.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "9px", color: aadhaarFrontUrl ? "#71717A" : "#BDBDBD" }}>Back</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* PAN Row */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "13px 4px", borderTop: "1px solid #F5F5F5" }}>
            {isPanVerified ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "13px", color: "#71717A" }}>PAN Card Number</span>
                  {panUrl && (
                    <div style={{ width: "36px", height: "24px", borderRadius: "4px", overflow: "hidden", background: "#f1f5f9" }}>
                      <img src={panUrl} alt="PAN" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#059669" }}>Uploaded</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <button onClick={() => setIsPanVerified(false)} style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "2px", padding: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "10px", color: "#3B82F6" }}>Edit</span>
                  </button>
                </div>
              </>
            ) : (
              <div style={{ display: "flex", width: "100%", gap: "8px", alignItems: "center" }}>
                <div style={{ flex: 1, height: "46px", background: "#FEFEFE", border: "1.4px solid #F8F8F8", borderRadius: "21px", display: "flex", alignItems: "center", padding: "0 14px", gap: "8px" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#A1999B" strokeWidth="1"><rect x="3" y="4" width="18" height="16" rx="2" ry="2" /><line x1="7" y1="8" x2="11" y2="8" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="7" y1="16" x2="17" y2="16" /></svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "#BDBDBD", whiteSpace: "nowrap" }}>Enter and Upload PAN Card</span>
                </div>
                <button onClick={() => triggerUpload("pan")} style={{ width: "78px", height: "46px", background: "#F3F3F5", border: "1.4px dashed rgba(188,201,201,0.3)", borderRadius: "23px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>Upload</button>
              </div>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 4px 0", opacity: 0.6 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#0F2F4C" style={{ flexShrink: 0 }}><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "11px", color: "#71717A", lineHeight: "16px" }}>Your data is encrypted per SEBI guidelines.</span>
          </div>
        </motion.div>

        {/* Land Purchase Tracking (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ margin: "12px 16px 0" }}
        >
          <div style={{ padding: "0 16px 12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#71717A", textTransform: "uppercase" }}>Land Purchase Tracking</span>
          </div>
          <div data-lenis-prevent="true" className="hover-scrollbar" style={{ display: "flex", flexDirection: "column", gap: "12px", maxHeight: "236px", overflowY: "auto", paddingBottom: "8px" }}>
            {profileDetails?.user_purchased_lands_tracking?.length ? profileDetails.user_purchased_lands_tracking.map((item, idx) => (
              <div key={idx} onClick={() => setTrackingModalFarmId(item.farm_id)} style={{ cursor: "pointer", width: "100%", background: "#FFFFFF", boxShadow: "0px 4px 12px rgba(0,0,0,0.04)", borderRadius: "20px", padding: "16px", position: "relative", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: "12px", width: "100%" }}>
                  <div style={{ width: "80px", height: "80px", borderRadius: "10px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                    <Image 
                      src={(() => {
                        const url = item.cover_image_url;
                        if (!url) return "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80";
                        if (url.startsWith("http") || url.startsWith("data:") || url.startsWith("/")) return url;
                        return trackingImageUrls[item.farm_id] || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80";
                      })()} 
                      alt="Property" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }} 
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "14px", color: "#001F3F" }}>{item.farm_code}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "#64748B", textTransform: "capitalize" }}>{item.mandal_id ? "Mandal " + item.mandal_id : "Location pending"}</span>
                    </div>
                    <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "9px", color: "#0A1B3D" }}>Tracking initialized</span>
                      <div style={{ width: "100%", height: "6px", background: "#F3F4F6", borderRadius: "9999px", overflow: "hidden" }}>
                        <div style={{ width: "20%", height: "100%", background: "#2780C4" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: "#71717A", padding: "16px" }}>No land tracking found.</span>
            )}
          </div>
        </motion.div>

        {/* Active Investments (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ margin: "16px 16px 0" }}
        >
          <div style={{ padding: "0 16px 12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Active Investments</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {boughtFarmlands.length > 0 ? boughtFarmlands.map((item, idx) => {
              const colors = ["#059669", "#D97706", "#2563EB", "#7C3AED"];
              const color = colors[idx % colors.length];
              return (
                <div key={idx} onClick={() => router.push(`/profile/active-investment/${item.farmland_is}`)} style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "24px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                    <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farmland_code}</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{(item as any).mandal_id || "Medchal"} • ‹{(Number(item.price) / 100000).toFixed(1) || "12.5"}L • {item.total_acers || "0.5"} Ac</span>
                    </div>
                  </div>
                </div>
              )
            }) : (
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: "#71717A", padding: "16px" }}>No active investments found.</span>
            )}
          </div>
        </motion.div>

        {/* Site Visits in queue (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ margin: "16px 16px 0" }}
        >
          <div style={{ padding: "0 16px 12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Site Vists in queue</span>
          </div>
          {(profileDetails?.upcoming_site_visits || []).map((item: any, idx: number) => (
            <div key={idx} onClick={() => setIsSiteVisitQueueModalOpen(true)} style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "24px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={["#059669", "#D97706", "#2563EB", "#7C3AED"][idx % 4]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farm_code}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.mandal_id || "Medchal"} • ‹{item.price ? (Number(item.price) / 100000).toFixed(1) : "12.5"}L • {item.acers || "0.5"} Ac</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Site Visits Completed (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{ margin: "16px 16px 0" }}
        >
          <div style={{ padding: "0 16px 12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Site Vists Completed</span>
          </div>
          {(profileDetails?.completed_site_vists || []).map((item: any, idx: number) => (
            <div key={idx} onClick={() => setIsSiteVisitModalOpen(true)} style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "24px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={["#059669", "#D97706", "#2563EB", "#7C3AED"][idx % 4]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farm_code}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.mandal_id || "Medchal"} • ‹{item.price ? (Number(item.price) / 100000).toFixed(1) : "12.5"}L • {item.acers || "0.5"} Ac</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Active Listing (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ margin: "16px 16px 0" }}
        >
          <div style={{ padding: "0 16px 12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Active Listing</span>
          </div>
          {(profileDetails?.user_listed_farmlands || []).map((item: any, idx: number) => (
            <div key={idx} style={{ width: "100%", background: "#FFFFFF", borderRadius: "24px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0px 4px 15px rgba(0,0,0,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={["#059669", "#D97706", "#2563EB", "#7C3AED"][idx % 4]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farm_code}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {item.mandal_id || "Medchal"} • ‹{item.price ? (Number(item.price) / 100000).toFixed(1) : "12.5"}L • {item.acers || "0.5"} Ac
                    </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Active Deals In Queue (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{ margin: "16px 16px 40px" }}
        >
          <div style={{ padding: "0 16px 12px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Active Deals In Queue</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {(profileDetails?.user_purchased_lands_tracking || []).map((item: any, idx: number) => (
              <div key={idx} style={{ width: "100%", background: "#FFFFFF", borderRadius: "24px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0px 4px 15px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                  <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={["#059669", "#D97706", "#2563EB", "#7C3AED"][idx % 4]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farm_code}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.mandal_id || "Medchal"} • ‹{item.price ? (Number(item.price) / 100000).toFixed(1) : "12.5"}L • {item.acers || "0.5"} Ac</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Sign Out — standalone centered at bottom */}
        <div style={{ display: "flex", justifyContent: "center", padding: "28px 16px 40px" }}>
          <button
            onClick={() => setIsSignOutModalOpen(true)}
            style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "14px", color: "#E53935", letterSpacing: "0.5px", textTransform: "uppercase" }}>Sign Out</span>
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════ */}
      {/* DESKTOP LAYOUT (>= lg)                        */}
      {/* ══════════════════════════════════════════════ */}
      <div
        className="hidden lg:block"
        style={{ position: "relative", width: "1440px", height: `${containerHeight}px`, minHeight: `${containerHeight}px`, background: "transparent", flexShrink: 0 }}
      >
        <Navbar variant="app" active="profile" />

        {/* ─── CENTRAL HERO GLASSMORPHIC PROFILE CONTAINER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: "absolute", width: "569px", height: "950px", left: "calc(50% - 569px/2)", top: "226.64px", zIndex: 10 }}
        >
          {/* Avatar */}
          <div
            onClick={() => profileInputRef.current?.click()}
            style={{
              position: "absolute", width: "241.24px", height: "241.24px",
              left: "calc(50% - 241.24px/2)", top: "39px",
              zIndex: 20, cursor: "pointer"
            }}
          >
            <div style={{ width: "100%", height: "100%", borderRadius: "72.37px", boxShadow: "0px 0px 0px 6px #FFFFFF, 0px 37px 75px -18px rgba(0,0,0,0.35)", overflow: "hidden", background: "#F8F9FA", position: "relative" }}>
              <img src={profileImage || undefined} alt="Profile Frame Portrait" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.2s ease" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0"}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
              </div>
            </div>
            {/* Permanent edit icon badge */}
            <div onClick={() => profileInputRef.current?.click()} style={{ position: "absolute", bottom: "-14px", right: "-14px", width: "64px", height: "64px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 21, cursor: "pointer" }}>
              <img src="/assets/profile/savedfarmland/Requested Feature_ Camera Upload Button.svg" alt="Upload Camera" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>

          {/* Dark card */}
          <div
            style={{
              position: "absolute", width: "569px", height: "732px", left: "0px", top: "157px",
              background: "#091426", borderRadius: "45px",
              boxShadow: "0px 24px 50px rgba(9, 20, 38, 0.25)", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", width: "320px", height: "320px", right: "-75px", bottom: "-135px", border: "24px solid rgba(0,98,158,0.3)", filter: "blur(20px)", borderRadius: "9999px", pointerEvents: "none", zIndex: 0 }} />
            <div style={{ boxSizing: "border-box", position: "absolute", width: "256px", height: "256px", right: "-35px", bottom: "-95px", border: "1px solid rgba(0,98,158,0.5)", borderRadius: "9999px", pointerEvents: "none", zIndex: 0 }} />
            <div style={{ position: "absolute", width: "128px", height: "128px", right: "45px", bottom: "-15px", background: "rgba(0,98,158,0.2)", filter: "blur(32px)", borderRadius: "9999px", pointerEvents: "none", zIndex: 0 }} />

            <div style={{ position: "absolute", top: "186px", left: "0px", right: "0px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "12px", zIndex: 10, padding: "0 20px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "45px", lineHeight: "57px", letterSpacing: "-0.04em", color: "#FFFFFF", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{fullName}</span>
            </div>

            <div style={{ position: "absolute", top: "284px", left: "35px", right: "35px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
              <div />
              <button onClick={() => setIsEditModalOpen(true)} style={{ height: "50px", background: "#F8F9FA", borderRadius: "20px", border: "none", display: "flex", alignItems: "center", gap: "8px", padding: "0 18px", cursor: "pointer", transition: "opacity 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0F2F4C"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "17.6px", color: "#0F2F4C", letterSpacing: "-0.04em" }}>Edit Profile</span>
              </button>
              <button onClick={handleShareProfile} style={{ width: "50px", height: "50px", background: "#F8F9FA", borderRadius: "50%", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "opacity 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2F4C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </button>
            </div>

            <div style={{ position: "absolute", top: "386px", left: "48px", zIndex: 10 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "22.88px", letterSpacing: "-0.04em", color: "#FFFFFF", opacity: 0.9 }}>Total Estimated Assets</span>
            </div>
            <div style={{ position: "absolute", top: "433px", left: "48px", width: "430px", height: "1px", background: "#CCCCCC", zIndex: 10 }} />
            <div style={{ position: "absolute", top: "448px", left: "48px", zIndex: 10 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "60px", lineHeight: "60px", letterSpacing: "-3px", color: "#FFFFFF" }}>{formattedAssets}</span>
            </div>

            {/*
            <div style={{ position: "absolute", top: "574px", left: "48px", display: "flex", flexDirection: "row", gap: "16px", zIndex: 10 }}>
              <button onClick={() => setIsWalletHistoryModalOpen(true)} style={{ height: "46px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "32px", padding: "0 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")} onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF" }}>Wallet History</span>
              </button>
              <button onClick={() => router.push("/profile/managesubscriptions")} style={{ height: "46px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "32px", padding: "0 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")} onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF" }}>Manage Subscription</span>
              </button>
            </div>
            */}
          </div>
        </motion.div>

        {/* ─── LAND PURCHASE TRACKING (CENTER COLUMN) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ position: "absolute", width: "569px", left: "calc(50% - 569px/2)", top: "1147px", zIndex: 10, display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div style={{ padding: "0 8px" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#71717A", textTransform: "uppercase" }}>Land Purchase Tracking</span>
          </div>
          <div data-lenis-prevent="true" className="hover-scrollbar" style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxHeight: "264px", overflowY: "auto", paddingBottom: "10px", paddingRight: "4px" }}>
            {profileDetails?.user_purchased_lands_tracking?.length ? profileDetails.user_purchased_lands_tracking.map((item, idx) => (
              <div key={idx} onClick={() => setTrackingModalFarmId(item.farm_id)} style={{ cursor: "pointer", width: "100%", background: "#FFFFFF", boxShadow: "0px 7.6px 25.33px rgba(0, 31, 63, 0.04)", borderRadius: "20px", padding: "16px", position: "relative", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: "14px", width: "100%" }}>
                  <div style={{ width: "90px", height: "90px", borderRadius: "10px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                    <Image 
                      src={(() => {
                        const url = item.cover_image_url;
                        if (!url) return "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80";
                        if (url.startsWith("http") || url.startsWith("data:") || url.startsWith("/")) return url;
                        return trackingImageUrls[item.farm_id] || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80";
                      })()} 
                      alt="Property" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }} 
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "16px", color: "#001F3F", lineHeight: "17px" }}>{item.farm_code}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.19px", color: "#64748B", textTransform: "capitalize" }}>{item.mandal_id ? "Mandal " + item.mandal_id : "Location pending"}</span>
                    </div>

                    <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "10px", color: "#0A1B3D" }}>Tracking initialized</span>
                      <div style={{ width: "100%", height: "6px", background: "#F3F4F6", borderRadius: "9999px", overflow: "hidden" }}>
                        <div style={{ width: "20%", height: "100%", background: "#2780C4", borderRadius: "9999px" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: "#71717A", padding: "16px" }}>No land tracking found.</span>
            )}
          </div>
        </motion.div>

        {/* ─── LEFT SIDEBAR (IDENTITY & REGULATORY) ─── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ position: "absolute", width: "391px", left: "23px", top: "502px", background: "#FFFFFF", borderRadius: "32px", boxShadow: "0px 10px 25px -5px rgba(0,0,0,0.03)", boxSizing: "border-box", padding: "32px 24px", display: "flex", flexDirection: "column", gap: "24px", zIndex: 10 }}
        >
          {/* Identity & Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
            <div style={{ padding: "0" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", textTransform: "uppercase" }}>Identity & Contact</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "32px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", border: "1px solid #FAFAFA", width: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "20px 24px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A", whiteSpace: "nowrap" }}>Full Name</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>{fullName}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderTop: "1px solid #FAFAFA" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A", width: "54px" }}>Mobile Number</span>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", whiteSpace: "nowrap" }}>{phone}</span>
                  {isPhoneVerified && (
                    <span style={{ background: "#EFF6FF", color: "#2563EB", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", padding: "4px 16px", borderRadius: "9999px", whiteSpace: "nowrap" }}>OTP VERIFIED</span>
                  )}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderTop: "1px solid #FAFAFA" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A", whiteSpace: "nowrap" }}>Email Address</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>{email}</span>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", marginTop: "12px" }}>
            <div style={{ padding: "0" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#71717A", textTransform: "uppercase" }}>Regulatory Compliance</span>
            </div>

            {/* Aadhaar Row */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              {isAadhaarVerified ? (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A" }}>Primary ID / Aadhaar</span>
                    {aadhaarFrontUrl && (
                      <div style={{ width: "40px", height: "28px", borderRadius: "4px", overflow: "hidden", background: "#f1f5f9" }}>
                        <img src={aadhaarFrontUrl} alt="Front" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    )}
                    {aadhaarBackUrl && (
                      <div style={{ width: "40px", height: "28px", borderRadius: "4px", overflow: "hidden", background: "#f1f5f9" }}>
                        <img src={aadhaarBackUrl} alt="Back" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#059669" }}>Uploaded</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <button onClick={() => setIsAadhaarVerified(false)} style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", padding: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#3B82F6" }}>Edit</span>
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ display: "flex", width: "100%", gap: "8px", alignItems: "center" }}>
                  <div style={{ flex: 1, minWidth: 0, height: "46px", background: "#FEFEFE", border: "1.4px solid #F8F8F8", borderRadius: "21px", display: "flex", alignItems: "center", padding: "0 14px", gap: "8px" }}>
                    <img src="/assets/profile/savedfarmland/hugeicons_identity-card.svg" alt="ID" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "#BDBDBD", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {aadhaarFrontUrl ? "Front Uploaded - Now upload Back" : "Enter & Upload Aadhar Card"}
                    </span>
                  </div>
                  
                  {aadhaarFrontUrl ? (
                     <div style={{ width: "46px", height: "46px", borderRadius: "23px", overflow: "hidden", flexShrink: 0, border: "1px solid #E2E8F0", cursor: "pointer" }} onClick={() => triggerUpload("aadhaar-front")}>
                       <img src={aadhaarFrontUrl} alt="Front" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                     </div>
                  ) : (
                    <button onClick={() => triggerUpload("aadhaar-front")} style={{ width: "78px", height: "46px", background: "#F3F3F5", border: "1.4px dashed rgba(0,0,0,0.3)", borderRadius: "23px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                      <img src="/assets/profile/savedfarmland/grommet-icons_document-upload.svg" alt="Upload" />
                    </button>
                  )}

                  {aadhaarBackUrl ? (
                     <div style={{ width: "46px", height: "46px", borderRadius: "23px", overflow: "hidden", flexShrink: 0, border: "1px solid #E2E8F0", cursor: "pointer" }} onClick={() => triggerUpload("aadhaar-back")}>
                       <img src={aadhaarBackUrl} alt="Back" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                     </div>
                  ) : (
                    <button onClick={() => triggerUpload("aadhaar-back")} style={{ width: "78px", height: "46px", background: "#F3F3F5", border: aadhaarFrontUrl ? "1.4px dashed rgba(0,0,0,0.5)" : "1.4px dashed rgba(188,201,201,0.9)", borderRadius: "23px", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", cursor: "pointer", flexShrink: 0 }}>
                      <img src="/assets/profile/savedfarmland/grommet-icons_document-upload.svg" alt="Upload" style={{ opacity: aadhaarFrontUrl ? 1 : 0.5 }} />
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "9px", color: aadhaarFrontUrl ? "#71717A" : "#BDBDBD" }}>Back</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* PAN Row */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
              {isPanVerified ? (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#71717A" }}>PAN Card Number</span>
                    {panUrl && (
                      <div style={{ width: "40px", height: "28px", borderRadius: "4px", overflow: "hidden", background: "#f1f5f9" }}>
                        <img src={panUrl} alt="PAN" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#059669" }}>Uploaded</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <button onClick={() => setIsPanVerified(false)} style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", padding: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#3B82F6" }}>Edit</span>
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ display: "flex", width: "100%", gap: "8px", alignItems: "center" }}>
                  <div style={{ flex: 1, height: "46px", background: "#FEFEFE", border: "1.4px solid #F8F8F8", borderRadius: "21px", display: "flex", alignItems: "center", padding: "0 14px", gap: "8px" }}>
                    <img src="/assets/profile/savedfarmland/solar_card-linear.png" alt="Card" width="17" height="17" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "#BDBDBD", whiteSpace: "nowrap" }}>Enter and Upload PAN Card</span>
                  </div>
                  <button onClick={() => triggerUpload("pan")} style={{ width: "78px", height: "46px", background: "#F3F3F5", border: "1.4px dashed rgba(188,201,201,0.9)", borderRadius: "23px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", cursor: "pointer", flexShrink: 0 }}>
                    <img src="/assets/profile/savedfarmland/grommet-icons_document-upload.svg" alt="Upload" style={{ opacity: 0.5 }} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "9px", color: "#BDBDBD" }}>Upload</span>
                  </button>
                </div>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", padding: "4px 0", opacity: 0.6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#0F2F4C" style={{ flexShrink: 0 }}><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", color: "#71717A", lineHeight: "16px", width: "235.45px" }}>Your data is encrypted and stored as per SEBI<br />guidelines.</span>
            </div>
          </div>
        </motion.div>

        {/* ─── LEFT SIDEBAR (SUPPORT & PREFERENCES) ─── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ position: "absolute", width: "391px", left: "23px", top: "1068px", display: "flex", flexDirection: "column", gap: "24px", zIndex: 10 }}
        >
          {/* Support & Preferences */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
            <div style={{ padding: "0 16px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1.2px", color: "#0F2F4C", textTransform: "uppercase" }}>Support & Preferences</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "32px", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", width: "381px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", cursor: "pointer" }} onClick={() => router.push("/home/supportcenter")}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                  <div style={{ width: "18.33px", height: "16.65px", background: "#A1A1AA", display: "flex", alignItems: "center", justifyContent: "center", maskImage: "url('/assets/profile account/Container (15).svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/assets/profile account/Container (15).svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }}></div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>Support Centre</span>
                </div>
                <div style={{ width: "7.4px", height: "12px", background: "#D4D4D8", maskImage: "url('/assets/profile account/Icon (20).svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/assets/profile account/Icon (20).svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }}></div>
              </div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderTop: "1px solid #FAFAFA", cursor: "pointer" }} onClick={() => router.push("/profile/savedfarmlands")}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C" }}>Saved Farmlands</span>
                </div>
                <div style={{ width: "7.4px", height: "12px", background: "#D4D4D8", maskImage: "url('/assets/profile account/Icon (20).svg')", maskSize: "contain", maskRepeat: "no-repeat", WebkitMaskImage: "url('/assets/profile account/Icon (20).svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat" }}></div>
              </div>
            </div>
          </div>

          {/* Desktop Sign Out */}
          <div style={{ padding: "0 16px" }}>
            <button
              onClick={() => setIsSignOutModalOpen(true)}
              style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#E53935", letterSpacing: "1px", textTransform: "uppercase" }}>Sign Out</span>
            </button>
          </div>
        </motion.div>

        {/* ─── RIGHT SIDEBAR: OPERATIONS ─── */}
        <motion.div
          ref={rightSidebarRef}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ position: "absolute", left: "1050px", right: "49px", top: "511px", display: "flex", flexDirection: "column", gap: "24px", paddingRight: "16px", paddingLeft: "8px", paddingBottom: "60px", zIndex: 10 }}
        >
          {/* Active Investments */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <div style={{ padding: "0 8px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Active Investments</span>
            </div>

            <div data-lenis-prevent="true" className="hover-scrollbar" style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxHeight: "250px", overflowY: "auto", paddingBottom: "8px", paddingRight: "4px" }}>
              {boughtFarmlands.length > 0 ? boughtFarmlands.map((item, idx) => {
                const colors = ["#059669", "#D97706", "#2563EB", "#7C3AED"];
                const color = colors[idx % colors.length];
                return (
                  <div key={idx} onClick={() => router.push(`/profile/active-investment/${item.farmland_is}`)} style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "40px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                      <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farmland_code}</span>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{(item as any).mandal_id || "Medchal"} • ‹{(Number(item.price) / 100000).toFixed(1) || "12.5"}L • {item.total_acers || "0.5"} Ac</span>
                      </div>
                    </div>
                  </div>
                )
              }) : (
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: "#71717A", padding: "16px" }}>No active investments found.</span>
              )}
            </div>
          </div>

          {/* Site Visits in queue */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <div style={{ padding: "0 8px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Site Vists in queue</span>
            </div>
            <div data-lenis-prevent="true" className="hover-scrollbar" style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxHeight: "98px", overflowY: "auto", paddingBottom: "8px", paddingRight: "4px" }}>
              {(profileDetails?.upcoming_site_visits || []).map((item: any, idx: number) => (
                <div key={idx} onClick={() => setIsSiteVisitQueueModalOpen(true)} style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "40px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                  <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={["#059669", "#D97706", "#2563EB", "#7C3AED"][idx % 4]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farm_code}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.mandal_id || "Medchal"} • ‹{item.price ? (Number(item.price) / 100000).toFixed(1) : "12.5"}L • {item.acers || "0.5"} Ac</span>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Site Visits Completed */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <div style={{ padding: "0 8px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Site Vists Completed</span>
            </div>
            <div data-lenis-prevent="true" className="hover-scrollbar" style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxHeight: "98px", overflowY: "auto", paddingBottom: "8px", paddingRight: "4px" }}>
              {(profileDetails?.completed_site_vists || []).map((item: any, idx: number) => (
                <div key={idx} onClick={() => setIsSiteVisitModalOpen(true)} style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "40px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                  <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={["#059669", "#D97706", "#2563EB", "#7C3AED"][idx % 4]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farm_code}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.mandal_id || "Medchal"} • ‹{item.price ? (Number(item.price) / 100000).toFixed(1) : "12.5"}L • {item.acers || "0.5"} Ac</span>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Active Listing */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <div style={{ padding: "0 8px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Active Listing</span>
            </div>
            <div data-lenis-prevent="true" className="hover-scrollbar" style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxHeight: "98px", overflowY: "auto", paddingBottom: "8px", paddingRight: "4px" }}>
              {(profileDetails?.user_listed_farmlands || []).map((item: any, idx: number) => (
                <div key={idx} onClick={() => router.push(`/profile/active-listing/${item.farm_id}`)} style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "40px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                  <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={["#059669", "#D97706", "#2563EB", "#7C3AED"][idx % 4]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farm_code}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.mandal_id || "Medchal"} • ‹{item.price ? (Number(item.price) / 100000).toFixed(1) : "12.5"}L • {item.acers || "0.5"} Ac
                    </span>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Active Deals In Queue */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <div style={{ padding: "0 8px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#43474E", textTransform: "uppercase" }}>Active Deals In Queue</span>
            </div>
            <div data-lenis-prevent="true" className="hover-scrollbar" style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxHeight: "250px", overflowY: "auto", paddingBottom: "8px", paddingRight: "4px" }}>
              {(profileDetails?.user_purchased_lands_tracking || []).map((item: any, idx: number) => (
                <div key={idx} onClick={() => router.push(`/profile/active-deals/${item.farm_id || item.farmland_id}`)} style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "40px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>
                  <div style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={["#059669", "#D97706", "#2563EB", "#7C3AED"][idx % 4]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 22l10-10" /></svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px" }}>{item.farm_code}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.mandal_id || "Medchal"} • ‹{item.price ? (Number(item.price) / 100000).toFixed(1) : "12.5"}L • {item.acers || "0.5"} Ac</span>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── CTA & FOOTER ─── */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
        <CTA />
        <Footer />
      </section>

      <SiteVisitCompletedModal
        isOpen={isSiteVisitModalOpen}
        onClose={() => setIsSiteVisitModalOpen(false)}
      />
      <SiteVisitQueueModal
        isOpen={isSiteVisitQueueModalOpen}
        onClose={() => setIsSiteVisitQueueModalOpen(false)}
      />
      <LandPurchaseTrackingModal
        isOpen={!!trackingModalFarmId}
        onClose={() => setTrackingModalFarmId(null)}
        farmlandId={trackingModalFarmId}
      />
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        userId={userId || 0}
        initialFirstName={userDetails?.frist_name || ""}
        initialLastName={userDetails?.last_name || ""}
        initialProfileUrl={profileImage !== "/assets/account/account-profile.svg" ? (profileImage || "") : userDetails?.profile_url || ""}
      />
      <WalletHistoryModal
        isOpen={isWalletHistoryModalOpen}
        onClose={() => setIsWalletHistoryModalOpen(false)}
      />
      <SignOutModal
        isOpen={isSignOutModalOpen}
        onClose={() => setIsSignOutModalOpen(false)}
        onConfirm={handleSignOut}
      />
      <input type="file" accept="image/*,application/pdf" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
      <input type="file" accept="image/*" style={{ display: "none" }} ref={profileInputRef} onChange={handleProfileImageChange} />
    </main>
  );
}
