import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://bing-news-search1.p.rapidapi.com';

const cryptoNewsAPIHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': process.env.REACT_APP_BING_NEWS_API_KEY,
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
