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
      query: ({ lng, lat }) => createRequest(`current?lon=${lng}&lat=${lat}`),
    }),
    getSevereWeatherAlerts: builder.query({
      query: ({ lng, lat }) => createRequest(`alerts?lon=${lng}&lat=${lat}`),
    }),
    get48HourForecast: builder.query({
      query: ({ lng, lat }) =>
        createRequest(`forecast/hourly?lon=${lng}&lat=${lat}&hours=48`),
    }),
  }),
});

export const {
  useGetCurrentWeatherLocationQuery,
  useGetSevereWeatherAlertsQuery,
  useGet48HourForecastQuery,
} = weatherApi;
