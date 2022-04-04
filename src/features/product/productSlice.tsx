import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, likeNamePro, list, productCate, read, remove, update } from "../../api/productApi"
import { productType } from "../../types/productType";

export const fetchProducts = createAsyncThunk(
    "products/getProducts", async () => {
        const { data } = await list();
        return data
    });
export const createProduct = createAsyncThunk(
    "products/createProducts", async (params: productType) => {
        const { data } = await create(params)
        return data;
    });
export const readProduct = createAsyncThunk(
    "products/readProduct", async (params: string) => {
        const { data } = await read(params)
        return data;
    });
export const removeProduct = createAsyncThunk(
    "products/removeProduct", async (params: string) => {
        const { data } = await remove(params)
        return data
    });
export const updateProduct = createAsyncThunk(
    "products/updateProduct", async (params: productType) => {
        const { data } = await update(params)
        return data;
    });
export const filterProduct = createAsyncThunk(
    "products/filterProducts", async (category: string) => {
        const { data } = await productCate(category)
        return data
    });
export const filterProName = createAsyncThunk(
    "products/filterProducts", async (keyword: string) => {
        const { data } = await likeNamePro(keyword)
        return data
    });
const productSlice = createSlice({
    name: "products",
    initialState: {
        value: [],
        loading: true,
    },
    reducers: {
    },
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.loading = true
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
        [createProduct.fulfilled]: (state, action) => {
            state.value.push(action.payload)
        },
        [removeProduct.fulfilled]: (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        },
        [updateProduct.fulfilled]: (state, action) => {
            state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item)
        },
        [filterProduct.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
        [filterProName.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
    }
});
export default productSlice.reducer