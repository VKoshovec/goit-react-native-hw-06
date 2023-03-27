import { createSlice } from "@reduxjs/toolkit";
import { fetchAddPost, fetchGetAllPosts } from "./postsOperations";

const postsInit = {
    // photo: '',
    // title: '',
    // location: {},
    posts: [],
    error: null,
    loading: false,
};

const postsSlise = createSlice({
    name: 'posts',
    initialState: postsInit,
    extraReducers: builder => {
        builder
        // .addCase(fetchAddPost.pending, (store) => {
        //     store.error = null;
        //     store.loading = true;
        // })
        // .addCase(fetchAddPost.fulfilled, (store, { payload }) => {
        //     const { photo, title, location } = payload;
        //     store.photo = photo;
        //     store.title = title;
        //     store.location = location;
        //     store.error = null;
        //     store.loading = false;
        // })
        // .addCase(fetchAddPost.rejected, (store, { payload }) => {
        //     store.error = payload;
        //     store.loading = false;
        // })
        .addCase(fetchGetAllPosts.pending, (store) => {
            store.error = null;
            store.loading = true;
        })
        .addCase(fetchGetAllPosts.fulfilled, (store, { payload }) => {
            // const { photo, title, location } = payload;
            // store.photo = photo;
            // store.title = title;
            // store.location = location;
            store.posts = payload;
            store.error = null;
            store.loading = false;
        })
        .addCase(fetchGetAllPosts.rejected, (store, { payload }) => {
            store.error = payload;
            store.loading = false;
        })
    }
});

export default postsSlise;