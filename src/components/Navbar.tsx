"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export type NavbarVariant = "landing" | "app";
export type NavbarActive = "home" | "search" | "pricing" | "profile" | "documents";

type Props =
  | { variant?: "landing"; className?: string }
  | { variant: "app"; active: NavbarActive; className?: string };

const ACTIVE_PILL_STYLE: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
  borderRadius: "9999px",
  border: "none",
  boxShadow: "0px 20px 25px -5px rgba(78,95,126,0.2), 0px 8px 10px -6px rgba(78,95,126,0.2)",
  position: "relative",
  flexShrink: 0,
  boxSizing: "border-box",
};

const CAPSULE_STYLE: React.CSSProperties = {
  flexDirection: "row",
  alignItems: "center",
  padding: "10px",
  gap: "10px",
  background: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0px 8px 6px rgba(0, 0, 0, 0.05), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.55), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(50px)",
  WebkitBackdropFilter: "blur(50px)",
  borderRadius: "100px",
  transition: "all 0.3s ease",
  boxSizing: "border-box",
};

const ICON_BTN_STYLE: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  flexShrink: 0,
  transition: "transform 0.2s ease",
};

const UTILITY_BTN_STYLE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.1)",
  boxShadow:
    "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55), inset 0px -1.25px 1.25px rgba(255,255,255,0.25), inset 0px 1.25px 1.25px rgba(255,255,255,0.25)",
  backdropFilter: "blur(62.6px)",
  WebkitBackdropFilter: "blur(62.6px)",
  borderRadius: "125px",
  border: "none",
  cursor: "pointer",
  boxSizing: "border-box",
};

const ACTIVE_UTILITY_BTN_STYLE: React.CSSProperties = {
  ...UTILITY_BTN_STYLE,
  background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
  boxShadow: "0px 20px 25px -5px rgba(78,95,126,0.2), 0px 8px 10px -6px rgba(78,95,126,0.2)",
};

function ActiveLabel({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        color: "#FFFFFF",
        letterSpacing: "0.02em",
        transition: "color 0.3s ease",
      }}
      className="text-[13px] md:text-[14px] leading-[20px] md:leading-[24px] uppercase"
    >
      {label}
    </span>
  );
}

