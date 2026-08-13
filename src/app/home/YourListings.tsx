"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { s3Service } from "../../services/s3";

export default function YourListings() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fdata = [
    {
        "farmland_id": 77,
        "farm_code": "FL26070034",
        "farmland_img": null,
        "valuation": "38900.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 1, "mandal_id": 1 }
    },
    {
        "farmland_id": 78,
        "farm_code": "FL26070035",
        "farmland_img": null,
        "valuation": "2901800.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 1, "mandal_id": 1 }
    },
    {
        "farmland_id": 86,
        "farm_code": "FL26070043",
        "farmland_img": "farmlands/1/land_images/c6b3da2a98cf6138ce540c2b2e2bc726b6636bc6_(1).jpg",
        "valuation": "1000000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 5, "mandal_id": 96 }
    },
    {
        "farmland_id": 87,
        "farm_code": "FL26070044",
        "farmland_img": "farmlands/1/land_images/c6b3da2a98cf6138ce540c2b2e2bc726b6636bc6_(1).jpg",
        "valuation": "2000000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 3, "mandal_id": 26 }
    },
    {
        "farmland_id": 88,
        "farm_code": "FL26070045",
        "farmland_img": null,
        "valuation": "199000.00",
        "location_details": { "country_id": 0, "state_id": 0, "district_id": 0, "mandal_id": 0 }
    },
    {
        "farmland_id": 89,
        "farm_code": "FL26070046",
        "farmland_img": null,
        "valuation": "89402.00",
        "location_details": { "country_id": 0, "state_id": 0, "district_id": 0, "mandal_id": 0 }
    },
    {
        "farmland_id": 90,
        "farm_code": "FL26070047",
        "farmland_img": null,
        "valuation": "3848802.00",
        "location_details": { "country_id": 0, "state_id": 0, "district_id": 0, "mandal_id": 0 }
    },
    {
        "farmland_id": 91,
        "farm_code": "FL26070048",
        "farmland_img": null,
        "valuation": "657380.00",
        "location_details": { "country_id": 0, "state_id": 0, "district_id": 0, "mandal_id": 0 }
    },
    {
        "farmland_id": 95,
        "farm_code": "FL26070052",
        "farmland_img": null,
        "valuation": "50000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 3, "mandal_id": 120 }
    },
    {
        "farmland_id": 97,
        "farm_code": "FL26070054",
        "farmland_img": null,
        "valuation": "400000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 3, "mandal_id": 38 }
    },
    {
        "farmland_id": 98,
        "farm_code": "FL26070055",
        "farmland_img": null,
        "valuation": "2000000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 2, "mandal_id": 22 }
    },
    {
        "farmland_id": 99,
        "farm_code": "FL26070056",
        "farmland_img": null,
        "valuation": "100000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 12, "mandal_id": 165 }
    },
    {
        "farmland_id": 100,
        "farm_code": "FL26070057",
        "farmland_img": null,
        "valuation": "100000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 5, "mandal_id": 96 }
    },
    {
        "farmland_id": 101,
        "farm_code": "FL26070058",
        "farmland_img": null,
        "valuation": "100000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 5, "mandal_id": 96 }
    },
    {
        "farmland_id": 102,
        "farm_code": "FL26070059",
        "farmland_img": null,
        "valuation": "2000000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 6, "mandal_id": 161 }
    },
    {
        "farmland_id": 513,
        "farm_code": "FL26080386",
        "farmland_img": "farmlands/513/land_images/cover_images/1786598161607.jpg",
        "valuation": "2000000.00",
        "location_details": { "country_id": 1, "state_id": 1, "district_id": 3, "mandal_id": 26 }
    }
  ];

  const isLoading = !mounted;
  const listings = fdata;

  // Drag scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragged, setDragged] = useState(false);

  // Resolved image URLs mapping farmland_id -> public URL
  const [imageUrls, setImageUrls] = useState<Record<number, string>>({});

  useEffect(() => {
    const fetchUrls = async () => {
      const newUrls: Record<number, string> = {};
      for (const item of listings) {
        const url = item.farmland_img;
        if (!url || url === "null" || url === "" || url.toLowerCase().endsWith('.pdf')) {
          continue;
        }
        if (url.startsWith("http") || url.startsWith("data:") || url.startsWith("/")) {
          newUrls[item.farmland_id] = url;
          continue;
        }
        try {
          // Resolve S3 key
          const res = await s3Service.generateUrl({ key: url, filename: url, folderPath: '' });
          if (res.url) {
            newUrls[item.farmland_id] = res.url;
          }
        } catch (error) {
          // Gracefully handle missing or inaccessible S3 images
          console.warn(`S3 image unavailable for listing ${item.farmland_id}, using fallback.`);
        }
      }
      setImageUrls(newUrls);
    };

    if (listings.length > 0) {
      fetchUrls();
    }
  }, [listings]);

  // Click-and-drag scrolling handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2.0; // Responsive drag velocity multiplier

    if (Math.abs(walk) > 5) {
      setDragged(true);
    }
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleCardClick = (e: React.MouseEvent, id: number) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    router.push(`/home/yourlisting/details?id=${id}`);
  };

  return (
    <section id="your-listings" className="w-full bg-transparent py-12 lg:py-[70px] overflow-hidden">

      {/* Section Header Wrapper (Constrained to Page Margin) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[60px] mb-6 lg:mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-jakarta font-extrabold text-[20px] md:text-[24px] leading-[1.2] text-[#0F2F4C] m-0 flex gap-x-[6px]">
            {"Your Listings".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <button onClick={() => router.push("/home/yourlisting")} className="bg-transparent border-none font-jakarta font-extrabold text-[14px] md:text-[18px] leading-[40px] text-[#0F2F4C] cursor-pointer [-webkit-tap-highlight-color:transparent] hover:opacity-70 transition-opacity">
            View All
          </button>
        </div>
      </div>

      {/* Cards Scrollable Container (Free Drag-to-Scroll + Asymmetric Offset Layout) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[60px]">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-4 md:gap-6 lg:gap-[32px] w-full overflow-x-auto pb-4 hide-scrollbar select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
        >
        <style dangerouslySetInnerHTML={{
          __html: `
          #your-listings .hide-scrollbar::-webkit-scrollbar { display: none; }
          #your-listings .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        {isLoading ? (
          <div className="flex justify-center items-center w-full h-[200px]">
            <span className="font-jakarta text-[#0F2F4C]">Loading listings...</span>
          </div>
        ) : listings.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[200px]">
            <span className="font-jakarta text-[#0F2F4C]">No listings found.</span>
          </div>
        ) : (
          listings.map((item, i) => (
            <motion.div
              key={item.farmland_id}
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={(e) => handleCardClick(e, item.farmland_id)}
              className="flex flex-col items-center p-5 lg:p-[28px] w-[260px] lg:w-[296px] shrink-0 bg-white shadow-[0px_8px_6px_rgba(0,0,0,0.05),inset_3px_4px_2px_-3px_rgba(255,255,255,0.55)] rounded-[24px] lg:rounded-[30px] cursor-pointer box-border group pointer-events-auto"
            >
              {/* Image */}
              <div className="relative w-full aspect-[1.25] rounded-[15px] overflow-hidden mb-4 shrink-0 pointer-events-none bg-[#F4F4F5] flex items-center justify-center">
                {(() => {
                  const resolvedUrl = imageUrls[item.farmland_id];
                  const url = item.farmland_img;
                  let finalUrl = null;

                  if (resolvedUrl) {
                    finalUrl = resolvedUrl;
                  } else if (url && url !== "null" && url !== "" && !url.toLowerCase().endsWith('.pdf')) {
                    if (url.startsWith("http") || url.startsWith("data:") || url.startsWith("/")) {
                      finalUrl = url;
                    }
                  }

                  if (finalUrl) {
                    return (
                      <Image
                        src={finalUrl}
                        alt={item.farm_code}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    );
                  }

                  return (
                    <div className="flex flex-col items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                      <span className="font-jakarta text-[#A1A1AA] text-[12px] font-medium">No Image</span>
                    </div>
                  );
                })()}
              </div>

              {/* Title */}
              <h3 className="w-full m-0 mb-1 font-jakarta font-bold text-[16px] lg:text-[18px] leading-[28px] text-[#0F2F4C] pointer-events-none">
                {item.farm_code}
              </h3>

              {/* Price */}
              <p className="w-full m-0 mb-4 font-jakarta font-normal text-[13px] lg:text-[14px] leading-[20px] text-[#0F2F4C] pointer-events-none">
                {item.valuation ? `₹${(item.valuation / 100000).toFixed(1)} Lakhs` : "Price on Request"}
              </p>

              {/* Button */}
              <button onClick={(e) => { e.stopPropagation(); router.push(`/home/yourlisting/details?id=${item.farmland_id}`); }} className="w-full h-[48px] lg:h-[52px] bg-[radial-gradient(50%_50%_at_50%_50%,#2780C4_0%,#164573_100%)] rounded-full border-none font-jakarta font-semibold text-[14px] lg:text-[16px] text-white uppercase cursor-pointer shrink-0 hover:opacity-90 transition-opacity">
                View Details
              </button>
            </motion.div>
          ))
        )}
        </div>
      </div>

    </section>
  );
}
