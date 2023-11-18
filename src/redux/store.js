import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { postsReducer } from './postsSlice';
import { authReducer } from './authSlice';
import { postPhotoReducer } from './postPhotoSlice';

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const user = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: user,
    posts: postsReducer,
    postPhoto: postPhotoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export default { store, persistor };
