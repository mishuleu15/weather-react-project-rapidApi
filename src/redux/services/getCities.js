import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://geo-services-by-mvpc-com.p.rapidapi.com/';

const geoAPIHeaders = {
  'X-RapidAPI-Key': 'c29abdcf61msh8a83016bc2e84a1p136b72jsneefd4fa22fa6',
  'X-RapidAPI-Host': 'geo-services-by-mvpc-com.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: geoAPIHeaders });

export const geoApi = createApi({
  reducerPath: 'geoApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getCurrentCitiesLocation: builder.query({
      query: (city) =>
        createRequest(
          `cities/findcitiesfromtext?q=${city}&sort=population,desc&language=en`
        ),
    }),
  }),
});

export const { useGetCurrentCitiesLocationQuery } = geoApi;
