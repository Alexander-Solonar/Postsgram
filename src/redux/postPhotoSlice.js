import { createSlice } from '@reduxjs/toolkit';

const postPhotoSlice = createSlice({
  name: 'postPhoto',
  initialState: '',
  reducers: {
    setPostPhoto(state, action) {
      return (state = action.payload);
    },
  },
});

export const postPhotoReducer = postPhotoSlice.reducer;
export const { setPostPhoto } = postPhotoSlice.actions;
