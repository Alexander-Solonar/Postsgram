import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayName: null,
  email: null,
  photoURL: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserProfile(state, action) {
      (state.displayName = action.payload.displayName),
        (state.email = action.payload.email),
        (state.photoURL = action.payload.photoURL);
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setUserProfile } = authSlice.actions;

// const b = {
//   _redirectEventId: undefined,
//   apiKey: 'AIzaSyDzIxpo5PoNoa37Xb67d1thTIwpJKfDbkE',
//   appName: '[DEFAULT]',
//   createdAt: '1699899578894',
//   displayName: 'Hbvggvv',
//   email: 'cvggtfg@hj.gh',
//   emailVerified: false,
//   isAnonymous: false,
//   lastLoginAt: '1699899578894',
//   phoneNumber: undefined,
//   photoURL: undefined,
//   providerData: [[Object]],
//   stsTokenManager: {
//     accessToken:
//       'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0OWU0N2ZiZGQ0ZWUyNDE0Nzk2ZDhlMDhjZWY2YjU1ZDA3MDRlNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcG9zdHNncmFtLWIwMmFlIiwiYXVkIjoicG9zdHNncmFtLWIwMmFlIiwiYXV0aF90aW1lIjoxNjk5ODk5NTc5LCJ1c2VyX2lkIjoiZmZrM3BiSHpIQlFXdmNXNFhTU2t6WHhvZmJtMSIsInN1YiI6ImZmazNwYkh6SEJRV3ZjVzRYU1Nrelh4b2ZibTEiLCJpYXQiOjE2OTk4OTk1NzksImV4cCI6MTY5OTkwMzE3OSwiZW1haWwiOiJjdmdndGZnQGhqLmdoIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImN2Z2d0ZmdAaGouZ2giXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.nQtJsfK6hJi5fGVh63ullqhWMJR5SDAq7PnRH4yBZHNmWuZBKpmzikwMg2MNTDhHk2IGD_2l1feKsCscmxxwxW0CS5OtlygZ_1XhUz2dpKFIRTRtdvLMrlGIyongSWxOWK-ZYOxOuoXnJTpRK_NVcH6BThqC1p3qdH7ycrLxiqKtOwXiCxk8qukotElRKUj_eU8_jA47HEj6aDtCy41xtlqbGIOGLSL4BWFmOE871Eaae-ghVIyR5-8n-toBwiLmaWvowMWURvj6toi74wmSV85qpmjiHMtIx9P6GiR_S_CupwbJ1evlnM3-u5x7noeVwjYWgcCQMeUhGHVlByqoOQ',
//     expirationTime: 1699903181284,
//     refreshToken:
//       'AMf-vBwNdyMZdWYALAy45_NYPGNN_Wy6XwwWb_i4HGhHVdEtko8q6TQeyLRMQqEqOkOiqcQsNJtWFzKaar3zbjBQ6RrrzT2V4tdx8CszLupMHCQVz0yV4QxCLWHROvtSuxFh51kE7uS3N_TAjKvPHb9P-FbAkxaCUkyaFSlZ75YQ9CdpIKaF0v5-eiwxdcq46B3ADwZhg_FXpFGN7ZNB3YVtg2BOt_6Yxw',
//   },
//   tenantId: undefined,
//   uid: 'ffk3pbHzHBQWvcW4XSSkzXxofbm1',
// };
