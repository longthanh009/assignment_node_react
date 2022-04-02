import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice"
import productsReducer from "../features/product/productSlice";

const store = configureStore({
    reducer: {
        categorys: categoryReducer,
        products : productsReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>
export default store