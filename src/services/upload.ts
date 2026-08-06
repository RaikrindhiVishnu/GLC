import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export interface UploadedFarmland {
  farmland_id: number;
  farm_code: string;
  farmland_img?: string;
  farmland_image?: string;
  valuation?: number;
  location_details?: {
    country_id: number;
    state_id: number;
    district_id: number;
    mandal_id: number;
  };
}

export interface GetUserUploadedFarmlandsRequest {
  userId: number;
}

export interface GetUserUploadedFarmlandsResponse {
  success: boolean;
  data?: UploadedFarmland[];
  error?: string;
}

export const uploadApi = createApi({
  reducerPath: 'uploadApi',
  baseQuery,
  endpoints: (builder) => ({
    getUserUploadedFarmlands: builder.query<GetUserUploadedFarmlandsResponse, GetUserUploadedFarmlandsRequest>({
      query: (payload) => ({
        url: '/home/get_user_uploaded_farmlands',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useGetUserUploadedFarmlandsQuery } = uploadApi;
