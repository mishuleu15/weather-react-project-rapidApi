import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://bing-news-search1.p.rapidapi.com';

const cryptoNewsAPIHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': 'c29abdcf61msh8a83016bc2e84a1p136b72jsneefd4fa22fa6',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoNewsAPIHeaders });

export const weatherNewsApi = createApi({
  reducerPath: 'weatherNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getWeatherNews: builder.query({
      query: ({ count }) =>
        createRequest(
          `/news/search?q=Weather&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetWeatherNewsQuery } = weatherNewsApi;
