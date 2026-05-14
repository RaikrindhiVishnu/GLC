"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

  const row1 = [...testimonials];
  const row2 = [...testimonials].reverse();

  return (
    <section className="relative w-full bg-[#F8F9FA] py-16 md:py-24 lg:py-32 overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 mb-12 md:mb-16 relative z-10">

        <h2 className="text-[34px] md:text-[48px] lg:text-[36px] leading-[1.08] tracking-[-0.04em] font-bold text-[#131600] font-jakarta text-center flex flex-wrap justify-center gap-x-3">

          {"Trusted by Investors Worldwide"
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}

        </h2>

      </div>

      {/* Testimonials */}
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(15px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.2,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="relative flex flex-col gap-5 md:gap-8 w-full"
      >

        {/* Row 1 */}
        <div className="flex overflow-hidden group">

          <div className="flex gap-4 md:gap-8 animate-scroll-left group-hover:[animation-play-state:paused]">

            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}

          </div>

        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden group">

          <div className="flex gap-4 md:gap-8 animate-scroll-right group-hover:[animation-play-state:paused]">

            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}

          </div>

        </div>

        {/* Edge Fade */}
        <div className="absolute inset-0 pointer-events-none z-20">

          <div className="absolute left-0 top-0 h-full w-[60px] md:w-[160px] lg:w-[192px] bg-gradient-to-r from-[#F8F9FA] to-transparent" />

          <div className="absolute right-0 top-0 h-full w-[60px] md:w-[160px] lg:w-[192px] bg-gradient-to-l from-[#F8F9FA] to-transparent" />

        </div>

      </motion.div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 8px));
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(calc(-50% - 8px));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 38s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 38s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-left {
            animation-duration: 26s;
          }

          .animate-scroll-right {
            animation-duration: 26s;
          }
        }
      `}</style>

    </section>
  );
}

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="flex flex-col shrink-0 w-[290px] md:w-[360px] lg:w-[388px] h-[210px] md:h-[225px] lg:h-[235px] bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-7 lg:p-8 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-gray-50">

      {/* Stars */}
      <div className="flex gap-1 mb-4">

        {[1, 2, 3, 4, 5].map((s) => (
          <div
            key={s}
            className="w-[16px] h-[16px] md:w-[20px] md:h-[19px] bg-[#BDD327]"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        ))}

      </div>

      {/* Quote */}
      <p className="flex-1 text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] italic text-[#45474C] font-jakarta line-clamp-4">
        "{t.text}"
      </p>

      {/* User */}
      <div className="flex items-center gap-3 md:gap-4 mt-4 pt-3 border-t border-gray-50">

        <div className="relative h-9 w-9 md:h-10 md:w-10 overflow-hidden rounded-full border border-gray-100">

          <Image
            src={t.image}
            alt={t.name}
            fill
            className="object-cover"
          />

        </div>

        <div>

          <h4 className="text-[14px] md:text-[16px] font-bold text-[#131600] font-jakarta leading-none mb-1">
            {t.name}
          </h4>

          <p className="text-[11px] md:text-[12px] text-[#45474C] font-jakarta">
            {t.role}
          </p>

        </div>

      </div>

    </div>
  );
}