import { combineReducers } from "redux";
import reducer from "./auth/authSlice"

const combineReducer = combineReducers ({
    auth: reducer,
});

export default combineReducer;