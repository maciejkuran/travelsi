import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import uiSlice from './slices/ui-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
  },
});

export default store;
