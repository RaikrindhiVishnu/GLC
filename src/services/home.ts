import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export interface District {
  district_id: number;
  district_name: string;
  district_code: string;
  district_img?: string;
}

export interface GetUserListedFarmlandByIdRequest {
  farmland_id: number;
}

export interface GetUserListedFarmlandByIdData {
  farmland_id: number;
  farmland_code: string;
  farmland_image: string;
  acers: number;
  price: number;
  total_views: number;
  total_saves: number;
  for_sale: number;
  is_bought: number;
}

export interface GetUserListedFarmlandByIdResponse {
  success: boolean;
  data?: GetUserListedFarmlandByIdData;
  error?: string;
}

export interface GetUserListedFarmlandImagesRequest {
  farmland_id: number;
}

export interface FarmlandImage {
  farmland_image_id: number;
  image_url: string;
}

export interface GetUserListedFarmlandImagesResponse {
  success: boolean;
  data?: FarmlandImage[];
  error?: string;
}

export interface UpdateFarmlandImagesRequest {
  farmland_id: number;
  user_id: number;
  add_list: string[];
  delete_list: number[];
}

export interface UpdateFarmlandImagesResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface UpdateViewsForFarmlandByIdRequest {
  farmland_id: number;
}

export interface UpdateViewsForFarmlandByIdResponse {
  success: boolean;
  message: string;
  error?: string;
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
  farmland_tag_ids?: number[];
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
    getAllTopSellingLocations: builder.query<GetAllDistrictByStateIdResponse, GetAllDistrictByStateIdRequest>({
      query: (payload) => ({
        url: '/home/get_all_top_selling_locations',
        method: 'POST',
        body: payload,
      }),
    }),
    getUserListedFarmlandById: builder.query<GetUserListedFarmlandByIdResponse, GetUserListedFarmlandByIdRequest>({
      query: (payload) => ({
        url: '/home/get_user_listed_farmlands_by_id',
        method: 'POST',
        body: payload,
      }),
    }),
    getUserListedFarmlandImages: builder.query<GetUserListedFarmlandImagesResponse, GetUserListedFarmlandImagesRequest>({
      query: (payload) => ({
        url: '/home/get_user_listed_farmland_images',
        method: 'POST',
        body: payload,
      }),
    }),
    updateFarmlandImages: builder.mutation<UpdateFarmlandImagesResponse, UpdateFarmlandImagesRequest>({
      query: (payload) => ({
        url: '/home/update_farmland_images',
        method: 'POST',
        body: payload,
      }),
    }),
    updateViewsForFarmlandById: builder.mutation<UpdateViewsForFarmlandByIdResponse, UpdateViewsForFarmlandByIdRequest>({
      query: (payload) => ({
        url: '/home/update_views_for_farmland_by_id',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { 
  useGetAllDistrictByStateIdQuery, 
  useGetFarmlandByTagAndStateQuery, 
  useGetAllTopSellingLocationsQuery,
  useGetUserListedFarmlandByIdQuery,
  useGetUserListedFarmlandImagesQuery,
  useUpdateFarmlandImagesMutation,
  useUpdateViewsForFarmlandByIdMutation
} = homeApi;
