import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VisitConfirmedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VisitConfirmedModal({ isOpen, onClose }: VisitConfirmedModalProps) {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        .hide-modal-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-modal-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <AnimatePresence>
        {isOpen && (
          <div key="modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{
            background: "rgba(9, 20, 38, 0.2)",
            backdropFilter: "blur(16.5px)",
            WebkitBackdropFilter: "blur(16.5px)",
          }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="flex flex-col items-center bg-white hide-modal-scroll"
              data-lenis-prevent
              style={{
                width: "932px",
                maxWidth: "95vw",
                height: "auto",
                maxHeight: "95vh",
                overflowY: "auto",
                borderRadius: "48px",
                padding: "50px 22px",
                position: "relative"
              }}
            >
          {/* Header Icon */}
          <div className="flex flex-col items-center mb-8" style={{ marginTop: "20px" }}>
            <div className="relative flex justify-center items-center" style={{ width: "96px", height: "96px" }}>
              <div style={{
                position: "absolute",
                width: "96px",
                height: "96px",
                background: "rgba(255, 255, 255, 0.002)",
                boxShadow: "0px 10px 15px -3px rgba(39, 128, 196, 0.2), 0px 4px 6px -4px rgba(39, 128, 196, 0.2)",
                borderRadius: "9999px"
              }} />
              <div className="flex items-center justify-center" style={{
                width: "96px",
                height: "96px",
                background: "radial-gradient(59.38% 41.98% at 50% 50%, #2780C4 0%, #164573 100%)",
                border: "5px solid #AED6EF",
                borderRadius: "9999px",
                zIndex: 1
              }}>
                <svg width="36" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>

            {/* Headings */}
            <h1 className="mt-6 text-center" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "55px",
              lineHeight: "55px",
              letterSpacing: "-1.38px",
              color: "#131600"
            }}>Visit Confirmed</h1>
            
            <p className="mt-4 text-center max-w-[452px]" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#74777F"
            }}>
              The field visit has been confirmed and assigned for processing. We look forward to hosting you at the property.
            </p>
          </div>

          {/* Ticket Card */}
          <div className="relative flex flex-col w-[544px] max-w-full" style={{ marginTop: "20px" }}>
            
            {/* Top Ticket Section */}
            <div style={{
              background: "rgba(232, 232, 232, 0.62)",
              borderRadius: "16px",
              padding: "32px",
              position: "relative"
            }}>
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2 w-[138px]">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: "16px", letterSpacing: "1.6px", color: "#0061A5", textTransform: "uppercase" }}>PROPERTY DEST.</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "16px", color: "#002045" }}>GLC SOS 01</span>
                </div>
                <div className="flex flex-col gap-2 w-[138px]">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: "16px", letterSpacing: "1.6px", color: "#74777F", textTransform: "uppercase" }}>DATE</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", color: "#002045" }}>Tue, Oct 17</span>
                </div>
                <div className="flex flex-col gap-2 w-[138px]">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: "16px", letterSpacing: "1.6px", color: "#74777F", textTransform: "uppercase" }}>TIME</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", color: "#002045" }}>10:30 AM</span>
                </div>
              </div>

              {/* Side cutouts and Dashed line */}
              <div className="absolute left-[-12px] w-[24px] h-[24px] bg-white rounded-full" style={{ top: "105px" }} />
              <div className="absolute right-[-12px] w-[24px] h-[24px] bg-white rounded-full" style={{ top: "105px" }} />
              
              <div className="w-full mt-[40px] mb-[32px]" style={{ borderTop: "2px dashed #C4C6CF" }} />

              {/* Contact Support */}
              <div 
                onClick={() => window.location.href = '/home/supportcenter'}
                className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0061A5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: "16px", color: "#002045" }}>Contact Support</span>
                <div className="ml-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#74777F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
              </div>
            </div>

            {/* Geo Navigation Card */}
            <div 
              onClick={() => window.open("https://maps.google.com/?q=17.3850,78.4867", "_blank")}
              className="flex items-center justify-between w-[544px] mt-[40px] hover:opacity-90 transition-opacity" style={{
              background: "#FAF9FD",
              border: "1px solid rgba(196, 198, 207, 0.3)",
              borderRadius: "16px",
              padding: "24px",
              cursor: "pointer"
            }}>
              <div className="flex items-center gap-[20px]">
                <div className="flex items-center justify-center w-[48px] h-[48px]" style={{ background: "rgba(159, 202, 255, 0.3)", borderRadius: "12px" }}>
                  <svg width="16" height="20" viewBox="0 0 24 24" fill="#0061A5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3" fill="#FAF9FD"></circle>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "16px", color: "#002045" }}>Get Geo-Navigation</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 400, fontSize: "16px", color: "#74777F" }}>Coordinates activate 24h prior</span>
                </div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#74777F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
            
            {/* Bottom Actions */}
            <div className="flex flex-col items-center justify-center gap-[16px] w-full mt-[40px] mb-[20px]">
              <button 
                onClick={onClose}
                className="hover:opacity-90 transition-opacity"
                style={{
                  width: "100%",
                  height: "63px",
                  background: "linear-gradient(135deg, #2780C4 0%, #164573 100%)",
                  borderRadius: "9999px",
                  border: "none",
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16.5px",
                  cursor: "pointer",
                  boxShadow: "0px 10px 20px rgba(22, 69, 115, 0.3)"
                }}
              >
                Reschedule Visit
              </button>
              <button 
                onClick={() => window.location.href = '/home'}
                className="hover:bg-[#F8F9FA] transition-colors"
                style={{
                  width: "100%",
                  height: "63px",
                  background: "transparent",
                  border: "2px solid #2780C4",
                  borderRadius: "9999px",
                  color: "#2780C4",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16.5px",
                  cursor: "pointer"
                }}
              >
                Return to Home
              </button>
            </div>
            
          </div>
        </motion.div>
      </div>
        )}
      </AnimatePresence>
    </>
  );
}
