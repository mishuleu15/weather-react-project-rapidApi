import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/';

const cryptoAPIHeaders = {
  'X-RapidAPI-Key': 'c29abdcf61msh8a83016bc2e84a1p136b72jsneefd4fa22fa6',
  'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders });

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getCurrentWeatherLocation: builder.query({
      query: ({ lon, lat }) => createRequest(`current?lon=${lon}&lat=${lat}`),
    }),
  }),
});

export const { useGetCurrentWeatherLocationQuery } = weatherApi;
