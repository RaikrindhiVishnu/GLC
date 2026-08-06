import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

// create a new mutex
const mutex = new Mutex();

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://blkzmtts30.execute-api.ap-south-1.amazonaws.com',
  prepareHeaders: (headers) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
});

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        if (typeof window !== 'undefined') {
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            try {
              const authUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || 'https://eq3tqsvcw7.execute-api.ap-south-1.amazonaws.com';
              const refreshResult = await fetch(`${authUrl}/auth/refreshToken`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'accept': 'application/json'
                },
                body: JSON.stringify({ token: refreshToken })
              });

              if (refreshResult.ok) {
                const data = await refreshResult.json();
                if (data.token) {
                  localStorage.setItem('token', data.token);
                  if (data.refreshToken) {
                    localStorage.setItem('refreshToken', data.refreshToken);
                  }
                  // retry the initial query
                  result = await rawBaseQuery(args, api, extraOptions);
                } else {
                  localStorage.removeItem('token');
                  localStorage.removeItem('refreshToken');
                  window.location.href = '/login';
                }
              } else if (refreshResult.status >= 400 && refreshResult.status < 500) {
                // Only log out if it's a client error (e.g., 401 Unauthorized, 403 Forbidden)
                // meaning the refresh token is actually invalid/expired.
                // If it's a 5xx error, it's a server issue, don't force logout.
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login';
              }
            } catch (networkError) {
              // Network error during refresh (e.g., disconnected). Do not log out.
              console.log("Network error during token refresh. Keeping tokens intact.");
            }
          } else {
            localStorage.removeItem('token');
            // Avoid forced redirect to /login here for guests, 
            // so public pages can gracefully handle 401s and show fallback data.
          }
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await rawBaseQuery(args, api, extraOptions);
    }
  }
  return result;
};
