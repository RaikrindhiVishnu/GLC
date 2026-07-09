"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import VisitConfirmedModal from "./VisitConfirmedModal";

export default function BookSiteVisit() {
  const dates = [
    { day: "Mon", date: "16" },
    { day: "Tue", date: "17" },
    { day: "Wed", date: "18" },
    { day: "Thu", date: "19" },
    { day: "Fri", date: "20" },
  ];

  const times = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "01:00 PM", "02:00 PM", "05:00 PM"
  ];

  const [selectedDate, setSelectedDate] = useState("17");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col relative w-full overflow-hidden">
      <Navbar variant="app" active="none" />

      {/* Hero Background */}
      <div 
        className="w-full h-screen min-h-[700px] relative flex flex-col items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/assets/verification-of-farmland/hero.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center max-w-[896px] px-8 gap-[37px] -mt-[80px]">
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "100px",
            lineHeight: "72px",
            letterSpacing: "-1.8px",
            color: "#FFFFFF",
            margin: 0
          }}>
            Book Site Visit
          </h1>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "32px",
            color: "#FFFFFF",
            margin: 0,
            maxWidth: "780px"
          }}>
            Book a personalised site visit to inspect the property, explore nearby infrastructure, and verify every detail before investing.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center pt-[80px] relative z-10 px-4 pb-[120px]">
        <div className="flex gap-[53px] w-[1194px] max-w-full flex-col lg:flex-row items-center lg:items-start">
          
          {/* Left Column: Match Card & Info */}
          <div className="flex flex-col gap-[32px] w-[418.67px] shrink-0">
            {/* Match Card */}
            <div style={{
              background: "#FFFFFF",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "30px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}>
              {/* Image Container */}
              <div style={{
                width: "100%",
                height: "256px",
                borderRadius: "16px",
                backgroundImage: "url('/assets/homesection2/tanuku.jpg')",
                backgroundColor: "#2780C4",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  left: "16px",
                  top: "16px",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "9999px",
                  padding: "6px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <div style={{ width: "8px", height: "8px", background: "#BCD225", borderRadius: "50%" }}></div>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    lineHeight: "16px",
                    letterSpacing: "0.55px",
                    color: "#131600",
                    textTransform: "capitalize"
                  }}>Documents unlocked</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-[8px]">
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  lineHeight: "12px",
                  letterSpacing: "1.2px",
                  color: "#74777F",
                  textTransform: "uppercase"
                }}>PRIME ASSET</span>
                
                <h2 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  lineHeight: "38px",
                  color: "#002045",
                  margin: 0
                }}>GLC SOS 01</h2>

                <div className="flex items-center gap-[8px] mt-[8px]">
                  <svg width="14" height="17" viewBox="0 0 24 24" fill="none" stroke="#74777F" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#74777F"
                  }}>Silicon Valley, CA</span>
                </div>
              </div>
            </div>

            {/* Subtle Info Card */}
            <div style={{
              background: "#F4F3F7",
              border: "1px solid rgba(196, 198, 207, 0.3)",
              borderRadius: "16px",
              padding: "24px"
            }}>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                color: "#43474E",
                margin: 0
              }}>
                "Experience the future of agricultural investment first-hand. Our guided tours provide transparency into irrigation systems and crop management."
              </p>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div style={{
            background: "#FFFFFF",
            boxShadow: "0px 4px 20px rgba(26, 54, 93, 0.05)",
            borderRadius: "30px",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            flex: 1
          }}>
            
            <div className="flex flex-col gap-[7px]">
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "38px",
                color: "#002045",
                margin: 0
              }}>Schedule Site Visit</h2>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                color: "#43474E",
                margin: 0
              }}>Choose your preferred date and time for a personalized field walk.</p>
            </div>

            <div className="flex flex-col gap-[64px]">
              
              {/* Date Picker */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex justify-between items-center">
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    letterSpacing: "0.6px",
                    color: "#74777F",
                    textTransform: "uppercase"
                  }}>SELECT DATE</span>
                  <div className="flex items-center gap-[12px]">
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#002045"
                    }}>October 2023</span>
                    <button style={{
                      width: "40px", height: "40px", background: "#E9E7EB", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer"
                    }}>
                      <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </button>
                  </div>
                </div>

                <div className="flex gap-[16px] overflow-x-auto pb-[16px] hide-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {dates.map((d, i) => {
                    const isActive = selectedDate === d.date;
                    return (
                      <button 
                        key={i}
                        onClick={() => setSelectedDate(d.date)}
                        style={{
                          minWidth: "76px",
                          height: "96px",
                          background: isActive ? "transparent" : "#F4F3F7",
                          border: isActive ? "2px solid #2780C4" : "2px solid transparent",
                          borderRadius: "100px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <span style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "12px",
                          letterSpacing: "0.6px",
                          color: isActive ? "#2780C4" : "#43474E"
                        }}>{d.day}</span>
                        <span style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "24px",
                          color: isActive ? "#2780C4" : "#002045"
                        }}>{d.date}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Time Picker */}
              <div className="flex flex-col gap-[16px]">
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.6px",
                  color: "#74777F",
                  textTransform: "uppercase"
                }}>AVAILABLE TIMES</span>
                
                <div className="flex flex-wrap gap-[16px]">
                  {times.map((t, i) => {
                    const isActive = selectedTime === t;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedTime(t)}
                        style={{
                          width: "calc(33.333% - 11px)",
                          height: "52px",
                          background: "transparent",
                          border: isActive ? "2px solid #2780C4" : "1px solid #C4C6CF",
                          borderRadius: "9999px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <span style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: isActive ? 600 : 400,
                          fontSize: "16px",
                          color: isActive ? "#2780C4" : "#43474E"
                        }}>{t}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-[16px]">
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.6px",
                  color: "#74777F",
                  textTransform: "uppercase"
                }}>SPECIAL REQUESTS</span>
                <textarea 
                  placeholder="Any dietary restrictions, specific viewing interests, or additional guests?"
                  style={{
                    width: "100%",
                    height: "136px",
                    background: "#FFFFFF",
                    border: "1px solid #C4C6CF",
                    borderRadius: "16px",
                    padding: "16px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "16px",
                    color: "#43474E",
                    resize: "none",
                    outline: "none"
                  }}
                />
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                style={{
                  width: "100%",
                  height: "56px",
                  background: "#164573",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "10px",
                  transition: "opacity 0.2s ease"
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = "0.9"}
                onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
              >
                Confirm Visit
              </button>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* CTA and Footer */}
      <div className="mt-8">
        <CTA />
        <Footer />
      </div>

      <VisitConfirmedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
