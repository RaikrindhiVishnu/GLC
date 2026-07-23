import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

const MAIL_API_BASE_URL = 'https://eq3tqsvcw7.execute-api.ap-south-1.amazonaws.com';

export interface CreateAgentRequest {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  country_code: string;
  role_id: number;
}

export interface CreateAgentResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export interface CreateRoleManagerRequest {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  country_code: string;
  role_id: number;
}

export interface CreateRoleManagerResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export interface BoughtFarmland {
  farmland_id: number;
  farmland_code: string;
  price: number;
  farmland_img: string;
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

export interface GetUserBoughtFarmlandsRequest {
  user_id: number;
}

export interface GetUserBoughtFarmlandsResponse {
  success: boolean;
  data?: BoughtFarmland[];
  error?: string;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  role_id: number;
  role_code: string;
  dob: string;
}

export interface CreateUserResponse {
  success: boolean;
  message: string;
  data?: {
    userId: number;
  };
  error?: string;
}

export interface GetUserDetailsByIdRequest {
  user_id: number;
}

export interface UserBoughtFarmlandDetail {
  farmland_is: number;
  farmland_code: string;
  price: number;
  total_acers: number;
  location_details: {
    country_id: number;
    state_id: number;
    district_id: number;
    mandal_id: number;
  };
}

export interface GetUserDetailsByIdResponse {
  success: boolean;
  data?: {
    frist_name: string;
    last_name: string;
    contry_code: string;
    ph_number: string;
    email: string;
    profile_url: string;
    is_verifed: number;
    user_bought_farmlnad_details: UserBoughtFarmlandDetail[];
  };
}

export interface UpdateUserDetailsRequest {
  id: number;
  frist_name: string;
  last_name: string;
  profile_url: string;
  state_id: number;
}

export interface UpdateUserDetailsResponse {
  success: boolean;
  message: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
      query: (payload) => ({
        url: '/user/create_user',
        method: 'POST',
        body: payload,
      }),
    }),
    createAgent: builder.mutation<CreateAgentResponse, CreateAgentRequest>({
      query: (payload) => ({
        url: `${MAIL_API_BASE_URL}/user/createAgent`,
        method: 'POST',
        body: payload,
      }),
    }),
    createRoleManager: builder.mutation<CreateRoleManagerResponse, CreateRoleManagerRequest>({
      query: (payload) => ({
        url: `${MAIL_API_BASE_URL}/user/createRoleManager`,
        method: 'POST',
        body: payload,
      }),
    }),
    getUserBoughtFarmlands: builder.query<GetUserBoughtFarmlandsResponse, GetUserBoughtFarmlandsRequest>({
      query: (payload) => ({
        url: '/user/get_user_bought_farmlands',
        method: 'POST',
        body: payload,
      }),
    }),
    getUserDetailsById: builder.query<GetUserDetailsByIdResponse, GetUserDetailsByIdRequest>({
      query: (payload) => ({
        url: '/user/get_user_details_by_id',
        method: 'POST',
        body: payload,
      }),
      providesTags: ['User'],
    }),
    updateUserDetails: builder.mutation<UpdateUserDetailsResponse, UpdateUserDetailsRequest>({
      query: (payload) => ({
        url: '/user/update_user_details',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useCreateAgentMutation,
  useCreateRoleManagerMutation,
  useGetUserBoughtFarmlandsQuery,
  useGetUserDetailsByIdQuery,
  useUpdateUserDetailsMutation,
} = userApi;
