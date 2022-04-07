import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice"
import productsReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist"
import cartReducer from "../features/cart/cartSilce";

const rootReducer = combineReducers({
    categorys: categoryReducer,
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
});
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "cart"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE]
            }
        })
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store