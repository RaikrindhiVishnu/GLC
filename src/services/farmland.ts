import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export interface GetFarmlandByIdRequest {
  farmland_id: number;
}

export interface GetFarmlandsForComparisonRequest {
  state_id: number;
}

export interface FarmlandComparisonData {
  farmland_id: number;
  farmland_code: string;
  farmland_img: string;
  acers: number;
  soil_type_id: number;
  price: number;
}

export interface GetFarmlandsForComparisonResponse {
  success: boolean;
  data: FarmlandComparisonData[];
  error?: string;
}

export interface GetFacilitiesByFarmlandIdRequest {
  farmland_id: number;
}

export interface RemoveFarmLandFromUserSavedListRequest {
  user_id: number;
  farm_land_id: number;
}

export interface RemoveFarmLandFromUserSavedListResponse {
  message: string;
}

export interface AddLandToUserSavedListRequest {
  user_id: number;
  farmland_id: number;
}

export interface AddLandToUserSavedListResponse {
  message: string;
}

export interface GetAllSavedFarmlandsByUserIdRequest {
  user_id: number;
  offset: number;
}

export interface SavedFarmlandItem {
  farm_land_id: number;
  farm_code: string;
  farm_id: string;
  total_valuation: string;
  milestone_stage_id: number;
  milestone_stage_status_id: number;
  location_details: {
    state_id: number;
    country_id: number | null;
    mandal_id: number;
    district_id: number | null;
  };
  tags: number[];
}

export type GetAllSavedFarmlandsByUserIdResponse = SavedFarmlandItem[];

export interface GetAllLegalDocumentsByFarmlandIdRequest {
  farmlandId: number;
}

export interface LegalDocumentFile {
  id: number;
  document_url: string;
}

export interface LegalDocumentVersion {
  version: string;
  remarks: string;
  land_coordinates: string;
  files: LegalDocumentFile[];
}

export interface LegalDocumentItem {
  code: string;
  description: string;
  uploaded: boolean;
  versions: LegalDocumentVersion[];
}

export interface GetAllLegalDocumentsByFarmlandIdResponse {
  success: boolean;
  data: Record<string, LegalDocumentItem>;
}

