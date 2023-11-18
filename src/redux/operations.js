import { db } from '../../config';
import { setDoc, doc, updateDoc, getDocs, collection, arrayUnion } from 'firebase/firestore';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchAll', async (docId, thunkAPI) => {
  try {
    const response = await getDocs(collection(db, 'users'));

    if (!response.empty) {
      const arrayData = response.docs.filter(doc => doc.id === docId);
      const posts = arrayData[0].data().posts;
      return posts;
    }
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addPost = createAsyncThunk('posts/addPost', async ({ docId, data }, thunkAPI) => {
  try {
    const ref = doc(db, 'users', docId);
    await updateDoc(ref, {
      posts: arrayUnion(data),
    });
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateComments = createAsyncThunk(
  'posts/updateComments',
  async ({ postId, newComments }, thunkAPI) => {
    try {
      return { postId, newComments };
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
