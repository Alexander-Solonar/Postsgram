import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDzIxpo5PoNoa37Xb67d1thTIwpJKfDbkE',
  authDomain: 'postsgram-b02ae.firebaseapp.com',
  databaseURL: 'https://postsgram-b02ae-default-rtdb.firebaseio.com/',
  projectId: 'postsgram-b02ae',
  storageBucket: 'postsgram-b02ae.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:823057902825:android:0d30f359c6809ea9ea5478',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
