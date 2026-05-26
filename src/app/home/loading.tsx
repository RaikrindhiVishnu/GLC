"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="w-[150px] h-[64px] relative mb-8">
        <img
          src="/assets/common/Logo green land 1.svg"
          alt="Loading..."
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-[#BDD327] w-1/2 animate-[loading_1.5s_infinite_ease-in-out]" />
      </div>
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
