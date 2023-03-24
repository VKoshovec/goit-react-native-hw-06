import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore"; 

export const fetchAddPost = createAsyncThunk('posts/fetchAddPost', async(data, thunkAPI) => {
    const docRef = await addDoc(collection(db, 'posts'), {
       ...data
    });
    return docRef;
}) 