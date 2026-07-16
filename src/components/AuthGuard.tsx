"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isAuthenticated = token && token !== "null" && token !== "undefined" && token.trim() !== "";
    
    // Define paths that are accessible BEFORE login
    const publicPaths = ["/", "/login", "/login/register", "/login/forgot-password"];
    
    // Check if the current path is exactly a public path
    const isPublicPath = publicPaths.includes(pathname);

    if (isPublicPath) {
      if (isAuthenticated) {
        console.log("AuthGuard: Authenticated user on public route, redirecting to /home...");
        router.replace("/home");
      } else {
        console.log("AuthGuard: Unauthenticated user on public route, allowing access.");
        setMounted(true);
      }
    } else {
      if (!isAuthenticated) {
        console.log("AuthGuard: Unauthenticated user on private route, redirecting to /login...");
        window.location.replace("/login");
      } else {
        console.log("AuthGuard: Authenticated user on private route, allowing access.");
        setMounted(true);
      }
    }
  }, [pathname, router]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#F8F9FA] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2780C4]"></div>
      </div>
    );
  }

  return <>{children}</>;
}
