import { createSlice } from '@reduxjs/toolkit';
import defaultPosts from '../data/dataPosts.json';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [...defaultPosts],
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { addPost } = postsSlice.actions;
