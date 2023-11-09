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
import { photoUrlReducer } from './photoUrlSlice';

const persistConfig = {
  key: 'posts',
  storage: AsyncStorage,
};

const userPosts = persistReducer(persistConfig, postsReducer);

const store = configureStore({
  reducer: {
    posts: userPosts,
    newPhoto: photoUrlReducer,
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
