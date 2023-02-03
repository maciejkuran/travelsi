import { createSlice } from '@reduxjs/toolkit';
import { firebaseAuth } from '../../config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userData: {
      email: '',
      uid: '',
    },
  },
  reducers: {
    isAuthenticated(state, action) {
      state.isAuthenticated = true;
      state.userData.email = action.payload.email;
      state.userData.uid = action.payload.uid;
    },

    isNotAuthenticated(state) {
      state.isAuthenticated = false;
      state.userData.email = '';
      state.userData.uid = '';
    },
  },
});

export default authSlice.reducer;

export const authSliceActions = authSlice.actions;
