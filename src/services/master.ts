import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

export interface MasterDataResponse {
  success: boolean;
  data?: {
    userRolesResult?: any[];
    tagResult?: any[];
    clientInterestsResult?: any[];
    facilitiesResult?: any[];
    milestoneStageStatusResult?: any[];
    leadStatusResult?: any[];
    milestoneStagesResult?: any[];
    notificationTypesResult?: any[];
    payoutStatusResult?: any[];
    farmlandStatusResult?: any[];
    userRegistrationStatusResult?: any[];
    boundariesResult?: any[];
    cropsResult?: any[];
    distancesResult?: any[];
    infrastructuresResult?: any[];
    ownerMindsetResult?: any[];
    shapeOfTheLandResult?: any[];
    soilTypeResult?: any[];
    treesCountResult?: any[];
    farmlandUploadResult?: any[];
  };
  error?: string;
}

export interface GeoMasterDataResponse {
  countries?: any[][];
  states?: any[][];
  districts?: any[][];
  mandals?: any[][];
  error?: string;
}

export const masterApi = createApi({
  reducerPath: 'masterApi',
  baseQuery,
  endpoints: (builder) => ({
    getAllMasterData: builder.query<MasterDataResponse, void>({
      query: () => ({
        url: '/master/get_all_master_data',
        method: 'POST',
        body: {},
      }),
    }),
    getAllGeoMasterData: builder.query<GeoMasterDataResponse, void>({
      query: () => ({
        url: '/master/get_all_geo_master_data',
        method: 'POST',
        body: {},
      }),
    }),
  }),
});

export const { useGetAllMasterDataQuery, useGetAllGeoMasterDataQuery } = masterApi;
