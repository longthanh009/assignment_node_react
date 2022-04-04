import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice"
import productsReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        categorys: categoryReducer,
        products : productsReducer,
        auth : authReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store