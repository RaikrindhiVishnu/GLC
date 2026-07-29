"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [authorizedPath, setAuthorizedPath] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    // Check if token exists and is a valid JWT that hasn't expired
    let isValidToken = false;
    if (token && token !== "null" && token !== "undefined" && token.trim() !== "") {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        // Check if token has an expiration and if it's in the future
        if (!payload.exp || payload.exp * 1000 > Date.now()) {
          isValidToken = true;
        } else {
          const refreshToken = localStorage.getItem("refreshToken");
          if (refreshToken && refreshToken !== "null" && refreshToken !== "undefined") {
            // Access token is expired, but we have a refresh token.
            // Optimistically consider the user authenticated and let RTK Query's baseQuery 
            // handle the 401 and refresh the token when the first API call is made.
            console.log("AuthGuard: Token is expired but refresh token exists. Deferring to baseQuery.");
            isValidToken = true;
          } else {
            console.log("AuthGuard: Token is expired and no refresh token found");
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
          }
        }
      } catch (e) {
        // If it's not a valid JWT format, assume it's invalid
        console.log("AuthGuard: Token is not a valid JWT");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      }
    }
    
    const isAuthenticated = isValidToken;
    
    // Paths that should redirect to /home if the user is already logged in
    const authPages = [
      "/login", 
      "/login/register", 
      "/login/forgot-password",
      "/login/verify-code",
      "/login/reset-password",
      "/login/verify-mail",
      "/login/registration-success"
    ];
    
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
        setAuthorizedPath(pathname);
      }
    } else {
      if (!isAuthenticated) {
        console.log("AuthGuard: Unauthenticated user on private route, redirecting to /login...");
        router.replace("/login");
      } else {
        console.log("AuthGuard: Authenticated user on private route, allowing access.");
        setAuthorizedPath(pathname);
      }
    }
  }, [pathname, router]);

  if (authorizedPath !== pathname) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#F8F9FA] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2780C4]"></div>
      </div>
    );
  }

  return <>{children}</>;
}
