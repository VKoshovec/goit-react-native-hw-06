import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore"; 
import { db } from "../../Api/firebase";

export const fetchAddComment = createAsyncThunk('posts/fetchAddPost', async(data, thunkAPI) => {
    try {
        const docRef = await addDoc(collection(db, 'Comment'), {
            ...data
         });
         return docRef;    
    } catch (error) {
        console.log(error);
    }
    
}); 

export const fetchGetCommentsByUid = createAsyncThunk('posts/fetchGetAllPosts', async(data, thunkAPI) => {
    try {
        const Docs = await getDocs(collection(db, 'posts'));
        const result = [];
        Docs.forEach((doc) => {
           result.push({ id: doc.id , ...doc.data()});
        });
        return result;
    } catch (error) {
        console.log(error);
    }
});