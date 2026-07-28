"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUpdateUserDetailsMutation } from "../services/user";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
  initialFirstName?: string;
  initialLastName?: string;
  initialProfileUrl?: string;
  onSuccess?: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  userId,
  initialFirstName = "",
  initialLastName = "",
  initialProfileUrl = "",
  onSuccess,
}: EditProfileModalProps) {
  const [updateUserDetails, { isLoading }] = useUpdateUserDetailsMutation();

  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [profileUrl, setProfileUrl] = useState(initialProfileUrl);

  useEffect(() => {
    if (isOpen) {
      setFirstName(initialFirstName);
      setLastName(initialLastName);
      setProfileUrl(initialProfileUrl);
    }
  }, [isOpen, initialFirstName, initialLastName, initialProfileUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: any = {
        id: userId,
        frist_name: firstName,
        last_name: lastName,
        state_id: 1, // Fallback as required by backend
      };
      if (profileUrl) {
        payload.profile_url = profileUrl;
      } else {
        payload.profile_url = ""; 
      }

      await updateUserDetails(payload).unwrap();
      
      onClose();
      if (onSuccess) {
        onSuccess();
      } else {
        window.location.reload();
      }
    } catch (error: any) {
      console.error("Failed to update profile", error);
      const errorMsg = `Status: ${error?.status}, Data: ${typeof error?.data === 'object' ? JSON.stringify(error?.data) : error?.data}, Err: ${error?.error || error?.message}`;
      alert(`Failed to update profile: ${errorMsg}`);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#091426]/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[32px] p-8 shadow-2xl overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="m-0 font-jakarta font-extrabold text-[24px] text-[#0F2F4C]">Edit Profile</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer border-none bg-transparent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-jakarta font-bold text-[11px] tracking-wider text-[#45474C] uppercase ml-1">First Name</label>
                <input 
                  type="text" 
                  value={firstName || ""} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  required
                  className="bg-[#F3F4F5] rounded-[16px] px-6 py-4 font-jakarta font-normal text-[15px] text-[#191C1D] outline-none border border-transparent focus:border-[#2780C4] transition-colors w-full box-border" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-jakarta font-bold text-[11px] tracking-wider text-[#45474C] uppercase ml-1">Last Name</label>
                <input 
                  type="text" 
                  value={lastName || ""} 
                  onChange={(e) => setLastName(e.target.value)}
                  required 
                  className="bg-[#F3F4F5] rounded-[16px] px-6 py-4 font-jakarta font-normal text-[15px] text-[#191C1D] outline-none border border-transparent focus:border-[#2780C4] transition-colors w-full box-border" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-jakarta font-bold text-[11px] tracking-wider text-[#45474C] uppercase ml-1">Profile URL (Optional)</label>
                <input 
                  type="url" 
                  value={profileUrl || ""} 
                  onChange={(e) => setProfileUrl(e.target.value)} 
                  placeholder="https://"
                  className="bg-[#F3F4F5] rounded-[16px] px-6 py-4 font-jakarta font-normal text-[15px] text-[#191C1D] outline-none border border-transparent focus:border-[#2780C4] transition-colors w-full box-border" 
                />
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="mt-4 bg-[#0F2F4C] text-white font-jakarta font-bold text-[16px] py-4 rounded-full shadow-lg hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 cursor-pointer border-none"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
