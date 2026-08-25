import React from "react";

interface FarmlandCardSkeletonProps {
  variant?: "horizontal" | "vertical";
}

export default function FarmlandCardSkeleton({
  variant = "horizontal",
}: FarmlandCardSkeletonProps) {
  if (variant === "vertical") {
    return (
      <div
        className="flex flex-col w-[300px] sm:w-[362px] min-h-[367px] shrink-0 bg-white rounded-[29px] animate-pulse"
        style={{
          boxShadow: "0px 7.32697px 9.15871px -5.49523px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Top Image Placeholder */}
        <div className="relative w-full h-[234px] shrink-0 bg-gray-200 rounded-t-[29px]" />

        {/* Bottom Content Area */}
        <div className="flex flex-col pt-[17px] pl-[16px] pr-[16px] pb-[20px] min-h-[132.54px] gap-3">
          {/* Title Placeholder */}
          <div className="w-[60%] h-[24px] bg-gray-200 rounded" />

          {/* Location Placeholder */}
          <div className="w-[40%] h-[16px] bg-gray-200 rounded mt-[4px]" />

          {/* Tags Placeholder */}
          <div className="flex items-center gap-[4px] mt-[6px]">
            <div className="w-[80px] h-[26px] bg-gray-200 rounded-[8px]" />
            <div className="w-[40px] h-[26px] bg-gray-200 rounded-[8px]" />
          </div>
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className="flex flex-col sm:flex-row w-[280px] sm:w-[450px] lg:w-[511px] h-auto sm:min-h-[200px] lg:min-h-[261px] shrink-0 bg-white shadow-[0px_11px_38px_rgba(0,31,63,0.04)] rounded-[24px] lg:rounded-[45px] box-border animate-pulse">
      {/* Left Side: Image Placeholder */}
      <div className="relative w-full h-[180px] sm:w-[180px] lg:w-[205px] sm:h-full shrink-0 bg-gray-200 rounded-t-[24px] sm:rounded-t-none sm:rounded-l-[24px] lg:rounded-l-[45px]" />

      {/* Right Side: Content Area */}
      <div className="flex flex-1 flex-col justify-center p-6 sm:p-6 lg:px-[30px] lg:pt-[48px] lg:pb-[49px] box-border">
        <div className="flex flex-col gap-[12px]">
          {/* Tag Placeholder */}
          <div className="w-[90px] h-[22px] bg-gray-200 rounded-full" />

          {/* Title Placeholder */}
          <div className="w-[70%] h-[24px] lg:h-[28px] bg-gray-200 rounded" />

          {/* Description Placeholder */}
          <div className="w-full h-[16px] bg-gray-200 rounded" />
          <div className="w-[80%] h-[16px] bg-gray-200 rounded" />
        </div>

        {/* Footer Placeholder */}
        <div className="flex items-center pt-[20px] lg:pt-[28px] mt-[12px] lg:mt-[16px] border-t border-[#EDEEEF] gap-[8px]">
          <div className="w-[14px] h-[14px] bg-gray-200 rounded-full shrink-0" />
          <div className="w-[50%] h-[14px] bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
