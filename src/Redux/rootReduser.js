import { combineReducers } from "redux";
import authSlise from "./auth/authSlice"
import postsSlise from "./posts/postsSlice";

const combineReducer = combineReducers ({
    auth: authSlise.reducer,
    posts: postsSlise.reducer,
});

export default combineReducer;