import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '../../config';
import { setDoc, doc } from 'firebase/firestore';

export const registerDB = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

export const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged(auth, user => {
    onChange(user);
  });
};

export const loginDB = async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async update => {
  const user = auth.currentUser;

  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};

export const Logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
};

export const writeDataToFirestore = async (userId, login, email, photoURL) => {
  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, {
      displayName: login,
      email: email,
      photoURL: photoURL,
      posts: [],
    });
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};
