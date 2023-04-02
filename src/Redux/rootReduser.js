import { combineReducers } from "redux";
import authSlise from "./auth/authSlice"
import postsSlise from "./posts/postsSlice";
import commentsSlice from "./comments/commentsSlice";

const combineReducer = combineReducers ({
    auth: authSlise.reducer,
    posts: postsSlise.reducer,
    comments: commentsSlice.reducer,
});

export default combineReducer;