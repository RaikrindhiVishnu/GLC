import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export interface District {
  district_id: number;
  district_name: string;
  district_code: string;
  district_img?: string;
}

export interface GetAllDistrictByStateIdRequest {
  state_id: number;
}

export interface GetAllDistrictByStateIdResponse {
  success: boolean;
  data?: District[];
  error?: string;
}

export interface Farmland {
  farmland_id: number;
  farmland_code: string;
  farmland_img?: string;
  farmland_mandal_id?: number;
  farmland_district_id?: number;
}

export interface GetFarmlandByTagAndStateRequest {
  tag_ids: number[];
  state_id: number;
}

export interface GetFarmlandByTagAndStateResponse {
  success: boolean;
  data?: Farmland[];
  error?: string;
}

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery,
  endpoints: (builder) => ({
    getAllDistrictByStateId: builder.query<GetAllDistrictByStateIdResponse, GetAllDistrictByStateIdRequest>({
      query: (payload) => ({
        url: '/home/get_all_district_by_state_id',
        method: 'POST',
        body: payload,
      }),
    }),
    getFarmlandByTagAndState: builder.query<GetFarmlandByTagAndStateResponse, GetFarmlandByTagAndStateRequest>({
      query: (payload) => ({
        url: '/home/get_farmland_by_tag_and_state',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useGetAllDistrictByStateIdQuery, useGetFarmlandByTagAndStateQuery } = homeApi;
