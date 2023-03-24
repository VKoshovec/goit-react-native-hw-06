import { createAsyncThunk } from "@reduxjs/toolkit";
import { app } from "../../Api/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export const fetchRegisterUser = createAsyncThunk('auth/fetchRegisterUser', async(data, thunkAPI) =>{
 
    try {

        const{ mail, password } = data;
        const result = await createUserWithEmailAndPassword( auth, mail, password);
        return result._tokenResponse;
    } catch (error) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchLoginUser = createAsyncThunk('auth/fetchLoginUser', async(data, thunkAPI) => {

    try {
        const{ mail, password } = data;
        const result = await signInWithEmailAndPassword( auth, mail, password);
        return result._tokenResponse;
    } catch (error) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async(_, thunkAPI) => {
    try {
        const result = await auth.currentUser;
        console.log(result)
        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchLogOutUser = createAsyncThunk('auth/fetchLogOutUser', async(_, thunkAPI) => {
    try {
        const result = await auth.signOut();
        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue(e.message);
    }
});