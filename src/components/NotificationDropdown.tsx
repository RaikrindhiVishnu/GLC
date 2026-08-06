"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  useGetAllNotificationsByUserIdQuery, 
  useMarkNotificationAsReadMutation, 
  useMarkAllNotificationsAsReadMutation,
  NotificationItem as INotificationItem
} from "../services/notification";

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

  const [userId, setUserId] = useState<number | null>(null);
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);

  const { data: notifications = [] } = useGetAllNotificationsByUserIdQuery(
    { user_id: userId || 0, offset: 0 },
    { skip: !userId }
  );

  const [markNotificationAsRead] = useMarkNotificationAsReadMutation();
  const [markAllAsRead] = useMarkAllNotificationsAsReadMutation();

  const handleMarkAllAsRead = async () => {
    if (userId) {
      try {
        await markAllAsRead({ user_id: userId }).unwrap();
      } catch (err) {
        console.error("Failed to mark all as read:", err);
      }
    }
  };

  const handleNotificationClick = async (notif: INotificationItem) => {
    const id = notif.user_notification_id || notif.id;
    if (id && notif.is_read === 0) {
      try {
        await markNotificationAsRead({ UserNotificationIds: [id] }).unwrap();
      } catch (err) {
        console.error("Failed to mark notification as read:", err);
      }
    }
  };

  const unreadCount = notifications.filter(n => n.is_read === 0).length;

  const formatTimeAgo = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return "Just now";
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  };

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      onDoubleClick={onClose}
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
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#42474F", margin: 0 }}>You have {unreadCount} new alerts</p>
        </div>
        <button 
          onClick={handleMarkAllAsRead}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#2780C4", background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
        >
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
        
        {notifications.length > 0 ? (
          notifications.map((notif, idx) => (
            <div key={notif.user_notification_id || notif.id || idx} onClick={() => handleNotificationClick(notif)} style={{ width: "100%", cursor: "pointer" }}>
              <NotificationItem 
                title={notif.body || notif.title}
                time={formatTimeAgo(notif.time)}
                isRead={notif.is_read === 1}
              />
            </div>
          ))
        ) : (
          <div style={{ padding: "20px", width: "100%", textAlign: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#42474F" }}>
            No notifications
          </div>
        )}
        
        {/* Padding bottom inside scroll area */}
        <div style={{ height: "8px", width: "100%", flexShrink: 0 }}></div>

      </div>
    </div>
  );
}

function NotificationItem({ title, time, imgColor, imgLabel, isRead }: { title: string, time: string, imgColor?: string, imgLabel?: string, isRead?: boolean }) {
  return (
    <div style={{
      width: "100%",
      minHeight: "89px",
      background: isRead ? "#FFFFFF" : "#F8FBFF",
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
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: isRead ? 500 : 700, fontSize: "12px", lineHeight: "16px", color: "#42474F", paddingRight: imgColor ? "10px" : "0" }}>
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
