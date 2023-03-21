import { createSlice } from "@reduxjs/toolkit";
import { authLogin, authLogout, fetchRegisterUser, fetchLoginUser } from "./authOperations";


const authInit = {
    user: '',
    email: '',
    idToken: '',
    isAuth: false,
    error: null,
    loading: false,
};

const authSlise = createSlice({
    name: 'auth',
    initialState: authInit,
    extraReducers: builder => {
        builder
        .addCase(authLogin.type, (store) => {
            store.error = null;
            store.loading = true;
            store.isAuth = true;
        })
        .addCase(authLogout.type, (store) => {
            store.error = null;
            store.loading = true;
            store.isAuth = false;
        })
        .addCase(fetchRegisterUser.fulfilled, (store, { payload }) => {
            const {idToken, email} = payload;
            store.user = email;
            store.idToken = idToken;
            store.error = null;
            store.loading = true;
            store.isAuth = true;
        })
        .addCase(fetchLoginUser.fulfilled, (store, { payload }) => {
            const {idToken, email} = payload;
            store.user = email;
            store.idToken = idToken;
            store.error = null;
            store.loading = true;
            store.isAuth = true;
        })
    }
});

// export default authSlise.reducer;
export default authSlise;
