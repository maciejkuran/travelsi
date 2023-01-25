import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setAuthenticated(state) {
      state.isAuthenticated = true;
    },
    setNotAuthenticated(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;

export const authSliceActions = authSlice.actions;
