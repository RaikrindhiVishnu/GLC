import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import SparkleButton from "@/components/SparkleButton";
import SmoothScroll from "@/components/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Land Capital | Discover Premium Farmlands",
  description: "Invest in sustainable, high-yield organic farmlands with Green Land Capital.",
};

import { SearchProvider } from "@/app/search/SearchContext";
import { StoreProvider } from "@/store/StoreProvider";
import AuthGuard from "@/components/AuthGuard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${manrope.variable} antialiased font-jakarta`} suppressHydrationWarning>
        <StoreProvider>
          <SearchProvider>
            <AuthGuard>
              <SmoothScroll>
                {children}
              </SmoothScroll>

              <SparkleButton />
            </AuthGuard>
          </SearchProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
