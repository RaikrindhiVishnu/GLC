"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TrendingCardProps {
  title: string;
  description: string;
  price: string;
  location: string;
  tagText: string;
  imageUrl: string;
  id?: string;
  linkDestination?: string;
  reverseLayout?: boolean;
}

export default function TrendingCard({
  title,
  description,
  price,
  location,
  tagText,
  imageUrl,
  id = "1",
  linkDestination,
  reverseLayout = false,
}: TrendingCardProps) {
  const router = useRouter();
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div className={`w-full bg-white rounded-[30px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex ${reverseLayout ? 'flex-col-reverse' : 'flex-col'} mb-6`}>

      {/* Top Image Section */}
      <div className={`relative w-full ${reverseLayout ? 'h-[373px]' : 'h-[320px]'}`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Action Button */}
        <button
          onClick={handleLike}
          className={`absolute right-6 ${reverseLayout ? 'bottom-6' : 'top-6'} w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform z-10`}
        >
          <svg width="20" height="18" viewBox="0 0 20 18" fill={isLiked ? "#2780C4" : "none"} stroke="#2780C4" strokeWidth={isLiked ? "0" : "2"}>
            <path d="M10 17.5L8.55 16.18C3.4 11.5 0 8.42 0 4.5C0 1.98 2.02 0 4.5 0C5.88 0 7.2 0.63 8.13 1.63L10 3.75L11.87 1.63C12.8 0.63 14.12 0 15.5 0C17.98 0 20 1.98 20 4.5C20 8.42 16.6 11.5 11.45 16.19L10 17.5Z" />
          </svg>
        </button>
      </div>

      {/* Bottom Content Section */}
      <div className="p-8 flex flex-col gap-4">

        {/* Tag */}
        <div className="bg-[#E7E8E9] rounded-full px-4 py-1.5 w-fit">
          <span className="font-jakarta font-bold text-[10px] leading-[15px] uppercase text-[#45474C]">
            {tagText}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-jakarta font-bold text-[24px] leading-[32px] text-[#131600]">
          {title}
        </h3>

        {/* Description */}
        <p className="font-jakarta font-normal text-[16px] leading-[24px] text-[#45474C] line-clamp-3">
          {description}
        </p>

        {/* Footer row */}
        <div className="flex flex-row justify-between items-end mt-4">
          <div className="flex flex-col gap-[3.5px]">
            <span className="font-jakarta font-bold text-[18px] leading-[28px] text-[#111827]">
              {price}
            </span>
            <div className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 0C3.79086 0 2 1.79086 2 4C2 7 6 12 6 12C6 12 10 7 10 4C10 1.79086 8.20914 0 6 0ZM6 5.5C5.17157 5.5 4.5 4.82843 4.5 4C4.5 3.17157 5.17157 2.5 6 2.5C6.82843 2.5 7.5 3.17157 7.5 4C7.5 4.82843 6.82843 5.5 6 5.5Z" fill="#6B7280" />
              </svg>
              <span className="font-jakarta font-normal text-[12px] leading-[16px] text-[#6B7280]">
                {location}
              </span>
            </div>
          </div>

          <button
            onClick={() => router.push(linkDestination ? linkDestination : `/search/farmlanddetails?id=match-${id}`)}
            className="font-jakarta font-bold text-[14px] leading-[20px] text-[#00629E] hover:underline bg-transparent border-none cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
