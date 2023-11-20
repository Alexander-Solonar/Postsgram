import { db } from '../../config';
import { doc, updateDoc, getDocs, collection, arrayUnion, getDoc } from 'firebase/firestore';
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
  async ({ docId, postId, newComments }, thunkAPI) => {
    try {
      const ref = doc(db, 'users', docId);
      const docSnap = await getDoc(ref);
      const currentPosts = docSnap.data()?.posts || [];
      const postIndex = currentPosts.findIndex(post => post.id === postId);
      const updatedPosts = [...currentPosts];
      updatedPosts[postIndex] = {
        ...updatedPosts[postIndex],
        comments: [...updatedPosts[postIndex].comments, newComments],
      };
      await updateDoc(ref, { posts: updatedPosts });
      return { postId, newComments };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
