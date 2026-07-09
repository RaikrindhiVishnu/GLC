"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useGetFarmlandByIdQuery, FarmlandDetailResponse } from "../../../../services/farmland";
import DetailsHero from "./DetailsHero";
import DetailsFeed from "./DetailsFeed";
import AddOnServices from "./AddOnServices";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function MyAssetsDetailedPage() {
  const searchParams = useSearchParams();
  const farmlandId = 35; // Hardcoded to 35 as per backend request (was Number(searchParams.get("id")) || 1)
  const { data: res, isLoading } = useGetFarmlandByIdQuery({ farmland_id: farmlandId });
  const farmland = res && res.success !== false ? res : null;

  if (isLoading) {
    return (
      <main className="w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center">
        <span className="font-jakarta text-[#091426] font-bold text-lg">Loading asset details...</span>
      </main>
    );
  }

  if (!farmland) {
    return (
      <main className="w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center">
        <span className="font-jakarta text-[#091426] font-bold text-lg">Asset not found.</span>
      </main>
    );
  }

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
      <DetailsHero farmland={farmland} />

      <div className="w-full max-w-7xl px-4 lg:px-8 py-16 lg:py-24 flex flex-col gap-16 lg:gap-24 box-border">
        <DetailsFeed farmland={farmland} />
        <AddOnServices />
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
