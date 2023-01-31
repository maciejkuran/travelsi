import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    postFormActive: false,
    countriesFilterWindowActive: false,
    notificationStatus: '',
    notificationType: '',
    notificationMessage: '',
  },
  reducers: {
    setPostFormActive(state) {
      state.postFormActive = true;
      state.notificationStatus = '';
      state.notificationMessage = '';
      state.notificationType = '';
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

    setNotification(state, action) {
      state.notificationStatus = action.payload.status;
      state.notificationMessage = action.payload.message;
      state.notificationType = action.payload.type;
    },
  },
});

export default uiSlice.reducer;

export const uiActions = uiSlice.actions;
