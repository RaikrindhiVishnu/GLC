import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface RequestSubmittedModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: string[];
}

const SERVICE_MAP: Record<string, { name: string; image: string; iconPath: string }> = {
  "farmhouse-construction": {
    name: "Farmhouse Construction",
    image: "/assets/home/TrendingFarmlands/glcsos01.svg",
    iconPath: "M8 0L0 6V18H16V6L8 0ZM8 2.5L13.5 6.6V16H2.5V6.6L8 2.5Z",
  },
  "borewell-drilling": {
    name: "Borewell Drilling",
    image: "/assets/home/TrendingFarmlands/glcsos02.svg",
    iconPath: "M8 0C8 0 15 7.16344 15 11.5C15 15.6421 11.866 19 8 19C4.13401 19 1 15.6421 1 11.5C1 7.16344 8 0 8 0Z",
  },
  "organic-farm-setup": {
    name: "Organic Farm Setup",
    image: "/assets/home/TrendingFarmlands/glcsos03.svg",
    iconPath: "M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25Z",
  },
  "fencing-security": {
    name: "Fencing & Security",
    image: "/assets/home/YourListings/glcsos3.svg",
    iconPath: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  }
};

export default function RequestSubmittedModal({ isOpen, onClose, selectedServices = [] }: RequestSubmittedModalProps) {
  const router = useRouter();
  const [hoverTrack, setHoverTrack] = useState(false);
  const [hoverReturn, setHoverReturn] = useState(false);

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

  const isMulti = selectedServices.length > 1;
  const singleServiceId = !isMulti && selectedServices.length === 1 ? selectedServices[0] : null;
  const singleService = singleServiceId ? SERVICE_MAP[singleServiceId] : null;

  const handleTrackProgress = () => {
    if (selectedServices.length === 1) {
      router.push(`/maintenance/REQ-GLC-7729/${selectedServices[0]}`);
    } else if (selectedServices.length > 1) {
      router.push(`/maintenance/REQ-GLC-7729/select-service?services=${selectedServices.join(",")}`);
    }
    onClose();
  };

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
          <div key="request-submitted-overlay" className="fixed inset-0 z-[99999] flex items-center justify-center p-4" style={{
            background: "rgba(9, 20, 38, 0.2)",
            backdropFilter: "blur(16.5px)",
            WebkitBackdropFilter: "blur(16.5px)",
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="flex flex-col bg-[#FFFFFF] hide-modal-scroll items-center relative"
              data-lenis-prevent
              style={{
                width: "932px",
                maxWidth: "100%",
                height: "auto",
                maxHeight: "calc(100vh - 80px)",
                borderRadius: "48px",
                padding: "50px 22px",
                gap: "29px",
                overflowY: "auto",
                boxShadow: "0px 40px 80px -20px rgba(9, 20, 38, 0.15)",
              }}
            >
              
              {/* Header Icon */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
                <div style={{ position: "relative", width: "96px", height: "96px", background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)", border: "5px solid #AED6EF", borderRadius: "9999px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 10px 15px -3px rgba(39, 128, 196, 0.2), 0px 4px 6px -4px rgba(39, 128, 196, 0.2)" }}>
                  <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                    <path d="M4 14L14 24L32 4" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "502px" }}>
                <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "55px", lineHeight: "55px", letterSpacing: "-1.38px", color: "#131600", textAlign: "center", paddingBottom: "14px" }}>
                  Request Submitted
                </h1>
                <p style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#414753", textAlign: "center", maxWidth: "494px" }}>
                  Your service request has been registered. A Field Officer will be assigned shortly to begin the validation process for your property.
                </p>
              </div>

              {isMulti ? (
                /* Multi Service UI */
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "56px", width: "100%", maxWidth: "740px", flexWrap: "wrap", marginTop: "20px" }}>
                  {/* Card 1: Selected Services */}
                  <div style={{ width: "342px", display: "flex", flexDirection: "column", padding: "24px", background: "#FFFFFF", borderRadius: "48px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.04)" }}>
                    <h2 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.7px", textTransform: "uppercase", color: "#424750", marginBottom: "20px" }}>
                      Selected Services
                    </h2>
                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {selectedServices.map((serviceId, index) => {
                        const srv = SERVICE_MAP[serviceId];
                        if (!srv) return null;
                        return (
                          <React.Fragment key={serviceId}>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", padding: "12px 0" }}>
                              <div style={{ width: "40px", height: "40px", background: "#2780C4", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                                <svg width="18" height="18" viewBox="0 0 16 18" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                                  <path d={srv.iconPath} fill="#FFFFFF"/>
                                </svg>
                              </div>
                              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: "#003667" }}>{srv.name}</span>
                            </div>
                            {index < selectedServices.length - 1 && (
                              <div style={{ width: "100%", height: "1px", background: "#C2C6D2", opacity: 0.3 }} />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card 2: Summary */}
                  <div style={{ width: "342px", display: "flex", flexDirection: "column", padding: "32px", background: "#FFFFFF", borderRadius: "48px", boxShadow: "0px 4px 40px rgba(26, 28, 28, 0.04)" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "16px", borderBottom: "1px solid #F1F3FA", marginBottom: "16px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.58)" }}>
                        SERVICE TYPE
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "14px", lineHeight: "20px", color: "#0F2F4C", textAlign: "right", maxWidth: "120px" }}>
                        Multiple Services
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid #F1F3FA", marginBottom: "16px" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.58)" }}>
                        TARGET PROPERTY
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "14px", lineHeight: "20px", letterSpacing: "-0.35px", color: "#0F2F4C" }}>
                        GLC SOS 01
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.58)", width: "75px" }}>
                        CURRENT STATUS
                      </span>
                      <div style={{ background: "rgba(39, 128, 196, 0.2)", borderRadius: "9999px", padding: "6px 16px" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", lineHeight: "16px", letterSpacing: "0.55px", textTransform: "uppercase", color: "#0F2F4C" }}>
                          PENDING FO VALIDATION
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Single Service UI */
                <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "740px", marginTop: "20px", padding: "32px", background: "#FFFFFF", borderRadius: "48px", boxShadow: "0px 4px 40px rgba(26, 28, 28, 0.04)" }}>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "32px" }}>
                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.58)", marginBottom: "8px" }}>
                        SERVICE TYPE
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "16px", lineHeight: "20px", color: "#0F2F4C" }}>
                        {singleService?.name || "Service"}
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.58)", marginBottom: "8px" }}>
                        TARGET PROPERTY
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "16px", lineHeight: "20px", letterSpacing: "-0.35px", color: "#0F2F4C" }}>
                        GLC SOS 01
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(15, 47, 76, 0.58)", marginBottom: "8px" }}>
                        CURRENT STATUS
                      </span>
                      <div style={{ background: "rgba(39, 128, 196, 0.2)", borderRadius: "9999px", padding: "6px 16px", display: "inline-block" }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "11px", lineHeight: "16px", letterSpacing: "0.55px", textTransform: "uppercase", color: "#0F2F4C" }}>
                          PENDING FO VALIDATION
                        </span>
                      </div>
                    </div>

                  </div>

                  <div style={{ width: "100%", height: "240px", borderRadius: "24px", overflow: "hidden", position: "relative", background: "#F3F4F5" }}>
                     <img
                       src={singleService?.image || "/assets/home/TrendingFarmlands/glcsos01.svg"}
                       alt={singleService?.name || "Service"}
                       style={{ width: "100%", height: "100%", objectFit: "cover" }}
                     />
                     <div style={{ position: "absolute", bottom: "16px", left: "16px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", color: "#FFFFFF" }}>
                       SITE: GLC SOS 01 • SECTOR A
                     </div>
                  </div>
                </div>
              )}

              {/* Action Deck */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "22px", marginTop: "24px", flexWrap: "wrap", width: "100%" }}>
                
                {/* Track Progress Button */}
                <button
                  onClick={handleTrackProgress}
                  onMouseEnter={() => setHoverTrack(true)}
                  onMouseLeave={() => setHoverTrack(false)}
                  style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "18px 29px", width: "100%", maxWidth: "400px", background: hoverTrack ? "radial-gradient(49.97% 160.36% at 50% 50%, #308ED6 0%, #1A548B 100%)" : "radial-gradient(49.97% 160.36% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "9209px", border: "none", cursor: "pointer", boxShadow: "0px 9px 13px -2.7px rgba(0, 0, 0, 0.1), 0px 3.6px 5.5px -3.6px rgba(0, 0, 0, 0.1)", transition: "all 0.2s ease" }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16.5px", lineHeight: "26px", color: "#FFFFFF" }}>
                    {isMulti ? "Track Progress & Invoices" : "Track Progress & Invoices"}
                  </span>
                </button>

                {/* Return to Home / Services Hub Button */}
                <button
                  onClick={() => {
                    onClose();
                  }}
                  onMouseEnter={() => setHoverReturn(true)}
                  onMouseLeave={() => setHoverReturn(false)}
                  style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "18px 29px", width: "100%", maxWidth: "403px", background: hoverReturn ? "#F5F8FA" : "#FFFFFF", border: "1.84px solid #2780C4", borderRadius: "9209px", cursor: "pointer", transition: "all 0.2s ease" }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16.5px", lineHeight: "26px", color: "#2780C4" }}>
                    {isMulti ? "Return to Home" : "Return to Services Hub"}
                  </span>
                </button>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
