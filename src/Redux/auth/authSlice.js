import { createSlice } from "@reduxjs/toolkit";


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
        .addCase('auth\login', (store) => {
            store.error = null;
            store.loading = true;
            store.isAuth = true;
        })
        .addCase('auth\logout', (store) => {
            store.error = null;
            store.loading = true;
            store.isAuth = false;
        })
    }
});

// export default authSlise.reducer;
export default { reducer, actions } = authSlise;
