"use client";

import React, { useState, useRef, useEffect } from "react";

interface TagGroupProps {
  tags: string[];
  theme?: "light" | "dark"; // light = white bg, dark = grey bg
}

export default function TagGroup({ tags, theme = "dark" }: TagGroupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!tags || tags.length === 0) return null;

  const firstTag = tags[0];
  const remainingTags = tags.slice(1);

  const bgClass = theme === "light" ? "bg-white" : "bg-[#E7E8E9]";
  const textClass = theme === "light" ? "text-[#0F2F4C]" : "text-[#45474C]";

  return (
    <div className="flex items-center gap-2 relative">
      <div className={`${bgClass} rounded-full px-4 py-1.5 w-fit shadow-sm`}>
        <span className={`font-jakarta font-bold text-[10px] leading-[15px] uppercase ${textClass}`}>
          {firstTag}
        </span>
      </div>

      {remainingTags.length > 0 && (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className={`${bgClass} rounded-full px-3 py-1.5 w-fit shadow-sm cursor-pointer hover:scale-105 transition-transform border-none flex items-center justify-center`}
          >
            <span className={`font-jakarta font-bold text-[12px] leading-[15px] ${textClass}`}>
              +{remainingTags.length}
            </span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-[12px] p-2 shadow-lg z-50 flex flex-col gap-2 min-w-[120px] border border-gray-100">
              {remainingTags.map((tag, idx) => (
                <div key={idx} className="bg-[#F1F5F9] rounded-full px-4 py-2 whitespace-nowrap text-center shadow-sm">
                  <span className="font-jakarta font-bold text-[12px] leading-[15px] text-[#0F2F4C]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
