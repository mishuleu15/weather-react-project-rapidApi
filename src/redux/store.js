import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './services/weatherData';
import { weatherNewsApi } from './services/weatherNews';

import getCoordsReducer from './services/getCoords';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [weatherNewsApi.reducerPath]: weatherNewsApi.reducer,

    setCoords: getCoordsReducer,
  },
});
