"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationDropdown({ isOpen, onClose }: NotificationDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: "calc(100% + 15px)",
        right: "-10px", // Align slightly to the right, but safe
        width: "478px",
        maxWidth: "85vw",
        maxHeight: "calc(100vh - 120px)",
        background: "#FFFFFF",
        boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.15)",
        borderRadius: "24px",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header Area */}
      <div style={{ padding: "24px 24px 16px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexShrink: 0 }}>
        <div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F2F4C", margin: 0, lineHeight: "28px" }}>Notifications</h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#42474F", margin: 0 }}>You have 8 new alerts</p>
        </div>
        <button style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#2780C4", background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}>
          Mark all as read
        </button>
      </div>

      {/* Feed Scroll Area */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 16px 16px 16px",
        gap: "12px",
        overflowY: "auto",
        flexGrow: 1,
      }}>
        
        {/* Site Visit Scheduled Card */}
        <div style={{
          width: "100%",
          height: "167px",
          background: "#FFFFFF",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.09)",
          borderRadius: "24px",
          position: "relative",
          flexShrink: 0,
        }}>
          {/* Top section of card */}
          <div style={{ position: "absolute", left: "26px", top: "24px" }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "24px", color: "#000000", marginBottom: "8px" }}>Site Visit Scheduled</div>
            <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#2780C4", display: "flex", alignItems: "center", textDecoration: "none" }}>
              View Details 
              <span style={{ marginLeft: "4px" }}>&gt;</span>
            </Link>
          </div>
          
          {/* Bottom grey section */}
          <div style={{
            position: "absolute",
            width: "calc(100% + 6px)",
            height: "68px",
            left: "-3px",
            top: "102px",
            background: "rgba(238, 238, 238, 0.3)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
          }}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#000000", lineHeight: "20px" }}>Visit Date</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "#000000", lineHeight: "20px" }}>24/04/2026</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingLeft: "10px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#000000", lineHeight: "20px" }}>Location</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "#000000", lineHeight: "20px" }}>Vizag</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingLeft: "10px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#000000", lineHeight: "20px" }}>Land ID</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "#000000", lineHeight: "20px" }}>GLC SOS 01</span>
            </div>
          </div>
        </div>

        {/* Notification Item 8 */}
        <NotificationItem 
          title="Unlock land ownership with this 5 acre investment opportunity in Medchal."
          time="3 hours ago"
          imgColor="#A68B75"
          imgLabel="GLC SOS 01"
        />

        {/* Notification Item 3 */}
        <NotificationItem 
          title="Your KYC documents have been successfully verified and approved."
          time="3 hours ago"
        />

        {/* Notification Item 9 */}
        <NotificationItem 
          title="Unlock land ownership with this 5 acre investment opportunity in Medchal."
          time="3 hours ago"
          imgColor="#8BA675"
          imgLabel="GLC SOS 01"
        />

        {/* Notification Item 10 */}
        <NotificationItem 
          title="Site visit confirmed for tomorrow at 10:00 AM Geo-navigation link attached."
          time="3 hours ago"
          imgColor="#758BA6"
          imgLabel="GLC SOS 01"
        />

        {/* Notification Item 11 */}
        <NotificationItem 
          title="Subscription activated. Your Silver Tier plan is active until 15 July 2026."
          time="3 hours ago"
        />
        
        {/* Padding bottom inside scroll area */}
        <div style={{ height: "8px", width: "100%", flexShrink: 0 }}></div>

      </div>
    </div>
  );
}

function NotificationItem({ title, time, imgColor, imgLabel }: { title: string, time: string, imgColor?: string, imgLabel?: string }) {
  return (
    <div style={{
      width: "100%",
      minHeight: "89px",
      background: "#FFFFFF",
      borderRadius: "24px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "16px",
      boxSizing: "border-box",
      flexShrink: 0,
      borderBottom: "1px solid rgba(0,0,0,0.03)"
    }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingLeft: "16px", gap: "8px" }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "16px", color: "#42474F", paddingRight: imgColor ? "10px" : "0" }}>
          {title}
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", color: "rgba(66, 71, 79, 0.6)" }}>
          {time}
        </div>
      </div>
      
      {imgColor && (
        <div style={{ marginLeft: "19px", width: "74px", height: "85px", background: "#FFFFFF", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", borderRadius: "6.13px", position: "relative", flexShrink: 0, overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            left: "0", top: "0", width: "100%", height: "60px",
            background: imgColor,
            borderRadius: "6.13px 6.13px 0 0"
          }} />
          <div style={{
            position: "absolute",
            left: "6px", top: "67px",
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "6px", color: "#0F2F4C"
          }}>
            {imgLabel}
          </div>
        </div>
      )}
    </div>
  );
}
