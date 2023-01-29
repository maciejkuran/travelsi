import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    postFormActive: false,
    countriesFilterWindowActive: false,
  },
  reducers: {
    setPostFormActive(state) {
      state.postFormActive = true;
    },
    hidePostForm(state) {
      state.postFormActive = false;
    },

    setCountriesFilterWindowActive(state) {
      state.countriesFilterWindowActive = true;
    },

    hideCountriesFilterWindow(state) {
      state.countriesFilterWindowActive = false;
    },
  },
});

export default uiSlice.reducer;

export const uiActions = uiSlice.actions;
