// src/features/reclamo/reclamoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reclamos: [],
  selectedReclamo: null,
};

const reclamoSlice = createSlice({
  name: 'reclamo',
  initialState,
  reducers: {
    setReclamos(state, action) {
      state.reclamos = action.payload;
    },
    selectReclamo(state, action) {
      state.selectedReclamo = action.payload;
    },
  },
});

export const { setReclamos, selectReclamo } = reclamoSlice.actions;

export default reclamoSlice.reducer;
