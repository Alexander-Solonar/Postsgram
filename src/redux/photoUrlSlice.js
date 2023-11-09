import { createSlice } from '@reduxjs/toolkit';

const photoUrlSlice = createSlice({
  name: 'photoUrl',
  initialState: '',
  reducers: {
    setPhotoUrl(state, action) {
      return (state = action.payload);
    },
  },
});

export const photoUrlReducer = photoUrlSlice.reducer;
export const { setPhotoUrl } = photoUrlSlice.actions;
