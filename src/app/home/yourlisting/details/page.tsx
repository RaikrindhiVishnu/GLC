"use client";

import React, { Suspense, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CompareNavigation from "@/app/search/farmlanddetails/compare_premium/CompareNavigation";
import ListingDetailsHero from "./ListingDetailsHero";
import ListingConsole from "./ListingConsole";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";

function InnerYourListingDetails() {
  const searchParams = useSearchParams();
  const rawId = searchParams.get("id");
  const numericId = rawId ? parseInt(rawId.replace(/\D/g, "")) : null;

  return (
    <>
      {/* Mobile Navbar */}
      <div className="block lg:hidden w-full sticky top-0 z-50">
        <Navbar variant="app" active="yourlisting" forceScrolled={true} />
      </div>

      {/* Desktop Floating Navigation */}
      <CompareNavigation hideProfileImage={true} />

      {/* Top Cinematic Hero Section */}
      <ListingDetailsHero />

      {/* Main Content Area: Analytics and Management */}
      <div className="w-full z-20">
        <ListingConsole />
      </div>

      {/* Reused CTA Section */}
      <CTA />

      {/* Reused Footer */}
      <Footer />
    </>
  );
}

export default function YourListingDetailsPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center overflow-x-hidden">
      <Suspense fallback={<div className="flex w-full h-screen items-center justify-center font-jakarta text-[#0F2F4C]">Loading listing details...</div>}>
        <InnerYourListingDetails />
      </Suspense>
    </div>
  );
}
