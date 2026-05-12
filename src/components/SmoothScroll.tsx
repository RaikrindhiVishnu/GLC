"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.5, 
      smoothWheel: true,
      // Lenis handles mobile by default (it doesn't smooth scroll on touch devices 
      // unless specified, keeping native momentum scrolling which is what the user wants)
    }}>
      {children}
    </ReactLenis>
  );
}
