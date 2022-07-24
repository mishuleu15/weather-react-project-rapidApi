import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lng: -73.935242,
  lat: 40.73061,
};

export const getCoordsSlice = createSlice({
  name: 'coords',
  initialState,
  reducers: {
    setLng: (state, action) => {
      state.lng = action.payload;
    },
    setLat: (state, action) => {
      state.lat = action.payload;
    },
  },
});

export const { setLng, setLat } = getCoordsSlice.actions;

export default getCoordsSlice.reducer;
