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
    
    // Paths that should redirect to /home if the user is already logged in
    const authPages = ["/login", "/login/register", "/login/forgot-password"];
    
    // Paths that can be viewed without logging in
    const publicPaths = ["/", "/landing", ...authPages];
    
    const isPublicPath = publicPaths.includes(pathname);
    const isAuthPage = authPages.includes(pathname);

    if (isPublicPath) {
      if (isAuthenticated && isAuthPage) {
        console.log("AuthGuard: Authenticated user on auth page, redirecting to /home...");
        router.replace("/home");
      } else {
        console.log("AuthGuard: User allowed on public/auth route.");
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