function AppNavbar({ active, className }: { active: NavbarActive; className?: string }) {
  const router = useRouter();

  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      boxSizing: "border-box",
    }),
    [],
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If at the very top of the page, guarantee isScrolled is false to prevent loading flicker/flashes
      if (window.scrollY === 0) {
        setIsScrolled(false);
        return;
      }

      // Check if we are inside the dark CTA or Footer section at the bottom
      const ctaEl = document.getElementById("cta-section");
      const footerEl = document.getElementById("footer-section");
      
      const inCta = ctaEl && ctaEl.getBoundingClientRect().top <= 80;
      const inFooter = footerEl && footerEl.getBoundingClientRect().top <= 80;

      if (inCta || inFooter) {
        setIsScrolled(false);
        return;
      }

      // Dynamically locate the hero/cover element on any page
      const heroEl = 
        document.getElementById("hero-section") || 
        document.getElementById("hero-screen") ||
        document.getElementById("search-hero-screen") ||
        document.querySelector('[id*="hero"]') || 
        document.querySelector('[id*="Hero"]') ||
        document.querySelector('[class*="hero"]') || 
        document.querySelector('[class*="Hero"]') ||
        document.querySelector("section") ||
        (() => {
          // Look for top cover/header divs (e.g., in profile page)
          const divs = Array.from(document.querySelectorAll("div"));
          return divs.find(d => {
            const rect = d.getBoundingClientRect();
            return rect.height > 300 && rect.height < window.innerHeight * 1.5 && (rect.top + window.scrollY) <= 100;
          });
        })();

      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        const heroBottom = rect.bottom + window.scrollY;
        const pastHero = window.scrollY >= heroBottom - 20; // past hero section bottom
        setIsScrolled(pastHero);
      } else {
        // On pages without any top cover/hero element, default to solid scrolled state
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentCapsuleBg = isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.1)";
  const currentActivePillBg = "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)";
  const currentUtilityBg = isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.1)";
  const currentActiveUtilityBg = "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)";

  const darkBlueFilter = "brightness(0) saturate(100%) invert(23%) sepia(50%) saturate(1478%) hue-rotate(183deg) brightness(96%) contrast(92%)";

  return (
    <div
      style={containerStyle}
      className={[
        "px-4 md:px-[60px] py-4 md:pt-[24px] md:pb-4 min-h-[72px] flex justify-between items-center w-full relative",
        className ?? "",
      ].join(" ")}
    >
      {/* Brand Logo */}
      <button
        type="button"
        className="shrink-0 cursor-pointer [-webkit-tap-highlight-color:transparent] hover:opacity-90 transition-opacity bg-transparent border-none p-0"
        onClick={() => {
          setIsMobileMenuOpen(false);
          router.push("/home");
        }}
        aria-label="Go to Home"
      >
        <Image
          src="/assets/common/Logo green land 1.svg"
          alt="Green Land Capital"
          width={150}
          height={64}
          className="w-[120px] md:w-[140px] h-auto"
          style={{ objectFit: "contain" }}
          priority
        />
      </button>

      {/* Central Desktop Capsule Menu (hidden on mobile, absolute centered on desktop) */}
      <div
        style={{
          ...CAPSULE_STYLE,
          background: currentCapsuleBg,
          border: isScrolled ? "1.5px solid #EDEEEF" : "1.5px solid rgba(255, 255, 255, 0)",
          boxShadow: isScrolled ? "0px 4px 24px rgba(0,31,63,0.08)" : CAPSULE_STYLE.boxShadow,
          backdropFilter: isScrolled ? "none" : "blur(50px)",
          WebkitBackdropFilter: isScrolled ? "none" : "blur(50px)",
        }}
        className="hidden md:flex w-auto max-w-full h-[52px] md:h-[60px] md:w-[280px] flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 justify-center"
        onMouseEnter={(e) => {
          if (!isScrolled) e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
        }}
        onMouseLeave={(e) => {
          if (!isScrolled) e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
        }}
      >
        {active === "home" ? (
          <button style={{ ...ACTIVE_PILL_STYLE, background: currentActivePillBg, transition: "all 0.3s ease" }} className="w-[96px] md:w-[120px] h-[36px] md:h-[44px]" type="button">
            <ActiveLabel label="HOME"  />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => router.push("/home")}
            style={ICON_BTN_STYLE}
            className="w-10 h-10 md:w-[40px] md:h-[40px]"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            aria-label="Home"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isScrolled ? "#164573" : "#FFFFFF"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
        )}

        {active === "search" ? (
          <button style={{ ...ACTIVE_PILL_STYLE, background: currentActivePillBg, transition: "all 0.3s ease" }} className="w-[96px] md:w-[120px] h-[36px] md:h-[44px]" type="button">
            <ActiveLabel label="SEARCH"  />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => router.push("/search")}
            style={ICON_BTN_STYLE}
            className="w-10 h-10 md:w-[40px] md:h-[40px]"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            aria-label="Search"
          >
            <Image src="/assets/home/HeroScreen/search.svg" alt="" width={20} height={20} style={{ filter: isScrolled ? darkBlueFilter : "none", transition: "filter 0.3s ease" }} />
          </button>
        )}

        {active === "pricing" ? (
          <button style={{ ...ACTIVE_PILL_STYLE, background: currentActivePillBg, transition: "all 0.3s ease" }} className="w-[96px] md:w-[120px] h-[36px] md:h-[44px]" type="button">
            <ActiveLabel label="PRICING"  />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => router.push("/pricing")}
            style={ICON_BTN_STYLE}
            className="w-10 h-10 md:w-[40px] md:h-[40px]"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            aria-label="Pricing"
          >
            <Image src="/assets/home/HeroScreen/Vector.svg" alt="" width={20} height={18} style={{ filter: isScrolled ? darkBlueFilter : "none", transition: "filter 0.3s ease" }} />
          </button>
        )}

        {active === "profile" ? (
          <button style={{ ...ACTIVE_PILL_STYLE, background: currentActivePillBg, transition: "all 0.3s ease" }} className="w-[96px] md:w-[120px] h-[36px] md:h-[44px]" type="button">
            <ActiveLabel label="PROFILE"  />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => router.push("/profile")}
            style={ICON_BTN_STYLE}
            className="w-10 h-10 md:w-[40px] md:h-[40px]"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            aria-label="Profile"
          >
            <Image src="/assets/home/HeroScreen/user 1.png" alt="" width={20} height={20} style={{ filter: isScrolled ? darkBlueFilter : "none", transition: "filter 0.3s ease" }} />
          </button>
        )}
      </div>

      {/* Desktop Utility Group (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={() => router.push("/home/unlockeddocuments")}
          style={{
            ...UTILITY_BTN_STYLE,
            background: active === "documents" ? currentActiveUtilityBg : currentUtilityBg,
            boxShadow: isScrolled ? "0px 4px 24px rgba(0,31,63,0.08)" : (active === "documents" ? ACTIVE_UTILITY_BTN_STYLE.boxShadow : UTILITY_BTN_STYLE.boxShadow),
            border: "none",
            backdropFilter: isScrolled ? "none" : "blur(62.6px)",
            WebkitBackdropFilter: isScrolled ? "none" : "blur(62.6px)",
            transition: "all 0.3s ease"
          }}
          className="w-10 h-10 md:w-[44px] md:h-[44px]"
          aria-label="Unlocked Documents"
          aria-current={active === "documents" ? "page" : undefined}
        >
          <Image 
            src="/assets/home/HeroScreen/unlock 1.svg" 
            alt="" 
            width={22} 
            height={22} 
            style={{
              filter: isScrolled && active !== "documents" ? darkBlueFilter : "none",
              transition: "filter 0.3s ease"
            }}
          />
        </button>

        <button
          type="button"
          style={{
            ...UTILITY_BTN_STYLE,
            position: "relative",
            background: currentUtilityBg,
            border: "none",
            boxShadow: isScrolled ? "0px 4px 24px rgba(0,31,63,0.08)" : UTILITY_BTN_STYLE.boxShadow,
            backdropFilter: isScrolled ? "none" : "blur(62.6px)",
            WebkitBackdropFilter: isScrolled ? "none" : "blur(62.6px)",
            transition: "all 0.3s ease"
          }}
          className="w-10 h-10 md:w-[44px] md:h-[44px]"
          aria-label="Notifications"
        >
          <Image 
            src="/assets/home/HeroScreen/notification.svg" 
            alt="" 
            width={22} 
            height={22} 
            style={{
              filter: isScrolled ? darkBlueFilter : "none",
              transition: "filter 0.3s ease"
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "22%",
              right: "20%",
              width: "6px",
              height: "6px",
              background: "#E53935",
              border: "1px solid rgba(255, 255, 255, 0.9)",
              borderRadius: "50%",
              zIndex: 1,
            }}
          />
        </button>

        <button
          type="button"
          onClick={() => router.push("/profile")}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden shadow-[0px_1.8px_10.8px_rgba(0,0,0,0.03)] cursor-pointer relative z-10 [-webkit-tap-highlight-color:transparent] border border-[rgba(255,255,255,0.82)]"
          aria-label="Account"
        >
          <img src="/assets/home/HeroScreen/person.svg" alt="" className="w-full h-full object-cover block scale-150 origin-center" />
        </button>
      </div>

      {/* Mobile Utility & Navigation Group (hidden on desktop) */}
      <div className="flex md:hidden items-center gap-3 shrink-0 relative z-50">
        <button
          type="button"
          onClick={() => {
            setIsMobileMenuOpen(false);
            router.push("/profile");
          }}
          className={`w-9 h-9 rounded-full overflow-hidden shadow-[0px_1.8px_10.8px_rgba(0,0,0,0.03)] cursor-pointer relative [-webkit-tap-highlight-color:transparent] transition-all duration-300 ${isScrolled ? "border border-[#EDEEEF]" : "border border-[rgba(255,255,255,0.82)]"}`}
          aria-label="Account"
        >
          <img src="/assets/home/HeroScreen/person.svg" alt="" className="w-full h-full object-cover block scale-150 origin-center" />
        </button>

        {/* Minimal Animated Hamburger Icon with matching Glass Background Capsule */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.1)",
            border: isScrolled ? "1.5px solid #EDEEEF" : "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: isScrolled ? "0px 4px 12px rgba(0, 31, 63, 0.04)" : "0px 4px 12px rgba(0, 0, 0, 0.05)",
            backdropFilter: isScrolled ? "none" : "blur(12px)",
            WebkitBackdropFilter: isScrolled ? "none" : "blur(12px)",
            transition: "all 0.3s ease",
          }}
          className="w-9 h-9 flex items-center justify-center rounded-full cursor-pointer [-webkit-tap-highlight-color:transparent] transition-transform active:scale-90"
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isScrolled ? "#164573" : "#FFFFFF"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="5" y1="7" x2="19" y2="7" />
                <line x1="9" y1="12" x2="19" y2="12" />
                <line x1="13" y1="17" x2="19" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Premium Compact Dropdown Panel (Mobile only) */}
      <>
        <style>{`
          .mobile-dropdown-panel {
            opacity: 0;
            transform: translateY(-12px) scale(0.96);
            pointer-events: none;
            visibility: hidden;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                        opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                        visibility 0.4s;
          }
          .mobile-dropdown-panel.open {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
            visibility: visible;
          }
          .mobile-dropdown-item {
            opacity: 0;
            transform: translateY(8px);
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                        opacity 0.35s ease, 
                        background 0.2s ease;
          }
          .mobile-dropdown-panel.open .mobile-dropdown-item {
            opacity: 1;
            transform: translateY(0);
          }
          .mobile-dropdown-item:active {
            transform: scale(0.96) !important;
          }
          @media (hover: hover) {
            .mobile-dropdown-panel.open .mobile-dropdown-item:hover {
              transform: translateY(0) translateX(6px);
            }
          }
        `}</style>
        <div
          style={{
            position: "absolute",
            top: "76px",
            left: "16px",
            right: "16px",
            background: isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.12)",
            border: isScrolled ? "1.5px solid #EDEEEF" : "1px solid rgba(255, 255, 255, 0.22)",
            boxShadow: isScrolled 
              ? "0px 16px 40px rgba(0, 31, 63, 0.1), 0px 4px 12px rgba(0, 31, 63, 0.04)" 
              : "0px 16px 40px rgba(0, 0, 0, 0.15), inset 3px 4px 2px -3px rgba(255, 255, 255, 0.45)",
            borderRadius: "28px",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 99,
          }}
          className={`mobile-dropdown-panel ${isMobileMenuOpen ? "open" : ""}`}
        >
          {[
            {
              label: "Home",
              route: "/home",
              activeKey: "home",
              icon: (color: string) => (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              ),
            },
            {
              label: "Search",
              route: "/search",
              activeKey: "search",
              icon: (color: string) => (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
            },
            {
              label: "Pricing",
              route: "/pricing",
              activeKey: "pricing",
              icon: (color: string) => (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              ),
            },
            {
              label: "Profile",
              route: "/profile",
              activeKey: "profile",
              icon: (color: string) => (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              ),
            },
            {
              label: "Unlocked Docs",
              route: "/home/unlockeddocuments",
              activeKey: "documents",
              icon: (color: string) => (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                </svg>
              ),
            },
          ].map((item, i) => {
            const isActive = active === item.activeKey;
            const itemColor = isActive 
              ? "#FFFFFF" 
              : (isScrolled ? "#0F2F4C" : "#FFFFFF");
            return (
              <button
                key={item.label}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push(item.route);
                }}
                className="mobile-dropdown-item flex items-center gap-4 w-full px-5 py-3.5 rounded-full text-left border-none cursor-pointer"
                style={{
                  background: isActive 
                    ? "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)" 
                      : "transparent",
                    transitionDelay: isMobileMenuOpen ? `${i * 30}ms` : "0ms",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = isScrolled ? "rgba(15, 47, 76, 0.05)" : "rgba(255, 255, 255, 0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {item.icon(itemColor)}
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: isActive ? 800 : 600,
                      fontSize: "16px",
                      color: itemColor,
                      letterSpacing: "-0.2px",
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}

            {/* Divider */}
            <div style={{ height: "1px", background: isScrolled ? "#EDEEEF" : "rgba(255, 255, 255, 0.15)", margin: "6px 0" }} />

            {/* Notifications Row inside Dropdown (Perfect Equal-Width Layout) */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push("/profile");
              }}
              className="mobile-dropdown-item flex items-center gap-4 w-full px-5 py-3.5 rounded-full border-none cursor-pointer bg-transparent"
              style={{
                transitionDelay: isMobileMenuOpen ? `${5 * 30}ms` : "0ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isScrolled ? "rgba(15, 47, 76, 0.05)" : "rgba(255, 255, 255, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isScrolled ? "#0F2F4C" : "#FFFFFF"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: isScrolled ? "#0F2F4C" : "#FFFFFF",
                    letterSpacing: "-0.2px",
                  }}
                >
                  Notifications
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E53935] border border-white shrink-0" />
              </div>
            </button>
          </div>
        </>
    </div>
  );
}

function LandingNavbar({ className }: { className?: string }) {
  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[60px] py-6",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex items-center">
        <Link href="/" className="[-webkit-tap-highlight-color:transparent]">
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Logo"
            width={150}
            height={64}
            className="w-[130px] h-auto md:w-[150px]"
            priority
          />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="glass flex h-[42px] w-[140px] md:h-[51px] md:w-[184px] items-center justify-center rounded-[125px] text-sm md:text-base font-extrabold text-white transition-colors hover:bg-white/20 outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]"
        >
          Login / Register
        </Link>
      </div>
    </nav>
  );
}

export default function Navbar(props: Props) {
  if (props.variant === "app") return <AppNavbar active={props.active} className={props.className} />;
  return <LandingNavbar className={props.className} />;
}
