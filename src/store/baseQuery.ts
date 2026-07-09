import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://blkzmtts30.execute-api.ap-south-1.amazonaws.com',
  prepareHeaders: (headers) => {
    // Standard approach to get token from localStorage in client-side code
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
});
