import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore"; 
import { db } from "../../Api/firebase";

export const fetchAddPost = createAsyncThunk('posts/fetchAddPost', async(data, thunkAPI) => {
    try {
        const docRef = await addDoc(collection(db, 'posts'), {
            ...data
         });
         console.log(docRef);
         return docRef;    
    } catch (error) {
        console.log(error);
    }
    
}) 

export const fetchGetAllPosts = createAsyncThunk('posts/fetchGetAllPosts', async(_, thunkAPI) => {
    try {
        const result = await getDocs(collection(db, 'posts'));
        result.forEach((doc) => {
            console.log(JSON.parse(doc.data()));
        });
        return;
    } catch (error) {
        console.log(error);
    }
});