export interface GetFacilitiesByFarmlandIdResponse {
  id: number;
  farm_code: string;
  price: number;
  acers: number;
  cover_image_url?: string;
  water: {
    is_bore: number;
    is_ground_water: number;
  };
  road_appoarch: {
    road_width: number;
  };
  electricity: {
    is_2phase: number;
    is_3phase: number;
  };
  railway: {
    distance_id: number;
  };
  airport: {
    distance_id: number;
  };
  soil: {
    type_id: number;
  };
  current_cultivation: number;
  crops_that_can_be_grown: number[];
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
    lat?: string;
    long?: string;
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

export interface SellFarmlandRequest {
  location_details: {
    country_id: number;
    state_id: number;
    district_id: number;
    mandal_id: number;
    lat: string;
    long: string;
    pin_label: string;
  };
  owner_details: {
    first_name: string;
    last_name: string;
    country_code: string;
    phone_number: string;
    email_address: string;
  };
  cover_image: string;
  total_acers: number;
  price: string;
  land_description: string;
  polygon?: { lat: number; lng: number }[];
  gallery_images?: string[];
  master_milestone_stage_id?: number;
  master_milestone_stage_status_id?: number;
  per_acer_value?: string;
}

export interface SellFarmlandResponse {
  success: boolean;
  message: string;
  data: {
    farmland_id: number;
  };
}

export interface UpdateCoverImageRequest {
  farmland_id: number;
  cover_image_url: string;
}

export interface UpdateCoverImageResponse {
  success: boolean;
  message: string;
}

export interface ChangeFarmlandListingStatusRequest {
  farmland_id: number;
  for_sale: number;
}

export interface ChangeFarmlandListingStatusResponse {
  success: boolean;
  message: string;
}

export interface DeleteFarmlandListingRequest {
  farmland_id: number;
  reason_id: number;
  remarks: string;
}

export interface DeleteFarmlandListingResponse {
  message?: string;
  success?: boolean;
}

export const farmlandApi = createApi({
  reducerPath: 'farmlandApi',
  baseQuery,
  endpoints: (builder) => ({
    getFarmlandById: builder.query<FarmlandDetailResponse[], GetFarmlandByIdRequest>({
      query: (payload) => ({
        url: '/farmland/get_farmland_by_id',
        method: 'POST',
        body: payload,
      }),
    }),
    getAllFarmlandsByStateId: builder.query<GetAllFarmlandsResponse, GetAllFarmlandsRequest>({
      query: (payload) => ({
        url: '/farmland/get_all_farmlands',
        method: 'POST',
        body: payload,
      }),
    }),
    getFacilitiesByFarmlandId: builder.query<GetFacilitiesByFarmlandIdResponse, GetFacilitiesByFarmlandIdRequest>({
      query: (payload) => ({
        url: '/farmland/get_facilities_by_farmland_id',
        method: 'POST',
        body: payload,
      }),
    }),
    getAllLegalDocumentsByFarmlandId: builder.query<GetAllLegalDocumentsByFarmlandIdResponse, GetAllLegalDocumentsByFarmlandIdRequest>({
      query: (payload) => ({
        url: '/farmland/get_all_legal_documents_by_farmland_id',
        method: 'POST',
        body: payload,
      }),
    }),
    removeFarmLandFromUserSavedList: builder.mutation<RemoveFarmLandFromUserSavedListResponse, RemoveFarmLandFromUserSavedListRequest>({
      query: (payload) => ({
        url: '/farmland/remove_farm_land_from_user_saved_list',
        method: 'POST',
        body: payload,
      }),
    }),
    getAllSavedFarmlandsByUserId: builder.query<GetAllSavedFarmlandsByUserIdResponse, GetAllSavedFarmlandsByUserIdRequest>({
      query: (payload) => ({
        url: '/farmland/get_all_saved_farmlands_by_user_id',
        method: 'POST',
        body: payload,
      }),
    }),
    addLandToUserSavedList: builder.mutation<AddLandToUserSavedListResponse, AddLandToUserSavedListRequest>({
      query: (payload) => ({
        url: '/farmland/add_land_to_user_saved_list',
        method: 'POST',
        body: payload,
      }),
    }),
    getFarmlandsForComparison: builder.query<GetFarmlandsForComparisonResponse, GetFarmlandsForComparisonRequest>({
      query: (payload) => ({
        url: '/farmland/get_farmlands_for_comparission',
        method: 'POST',
        body: payload,
      }),
    }),
    sellFarmland: builder.mutation<SellFarmlandResponse, SellFarmlandRequest>({
      query: (payload) => ({
        url: '/farmland/sell_farmland',
        method: 'POST',
        body: payload,
      }),
    }),
    deleteFarmlandListing: builder.mutation<DeleteFarmlandListingResponse, DeleteFarmlandListingRequest>({
      query: (payload) => ({
        url: '/farmland/delete_farmland_listing',
        method: 'POST',
        body: payload,
      }),
    }),
    updateCoverImage: builder.mutation<UpdateCoverImageResponse, UpdateCoverImageRequest>({
      query: (payload) => ({
        url: '/farmland/update_cover_image',
        method: 'POST',
        body: payload,
      }),
    }),
    changeFarmlandListingStatus: builder.mutation<ChangeFarmlandListingStatusResponse, ChangeFarmlandListingStatusRequest>({
      query: (payload) => ({
        url: '/farmland/change_farmland_listing_status',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { 
  useGetFarmlandByIdQuery, 
  useGetAllFarmlandsByStateIdQuery, 
  useGetFacilitiesByFarmlandIdQuery, 
  useGetAllLegalDocumentsByFarmlandIdQuery,
  useRemoveFarmLandFromUserSavedListMutation,
  useGetAllSavedFarmlandsByUserIdQuery,
  useAddLandToUserSavedListMutation,
  useGetFarmlandsForComparisonQuery,
  useSellFarmlandMutation,
  useDeleteFarmlandListingMutation,
  useUpdateCoverImageMutation,
  useChangeFarmlandListingStatusMutation
} = farmlandApi;
