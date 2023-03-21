import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { app } from "../../Api/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const authLogin = createAction("auth/login");
export const authLogout = createAction("auth/logout");

export const fetchRegisterUser = createAsyncThunk('auth/fetchRegisterUser', async(data, thunkAPI) =>{
 
    const auth = getAuth(app);

    try {
        const{ mail, password } = data;
        console.log(`${mail}`, `${password}`);
        const result = await createUserWithEmailAndPassword( auth, `${mail}`, `${password}`);
        console.log(result);
        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchLoginUser = createAsyncThunk('auth/fetchLoginUser', async(data, thunkAPI) => {

    const auth = getAuth(app);

    try {
        const{ mail, password } = data;
        const result = await signInWithEmailAndPassword( auth, `${mail}`, `${password}`);
        console.log(result);
        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue(e.message);
    }
})