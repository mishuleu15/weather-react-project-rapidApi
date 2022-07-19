import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './services/weatherData';
import { weatherNewsApi } from './services/weatherNews';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [weatherNewsApi.reducerPath]: weatherNewsApi.reducer,
  },
});
