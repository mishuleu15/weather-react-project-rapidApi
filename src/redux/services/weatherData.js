import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/';

const weatherAPIHeaders = {
  'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_BIT_API_KEY,
  'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: weatherAPIHeaders });

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
    get14daysForecast: builder.query({
      query: ({ lng, lat }) =>
        createRequest(`forecast/daily?lon=${lng}&lat=${lat}`),
    }),
  }),
});

export const {
  useGetCurrentWeatherLocationQuery,
  useGetSevereWeatherAlertsQuery,
  useGet48HourForecastQuery,
  useGet14daysForecastQuery,
} = weatherApi;
