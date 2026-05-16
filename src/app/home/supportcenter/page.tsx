import React from "react";
import { Metadata } from "next";
import SupportCenterHero from "./SupportCenterHero";
import SupportCenterContent from "./SupportCenterContent";
import SupportChatScreen from "./supportchat/SupportChatScreen";
import SupportCenterSwitcher from "./SupportCenterSwitcher";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support Centre | Green Land Capital",
  description: "Track the real-time progress of your asset through our rigorous 4-tier legal, agronomy, and intelligence audit pipeline with expert support specialists.",
};

export default function SupportCenterPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#F8F9FA", display: "flex", flexDirection: "column" }}>
      {/* 1. Cinematic Persistent Hero Overlay Module */}
      <SupportCenterHero />

      {/* 2. Main Support Console Spatial Canvas mapped to route parameters */}
      <SupportCenterSwitcher
        contentView={<SupportCenterContent />}
        chatView={<SupportChatScreen />}
      />

      {/* 3. Universal Yield Branding Landscape Call-To-Action Ribbon */}
      <CTA />

      {/* 4. Global Corporate Identity Footer Shell Layout */}
      <Footer />
    </main>
  );
}
