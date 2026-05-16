import React from "react";
import LoginHero from "./LoginHero";

export const metadata = {
  title: "Secure Authentication Portal | Green Land Capital",
  description: "Log in securely to manage your fractional assets, track escrow yields, and explore premium land opportunities.",
};

export default function HomeLoginPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", backgroundColor: "#FEFEFE" }}>
      <LoginHero />
    </main>
  );
}
