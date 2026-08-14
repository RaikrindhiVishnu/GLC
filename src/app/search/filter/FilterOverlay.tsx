"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useSearchContext } from "../SearchContext";
import { useGetAllFarmlandsByStateIdQuery } from "../../../services/farmland";

interface FilterOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterOverlay({ isOpen, onClose }: FilterOverlayProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { filters, setFilters, masterData, geoData } = useSearchContext();

  const [stateSearch, setStateSearch] = useState<number | "">("");
  const [citySearch, setCitySearch] = useState<number | "">("");
  const [mandalSearch, setMandalSearch] = useState<number | "">("");
  
  const [openDropdown, setOpenDropdown] = useState<"state" | "city" | "mandal" | null>(null);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const [selectedLeft, setSelectedLeft] = useState<string[]>([]);
  const [selectedRight, setSelectedRight] = useState<string[]>([]);

  const [organicCert, setOrganicCert] = useState(false);
  const [waterRights, setWaterRights] = useState(false);

  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const [viewAllSearch, setViewAllSearch] = useState("");

  const [minPrice, setMinPrice] = useState(1000000); // Default min
  const [maxPrice, setMaxPrice] = useState(150000000); // Default max
  const [minSize, setMinSize] = useState(1);
  const [maxSize, setMaxSize] = useState(100);

  const [priceRange, setPriceRange] = useState([1000000, 150000000]);
  const [sizeRange, setSizeRange] = useState([1, 100]);

  const { data: farmlandRes } = useGetAllFarmlandsByStateIdQuery({
    state_id: stateSearch ? [Number(stateSearch)] : undefined,
    district_id: citySearch ? [Number(citySearch)] : undefined,
    mandal_id: mandalSearch ? [Number(mandalSearch)] : undefined,
  }, { skip: !isOpen });

  useEffect(() => {
    if (farmlandRes?.data && farmlandRes.data.length > 0) {
      let currentMinPrice = Infinity;
      let currentMaxPrice = -Infinity;
      let currentMinSize = Infinity;
      let currentMaxSize = -Infinity;

      farmlandRes.data.forEach(farm => {
        if (farm.price < currentMinPrice) currentMinPrice = farm.price;
        if (farm.price > currentMaxPrice) currentMaxPrice = farm.price;
        if (farm.acers !== undefined && farm.acers < currentMinSize) currentMinSize = farm.acers;
        if (farm.acers !== undefined && farm.acers > currentMaxSize) currentMaxSize = farm.acers;
      });

      if (currentMinPrice !== Infinity) setMinPrice(currentMinPrice);
      if (currentMaxPrice !== -Infinity) setMaxPrice(currentMaxPrice);
      if (currentMinSize !== Infinity) setMinSize(Math.floor(currentMinSize));
      if (currentMaxSize !== -Infinity) setMaxSize(Math.ceil(currentMaxSize));
      
      setPriceRange(prev => [
        Math.max(currentMinPrice !== Infinity ? currentMinPrice : prev[0], minPrice),
        Math.min(currentMaxPrice !== -Infinity ? currentMaxPrice : prev[1], maxPrice)
      ]);
      setSizeRange(prev => [
        Math.max(currentMinSize !== Infinity ? Math.floor(currentMinSize) : prev[0], minSize),
        Math.min(currentMaxSize !== -Infinity ? Math.ceil(currentMaxSize) : prev[1], maxSize)
      ]);
    } else {
      setMinPrice(1000000);
      setMaxPrice(150000000);
      setMinSize(1);
      setMaxSize(100);
    }
  }, [farmlandRes]);

  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), priceRange[1] - 1000000);
    setPriceRange([value, priceRange[1]]);
  };
  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), priceRange[0] + 1000000);
    setPriceRange([priceRange[0], value]);
  };

  const handleSizeMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), sizeRange[1] - 1);
    setSizeRange([value, sizeRange[1]]);
  };
  const handleSizeMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), sizeRange[0] + 1);
    setSizeRange([sizeRange[0], value]);
  };

  const formatPrice = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)}Cr`;
    return `₹${(val / 100000).toFixed(0)}L`;
  };

  useEffect(() => {
    if (isOpen) {
      setStateSearch(filters.state_id?.[0] || "");
      setCitySearch(filters.district_id?.[0] || "");
      setMandalSearch(filters.mandal_id?.[0] || "");
      setSelectedLeft((filters.tag_ids || []).map(String));
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, filters]);

  if (!isOpen) return null;

  // Extract arrays from geoData (skipping header row)
  const states = geoData?.states?.slice(1) || [];
  const allDistricts = geoData?.districts?.slice(1) || [];
  const districts = allDistricts.filter(d => stateSearch ? Number(d[1]) === Number(stateSearch) : true);

  const allMandals = geoData?.mandals?.slice(1) || [];
  const mandals = allMandals.filter(m => citySearch ? (Number(m[1]) === Number(citySearch) || Number(m[2]) === Number(citySearch)) : true);

  // Extract master data
  const tags = masterData?.data?.tagResult || [];
  const soilTypes = masterData?.data?.soilTypeResult || [];

  const collectionsList = [
    "Most Searched",
    "GLC's Certified",
    "Premium Listing",
    "Trending Land",
  ];

  const attributesList = [
    { name: "Borewell", icon: "drop" },
    { name: "Silt Loam", icon: "sprout" },
    { name: "Canal Access", icon: "waves" },
    { name: "Red Laterite", icon: "mountain" },
  ];

  const allActionsList = [
    "Most Searched",
    "Premium Listing",
    "GLC's Certified",
    "Trending Land",
    "Most Popular",
    "Hot Deals",
    "Most Viewed",
    "Most Bookmarked"
  ];

  if (!isOpen) return null;

  const toggleLeft = (item: string) => {
    setSelectedLeft(prev => prev.includes(item as any) ? prev.filter(i => i !== (item as any)) : [...prev, item as any]);
  };

  const toggleRight = (item: string) => {
    setSelectedRight(prev => prev.includes(item as any) ? prev.filter(i => i !== (item as any)) : [...prev, item as any]);
  };

  // Helper renderers for beautiful attribute vector icons
  const renderAttributeIcon = (iconType: string, isSelected: boolean) => {
    const color = isSelected ? "#FFFFFF" : "#45474C";
    const opacity = isSelected ? 1 : 0.7;

    switch (iconType) {
      case "drop":
        return (
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
            <path d="M8.275 17C8.475 16.9833 8.64583 16.9042 8.7875 16.7625C8.92917 16.6208 9 16.45 9 16.25C9 16.0167 8.925 15.8292 8.775 15.6875C8.625 15.5458 8.43333 15.4833 8.2 15.5C7.51667 15.55 6.79167 15.3625 6.025 14.9375C5.25833 14.5125 4.775 13.7417 4.575 12.625C4.54167 12.4417 4.45417 12.2917 4.3125 12.175C4.17083 12.0583 4.00833 12 3.825 12C3.59167 12 3.4 12.0875 3.25 12.2625C3.1 12.4375 3.05 12.6417 3.1 12.875C3.38333 14.3917 4.05 15.475 5.1 16.125C6.15 16.775 7.20833 17.0667 8.275 17ZM8 20C5.71667 20 3.8125 19.2167 2.2875 17.65C0.7625 16.0833 0 14.1333 0 11.8C0 10.1333 0.6625 8.32083 1.9875 6.3625C3.3125 4.40417 5.31667 2.28333 8 0C10.6833 2.28333 12.6875 4.40417 14.0125 6.3625C15.3375 8.32083 16 10.1333 16 11.8C16 14.1333 15.2375 16.0833 13.7125 17.65C12.1875 19.2167 10.2833 20 8 20ZM8 18C9.73333 18 11.1667 17.4125 12.3 16.2375C13.4333 15.0625 14 13.5833 14 11.8C14 10.5833 13.4958 9.20833 12.4875 7.675C11.4792 6.14167 9.98333 4.46667 8 2.65C6.01667 4.46667 4.52083 6.14167 3.5125 7.675C2.50417 9.20833 2 10.5833 2 11.8C2 13.5833 2.56667 15.0625 3.7 16.2375C4.83333 17.4125 6.26667 18 8 18Z" fill={color} />
          </svg>
        );
      case "sprout":
        return (
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
            <path d="M0 16V14H5.75C5.38333 12.5833 4.6875 11.3625 3.6625 10.3375C2.6375 9.3125 1.41667 8.61667 0 8.25C0.333333 8.16667 0.6625 8.10417 0.9875 8.0625C1.3125 8.02083 1.65 8 2 8C4.23333 8 6.125 8.775 7.675 10.325C9.225 11.875 10 13.7667 10 16H0ZM12 16C12 15.3 11.925 14.6042 11.775 13.9125C11.625 13.2208 11.4083 12.5583 11.125 11.925C11.825 10.7417 12.7792 9.79167 13.9875 9.075C15.1958 8.35833 16.5333 8 18 8C18.35 8 18.6875 8.02083 19.0125 8.0625C19.3375 8.10417 19.6667 8.16667 20 8.25C18.5833 8.61667 17.3667 9.3125 16.35 10.3375C15.3333 11.3625 14.6333 12.5833 14.25 14H20V16H12ZM10 10.025C10 8.94167 10.2 7.925 10.6 6.975C11 6.025 11.55 5.1875 12.25 4.4625C12.95 3.7375 13.7708 3.15833 14.7125 2.725C15.6542 2.29167 16.6583 2.05833 17.725 2.025C16.7917 2.60833 15.975 3.325 15.275 4.175C14.575 5.025 14.0333 5.975 13.65 7.025C12.9167 7.375 12.2458 7.80417 11.6375 8.3125C11.0292 8.82083 10.4833 9.39167 10 10.025ZM8.175 8.15C7.975 8 7.775 7.85833 7.575 7.725C7.375 7.59167 7.16667 7.45833 6.95 7.325C6.95 7.225 6.95833 7.12083 6.975 7.0125C6.99167 6.90417 7 6.8 7 6.7C7 5.43333 6.8 4.23333 6.4 3.1C6 1.96667 5.43333 0.933333 4.7 0C5.8 0.45 6.75417 1.09583 7.5625 1.9375C8.37083 2.77917 8.99167 3.75 9.425 4.85C9.125 5.35 8.86667 5.87917 8.65 6.4375C8.43333 6.99583 8.275 7.56667 8.175 8.15Z" fill={color} />
          </svg>
        );
      case "waves":
        return (
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
            <g opacity="0.7">
              <path d="M0 16.7V14.75C0.483333 14.75 0.895833 14.675 1.2375 14.525C1.57917 14.375 1.925 14.2125 2.275 14.0375C2.625 13.8625 3.0125 13.7042 3.4375 13.5625C3.8625 13.4208 4.3875 13.35 5.0125 13.35C5.6375 13.35 6.15417 13.4208 6.5625 13.5625C6.97083 13.7042 7.35 13.8625 7.7 14.0375C8.05 14.2125 8.4 14.375 8.75 14.525C9.1 14.675 9.51667 14.75 10 14.75C10.4833 14.75 10.9 14.675 11.25 14.525C11.6 14.375 11.95 14.2125 12.3 14.0375C12.65 13.8625 13.0333 13.7042 13.45 13.5625C13.8667 13.4208 14.3875 13.35 15.0125 13.35C15.6375 13.35 16.1583 13.4208 16.575 13.5625C16.9917 13.7042 17.375 13.8625 17.725 14.0375C18.075 14.2125 18.425 14.375 18.775 14.525C19.125 14.675 19.5333 14.75 20 14.75V16.7C19.3667 16.7 18.8375 16.625 18.4125 16.475C17.9875 16.325 17.6 16.1625 17.25 15.9875C16.9 15.8125 16.5583 15.6542 16.225 15.5125C15.8917 15.3708 15.4833 15.3 15 15.3C14.5333 15.3 14.1292 15.3708 13.7875 15.5125C13.4458 15.6542 13.1042 15.8125 12.7625 15.9875C12.4208 16.1625 12.0375 16.325 11.6125 16.475C11.1875 16.625 10.65 16.7 10 16.7C9.35 16.7 8.8125 16.625 8.3875 16.475C7.9625 16.325 7.57917 16.1625 7.2375 15.9875C6.89583 15.8125 6.55833 15.6542 6.225 15.5125C5.89167 15.3708 5.4875 15.3 5.0125 15.3C4.5375 15.3 4.12917 15.3708 3.7875 15.5125C3.44583 15.6542 3.1 15.8125 2.75 15.9875C2.4 16.1625 2.0125 16.325 1.5875 16.475C1.1625 16.625 0.633333 16.7 0 16.7ZM0 12.25V10.3C0.483333 10.3 0.895833 10.225 1.2375 10.075C1.57917 9.925 1.925 9.7625 2.275 9.5875C2.625 9.4125 3.0125 9.25417 3.4375 9.1125C3.8625 8.97083 4.3875 8.9 5.0125 8.9C5.6375 8.9 6.15417 8.97083 6.5625 9.1125C6.97083 9.25417 7.35 9.4125 7.7 9.5875C8.05 9.7625 8.4 9.925 8.75 10.075C9.1 10.225 9.51667 10.3 10 10.3C10.4833 10.3 10.9 10.225 11.25 10.075C11.6 9.925 11.95 9.7625 12.3 9.5875C12.65 9.4125 13.0333 9.25417 13.45 9.1125C13.8667 8.97083 14.3833 8.9 15 8.9C15.6333 8.9 16.1583 8.97083 16.575 9.1125C16.9917 9.25417 17.375 9.4125 17.725 9.5875C18.075 9.7625 18.425 9.925 18.775 10.075C19.125 10.225 19.5333 10.3 20 10.3V12.25C19.3667 12.25 18.8375 12.175 18.4125 12.025C17.9875 11.875 17.6 11.7125 17.25 11.5375C16.9 11.3625 16.5583 11.2042 16.225 11.0625C15.8917 10.9208 15.4833 10.85 15 10.85C14.5167 10.85 14.1042 10.9208 13.7625 11.0625C13.4208 11.2042 13.0792 11.3625 12.7375 11.5375C12.3958 11.7125 12.0167 11.875 11.6 12.025C11.1833 12.175 10.65 12.25 10 12.25C9.35 12.25 8.8125 12.175 8.3875 12.025C7.9625 11.875 7.57917 11.7125 7.2375 11.5375C6.89583 11.3625 6.55833 11.2042 6.225 11.0625C5.89167 10.9208 5.4875 10.85 5.0125 10.85C4.5375 10.85 4.12917 10.9208 3.7875 11.0625C3.44583 11.2042 3.1 11.3625 2.75 11.5375C2.4 11.7125 2.0125 11.875 1.5875 12.025C1.1625 12.175 0.633333 12.25 0 12.25ZM0 7.8V5.85C0.483333 5.85 0.895833 5.775 1.2375 5.625C1.57917 5.475 1.925 5.3125 2.275 5.1375C2.625 4.9625 3.0125 4.80417 3.4375 4.6625C3.8625 4.52083 4.3875 4.45 5.0125 4.45C5.6375 4.45 6.15417 4.52083 6.5625 4.6625C6.97083 4.80417 7.35 4.9625 7.7 5.1375C8.05 5.3125 8.4 5.475 8.75 5.625C9.1 5.775 9.51667 5.85 10 5.85C10.4833 5.85 10.9 5.775 11.25 5.625C11.6 5.475 11.95 5.3125 12.3 5.1375C12.65 4.9625 13.0333 4.80417 13.45 4.6625C13.8667 4.52083 14.3833 4.45 15 4.45C15.6333 4.45 16.1583 4.52083 16.575 4.6625C16.9917 4.80417 17.375 4.9625 17.725 5.1375C18.075 5.3125 18.425 5.475 18.775 5.625C19.125 5.775 19.5333 5.85 20 5.85V7.8C19.3667 7.8 18.8375 7.725 18.4125 7.575C17.9875 7.425 17.6 7.2625 17.25 7.0875C16.9 6.9125 16.5583 6.75417 16.225 6.6125C15.8917 6.47083 15.4833 6.4 15 6.4C14.5333 6.4 14.1292 6.47083 13.7875 6.6125C13.4458 6.75417 13.1042 6.9125 12.7625 7.0875C12.4208 7.2625 12.0375 7.425 11.6125 7.575C11.1875 7.725 10.65 7.8 10 7.8C9.35 7.8 8.8125 7.725 8.3875 7.575C7.9625 7.425 7.57917 7.2625 7.2375 7.0875C6.89583 6.9125 6.55833 6.75417 6.225 6.6125C5.89167 6.47083 5.4875 6.4 5.0125 6.4C4.5375 6.4 4.12917 6.47083 3.7875 6.6125C3.44583 6.75417 3.1 6.9125 2.75 7.0875C2.4 7.2625 2.0125 7.425 1.5875 7.575C1.1625 7.725 0.633333 7.8 0 7.8ZM0 3.35V1.4C0.483333 1.4 0.895833 1.325 1.2375 1.175C1.57917 1.025 1.925 0.8625 2.275 0.6875C2.625 0.5125 3.0125 0.354167 3.4375 0.2125C3.8625 0.0708333 4.3875 0 5.0125 0C5.6375 0 6.15417 0.0708333 6.5625 0.2125C6.97083 0.354167 7.35 0.5125 7.7 0.6875C8.05 0.8625 8.4 1.025 8.75 1.175C9.1 1.325 9.51667 1.4 10 1.4C10.4833 1.4 10.9 1.325 11.25 1.175C11.6 1.025 11.95 0.8625 12.3 0.6875C12.65 0.5125 13.0333 0.354167 13.45 0.2125C13.8667 0.0708333 14.3833 0 15 0C15.6333 0 16.1583 0.0708333 16.575 0.2125C16.9917 0.354167 17.375 0.5125 17.725 0.6875C18.075 0.8625 18.425 1.025 18.775 1.175C19.125 1.325 19.5333 1.4 20 1.4V3.35C19.3667 3.35 18.8375 3.275 18.4125 3.125C17.9875 2.975 17.6 2.8125 17.25 2.6375C16.9 2.4625 16.5583 2.30417 16.225 2.1625C15.8917 2.02083 15.4833 1.95 15 1.95C14.5333 1.95 14.1292 2.02083 13.7875 2.1625C13.4458 2.30417 13.1042 2.4625 12.7625 2.6375C12.4208 2.8125 12.0375 2.975 11.6125 3.125C11.1875 3.275 10.65 3.35 10 3.35C9.35 3.35 8.8125 3.275 8.3875 3.125C7.9625 2.975 7.57917 2.8125 7.2375 2.6375C6.89583 2.4625 6.55833 2.30417 6.225 2.1625C5.89167 2.02083 5.4875 1.95 5.0125 1.95C4.5375 1.95 4.12917 2.02083 3.7875 2.1625C3.44583 2.30417 3.1 2.4625 2.75 2.6375C2.4 2.8125 2.0125 2.975 1.5875 3.125C1.1625 3.275 0.633333 3.35 0 3.35Z" fill={color} />
            </g>
          </svg>
        );
      case "mountain":
        return (
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
            <path d="M0 12L6 4L10.5 10H18L13 3.35L10.5 6.65L9.25 5L13 0L22 12H0ZM4 10H8L6 7.325L4 10ZM4 10H6H8H4Z" fill={color} />
          </svg>
        );
      default:
        return null;
    }
  };

  const CustomDropdown = ({ 
    value, onChange, options, placeholder, disabled, icon, isOpen, onToggle 
  }: { 
    value: any, onChange: (v: any) => void, options: {value: any, label: string}[], placeholder: string, disabled?: boolean, icon: React.ReactNode, isOpen: boolean, onToggle: () => void 
  }) => {
    const selectedOption = options.find(o => o.value === value);
    const displayLabel = selectedOption ? selectedOption.label : placeholder;

    return (
      <div 
        style={{ height: "57px", background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.3)", borderRadius: "9999px", boxSizing: "border-box", opacity: disabled ? 0.5 : 1 }}
        className={`flex-1 flex items-center relative pl-12 pr-4 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={(e) => {
          e.stopPropagation();
          if (!disabled) onToggle();
        }}
      >
        <div className="absolute left-4 flex items-center justify-center">
          {icon}
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: value ? "#0F2F4C" : "#75777D" }} className="w-full text-sm md:text-base pr-8 truncate">
          {displayLabel}
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#75777D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-4 pointer-events-none">
          <polyline points={isOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
        </svg>

        {isOpen && !disabled && (
          <div 
            className="absolute left-0 right-0 bg-white shadow-xl z-50 overflow-y-auto"
            style={{ 
              top: "64px", 
              borderRadius: "24px", 
              maxHeight: "260px", 
              padding: "8px",
              border: "1px solid rgba(197, 198, 205, 0.4)",
              boxShadow: "0px 20px 40px -10px rgba(9, 20, 38, 0.15)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {options.map((opt) => (
              <div 
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  onToggle(); // close after selection
                }}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className={`px-4 py-3 cursor-pointer text-sm transition-colors duration-150 rounded-xl ${opt.value === value ? 'bg-[#EEF6FF] text-[#2780C4] font-semibold' : 'text-[#45474C] hover:bg-[#EEF6FF] hover:text-[#2780C4] font-medium'}`}
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    /* Modal Overlay Backdrop */
    <div 
      style={{
        position: "fixed" as const,
        inset: 0,
        zIndex: 100,
        background: "rgba(9, 20, 38, 0.4)",
        backdropFilter: "blur(16.5px)",
        WebkitBackdropFilter: "blur(16.5px)",
        boxSizing: "border-box",
      }}
      className="select-none flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
      data-lenis-prevent
    >
      {/* Main Modal Container mapped fluidly to fit perfectly inside the viewport without external page scroll */}
      <div 
        style={{
          background: "#F3F4F5",
          boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
          borderRadius: "48px",
          position: "relative" as const,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
        className="w-full max-w-[896px] h-[90vh] max-h-[921px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* ─── HEADER SECTION (Fixed slice height 66px docked cleanly at top) ─── */}
        <div 
          style={{
            position: "absolute" as const,
            height: "66px",
            left: "0px",
            right: "0px",
            top: "0px",
            background: "#FFFFFF",
            borderTopLeftRadius: "48px",
            borderTopRightRadius: "48px",
            zIndex: 30,
            boxSizing: "border-box",
          }}
          className="flex justify-between items-center px-4 md:px-10 w-full"
        >
          {/* Subtle Close Trigger mapped precisely without dark solid fill */}
          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            title="Close filter panel"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>

          {/* Heading 1: Title */}
          <span 
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.6px",
              color: "#0F2F4C",
            }}
            className="text-lg md:text-[24px] leading-tight md:leading-[32px]"
          >
            Filter Properties
          </span>

          {/* CLEAR ALL Trigger */}
          <button
            onClick={() => {
              setSelectedLeft([]);
              setSelectedRight([]);
              setOrganicCert(false);
              setWaterRights(false);
              setStateSearch("");
              setCitySearch("");
              setMandalSearch("");
              setPriceRange([10000000, 150000000]);
              setSizeRange([10, 45]);
              setFilters({
                state_id: [],
                district_id: [],
                mandal_id: [],
                tag_ids: []
              });
            }}
            style={{
              background: "transparent",
              border: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: "#45474C",
              cursor: "pointer",
              padding: 0,
            }}
            className="text-xs md:text-sm"
          >
            CLEAR ALL
          </button>
        </div>

        {/* ─── SCROLLABLE MATRIX CONTENT (Anchored natively between Header and Action Console to dynamically prevent overlap) ─── */}
        <div 
          style={{
            position: "absolute" as const,
            top: "66px", // Directly underneath the 66px tall Header Section
            bottom: "133px", // Directly above the 133px tall Action Console sticky footer
            left: "0px",
            right: "0px",
            overflowY: "scroll",
            boxSizing: "border-box",
          }}
          className="flex flex-col items-start px-4 md:px-10 pt-6 gap-8 pb-8 w-full"
          data-lenis-prevent
        >

          {/* 1. LOCATION SECTION */}
          <div className="w-full flex flex-col gap-4 box-border">
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                color: "#0F2F4C",
              }}
            >
              LOCATION
            </span>

            {/* Responsive side-by-side inputs row stackable on mobile */}
            <div className="w-full flex flex-col md:flex-row gap-4 box-border justify-between relative z-40">
              
              <CustomDropdown 
                value={stateSearch}
                onChange={(v) => { setStateSearch(v); setCitySearch(""); setMandalSearch(""); }}
                options={[
                  { value: "", label: "All States" },
                  ...states.map(s => ({ value: s[0], label: s[3] }))
                ]}
                placeholder="Select State"
                isOpen={openDropdown === "state"}
                onToggle={() => setOpenDropdown(openDropdown === "state" ? null : "state")}
                icon={
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 20ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#75777D"/>
                  </svg>
                }
              />

              <CustomDropdown 
                value={citySearch}
                onChange={(v) => { setCitySearch(v); setMandalSearch(""); }}
                options={[
                  { value: "", label: "All Districts" },
                  ...districts.map(d => ({ value: d[0], label: d[3] }))
                ]}
                placeholder="Select District"
                disabled={!stateSearch && states.length > 0}
                isOpen={openDropdown === "city"}
                onToggle={() => setOpenDropdown(openDropdown === "city" ? null : "city")}
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18L6 15.9L1.35 17.7C1.01667 17.8333 0.708333 17.7958 0.425 17.5875C0.141667 17.3792 0 17.1 0 16.75V2.75C0 2.53333 0.0625 2.34167 0.1875 2.175C0.3125 2.00833 0.483333 1.88333 0.7 1.8L6 0L12 2.1L16.65 0.3C16.9833 0.166667 17.2917 0.204167 17.575 0.4125C17.8583 0.620833 18 0.9 18 1.25V15.25C18 15.4667 17.9375 15.6583 17.8125 15.825C17.6875 15.9917 17.5167 16.1167 17.3 16.2L12 18ZM11 15.55V3.85L7 2.45V14.15L11 15.55ZM13 15.55L16 14.55V2.7L13 3.85V15.55ZM2 15.3L5 14.15V2.45L2 3.45V15.3ZM13 3.85V15.55V3.85ZM5 2.45V14.15V2.45Z" fill="#75777D"/>
                  </svg>
                }
              />

              <CustomDropdown 
                value={mandalSearch}
                onChange={(v) => setMandalSearch(v)}
                options={[
                  { value: "", label: "All Mandals" },
                  ...mandals.map(m => ({ value: m[0], label: m[3] }))
                ]}
                placeholder="Select Mandal"
                disabled={!citySearch && districts.length > 0}
                isOpen={openDropdown === "mandal"}
                onToggle={() => setOpenDropdown(openDropdown === "mandal" ? null : "mandal")}
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18L6 15.9L1.35 17.7C1.01667 17.8333 0.708333 17.7958 0.425 17.5875C0.141667 17.3792 0 17.1 0 16.75V2.75C0 2.53333 0.0625 2.34167 0.1875 2.175C0.3125 2.00833 0.483333 1.88333 0.7 1.8L6 0L12 2.1L16.65 0.3C16.9833 0.166667 17.2917 0.204167 17.575 0.4125C17.8583 0.620833 18 0.9 18 1.25V15.25C18 15.4667 17.9375 15.6583 17.8125 15.825C17.6875 15.9917 17.5167 16.1167 17.3 16.2L12 18ZM11 15.55V3.85L7 2.45V14.15L11 15.55ZM13 15.55L16 14.55V2.7L13 3.85V15.55ZM2 15.3L5 14.15V2.45L2 3.45V15.3ZM13 3.85V15.55V3.85ZM5 2.45V14.15V2.45Z" fill="#75777D"/>
                  </svg>
                }
              />

            </div>
          </div>

          {/* 2. INVESTMENT & SCALE SECTION */}
          <div className="w-full flex flex-col gap-4 box-border">
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                color: "#0F2F4C",
              }}
            >
              INVESTMENT & SCALE
            </span>

            {/* Master White Track Container perfectly wrapping */}
            <div 
              style={{
                background: "#FFFFFF",
                borderRadius: "32px",
                boxSizing: "border-box",
              }}
              className="w-full p-4 md:p-8 flex flex-col md:flex-row gap-8 justify-between"
            >
              {/* Left Slider: Price Range */}
              <div className="w-full md:w-[352px] flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#45474C" }} className="text-sm md:text-base">
                    Price Range (₹)
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0F2F4C" }} className="text-xs md:text-sm">
                    {formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}
                  </span>
                </div>

                {/* Track visual block */}
                <div className="relative w-full h-8 flex items-center mb-4 mt-2">
                  <div style={{ height: "6px", background: "#E7E8E9", borderRadius: "9999px" }} className="absolute inset-x-0" />
                  <div style={{ height: "6px", background: "#2780C4", borderRadius: "9999px", 
                    left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice || 1)) * 100}%`,
                    right: `${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice || 1)) * 100}%`
                  }} className="absolute" />
                  
                  <input type="range" min={minPrice} max={maxPrice} step="1000000" value={priceRange[0]} onChange={handlePriceMinChange} className="absolute w-full appearance-none bg-transparent pointer-events-none" style={{ zIndex: 3, outline: 'none' }} />
                  <input type="range" min={minPrice} max={maxPrice} step="1000000" value={priceRange[1]} onChange={handlePriceMaxChange} className="absolute w-full appearance-none bg-transparent pointer-events-none" style={{ zIndex: 4, outline: 'none' }} />
                  <style>{`
                    input[type=range]::-webkit-slider-thumb {
                      pointer-events: all;
                      width: 20px;
                      height: 20px;
                      -webkit-appearance: none;
                      background: #2780C4;
                      border: 4px solid #FFFFFF;
                      border-radius: 9999px;
                      box-shadow: 0px 4px 6px -4px rgba(0,0,0,0.1);
                      cursor: pointer;
                    }
                  `}</style>
                </div>

                {/* Min/Max Value Pills */}
                <div className="flex justify-between items-center w-full mt-1">
                  <div className="flex flex-col items-start gap-2">
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#424750", letterSpacing: "0.24px" }} className="text-[12px] leading-[16px] pl-2">
                      Minimum
                    </span>
                    <div style={{ background: "#F2F4F6", border: "0.63px solid #C2C6D2", borderRadius: "31px", height: "33px", width: "69px" }} className="flex items-center justify-center">
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#191C1E" }} className="text-[10.15px] flex items-center">
                        {formatPrice(priceRange[0])}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#424750", letterSpacing: "0.24px" }} className="text-[12px] leading-[16px] pl-2">
                      Maximum
                    </span>
                    <div style={{ background: "#F2F4F6", border: "0.63px solid #C2C6D2", borderRadius: "31px", height: "33px", width: "69px" }} className="flex items-center justify-center">
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#191C1E" }} className="text-[10.15px] flex items-center">
                        {formatPrice(priceRange[1])}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Slider: Property Size */}
              <div className="w-full md:w-[352px] flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#45474C" }} className="text-sm md:text-base">
                    Property Size (Acres)
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0F2F4C" }} className="text-xs md:text-sm">
                    {sizeRange[0]} – {sizeRange[1]} Acres
                  </span>
                </div>

                {/* Track visual block */}
                <div className="relative w-full h-8 flex items-center mb-4 mt-2">
                  <div style={{ height: "6px", background: "#E7E8E9", borderRadius: "9999px" }} className="absolute inset-x-0" />
                  <div style={{ height: "6px", background: "#2780C4", borderRadius: "9999px", 
                    left: `${((sizeRange[0] - minSize) / (maxSize - minSize || 1)) * 100}%`,
                    right: `${100 - ((sizeRange[1] - minSize) / (maxSize - minSize || 1)) * 100}%`
                  }} className="absolute" />
                  
                  <input type="range" min={minSize} max={maxSize} step="1" value={sizeRange[0]} onChange={handleSizeMinChange} className="absolute w-full appearance-none bg-transparent pointer-events-none" style={{ zIndex: 3, outline: 'none' }} />
                  <input type="range" min={minSize} max={maxSize} step="1" value={sizeRange[1]} onChange={handleSizeMaxChange} className="absolute w-full appearance-none bg-transparent pointer-events-none" style={{ zIndex: 4, outline: 'none' }} />
                </div>

                {/* Min/Max Value Pills */}
                <div className="flex justify-between items-center w-full mt-1">
                  <div className="flex flex-col items-start gap-2">
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#424750", letterSpacing: "0.24px" }} className="text-[12px] leading-[16px] pl-2">
                      Minimum
                    </span>
                    <div style={{ background: "#F2F4F6", border: "0.63px solid #C2C6D2", borderRadius: "31px", height: "33px", width: "69px" }} className="flex items-center justify-center">
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#191C1E" }} className="text-[10.15px]">
                        {sizeRange[0]} Acres
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#424750", letterSpacing: "0.24px" }} className="text-[12px] leading-[16px] pl-2">
                      Maximum
                    </span>
                    <div style={{ background: "#F2F4F6", border: "0.63px solid #C2C6D2", borderRadius: "31px", height: "33px", width: "69px" }} className="flex items-center justify-center">
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#191C1E" }} className="text-[10.15px]">
                        {sizeRange[1]} Acres
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 3. CURATED COLLECTIONS SELECTION GRID */}
          <div className="w-full flex flex-col gap-5 box-border flex-shrink-0">
            
            <div className="w-full flex flex-col md:flex-row gap-8 justify-between">
              {/* Left Curated Section block */}
              <div className="w-full md:w-[384px] flex flex-col gap-[14px]">
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", color: "#0F2F4C" }}>
                  ACTION-ORIENTED
                </span>

                <div className="flex flex-wrap gap-x-[10px] gap-y-[12px] w-full">
                  {collectionsList.map((item: string, i: number) => {
                    const isSelected = selectedLeft.includes(item as any);
                    return (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, filter: "blur(8px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      onClick={() => toggleLeft(item)}
                      style={{
                        height: "40px",
                        padding: "0 20px",
                        background: isSelected ? "#0F2F4C" : "#E7E8E9",
                        color: isSelected ? "#FFFFFF" : "#45474C",
                        borderRadius: "9999px", border: "none", fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, cursor: "pointer",
                        boxShadow: isSelected ? "0px 4px 8px rgba(15, 47, 76, 0.2)" : "none",
                      }}
                      className="text-[14px] flex items-center justify-center shrink-0"
                    >
                      {item}
                    </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Right Curated Section block */}
              <div className="w-full md:w-[384px] flex flex-col gap-[14px]">
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", color: "#0F2F4C" }}>
                  LAND-ATTRIBUTES
                </span>

                <div className="flex flex-wrap gap-x-[10px] gap-y-[12px] w-full">
                  {attributesList.map((attr, i: number) => {
                    const isSelected = selectedRight.includes(attr.name as any);
                    return (
                    <motion.button
                      key={attr.name}
                      initial={{ opacity: 0, filter: "blur(8px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      onClick={() => toggleRight(attr.name)}
                      style={{
                        height: "40px",
                        padding: "0 20px",
                        background: isSelected ? "#0F2F4C" : "#E7E8E9",
                        color: isSelected ? "#FFFFFF" : "#45474C",
                        borderRadius: "9999px", border: "none", cursor: "pointer",
                        boxShadow: isSelected ? "0px 4px 8px rgba(15, 47, 76, 0.2)" : "none",
                      }}
                      className="text-[14px] flex items-center justify-center gap-[8px] font-semibold font-jakarta shrink-0"
                    >
                      {renderAttributeIcon(attr.icon, isSelected)}
                      <span>{attr.name}</span>
                    </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* View All & Horizontal Divider */}
            <div className="w-full flex flex-row items-center gap-[12px]">
              <button
                onClick={() => setIsViewAllOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "#2880C4",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                View All
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 9L5 5L1 1" />
                </svg>
              </button>
              <div className="flex-1 h-[1px]" style={{ background: "rgba(194, 199, 209, 0.4)" }}></div>
            </div>

          </div>

          {/* 4. SPECIAL FEATURES SECTION (iOS Grouped List) */}
          <div className="w-full flex flex-col gap-4 box-border flex-shrink-0 pb-6">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1.4px", color: "#0F2F4C" }}>
              SPECIAL FEATURES
            </span>

            {/* iOS Box Frame */}
            <div style={{ background: "#FFFFFF", border: "1px solid rgba(197, 198, 205, 0.1)", borderRadius: "32px" }} className="w-full flex flex-col box-border overflow-hidden">
              
              {/* Row 1 */}
              <div 
                onClick={() => setOrganicCert(!organicCert)}
                style={{ borderBottom: "1px solid rgba(197, 198, 205, 0.15)" }}
                className="w-full py-4 px-4 md:px-6 flex justify-between items-center cursor-pointer box-border"
              >
                <div className="flex flex-col pr-2">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, color: "#0F2F4C" }} className="text-sm md:text-base">
                    GLC Exclusive Farmlands
                  </span>
                </div>

                {/* Switch visual rendering */}
                <div 
                  style={{
                    background: organicCert ? "linear-gradient(135deg, #ADFF2F 0%, #8FD91F 100%)" : "#E7E8E9",
                    boxShadow: organicCert ? "0px 4px 12px rgba(173, 255, 47, 0.4)" : "none",
                    transition: "all 0.2s"
                  }}
                  className={`w-12 md:w-14 h-7 md:h-8 rounded-full flex items-center px-1 flex-shrink-0 ${organicCert ? "justify-end" : "justify-start"}`}
                >
                  <div className="w-5 md:w-6 h-5 md:h-6 bg-white rounded-full shadow-xs" />
                </div>
              </div>



            </div>
          </div>

        </div>

        {/* ─── ACTION CONSOLE (STICKY FOOTER bounding strictly inside bottom container edge) ─── */}
        <div 
          style={{
            position: "absolute" as const,
            height: "133px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            background: "#FFFFFF",
            borderTop: "1px solid rgba(197, 198, 205, 0.1)",
            boxShadow: "0px -10px 30px rgba(0, 0, 0, 0.03)",
            borderBottomLeftRadius: "48px",
            borderBottomRightRadius: "48px",
            zIndex: 30,
            boxSizing: "border-box",
          }}
          className="flex items-center justify-center px-4 w-full"
        >
          <button
            onClick={() => {
              let resolvedStateId = stateSearch ? [Number(stateSearch)] : [];
              let resolvedDistrictId = citySearch ? [Number(citySearch)] : [];
              let resolvedMandalId = mandalSearch ? [Number(mandalSearch)] : [];

              // Auto-resolve state_id if district is selected
              if (resolvedDistrictId.length > 0 && resolvedStateId.length === 0) {
                const dist = allDistricts.find((d: any[]) => Number(d[0]) === resolvedDistrictId[0]);
                if (dist && dist[1]) {
                  resolvedStateId = [Number(dist[1])];
                }
              }

              // Auto-resolve district_id & state_id if mandal is selected
              if (resolvedMandalId.length > 0) {
                const mand = allMandals.find((m: any[]) => Number(m[0]) === resolvedMandalId[0]);
                if (mand) {
                  if (resolvedDistrictId.length === 0 && mand[1]) {
                    resolvedDistrictId = [Number(mand[1])];
                  }
                  if (resolvedStateId.length === 0 && mand[2]) {
                    resolvedStateId = [Number(mand[2])];
                  }
                }
              }

              const newFilters: any = {};
              if (resolvedStateId.length > 0) newFilters.state_id = resolvedStateId;
              if (resolvedDistrictId.length > 0) newFilters.district_id = resolvedDistrictId;
              if (resolvedMandalId.length > 0) newFilters.mandal_id = resolvedMandalId;
              if (selectedLeft.length > 0) newFilters.tag_ids = selectedLeft.map(Number);
              
              // Only apply price bounds if user adjusted the price slider
              if (priceRange[0] > minPrice) newFilters.from_price = priceRange[0];
              if (priceRange[1] < maxPrice) newFilters.to_price = priceRange[1];

              // Only apply size bounds if user adjusted the size slider
              if (sizeRange[0] > minSize) newFilters.from_size = sizeRange[0];
              if (sizeRange[1] < maxSize) newFilters.to_size = sizeRange[1];

              setFilters(newFilters);
              onClose();
              if (pathname !== "/search") {
                router.push("/search");
              }
            }}
            style={{
              background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
              borderRadius: "9999px",
              border: "none",
              boxShadow: "0px 12px 24px -8px rgba(9, 20, 38, 0.4)",
              cursor: "pointer",
            }}
            className="w-full max-w-[400px] h-[50px] md:h-[57px] flex items-center justify-center"
          >
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
              className="text-base md:text-lg"
            >
              SHOW PREMIUM FARMLANDS
            </span>
          </button>
        </div>

      </div>

      {/* --- Action of Interest Nested Modal --- */}
      {isViewAllOpen && (
        <div
          style={{
            position: "fixed" as const,
            inset: 0,
            zIndex: 200,
            background: "rgba(9, 20, 38, 0.4)",
            backdropFilter: "blur(16.5px)",
            WebkitBackdropFilter: "blur(16.5px)",
            boxSizing: "border-box",
          }}
          className="select-none flex items-center justify-center p-4 md:p-6"
          onClick={() => setIsViewAllOpen(false)}
          data-lenis-prevent
        >
          <div
            style={{
              width: "522px",
              maxWidth: "650px",
              height: "528px",
              background: "#FFFFFF",
              boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.12)",
              borderRadius: "24px",
              position: "relative" as const,
              boxSizing: "border-box",
              overflow: "hidden",
            }}
            className="flex flex-col"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            {/* Header */}
            <div
              style={{
                height: "80px",
                borderBottom: "1px solid rgba(194, 199, 209, 0.2)",
                boxSizing: "border-box",
              }}
              className="flex justify-between items-center px-[24px] w-full shrink-0"
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "24px",
                  color: "#0B1C30",
                }}
              >
                Action of Interest
              </span>
              <button
                onClick={() => setIsViewAllOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#42474F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Search Area */}
            <div className="flex flex-col px-[24px] pt-[24px] pb-[8px] w-full shrink-0">
              <div
                style={{
                  background: "rgba(245, 245, 245, 0.67)",
                  borderRadius: "46px",
                  height: "48px",
                }}
                className="flex items-center px-[20px] w-full relative"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#727780" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-[20px]">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search actions..."
                  value={viewAllSearch}
                  onChange={(e) => setViewAllSearch(e.target.value)}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "15px",
                    color: "#0B1C30",
                  }}
                  className="w-full h-full pl-[36px] placeholder:text-[#727780]"
                />
              </div>
            </div>

            {/* Scrollable Content */}
            <div
              style={{
                overflowY: "scroll",
              }}
              className="flex flex-col px-[24px] py-[16px] gap-[16px] w-full flex-grow mb-[85px]"
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  letterSpacing: "0.7px",
                  textTransform: "uppercase",
                  color: "#42474F",
                }}
              >
                SELECT ACTIONS
              </span>
              <div className="flex flex-wrap gap-x-[15px] gap-y-[16px] w-full">
                {allActionsList.filter(a => a.toLowerCase().includes(viewAllSearch.toLowerCase())).map((item, i) => {
                  const isSelected = selectedLeft.includes(item as any);
                  return (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, filter: "blur(8px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      onClick={() => toggleLeft(item)}
                      style={{
                        height: "40px",
                        padding: "0 20px",
                        background: isSelected ? "#0F2F4C" : "#E7E8E9",
                        color: isSelected ? "#FFFFFF" : "#45474C",
                        borderRadius: "9999px",
                        border: "none",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        cursor: "pointer",
                        boxShadow: isSelected ? "0px 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
                      }}
                      className="flex items-center text-center shrink-0"
                    >
                      {item}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                left: "0px",
                right: "0px",
                height: "85px",
                background: "#FFFFFF",
              }}
              className="flex justify-center items-center w-full"
            >
              <button
                onClick={() => setIsViewAllOpen(false)}
                style={{
                  width: "265px",
                  height: "49px",
                  background: "#2880C4",
                  borderRadius: "69px",
                  border: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  letterSpacing: "0.14px",
                  color: "#FFFFFF",
                  cursor: "pointer",
                }}
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
