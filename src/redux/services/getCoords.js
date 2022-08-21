import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lng: -73.935242,
  lat: 40.73061,
  city: '',
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
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setLng, setLat, setCity } = getCoordsSlice.actions;

export default getCoordsSlice.reducer;
