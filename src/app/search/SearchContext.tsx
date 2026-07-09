"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useGetAllMasterDataQuery, useGetAllGeoMasterDataQuery, MasterDataResponse, GeoMasterDataResponse } from "../../services/master";
import { GetAllFarmlandsRequest } from "../../services/farmland";

interface SearchContextType {
  filters: GetAllFarmlandsRequest;
  setFilters: React.Dispatch<React.SetStateAction<GetAllFarmlandsRequest>>;
  masterData: MasterDataResponse | null;
  geoData: GeoMasterDataResponse | null;
  isLoadingMasterData: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<GetAllFarmlandsRequest>({});
  const { data: masterDataRes, isLoading: isMasterLoading } = useGetAllMasterDataQuery();
  const { data: geoDataRes, isLoading: isGeoLoading } = useGetAllGeoMasterDataQuery();

  const isLoadingMasterData = isMasterLoading || isGeoLoading;
  const masterData = masterDataRes || null;
  const geoData = geoDataRes || null;

  return (
    <SearchContext.Provider
      value={{
        filters,
        setFilters,
        masterData,
        geoData,
        isLoadingMasterData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}
