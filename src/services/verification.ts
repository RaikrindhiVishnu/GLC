import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export const VERIFICATION_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://blkzmtts30.execute-api.ap-south-1.amazonaws.com';

export interface GetVerificationLandsRequest {
  user_id: number;
  offset: number;
  limit: number;
}

export interface VerificationLand {
  farmland_id: number;
  farmland_code: string;
  price: number;
  farmland_img?: string;
  is_active: number;
  is_glc_exclusive: number;
  is_farmland_verified?: number;
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

export interface SubmitFarmlandVerificationRequest {
  drop_pin: {
    lat: string;
    long: string;
  };
  seller_information: {
    frist_name: string;
    last_name: string;
    dob: string;
    price: number;
    country_code: string;
    phone_number: string;
  };
  farmland_image: string;
  country_id: number;
  state_id: number;
  district_id: number;
  mandal_id: number;
  milstone_stage_id: number;
  milestone_status_id: number;
  acers?: number;
  price?: number;
  per_acer_value?: number;
  per_acre_value?: number;
}

export interface SubmitFarmlandVerificationResponse {
  success?: boolean;
  message?: string;
  error?: string;
  farmland_id?: number;
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
    submitFarmlandToVerification: builder.mutation<SubmitFarmlandVerificationResponse, SubmitFarmlandVerificationRequest>({
      query: (payload) => ({
        url: '/verification/submit_farmland_to_verification',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetVerificationLandsByUserIdQuery,
  useSubmitFarmlandToVerificationMutation,
} = verificationApi;
