import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SparkleButton from "@/components/SparkleButton";
import SmoothScroll from "@/components/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Land Capital | Discover Premium Farmlands",
  description: "Invest in sustainable, high-yield organic farmlands with Green Land Capital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased font-jakarta`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>

        <SparkleButton />
      </body>
    </html>
  );
}
