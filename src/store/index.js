import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import uiSlice from './slices/ui-slice';
import postsSlice from './slices/posts-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
    posts: postsSlice,
  },
});

export default store;
