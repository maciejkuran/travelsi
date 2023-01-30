import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    postsToRender: [],
  },
  reducers: {
    // addPost(state, action) {
    //   state.posts = [action.payload.post, ...state.posts];
    //   state.postsToRender = [action.payload.post, ...state.posts];
    // },

    getPosts(state, action) {
      state.posts = [...action.payload.posts];
      state.postsToRender = [...action.payload.posts];
    },
  },
});

export default postsSlice.reducer;

export const postsActions = postsSlice.actions;
