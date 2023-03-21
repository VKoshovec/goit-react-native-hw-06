import { combineReducers } from "redux";
import authSlise from "./auth/authSlice"

const combineReducer = combineReducers ({
    auth: authSlise.reducer,
});

export default combineReducer;