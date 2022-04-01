import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, list, remove, update } from "../api/categoryApi";

export const getCategorys = createAsyncThunk("categorys/getCategorys",
    async () => {
        const { data } = await list()
        return data;
    });
export const addCategory = createAsyncThunk("categorys/addCategory",
    async (params, thunkAPI) => {
        const { data } = await create(params)
        return data;
    });
export const removeCategory = createAsyncThunk("categorys/removeCategory",
    async (params, thunkAPI) => {
        const { data } = await remove(params);
        return data;
    });
export const updateCategory = createAsyncThunk("categorys/updateCategory",
    async (params, thunkAPI) => {
        const { data } = await update(params);
        return data;
    });
const categorySlice = createSlice({
    name: "categorys",
    initialState: {
        value: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [getCategorys.pending]: (state, action) => {
            state.loading = true;
        },
        [getCategorys.fulfilled]: (state, action) => {
            (state.loading = false),
                (state.value = action.payload);
        },
        [getCategorys.rejected]: (state, action) => {
            state.status = action.error;
        },
        [addCategory.fulfilled]: (state, action) => {
            state.value.push(action.payload);
        },
        [removeCategory.fulfilled]: (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        },
        [updateCategory.fulfilled]: (state, action) => {
            state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item)
        },
    },
})
export default categorySlice.reducer