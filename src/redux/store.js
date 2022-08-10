import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './services/weatherData';
import { weatherNewsApi } from './services/weatherNews';
import { geoApi } from './services/getCities';
import getCoordsReducer from './services/getCoords';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [weatherNewsApi.reducerPath]: weatherNewsApi.reducer,
    [geoApi.reducerPath]: geoApi.reducer,
    setCoords: getCoordsReducer,
  },
});
