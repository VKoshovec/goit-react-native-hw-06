import store from "../store";

export const selectUser = store => store.auth.user;
export const selectIsAuth = store => store.auth.isAuth;
export const selectIsLoading = store => store.auth.loading;