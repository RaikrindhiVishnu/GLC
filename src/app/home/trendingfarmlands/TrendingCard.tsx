"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { s3Service } from "../../../services/s3";
import TagGroup from "../../../components/TagGroup";

interface TrendingCardProps {
  title: string;
  description: string;
  price: string;
  location: string;
  tagText?: string;
  tags?: string[];
  imageUrl: string;
  id?: string;
  linkDestination?: string;
  reverseLayout?: boolean;
  hideSaveIcon?: boolean;
  cardHeight?: string;
  imageHeight?: string;
}

export default function TrendingCard({
  title,
  description,
  price,
  location,
  tagText,
  tags,
  imageUrl,
  id = "1",
  linkDestination,
  reverseLayout = false,
  hideSaveIcon = false,
  cardHeight,
  imageHeight,
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
        console.warn("Could not generate presigned URL, falling back to placeholder:", imageUrl);
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
  const tagsToDisplay = tags && tags.length > 0 ? tags : (tagText ? [tagText] : []);

  return (
    <div 
      className={`w-full bg-white rounded-[30px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex ${reverseLayout ? 'flex-col-reverse' : 'flex-col'} mb-6`}
      style={cardHeight ? { height: cardHeight } : {}}
    >

      {/* Top Image Section */}
      <div 
        className={`relative w-full flex flex-col items-center justify-center bg-[#F4F4F5]`}
        style={{ height: imageHeight ? imageHeight : (reverseLayout ? '373px' : '320px'), flexShrink: 0 }}
      >
        {!reverseLayout && tagsToDisplay.length > 0 && (
          <div className="absolute top-6 left-6 z-20">
            <TagGroup tags={tagsToDisplay} theme="light" />
          </div>
        )}
        {displayUrl ? (
          <img
            src={displayUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => { setResolvedImageUrl(null); }}
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

        {/* Action Button */}
        {!hideSaveIcon && (
          <button
            onClick={handleLike}
            className={`absolute right-6 ${reverseLayout ? 'bottom-6' : 'top-6'} w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform z-10 border-none cursor-pointer`}
          >
            <svg width="20" height="18" viewBox="0 0 22 20" fill={isLiked ? "#2780C4" : "none"} stroke="#2780C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-200">
              <path d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.61469 9.81897 2.0252 9.03568 1.61841C8.25238 1.21162 7.38263 0.999502 6.5 1Z"></path>
            </svg>
          </button>
        )}
      </div>

      {/* Bottom Content Section */}
      <div className="p-8 flex flex-col items-center text-center gap-4">

        {/* Tag Pill - only show here if reverseLayout is true */}
        {reverseLayout && tagsToDisplay.length > 0 && (
          <TagGroup tags={tagsToDisplay} theme="dark" />
        )}

        {/* Title */}
        <h3 className="font-jakarta font-bold text-[24px] leading-[32px] text-[#131600]">
          {title}
        </h3>

        {/* Description */}
        <p className="font-jakarta font-normal text-[16px] leading-[24px] text-[#45474C] line-clamp-3">
          {description}
        </p>

        {/* Footer row */}
        <div className="flex flex-col items-center justify-center w-full mt-4 gap-4">
          <div className="flex flex-col items-center gap-[3.5px]">
            <span className="font-jakarta font-bold text-[18px] leading-[28px] text-[#111827]">
              {price}
            </span>
            <div className="flex items-center justify-center gap-1">
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
