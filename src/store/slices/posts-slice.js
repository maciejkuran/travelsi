import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    postsToRender: [],
    tags: [
      { name: 'sighseeing 🏛️', id: '1' },
      { name: 'sport ⚽', id: '2' },
      { name: 'food 🥘', id: '3' },
      { name: 'party 🎉', id: '4' },
    ],
  },
  reducers: {
    addPost(state, action) {
      state.posts = [action.payload.post, ...state.posts];
      state.postsToRender = [action.payload.post, ...state.postsToRender];
    },

    getPosts(state, action) {
      state.posts = [...action.payload.posts];
      state.postsToRender = [...action.payload.posts];
    },
  },
});

export default postsSlice.reducer;

export const postsActions = postsSlice.actions;
