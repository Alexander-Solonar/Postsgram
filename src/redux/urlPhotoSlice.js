import { createSlice } from '@reduxjs/toolkit';

const urlPhotoSlice = createSlice({
  name: 'urlPhoto',
  initialState: '',
  reducers: {
    setUrlPhoto(state, action) {
      return (state = action.payload);
    },
  },
});

export const urlPhotoReducer = urlPhotoSlice.reducer;
export const { setUrlPhoto } = urlPhotoSlice.actions;
