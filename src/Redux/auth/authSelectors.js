import store from "../store";

export const selectStore = store => store;
export const selectIsAuth = store => store.auth.isAuth;
export const selectIsLoading = store => store.auth.loading;