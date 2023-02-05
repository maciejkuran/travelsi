import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    postsToRender: [],
    tags: [
      { name: 'sightseeing 🏛️', id: '1' },
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

    filterPostsByTag(state, action) {
      const posts = [...state.posts];
      state.postsToRender = posts.filter(post => post.tag === action.payload.tag);
    },

    renderAllPosts(state) {
      state.postsToRender = [...state.posts];
    },

    filterPostsByCountry(state, action) {
      const posts = [...state.posts];
      state.postsToRender = posts.filter(post => post.country === action.payload.country);
    },

    updateSinglePost(state, action) {
      const postID = action.payload.id;

      //returning updated state for 'posts'
      const posts = [...state.posts];
      const index = posts.findIndex(post => post.id === postID);
      posts.splice(index, 1, action.payload.post);

      state.posts = posts;

      //returning updated state for 'postsToRender'
      const postsToRender = [...state.postsToRender];
      const index2 = postsToRender.findIndex(post => post.id === postID);
      postsToRender.splice(index2, 1, action.payload.post);

      state.postsToRender = postsToRender;
    },
  },
});

export default postsSlice.reducer;

export const postsActions = postsSlice.actions;
