"use client";

import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Investment Analyst",
      text: "GLC has completely changed my view on agricultural investment. The transparency is unlike anything I've seen in the sector.",
      image: "/assets/home/person.svg",
    },
    {
      name: "Sarah Jenkins",
      role: "Land Owner",
      text: "The process of fractional ownership is seamless. I'm already looking into my third pool.",
      image: "/assets/home/person2.svg",
    },
    {
      name: "David Kumar",
      role: "Serial Investor",
      text: "Solid yields and great professional management. The maintenance team really knows what they're doing.",
      image: "/assets/home/person.svg",
    },
    {
      name: "Vikram Mehta",
      role: "Tech Entrepreneur",
      text: "The process of fractional ownership is seamless. I'm already looking into my third pool.",
      image: "/assets/home/person2.svg",
    },
    {
      name: "Ananya Sharma",
      role: "Wealth Manager",
      text: "GLC has completely changed my view on agricultural investment. The transparency is unlike anything I've seen in the sector.",
      image: "/assets/home/person.svg",
    },
    {
      name: "Siddharth Rao",
      role: "Retiree",
      text: "Solid yields and great professional management. The maintenance team really knows what they're doing.",
      image: "/assets/home/person2.svg",
    },
  ];

  // Double the lists for seamless loop
  const row1 = [...testimonials];
  const row2 = [...testimonials].reverse();

  return (
    <section className="relative w-full bg-[#F8F9FA] py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-8 mb-16 relative z-10">
        <h2 className="text-[36px] font-bold leading-[40px] tracking-[-0.9px] text-[#131600] font-jakarta text-center">
          Trusted by Investors Worldwide
        </h2>
      </div>

      {/* Testimonials Container */}
      <div className="relative flex flex-col gap-8 w-full">
        
        {/* Row 1: Moving Left */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-8 animate-scroll-left group-hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-8 animate-scroll-right group-hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Faded Edges Overlay */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute left-0 top-0 h-full w-[192px] bg-gradient-to-r from-[#F8F9FA] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-[192px] bg-gradient-to-l from-[#F8F9FA] to-transparent" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 16px)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-50% - 16px)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="flex flex-col shrink-0 w-[388.5px] h-[235px] bg-white rounded-[32px] p-8 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-gray-50">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="w-[20px] h-[19px] bg-[#BDD327] clip-star" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
        ))}
      </div>

      {/* Quote */}
      <p className="flex-1 text-[16px] leading-[24px] italic text-[#45474C] font-jakarta line-clamp-3">
        "{t.text}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-4 pt-2 border-t border-gray-50">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-100">
           <Image src={t.image} alt={t.name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="text-[16px] font-bold text-[#131600] font-jakarta leading-none mb-1">{t.name}</h4>
          <p className="text-[12px] text-[#45474C] font-jakarta">{t.role}</p>
        </div>
      </div>
    </div>
  );
}
