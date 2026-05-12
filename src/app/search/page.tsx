"use client";

import { useState } from "react";
import SearchHeroSection from "./SearchHeroSection";
import CategoriesFilterTabs from "./CategoriesFilterTabs";
import MainListingsGrid from "./MainListingsGrid";
import SuggestedMatchesRow from "./SuggestedMatchesRow";
import TrendingFeaturedSection from "./TrendingFeaturedSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function SearchScreen() {

  return (
    <main style={{ minHeight: "100vh", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
      <SearchHeroSection />
      <CategoriesFilterTabs />
      <MainListingsGrid />
      <SuggestedMatchesRow />
      <TrendingFeaturedSection />
      <CTA />
      <Footer />
    </main>
  );
}
