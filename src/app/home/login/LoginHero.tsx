"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginHero({
  onSwitchToRegister,
  onSwitchToForgot,
}: {
  onSwitchToRegister?: () => void;
  onSwitchToForgot?: () => void;
} = {}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#FEFEFE",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        boxSizing: "border-box",
        padding: "clamp(12px, 2vh, 24px) clamp(12px, 2vw, 24px)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1480px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: "clamp(12px, 2vw, 32px)",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            width: "48.5%",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "clamp(8px, 1.5vh, 16px)",
          }}
        >
          {/* Auth Card */}
          <div
            style={{
              flex: "1 1 auto",
              minHeight: 0,
              backgroundColor: "#F5F5F5",
              border: "0.3vh solid #FFFFFF",
              borderRadius: "clamp(12px, 2.5vh, 28px)",
              padding: "clamp(20px, 4vh, 48px) clamp(20px, 3.5vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            {/* Top: logo + heading */}
            <div style={{ width: "100%", maxWidth: "498px", textAlign: "left" }}>
              <img
                src="/assets/common/Logo green land 1.svg"
                alt="GLC Logo"
                style={{
                  width: "auto",
                  height: "clamp(32px, 6vh, 60px)",
                  marginBottom: "clamp(10px, 2vh, 24px)",
                  cursor: "pointer",
                }}
                onClick={() => router.push("/")}
              />
              <h1
                style={{
                  margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 4vh, 49px)",
                  lineHeight: "1.2",
                  color: "#353535",
                }}
              >
                Welcome to
                <br />
                Green Land Capital
              </h1>
              <p
                style={{
                  margin: "clamp(8px, 1.2vh, 16px) 0 0",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 1.5vh, 16px)",
                  color: "#B8B8B8",
                  lineHeight: "1.5",
                }}
              >
                Log in securely to manage your fractional assets, track escrow
                yields, and explore premium land opportunities in Medchal and
                Vikarabad.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleLoginSubmit}
              style={{
                width: "100%",
                maxWidth: "498px",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(8px, 1.2vh, 16px)",
                margin: "clamp(16px, 2vh, 28px) 0",
              }}
            >
              {/* Email */}
              <div
                style={{
                  position: "relative",
                  height: "clamp(44px, 6vh, 60px)",
                  backgroundColor: "#FEFEFE",
                  border: "1px solid #D3DEEA",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 clamp(12px, 2vh, 20px)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2780C4"
                  strokeWidth="1.5"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div
                  style={{
                    width: "2px",
                    height: "22px",
                    backgroundColor: "#EFEFEF",
                    margin: "0 clamp(8px, 1.5vh, 16px)",
                    flexShrink: 0,
                  }}
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address or Investor ID"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "clamp(12px, 1.4vh, 14px)",
                    color: "#333",
                    background: "transparent",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                  required
                />
              </div>

              {/* Password */}
              <div
                style={{
                  position: "relative",
                  height: "clamp(44px, 6vh, 60px)",
                  backgroundColor: "#FEFEFE",
                  border: "1px solid #D3DEEA",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 clamp(12px, 2vh, 20px)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A1999B"
                  strokeWidth="1.5"
                  style={{ flexShrink: 0 }}
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <div
                  style={{
                    width: "2px",
                    height: "22px",
                    backgroundColor: "#EFEFEF",
                    margin: "0 clamp(8px, 1.5vh, 16px)",
                    flexShrink: 0,
                  }}
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "clamp(12px, 1.4vh, 14px)",
                    color: "#333",
                    background: "transparent",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer", display: "flex", alignItems: "center", flexShrink: 0 }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A1999B"
                    strokeWidth="1.5"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>

              {/* Remember / Forgot */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 4px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    fontSize: "clamp(12px, 1.3vh, 14px)",
                    color: "#353535",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px", accentColor: "#2780C4" }}
                  />
                  Remember me
                </label>
                <span
                  onClick={() =>
                    onSwitchToForgot
                      ? onSwitchToForgot()
                      : router.push("/forgot-password")
                  }
                  style={{
                    fontSize: "clamp(12px, 1.3vh, 14px)",
                    color: "#616161",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Forgot Password?
                </span>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  height: "clamp(44px, 5.5vh, 58px)",
                  borderRadius: "999px",
                  border: "1px solid #43B6CD",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "clamp(13px, 1.6vh, 16px)",
                  cursor: "pointer",
                  marginTop: "4px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Log In Securely
              </button>

              <div
                style={{
                  textAlign: "center",
                  fontSize: "clamp(12px, 1.3vh, 14px)",
                  color: "#BDBDBD",
                  margin: "2px 0",
                }}
              >
                or
              </div>

              {/* Sign Up Button */}
              <button
                type="button"
                onClick={() =>
                  onSwitchToRegister
                    ? onSwitchToRegister()
                    : router.push("/register")
                }
                style={{
                  width: "100%",
                  height: "clamp(44px, 5.5vh, 58px)",
                  borderRadius: "999px",
                  border: "1px solid #2780C4",
                  background: "transparent",
                  color: "#2780C4",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.6vh, 16px)",
                  cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Bottom Trust Bar */}
          <div
            style={{
              flexShrink: 0,
              minHeight: "clamp(72px, 12vh, 120px)",
              backgroundColor: "#F5F5F5",
              border: "0.3vh solid #FFFFFF",
              borderRadius: "clamp(12px, 2.5vh, 28px)",
              display: "flex",
              alignItems: "center",
              padding: "0 clamp(16px, 2.5vh, 28px)",
              boxSizing: "border-box",
              gap: "clamp(8px, 1.5vh, 16px)",
            }}
          >
            {/* Stacked Avatars */}
            <div
              style={{
                position: "relative",
                width: "clamp(80px, 12vh, 120px)",
                height: "clamp(36px, 5vh, 52px)",
                flexShrink: 0,
              }}
            >
              {[
                { src: "/assets/home/HeroScreen/user 1.png", left: "0%", z: 3 },
                { src: "/assets/home/HeroScreen/person.svg", left: "28%", z: 2 },
                { src: "/assets/home/HeroScreen/user 1.png", left: "56%", z: 1 },
              ].map((av, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: av.left,
                    top: 0,
                    width: "clamp(36px, 5vh, 52px)",
                    height: "clamp(36px, 5vh, 52px)",
                    borderRadius: "50%",
                    border: "2px solid #FFFFFF",
                    overflow: "hidden",
                    zIndex: av.z,
                  }}
                >
                  <img
                    src={av.src}
                    alt="User"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                flex: 1,
                minWidth: 0,
              }}
            >
              <span
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(12px, 1.6vh, 17px)",
                  color: "#616161",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Trusted by 1,500+ Co-Owners
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(11px, 1.3vh, 15px)",
                  color: "#C0C0C0",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Over ₹25 Cr+ in secure escrow volume.
              </span>
            </div>

            {/* Arrow Button */}
            <button
              style={{
                flexShrink: 0,
                width: "clamp(40px, 6vh, 64px)",
                height: "clamp(40px, 6vh, 64px)",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #616161",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#616161"
                strokeWidth="2.5"
                style={{ transform: "rotate(45deg)" }}
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Hero Image */}
        <div
          style={{
            width: "48.5%",
            minWidth: 0,
            position: "relative",
            borderRadius: "clamp(12px, 2.5vh, 28px)",
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/login/welcome.bg.svg"
            alt="Login Visual"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "5%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "clamp(22px, 4.5vh, 48px)",
                lineHeight: "1.1",
                color: "#FFFFFF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Democratizing
              <br />
              Premium Real Estate.
            </h1>

            {/* Info Card */}
            <div
              style={{
                width: "100%",
                maxWidth: "clamp(280px, 55vh, 520px)",
                alignSelf: "flex-end",
                background: "rgba(196, 196, 196, 0.2)",
                backdropFilter: "blur(30px)",
                borderRadius: "clamp(12px, 3vh, 28px)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "clamp(14px, 2vh, 24px)",
                boxSizing: "border-box",
              }}
            >
              {/* Top row: badge + nav buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "clamp(10px, 1.5vh, 18px)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 1vh, 12px)" }}>
                  <div
                    style={{
                      width: "clamp(36px, 5vh, 52px)",
                      height: "clamp(36px, 5vh, 52px)",
                      border: "2px solid #FFFFFF",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div
                    style={{
                      border: "2px solid #FFFFFF",
                      borderRadius: "999px",
                      padding: "clamp(6px, 0.8vh, 10px) clamp(12px, 1.5vh, 20px)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontSize: "clamp(11px, 1.4vh, 15px)",
                        fontWeight: 400,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Fully Transparent
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "clamp(6px, 1vh, 12px)" }}>
                  {[true, false].map((rotated, i) => (
                    <div
                      key={i}
                      style={{
                        width: "clamp(36px, 5vh, 52px)",
                        height: "clamp(36px, 5vh, 52px)",
                        borderRadius: "50%",
                        border: "2px solid #FFFFFF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transform: rotated ? "rotate(-180deg)" : "none",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(12px, 1.5vh, 16px)",
                  color: "#FFFFFF",
                  lineHeight: "1.5",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Every fractional unit is backed by rigid KYC protocols and
                bank-grade Escrow routing. Your capital is always protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}