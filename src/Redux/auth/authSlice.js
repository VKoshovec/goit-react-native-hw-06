import { createSlice } from "@reduxjs/toolkit";
import { authLogin, authLogout } from "./authActions";


const authInit = {
    user: '',
    email: '',
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
    }
});

// export default authSlise.reducer;
export default authSlise;
