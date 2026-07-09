import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export const VERIFICATION_API_BASE_URL = 'https://blkzmtts30.execute-api.ap-south-1.amazonaws.com';

export interface GetVerificationLandsRequest {
  user_id: number;
}

export interface VerificationLand {
  farmland_id: number;
  farmland_code: string;
  price: number;
  farmland_img?: string;
  is_active: number;
  is_glc_exclusive: number;
  created_on: string;
  updated_on: string;
  farmland_location?: {
    country_id: number;
    state_id: number;
    district_id: number;
    mandal_id: number;
  };
}

export interface GetVerificationLandsResponse {
  success: boolean;
  data?: VerificationLand[];
  error?: string;
}

export const verificationApi = createApi({
  reducerPath: 'verificationApi',
  baseQuery,
  endpoints: (builder) => ({
    getVerificationLandsByUserId: builder.query<GetVerificationLandsResponse, GetVerificationLandsRequest>({
      query: (payload) => ({
        url: '/verification/get_verification_lands_by_user_id',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useGetVerificationLandsByUserIdQuery } = verificationApi;
