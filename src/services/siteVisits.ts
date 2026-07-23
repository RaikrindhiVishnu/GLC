import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export interface CreateSiteVisitsRequest {
  user_id: number;
  farmland_id: number;
  visits_date: string;
  visits_time: string;
  remarks: string;
}

export interface CreateSiteVisitsResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
  };
  error?: string;
}

export const siteVisitsApi = createApi({
  reducerPath: 'siteVisitsApi',
  baseQuery,
  endpoints: (builder) => ({
    createSiteVisit: builder.mutation<CreateSiteVisitsResponse, CreateSiteVisitsRequest>({
      query: (payload) => ({
        url: '/siteVisits/createSiteVisits',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useCreateSiteVisitMutation } = siteVisitsApi;
