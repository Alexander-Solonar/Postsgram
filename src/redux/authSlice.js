import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayName: null,
  email: null,
  photoURL: null,
  uid: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserProfile(state, action) {
      (state.displayName = action.payload.displayName),
        (state.email = action.payload.email),
        (state.photoURL = action.payload.photoURL),
        (state.uid = action.payload.uid);
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setUserProfile } = authSlice.actions;
