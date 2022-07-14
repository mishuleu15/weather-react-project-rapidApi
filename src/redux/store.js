import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './services/weatherData';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
});
