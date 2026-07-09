import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export interface UnlockedFarmland {
  farmland_id: number;
  farm_code: string;
}

export interface GetUserUnlockedFarmlandsRequest {
  userId: number;
}

export interface GetUserUnlockedFarmlandsResponse {
  success: boolean;
  data?: UnlockedFarmland[];
  error?: string;
}

export const unlockedApi = createApi({
  reducerPath: 'unlockedApi',
  baseQuery,
  endpoints: (builder) => ({
    getUserUnlockedFarmlands: builder.query<GetUserUnlockedFarmlandsResponse, GetUserUnlockedFarmlandsRequest>({
      query: (payload) => ({
        url: '/home/get_user_unlocked_farmlands',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useGetUserUnlockedFarmlandsQuery } = unlockedApi;
