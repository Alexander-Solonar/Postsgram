import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '../../config';
import { setDoc, doc, updateDoc, getDocs, collection, arrayUnion } from 'firebase/firestore';

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

export const writeDataToFirestore = async (userId, login, email, photoURL = null) => {
  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, {
      displayName: login,
      email: email,
      photoURL: photoURL,
    });
    console.log('Document written with ID: ', userId);
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

// export const updateDataInFirestore = async (docId, data) => {
//   try {
//     const ref = doc(db, 'users', docId);
//     await updateDoc(ref, {
//       posts: arrayUnion(data),
//     });
//     console.log('document updated');
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getDataFromFirestore = async docId => {
//   try {
//     const snapshot = await getDocs(collection(db, 'users'));

//     if (!snapshot.empty) {
//       const arrayData = snapshot.docs.filter(doc => doc.id === docId);
//       return arrayData[0].data().posts;
//     }
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
