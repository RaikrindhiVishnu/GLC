"use client";

import React from "react";
import DetailsHero from "./DetailsHero";
import DetailsFeed from "./DetailsFeed";
import AddOnServices from "./AddOnServices";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function MyAssetsDetailedPage() {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <DetailsHero />

      <div className="w-full max-w-7xl px-4 lg:px-8 py-16 lg:py-24 flex flex-col gap-16 lg:gap-24 box-border">
        <DetailsFeed />
        <AddOnServices />
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
