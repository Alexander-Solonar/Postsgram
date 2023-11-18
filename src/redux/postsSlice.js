import { createSlice } from '@reduxjs/toolkit';
import { addPost, fetchPosts, updateComments } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.isLoading = true;
  state.error = action.payload;
};
const handleFulfilledFetch = (state, action) => {
  state.isLoading = true;
  state.error = null;
  state.items = action.payload || [];
};

const handleFulfilledAdd = (state, action) => {
  state.error = null;
  state.items.push(action.payload);
};

const handleFulfilledUpdateComments = (state, action) => {
  const { postId, newComments } = action.payload;
  const postIndex = state.items.findIndex(post => post.id === postId);

  if (postIndex !== -1) {
    state.items[postIndex].comments.push(newComments);
  }
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, handlePending)
      .addCase(fetchPosts.fulfilled, handleFulfilledFetch)
      .addCase(fetchPosts.rejected, handleRejected)
      .addCase(addPost.fulfilled, handleFulfilledAdd)
      .addCase(updateComments.fulfilled, handleFulfilledUpdateComments);
  },
});

export const postsReducer = postsSlice.reducer;
