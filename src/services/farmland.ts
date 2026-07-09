import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export interface GetFarmlandByIdRequest {
  farmland_id: number;
}

export interface FarmlandDetailResponse {
  farmland_id: number;
  farmland_code: string;
  price: number;
  farmland_img?: string;
  polygon?: string;
  location_details?: {
    country_id: number;
    state_id: number;
    district_id: number;
    mandal_id: number;
  };
  land_specifications?: {
    total_acers: number;
    borewell: number;
    soil_type: string;
  };
  facilities?: {
    road_apporoach?: {
      distance: string;
    };
    electricity?: {
      is_2phase: number;
      is_3phase: number;
    };
    railway?: {
      distance_id: string;
    };
    airport?: {
      distance_id: string;
    };
  };
  cultivation_details?: {
    current_cultivation?: any[];
    crops_that_can_be_grown?: any[];
    future_crops_suggetions?: any[];
  };
  error?: string;
  success?: boolean;
}

export interface GetAllFarmlandsRequest {
  offset?: number;
  state_id?: number[];
  district_id?: number[];
  mandal_id?: number[];
  from_price?: number;
  to_price?: number;
  from_size?: number;
  to_size?: number;
  tag_ids?: number[];
}

export interface GetAllFarmlandsResponse {
  total_count: number;
  data: {
    farmland_id: number;
    farmland_code: string;
    price: number;
    tag_ids: number[];
    farmland_image: string;
    farmland_locations: {
      mandal_id: number;
      district_id: number;
      state_id: number;
    }
  }[];
  success?: boolean;
  error?: string;
}

export const farmlandApi = createApi({
  reducerPath: 'farmlandApi',
  baseQuery,
  endpoints: (builder) => ({
    getFarmlandById: builder.query<FarmlandDetailResponse, GetFarmlandByIdRequest>({
      query: (payload) => ({
        url: '/farmland/get_farmland_by_id',
        method: 'POST',
        body: payload,
      }),
    }),
    getAllFarmlandsByStateId: builder.query<GetAllFarmlandsResponse, GetAllFarmlandsRequest>({
      query: (payload) => ({
        url: '/farmland/get_all_farmlands_by_state_id',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useGetFarmlandByIdQuery, useGetAllFarmlandsByStateIdQuery } = farmlandApi;
