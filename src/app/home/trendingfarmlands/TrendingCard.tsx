"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { s3Service } from "../../../services/s3";

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
  const [isLiked, setIsLiked] = useState(false);
  const [resolvedImageUrl, setResolvedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      if (!imageUrl || imageUrl === "null" || imageUrl === "") {
        if (isMounted) setResolvedImageUrl(null);
        return;
      }
      if (imageUrl.startsWith("http") || imageUrl.startsWith("data:") || imageUrl.startsWith("/")) {
        if (isMounted) setResolvedImageUrl(imageUrl);
        return;
      }
      try {
        const res = await s3Service.generateUrl({ key: imageUrl, filename: imageUrl, folderPath: '' });
        if (isMounted && res.url) {
          setResolvedImageUrl(res.url);
        }
      } catch (e) {
        console.error("Failed to generate presigned URL for", imageUrl, e);
      }
    };
    fetchImage();
    return () => { isMounted = false; };
  }, [imageUrl]);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const displayUrl = resolvedImageUrl;

  return (
    <div className={`w-full bg-white rounded-[30px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex ${reverseLayout ? 'flex-col-reverse' : 'flex-col'} mb-6`}>

      {/* Top Image Section */}
      <div className={`relative w-full ${reverseLayout ? 'h-[373px]' : 'h-[320px]'} bg-[#F4F4F5] flex flex-col items-center justify-center`}>
        {displayUrl ? (
          <Image
            src={displayUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="font-jakarta text-[#A1A1AA] text-[12px] font-medium">No Image</span>
          </>
        )}

        {/* Tag on Image */}
        <div className={`absolute left-8 ${reverseLayout ? 'bottom-8' : 'top-8'} bg-[#E7E8E9] rounded-full px-4 py-1.5 w-fit z-10`}>
          <span className="font-jakarta font-bold text-[10px] leading-[15px] uppercase text-[#45474C]">
            {tagText}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleLike}
          className={`absolute right-6 ${reverseLayout ? 'bottom-6' : 'top-6'} w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform z-10`}
        >
          <svg width="20" height="18" viewBox="0 0 24 24" fill={isLiked ? "#2780C4" : "none"} stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-200">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      {/* Bottom Content Section */}
      <div className="p-8 flex flex-col gap-4">

        {/* Tag used to be here, moved to image overlay */}

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
